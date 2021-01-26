// Gatsby supports TypeScript natively!
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const QuienSoy = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Quien soy" />
      <h1>Quien soy</h1>
      <p>
        Mi nombre es Nöe. Soy mamá, fisioterapeuta y empresaria. Como madre quiero enseñaros mi
        pasión por este mundo de los pañales de tela y por qué tomé la decisión de utilizarlos. Como
        fisio os contaré los beneficios (y los no perjuicios) de usarlos, os enseñaré los argumentos
        científicos para ciertas críticas y contestaré las dudas más frecuentes de la gente a la
        hora de empezar. Y como empresaria os haré ver que el ahorro es enorme. Porque sí, el mundo
        del pañaleo está inmerso en la utilización de materiales reutilizables, así que no sólo se
        ahorra en pañales, también se ahorra, por ejemplo, en toallitas y cremas.
      </p>
      <h2>Mi historia</h2>
      <p>
        Comienzo con los pañales de tela en septiembre de 2019 cuando nace mi hijo, aunque ya
        llevaba meses investigando sobre el tema, buscando información y comprando poco a poco mi
        stash (colección de pañales). Pero mi historia con los pañales se remonta unos años atrás,
        cuando mi prima decide utilizar este tipo de pañales con mi sobrino. La verdad, cuando me
        enteré de que iban a utilizarlos pensé lo mismo que muchos otros familiares y amigos: ¡Están
        locas! ¡Qué manera de complicarse la vida! Pero poco a poco, según iba viendo esos
        estampados tan bonitos, e iba escuchandola contando lo maravilloso de la aventura en la que
        se habían metido, fuí cambiado de opinión.
      </p>
      <p>
        Cuando me quedé embarazada no lo dudé un segundo ¡Quería probar los pañalitos! La
        información que iba sacando era todo maravilloso. Sólo encontraba buenas críticas, ahorro,
        ecologismo, cuidado de la piel del bebé,... Aunque papá no estaba muy convencido. Le daba
        pánico imaginarse la situación de tener al niño llorando mientras él tenía que "guardar" el
        pañal sucio en vez de incinerarlo con napalm. Pero ir poco a poco contándole las ventajas de
        los pañales de tela le hizo, poco a poco, verlos cada vez con mejores ojos. Y al igual que
        mi prima, yo también recibí críticas de muchos familiares y amigos, pero finalmente nada nos
        detuvo y nos lanzamos a hacer las primeras compras. En principio sólo íbamos a probar
        alternando tela con desechables, pero tras una semana en el hospital usando sólo desechables
        y teniendo fugas a diario (éramos novatos y supuestamente es lo habitual, de no saber poner
        bien los pañales), y al volver a casa, empezar con los de tela y no volver a tener fugas de
        caca, y las de pipi eran mínimas o nulas, terminamos de convencernos.
      </p>
      <p>
        Si os lo preguntáis ¿qué pasó con los familiares y amigos que criticaban nuestra decisión?
        Fue fácil, simplemente no les dimos opción a utilizar desechables con nuestro bebé. Por que
        sí, nuestro bebé se queda con abuelos, tios, tios abuelos y amigos, y todos, sin excepción,
        le ponen los pañalitos igual que le pondrían un desechable. Era una decisión firme,
        consensuada, estudiada y meditada entre el papá y yo. Nuestro culito iba a ser un culito
        libre de químicos, queríamos lo mejor para nuestro bebé y esta era nuestra decisión.
      </p>
      <p>
        Las críticas se terminaron en unos meses cuando todos iban viendo lo que disfrutábamos con
        los pañalitos. Contar las maravillas de estos pañales ayuda al resto de gente a unirse a tu
        mundo.
      </p>
      <p>
        A lo largo de este blog iréis viendo las opciones que tenéis para utilizar. Como puedes
        tener diferentes tipos de pañales de tela para diferentes momentos y personas.
      </p>
      <p>
        ¡Cuidado! Vais a adentraros en un mundo tan desconocido como maravilloso del que no tenéis
        vuelta atrás.
      </p>
      <p>¡¡Bienvenid@s al mundo de los culitos entelados!!</p>
    </Layout>
  );
};

QuienSoy.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
};

export default QuienSoy;
