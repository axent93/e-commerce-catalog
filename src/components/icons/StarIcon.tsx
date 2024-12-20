import { ISVGProps } from '../../types/common.types'

const StarIcon: React.FC<ISVGProps> = ({ className }) => {
  return (
    <svg
      className={className}
      fill='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g transform='translate(0 -1028.4)'>
        <path
          d='m9.5999 1.4564 1.5501 4.7699 5.015 0.0002-4.057 2.9482 1.55 4.7703-4.0581-2.948-4.0577 2.948 1.5497-4.7703-4.0575-2.9482 5.0154-0.0002z'
          strokeWidth='.69755'
          transform='matrix(1.4336 0 0 1.4336 -1.7602 1028.9)'
        />
      </g>
    </svg>
  )
}

export default StarIcon
