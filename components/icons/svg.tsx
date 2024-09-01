type Props = {
  className?: string
  pathClassName?: string
}

export function CrossIcon({ className, pathClassName }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path className={pathClassName} d="M18 6 6 18"></path>
      <path className={pathClassName} d="m6 6 12 12"></path>
    </svg>
  )
}

export function PhoneIcon({ className, pathClassName }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
        className={pathClassName}
      />
    </svg>
  )
}

export function MailIcon({ className, pathClassName }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
        className={pathClassName}
      />
    </svg>
  )
}

export function BlankClipboardIcon({ className, pathClassName }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184"
        className={pathClassName}
      />
    </svg>
  )
}

export function CopiedClipboardIcon({ className, pathClassName }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
        className={pathClassName}
      />
    </svg>
  )
}

export function FilterIcon({ className, pathClassName }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
        className={pathClassName}
      />
    </svg>
  )
}

export function InformationIcon({ className, pathClassName }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
        className={pathClassName}
      />
    </svg>
  )
}

export function ChevronRightIcon({ className, pathClassName }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  )
}

export function LocationPinIcon({ className, pathClassName }: Props) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
    >
      <path
        className={pathClassName}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
      <path
        className={pathClassName}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
      />
    </svg>
  )
}

export function SimpleLeftArrow({ className, pathClassName }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5 8.25 12l7.5-7.5"
        className={pathClassName}
      />
    </svg>
  )
}

export function SimpleRightArrow({ className, pathClassName }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
        className={pathClassName}
      />
    </svg>
  )
}

export function Monitoring({ className, pathClassName }: Props) {
  return (
    <svg
      width="49"
      height="49"
      viewBox="0 0 49 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clip-path="url(#clip0_1209_6654)">
        <path
          className={pathClassName}
          d="M18.2616 44.1367C19.9393 41.9119 20.9377 39.2494 21.1366 36.4701"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className={pathClassName}
          d="M29.7616 44.1367C28.0839 41.9119 27.0855 39.2494 26.8866 36.4701"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className={pathClassName}
          d="M15.3866 44.1367H32.6366"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className={pathClassName}
          d="M1.96993 30.7201H46.0533"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className={pathClassName}
          d="M3.8866 3.88672H44.1366C44.1366 3.88672 46.0533 3.88672 46.0533 5.80339V34.5534C46.0533 34.5534 46.0533 36.4701 44.1366 36.4701H3.8866C3.8866 36.4701 1.96993 36.4701 1.96993 34.5534V5.80339C1.96993 5.80339 1.96993 3.88672 3.8866 3.88672Z"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          className={pathClassName}
          d="M1.96993 19.22H13.7785C13.9702 19.2204 14.1576 19.1632 14.3165 19.0559C14.4754 18.9486 14.5984 18.7962 14.6698 18.6182L15.3253 16.9756C15.3992 16.7911 15.5286 16.6342 15.6956 16.5265C15.8626 16.4188 16.059 16.3657 16.2575 16.3746C16.4561 16.3834 16.647 16.4537 16.8037 16.5759C16.9605 16.698 17.0755 16.8658 17.1327 17.0561L18.2923 20.922C18.3509 21.1203 18.472 21.2944 18.6377 21.4181C18.8033 21.5419 19.0045 21.6088 19.2113 21.6088C19.4181 21.6088 19.6193 21.5419 19.7849 21.4181C19.9506 21.2944 20.0717 21.1203 20.1303 20.922L22.9153 11.4556C22.9757 11.25 23.1033 11.0707 23.2776 10.9461C23.452 10.8216 23.6631 10.759 23.8771 10.7685C24.0912 10.778 24.2959 10.859 24.4586 10.9985C24.6212 11.1379 24.7324 11.3279 24.7744 11.538L27.1032 23.1799C27.1451 23.3888 27.2555 23.5778 27.4169 23.717C27.5783 23.8562 27.7815 23.9376 27.9943 23.9484C28.2072 23.9592 28.4175 23.8987 28.5922 23.7765C28.7668 23.6543 28.8957 23.4774 28.9585 23.2738L30.8752 17.0274C30.9335 16.838 31.049 16.6713 31.206 16.5503C31.3629 16.4292 31.5535 16.3599 31.7515 16.3517C31.9495 16.3435 32.1452 16.3969 32.3116 16.5045C32.478 16.6121 32.6069 16.7687 32.6807 16.9526L33.3477 18.624C33.419 18.8019 33.542 18.9544 33.7009 19.0617C33.8598 19.169 34.0472 19.2261 34.2389 19.2258H46.0533"
          stroke="black"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1209_6654">
          <rect
            width="48"
            height="48"
            fill="white"
            transform="translate(0.0115967 0.0117188)"
          />
        </clipPath>
      </defs>
    </svg>
  )
}

export function SearchIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.39633 2.26196C13.336 2.26196 16.5305 5.45561 16.5305 9.39609C16.5305 13.3366 13.336 16.5302 9.39633 16.5302C5.45586 16.5302 2.26221 13.3366 2.26221 9.39609C2.26221 5.45561 5.45586 2.26196 9.39633 2.26196Z"
          stroke="#383838"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5824 15.4064C17.2316 15.4064 17.7578 15.9334 17.7578 16.5818C17.7578 17.2318 17.2316 17.758 16.5824 17.758C15.9332 17.758 15.4062 17.2318 15.4062 16.5818C15.4062 15.9334 15.9332 15.4064 16.5824 15.4064Z"
          stroke="#383838"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
      </g>
    </svg>
  )
}

export function BellIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9964 2.51416C7.5621 2.51416 5.63543 6.5294 5.63543 9.18368C5.63543 11.1675 5.92305 10.5837 4.82496 13.0037C3.484 16.4523 8.87638 17.8618 11.9964 17.8618C15.1154 17.8618 20.5078 16.4523 19.1678 13.0037C18.0697 10.5837 18.3573 11.1675 18.3573 9.18368C18.3573 6.5294 16.4297 2.51416 11.9964 2.51416Z"
          stroke="#383838"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M14.306 20.5122C13.0117 21.9579 10.9927 21.9751 9.68604 20.5122"
          stroke="#383838"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
      </g>
    </svg>
  )
}

export function HomeIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.07861 16.1354H14.8936"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.3999 13.713C2.3999 8.082 3.0139 8.475 6.3189 5.41C7.7649 4.246 10.0149 2 11.9579 2C13.8999 2 16.1949 4.235 17.6539 5.41C20.9589 8.475 21.5719 8.082 21.5719 13.713C21.5719 22 19.6129 22 11.9859 22C4.3589 22 2.3999 22 2.3999 13.713Z"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
    </svg>
  )
}

export function ChartPieIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6787 3.3486C12.9707 4.1636 12.6887 9.2886 13.5117 10.1126C14.3347 10.9346 19.2797 10.5186 20.4677 9.5836C23.3257 7.3326 15.9387 0.746597 13.6787 3.3486Z"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1377 13.7901C19.2217 14.8741 16.3477 21.0541 10.6517 21.0541C6.39771 21.0541 2.94971 17.6061 2.94971 13.3531C2.94971 8.05305 8.17871 4.66305 9.67771 6.16205C10.5407 7.02505 9.56871 11.0861 11.1167 12.6351C12.6647 14.1841 17.0537 12.7061 18.1377 13.7901Z"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
    </svg>
  )
}

export function ThreePeopleIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9726 20.3682C8.73355 20.3682 5.96655 19.8782 5.96655 17.9162C5.96655 15.9542 8.71555 14.2462 11.9726 14.2462C15.2116 14.2462 17.9786 15.9382 17.9786 17.8992C17.9786 19.8602 15.2296 20.3682 11.9726 20.3682Z"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9726 11.4488C14.0986 11.4488 15.8226 9.72576 15.8226 7.59976C15.8226 5.47376 14.0986 3.74976 11.9726 3.74976C9.84657 3.74976 8.12257 5.47376 8.12257 7.59976C8.11657 9.71776 9.82657 11.4418 11.9456 11.4488H11.9726Z"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M18.362 10.3917C19.599 10.0607 20.511 8.93266 20.511 7.58966C20.511 6.18866 19.518 5.01866 18.196 4.74866"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M18.9431 13.5444C20.6971 13.5444 22.1951 14.7334 22.1951 15.7954C22.1951 16.4204 21.6781 17.1014 20.8941 17.2854"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M5.58384 10.3917C4.34584 10.0607 3.43384 8.93266 3.43384 7.58966C3.43384 6.18866 4.42784 5.01866 5.74884 4.74866"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M5.00176 13.5444C3.24776 13.5444 1.74976 14.7334 1.74976 15.7954C1.74976 16.4204 2.26676 17.1014 3.05176 17.2854"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
    </svg>
  )
}

