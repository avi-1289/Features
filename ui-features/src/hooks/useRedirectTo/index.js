import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

function useRedirectTo(props = {}) {
  const navigate = useNavigate();

  const getAllQueryParams = () => {
    const params = new URLSearchParams(window.location.search);
    let queryParams = {};
    for (let value of params.keys()) {
      queryParams[value] = params.get(value);
    }
    return queryParams;
  };

  const redirectTo = (
    redirectionUrl,
    queryParams = {},
    relativeToUrl,
    redirectionAfterMs,
    scrollToTop = true
  ) => {
    if (!redirectionUrl) return;
    let _queryParams = Object.assign(getAllQueryParams(), queryParams);

    let url = redirectionUrl;
    if (_queryParams) {
      url +=
        "?" +
        Object.keys(_queryParams)
          .map((k) => `${k}=${_queryParams[k]}`)
          .join("&");
    }
    if (redirectionAfterMs) {
      setTimeout(() => {
        navigate(url, { replace: relativeToUrl || false });
      }, redirectionAfterMs);
    } else {
      navigate(url, { replace: relativeToUrl || false });
    }
    if (scrollToTop) {
      window.scrollTo(0, 0);
    }
  };
  // eslint-disable-next-line
  const redirection = useCallback(redirectTo, []);

  return { redirectTo: redirection };
}

export default useRedirectTo;
