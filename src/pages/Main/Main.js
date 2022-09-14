import React from 'react';
import Topsales from '../../components/topsales/Topsales';
import Catalog from '../Catalog/Catalog';

export default function Main() {
  return (
    <>
      <Topsales />
      <Catalog nosearch={true} />
    </>
  );
}
