import React from 'react';
import { motion } from 'framer-motion';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Button } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';

const Categories = ({ icon, category, konten }) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrollBehavior, setScrollBehavior] = React.useState('inside');

  const btnRef = React.useRef(null);
  return (
    <motion.div variants={item} whileHover={{ scale: 1.1 }} className="flex items-center flex-col gap-4 bg-white p-8 rounded-[2rem]">
      <div className="w-[50px]">
        <img src={icon} alt="" />
      </div>
      <div className="">{category}</div>

      <>
        <p ref={btnRef} onClick={onOpen} value={scrollBehavior} onChange={setScrollBehavior} className="text-[13px] text-gray hover:text-[#ff0000] cursor-pointer hover:underline">
          View More
        </p>
        <Modal onClose={onClose} finalFocusRef={btnRef} isOpen={isOpen} scrollBehavior={scrollBehavior}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{category}</ModalHeader>
            <ModalCloseButton />
            <ModalBody className="text-justify">{konten}</ModalBody>
            <ModalFooter>
              <Button colorScheme="red" mr={3} onClick={onClose}>
                Tutup
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </motion.div>
  );
};

export default Categories;