export function CalendarIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.74976 12.7756C2.74976 5.81959 5.06876 3.50159 12.0238 3.50159C18.9798 3.50159 21.2988 5.81959 21.2988 12.7756C21.2988 19.7316 18.9798 22.0496 12.0238 22.0496C5.06876 22.0496 2.74976 19.7316 2.74976 12.7756Z"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M3.02515 9.32397H21.0331"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M16.4284 13.261H16.4374"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M12.0289 13.261H12.0379"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M7.62148 13.261H7.63048"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M16.4284 17.1129H16.4374"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M12.0289 17.1129H12.0379"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M7.62148 17.1129H7.63048"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M16.033 2.05005V5.31205"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M8.02466 2.05005V5.31205"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
    </svg>
  )
}

export function ChartGraphIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M7.4831 10.261V16.9547"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M12.0368 7.05737V16.9553"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M16.5158 13.7982V16.9551"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.30005 12.0369C2.30005 4.73479 4.73479 2.30005 12.0369 2.30005C19.339 2.30005 21.7737 4.73479 21.7737 12.0369C21.7737 19.339 19.339 21.7737 12.0369 21.7737C4.73479 21.7737 2.30005 19.339 2.30005 12.0369Z"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
    </svg>
  )
}

export function WrittenPageIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.3055 15.4498H8.90552"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M12.2605 11.4385H8.90454"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.1599 8.29988L14.4899 2.89988C13.7599 2.79988 12.9399 2.74988 12.0399 2.74988C5.7499 2.74988 3.6499 5.06988 3.6499 11.9999C3.6499 18.9399 5.7499 21.2499 12.0399 21.2499C18.3399 21.2499 20.4399 18.9399 20.4399 11.9999C20.4399 10.5799 20.3499 9.34988 20.1599 8.29988Z"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M13.9343 2.83252V5.49352C13.9343 7.35152 15.4403 8.85652 17.2983 8.85652H20.2493"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
    </svg>
  )
}

export function HeartIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.92178 12.4463C1.84878 9.09631 3.10378 4.93131 6.62078 3.79931C8.47078 3.20231 10.7538 3.70031 12.0508 5.48931C13.2738 3.63431 15.6228 3.20631 17.4708 3.79931C20.9868 4.93131 22.2488 9.09631 21.1768 12.4463C19.5068 17.7563 13.6798 20.5223 12.0508 20.5223C10.4228 20.5223 4.64778 17.8183 2.92178 12.4463Z"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M15.7886 7.56396C16.9956 7.68796 17.7506 8.64496 17.7056 9.98596"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
    </svg>
  )
}
export function SettingsIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 9.5C13.3809 9.5 14.5 10.6191 14.5 12C14.5 13.3809 13.3809 14.5 12 14.5C10.6191 14.5 9.5 13.3809 9.5 12C9.5 10.6191 10.6191 9.5 12 9.5Z"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.168 7.25025V7.25025C19.4845 6.05799 17.9712 5.65004 16.7885 6.33852C15.7598 6.93613 14.4741 6.18838 14.4741 4.99218C14.4741 3.61619 13.3659 2.5 11.9998 2.5V2.5C10.6337 2.5 9.52546 3.61619 9.52546 4.99218C9.52546 6.18838 8.23977 6.93613 7.21199 6.33852C6.02829 5.65004 4.51507 6.05799 3.83153 7.25025C3.14896 8.4425 3.55399 9.96665 4.73769 10.6541C5.76546 11.2527 5.76546 12.7473 4.73769 13.3459C3.55399 14.0343 3.14896 15.5585 3.83153 16.7498C4.51507 17.942 6.02829 18.35 7.21101 17.6625H7.21199C8.23977 17.0639 9.52546 17.8116 9.52546 19.0078V19.0078C9.52546 20.3838 10.6337 21.5 11.9998 21.5V21.5C13.3659 21.5 14.4741 20.3838 14.4741 19.0078V19.0078C14.4741 17.8116 15.7598 17.0639 16.7885 17.6625C17.9712 18.35 19.4845 17.942 20.168 16.7498C20.8515 15.5585 20.4455 14.0343 19.2628 13.3459H19.2618C18.2341 12.7473 18.2341 11.2527 19.2628 10.6541C20.4455 9.96665 20.8515 8.4425 20.168 7.25025Z"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
    </svg>
  )
}
export function TwoPeopleIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.55851 21.4562C5.88651 21.4562 2.74951 20.9012 2.74951 18.6772C2.74951 16.4532 5.86651 14.4492 9.55851 14.4492C13.2305 14.4492 16.3665 16.4342 16.3665 18.6572C16.3665 20.8802 13.2505 21.4562 9.55851 21.4562Z"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.55861 11.2776C11.9686 11.2776 13.9226 9.32356 13.9226 6.91356C13.9226 4.50356 11.9686 2.54956 9.55861 2.54956C7.14861 2.54956 5.19461 4.50356 5.19461 6.91356C5.18561 9.31556 7.12661 11.2696 9.52761 11.2776H9.55861Z"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M16.8013 10.0789C18.2043 9.70388 19.2383 8.42488 19.2383 6.90288C19.2393 5.31488 18.1123 3.98888 16.6143 3.68188"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M17.4607 13.6536C19.4487 13.6536 21.1467 15.0016 21.1467 16.2046C21.1467 16.9136 20.5617 17.6416 19.6717 17.8506"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
    </svg>
  )
}
export function LogoutIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M21.791 12.1208H9.75"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M18.8643 9.20483L21.7923 12.1208L18.8643 15.0368"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M16.3599 7.63C16.0299 4.05 14.6899 2.75 9.35986 2.75C2.25886 2.75 2.25886 5.06 2.25886 12C2.25886 18.94 2.25886 21.25 9.35986 21.25C14.6899 21.25 16.0299 19.95 16.3599 16.37"
        stroke="#383838"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
    </svg>
  )
}

