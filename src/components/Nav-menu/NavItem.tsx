export interface NavProps extends React.ComponentProps<"nav"> {
  navname: string;
}
export const NavItem = ({ navname, onClick, style }: NavProps) => {
  return (
    <>
      <div className="nav-content" onClick={onClick} style={style}>
        {navname}
      </div>
    </>
  );
};
