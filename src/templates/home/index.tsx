"use client";
import { useAuth } from "@contexts/auth/auth.context";
export default function Home() {
  const { user } = useAuth();
  return (
    <div className="h-full flex justify-center items-center">
      <div className="grid justify-items-center text-center space-y-0 sm:space-y-2 lg:space-y-10">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-6xl font-extrabold leading-relaxed text-gray-900">
            BIENVENIDO <br className="lg:hidden block" />
            <span className="text-green-joinnus uppercase">
              {user && user.username}
            </span>
          </h1>
        </div>
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-6xl font-extrabold leading-relaxed text-gray-900">
            AL
            <mark className="px-2 text-white bg-green-joinnus rounded">
              PANEL ADMINISTRATIVO
            </mark>
            <br className="lg:hidden block" />
            DE
          </h1>
        </div>
        <div className="w-full flex justify-center items-center">
          {/* <img
            src="https://cdn.joinnus.com/files/joinnus-com-logo.svg"
            alt="logoHeader"
            className="w-5/12"
          /> */}
          Logooo
        </div>
      </div>
    </div>
  );
}
