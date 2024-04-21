import { FC, forwardRef } from 'react';

import { ITextareaProps } from './types';

const Textarea: FC<ITextareaProps> = forwardRef(
  ({ label, wrapperClassName, labelClassName, error, isDirty, className, ...props }, ref = null) => {
    return (
      <div className={`base-textarea-wrapper ${error ? 'base-textarea-wrapper--error' : ''} ${wrapperClassName}`}>
        <textarea
          className={`base-textarea ${error ? 'base-textarea--error' : ''} ${
            isDirty ? 'base-textarea--dirty' : ''
          } ${className}`}
          // eslint-disable-next-line
          // @ts-ignore
          ref={ref}
          aria-labelledby={`${props.name}-label`}
          aria-invalid={!!error}
          aria-describedby={`${props.name}-hint`}
          {...props}
        />
        {label && (
          <span
            className={`base-textarea__label ${labelClassName} ${
              props.value?.toString().length ? 'base-textarea__label--not-empty' : ''
            }`}
            id={`${props.name}-label`}
          >
            {label}
          </span>
        )}
        {error && (
          <span className="base-textarea__error-message" id={`${props.name}-hint`}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default Textarea;
