import * as path from 'path';
import * as fs from 'fs';

async function seed(directoryPath: string = path.join(__dirname, 'run')) {
  const files = fs.readdirSync(directoryPath);
  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    if (fs.lstatSync(filePath).isDirectory()) {
      await seed(filePath);
    } else {
      if (file.endsWith('.ts')) {
        console.log(`Executando seed: ${file}`);
        await require(filePath).default();
      }
    }
  }
}

seed().catch((error) => {
  console.error('Erro ao executar seeds:', error);
});
