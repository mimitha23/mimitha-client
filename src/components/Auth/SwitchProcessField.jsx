export default function SwitchProcessField({
  onGoingProcess,
  setOnGoingProcess,
}) {
  return (
    <div className="registration-suggestion">
      <span>
        {onGoingProcess === "authorization"
          ? "არ გაქვს ანგარიში ?"
          : onGoingProcess === "registration"
          ? "გაქვს ანგარიში ?"
          : ""}
      </span>
      &nbsp;
      <button
        onClick={(e) => {
          e.preventDefault();
          setOnGoingProcess((prev) =>
            prev === "authorization"
              ? "registration"
              : prev === "registration"
              ? "authorization"
              : ""
          );
        }}
      >
        {onGoingProcess === "authorization"
          ? "რეგისტრაცია"
          : onGoingProcess === "registration"
          ? "ავტორიზაცია"
          : ""}
      </button>
    </div>
  );
}
