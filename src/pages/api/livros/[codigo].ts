import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivros } from '.';

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  const { codigo } = req.query;
  console.log(`codigo = ${codigo}`);
  try {
    if (req.method === 'DELETE') {
      controleLivros.excluir(Number(codigo));
      res.status(200).json({
        message: 'Livro excluído com sucesso'
      });
    }
    else {
      res.status(405).json({
        message: 'API livros [codigo] - Método não permitido'
      });
    }
  }
  catch (e) {
    res.status(500).json({
      message: 'Erro interno no servidor'
    });
  }
};