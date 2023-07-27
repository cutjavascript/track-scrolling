export default function (scrollDepths, callBack, returnError) {
  try {
    //  Block of code to try
    const handleScroll = () => {
      if (window && !window["scrollDepths"]) {
        window["scrollDepths"] = scrollDepths;
      }

      if (
        typeof window != "undefined" &&
        window["scrollDepths"] &&
        window["scrollDepths"].length > 0
      ) {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        const height =
          document.documentElement.scrollHeight - document.documentElement.clientHeight;

        const scrolled = (winScroll / height) * 100;

        if (scrolled >= window["scrollDepths"][0]) {
          if (callBack && typeof callBack === "function") {
            callBack(scrolled);
          }

          window["scrollDepths"].shift();
        }
      } else {
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
  } catch (error) {
    if (returnError) {
      return error;
    }
  }
}
