import { Button } from "@material-ui/core";
import LoginIcon from '@material-ui/icons/AccountCircle';

type GreetingProps = { name: string };

const Greeting = ({ name }: GreetingProps) => (
  <div>
    <h1>Hello {name} </h1>
    <Button color="primary" variant="contained">
      Click Me
    </Button>
    <br />
    <br />
    <Button startIcon={<LoginIcon />} color="primary" variant="contained">
      Login
    </Button>
  </div>
);
export default Greeting;