export function GlucoGuideLogo({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="Layer_1"
      data-name="Layer 1"
      viewBox="0 0 275.49 274.74"
      className={className}
    >
      <path
        d="m108.82,80.23c.16,5.97.56,14.06.49,22.16-.03,4.26-2.51,6.62-6.72,6.57-5.7-.07-11.42-1.33-17.07-.44-5.76.9-11.58-.36-17.29.97-4.8,1.12-6.01,2.31-6.16,7.05-.14,4.51-.07,9.01-.45,13.53-.19,2.32-1.41,3.11-3.13,3.15-14.9.39-29.35-1.59-41.66-10.72-8.01-5.94-14.14-13.46-15.9-23.9-1.47-8.67-1.4-17.15,1.69-25.39,2.39-6.37,6.05-12.14,10.6-17.16,3.94-4.35,8.98-7.36,14.39-9.72,3.29-1.43,6.48-3.11,10.08-3.73,2.21-.38,3.81-2.03,5.7-3.07.57-.32.65-.91.67-1.55.14-7.11,3.46-12.9,7.22-18.7,5.47-8.44,13.4-13.58,22.38-17.02C79.98-.16,86.82-.22,93.66.46c4.09.41,8,1.05,11.69,2.8,6.34,3.01,11.75,7.15,16.38,12.5,4.52,5.22,7.65,11.08,9.72,17.58,1.12,3.53,1.78,7.2,1.87,10.86.09,3.59.92,7.02,1.37,10.52.08.59.22,1.17.24,1.76.13,3.69-.5,4.51-4.2,4.72-3.47.19-6.96-.09-10.43.45-2.17.34-4.39.41-6.56.74-1.47.22-2.19,1.37-2.89,2.61-2.35,4.13-2.01,8.64-2.03,15.23Z"
        fill="#00acee"
      />
      <path
        d="m167.26,91.96c.54-5.65-.31-12.1-.57-18.56-.33-8.3-4.98-10.87-12.45-11.61-2.43-.24-4.88-.05-7.33-.5-2.54-.47-4.17-2.02-4.13-4.32.06-3.68-.78-7.27-.63-10.93.35-8.73,2.21-16.99,7.2-24.35,5.69-8.4,12.96-14.71,22.54-18.56,8.49-3.41,17.1-3.77,25.85-2.35,8.04,1.31,14.31,6.16,20.29,11.37,3.32,2.89,6.46,5.98,8.74,9.78,3.04,5.08,4.7,10.72,6.21,16.37.62,2.33,2.3,3.48,4.14,3.87,10.83,2.3,19.92,7.71,27.47,15.57,4,4.17,7.74,8.88,8.66,14.84.72,4.64,2.24,9.2,2.26,13.89.01,5.13-1.53,10.09-3.33,14.88-2.2,5.86-4.9,11.6-9.44,15.97-6.63,6.38-14.19,11.38-23.45,13.26-7.01,1.43-14.19,1.87-21.16,3.58-2.73.67-4.08-.55-4.07-3.8,0-4.08-.17-8.17-.91-12.14-1.3-6.94-2.73-7.46-10.65-8.67-7.08-1.08-14.25-.54-21.39-.67-3.38-.06-6.79.48-10.18-.36-2.19-.54-3.39-1.74-3.62-3.92-.42-3.93.05-7.86-.04-12.63Z"
        fill="#7fe500"
      />
      <path
        d="m274.05,187.7c.67,9.56-2.44,18.68-8.66,26.49-5.15,6.46-11.71,11.43-19.62,14.39-3.23,1.21-6.39,2.44-9.92,2.64-3.21.18-3.72,3.11-3.73,5.32-.01,2.39-.85,4.3-1.66,6.36-1.7,4.33-2.62,8.97-5.72,12.7-6.12,7.36-12.63,14.12-22.38,16.57-4.65,1.17-9.3,2.76-14.1,2.55-10.6-.48-19.98-4.17-28.48-10.72-7.13-5.49-11.87-12.39-14.62-20.74-1.61-4.88-2.42-9.96-2.55-15.14-.08-3.03-1.02-5.98-1-9.04.03-5.22,1.71-6.86,6.81-5.83,4.94,1,9.49-.24,14.01-1.81,3.71-1.29,4.03-2.47,4.44-6.55.64-6.41-.2-12.78-.09-19.17.07-4.53-.05-9.07.02-13.6.02-1.68.08-3.43.59-5,.39-1.2,1-2.43,3.14-1.96,3.23.71,6.63.4,9.95.12,4.86-.41,9.66.4,14.48.49,5.03.1,10.3,1.05,15.07-2.12,2.93-1.94,3.97-4.48,3.96-7.66,0-4.57.12-9.12,1.15-13.6.42-1.84,1.31-2.79,3.52-2.66,12.4.75,24.47,2.88,35.29,9.33,6.51,3.88,11.39,9.51,15.15,16.18,3.86,6.84,5.2,14.14,4.96,22.46Z"
        fill="#00acee"
      />
      <path
        d="m109.27,186.14c0,5.3-.08,10.6.04,15.9.05,2.42.56,4.84,1.58,7.06.45.97,1.21,1.71,2.37,2.11,4.08,1.42,8.3,2.1,12.55,2.43,2.37.18,4.67.36,6.98,1.03,1.52.44,2.17,1.22,2.21,2.63.33,12.38-1.91,24.14-8.73,34.72-4.72,7.32-11.24,12.76-18.63,17.14-3.92,2.32-8.47,3.21-12.9,3.99-6.87,1.21-13.82,1.1-20.41-1.47-5.41-2.1-10.38-4.93-14.87-8.85-4.3-3.76-7.63-8.11-10.58-12.85-2.23-3.58-3.95-7.5-5.13-11.51-1.43-4.83-4.11-7.42-9.15-8.44-6.51-1.33-12.01-4.86-17.08-9.22-3.7-3.19-6.63-6.95-9.61-10.72-3.93-4.98-5.37-10.86-6.49-16.92-.39-2.07-.42-4.16-.85-6.24-.67-3.19.4-6.41,1.14-9.48,1.73-7.19,5.21-13.59,9.93-19.33,4.65-5.65,10.14-9.82,17.12-12.46,3.54-1.34,7.21-2.45,10.66-4.08.37-.17.81-.25,1.22-.27,5.11-.18,10.24-.72,15.31-.4,5.42.34,6.01.81,6.06,6.09.03,3.08.13,6.16,0,9.23-.15,3.55,1.86,5.86,4.55,7.36,2.11,1.17,4.54,1.89,7.18,1.86,9.15-.12,18.3,0,27.45.04.93,0,1.9,0,2.79.22,5.21,1.33,5.29,1.47,5.29,6.82,0,4.53,0,9.06,0,13.6Z"
        fill="#7fe500"
      />
      <path
        d="m118.47,127.44c2.33.21,4.84-.15,7.36-.5.9-.13,1.31-.38,1.44-1.36.4-2.78.47-5.57.54-8.38.17-6.32,1.68-8.3,8.64-8.73,2.57-.16,5.02.27,7.45,1.12,2.9,1.02,3.92,3.17,3.88,6.04-.05,3.04.53,6.01.98,9.01.27,1.83,1.11,2.13,2.8,2.39,3.64.56,7.35.06,10.99,1.28,2.46.82,3.39,2.29,3.68,4.46.48,3.66-.21,7.32-1.25,10.74-.56,1.86-2.58,3.53-5.15,3.48-2.39-.05-4.79-.08-7.17.02-3.66.15-3.81.27-4.34,4.28-.32,2.43.06,4.86-.4,7.34-.87,4.63-3.58,6.98-7.97,7.84-6.32,1.23-11.8-3.28-12.16-9.88-.12-2.24-.44-4.55-1.13-6.67-.94-2.87-3.81-3.02-6.23-3.44-1.89-.32-3.78-.7-5.67-.96-2.76-.38-4.15-2.41-4.75-4.47-1.01-3.45-1.07-7.09.33-10.62.86-2.16,2.18-3.3,4.6-3,1.09.14,2.22.02,3.55.02Z"
        fill="#7fe500"
      />
    </svg>
  )
}

export function FireIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.3671 4.06132C9.6671 4.56707 5 8.15805 5 13.9996C5 14.9188 5.18106 15.8291 5.53284 16.6784C5.88463 17.5277 6.40024 18.2993 7.05025 18.9493C7.70026 19.5993 8.47194 20.115 9.32122 20.4667C10.146 20.8084 11.0282 20.989 11.9203 20.9991C9.74796 20.9567 8 19.1824 8 16.9999C8 16.8024 8.01432 16.6082 8.04197 16.4184C8.04315 16.4071 8.04459 16.3957 8.04628 16.3843C8.3817 14.1305 10.4553 12.2171 11.4581 11.4101C11.7785 11.1523 12.2216 11.1523 12.5421 11.4101C13.5448 12.2171 15.6183 14.1305 15.9537 16.3843C15.9554 16.3957 15.9569 16.4071 15.958 16.4184C15.9857 16.6082 16 16.8024 16 16.9999C16 19.1824 14.252 20.9567 12.0797 20.9991C12.9718 20.989 13.854 20.8084 14.6788 20.4667C15.5281 20.115 16.2997 19.5993 16.9497 18.9493C17.5998 18.2993 18.1154 17.5277 18.4672 16.6784C18.807 15.8579 18.9875 14.9804 18.9994 14.093C18.9998 14.0815 19 14.07 19 14.0584L18.9999 14.0268L19 13.9997C18.9736 9.75902 16.1044 7.4446 15.5813 7.05781C15.5323 7.02155 15.4671 7.02196 15.4181 7.05823C15.2083 7.21337 14.6241 7.67639 13.9967 8.44729C13.9251 8.53521 13.7845 8.5184 13.7361 8.41591C12.5573 5.92135 10.9243 4.40726 10.5386 4.07102C10.4888 4.02764 10.4206 4.02266 10.3671 4.06132Z"
        fill="url(#paint0_linear_2836_368)"
        className={pathClassName}
      />
      <defs>
        <linearGradient
          id="paint0_linear_2836_368"
          x1="12"
          y1="4.03516"
          x2="12"
          y2="20.9991"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF8383" />
          <stop offset="1" stopColor="#994F4F" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function RotatedArrowIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="18" height="18" transform="translate(0 13) rotate(-45)" />
      <path
        d="M8.34005 17.0971C8.13868 16.8958 8.1219 16.5797 8.2897 16.3592L8.34005 16.3016L16.295 8.34668C16.5147 8.12701 16.8708 8.12701 17.0905 8.34668C17.2919 8.54804 17.3086 8.86409 17.1408 9.08457L17.0905 9.14217L9.13554 17.0971C8.91587 17.3168 8.55972 17.3168 8.34005 17.0971Z"
        fill="#383838"
        className={pathClassName}
      />
      <path
        d="M10.2905 9.32041C9.9798 9.32108 9.72742 9.06979 9.72675 8.75913C9.72614 8.47671 9.93377 8.24246 10.2049 8.2017L10.288 8.19542L16.6912 8.18163C16.9745 8.18102 17.2092 8.38985 17.249 8.66192L17.255 8.74529L17.2417 15.149C17.2411 15.4597 16.9887 15.711 16.678 15.7104C16.3956 15.7098 16.1622 15.5012 16.1226 15.2298L16.1167 15.1467L16.1285 9.30782L10.2905 9.32041Z"
        fill="#383838"
        className={pathClassName}
      />
    </svg>
  )
}

