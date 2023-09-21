import { motion } from "framer-motion";

function NavLink({ label, to }: { label: string; to: string }) {
  const linkVariants = {
    initial: {
      y: "100%",
    },
    animate: {
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      variants={linkVariants}
      className="text-3xl text-white font-semibold uppercase"
    >
      <a href={to}>{label}</a>
    </motion.div>
  );
}

export default NavLink;
