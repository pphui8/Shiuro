import * as React from "react";
import { motion, Reorder } from "framer-motion";
import { Pages } from "./pages";

interface Props {
  item: Pages;
  isSelected: boolean;
  onClick: () => void;
  onRemove: () => void;
}

export const Tab = ({ item, onClick, onRemove, isSelected }: Props) => {
  return (
    <Reorder.Item
      value={item}
      id={item.label}
      initial={{ opacity: 0, y: 30 }}
      animate={{
        opacity: 1,
        backgroundColor: isSelected ? "#fff" : "#f3f3f3",
        y: 0,
        transition: { duration: 0.15 }
      }}
      whileHover={{ opacity: 0.7 }}
      exit={{ opacity: 0, y: 20, transition: { duration: 0.3 } }}
      whileDrag={{ backgroundColor: "#fcfcfc" }}
      className={isSelected ? "selected" : ""}
      onPointerDown={onClick}
    >
      <motion.span layout="position"><i className={'mgc_' + item.icon}/>{`  ${item.label}`}</motion.span>
      <motion.div layout className="close">
        <motion.button
          onPointerDown={(event) => {
            event.stopPropagation();
            onRemove();
          }}
          initial={false}
          animate={{ backgroundColor: isSelected ? "#e3e3e3" : "#fff" }}
        >
          <i className="mgc_close_line"/>
        </motion.button>
      </motion.div>
    </Reorder.Item>
  );
};
