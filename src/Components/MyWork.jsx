import React from "react";
import { useState } from "react";
import { GalleryData } from "../Gallery/data";
import { MdZoomOutMap, MdClose } from "react-icons/md";
import {
  WorkSection,
  Container,
  Title,
  ContentContainer,
  CardImage,
  ZoomIcon,
  Card,
  ImageContainer,
  Modal,
  ModalImages,
  Close,
} from "../Styles/MyWorkStyles";

const MyWork = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");

  const openModal = (img) => {
    setImgSrc(img);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <WorkSection id="work">
        <Container>
          <Modal show={isOpen ? "open" : null} onClick={() => closeModal()}>
            <Close onClick={() => closeModal()}>
              <MdClose />
            </Close>
            <ModalImages src={imgSrc} show={isOpen ? "open" : null} />
          </Modal>
          <Title>My work</Title>
          <ContentContainer>
            {GalleryData.map((item) => (
              <Card key={item.id}>
                <ZoomIcon onClick={() => openModal(item.img)}>
                  <MdZoomOutMap />
                </ZoomIcon>
                <ImageContainer>
                  <CardImage src={item.img} />
                </ImageContainer>
              </Card>
            ))}
          </ContentContainer>
        </Container>
      </WorkSection>
    </>
  );
};

export default MyWork;
