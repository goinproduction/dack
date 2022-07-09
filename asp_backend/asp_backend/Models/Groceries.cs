using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp_backend.Models
{
    public class Groceries
    {
        public int id { get; set; }
        public int seller_id { get; set; }
        public string name {get; set;}
        public string address { get; set; }
        public string road_name { get; set; }
        public string apartment_number { get; set; }
        public string type_of_business { get; set; }
        public string tax_number { get; set; }
        public string business_field { get; set; }
        public string availble_product { get; set; }
        public string avg_availble_product { get; set; }
        public string avg_order { get; set; }
    }

}
