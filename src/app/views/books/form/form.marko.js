// Compiled using marko@4.13.4-1 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/cursonodealura$1.0.0/src/app/views/books/form/form.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"pt-br\"><head><meta charset=\"UTF-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"><meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"><title>Cadastro de livros</title><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\"></head><body>");

  component_globals_tag({}, out);

  out.w("<div class=\"container\"><div class=\"row\"><h1>Cadastro de livros</h1> </div><div class=\"row\"><form class=\"col-12\" action=\"/livros\" method=\"post\"><input type=\"hidden\" id=\"id\" name=\"id\"><div class=\"form-group\"><label for=\"titulo\">Titulo</label><input type=\"text\" class=\"form-control\" name=\"titulo\" id=\"titulo\" placeholder=\"Titulo\"></div><div class=\"form-group\"><label for=\"preco\">Preço</label><input type=\"text\" class=\"form-control\" name=\"preco\" id=\"preco\" placeholder=\"Preço\"></div><div class=\"form-group\"><label for=\"descricao\">Série/Saga</label><textarea class=\"form-control\" id=\"descricao\" name=\"descricao\" placeholder=\"Série/Saga\" rows=\"3\"></textarea></div><button type=\"submit\" class=\"btn btn-primary\">Salvar</button></form></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "24");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/cursonodealura$1.0.0/src/app/views/books/form/form.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
