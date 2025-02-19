/*!
 * Copyright 2025 Saturno Team
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { nfse, orders } from '../src';
import { login } from '../src/auth';

/**
 * Esse script irá pegar todos os pedidos recentes gerados no dia de hoje,
 * que ainda não tenha sido emitido nota fiscal,
 * e emitir a NFSe automaticamente para o cliente que você estipular acima,
 * ignorando o cliente registrado no pedido.
 */

// Aqui você coloca todos os clientes que você deseja distribuir as notas fiscais
const clientesId = ['62598b80f62b18f0c8404a99'];

export async function emitirNFSeAutomaticamente() {
  console.log(
    'Essa chegagem só faz o teste de até 100 NFSes, se quiser mais, reexecute essa função após o termino'
  );

  try {
    await login({
      username: '',
      password: '',
    });
    // Aqui buscamos a partir de 100 pedidos registrados no CalcMe
    const allOrders = await orders.get(0, 100);
    if (!allOrders || !allOrders.data.content.length) {
      console.error('Nenhum pedido encontrado ou erro na requisição.');
      return;
    }
    // Filtra apenas pedidos válidos para emissão de NFSe
    const pedidosValidos = allOrders.data.content.filter(
      (order) =>
        order.data === new Date().toISOString().split('T')[0] &&
        !order.hasNFCe &&
        !order.hasNFSe &&
        !order.hasNFe
    );

    if (!pedidosValidos.length) {
      console.log('Nenhum pedido elegível para emissão de NFSe.');
      return;
    }
    // Distribui os pedidos igualmente entre os clientes
    for (let i = 0; i < pedidosValidos.length; i++) {
      const order = pedidosValidos[i];
      const clienteId = clientesId[i % clientesId.length]; // Alterna entre os clientes

      console.log(
        `Emitindo NFSe para o pedido: ${order.idInt} - ${order.clienteNome} (Cliente: ${clienteId})`
      );

      try {
        await nfse.newNFSe({
          idOrder: order.id,
          clienteId: clienteId,
          tomadorNaoIdentificado: false,
          descricaoServico: order.itens.map((item) => item.titulo).join('\n'),
          valorServico: order.valorTotal,
        });
        console.log('NFSe emitida com sucesso!');
        throw 'concluido primeira nota. Agora, confira se esta tudo certo, apague a linha 81 do arquivo, e continue com as outras emissões.';
      } catch (error) {
        console.error(
          `ERRO AO EMITIR NFSe: ${order.idInt} - ${order.clienteNome}`,
          error
        );
      }
    }

    console.log('Todas as NFSe foram emitidas.');
  } catch (error) {
    console.error(error);
  }
}

emitirNFSeAutomaticamente();
