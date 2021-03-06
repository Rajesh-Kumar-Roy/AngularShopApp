﻿using System;
using System.Collections.Generic;
using System.Text;
using ShopApplication.Models.EntityModels.PaymentModels;

namespace ShopApplication.Manager.IMContract
{
    public interface IPaymentTypeManager: IBaseManager<PaymentType>
    {
        ICollection<PaymentType> GetALLFalse();
    }
}
