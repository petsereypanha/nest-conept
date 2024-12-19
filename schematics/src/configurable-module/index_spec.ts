import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('generate', () => {
  it('works', async () => {
    const runner = new SchematicTestRunner('generate', collectionPath);
    const tree = await runner.runSchematic('generate', {}, Tree.empty());

    expect(tree.files).toEqual([]);
  });
});
