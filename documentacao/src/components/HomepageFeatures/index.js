import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'CIIA',
    Img: require('@site/static/img/ciia_logo.png').default,
    description: (
      <>
        Impulsionar a pesquisa, o desenvolvimento e a aplicação da inteligência artificial de forma responsável
         e ética para o benefício da sociedade brasileira. Tem a visão de tornar-se referência global em inteligência artificial.
      </>
    ),
  },
  {
    title: 'NiaEdu',
    Img: require('@site/static/img/nia_edu_logo.png').default,
    imgClassName: 'roundedImage',
    description: (
      <>
        O NIAEdu é um núcleo temático do Centro Integrado 
        de Inteligência Artificial (CIIA) do Governo do Distrito Federal dedicado a enfrentar os desafios educacionais
         com soluções tecnológicas inovadoras, práticas e inclusivas.
      </>
    ),
  },
  {
    title: 'Secretaria da Educação',
    Img: require('@site/static/img/see_logo.png').default,
    imgClassName: 'roundedImage',
    description: (
      <>
        Com o objetivo de utilizar inteligência artificial para tornar o ensino mais personalizado, acessível e eficaz, 
        promovendo uma educação colaborativa, dinâmica e orientada por dados, com foco na redução das desigualdades.
      </>
    ),
  },
];

function Feature({ title, Img, imgClassName, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img
          src={Img}
          className={clsx(styles.featureImg, imgClassName && styles[imgClassName])}
          alt={`${title} logo`}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
