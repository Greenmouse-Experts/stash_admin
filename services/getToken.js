const {useLazyRefetchTokenQuery } = require("./api/authSlice");

export const refresh = async () => {
    await useLazyRefetchTokenQuery()
        .then((res) => {
          if (res.isSuccess) {
            store.dispatch(
              saveAuth({
                ...store.getState().auth.auth,
                token: response.data.data.token,
                refreshToken: response.data.data.refreshToken,
              })
            );
            toast.success(res.data.msg);
          }
  
          if (res.isError) {
            toast.error(res.error.data.msg);
            setIsBusy(false);
          }
        })
        .catch((err) => {
          toast.error("Login Failed");
          setIsBusy(false);
        });
  }