// import {NotfoundRouteProps} from '@tanstack/react-router'

import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";

export function NotFound() {
    return (
        <div className="  flex size-full items-center justify-center p-2 text-2xl h-dvh">
        <div className="flex flex-col items-center gap-4 ">

      <h1 className="text-4xl font-bold ">Oops!</h1>
      <p className="">Page not found</p>
      <Button asChild>
        <Link to="/">Go Home</Link>
      </Button>
        </div>
    </div>
  );
}