export function HeartOrganIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={pathClassName}
    >
      <g opacity="0.7">
        <path
          d="M2.60498 2.8124L4.30602 5.344C0.927897 9.0815 6.19873 19.1839 10.1918 19.1839C14.1848 19.1839 19.9668 8.84191 16.1414 5.08046L17.3314 1.95789"
          fill="url(#paint0_linear_2829_318)"
          className={pathClassName}
        />
        <path
          d="M2.60498 2.8124L4.30602 5.344C0.927897 9.0815 6.19873 19.1839 10.1918 19.1839C14.1848 19.1839 19.9668 8.84191 16.1414 5.08046L17.3314 1.95789"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M8.94608 0.815918V2.73258C8.02377 2.73946 7.12904 3.04799 6.39851 3.61106L5.0249 1.61453"
          fill="url(#paint1_linear_2829_318)"
          className={pathClassName}
        />
        <path
          d="M8.94608 0.815918V2.73258C8.02377 2.73946 7.12904 3.04799 6.39851 3.61106L5.0249 1.61453"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M14.6718 1.21522L13.8732 3.36349C13.2353 2.97101 12.5054 2.75342 11.7568 2.73258V0.815918"
          fill="url(#paint2_linear_2829_318)"
          className={pathClassName}
        />
        <path
          d="M14.6718 1.21522L13.8732 3.36349C13.2353 2.97101 12.5054 2.75342 11.7568 2.73258V0.815918"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M3.3877 10.2795C6.94151 9.40897 5.78353 9.99195 8.55471 7.02112L3.3877 10.2795Z"
          fill="url(#paint3_linear_2829_318)"
          className={pathClassName}
        />
        <path
          d="M3.3877 10.2795C6.94151 9.40897 5.78353 9.99195 8.55471 7.02112"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M7.15723 8.53845L8.01174 9.99991L7.15723 8.53845Z"
          fill="url(#paint4_linear_2829_318)"
          className={pathClassName}
        />
        <path
          d="M7.15723 8.53845L8.01174 9.99991"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M12.6433 2.85242L12.1402 3.6111C11.8913 3.96404 11.7631 4.38792 11.7746 4.81961C11.7862 5.25131 11.9368 5.66775 12.2041 6.00693"
          fill="url(#paint5_linear_2829_318)"
          className={pathClassName}
        />
        <path
          d="M12.6433 2.85242L12.1402 3.6111C11.8913 3.96404 11.7631 4.38792 11.7746 4.81961C11.7862 5.25131 11.9368 5.66775 12.2041 6.00693"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M17.3871 8.80208H15.6381C14.9525 8.79406 14.2866 9.03206 13.7614 9.47291L12.6753 10.3993"
          fill="url(#paint6_linear_2829_318)"
          className={pathClassName}
        />
        <path
          d="M17.3871 8.80208H15.6381C14.9525 8.79406 14.2866 9.03206 13.7614 9.47291L12.6753 10.3993"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M14.3604 16.3889L13.3621 16.2212C13.01 16.1652 12.6726 16.0396 12.3696 15.8518C12.0665 15.6639 11.804 15.4176 11.5972 15.1271L10.6069 13.5938"
          fill="url(#paint7_linear_2829_318)"
          className={pathClassName}
        />
        <path
          d="M14.3604 16.3889L13.3621 16.2212C13.01 16.1652 12.6726 16.0396 12.3696 15.8518C12.0665 15.6639 11.804 15.4176 11.5972 15.1271L10.6069 13.5938"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M4.60938 13.9291L8.34687 14.3923L4.60938 13.9291Z"
          fill="url(#paint8_linear_2829_318)"
          className={pathClassName}
        />
        <path
          d="M4.60938 13.9291L8.34687 14.3923"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2829_318"
          x1="9.99995"
          y1="1.95789"
          x2="9.99995"
          y2="19.1839"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9494" />
          <stop offset="1" stopColor="#B77C7C" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2829_318"
          x1="6.98549"
          y1="0.815918"
          x2="6.98549"
          y2="3.61106"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9494" />
          <stop offset="1" stopColor="#B77C7C" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2829_318"
          x1="13.2143"
          y1="0.815918"
          x2="13.2143"
          y2="3.36349"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9494" />
          <stop offset="1" stopColor="#B77C7C" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_2829_318"
          x1="5.9712"
          y1="7.02112"
          x2="5.9712"
          y2="10.2795"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9494" />
          <stop offset="1" stopColor="#B77C7C" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_2829_318"
          x1="7.58448"
          y1="8.53845"
          x2="7.58448"
          y2="9.99991"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9494" />
          <stop offset="1" stopColor="#B77C7C" />
        </linearGradient>
        <linearGradient
          id="paint5_linear_2829_318"
          x1="12.2086"
          y1="2.85242"
          x2="12.2086"
          y2="6.00693"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9494" />
          <stop offset="1" stopColor="#B77C7C" />
        </linearGradient>
        <linearGradient
          id="paint6_linear_2829_318"
          x1="15.0312"
          y1="8.80188"
          x2="15.0312"
          y2="10.3993"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9494" />
          <stop offset="1" stopColor="#B77C7C" />
        </linearGradient>
        <linearGradient
          id="paint7_linear_2829_318"
          x1="12.4837"
          y1="13.5938"
          x2="12.4837"
          y2="16.3889"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9494" />
          <stop offset="1" stopColor="#B77C7C" />
        </linearGradient>
        <linearGradient
          id="paint8_linear_2829_318"
          x1="6.47812"
          y1="13.9291"
          x2="6.47812"
          y2="14.3923"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF9494" />
          <stop offset="1" stopColor="#B77C7C" />
        </linearGradient>
      </defs>
    </svg>
  )
}
export function HumanIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.7">
        <path
          d="M10.0002 6.45846C11.611 6.45846 12.9168 5.15262 12.9168 3.54179C12.9168 1.93096 11.611 0.625122 10.0002 0.625122C8.38933 0.625122 7.0835 1.93096 7.0835 3.54179C7.0835 5.15262 8.38933 6.45846 10.0002 6.45846Z"
          fill="url(#paint0_linear_2829_344)"
          stroke="black"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M11.8332 18.3749L9.99984 14.1249L8.16651 18.3749C7.91651 18.9582 7.24984 19.3749 6.66651 19.3749C6.41651 19.3749 6.16651 19.2916 5.99984 19.2082C5.16651 18.7916 4.83318 17.8749 5.16651 17.0416L7.74984 11.0416V9.95825L3.16651 8.12492C2.33318 7.79159 1.9165 6.87492 2.24983 6.04159C2.60638 5.15024 3.50117 4.67545 4.41651 5.04158C5.33186 5.40772 6.83319 6.04158 8.4165 6.62491C8.92984 6.8388 9.46517 6.9429 9.99984 6.9372C10.5346 6.9429 11.0698 6.8388 11.5832 6.62491C13.1665 6.04158 14.6678 5.40772 15.5832 5.04158C16.4985 4.67545 17.3933 5.15024 17.7498 6.04159C18.0832 6.87492 17.6665 7.79159 16.8332 8.12492L12.2498 9.95825V11.0416L14.8332 17.0416C15.1665 17.8749 14.8332 18.7916 13.9998 19.2082C13.8332 19.2916 13.5832 19.3749 13.3332 19.3749C12.7498 19.3749 12.0832 18.9582 11.8332 18.3749Z"
          fill="url(#paint1_linear_2829_344)"
          stroke="#0F0F0F"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2829_344"
          x1="10.0002"
          y1="0.625122"
          x2="10.0002"
          y2="6.45846"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#81B4FF" />
          <stop offset="1" stopColor="#4D6C99" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2829_344"
          x1="9.99984"
          y1="4.91724"
          x2="9.99984"
          y2="19.3749"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4B93FF" />
          <stop offset="1" stopColor="#2D5899" />
        </linearGradient>
      </defs>
    </svg>
  )
}
export function WeightMachineIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.7" clipPath="url(#clip0_2829_369)">
        <path
          d="M2.46347 16.6224C2.48211 16.7989 2.5654 16.9623 2.69731 17.081C2.82922 17.1998 3.00041 17.2656 3.17791 17.2656H14.8217C14.9992 17.2656 15.1703 17.1998 15.3023 17.081C15.4342 16.9623 15.5175 16.7989 15.5361 16.6224L16.8658 3.99176C16.8783 3.87195 16.8605 3.7509 16.8141 3.63975C16.7676 3.5286 16.6939 3.43091 16.5998 3.35567C14.4428 1.6348 11.759 0.709149 8.99978 0.73439C6.24053 0.709149 3.55674 1.6348 1.39972 3.35567C1.30564 3.43091 1.23197 3.5286 1.1855 3.63975C1.13904 3.7509 1.12125 3.87195 1.13378 3.99176L2.46347 16.6224Z"
          fill="#B8B8B8"
          stroke="#0F0F0F"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M14.9469 3.9314C14.9969 3.96413 15.0379 4.00882 15.0663 4.0614C15.0947 4.11398 15.1095 4.17281 15.1094 4.23255V6.12502C15.1094 6.22033 15.0715 6.31174 15.0041 6.37914C14.9367 6.44653 14.8453 6.48439 14.75 6.48439H3.25C3.15469 6.48439 3.06328 6.44653 2.99588 6.37914C2.92849 6.31174 2.89063 6.22033 2.89063 6.12502V4.23255C2.89053 4.17281 2.90534 4.11398 2.9337 4.0614C2.96206 4.00882 3.00309 3.96413 3.05306 3.9314C4.33168 3.10324 5.76903 2.55096 7.27322 2.30988C8.77741 2.06879 10.3154 2.1442 11.7888 2.53127C12.91 2.82495 13.9764 3.29774 14.9469 3.9314Z"
          fill="#B8B8B8"
          stroke="#0F0F0F"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M4.16549 13.5461C4.20327 13.9736 4.40471 14.37 4.72775 14.6525C5.05079 14.935 5.47047 15.0819 5.89919 15.0624C6.32792 15.043 6.73256 14.8586 7.02865 14.548C7.32474 14.2373 7.48941 13.8243 7.48827 13.3951V10.4863C7.48897 10.2431 7.44026 10.0022 7.34509 9.77829C7.24992 9.5544 7.11028 9.35216 6.93463 9.18384C6.75899 9.01552 6.55099 8.88462 6.32324 8.79908C6.0955 8.71353 5.85276 8.67513 5.60973 8.68618C5.36671 8.69724 5.12846 8.75753 4.90942 8.86341C4.69039 8.96928 4.49514 9.11853 4.3355 9.3021C4.17586 9.48568 4.05516 9.69976 3.98072 9.93137C3.90628 10.163 3.87964 10.4073 3.90243 10.6495L4.16549 13.5461Z"
          stroke="#0F0F0F"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M13.8345 13.5461C13.7967 13.9736 13.5953 14.37 13.2723 14.6525C12.9492 14.935 12.5295 15.0819 12.1008 15.0624C11.6721 15.043 11.2674 14.8586 10.9714 14.548C10.6753 14.2373 10.5106 13.8243 10.5117 13.3951V10.4863C10.511 10.2431 10.5597 10.0022 10.6549 9.77829C10.7501 9.5544 10.8897 9.35216 11.0654 9.18384C11.241 9.01552 11.449 8.88462 11.6768 8.79908C11.9045 8.71353 12.1472 8.67513 12.3903 8.68618C12.6333 8.69724 12.8715 8.75753 13.0906 8.86341C13.3096 8.96928 13.5049 9.11853 13.6645 9.3021C13.8241 9.48568 13.9448 9.69976 14.0193 9.93137C14.0937 10.163 14.1204 10.4073 14.0976 10.6495L13.8345 13.5461Z"
          stroke="#0F0F0F"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M8.28125 6.48444L9.00003 4.49463L9.71875 6.48444"
          stroke="#0F0F0F"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M9 3.25V2.17188"
          stroke="#0F0F0F"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.7969 3.41747L10.996 2.35803"
          stroke="#0F0F0F"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M12.5312 3.91559L12.9244 2.9115"
          stroke="#0F0F0F"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M7.203 3.41747L7.00391 2.35803"
          stroke="#0F0F0F"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M5.46861 3.91559L5.07617 2.9115"
          stroke="#0F0F0F"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
      </g>
      <defs>
        <clipPath id="clip0_2829_369">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

export function UpArrowIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.84017 2.47913V11.2291"
        stroke="#E43D3D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M3.32591 6.00842C3.32591 6.00842 5.22816 2.47926 6.83933 2.47926C8.45166 2.47926 10.3545 6.00842 10.3545 6.00842"
        stroke="#E43D3D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
    </svg>
  )
}

