import React, {PropTypes} from 'react';

const TextArea = ({name, onChange, value, error}) => {
  let wrapperClass = 'form-group';
  if(error){
    wrapperClass += ' has-error';
  }
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
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default TextArea;
