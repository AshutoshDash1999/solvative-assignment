import React from "react";

const KeyboardShortcut = ({ children }: { children: React.ReactNode }) => {
  return <button className="keyboard__shortcut__container">{children}</button>;
};

export default KeyboardShortcut;
