export interface NavProps extends React.ComponentProps<"nav"> {
  navname: string;
}
export const NavItem = ({ navname, onClick, style }: NavProps) => {
  return (
    <>
      <div
        className="btn btn-outline-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
        onClick={onClick}
        style={style}
      >
        {navname}
      </div>
    </>
  );
};
