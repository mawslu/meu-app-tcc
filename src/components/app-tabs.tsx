
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function AppTabs() {
  return (
    <NativeTabs
      backgroundColor="#FFFFFF"
      indicatorColor="#E9EDF3"
      rippleColor="#A9B7C6"
      tintColor="#173B70"
      labelStyle={{
        default: { color: '#5D87B7' },
        selected: { color: '#173B70' },
      }}
    >
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Início</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="house.fill"
          md="home"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Explorar</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="safari"
          md="explore"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="bibliotecas">
        <NativeTabs.Trigger.Label>Bibliotecas</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="books.vertical"
          md="menu_book"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="espacos">
        <NativeTabs.Trigger.Label>Espaços</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="map"
          md="map"
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="atividades">
        <NativeTabs.Trigger.Label>Atividades</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          sf="calendar"
          md="event"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
