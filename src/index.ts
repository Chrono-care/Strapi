// import type { Core } from '@strapi/strapi';

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  async bootstrap({ strapi }) {
    await strapi.db.query('api::article.article').deleteMany({});

    await strapi.db.connection.raw("DELETE FROM sqlite_sequence WHERE name='articles'");

    const diseases = [
      { ID: "1",title: "Syndrome de Marfan", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Marfan", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/4/47/Marfan_syndrome.jpg" },
      { ID: "2", title: "Sclérodermie", source: "https://fr.wikipedia.org/wiki/Sclérodermie", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/d/db/Scleroderma_Chest_Xray.jpg" },
      { ID: "3", title: "Amyotrophie spinale", source: "https://fr.wikipedia.org/wiki/Amyotrophie_spinale", cover_img_url: "https://media.istockphoto.com/id/1316000960/fr/photo/anatomie-squelette-humain-femur-bone-3d-rendering.jpg?s=1024x1024&w=is&k=20&c=OROdCso_KBQNDSjXke3blieqr1CTOg2F1IRVGPO1b2o=" },
      { ID: "4", title: "Maladie de Huntington", source: "https://fr.wikipedia.org/wiki/Maladie_de_Huntington", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/5/56/Huntington_disease_gene_disease_illustration.png" },
      { ID: "5", title: "Lymphangioleiomyomatose", source: "https://fr.wikipedia.org/wiki/Lymphangioleiomyomatose", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/6/64/LAM_schematic.jpg" },
      { ID: "6", title: "Syndrome de Cushing", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Cushing", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/2/28/Cushing_syndrome.jpg" },
      { ID: "7", title: "Protéinurie orthostatique", source: "https://fr.wikipedia.org/wiki/Protéinurie", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/5/53/Proteinuria_%28microscope%29.jpg" },
      { ID: "8", title: "Syndrome de Rett", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Rett", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/4/4d/Rett_syndrome.png" },
      { ID: "9", title: "Maladie de Gaucher", source: "https://fr.wikipedia.org/wiki/Maladie_de_Gaucher", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Gaucher_disease.jpg" },
      { ID: "10", title: "Syndrome de Alport", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Alport", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/7/7f/Alport_syndrome.png" },
      { ID: "11", title: "Syndrome de Ehlers-Danlos", source: "https://fr.wikipedia.org/wiki/Syndrome_d%27Ehlers-Danlos", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/3/35/Ehlers-Danlos_syndrome.jpg" },
      { ID: "12", title: "Syndrome de Prader-Willi", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Prader-Willi", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Prader-Willi_syndrome.jpg" },
      { ID: "13", title: "Syndrome de Angelman", source: "https://fr.wikipedia.org/wiki/Syndrome_d%27Angelman", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/3/36/Angelman_syndrome.jpg" },
      { ID: "14", title: "Hémophilie", source: "https://fr.wikipedia.org/wiki/H%C3%A9mophilie", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Hemophilia_a.jpg" },
      { ID: "15", title: "Syndrome de Turner", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Turner", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Tuner_syndrome.jpg" },
      { ID: "16", title: "Maladie de Fabry", source: "https://fr.wikipedia.org/wiki/Maladie_de_Fabry", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Fabry_disease.jpg" },
      { ID: "17", title: "Syndrome de Maroteaux-Lamy", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Maroteaux-Lamy", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/5/5b/MPS_6.jpg" },
      { ID: "18", title: "Maladie de Wilson", source: "https://fr.wikipedia.org/wiki/Maladie_de_Wilson", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/3/37/Wilson_syndrome.jpg" },
      { ID: "19", title: "Syndrome de Klinefelter", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Klinefelter", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Klinefelter_syndrome.jpg" },
      { ID: "20", title: "Syndrome de Crouzon", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Crouzon", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Crouzon_syndrome.jpg" },
      { ID: "21", title: "Dystrophie musculaire de Duchenne", source: "https://fr.wikipedia.org/wiki/Dystrophie_musculaire_de_Duchenne", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Duchenne_muscular_dystrophy.jpg" },
      { ID: "22", title: "Syndrome de Langerhans", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Langerhans", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/7/79/Langerhans_syndrome.jpg" },
      { ID: "23", title: "Syndrome de Pfeiffer", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Pfeiffer", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Pfeiffer_syndrome.jpg" },
      { ID: "24", title: "Hyperthyroïdie congénitale", source: "https://fr.wikipedia.org/wiki/Hyperthyro%C3%AFdie", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Hyperthyroidism.jpg" },
      { ID: "25", title: "Syndrome de Patau", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Patau", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Patau_syndrome.jpg" },
      { ID: "26", title: "Syndrome de Wolf-Hirschhorn", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Wolf-Hirschhorn", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Wolf_Hirschhorn_syndrome.jpg" },
      { ID: "27", title: "Maladie de Niemann-Pick", source: "https://fr.wikipedia.org/wiki/Maladie_de_Niemann-Pick", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/9/94/Niemann-Pick_disease.jpg" },
      { ID: "28", title: "Syndrome de Lesch-Nyhan", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Lesch-Nyhan", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/d/da/Lesch-Nyhan_syndrome.jpg" },
      { ID: "29", title: "Syndrome de Shwachman-Diamond", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Shwachman-Diamond", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Shwachman-Diamond_syndrome.jpg" },
      { ID: "30", title: "Syndrome de Usher", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Usher", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/0/09/Usher_syndrome.jpg" },
      { ID: "31", title: "Syndrome de Bardet-Biedl", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Bardet-Biedl", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Bardet-Biedl_syndrome.jpg" },
      { ID: "32", title: "Syndrome de Prader-Willi", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Prader-Willi", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Prader-Willi.jpg" },
      { ID: "33", title: "Maladie de Lesch-Nyhan", source: "https://fr.wikipedia.org/wiki/Maladie_de_Lesch-Nyhan", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/2/23/Lesch-Nyhan.jpg" },
      { ID: "34", title: "Syndrome de Cowden", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Cowden", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Cowden_syndrome.jpg" },
      { ID: "35", title: "Syndrome de Smith-Magenis", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Smith-Magenis", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Smith-Magenis_syndrome.jpg" },
      { ID: "36", title: "Syndrome de Williams", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Williams", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/0/08/Williams_syndrome.jpg" },
      { ID: "37", title: "Syndrome de Noonan", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Noonan", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Noonan_syndrome.jpg" },
      { ID: "38", title: "Syndrome de Beckwith-Wiedemann", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Beckwith-Wiedemann", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Beckwith-Wiedemann_syndrome.jpg" },
      { ID: "39", title: "Syndrome de FSHD", source: "https://fr.wikipedia.org/wiki/Syndrome_de_FSHD", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/9/9c/FSHD.jpg" },
      { ID: "40", title: "Syndrome de Holt-Oram", source: "https://fr.wikipedia.org/wiki/Syndrome_de_Holt-Oram", cover_img_url: "https://upload.wikimedia.org/wikipedia/commons/6/62/Holt-Oram_syndrome.jpg" },
    ];
  
        
    for (let index = 0; index < diseases.length; index++) {
      const disease = diseases[index % diseases.length]; 
      let dateTest = new Date().toISOString();
      let ratio = Math.floor(Math.random() * 201);
      await strapi.entityService.create("api::article.article", {
        data: {
          ID: disease.ID,
          title: disease.title,
          content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi consequuntur distinctio exercitationem, reiciendis sit, rerum illo magni aliquid quia quam repellat expedita delectus soluta totam. Iure id soluta reiciendis! Explicabo placeat ipsum perspiciatis mollitia magni officiis soluta eveniet suscipit, deserunt eligendi labore in fugit harum quidem odit? Culpa porro aperiam laboriosam quo suscipit cumque, debitis alias, tempora aspernatur, distinctio nam impedit quia! Iste a, dolore magnam totam, nemo unde consequatur animi in amet obcaecati pariatur possimus sunt, esse perspiciatis. Consequatur, deleniti. Distinctio dicta unde sed similique consequuntur! Neque, assumenda dignissimos quaerat quas numquam commodi quae eius expedita repudiandae, harum aperiam labore architecto. Eaque a rem quam debitis fugit voluptatem vitae, dicta doloremque dignissimos adipisci ullam amet vero iure voluptatibus quod tenetur harum. Blanditiis maiores mollitia facilis itaque. Culpa dignissimos quas blanditiis veniam consequuntur, error dolorem debitis cum saepe officia, illum placeat voluptas nisi? Soluta, numquam dolor fugit culpa error distinctio explicabo ut placeat ducimus quis dolore harum nemo officiis, obcaecati assumenda! Soluta nam placeat nesciunt optio expedita quibusdam doloribus deleniti. Nemo nesciunt repellat perferendis velit corrupti vero saepe iste minima. Ut cumque aut, eum odio, sint esse minus numquam dolor fugit obcaecati quod velit! Tenetur accusamus tempore et officia vero illum! Adipisci reprehenderit alias voluptas quasi beatae sint aperiam ipsam. Sapiente consequatur nostrum rem recusandae odit nisi repellat nihil nulla ad laboriosam voluptates eum ipsam soluta veritatis ratione sunt consequuntur beatae provident nesciunt quae quaerat quam repellendus, optio necessitatibus. Provident iste harum maxime, adipisci tempore dolore quibusdam autem quis. Minus unde numquam fugiat dolore! Ipsa eos non asperiores at deleniti veniam, id modi fuga. Saepe sapiente ea impedit nemo maiores eius, doloremque cumque ullam exercitationem nostrum laborum quia dolor tempore esse nam architecto nisi voluptatibus, odit non accusantium. Eligendi delectus modi architecto fugit accusantium consequuntur molestias illo, laboriosam alias culpa voluptatum ullam quasi, ducimus ipsa, vitae officiis. Voluptatum laboriosam, tempore earum deleniti quod perspiciatis reprehenderit delectus accusamus eos molestiae distinctio est iure id nisi autem quaerat laudantium nobis facilis iste amet. Deleniti officia reiciendis maiores placeat laboriosam magni doloremque in quae. Maxime tenetur voluptas nemo, amet reiciendis fuga distinctio natus maiores corporis voluptatibus officia, nisi nulla et rerum nam ducimus dolorem officiis magnam! Nobis, voluptates aperiam eveniet accusamus asperiores necessitatibus labore sed. Dolores illo, exercitationem quae commodi possimus nesciunt quisquam provident, aliquam, quaerat veniam atque voluptatem quam necessitatibus earum eaque. Tenetur dolor esse facere deserunt ab, odit aut quidem ratione?",
          ratio: ratio,
          creation_date: dateTest,
          source: disease.source,
          cover_img_url: disease.cover_img_url
        },
      }, { transacting: false });
    };
  },
};
