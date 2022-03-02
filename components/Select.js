import { useState } from 'react'
import Select from 'react-select'
const options = [
  { value: 'South-korea', label: 'south-korea' },
  { value: 'germany', label: 'germany' },
  { value: 'india', label: 'india' },
]

export default function AnimatedMulti() {
  const [curentCantryes, setcurentCantryes] = useState(['south-korea'])

  console.log(curentCantryes);

  const isMulti = true
  const getValue = () => {
    if (curentCantryes) {
      return isMulti
        ? options.filter(
            (el) => el.value === curentCantryes.indexOf(el.value)
          ) >= 0
        : options.find((el) => el.value === curentCantryes)
    } else {
      return isMulti ? [] : ''
    }
  }
  const onChange = (newValue) => {
    setcurentCantryes(newValue.value)
  }

  return (
    <div className='w-4/5 mx-auto my-10 '>
      <h1 className='mb-3 text-white tex-xl  font-medium '>hello:</h1>
      <Select
        value={getValue()}
        instanceId
        isMulti={isMulti}
        onChange={onChange}
        options={options}
      />
    </div>
  )
}
