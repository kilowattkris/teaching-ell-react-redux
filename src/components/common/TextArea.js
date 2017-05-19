import React, {PropTypes} from 'react';

const TextArea = ({name, onChange, value}) => {
  let wrapperClass = 'form-group';
  return (
    <div className={wrapperClass}>
      <textarea
        name={name}
        className="form-control"
        onChange={onChange}
        value={value}
        autoCapitalize="false"
        autoCorrect="false"
        autoComplete="false"
        spellCheck="false"
      />
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired
};

export default TextArea;
