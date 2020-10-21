import React, {useState} from 'react';

export function FileInput(props){
  const [files, setFiles] = useState([])
  const [label, setLabel] = useState(props.prompt)

  return(
    <label className="fileInput">
      <input 
        hidden 
        type="file" 
        multiple 
        onChange={e => {
          const file = e.currentTarget.files[0]
          setFiles([...files, file])
          e.target.files.length > 0 ? setLabel(file.name) : setLabel(props.prompt)
        }}
      />
      <span className="fileInputButton">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M18.5 15c-2.483 0-4.5 2.015-4.5 4.5s2.017 4.5 4.5 4.5 4.5-2.015 4.5-4.5-2.017-4.5-4.5-4.5zm2.5 5h-2v2h-1v-2h-2v-1h2v-2h1v2h2v1zm-7.18 4h-12.82v-24h8.409c4.857 0 3.335 8 3.335 8 3.009-.745 8.256-.419 8.256 3v2.501c-.771-.322-1.614-.501-2.5-.501-3.584 0-6.5 2.916-6.5 6.5 0 1.747.696 3.331 1.82 4.5zm-.252-23.925c2.202 1.174 5.938 4.883 7.432 6.881-1.286-.9-4.044-1.657-6.091-1.179.222-1.468-.185-4.534-1.341-5.702z"/>
        </svg>
      </span>
      <p>{label}</p>
    </label>

  )
}