export function RightArrowIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3.3335 9.77136C3.3335 9.45495 3.56862 9.19345 3.87369 9.15207L3.9585 9.14636H16.4585C16.8037 9.14636 17.0835 9.42618 17.0835 9.77136C17.0835 10.0878 16.8484 10.3493 16.5433 10.3907L16.4585 10.3964H3.9585C3.61332 10.3964 3.3335 10.1165 3.3335 9.77136Z"
        fill="#383838"
        className={pathClassName}
      />
      <path
        d="M10.976 5.19393C10.7314 4.95038 10.7305 4.55465 10.9741 4.31005C11.1955 4.08768 11.5427 4.06676 11.7878 4.24778L11.858 4.30814L16.8996 9.32814C17.1227 9.55022 17.143 9.89864 16.9605 10.1437L16.8997 10.2139L11.858 15.2347C11.6134 15.4783 11.2177 15.4775 10.9741 15.2329C10.7527 15.0105 10.7333 14.6633 10.9153 14.419L10.976 14.349L15.5727 9.77079L10.976 5.19393Z"
        fill="#383838"
        className={pathClassName}
      />
    </svg>
  )
}

export function HumanJogginIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 1.33337C11.2636 1.33337 10.6667 1.93033 10.6667 2.66671C10.6667 3.40309 11.2636 4.00004 12 4.00004C12.7364 4.00004 13.3333 3.40309 13.3333 2.66671C13.3333 1.93033 12.7364 1.33337 12 1.33337ZM7.02083 1.87504C6.87008 1.88087 6.71804 1.91101 6.5625 1.95837C6.54806 1.96277 6.53531 1.95355 6.52083 1.95837C6.52083 1.95837 5 2.27087 3.83333 2.68754C2.66667 3.10421 3.83294 3.57918 4.16666 3.97921C4.87337 4.82632 6.89583 3.25004 6.89583 3.25004L6.91667 3.22921H6.9375C7.08452 3.1802 7.27717 3.22884 7.52083 3.37504L8.6875 4.25004L6.54167 6.06254C6.00833 6.52921 5.93333 7.34171 6.33333 7.87504L7.875 10C7.875 10 4.99984 9.00012 3.33333 10C1.66683 11 3.33333 11.3334 3.33333 11.3334H5.66667H8C8.91111 11.3334 9.57737 10.3403 9.20833 9.47921V9.45837L8.3125 7.52087L10.375 5.85421L10.4792 6.39587V6.41671C10.6783 7.31275 11.4805 8.00004 12.4583 8.00004H14.6667C14.6667 8.00004 15.3335 7.27087 14.6667 6.66671C13.9998 6.06254 12.4583 6.66671 12.4583 6.66671C12.1028 6.66671 11.8592 6.42899 11.7917 6.12504L11.6458 5.41671V5.39587C11.5423 4.87816 11.2412 4.48304 10.875 4.20837H10.8542L8.27083 2.27087L8.22916 2.25004L8.20833 2.22921C7.99683 2.10231 7.74562 1.97739 7.45833 1.91671C7.32106 1.88771 7.17159 1.86922 7.02083 1.87504ZM1.33333 4.66671C-1.64469 4.66671 1.33333 5.33337 1.33333 5.33337H5.79167C5.85833 5.26671 5.93333 5.27504 6 5.20837L6.72917 4.66671C6.72917 4.66671 4.31135 4.66671 1.33333 4.66671ZM1.33333 6.00004C-1.16667 6.00004 1.33333 6.66671 1.33333 6.66671H5.0625C5.0625 6.40004 5.20417 6.20004 5.27083 6.00004C5.27083 6.00004 3.83333 6.00004 1.33333 6.00004ZM1.33333 7.33337C-0.833323 7.33337 1.33333 8.00004 1.33333 8.00004H5.20833C5.075 7.80004 5.06667 7.53337 5 7.33337C5 7.33337 3.49999 7.33337 1.33333 7.33337ZM6.33333 11.3334C6.33333 11.3334 3.36188 12.8441 4.125 13.9375C4.42854 14.3725 5.27083 14.6667 5.27083 14.6667L8 11.3334L6.33333 11.3334Z"
        fill="#FF881A"
        className={pathClassName}
      />
    </svg>
  )
}

