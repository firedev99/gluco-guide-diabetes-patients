import {
  FocusEvent,
  ChangeEvent,
  useCallback,
  useEffect,
  useState,
  FormEvent,
} from "react"

type CustomHookFormErrorType = {
  [key: string]: string | null
}

type CustomHookFormType<T> = {
  formValues: T
  onSubmit: (val: T) => Promise<any> | void
  validationFunc: (val: T) => CustomHookFormErrorType | any
}

export function useForm<T>({
  formValues,
  validationFunc,
  onSubmit,
}: CustomHookFormType<T>) {
  const [values, setValues] = useState<T>(formValues)
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState<CustomHookFormErrorType>({})
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  useEffect(() => {
    const validationErrors = validationFunc(values)
    const touchedFields = Object.keys(touched)
    // create a new string of arrays w the validation errors
    // then filter thoese fields that has been touched
    const touchedErrors = Object.keys(validationErrors)
      .filter((field) => touchedFields.includes(field))
      .reduce<CustomHookFormErrorType>((acc, field) => {
        // create the specific error if not exists
        if (!acc[field]) {
          acc[field] = validationErrors[field]
        }
        return acc
      }, {})

    setErrors((err) => ({ ...err, ...touchedErrors }))
    // eslint-disable-next-line
  }, [touched])

  useEffect(() => {
    // check if the error object is empty
    const errorsCrossChecked = Object.values(errors).every(
      (val) => val === null
    )
    const timerID = setTimeout(() => {
      if (isSubmitting && errorsCrossChecked) {
        onSubmit(values)
      }
      // setIsSubmitting(false)
    }, 2000)

    return () => {
      clearTimeout(timerID)
    }
    //eslint-disable-next-line
  }, [isSubmitting])

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { type, name, checked, value } = e.target
    const _value = type === "checkbox" ? checked : value
    setValues((val) => ({ ...val, [name]: _value }))
  }, [])

  const handleBlur = useCallback((e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target
    setTouched((field) => ({ ...field, [name]: true }))
  }, [])

  function handleSubmit() {
    if (validationFunc) {
      const validationErrors = validationFunc(values)
      setErrors((err) => ({ ...err, ...validationErrors }))
    }
    setIsSubmitting(true)
  }

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // store errors
    const validationErrors = validationFunc(values)
    setErrors((err) => ({ ...err, ...validationErrors }))
    // proceed submission
    setIsSubmitting(true)
  }

  return {
    values,
    setValues,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleFormSubmit,
    isSubmitting,
    setIsSubmitting,
  }
}

// usage guide
// useForm hook
// const {} = useForm({ formValues: {}, onSubmit: (val) => console.log(val), validationFunc: checkCredentials })
// optimize input renders
// wrap the input component with memo() inexpensive performace, ps -> callback function is for caching so using a callback function w/o memo function is useless
// const CustomInput = memo(function CustomInput () {
//   return <input onChange={handleChange} onBlur={handleBlur} />
// })
