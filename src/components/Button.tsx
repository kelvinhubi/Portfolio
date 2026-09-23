import { useValue } from "../contextsample/useme";

export interface ButtonProps extends React.ComponentProps<"button"> {}

export const Button = ({ children }: ButtonProps) => {
  const { value, setValue } = useValue();
  const work = () => {
    console.log(value);
  };
  return (
    <>
      <div>
        <input onChange={(e) => setValue(e.target.value)}></input>
      </div>
      <button onClick={work}>{children}</button>
    </>
  );
};
