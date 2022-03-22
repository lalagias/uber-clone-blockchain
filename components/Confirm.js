import RideSelector from "./RideSelector";

const style = {
  wrapper: `h-full w-full flex flex-col`,
  rideSelectorContainer: `h-full flex flex-col overflow-scroll`,
  confirmButtonContainer: `border-t-2 cursor-pointer z-10`,
  confirmButton: `bg-black text-white m-4 py-4 text-center text-xl`,
};

const Confirm = () => {
  const storeTripDetails = async () => {};

  return (
    <div className={style.wrapper}>
      <div className={style.rideSelectorContainer}>
        <RideSelector/>
      </div>
      <div className={style.confirmButtonContainer}>
        <div className={style.confirmButtonContainer}>
          <div
            className={style.confirmButton}
            onClick={() => storeTripDetails()}
          >
            Confirm UberX
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirm;
