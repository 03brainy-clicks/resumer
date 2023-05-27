import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faChevronDown,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Avatar } from "../assets/avatar.svg";
import { Link } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DropDown({ user, logout }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900  hover:bg-gray-50 gap-3 items-center">
          <Avatar className="w-7 h-7 mr-1" />
          <FontAwesomeIcon icon={faChevronDown} className="text-gray-500" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <span
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm"
                  )}
                >
                  <FontAwesomeIcon
                    icon={faUser}
                    className="mr-1 text-gray-700"
                  />{" "}
                  {user}
                </span>
              )}
            </Menu.Item>

            <form>
              <Menu.Item>
                {({ active }) => (
                  <Link to={"/"}>
                    <button
                      onClick={logout}
                      className={classNames(
                        active ? "bg-gray-100 text-red-500" : "text-gray-700",
                        "block w-full px-4 py-2 text-left text-sm"
                      )}
                    >
                      <FontAwesomeIcon
                        icon={faArrowRightFromBracket}
                        className="mr-1  hover:text-red-500"
                      />{" "}
                      Logout
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
