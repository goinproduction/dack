using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace asp_backend.Models
{
    public class Shippers
    {
        public int shipper_id { get; set; }
        public string full_name { get; set; }
        public int phone_number { get; set; }
        public string gender { get; set; }
        public string ethnic { get; set; }
        public int identity_number { get; set; }
        public string address { get; set; }
        public bool is_accepted { get; set; }
        public int driver_license { get; set; }
        public int bank_account_number { get; set; }
        public string bank_name { get; set; }
        public string social_insurance_number { get; set; }
        public string accident_insurance_number { get; set; }
        public string vehicle_register_number { get; set; }
    }
}
