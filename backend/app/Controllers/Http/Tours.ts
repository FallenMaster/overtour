import Tour from 'App/Models/Tour';

export default class Tours {
   // Список походов по фильтру
   public getTours(/*{request}*/) {
      // const {region, date_from, date_to, tags} = request.all();
      return Tour
         .query()
         .select('id', 'title', 'date_from', 'date_to', 'duration', 'image', 'description', 'price', 'link', 'difficulty', 'region', 'tags')
         .orderBy('date_from')
         .limit(40);
         // .fromDate(date_from)
         // .toDate(date_to)
         // .tags(tags)
         // .region(region)
         // .orderBy('date_from')
   }

   // Список походов по фильтру
   public async getTour({params}) {
      const id = params.id;
      return await Tour
         .query()
         .select('id', 'title', 'date_from', 'date_to', 'duration', 'image', 'description', 'price', 'link', 'difficulty', 'region', 'tags')
         .where('id', id)
         .first();
   }

   // Список регионов
   public async getRegions() {
      const regions = await Tour
         .query()
         .distinct('region')
         .orderBy('region');
         // .pluck('region');

      return regions.map(region => {
         return {value: region};
      });
   }
}
