import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Head from "next/head";
import ProfileImage from "@/components/ProfileImage/ProfileImage";
import PersonalInfo from "@/components/PersonalInfo/PersonalInfo";
import ContactIcons from "@/components/ContactIcons/ContactIcons";
import SocialMediaIcons from "@/components/SocialMediaIcons/SocialMediaIcons";
import Layout from "@/components/Layout/Layout";
import { motion } from "framer-motion";
import PaymentInfo from "@/components/PaymentInfo/PaymentInfo";
import EducationAndCertifications from "@/components/EducationAndCertification/EducationAndCertification";
import ImageGallery from "@/components/ImageGallery/ImageGallery";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";
import QRCodeComponent from "@/components/QrCodeComponent/QrCodeComponent";
import Footer from "@/components/Footer/Footer";
import CustomNavbar from "@/components/Navbar/Navbar";
import styles from "../styles/variants/variant1.module.scss";
import ImageCarousel from "@/components/Caroussel/Caroussel";

export default function Modelo2() {
  const items = [
    {
      title: "Pregrado Medicina",
      institution: "Escuela Politécnica del Chimborazo",
      year: "2018",
      description: "Graduado en Medicina en la Escuela Politécnica del Chimborazo.",
      logo: "/images/education/espoch_logo.jpeg",
    },
    {
      title: "Posgrado Traumatología",
      institution: "Universidad San Francisco de Quito",
      year: "2023",
      description:
        "Estudios de posgrado en Traumatología y Ortopedia en la Universidad San Francisco de Quito.",
      logo: "/images/education/logo_usfq.png",
    },
  ];

  const images = [
    {
      thumbnail: "/images/users/traumatologo_iess.jpg",
      full: "/images/users/traumatologo_iess.jpg",
      description: "Médico Iess El Batán",
      alt: "Servicio de Traumatología Iess El Batán",
      experience: [
        "Especialista con enfoque en trastornos musculoesqueléticos.",
        "Actualizado en técnicas ortopédicas avanzadas para una atención de calidad.",
        "Amplia experiencia en atención médica general en el Hospital del IESS El Batán, ofreciendo cuidado integral y personalizado a los pacientes.",
      ],
    },
    {
      thumbnail: "/images/users/traumatologo_met.jpg",
      full: "/images/users/traumatologo_met.jpg",
      description: "Traumatólogo Clínica MET",
      alt: "Servicio de Traumatología Clínica Met",
      experience: [
        "Implementación de técnicas ortopédicas modernas para recuperaciones eficientes.",
        "Enfoque en tratamientos individualizados, promoviendo una rápida y efectiva recuperación de los pacientes.",
      ],
    },
  ];

  const carouselImages = [
    {
      full: "/images/users/galeria_columna.jpg",
      alt: "Columna imagen",
      description: "Cirugía de Columna",
      experience: ["Especialista en cirugía de columna", "Seguridad y confianza en cada procedimiento"],
    },
    {
      full: "/images/users/galeria_hombro.jpg",
      alt: "Hombro imagen",
      description: "Cirugía de Hombro",
      experience: ["Especialista en cirugía de hombro", "Tu salud en buenas manos"],
    },
    {
      full: "/images/users/galeria_mano.jpg",
      alt: "Mano imagen",
      description: "Cirugía de Mano",
      experience: ["Especialista en cirugía de mano", "Garantía de resultados óptimos"],
    },
    {
      full: "/images/users/galeria_pie.jpg",
      alt: "Pie imagen",
      description: "Cirugía de Pie",
      experience: ["Especialista en cirugía de pie", "Resultados satisfactorios garantizados"],
    },
    {
      full: "/images/users/galeria_rodilla.jpg",
      alt: "Rodilla imagen",
      description: "Cirugía de Rodilla",
      experience: ["Especialista en cirugía de rodilla", "Recuperación rápida y efectiva"],
    },
  ];

  return (
    <>
      <Head>
        <title>Dr. Nelson Tinoco V.</title>
        <meta name="description" content="Dr. Nelson Tinoco V. Digital Card" />
        <link rel="icon" href="/icons/logo.ico" />

        {/* Open Graph */}
        <meta property="og:url" content="https://drnelsontinocov.businessdigicards.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Business digital card Dr. Nelson Tinoco V." />
        <meta property="og:description" content="Tarjeta de presentación digital" />
        <meta
          property="og:image"
          content="https://drnelsontinocov.businessdigicards.com/images/shared_image.png"
        />
      </Head>

      <Layout>
        <CustomNavbar
          logoSrc="/images/logo.png"
          logoClassName={styles.navbarLogo}
          navClassName={styles.nav}
          navLinkClassName={styles.navLink}
        />
        <Container fluid className={styles.mainContainer}>
          <Row className={styles.mainRow}>
            <Col xs={12} className={styles.infoCol}>
              <section id="profile">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <ProfileImage
                    src="/images/users/profile3.png"
                    alt="Dr. Nelson Tinoco V."
                    size={300}
                    profileImageContainerClassName={styles.profileImageContainer}
                  />
                </motion.div>
              </section>
              <section>
                <PersonalInfo
                  name="Dr. Nelson Tinoco V."
                  title="Médico Traumatólogo"
                  description="Médico Especialista en Ortopedia y Traumatología "
                  nameClassName={styles.personalInfoName}
                  titleClassName={styles.personalInfoTitle}
                  descriptionClassName={styles.personalInfoDescription}
                />
              </section>
              <section className={styles.socialMediaSection}>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <SocialMediaIcons
                    facebook="https://www.facebook.com/nelson.tinocovaca?locale=es_LA"
                    facebookIcon="/icons/green_gb/facebook_gb.png"
                    twitter="https://twitter.com/NelsinhoTV"
                    twitterIcon="/icons/green_gb/xtwitter_gb.png"
                    instagram="https://www.instagram.com/nelsontinoco/"
                    instagramIcon="/icons/green_gb/instagram_gb.png"
                    // linkedin="https://www.linkedin.com/userlinkedin"
                    // linkedinIcon="/icons/green_gb/linkedin_gb.png"
                    //  youtube="https://www.youtube.com/useryoutube"
                    //  youtubeIcon="/icons/black/youtube_b.png"
                    //pinterest="https://www.pinterest.com/userpinterest"
                    //pinterestIcon="/icons/black/pinterest_b.png"
                    //   snapchat="https://www.snapchat.com/usersnapchat"
                    //   snapchatIcon="/icons/black/snapchat_b.png"
                    //   reddit="https://www.reddit.com/userreddit"
                    //   redditIcon="/icons/black/reddit_b.png"
                    //   tumblr="https://www.tumblr.com/usertumblr"
                    //   tumblrIcon="/icons/black/tumblr_b.png"
                    //  tiktok="https://www.tiktok.com/usertiktok"
                    //  tiktokIcon="/icons/green_gb/tiktok_gb.png"
                  />

                  {/* Columna con información de contacto */}

                  <section>
                    <ContactIcons
                      phone="+593984377272"
                      phoneIcon="/icons/green_gb/call_gb.png"
                      email="nelsinho-1@hotmail.com"
                      emailIcon="/icons/green_gb/email_gb.png"
                      whatsapp="+593984377272"
                      whatsappIcon="/icons/green_gb/whatsapp_gb.png"
                      telegram="+593984377272"
                      telegramIcon="/icons/green_gb/telegram_gb.png"
                      location={"El Vagon del Arte, Quito, Ecuador"}
                      locationIcon="/icons/green_gb/location_gb.png"
                    />
                  </section>
                </motion.div>
              </section>
              <section className={styles.imageSection}>
                <Image
                  src="/images/users/hero.jpg"
                  alt="Profesional de la salud"
                  width={500}
                  height={300}
                  layout="responsive"
                  className={styles.backgroundImage}
                />
              </section>
            </Col>
          </Row>

          {/* Componente de educación y certificaciones */}

          <Row>
            <Col className={styles.educationSection}>
              <section id="education">
                <div className={styles.educationText}>
                  <h2 className={styles.educationTitle}>Educación y Certificaciones</h2>
                  <span className={styles.educationInstructions}>
                    Haz clic en el logo para ver la información
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.educationInfo}>
                    <EducationAndCertifications
                      items={items}
                      itemClassName={styles.educationItem}
                      logoClassName={styles.educationLogo}
                      titleClassName={styles.educationItemTitle}
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          {/* Componente de experiencia laboral */}

          <Row>
            <Col className={styles.imageGallery}>
              <div className={styles.imageGalleryText}>
                <h2 className={styles.imageGalleryTitle}>Experiencia laboral</h2>
                <span className={styles.imageGalleryInstructions}>
                  Haz clic en la imagen para ver la información
                </span>
              </div>

              <ImageGallery
                images={images}
                imageDescriptionClassName={styles.imageDescription}
                thumbnailClassName={styles.thumbnail}
                modalDescriptionClassName={styles.modalDescription}
              />
            </Col>
          </Row>

          {/* Componente Carruseles de imágenes */}

          <Row>
            <Col className={styles.imageCarousel}>
              <div className={styles.imageCarouselContainer}>
                <h2 className={styles.imageCarouselTitle}>Especialidades</h2>
                <span className={styles.imageCarouselInstructions}>
                  Experiencia y Calidad
                </span>
                <ImageCarousel images={carouselImages} />
              </div>
            </Col>
          </Row>

          {/* Componente de video player */}

          <Row>
            <Col className={styles.videoPlayer}>
              <VideoPlayer videoUrl="/video/users/video_traumato.mp4" />
            </Col>
          </Row>

          {/* Componente de información de pago */}

          <Row>
            <Col className={styles.paymentSection}>
              <section id="payment" className={styles.paymentInfo}>
                <div className={styles.paymentText}>
                  <h2 className={styles.paymentTitle}>Información de Pago</h2>
                  <span className={styles.paymentInstructions}>
                    Haz clic en el logo para acceder a los datos de la cuenta
                  </span>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <div className={styles.bankInfo}>
                    <PaymentInfo
                      bankName="Banco Pichincha"
                      accountNumber="2207185861"
                      accountType="Cuenta de ahorros"
                      identification="1723644009"
                      email="nelsinho-1@hotmail.com"
                      bankLogo="/images/banksLogos/logoB_pichincha.png"
                    />
                    <PaymentInfo
                      bankName="Banco Produbanco"
                      accountNumber="12095144167"
                      accountType="Cuenta de ahorros"
                      identification="1723644009"
                      email="nelsinho-1@hotmail.com"
                      bankLogo="/images/banksLogos/logoB_produbanco.png"
                    />
                  </div>
                </motion.div>
              </section>
            </Col>
          </Row>

          

          {/* Componente de QR Code */}
          <Row>
            <Col className={styles.qrCode}>
              <section>
                <QRCodeComponent
                  qrCodeImageUrl="images/qrcode-nelsontinocov.png"
                  altText="QR Code"
                />
              </section>
              <p className={styles.scanText}>Escanea tu código</p>
            </Col>
          </Row>

          {/* Componente de footer */}
          <Row>
            <Col className={styles.footerCol}>
              <Footer
                footerClassName={styles.footerClassName}
                containerFooterClassName={styles.containerFooterClassName}
                textFooterClassName={styles.textFooterClassName}
                linkFooterClassName={styles.linkFooterClassName}
              />
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
}
