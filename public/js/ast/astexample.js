//ast ejemplo para creación de linter según una variable para comprobar que sea numerica y el nombre en mayuscula

export default function (context) {
  return {
    VariableDeclaration(node) {
      console.log(node);
      //tipo de variable const
      if (node.kind == 'const') {
        const declaration = node.declarations[0];
        if (typeof declaration.init.value === 'number') {
          if (declaration.id.name !== declaration.id.name.toUpperCase()) {
            context.report({
              node: declaration.id,
              message: 'El nombre de la constante debe estar en mayúsculas',
              fix: function (fixer) {
                return fixer.replaceText(
                  declaration.id,
                  declaration.id.name.toUpperCase()
                );
              },
            });
          }
        }
      }
    },
  };
}
