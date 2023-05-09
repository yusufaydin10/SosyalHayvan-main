
export const Container = (
    props
  ) => {
    const { children, className, ...rest } = props;
  
    return (
      <div
        className={`mx-auto w-[95%] max-w-screen-2xl sm:w-[90%] ${
          className ? className : ""
        }`}
        {...rest}
      >
        {children}
      </div>
    );
  };