"use client"

import React, { useState } from "react"
import {
  Button,
  Checkbox,
  Icon,
  Modal,
  PopoverModal,
  RadioInput,
} from "@/components"
import {
  allergyOpts,
  cookingPreferenceOpts,
  cusineOpts,
  diertaryPreferenceOpts,
  foodAvoidanceOpts,
  generalPurposeOpt,
  healthGoalOpts,
  ingredientPreferenceOpts,
  mealPerDayOpts,
} from "@/lib/dummy/preferences"

type OptionProps = {
  mealPerDay: string
  generalPurpose: string[]
  healthGoals: string[]
  diertaryPreferences: string[]
  foodAllergies: string[]
  foodAvoidanecs: string[]
  ingredientPreferences: string[]
  cookingPreferences: string[]
  cusinePreferences: string[]
}

export default function Preferences() {
  const [active, setActive] = useState<boolean>(false)
  const [values, setValues] = useState<OptionProps>({
    mealPerDay: "3-4 times",
    generalPurpose: ["Regular Meals"],
    healthGoals: ["Weight Gain", "Diabetes Management"],
    diertaryPreferences: [
      "Omnivore",
      "Low Glycemic Index",
      "High Fiber",
      "Low-Carbs",
    ],
    foodAllergies: [],
    foodAvoidanecs: ["Sugar", "Artifical Sweeteners"],
    ingredientPreferences: [
      "Fruits",
      "Vegetables",
      "Proteins",
      "Grains",
      "Herbs and Spices",
    ],
    cookingPreferences: ["Quick and Easy", "Baking", "Grilling", "Stir-Fry"],
    cusinePreferences: ["All"],
  })

  function handleModalClose() {
    setActive(false)
  }

  function handleOpenModal() {
    setActive(true)
  }

  // handle meal amount selection
  function handleMealAmount(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => ({
      ...prev,
      mealPerDay: e.target.value,
    }))
  }

  // handle general purpose selection
  function handleGeneralPurposes(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => {
      const value = e.target.value
      const exist = prev.generalPurpose.includes(value)
      const newPurposes = exist
        ? prev.generalPurpose.filter((item) => item !== value)
        : prev.generalPurpose.concat(value)
      return { ...prev, generalPurpose: newPurposes }
    })
  }

  // handle dietary preference selection
  function handleDietaryPreferences(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => {
      const value = e.target.value
      const exist = prev.diertaryPreferences.includes(value)
      const newPreferences = exist
        ? prev.diertaryPreferences.filter((item) => item !== value)
        : prev.diertaryPreferences.concat(value)
      return { ...prev, diertaryPreferences: newPreferences }
    })
  }

  // handle health goals selection
  function handleHealthGoals(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => {
      const value = e.target.value
      const exist = prev.healthGoals.includes(value)
      const newGoals = exist
        ? prev.healthGoals.filter((item) => item !== value)
        : prev.healthGoals.concat(value)
      return { ...prev, healthGoals: newGoals }
    })
  }

  // handle food allergies selection
  function handleFoodAllergies(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => {
      const value = e.target.value
      const exist = prev.foodAllergies.includes(value)
      const newAllergies = exist
        ? prev.foodAllergies.filter((item) => item !== value)
        : prev.foodAllergies.concat(value)
      return { ...prev, foodAllergies: newAllergies }
    })
  }

  // handle food avoidance selection
  function handleFoodAvoidances(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => {
      const value = e.target.value
      const exist = prev.foodAvoidanecs.includes(value)
      const newAvoidances = exist
        ? prev.foodAvoidanecs.filter((item) => item !== value)
        : prev.foodAvoidanecs.concat(value)
      return { ...prev, foodAvoidanecs: newAvoidances }
    })
  }

  // handle ingredient preferences selection
  function handleIngredients(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => {
      const value = e.target.value
      const exist = prev.ingredientPreferences.includes(value)
      const newIngredients = exist
        ? prev.ingredientPreferences.filter((item) => item !== value)
        : prev.ingredientPreferences.concat(value)
      return { ...prev, ingredientPreferences: newIngredients }
    })
  }

  // handle cooking preferences selection
  function handleCookingPref(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => {
      const value = e.target.value
      const exist = prev.cookingPreferences.includes(value)
      const newCookingPref = exist
        ? prev.cookingPreferences.filter((item) => item !== value)
        : prev.cookingPreferences.concat(value)
      return { ...prev, cookingPreferences: newCookingPref }
    })
  }

  // handle cusine preferences selection
  function handleCusinePref(e: React.ChangeEvent<HTMLInputElement>) {
    setValues((prev) => {
      const value = e.target.value
      const exist = prev.cusinePreferences.includes(value)
      const newCusines = exist
        ? prev.cusinePreferences.filter((item) => item !== value)
        : prev.cusinePreferences.concat(value)
      return { ...prev, cusinePreferences: newCusines }
    })
  }

  return (
    <React.Fragment>
      <Modal
        className="h-full sm:h-3/4 w-full max-w-[720px]"
        open={active}
        handler={handleModalClose}
        secondaryBtn={<Button>Save changes</Button>}
      >
        {/*  */}
        <div className="px-4 pt-2 pb-4 space-y-5 h-full overflow-x-hidden overflow-y-auto">
          {/* meal per day */}
          <fieldset>
            <legend className="text-base md:text-lg font-bold">
              {mealPerDayOpts.title}
            </legend>
            {/* meal per day options */}
            <div className="flex flex-col mt-1">
              {mealPerDayOpts.data.map(({ name, value }, idx) => (
                <RadioInput
                  key={`mealPerDayOpts-${idx}`}
                  name={name}
                  value={value}
                  active={values.mealPerDay === value}
                  onChange={handleMealAmount}
                />
              ))}
            </div>
          </fieldset>

          {/* general purposes */}
          <fieldset>
            {/* general purpose header */}
            <div className="flex items-center">
              <legend className="text-base md:text-lg font-bold">
                {generalPurposeOpt.title}
              </legend>
              <PopoverModal
                containerClass="mt-0 md:mt-1 ml-1"
                content={<Icon name="information" className="size-4" />}
              >
                {generalPurposeOpt.data.map(({ value, info }, idx) => (
                  <div className="w-full text-start p-2" key={`gp-i-${idx}`}>
                    <h5 className="font-semibold  text-sm opacity-97">
                      {value}
                    </h5>
                    <p className="text-xs font-medium opacity-90">{info}</p>
                  </div>
                ))}
              </PopoverModal>
            </div>

            {/* general purpose options */}
            <div className="flex flex-wrap mt-2 gap-2">
              {generalPurposeOpt.data.map(({ name, value }, idx) => (
                <Checkbox
                  key={`genPurposesOpts-${idx}`}
                  name={name}
                  value={value}
                  active={values.generalPurpose.includes(value)}
                  onChange={handleGeneralPurposes}
                />
              ))}
            </div>
          </fieldset>

          {/* dietary preferences */}
          <fieldset>
            {/* dietary preferences header */}
            <div className="flex items-center">
              <legend className="text-base md:text-lg font-bold">
                {diertaryPreferenceOpts.title}
              </legend>
              <PopoverModal
                containerClass="mt-0 md:mt-1 ml-1"
                modalClass="size-44"
                content={<Icon name="information" className="size-4" />}
              >
                <div className="w-full text-start p-2">
                  <h5 className="font-semibold  text-sm opacity-97">
                    {diertaryPreferenceOpts.title}
                  </h5>
                  <p className="text-xs font-medium opacity-90">
                    Dietary preferences allow individuals to tailor their diet
                    according to their health needs, ethical beliefs, and
                    personal tastes. By accommodating these preferences, one can
                    enhance nutritional intake, avoid allergens, and support
                    overall well-being. This customization promotes adherence to
                    dietary plans and improves long-term health outcomes.
                  </p>
                </div>
              </PopoverModal>
            </div>

            {/* diertary preferences options */}
            <div className="flex flex-wrap mt-2 gap-2">
              {diertaryPreferenceOpts.data.map(({ name, value }, idx) => (
                <Checkbox
                  key={`dietaryPreOpt-${idx}`}
                  name={name}
                  value={value}
                  active={values.diertaryPreferences.includes(value)}
                  onChange={handleDietaryPreferences}
                />
              ))}
            </div>
          </fieldset>

          {/* health goals */}
          <fieldset>
            {/* health goals header */}
            <div className="flex items-center">
              <legend className="text-base md:text-lg font-bold">
                {healthGoalOpts.title}
              </legend>
              <PopoverModal
                containerClass="mt-0 md:mt-1 ml-1"
                content={<Icon name="information" className="size-4" />}
              >
                <div className="w-full text-start p-2">
                  <h5 className="font-semibold  text-sm opacity-97">
                    {healthGoalOpts.title}
                  </h5>
                  <p className="text-xs font-medium opacity-90">
                    Health goals provide a clear direction for individuals to
                    improve their well-being and achieve specific outcomes, such
                    as weight loss, muscle gain, or improved digestion. Setting
                    these goals helps in creating tailored diet and exercise
                    plans, ensuring focused and effective efforts towards better
                    health. This targeted approach can lead to more successful
                    and sustainable lifestyle changes.
                  </p>
                </div>
              </PopoverModal>
            </div>

            {/* health goal options */}
            <div className="flex flex-wrap mt-2 gap-2">
              {healthGoalOpts.data.map(({ name, value }, idx) => (
                <Checkbox
                  key={`healthGoalOpt-${idx}`}
                  name={name}
                  value={value}
                  active={values.healthGoals.includes(value)}
                  onChange={handleHealthGoals}
                />
              ))}
            </div>
          </fieldset>

          {/* food allergies */}
          <fieldset>
            <legend className="text-base md:text-lg font-bold">
              {allergyOpts.title}
            </legend>

            {/* food allergy options */}
            <div className="flex flex-wrap mt-2 gap-2">
              {allergyOpts.data.map(({ name, value }, idx) => (
                <Checkbox
                  key={`alergyOpt-${idx}`}
                  name={name}
                  value={value}
                  active={values.foodAllergies.includes(value)}
                  onChange={handleFoodAllergies}
                />
              ))}
            </div>
          </fieldset>

          {/* food avoidances */}
          <fieldset>
            <legend className="text-base md:text-lg font-bold">
              {foodAvoidanceOpts.title}
            </legend>

            {/* food avoidance options */}
            <div className="flex flex-wrap mt-2 gap-2">
              {foodAvoidanceOpts.data.map(({ name, value }, idx) => (
                <Checkbox
                  key={`avoidancesOpt-${idx}`}
                  name={name}
                  value={value}
                  active={values.foodAvoidanecs.includes(value)}
                  onChange={handleFoodAvoidances}
                />
              ))}
            </div>
          </fieldset>

          {/* preferred ingredients */}
          <fieldset>
            <legend className="text-base md:text-lg font-bold">
              {ingredientPreferenceOpts.title}
            </legend>

            {/* preferred ingredient options */}
            <div className="flex flex-wrap mt-2 gap-2">
              {ingredientPreferenceOpts.data.map(({ name, value }, idx) => (
                <Checkbox
                  key={`piOpt-${idx}`}
                  name={name}
                  value={value}
                  active={values.ingredientPreferences.includes(value)}
                  onChange={handleIngredients}
                />
              ))}
            </div>
          </fieldset>

          {/* cooking preferences */}
          <fieldset>
            <legend className="text-base md:text-lg font-bold">
              {cookingPreferenceOpts.title}
            </legend>

            {/* cooking preference options */}
            <div className="flex flex-wrap mt-2 gap-2">
              {cookingPreferenceOpts.data.map(({ name, value }, idx) => (
                <Checkbox
                  key={`ciOpt-${idx}`}
                  name={name}
                  value={value}
                  active={values.cookingPreferences.includes(value)}
                  onChange={handleCookingPref}
                />
              ))}
            </div>
          </fieldset>

          {/* cuisine preferences */}
          <fieldset>
            <legend className="text-base md:text-lg font-bold">
              {cusineOpts.title}
            </legend>

            {/* cooking preference options */}
            <div className="flex flex-wrap mt-2 gap-2">
              {cusineOpts.data.map(({ name, value }, idx) => (
                <Checkbox
                  key={`cusineOpts-${idx}`}
                  name={name}
                  value={value}
                  active={values.cusinePreferences.includes(value)}
                  onChange={handleCusinePref}
                />
              ))}
            </div>
          </fieldset>
        </div>
      </Modal>

      {/* customize preferences */}
      <div
        className="flex items-center bg-zinc-200 hover:bg-zinc-300 transition duration-300 px-2.5 py-2 lg:py-1.5 rounded-md w-fit ml-[2px] mt-2 cursor-pointer"
        onClick={handleOpenModal}
      >
        <div>
          <Icon
            name="edit-icon"
            className="w-4 h-4 opacity-80 md:w-5 md:h-5 mt-1"
          />
        </div>
        <span className="text-sm ml-1 font-semibold opacity-80">
          customize preference
        </span>
      </div>
    </React.Fragment>
  )
}
