interface AccordionProps {
  isOpen: boolean;
  title: string;
  disabled: boolean;
  handleClick: (close: boolean) => void;
  children: React.ReactNode;
}

const Accordion = (props: AccordionProps) => {
  const { isOpen, title, disabled, handleClick, children } = props;
  const iconClassName = isOpen
    ? "fa-solid fa-angle-down"
    : "fa-solid fa-angle-right";

  return (
    <>
      <div className="accordion">
        <button
          className="accordion-head p-base"
          onClick={() => !disabled && handleClick(!isOpen)}
        >
          <div className="flex-box">
            <h2>{title}</h2>
            <i className={iconClassName}></i>
          </div>
        </button>
        <div className={`accordion-body ${isOpen ? "active p-base" : ""}`}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Accordion;
