import * as React from "react"

type HospitalIconProps = {
  color?: string;
}

const HospitalIcon: React.FC<HospitalIconProps> = ({ color }) => (

  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
  >
    <path stroke={ color || "#fff" } strokeLinecap="round" strokeWidth={1.5} d="M22 22H2" />
    <path
      stroke={ color || "#fff" }
      strokeWidth={1.5}
      d="M17 22V6c0-1.886 0-2.828-.586-3.414C15.828 2 14.886 2 13 2h-2c-1.886 0-2.828 0-3.414.586C7 3.172 7 4.114 7 6v16m14 0V8.5c0-1.404 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C19.607 5 18.904 5 17.5 5M3 22V8.5c0-1.404 0-2.107.337-2.611a2 2 0 0 1 .552-.552C4.393 5 5.096 5 6.5 5"
    />
    <path
      stroke={ color || "#fff" }
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 22v-3m-2-7h4m-8.5-1H7m-1.5 3H7m10-3h1.5M17 14h1.5m-13-6H7m10 0h1.5M10 15h4"
    />
    <path
      stroke={ color || "#fff" }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 9V5m2 2h-4"
    />
  </svg>
)
export default HospitalIcon;