export function HumanCyclingIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 1.91992C11.2047 1.91992 10.56 2.56463 10.56 3.35992C10.56 4.15521 11.2047 4.79992 12 4.79992C12.7953 4.79992 13.44 4.15521 13.44 3.35992C13.44 2.56463 12.7953 1.91992 12 1.91992ZM8.81 3.83992C8.35784 3.83992 7.73248 4.27888 7.04 4.78992C6.19136 5.41616 5.52736 5.93776 5.12 6.26992C4.9232 6.43088 4.48 6.8872 4.48 7.62992C4.48 8.37264 5.31104 8.83008 5.92 9.20992C6.5568 9.6064 7.55 10.2199 7.55 10.2199L7.13 13.6399C7.13 13.6399 7.12376 14.3115 7.71 14.3899C8.29656 14.4683 8.48 13.8399 8.48 13.8399C8.48 13.8399 9.02936 10.7136 9.11 10.2099C9.19352 9.6912 9.31808 9.34584 8.72 8.91992C8.13024 8.49976 7.1 7.93992 7.1 7.93992C7.1 7.93992 9.06008 6.42288 9.19 6.34992C9.33752 6.26672 9.46248 6.116 9.61 6.30992C9.762 6.50896 10.77 7.83992 10.77 7.83992C10.77 7.83992 10.9228 7.99992 11.31 7.99992H14.08C14.4064 7.99992 14.72 7.68632 14.72 7.35992C14.72 7.03352 14.4064 6.71992 14.08 6.71992H11.52C11.52 6.71992 10.2139 4.83336 9.94 4.41992C9.6552 3.99016 9.2532 3.83992 8.81 3.83992ZM3.2 9.59992C1.43552 9.59992 0 11.0354 0 12.7999C0 14.5644 1.43552 15.9999 3.2 15.9999C4.96448 15.9999 6.4 14.5644 6.4 12.7999C6.4 11.0354 4.96448 9.59992 3.2 9.59992ZM12.8 9.59992C11.0355 9.59992 9.6 11.0354 9.6 12.7999C9.6 14.5644 11.0355 15.9999 12.8 15.9999C14.5645 15.9999 16 14.5644 16 12.7999C16 11.0354 14.5645 9.59992 12.8 9.59992ZM3.2 10.2399C4.61152 10.2399 5.76 11.3884 5.76 12.7999C5.76 14.2114 4.61152 15.3599 3.2 15.3599C1.78848 15.3599 0.64 14.2114 0.64 12.7999C0.64 11.3884 1.78848 10.2399 3.2 10.2399ZM12.8 10.2399C14.2115 10.2399 15.36 11.3884 15.36 12.7999C15.36 14.2114 14.2115 15.3599 12.8 15.3599C11.3885 15.3599 10.24 14.2114 10.24 12.7999C10.24 11.3884 11.3885 10.2399 12.8 10.2399Z"
        fill="#CB4AF8"
        className={pathClassName}
      />
    </svg>
  )
}

export function SoupBowlIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 8H14.7V9.3C14.7 10.5863 14.189 11.8199 13.2795 12.7295C12.3699 13.639 11.1363 14.15 9.85001 14.15H5.85001C4.56371 14.15 3.33008 13.639 2.42053 12.7295C1.51098 11.8199 1 10.5863 1 9.3V8Z"
        fill="#FF7F7F"
        stroke="#FF7F7F"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M1.4502 2.1499H1.65018C2.56517 2.1499 3.44269 2.51338 4.08969 3.16039C4.73669 3.80739 5.10019 4.6849 5.10019 5.5999H4.90018C3.98518 5.5999 3.10766 5.23642 2.46066 4.58942C1.81366 3.94242 1.4502 3.0649 1.4502 2.1499Z"
        stroke="#FF7F7F"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M6.5 3.10001C6.58135 2.65404 6.81554 2.25035 7.16229 1.95834C7.50905 1.66634 7.94669 1.50427 8.39999 1.5C8.91317 1.51268 9.40185 1.72221 9.76483 2.08519C10.1278 2.44817 10.3373 2.93683 10.35 3.45001C10.3412 3.65334 10.3076 3.85482 10.25 4.05L10.85 3.95001C11.3632 3.96269 11.8518 4.1722 12.2148 4.53519C12.5778 4.89817 12.7873 5.38683 12.8 5.90001"
        stroke="#FF7F7F"
        strokeLinecap="round"
        className={pathClassName}
        strokeLinejoin="round"
      />
      <path
        d="M10.1504 6.05005C9.61996 6.05005 9.11125 5.83934 8.73618 5.46426C8.3611 5.08919 8.15039 4.58048 8.15039 4.05005"
        stroke="#FF7F7F"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
    </svg>
  )
}

export function TabletPillIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9.81089 15.4883C8.84296 16.4562 7.53016 17 6.1613 17C4.79244 17 3.47964 16.4562 2.51171 15.4883C1.54378 14.5204 1 13.2076 1 11.8387C1 10.4698 1.54378 9.15704 2.51171 8.18911L8.18911 2.51171C9.15704 1.54378 10.4698 1 11.8387 1C13.2076 1 14.5204 1.54378 15.4883 2.51171C16.4562 3.47964 17 4.79244 17 6.1613C17 7.53016 16.4562 8.84296 15.4883 9.81089L9.81089 15.4883Z"
        fill="url(#paint0_linear_2851_433)"
        stroke="#383838"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M5.35059 5.35034L12.6498 12.6495Z"
        fill="url(#paint1_linear_2851_433)"
      />
      <path
        d="M5.35059 5.35034L12.6498 12.6495"
        stroke="#383838"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path
        d="M9.81055 4.13352C10.2116 3.73238 10.7226 3.4592 11.279 3.34855C11.8353 3.23789 12.412 3.29473 12.936 3.51188"
        fill="url(#paint2_linear_2851_433)"
      />
      <path
        d="M9.81055 4.13352C10.2116 3.73238 10.7226 3.4592 11.279 3.34855C11.8353 3.23789 12.412 3.29473 12.936 3.51188"
        stroke="#383838"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <defs>
        <linearGradient
          id="paint0_linear_2851_433"
          x1="9"
          y1="1"
          x2="9"
          y2="17"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE1E1" />
          <stop offset="1" stopColor="#FF8484" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2851_433"
          x1="9.00018"
          y1="5.35034"
          x2="9.00018"
          y2="12.6495"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE1E1" />
          <stop offset="1" stopColor="#FF8484" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2851_433"
          x1="11.3733"
          y1="3.29346"
          x2="11.3733"
          y2="4.13352"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFE1E1" />
          <stop offset="1" stopColor="#FF8484" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function CapsulePillIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M1 9C1 11.1217 1.84285 13.1566 3.34315 14.6569C4.84344 16.1571 6.87827 17 9 17C11.1217 17 13.1566 16.1571 14.6569 14.6569C16.1571 13.1566 17 11.1217 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9Z"
        fill="url(#paint0_linear_2842_709)"
        stroke="#383838"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path d="M16.786 7.15405H1.21436Z" fill="url(#paint1_linear_2842_709)" />
      <path
        d="M16.786 7.15405H1.21436"
        stroke="#383838"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <path d="M1.21436 10.8462H16.786Z" fill="url(#paint2_linear_2842_709)" />
      <path
        d="M1.21436 10.8462H16.786"
        stroke="#383838"
        strokeWidth="0.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={pathClassName}
      />
      <defs>
        <linearGradient
          id="paint0_linear_2842_709"
          x1="4"
          y1="5"
          x2="14"
          y2="15"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADD1FC" />
          <stop offset="1" stopColor="#F4F4F4" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2842_709"
          x1="4.13405"
          y1="7.40405"
          x2="4.21399"
          y2="8.64892"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADD1FC" />
          <stop offset="1" stopColor="#F4F4F4" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2842_709"
          x1="4.13405"
          y1="11.0962"
          x2="4.21399"
          y2="12.3411"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ADD1FC" />
          <stop offset="1" stopColor="#F4F4F4" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function HumanYogaIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g>
        <path
          d="M8.3424 3.89526C9.12101 3.89526 9.75219 3.26407 9.75219 2.48547C9.75219 1.70687 9.12101 1.07568 8.3424 1.07568C7.5638 1.07568 6.93262 1.70687 6.93262 2.48547C6.93262 3.26407 7.5638 3.89526 8.3424 3.89526Z"
          fill="#881337"
          className={pathClassName}
        />
        <path
          d="M15.3545 4.3562H1.33008C0.973549 4.3562 0.684516 4.64523 0.684516 5.00177C0.684516 5.3583 0.97358 5.64733 1.33008 5.64733H6.54504L6.53766 9.68572L0.398578 13.3932C0.00860736 13.6287 -0.116612 14.1359 0.118889 14.5258C0.354546 14.916 0.861736 15.0409 1.25142 14.8055C6.52485 11.6079 7.83095 10.8131 7.83095 10.8131C7.83095 10.8131 8.99383 10.8131 11.2751 10.8131V14.0602C11.2751 14.5158 11.6443 14.8852 12.1 14.8852C12.5556 14.8852 12.9249 14.5159 12.9249 14.0602V9.98829C12.9249 9.53269 12.5556 9.16335 12.1 9.16335H10.1417L10.1481 5.64736H15.3544C15.711 5.64736 16 5.35833 16 5.0018C16 4.64527 15.711 4.3562 15.3545 4.3562Z"
          fill="#881337"
          className={pathClassName}
        />
      </g>
    </svg>
  )
}

