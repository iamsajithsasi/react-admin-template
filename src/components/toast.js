import React, { useRef, useEffect } from "react";
import { Toast } from "primereact/toast";

import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { toastMessage } from "../library/store/toast";

export default function ToastManager(props) {
  const toast = useRef(null);

  const toastData = useSelector((state) => state.toast.value);
  //   const dispatch = useDispatch();
  //   const message = {
  //     severity: "success",
  //     summary: "heading",
  //     detail: "description",
  //     life: 3000,
  //   };

  useEffect(() => {
    if (toastData.severity && toastData.summary && toastData.detail) {
      toast.current.show({ ...toastData });
    }
  }, [toastData]);

  useEffect(() => {
    if (props.severity && props.summary && props.detail) {
      toast.current.show({
        severity: props.severity,
        summary: props.summary,
        detail: props.detail,
        life: 3000,
      });
    }
  }, [props]);

  return (
    <div>
      <Toast ref={toast}></Toast>

      {/* <button onClick={() => dispatch(toastMessage(message))}>Mesage</button> */}
    </div>
  );
}
