import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

function MainNav() {

  const {loginWithRedirect} = useAuth0()

  return (
    <>
    <Button
      variant="ghost"
      className="font-bold hover:text-orange-500"
      onClick={async () => await loginWithRedirect()}
      >
      Login
    </Button>
    <Button
    variant="ghost"
    onClick={async () => await loginWithRedirect()}
    className="font-bold hover:text-orange-500" >

      Logout
    </Button>
      </>
  )
}

export default MainNav;