export function HeartWithPulseIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g opacity="0.7">
        <path
          d="M10.0054 17.4064L2.47298 10.5835C-1.62073 6.48983 4.39702 -1.37009 10.0054 4.98881C15.6138 -1.37009 21.6043 6.51713 17.5378 10.5835L10.0054 17.4064Z"
          stroke="#383838"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
        <path
          d="M4.80957 9.56464H7.33266L8.84649 7.54614L10.865 11.0785L12.3788 9.06H15.1895"
          stroke="#383838"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={pathClassName}
        />
      </g>
    </svg>
  )
}

export function BeatGraphics({ className, pathClassName }: Props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.4082 11.9333C10.5248 11.5727 10.6194 11.2053 10.6916 10.8333C10.9166 9.74995 10.9916 8.60828 11.1832 7.49995L11.4166 6.49995C11.4666 6.91662 11.4916 7.33328 11.5249 7.68328C11.5329 7.96268 11.5608 8.24116 11.6082 8.51661C11.6228 8.57414 11.6497 8.62779 11.6872 8.67385C11.7246 8.7199 11.7716 8.75724 11.8249 8.78328C11.9896 8.84563 12.1659 8.87123 12.3416 8.85828C12.6749 8.85828 13.0666 8.77495 13.2749 8.76662H14.2999C14.3706 8.76662 14.4385 8.73852 14.4885 8.68851C14.5385 8.6385 14.5666 8.57067 14.5666 8.49995C14.5666 8.42922 14.5385 8.3614 14.4885 8.31139C14.4385 8.26138 14.3706 8.23328 14.2999 8.23328H13.2749C13.0832 8.23328 12.7582 8.28328 12.4416 8.29161H12.2499C12.2589 7.16791 12.0611 6.05214 11.6666 4.99995C11.6268 4.94004 11.571 4.89252 11.5055 4.86283C11.44 4.83313 11.3675 4.82246 11.2962 4.83202C11.225 4.84158 11.1578 4.87099 11.1025 4.91689C11.0471 4.9628 11.0058 5.02334 10.9832 5.09162C10.8916 5.33328 10.3666 7.34995 10.3582 7.37495C10.1832 8.20828 10.0749 9.10828 9.9249 9.98328C9.81657 9.39995 9.73324 8.81661 9.60824 8.23328C9.51989 7.78542 9.40581 7.34302 9.26657 6.90828C9.19616 6.6229 9.10136 6.3441 8.98324 6.07495C8.92097 5.95151 8.8258 5.84769 8.70824 5.77495C8.60367 5.74657 8.49261 5.75414 8.39287 5.79646C8.29312 5.83877 8.21049 5.91337 8.15824 6.00828C8.05824 6.20828 7.81657 6.71662 7.7999 6.74162C7.6499 7.05828 7.46657 7.68328 7.23324 8.14162C7.16959 8.29883 7.06964 8.43875 6.94157 8.54995H6.2999L4.00824 8.63328C3.94628 8.63739 3.88806 8.66441 3.84493 8.70908C3.8018 8.75376 3.77684 8.81288 3.7749 8.87495C3.77706 8.93759 3.80348 8.99694 3.84856 9.04047C3.89365 9.084 3.95389 9.10832 4.01657 9.10828H6.35824H6.9249C7.05672 9.10237 7.18524 9.06524 7.2999 8.99995C7.51627 8.83924 7.69301 8.63115 7.81657 8.39161C7.9249 8.19161 8.48324 6.97495 8.51657 6.89995C8.51657 7.12495 8.6249 7.36661 8.7499 8.01661C8.8749 8.66661 8.99157 9.54161 9.10824 10.2916L9.39157 11.9583C9.40144 12.0648 9.41814 12.1706 9.44157 12.2749C9.46939 12.3444 9.51471 12.4054 9.57312 12.4522C9.63153 12.4989 9.70105 12.5297 9.7749 12.5416C9.82853 12.5579 9.88494 12.5629 9.94061 12.5565C9.99628 12.55 10.05 12.5321 10.0985 12.504C10.147 12.4758 10.1891 12.438 10.2223 12.3929C10.2555 12.3478 10.2791 12.2963 10.2916 12.2416"
        fill="#0067FF"
        className={pathClassName}
      />
      <path
        d="M2.50004 12.8333C2.42504 12.4833 2.35837 12.125 2.30837 11.7583C2.25837 11.3917 2.25004 10.9917 2.20837 10.4167C2.16671 9.84168 2.13337 9.06668 2.07504 8.33335C1.91671 6.58335 1.73337 4.88335 1.73337 4.88335C1.7323 4.84832 1.72433 4.81385 1.70992 4.78191C1.69551 4.74997 1.67495 4.72118 1.64941 4.69719C1.62387 4.67319 1.59386 4.65447 1.56108 4.64209C1.5283 4.6297 1.4934 4.6239 1.45837 4.62501C1.42335 4.62609 1.38888 4.63406 1.35694 4.64847C1.32499 4.66287 1.2962 4.68343 1.27221 4.70897C1.24822 4.73451 1.2295 4.76453 1.21711 4.79731C1.20473 4.83009 1.19893 4.86499 1.20004 4.90001C1.20004 4.90001 1.13337 7.10001 1.20004 9.06668C1.20004 9.67501 1.29171 10.25 1.35004 10.7333C1.40117 11.1176 1.4735 11.4987 1.56671 11.875C1.67504 12.2417 1.79171 12.6083 1.91671 12.9667C1.99171 13.15 2.06671 13.3333 2.15004 13.5167C2.37504 13.7 2.55004 13.6667 2.68337 13.4667C2.65004 13.2833 2.58337 13.0667 2.50004 12.8333Z"
        fill="#3183FD"
        className={pathClassName}
      />
      <path
        d="M19.5417 5.3833C19.5648 4.81479 19.4712 4.24758 19.2667 3.71663C19.1996 3.55844 19.0994 3.4164 18.9729 3.3C18.8465 3.1836 18.6966 3.09552 18.5334 3.04163C16.9081 2.73466 15.2506 2.63387 13.6001 2.74163C8.95008 2.8583 2.85842 3.57497 2.39175 3.52497C2.33034 3.52252 2.27031 3.54357 2.22386 3.58382C2.17742 3.62407 2.14806 3.6805 2.14175 3.74163C2.13948 3.77229 2.14329 3.80309 2.15297 3.83228C2.16264 3.86146 2.17799 3.88844 2.19812 3.91167C2.21825 3.9349 2.24278 3.95392 2.27029 3.96765C2.2978 3.98137 2.32775 3.98952 2.35842 3.99163C2.82508 3.99163 8.95842 3.66663 13.6167 3.6333C15.174 3.54623 16.7361 3.63006 18.2751 3.8833C18.4417 3.9333 18.5084 4.1083 18.5751 4.3333C18.7254 5.04808 18.762 5.78211 18.6834 6.5083C18.5334 8.69997 17.9501 11.55 17.6917 13.3333C17.5751 13.8166 18.0834 13.925 18.2584 13.3333C18.6334 11.2083 19.5167 7.6333 19.5417 5.3833Z"
        fill="#FF3C3C"
        className={pathClassName}
      />
      <path
        d="M19.8918 14.425C19.9257 14.4 19.9532 14.3674 19.972 14.3297C19.9908 14.292 20.0005 14.2505 20.0001 14.2084C20.0001 14.1737 19.9932 14.1394 19.9797 14.1075C19.9662 14.0756 19.9464 14.0468 19.9215 14.0227C19.8967 13.9986 19.8672 13.9797 19.8349 13.9672C19.8026 13.9548 19.7681 13.9489 19.7335 13.95C18.3251 13.95 15.6585 13.775 12.7585 13.725C11.2085 13.725 9.65846 13.65 8.10013 13.675C8.02513 13.675 4.8418 13.675 0.341795 14.15C0.282844 14.1542 0.227692 14.1807 0.187476 14.224C0.14726 14.2673 0.124977 14.3243 0.125128 14.3834C0.121515 14.3998 0.121515 14.4169 0.125128 14.4334C-0.0252844 14.8023 -0.0453264 15.2114 0.0683148 15.5933C0.181956 15.9751 0.422477 16.3067 0.750128 16.5334C1.70912 17.0382 2.78382 17.2824 3.8668 17.2417C5.0418 17.3 6.20846 17.325 7.38346 17.3167C8.75013 17.3167 10.1085 17.2667 11.4668 17.2334C12.8251 17.2 14.1751 17.1667 15.5335 17.1917H16.4501C17.2587 17.2624 18.0732 17.2119 18.8668 17.0417C19.1888 16.976 19.4779 16.8004 19.6846 16.545C19.8914 16.2896 20.0029 15.9703 20.0001 15.6417V14.8084C19.9168 14.65 19.9001 14.525 19.8918 14.425ZM19.3668 15.625C19.3691 15.826 19.2986 16.021 19.1685 16.1742C19.0383 16.3273 18.8572 16.4282 18.6585 16.4584C17.9238 16.5703 17.1764 16.5703 16.4418 16.4584L15.5418 16.4167C14.3706 16.3556 13.1979 16.3278 12.0251 16.3334C10.6585 16.3334 9.30013 16.3334 7.93346 16.425C6.5668 16.5167 5.22513 16.5334 3.8668 16.525C2.90213 16.6195 1.92938 16.4645 1.04179 16.075C0.809336 15.9192 0.635022 15.6908 0.546074 15.4255C0.457125 15.1601 0.458551 14.8728 0.550128 14.6084C1.78346 14.5584 3.00846 14.525 4.2418 14.525H7.33346H10.4251C13.4085 14.525 16.3835 14.525 19.3501 14.4334V14.7584C19.3748 15.0466 19.3803 15.3361 19.3668 15.625Z"
        fill="#008F42"
        className={pathClassName}
      />
    </svg>
  )
}

