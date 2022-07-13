import { useState, useEffect } from "react";

function useCheckButton(form, isValid) {
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (form) {
      if (form.checkValidity()) {
        setSubmit(true);
      } else setSubmit(false);
    }
  }, [form, isValid, submit]);

  return submit;
}

export default useCheckButton;
