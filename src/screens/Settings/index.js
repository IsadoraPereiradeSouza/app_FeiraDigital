import React from 'react';
import {Text} from 'react-native';
import SettingsComponent from '../../components/SettingsComponent';

export function Settings() {
  <Text>Configurações</Text>;
  const settingsOptions = [
    {title: 'Endereço de entrega', subTitle: null, onPress: () => {}},
    {title: 'Dados Pessoais', subTitle: null, onPress: () => {}},
    {title: 'Alterar Senha', subTitle: null, onPress: () => {}},
    {title: 'Desativar minha conta', subTitle: null, onPress: () => {}},
    {title: 'Sobre OFairta', subTitle: null, onPress: () => {}},
    {title: 'Preciso de ajuda?', subTitle: null, onPress: () => {}},
  ];

  return <SettingsComponent settingsOptions={settingsOptions} />;
}
