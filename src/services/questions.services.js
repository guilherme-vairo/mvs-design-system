import Api from './api';

export const findQuestions = async () => {
  // const res = await Api.get('/wp-json/contact-form-7/v1/contact-forms');
   const res = {
   "acf":{
      "apresentacao":{
         "":null,
         "apresentacao_titulo":"Título",
         "apresentacao_texto":"Texto"
      },
      "capa":{
         "":null,
         "capa_possui_video":true,
         "capa_imagem":{
            "ID":5,
            "id":5,
            "title":"1248322-landscape",
            "filename":"1248322-landscape.png",
            "filesize":950843,
            "url":"http://localhost/wp-content/uploads/2019/10/1248322-landscape.png",
            "link":"http://localhost/1248322-landscape/",
            "alt":"paisagem",
            "author":"1",
            "description":"",
            "caption":"",
            "name":"1248322-landscape",
            "status":"inherit",
            "uploaded_to":0,
            "date":"2019-10-04 15:56:22",
            "modified":"2019-10-09 15:52:53",
            "menu_order":0,
            "mime_type":"image/png",
            "type":"image",
            "subtype":"png",
            "icon":"http://localhost/wp-includes/images/media/default.png",
            "width":1920,
            "height":1200,
            "sizes":{
               "thumbnail":"http://localhost/wp-content/uploads/2019/10/1248322-landscape-150x150.png",
               "thumbnail-width":150,
               "thumbnail-height":150,
               "medium":"http://localhost/wp-content/uploads/2019/10/1248322-landscape-300x188.png",
               "medium-width":300,
               "medium-height":188,
               "medium_large":"http://localhost/wp-content/uploads/2019/10/1248322-landscape-900x563.png",
               "medium_large-width":900,
               "medium_large-height":563,
               "large":"http://localhost/wp-content/uploads/2019/10/1248322-landscape-1024x640.png",
               "large-width":1024,
               "large-height":640
            }
         },
         "capa_video":"https://youtu.be/JvOPs4De4Sk",
         "capa_titulo":"Título",
         "capa_chamada":"Chamada",
         "capa_possui_contador":false,
         "capa_data_limite":null
      },
      "data_atual":"21-10-2019 16:38:49",
      "identidade":{
         "":null,
         "identidade_titulo":"",
         "identidade_favicon":false,
         "identidade_id_analytics":"",
         "identidade_big_numbers_titulo":"",
         "identidade_cards_titulo":""
      },
      "rodape":[
         {
            "rodape_logo":"http://localhost/wp-content/uploads/2019/10/SVG_Logo.svg"
         }
      ],
      "secoes":[
         {
            "acf_fc_layout":"secao_numeros",
            "secao_ativa":true,
            "secao_titulo":"Numos"
         },
         {
            "acf_fc_layout":"secao_faq",
            "secao_ativa":true,
            "secao_titulo":"Ajudis",
            "faq_conteudo":[
               {
                  "ID":124,
                  "post_author":"1",
                  "post_date":"2019-10-08 16:13:45",
                  "post_date_gmt":"2019-10-08 19:13:45",
                  "post_content":"",
                  "post_title":"Iusto ea quisquam sint ullam?",
                  "post_excerpt":"",
                  "post_status":"publish",
                  "comment_status":"closed",
                  "ping_status":"closed",
                  "post_password":"",
                  "post_name":"como",
                  "to_ping":"",
                  "pinged":"",
                  "post_modified":"2019-10-08 16:13:45",
                  "post_modified_gmt":"2019-10-08 19:13:45",
                  "post_content_filtered":"",
                  "post_parent":0,
                  "guid":"http://localhost/?post_type=faq&#038;p=124",
                  "menu_order":0,
                  "post_type":"faq",
                  "post_mime_type":"",
                  "comment_count":"0",
                  "filter":"raw",
                  "faq_pergunta":"Iusto ea quisquam sint ullam?",
                  "faq_resposta":"Est aperiam nisi libero dolores a cupiditate autem distinctio."
               },
               {
                  "ID": 124,
                  "post_author": "1",
                  "post_date": "2019-10-08 16:13:45",
                  "post_date_gmt": "2019-10-08 19:13:45",
                  "post_content": "",
                  "post_title": "Nobis earum aut nostrum?",
                  "post_excerpt": "",
                  "post_status": "publish",
                  "comment_status": "closed",
                  "ping_status": "closed",
                  "post_password": "",
                  "post_name": "como",
                  "to_ping": "",
                  "pinged": "",
                  "post_modified": "2019-10-08 16:13:45",
                  "post_modified_gmt": "2019-10-08 19:13:45",
                  "post_content_filtered": "",
                  "post_parent": 0,
                  "guid": "http://localhost/?post_type=faq&#038;p=124",
                  "menu_order": 0,
                  "post_type": "faq",
                  "post_mime_type": "",
                  "comment_count": "0",
                  "filter": "raw",
                  "faq_pergunta": "Nobis earum aut nostrum?",
                  "faq_resposta": "Voluptatem voluptas qui maxime dignissimos ipsam et eum. Deserunt velit esse cum consectetur."
               }
            ]
         },
         {
            "acf_fc_layout":"secao_contatos",
            "secao_ativa":true,
            "secao_titulo":"Kontakts",
            "contato_conteudo":[
               {
                  "ID":136,
                  "post_author":"1",
                  "post_date":"2019-10-10 11:52:02",
                  "post_date_gmt":"2019-10-10 14:52:02",
                  "post_content":"",
                  "post_title":"Ana",
                  "post_excerpt":"",
                  "post_status":"publish",
                  "comment_status":"closed",
                  "ping_status":"closed",
                  "post_password":"",
                  "post_name":"ana",
                  "to_ping":"",
                  "pinged":"",
                  "post_modified":"2019-10-18 15:43:12",
                  "post_modified_gmt":"2019-10-18 18:43:12",
                  "post_content_filtered":"",
                  "post_parent":0,
                  "guid":"http://localhost/?post_type=contato&#038;p=136",
                  "menu_order":0,
                  "post_type":"contato",
                  "post_mime_type":"",
                  "comment_count":"0",
                  "filter":"raw",
                  "contato_categoria":{
                     "term_id":6,
                     "name":"Divisão de Admissão",
                     "slug":"divisao-de-admissao",
                     "term_group":0,
                     "term_taxonomy_id":6,
                     "taxonomy":"contato_taxonomia",
                     "description":"",
                     "parent":0,
                     "count":3,
                     "filter":"raw"
                  },
                  "contato_nome":"Ana",
                  "contato_logradouro":"",
                  "contato_numero":"",
                  "contato_complemento":"",
                  "contato_bairro":"",
                  "contato_cidade":"",
                  "contato_estado":"rj",
                  "contato_cep":"",
                  "contato_telefone":"1111",
                  "contato_fax":"",
                  "contato_email":"user1@mail.com",
                  "contato_cargo":"",
                  "contato_chefia":false
               },
               {
                  "ID":138,
                  "post_author":"1",
                  "post_date":"2019-10-10 11:53:28",
                  "post_date_gmt":"2019-10-10 14:53:28",
                  "post_content":"",
                  "post_title":"André",
                  "post_excerpt":"",
                  "post_status":"publish",
                  "comment_status":"closed",
                  "ping_status":"closed",
                  "post_password":"",
                  "post_name":"andre",
                  "to_ping":"",
                  "pinged":"",
                  "post_modified":"2019-10-18 15:43:30",
                  "post_modified_gmt":"2019-10-18 18:43:30",
                  "post_content_filtered":"",
                  "post_parent":0,
                  "guid":"http://localhost/?post_type=contato&#038;p=138",
                  "menu_order":0,
                  "post_type":"contato",
                  "post_mime_type":"",
                  "comment_count":"0",
                  "filter":"raw",
                  "contato_categoria":{
                     "term_id":6,
                     "name":"Divisão de Admissão",
                     "slug":"divisao-de-admissao",
                     "term_group":0,
                     "term_taxonomy_id":6,
                     "taxonomy":"contato_taxonomia",
                     "description":"",
                     "parent":0,
                     "count":3,
                     "filter":"raw"
                  },
                  "contato_nome":"André",
                  "contato_logradouro":"",
                  "contato_numero":"",
                  "contato_complemento":"",
                  "contato_bairro":"",
                  "contato_cidade":"",
                  "contato_estado":"ba",
                  "contato_cep":"",
                  "contato_telefone":"3333",
                  "contato_fax":"",
                  "contato_email":"user3@mail.com",
                  "contato_cargo":"",
                  "contato_chefia":false
               },
               {
                  "ID":149,
                  "post_author":"1",
                  "post_date":"2019-10-15 17:00:15",
                  "post_date_gmt":"2019-10-15 20:00:15",
                  "post_content":"",
                  "post_title":"Emilia",
                  "post_excerpt":"",
                  "post_status":"publish",
                  "comment_status":"closed",
                  "ping_status":"closed",
                  "post_password":"",
                  "post_name":"emilia",
                  "to_ping":"",
                  "pinged":"",
                  "post_modified":"2019-10-18 15:45:38",
                  "post_modified_gmt":"2019-10-18 18:45:38",
                  "post_content_filtered":"",
                  "post_parent":0,
                  "guid":"http://localhost/?post_type=contato&#038;p=149",
                  "menu_order":0,
                  "post_type":"contato",
                  "post_mime_type":"",
                  "comment_count":"0",
                  "filter":"raw",
                  "contato_categoria":{
                     "term_id":6,
                     "name":"Divisão de Admissão",
                     "slug":"divisao-de-admissao",
                     "term_group":0,
                     "term_taxonomy_id":6,
                     "taxonomy":"contato_taxonomia",
                     "description":"",
                     "parent":0,
                     "count":3,
                     "filter":"raw"
                  },
                  "contato_nome":"Emilia",
                  "contato_cargo":"",
                  "contato_logradouro":"",
                  "contato_numero":"",
                  "contato_complemento":"",
                  "contato_bairro":"",
                  "contato_cidade":"",
                  "contato_estado":"pb",
                  "contato_cep":"",
                  "contato_telefone":"8888",
                  "contato_fax":"",
                  "contato_email":"user8@mail.com",
                  "contato_chefia":false
               },
               {
                  "ID":148,
                  "post_author":"1",
                  "post_date":"2019-10-15 16:55:58",
                  "post_date_gmt":"2019-10-15 19:55:58",
                  "post_content":"",
                  "post_title":"Claudia",
                  "post_excerpt":"",
                  "post_status":"publish",
                  "comment_status":"closed",
                  "ping_status":"closed",
                  "post_password":"",
                  "post_name":"claudia",
                  "to_ping":"",
                  "pinged":"",
                  "post_modified":"2019-10-21 16:38:22",
                  "post_modified_gmt":"2019-10-21 19:38:22",
                  "post_content_filtered":"",
                  "post_parent":0,
                  "guid":"http://localhost/?post_type=contato&#038;p=148",
                  "menu_order":0,
                  "post_type":"contato",
                  "post_mime_type":"",
                  "comment_count":"0",
                  "filter":"raw",
                  "contato_categoria":{
                     "term_id":7,
                     "name":"Divisão de Pessoal",
                     "slug":"divisao-de-pessoal",
                     "term_group":0,
                     "term_taxonomy_id":7,
                     "taxonomy":"contato_taxonomia",
                     "description":"",
                     "parent":0,
                     "count":4,
                     "filter":"raw"
                  },
                  "contato_nome":"Claudia",
                  "contato_cargo":"",
                  "contato_logradouro":"",
                  "contato_numero":"",
                  "contato_complemento":"",
                  "contato_bairro":"",
                  "contato_cidade":"",
                  "contato_estado":"ba",
                  "contato_cep":"",
                  "contato_telefone":"7777",
                  "contato_fax":"",
                  "contato_email":"user7@mail.com",
                  "contato_chefia":false
               },
               {
                  "ID":154,
                  "post_author":"1",
                  "post_date":"2019-10-16 17:27:48",
                  "post_date_gmt":"2019-10-16 20:27:48",
                  "post_content":"",
                  "post_title":"Dennis",
                  "post_excerpt":"",
                  "post_status":"publish",
                  "comment_status":"closed",
                  "ping_status":"closed",
                  "post_password":"",
                  "post_name":"dennis",
                  "to_ping":"",
                  "pinged":"",
                  "post_modified":"2019-10-18 15:45:55",
                  "post_modified_gmt":"2019-10-18 18:45:55",
                  "post_content_filtered":"",
                  "post_parent":0,
                  "guid":"http://localhost/?post_type=contato&#038;p=154",
                  "menu_order":0,
                  "post_type":"contato",
                  "post_mime_type":"",
                  "comment_count":"0",
                  "filter":"raw",
                  "contato_categoria":{
                     "term_id":7,
                     "name":"Divisão de Pessoal",
                     "slug":"divisao-de-pessoal",
                     "term_group":0,
                     "term_taxonomy_id":7,
                     "taxonomy":"contato_taxonomia",
                     "description":"",
                     "parent":0,
                     "count":4,
                     "filter":"raw"
                  },
                  "contato_nome":"Dennis",
                  "contato_cargo":"",
                  "contato_chefia":false,
                  "contato_logradouro":"",
                  "contato_numero":"",
                  "contato_complemento":"",
                  "contato_bairro":"",
                  "contato_cidade":"",
                  "contato_estado":"mg",
                  "contato_cep":"",
                  "contato_telefone":"0000",
                  "contato_fax":"",
                  "contato_email":"user0@mail.com"
               },
               {
                  "ID":141,
                  "post_author":"1",
                  "post_date":"2019-10-10 12:09:54",
                  "post_date_gmt":"2019-10-10 15:09:54",
                  "post_content":"",
                  "post_title":"Gilberto",
                  "post_excerpt":"",
                  "post_status":"publish",
                  "comment_status":"closed",
                  "ping_status":"closed",
                  "post_password":"",
                  "post_name":"gilberto",
                  "to_ping":"",
                  "pinged":"",
                  "post_modified":"2019-10-18 15:44:44",
                  "post_modified_gmt":"2019-10-18 18:44:44",
                  "post_content_filtered":"",
                  "post_parent":0,
                  "guid":"http://localhost/?post_type=contato&#038;p=141",
                  "menu_order":0,
                  "post_type":"contato",
                  "post_mime_type":"",
                  "comment_count":"0",
                  "filter":"raw",
                  "contato_categoria":{
                     "term_id":7,
                     "name":"Divisão de Pessoal",
                     "slug":"divisao-de-pessoal",
                     "term_group":0,
                     "term_taxonomy_id":7,
                     "taxonomy":"contato_taxonomia",
                     "description":"",
                     "parent":0,
                     "count":4,
                     "filter":"raw"
                  },
                  "contato_nome":"Gilberto",
                  "contato_logradouro":"",
                  "contato_numero":"",
                  "contato_complemento":"",
                  "contato_bairro":"",
                  "contato_cidade":"",
                  "contato_estado":"sp",
                  "contato_cep":"",
                  "contato_telefone":"6666",
                  "contato_fax":"",
                  "contato_email":"user6@mail.com",
                  "contato_cargo":"",
                  "contato_chefia":false
               },
               {
                  "ID":137,
                  "post_author":"1",
                  "post_date":"2019-10-10 11:53:00",
                  "post_date_gmt":"2019-10-10 14:53:00",
                  "post_content":"",
                  "post_title":"Guilherme",
                  "post_excerpt":"",
                  "post_status":"publish",
                  "comment_status":"closed",
                  "ping_status":"closed",
                  "post_password":"",
                  "post_name":"guilherme",
                  "to_ping":"",
                  "pinged":"",
                  "post_modified":"2019-10-21 16:38:32",
                  "post_modified_gmt":"2019-10-21 19:38:32",
                  "post_content_filtered":"",
                  "post_parent":0,
                  "guid":"http://localhost/?post_type=contato&#038;p=137",
                  "menu_order":0,
                  "post_type":"contato",
                  "post_mime_type":"",
                  "comment_count":"0",
                  "filter":"raw",
                  "contato_categoria":{
                     "term_id":7,
                     "name":"Divisão de Pessoal",
                     "slug":"divisao-de-pessoal",
                     "term_group":0,
                     "term_taxonomy_id":7,
                     "taxonomy":"contato_taxonomia",
                     "description":"",
                     "parent":0,
                     "count":4,
                     "filter":"raw"
                  },
                  "contato_nome":"Guilherme",
                  "contato_logradouro":"",
                  "contato_numero":"",
                  "contato_complemento":"",
                  "contato_bairro":"",
                  "contato_cidade":"",
                  "contato_estado":"ac",
                  "contato_cep":"",
                  "contato_telefone":"2222",
                  "contato_fax":"",
                  "contato_email":"user2@mail.com",
                  "contato_cargo":"",
                  "contato_chefia":false
               },
               {
                  "ID":140,
                  "post_author":"1",
                  "post_date":"2019-10-10 11:54:30",
                  "post_date_gmt":"2019-10-10 14:54:30",
                  "post_content":"",
                  "post_title":"Arthur",
                  "post_excerpt":"",
                  "post_status":"publish",
                  "comment_status":"closed",
                  "ping_status":"closed",
                  "post_password":"",
                  "post_name":"arthur",
                  "to_ping":"",
                  "pinged":"",
                  "post_modified":"2019-10-18 15:44:23",
                  "post_modified_gmt":"2019-10-18 18:44:23",
                  "post_content_filtered":"",
                  "post_parent":0,
                  "guid":"http://localhost/?post_type=contato&#038;p=140",
                  "menu_order":0,
                  "post_type":"contato",
                  "post_mime_type":"",
                  "comment_count":"0",
                  "filter":"raw",
                  "contato_categoria":{
                     "term_id":8,
                     "name":"Setor de Qualificação",
                     "slug":"setor-de-qualificacao",
                     "term_group":0,
                     "term_taxonomy_id":8,
                     "taxonomy":"contato_taxonomia",
                     "description":"",
                     "parent":0,
                     "count":3,
                     "filter":"raw"
                  },
                  "contato_nome":"Arthur",
                  "contato_logradouro":"",
                  "contato_numero":"",
                  "contato_complemento":"",
                  "contato_bairro":"",
                  "contato_cidade":"",
                  "contato_estado":"ac",
                  "contato_cep":"",
                  "contato_telefone":"5555",
                  "contato_fax":"",
                  "contato_email":"user5@mail.com",
                  "contato_cargo":"",
                  "contato_chefia":false
               },
               {
                  "ID":150,
                  "post_author":"1",
                  "post_date":"2019-10-15 17:01:27",
                  "post_date_gmt":"2019-10-15 20:01:27",
                  "post_content":"",
                  "post_title":"Renan",
                  "post_excerpt":"",
                  "post_status":"publish",
                  "comment_status":"closed",
                  "ping_status":"closed",
                  "post_password":"",
                  "post_name":"renan",
                  "to_ping":"",
                  "pinged":"",
                  "post_modified":"2019-10-18 15:45:46",
                  "post_modified_gmt":"2019-10-18 18:45:46",
                  "post_content_filtered":"",
                  "post_parent":0,
                  "guid":"http://localhost/?post_type=contato&#038;p=150",
                  "menu_order":0,
                  "post_type":"contato",
                  "post_mime_type":"",
                  "comment_count":"0",
                  "filter":"raw",
                  "contato_categoria":{
                     "term_id":8,
                     "name":"Setor de Qualificação",
                     "slug":"setor-de-qualificacao",
                     "term_group":0,
                     "term_taxonomy_id":8,
                     "taxonomy":"contato_taxonomia",
                     "description":"",
                     "parent":0,
                     "count":3,
                     "filter":"raw"
                  },
                  "contato_nome":"Renan",
                  "contato_cargo":"",
                  "contato_logradouro":"",
                  "contato_numero":"",
                  "contato_complemento":"",
                  "contato_bairro":"",
                  "contato_cidade":"",
                  "contato_estado":"sc",
                  "contato_cep":"",
                  "contato_telefone":"9999",
                  "contato_fax":"",
                  "contato_email":"user9@mail.com",
                  "contato_chefia":false
               },
               {
                  "ID":139,
                  "post_author":"1",
                  "post_date":"2019-10-10 11:54:07",
                  "post_date_gmt":"2019-10-10 14:54:07",
                  "post_content":"",
                  "post_title":"Rudá",
                  "post_excerpt":"",
                  "post_status":"publish",
                  "comment_status":"closed",
                  "ping_status":"closed",
                  "post_password":"",
                  "post_name":"ruda",
                  "to_ping":"",
                  "pinged":"",
                  "post_modified":"2019-10-21 16:38:44",
                  "post_modified_gmt":"2019-10-21 19:38:44",
                  "post_content_filtered":"",
                  "post_parent":0,
                  "guid":"http://localhost/?post_type=contato&#038;p=139",
                  "menu_order":0,
                  "post_type":"contato",
                  "post_mime_type":"",
                  "comment_count":"0",
                  "filter":"raw",
                  "contato_categoria":{
                     "term_id":8,
                     "name":"Setor de Qualificação",
                     "slug":"setor-de-qualificacao",
                     "term_group":0,
                     "term_taxonomy_id":8,
                     "taxonomy":"contato_taxonomia",
                     "description":"",
                     "parent":0,
                     "count":3,
                     "filter":"raw"
                  },
                  "contato_nome":"Rudá",
                  "contato_logradouro":"",
                  "contato_numero":"",
                  "contato_complemento":"",
                  "contato_bairro":"",
                  "contato_cidade":"",
                  "contato_estado":"pe",
                  "contato_cep":"",
                  "contato_telefone":"4444",
                  "contato_fax":"",
                  "contato_email":"user4@mail.com",
                  "contato_cargo":"",
                  "contato_chefia":false
               }
            ]
         }
      ]
   }};
   return res.acf.secoes.filter(sec => sec.acf_fc_layout === 'secao_faq');
}