export function DoctorIcon({ className, pathClassName }: Props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.81087 11.1472C4.5244 11.3231 4.33333 11.6393 4.33333 12C4.33333 12.5523 4.78103 13 5.33333 13C5.88563 13 6.33333 12.5523 6.33333 12C6.33333 11.492 5.95453 11.0725 5.46397 11.0085C5.45303 10.9693 5.44163 10.9242 5.43003 10.8736C5.3901 10.6991 5.352 10.4778 5.32363 10.2504C5.2952 10.0227 5.27757 9.79684 5.2764 9.61254C5.27597 9.54497 5.2778 9.48611 5.28153 9.43674C5.40977 9.39994 5.53837 9.36681 5.66667 9.33757C5.81377 9.30407 5.90083 9.47771 5.97137 9.61841C5.9812 9.63801 5.9907 9.65694 6 9.67461H7.35463C7.6599 9.67454 7.8108 9.67457 7.96343 9.67461C8.11253 9.67464 8.26353 9.67467 8.5617 9.67461H9.91643C9.9925 9.53011 10.1657 9.29941 10.3333 9.33757C10.5121 9.37831 10.6915 9.42664 10.8696 9.48191L10.8685 9.48244C10.8681 9.48167 10.8682 9.48181 10.8686 9.48294C10.8701 9.48761 10.8775 9.50941 10.8847 9.55667C10.893 9.61047 10.8988 9.68041 10.9012 9.76461C10.9059 9.93271 10.8965 10.137 10.8766 10.3429C10.8566 10.5486 10.827 10.7477 10.7937 10.9048C10.7863 10.9396 10.779 10.9714 10.7717 11H10.3333C10.2071 11 10.0917 11.0714 10.0352 11.1843L9.70187 11.851C9.6787 11.8972 9.66667 11.9483 9.66667 12V12.6667C9.66667 12.8508 9.8159 13 10 13H10.6667V12.3334H10.3333V12.0787L10.5393 11.6667H11.4607L11.6667 12.0787V12.3334H11.3333V13H12C12.1841 13 12.3333 12.8508 12.3333 12.6667V12C12.3333 11.9483 12.3213 11.8972 12.2981 11.851L11.9648 11.1843C11.9083 11.0714 11.7929 11 11.6667 11H11.4548C11.4904 10.8225 11.52 10.615 11.5401 10.4071C11.5619 10.1825 11.5733 9.94931 11.5676 9.74591L11.5673 9.73674C12.8965 10.2983 14 11.2221 14 12.19V14H2V12.19C2 11.1792 3.20331 10.2167 4.61033 9.66437C4.61413 9.87157 4.63377 10.1061 4.66207 10.333C4.69263 10.5779 4.7343 10.8218 4.7802 11.0223C4.79003 11.0653 4.80027 11.1071 4.81087 11.1472ZM5.33333 12.3383C5.5128 12.3383 5.66667 12.1914 5.66667 12C5.66667 11.8086 5.5128 11.6618 5.33333 11.6618C5.15387 11.6618 5 11.8086 5 12C5 12.1914 5.15387 12.3383 5.33333 12.3383Z"
        fill="url(#paint0_linear_3159_508)"
        className={pathClassName}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99984 8C9.4726 8 10.6665 6.8061 10.6665 5.33333C10.6665 3.86057 9.4726 2.66667 7.99984 2.66667C6.52707 2.66667 5.33317 3.86057 5.33317 5.33333C5.33317 6.8061 6.52707 8 7.99984 8ZM7.99984 8.66667C9.84077 8.66667 11.3332 7.17427 11.3332 5.33333C11.3332 3.4924 9.84077 2 7.99984 2C6.1589 2 4.6665 3.4924 4.6665 5.33333C4.6665 7.17427 6.1589 8.66667 7.99984 8.66667Z"
        fill="#FF7878"
        className={pathClassName}
      />
      <defs>
        <linearGradient
          id="paint0_linear_3159_508"
          x1="8"
          y1="9.33337"
          x2="8"
          y2="14"
          gradientUnits="userSpaceOnUse"
          className={pathClassName}
        >
          <stop stopColor="#4D9AF5" />
          <stop offset="1" stopColor="#00193F" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function EditIcon({ className, pathClassName }: Props) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName}
        d="M9 15.5C3.46275 15.5 1.5 13.5372 1.5 8C1.5 2.46275 3.46275 0.5 9 0.5C9.3105 0.5 9.5625 0.752 9.5625 1.0625C9.5625 1.373 9.3105 1.625 9 1.625C4.1145 1.625 2.625 3.1145 2.625 8C2.625 12.8855 4.1145 14.375 9 14.375C13.8855 14.375 15.375 12.8855 15.375 8C15.375 7.6895 15.627 7.4375 15.9375 7.4375C16.248 7.4375 16.5 7.6895 16.5 8C16.5 13.5372 14.5372 15.5 9 15.5Z"
        fill="#383838"
      />
      <path
        className={pathClassName}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4274 6.03946L15.2214 5.14295C16.0854 4.1672 15.9939 2.67095 15.0189 1.8062C14.5464 1.3877 13.9359 1.1777 13.3089 1.2167C12.6789 1.25495 12.1014 1.53695 11.6829 2.00945L7.2699 6.99545C5.9019 8.53895 6.8379 10.5797 6.8784 10.6659C6.94515 10.8077 7.06815 10.9157 7.2174 10.9622C7.26015 10.9764 7.75815 11.1287 8.4144 11.1287C9.15315 11.1287 10.0929 10.9344 10.8069 10.1274L14.3081 6.17419C14.3312 6.15525 14.353 6.13419 14.3734 6.11104C14.3936 6.08829 14.4116 6.06434 14.4274 6.03946ZM7.80615 9.9467C8.2764 10.0322 9.3144 10.1162 9.96465 9.38195L13.1528 5.78215L11.2992 4.14049L8.1129 7.7417C7.4469 8.49245 7.65915 9.4937 7.80615 9.9467ZM12.0447 3.29798L13.8991 4.93945L14.3791 4.39745C14.8314 3.88595 14.7841 3.10145 14.2734 2.6492C14.0251 2.4302 13.7034 2.31845 13.3771 2.33945C13.0471 2.36045 12.7449 2.50745 12.5251 2.75495L12.0447 3.29798Z"
        fill="#383838"
      />
    </svg>
  )
}

export function WatchIcon({ className, pathClassName }: Props) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className={pathClassName}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.25 12.0005C21.25 17.1095 17.109 21.2505 12 21.2505C6.891 21.2505 2.75 17.1095 2.75 12.0005C2.75 6.89149 6.891 2.75049 12 2.75049C17.109 2.75049 21.25 6.89149 21.25 12.0005Z"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        className={pathClassName}
        d="M15.4316 14.9429L11.6616 12.6939V7.84692"
        stroke="black"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
