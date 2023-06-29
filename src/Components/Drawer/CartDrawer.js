import { useDisclosure } from "@mantine/hooks";
import { Drawer, Button, Group } from "@mantine/core";

export default function CartDrawer({ opened, close }) {
  //   const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title="Cart"
        zIndex={1000}
        withOverlay={true}
        position={"right"}
        // sx={{
        //   position: "relative",
        // }}
      >
        {/* Drawer content */}
      </Drawer>
    </>
  );
}
