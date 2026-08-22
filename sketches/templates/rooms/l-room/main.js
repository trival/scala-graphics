'use strict';
var $p;
var $fileLevelThis = this;
function $Char(c) {
  this.c = c;
}
$p = $Char.prototype;
$p.toString = (function() {
  return String.fromCharCode(this.c);
});
function $Long(lo, hi) {
  this.l = lo;
  this.h = hi;
}
$p = $Long.prototype;
$p.toString = (function() {
  return $s_RTLong__toString__I__I__T(this.l, this.h);
});
function $noIsInstance(arg0) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object");
}
function $objectClone(arg0) {
  return Object.create(Object.getPrototypeOf(arg0), Object.getOwnPropertyDescriptors(arg0));
}
function $objectOrArrayClone(arg0) {
  return (arg0.$classData.Z ? arg0.bd() : $objectClone(arg0));
}
function $objectGetClass(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return $d_T.l();
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return $d_jl_Byte.l();
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return $d_jl_Short.l();
        } else {
          return $d_jl_Integer.l();
        }
      } else if ($isFloat(arg0)) {
        return $d_jl_Float.l();
      } else {
        return $d_jl_Double.l();
      }
    }
    case "boolean": {
      return $d_jl_Boolean.l();
    }
    case "undefined": {
      return $d_jl_Void.l();
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return $d_jl_Long.l();
      } else if ((arg0 instanceof $Char)) {
        return $d_jl_Character.l();
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.l();
      } else {
        return null;
      }
    }
  }
}
function $objectClassName(arg0) {
  switch ((typeof arg0)) {
    case "string": {
      return "java.lang.String";
    }
    case "number": {
      if ($isInt(arg0)) {
        if ((((arg0 << 24) >> 24) === arg0)) {
          return "java.lang.Byte";
        } else if ((((arg0 << 16) >> 16) === arg0)) {
          return "java.lang.Short";
        } else {
          return "java.lang.Integer";
        }
      } else if ($isFloat(arg0)) {
        return "java.lang.Float";
      } else {
        return "java.lang.Double";
      }
    }
    case "boolean": {
      return "java.lang.Boolean";
    }
    case "undefined": {
      return "java.lang.Void";
    }
    default: {
      if ((arg0 instanceof $Long)) {
        return "java.lang.Long";
      } else if ((arg0 instanceof $Char)) {
        return "java.lang.Character";
      } else if ((!(!(arg0 && arg0.$classData)))) {
        return arg0.$classData.N;
      } else {
        return null.rM();
      }
    }
  }
}
function $dp_equals__O__Z(instance, x0) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__equals__O__Z(instance, x0);
    }
    case "number": {
      return $f_jl_Double__equals__O__Z(instance, x0);
    }
    case "boolean": {
      return $f_jl_Boolean__equals__O__Z(instance, x0);
    }
    case "undefined": {
      return $f_jl_Void__equals__O__Z(instance, x0);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.u(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.u.call(instance, x0);
      }
    }
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance);
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance);
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance);
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.w();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.w.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.rN(x0);
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString());
}
function $checkIntDivisor(arg0) {
  if ((arg0 === 0)) {
    throw new $c_jl_ArithmeticException("/ by zero");
  } else {
    return arg0;
  }
}
function $doubleToInt(arg0) {
  return ((arg0 > 2147483647) ? 2147483647 : ((arg0 < (-2147483648)) ? (-2147483648) : (arg0 | 0)));
}
function $cToS(arg0) {
  return String.fromCharCode(arg0);
}
var $fpBitsDataView = new DataView(new ArrayBuffer(8));
function $floatToBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setFloat32(0, arg0, true);
  return dataView.getInt32(0, true);
}
function $floatFromBits(arg0) {
  var dataView = $fpBitsDataView;
  dataView.setInt32(0, arg0, true);
  return dataView.getFloat32(0, true);
}
function $doubleToBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__fromDoubleBits__D__O__J(arg0, dataView);
}
function $doubleFromBits(arg0) {
  var dataView = $fpBitsDataView;
  return $s_RTLong__bitsToDouble__I__I__O__D(arg0.l, arg0.h, dataView);
}
function $resolveSuperRef(arg0, arg1) {
  var getPrototypeOf = Object.getPrototyeOf;
  var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  var superProto = arg0.prototype;
  while ((superProto !== null)) {
    var desc = getOwnPropertyDescriptor(superProto, arg1);
    if ((desc !== (void 0))) {
      return desc;
    }
    superProto = getPrototypeOf(superProto);
  }
}
function $superGet(arg0, arg1, arg2) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(arg1) : getter.value);
  }
}
function $superSet(arg0, arg1, arg2, arg3) {
  var desc = $resolveSuperRef(arg0, arg2);
  if ((desc !== (void 0))) {
    var setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(arg1, arg3);
      return (void 0);
    }
  }
  throw new TypeError((("super has no setter '" + arg2) + "'."));
}
function $arraycopyGeneric(arg0, arg1, arg2, arg3, arg4) {
  if (((arg0 !== arg2) || (((arg3 - arg1) >>> 0) > (arg4 >>> 0)))) {
    for (var i = 0; (i < arg4); i = ((i + 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  } else {
    for (var i = ((arg4 - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      arg2[((arg3 + i) | 0)] = arg0[((arg1 + i) | 0)];
    }
  }
}
var $lastIDHash = 0;
var $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string": {
      return $f_T__hashCode__I(obj);
    }
    case "number": {
      return $f_jl_Double__hashCode__I(obj);
    }
    case "bigint": {
      var biHash = 0;
      if ((obj < BigInt(0))) {
        obj = (~obj);
      }
      while ((obj !== BigInt(0))) {
        biHash = (biHash ^ Number(BigInt.asIntN(32, obj)));
        obj = (obj >> BigInt(32));
      }
      return biHash;
    }
    case "boolean": {
      return (obj ? 1231 : 1237);
    }
    case "undefined": {
      return 0;
    }
    case "symbol": {
      var description = obj.description;
      return ((description === (void 0)) ? 0 : $f_T__hashCode__I(description));
    }
    default: {
      if ((obj === null)) {
        return 0;
      } else {
        var hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash);
        }
        return hash;
      }
    }
  }
}
function $isByte(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 24) >> 24) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isShort(arg0) {
  return ((((typeof arg0) === "number") && (((arg0 << 16) >> 16) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isInt(arg0) {
  return ((((typeof arg0) === "number") && ((arg0 | 0) === arg0)) && ((1 / arg0) !== (1 / (-0))));
}
function $isFloat(arg0) {
  return (((typeof arg0) === "number") && ((arg0 !== arg0) || (Math.fround(arg0) === arg0)));
}
function $bC(arg0) {
  return new $Char(arg0);
}
var $bC0 = $bC(0);
function $bL(arg0, arg1) {
  return new $Long(arg0, arg1);
}
var $bL0 = $bL(0, 0);
function $uC(arg0) {
  return ((arg0 === null) ? 0 : arg0.c);
}
function $uJ(arg0) {
  return ((arg0 === null) ? $bL0 : arg0);
}
/** @constructor */
function $c_O() {
}
$p = $c_O.prototype;
$p.constructor = $c_O;
/** @constructor */
function $h_O() {
}
$h_O.prototype = $p;
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
$p.u = (function(that) {
  return (this === that);
});
$p.r = (function() {
  var i = this.w();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.r();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.b[i] = null;
    }
  } else {
    this.b = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.aT = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.bd = (function() {
  return new $ac_O(this.b.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.b[i] = false;
    }
  } else {
    this.b = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.aT = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.bd = (function() {
  return new $ac_Z(this.b.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Uint16Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.aT = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bd = (function() {
  return new $ac_C(this.b.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int8Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.aT = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bd = (function() {
  return new $ac_B(this.b.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int16Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.aT = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bd = (function() {
  return new $ac_S(this.b.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Int32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.aT = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bd = (function() {
  return new $ac_I(this.b.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.b = new Int32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.aT = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.bd = (function() {
  return new $ac_J(this.b.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Float32Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.aT = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bd = (function() {
  return new $ac_F(this.b.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.b = new Float64Array(arg);
  } else {
    this.b = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.aT = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.bd = (function() {
  return new $ac_D(this.b.slice());
});
function $TypeData() {
  this.C = (void 0);
  this.n = null;
  this.O = null;
  this.B = null;
  this.D = 0;
  this.z = null;
  this.E = "";
  this.L = (void 0);
  this.A = (void 0);
  this.F = (void 0);
  this.w = (void 0);
  this.J = false;
  this.N = "";
  this.X = false;
  this.Y = false;
  this.Z = false;
  this.I = (void 0);
}
$p = $TypeData.prototype;
$p.p = (function(zero, arrayEncodedName, displayName, arrayClass, typedArrayClass) {
  this.n = ({});
  this.z = zero;
  this.E = arrayEncodedName;
  var self = this;
  this.F = ((that) => (that === self));
  this.N = displayName;
  this.X = true;
  this.I = ((obj) => false);
  if ((arrayClass !== (void 0))) {
    this.A = new $TypeData().y(this, arrayClass, typedArrayClass, (arrayEncodedName === "J"));
  }
  return this;
});
$p.i = (function(kindOrCtor, fullName, ancestors, isInstance) {
  var internalName = Object.getOwnPropertyNames(ancestors)[0];
  this.n = ancestors;
  this.E = (("L" + fullName) + ";");
  this.F = ((that) => (!(!that.n[internalName])));
  this.J = (kindOrCtor === 2);
  this.N = fullName;
  this.Y = (kindOrCtor === 1);
  this.I = (isInstance || ((obj) => (!(!((obj && obj.$classData) && obj.$classData.n[internalName])))));
  if (((typeof kindOrCtor) !== "number")) {
    kindOrCtor.prototype.$classData = this;
  }
  return this;
});
$p.y = (function(componentData, arrayClass, typedArrayClass, isLongArray, isAssignableFromFun) {
  arrayClass.prototype.$classData = this;
  var name = ("[" + componentData.E);
  this.C = arrayClass;
  this.n = ({
    B: 1,
    a: 1
  });
  this.O = componentData;
  this.B = componentData;
  this.D = 1;
  this.E = name;
  this.N = name;
  this.Z = true;
  var self = this;
  this.F = (isAssignableFromFun || ((that) => (self === that)));
  this.w = (isLongArray ? ((array) => {
    var len = (array.length | 0);
    var result = new arrayClass(len);
    var u = result.b;
    for (var i = 0; (i < len); i = ((i + 1) | 0)) {
      var srcElem = array[i];
      u[(i << 1)] = srcElem.l;
      u[(((i << 1) + 1) | 0)] = srcElem.h;
    }
    return result;
  }) : (typedArrayClass ? ((array) => new arrayClass(new typedArrayClass(array))) : ((array) => new arrayClass(array))));
  this.I = ((obj) => (obj instanceof arrayClass));
  return this;
});
$p.a = (function(componentData) {
  function ArrayClass(arg) {
    if (((typeof arg) === "number")) {
      this.b = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.b[i] = null;
      }
    } else {
      this.b = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.aT = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
  });
  $p.bd = (function() {
    return new ArrayClass(this.b.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    B: 1,
    a: 1
  });
  this.O = componentData;
  this.B = arrayBase;
  this.D = arrayDepth;
  this.E = name;
  this.N = name;
  this.Z = true;
  var isAssignableFromFun = ((that) => {
    var thatDepth = that.D;
    return ((thatDepth === arrayDepth) ? arrayBase.F(that.B) : ((thatDepth > arrayDepth) && (arrayBase === $d_O)));
  });
  this.F = isAssignableFromFun;
  this.w = ((array) => new ArrayClass(array));
  var self = this;
  this.I = ((obj) => {
    var data = (obj && obj.$classData);
    return ((!(!data)) && ((data === self) || isAssignableFromFun(data)));
  });
  return this;
});
$p.r = (function() {
  if ((!this.A)) {
    this.A = new $TypeData().a(this);
  }
  return this.A;
});
$p.l = (function() {
  if ((!this.L)) {
    this.L = new $c_jl_Class(this);
  }
  return this.L;
});
$p.R = (function(that) {
  return ((this === that) || this.F(that));
});
$p.S = (function() {
  return (this.P ? this.P.l() : null);
});
$p.Q = (function() {
  return (this.O ? this.O.l() : null);
});
$p.U = (function(length) {
  if ((this === $d_V)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return new (this.r().C)(length);
});
function $isArrayOf_O(obj, depth) {
  var data = (obj && obj.$classData);
  if ((!data)) {
    return false;
  } else {
    var arrayDepth = data.D;
    return ((arrayDepth === depth) ? (!data.B.X) : (arrayDepth > depth));
  }
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_Z))));
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_C))));
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_B))));
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_S))));
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_I))));
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_J))));
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_F))));
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && (obj.$classData.B === $d_D))));
}
var $d_O = new $TypeData();
$d_O.n = ({});
$d_O.E = "Ljava.lang.Object;";
$d_O.F = ((that) => (!that.X));
$d_O.N = "java.lang.Object";
$d_O.I = ((obj) => (obj !== null));
$d_O.A = new $TypeData().y($d_O, $ac_O, (void 0), false, ((that) => {
  var thatDepth = that.D;
  return ((thatDepth === 1) ? (!that.B.X) : (thatDepth > 1));
}));
$c_O.prototype.$classData = $d_O;
var $d_V = new $TypeData().p((void 0), "V", "void", (void 0), (void 0));
var $d_Z = new $TypeData().p(false, "Z", "boolean", $ac_Z, (void 0));
var $d_C = new $TypeData().p(0, "C", "char", $ac_C, Uint16Array);
var $d_B = new $TypeData().p(0, "B", "byte", $ac_B, Int8Array);
var $d_S = new $TypeData().p(0, "S", "short", $ac_S, Int16Array);
var $d_I = new $TypeData().p(0, "I", "int", $ac_I, Int32Array);
var $d_J = new $TypeData().p($bL0, "J", "long", $ac_J, Int32Array);
var $d_F = new $TypeData().p(0.0, "F", "float", $ac_F, Float32Array);
var $d_D = new $TypeData().p(0.0, "D", "double", $ac_D, Float64Array);
function $p_jl_System$SystemProperties$__loadSystemProperties__O($thiz) {
  var result = ({});
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  result["java.vm.version"] = "1.21.0";
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result;
}
/** @constructor */
function $c_jl_System$SystemProperties$() {
  this.jx = null;
  this.lh = null;
  $n_jl_System$SystemProperties$ = this;
  this.jx = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.lh = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.o9 = (function(key, default$1) {
  if ((this.jx !== null)) {
    var dict = this.jx;
    return ((!(!$m_jl_Utils$Cache$().lj.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.lh.o9(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  bl: 1
}));
var $n_jl_System$SystemProperties$;
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$();
  }
  return $n_jl_System$SystemProperties$;
}
/** @constructor */
function $c_jl_Utils$Cache$() {
  this.lj = null;
  $n_jl_Utils$Cache$ = this;
  this.lj = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  bn: 1
}));
var $n_jl_Utils$Cache$;
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$();
  }
  return $n_jl_Utils$Cache$;
}
function $f_jl_Void__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Void__hashCode__I($thiz) {
  return 0;
}
function $f_jl_Void__toString__T($thiz) {
  return "undefined";
}
var $d_jl_Void = new $TypeData().i(0, "java.lang.Void", ({
  bo: 1
}), ((x) => (x === (void 0))));
function $p_jl_reflect_Array$__mismatch__O__E($thiz, array) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch");
}
/** @constructor */
function $c_jl_reflect_Array$() {
}
$p = $c_jl_reflect_Array$.prototype = new $h_O();
$p.constructor = $c_jl_reflect_Array$;
/** @constructor */
function $h_jl_reflect_Array$() {
}
$h_jl_reflect_Array$.prototype = $p;
$p.i3 = (function(array) {
  return ((array instanceof $ac_O) ? array.b.length : ((array instanceof $ac_Z) ? array.b.length : ((array instanceof $ac_C) ? array.b.length : ((array instanceof $ac_B) ? array.b.length : ((array instanceof $ac_S) ? array.b.length : ((array instanceof $ac_I) ? array.b.length : ((array instanceof $ac_J) ? ((array.b.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.b.length : ((array instanceof $ac_D) ? array.b.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bp: 1
}));
var $n_jl_reflect_Array$;
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$();
  }
  return $n_jl_reflect_Array$;
}
/** @constructor */
function $c_ju_Arrays$() {
}
$p = $c_ju_Arrays$.prototype = new $h_O();
$p.constructor = $c_ju_Arrays$;
/** @constructor */
function $h_ju_Arrays$() {
}
$h_ju_Arrays$.prototype = $p;
$p.p9 = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.b.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.b[mid];
      var cmp = ((key === elem) ? 0 : ((key < elem) ? (-1) : 1));
      if ((cmp < 0)) {
        endIndex = mid;
      } else if ((cmp === 0)) {
        return mid;
      } else {
        startIndex = ((1 + mid) | 0);
      }
    }
  }
});
var $d_ju_Arrays$ = new $TypeData().i($c_ju_Arrays$, "java.util.Arrays$", ({
  bq: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().r4(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().r3(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().pw(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().pv(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().jh(value);
}
function $s_RTLong__fromUnsignedInt__I__J(value) {
  return $bL(value, 0);
}
function $s_RTLong__fromInt__I__J(value) {
  var hi = (value >> 31);
  return $bL(value, hi);
}
function $s_RTLong__clz__I__I__I(lo, hi) {
  return ((hi !== 0) ? Math.clz32(hi) : ((32 + Math.clz32(lo)) | 0));
}
function $s_RTLong__toFloat__I__I__F(lo, hi) {
  return Math.fround(((4.294967296E9 * hi) + ((((((-2097152) & (hi ^ (hi >> 10))) === 0) || ((65535 & lo) === 0)) ? lo : (32768 | ((-32768) & lo))) >>> 0.0)));
}
function $s_RTLong__toDouble__I__I__D(lo, hi) {
  return ((4.294967296E9 * hi) + (lo >>> 0.0));
}
function $s_RTLong__toInt__I__I__I(lo, hi) {
  return lo;
}
function $s_RTLong__toString__I__I__T(lo, hi) {
  return $m_RTLong$().oE(lo, hi);
}
function $s_RTLong__bitsToDouble__I__I__O__D(lo, hi, fpBitsDataView) {
  fpBitsDataView.setInt32(0, lo, true);
  fpBitsDataView.setInt32(4, hi, true);
  return (+fpBitsDataView.getFloat64(0, true));
}
function $s_RTLong__mul__I__I__I__I__J(alo, ahi, blo, bhi) {
  var a0 = (65535 & alo);
  var a1 = ((alo >>> 16) | 0);
  var b0 = (65535 & blo);
  var b1 = ((blo >>> 16) | 0);
  var a0b0 = Math.imul(a0, b0);
  var a1b0 = Math.imul(a1, b0);
  var a0b1 = Math.imul(a0, b1);
  var lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
  var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
  var hi = ((((((((Math.imul(alo, bhi) + Math.imul(ahi, blo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sub__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo - blo) | 0);
  var hi = ((((ahi - bhi) | 0) + ((((~alo) & blo) | ((~(alo ^ blo)) & lo)) >> 31)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__add__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = ((alo + blo) | 0);
  var hi = ((((ahi + bhi) | 0) + ((((alo & blo) | ((alo | blo) & (~lo))) >>> 31) | 0)) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__sar__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : (hi >> n));
  var hi$1 = (((32 & n) === 0) ? (hi >> n) : (hi >> 31));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shr__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (((lo >>> n) | 0) | ((hi << 1) << (~n))) : ((hi >>> n) | 0));
  var hi$1 = (((32 & n) === 0) ? ((hi >>> n) | 0) : 0);
  return $bL(lo$1, hi$1);
}
function $s_RTLong__shl__I__I__I__J(lo, hi, n) {
  var lo$1 = (((32 & n) === 0) ? (lo << n) : 0);
  var hi$1 = (((32 & n) === 0) ? (((((lo >>> 1) | 0) >>> (~n)) | 0) | (hi << n)) : (lo << n));
  return $bL(lo$1, hi$1);
}
function $s_RTLong__xor__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo ^ blo);
  var hi = (ahi ^ bhi);
  return $bL(lo, hi);
}
function $s_RTLong__and__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo & blo);
  var hi = (ahi & bhi);
  return $bL(lo, hi);
}
function $s_RTLong__or__I__I__I__I__J(alo, ahi, blo, bhi) {
  var lo = (alo | blo);
  var hi = (ahi | bhi);
  return $bL(lo, hi);
}
function $s_RTLong__geu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__gtu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : ((ahi >>> 0) > (bhi >>> 0)));
}
function $s_RTLong__leu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ltu__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : ((ahi >>> 0) < (bhi >>> 0)));
}
function $s_RTLong__ge__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) >= (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__gt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) > (blo >>> 0)) : (ahi > bhi));
}
function $s_RTLong__le__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) <= (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__lt__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return ((ahi === bhi) ? ((alo >>> 0) < (blo >>> 0)) : (ahi < bhi));
}
function $s_RTLong__notEquals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) !== 0);
}
function $s_RTLong__equals__I__I__I__I__Z(alo, ahi, blo, bhi) {
  return (((alo ^ blo) | (ahi ^ bhi)) === 0);
}
/** @constructor */
function $c_RTLong$() {
}
$p = $c_RTLong$.prototype = new $h_O();
$p.constructor = $c_RTLong$;
/** @constructor */
function $h_RTLong$() {
}
$h_RTLong$.prototype = $p;
$p.oE = (function(lo, hi) {
  if ((hi === (lo >> 31))) {
    return ("" + lo);
  } else if ((((-2097152) & (hi ^ (hi >> 10))) === 0)) {
    return ("" + ((4.294967296E9 * hi) + (lo >>> 0.0)));
  } else {
    var sign = (hi >> 31);
    var xlo = (lo ^ sign);
    var rlo = ((xlo - sign) | 0);
    var rhi = (((hi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
    var approxNum = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var approxQuot = (+Math.floor((1.0E-9 * approxNum)));
    var approxRem = ((rlo - Math.imul(1000000000, (approxQuot | 0.0))) | 0);
    if ((approxRem < 0)) {
      approxQuot = (approxQuot - 1.0);
      approxRem = ((1000000000 + approxRem) | 0);
    } else if ((approxRem >= 1000000000)) {
      approxQuot = (approxQuot + 1.0);
      approxRem = ((approxRem - 1000000000) | 0);
    }
    var this$7 = approxRem;
    var remStr = ("" + this$7);
    var $x_1 = approxQuot;
    var start = remStr.length;
    var s = ((("" + $x_1) + "000000000".substring(start)) + remStr);
    return ((hi < 0) ? ("-" + s) : s);
  }
});
$p.jh = (function(value) {
  if ((value < (-9.223372036854776E18))) {
    return $bL(0, (-2147483648));
  } else if ((value >= 9.223372036854776E18)) {
    return $bL((-1), 2147483647);
  } else {
    var rawLo = (value | 0.0);
    var rawHi = ((2.3283064365386963E-10 * value) | 0.0);
    var hi = (((value < 0.0) && (rawLo !== 0)) ? ((rawHi - 1) | 0) : rawHi);
    return $bL(rawLo, hi);
  }
});
$p.pv = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var quotHi = (((rhi >>> 0) / ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var k = ((rhi - Math.imul(rlo$1, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var absR_$_lo = quotLo;
    var absR_$_hi = quotHi;
  } else if ((((-1073741824) & rhi$1) === 0)) {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) + ((((~rlo) & lo$1) | ((~(rlo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + (((lo | (~lo$3)) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else if (((hi$2 === rhi$1) ? ((lo$2 >>> 0) >= (rlo$1 >>> 0)) : ((hi$2 >>> 0) > (rhi$1 >>> 0)))) {
      var lo$4 = ((1 + lo) | 0);
      var hi$4 = ((hi + (((lo & (~lo$4)) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$4;
      var absR_$_hi = hi$4;
    } else {
      var absR_$_lo = lo;
      var absR_$_hi = hi;
    }
  } else {
    var $x_1 = this.jp(rlo, rhi, rlo$1, rhi$1, true);
    var absR_$_lo = $x_1.l;
    var absR_$_hi = $x_1.h;
  }
  if (((ahi ^ bhi) >= 0)) {
    return $bL(absR_$_lo, absR_$_hi);
  } else {
    var lo$5 = ((-absR_$_lo) | 0);
    var hi$5 = ((((-absR_$_hi) | 0) + ((absR_$_lo | lo$5) >> 31)) | 0);
    return $bL(lo$5, hi$5);
  }
});
$p.pw = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var quotHi = (((ahi >>> 0) / ($checkIntDivisor(blo) >>> 0)) | 0);
    var k = ((ahi - Math.imul(blo, quotHi)) | 0);
    var quotLo = ((((4.294967296E9 * k) + (alo >>> 0.0)) / blo) | 0.0);
    return $bL(quotLo, quotHi);
  } else if ((((-1073741824) & bhi) === 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) + ((((~alo) & lo$1) | ((~(alo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo - 1) | 0);
      var hi$3 = ((((hi - 1) | 0) + (((lo | (~lo$3)) >>> 31) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else if (((hi$2 === bhi) ? ((lo$2 >>> 0) >= (blo >>> 0)) : ((hi$2 >>> 0) > (bhi >>> 0)))) {
      var lo$4 = ((1 + lo) | 0);
      var hi$4 = ((hi + (((lo & (~lo$4)) >>> 31) | 0)) | 0);
      return $bL(lo$4, hi$4);
    } else {
      return $bL(lo, hi);
    }
  } else {
    return this.jp(alo, ahi, blo, bhi, true);
  }
});
$p.r3 = (function(alo, ahi, blo, bhi) {
  var sign = (ahi >> 31);
  var xlo = (alo ^ sign);
  var rlo = ((xlo - sign) | 0);
  var rhi = (((ahi ^ sign) + (((xlo & (~rlo)) >>> 31) | 0)) | 0);
  var sign$1 = (bhi >> 31);
  var xlo$1 = (blo ^ sign$1);
  var rlo$1 = ((xlo$1 - sign$1) | 0);
  var rhi$1 = (((bhi ^ sign$1) + (((xlo$1 & (~rlo$1)) >>> 31) | 0)) | 0);
  if (((rhi$1 | ((-2097152) & rlo$1)) === 0)) {
    var k$2 = (((rhi >>> 0) % ($checkIntDivisor(rlo$1) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (rlo >>> 0.0)) / rlo$1) | 0.0);
    var remLo = ((rlo - Math.imul(rlo$1, quotLo$2)) | 0);
    var absR_$_lo = remLo;
    var absR_$_hi = 0;
  } else if ((((-1073741824) & rhi$1) === 0)) {
    var aHat = ((4.294967296E9 * (rhi >>> 0.0)) + (rlo >>> 0.0));
    var bHat = ((4.294967296E9 * (rhi$1 >>> 0.0)) + (rlo$1 >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & rlo$1);
    var a1 = ((rlo$1 >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(rlo$1, hi) + Math.imul(rhi$1, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((rlo - lo$1) | 0);
    var hi$2 = ((((rhi - hi$1) | 0) + ((((~rlo) & lo$1) | ((~(rlo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + rlo$1) | 0);
      var hi$3 = ((((hi$2 + rhi$1) | 0) + ((((lo$2 & rlo$1) | ((lo$2 | rlo$1) & (~lo$3))) >>> 31) | 0)) | 0);
      var absR_$_lo = lo$3;
      var absR_$_hi = hi$3;
    } else if (((hi$2 === rhi$1) ? ((lo$2 >>> 0) >= (rlo$1 >>> 0)) : ((hi$2 >>> 0) > (rhi$1 >>> 0)))) {
      var lo$4 = ((lo$2 - rlo$1) | 0);
      var hi$4 = ((((hi$2 - rhi$1) | 0) + ((((~lo$2) & rlo$1) | ((~(lo$2 ^ rlo$1)) & lo$4)) >> 31)) | 0);
      var absR_$_lo = lo$4;
      var absR_$_hi = hi$4;
    } else {
      var absR_$_lo = lo$2;
      var absR_$_hi = hi$2;
    }
  } else {
    var $x_1 = this.jp(rlo, rhi, rlo$1, rhi$1, false);
    var absR_$_lo = $x_1.l;
    var absR_$_hi = $x_1.h;
  }
  if ((ahi < 0)) {
    var lo$5 = ((-absR_$_lo) | 0);
    var hi$5 = ((((-absR_$_hi) | 0) + ((absR_$_lo | lo$5) >> 31)) | 0);
    return $bL(lo$5, hi$5);
  } else {
    return $bL(absR_$_lo, absR_$_hi);
  }
});
$p.r4 = (function(alo, ahi, blo, bhi) {
  if (((bhi | ((-2097152) & blo)) === 0)) {
    var k$2 = (((ahi >>> 0) % ($checkIntDivisor(blo) >>> 0)) | 0);
    var quotLo$2 = ((((4.294967296E9 * k$2) + (alo >>> 0.0)) / blo) | 0.0);
    var remLo = ((alo - Math.imul(blo, quotLo$2)) | 0);
    return $bL(remLo, 0);
  } else if ((((-1073741824) & bhi) === 0)) {
    var aHat = ((4.294967296E9 * (ahi >>> 0.0)) + (alo >>> 0.0));
    var bHat = ((4.294967296E9 * (bhi >>> 0.0)) + (blo >>> 0.0));
    var x$1 = (aHat / bHat);
    var lo = (x$1 | 0.0);
    var hi = ((2.3283064365386963E-10 * x$1) | 0.0);
    var a0 = (65535 & blo);
    var a1 = ((blo >>> 16) | 0);
    var b0 = (65535 & lo);
    var b1 = ((lo >>> 16) | 0);
    var a0b0 = Math.imul(a0, b0);
    var a1b0 = Math.imul(a1, b0);
    var a0b1 = Math.imul(a0, b1);
    var lo$1 = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    var c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    var hi$1 = ((((((((Math.imul(blo, hi) + Math.imul(bhi, lo)) | 0) + Math.imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    var lo$2 = ((alo - lo$1) | 0);
    var hi$2 = ((((ahi - hi$1) | 0) + ((((~alo) & lo$1) | ((~(alo ^ lo$1)) & lo$2)) >> 31)) | 0);
    if ((hi$2 < 0)) {
      var lo$3 = ((lo$2 + blo) | 0);
      var hi$3 = ((((hi$2 + bhi) | 0) + ((((lo$2 & blo) | ((lo$2 | blo) & (~lo$3))) >>> 31) | 0)) | 0);
      return $bL(lo$3, hi$3);
    } else if (((hi$2 === bhi) ? ((lo$2 >>> 0) >= (blo >>> 0)) : ((hi$2 >>> 0) > (bhi >>> 0)))) {
      var lo$4 = ((lo$2 - blo) | 0);
      var hi$4 = ((((hi$2 - bhi) | 0) + ((((~lo$2) & blo) | ((~(lo$2 ^ blo)) & lo$4)) >> 31)) | 0);
      return $bL(lo$4, hi$4);
    } else {
      return $bL(lo$2, hi$2);
    }
  } else {
    return this.jp(alo, ahi, blo, bhi, false);
  }
});
$p.jp = (function(alo, ahi, blo, bhi, askQuotient) {
  var quot1 = 0;
  if ((bhi >= 0)) {
    var lo = (blo << 1);
    var hi = (((blo >>> 31) | 0) | (bhi << 1));
    if (((ahi === hi) ? ((alo >>> 0) >= (lo >>> 0)) : ((ahi >>> 0) > (hi >>> 0)))) {
      quot1 = 2;
      var lo$1 = ((alo - lo) | 0);
      var hi$1 = ((((ahi - hi) | 0) + ((((~alo) & lo) | ((~(alo ^ lo)) & lo$1)) >> 31)) | 0);
      var rem1_$_lo = lo$1;
      var rem1_$_hi = hi$1;
    } else {
      var rem1_$_lo = alo;
      var rem1_$_hi = ahi;
    }
  } else {
    var rem1_$_lo = alo;
    var rem1_$_hi = ahi;
  }
  var rem1LTUb = ((rem1_$_hi === bhi) ? ((rem1_$_lo >>> 0) < (blo >>> 0)) : ((rem1_$_hi >>> 0) < (bhi >>> 0)));
  if (askQuotient) {
    if (rem1LTUb) {
      var lo$2 = quot1;
      return $bL(lo$2, 0);
    } else {
      var lo$3 = ((1 + quot1) | 0);
      return $bL(lo$3, 0);
    }
  } else if (rem1LTUb) {
    return $bL(rem1_$_lo, rem1_$_hi);
  } else {
    var lo$4 = ((rem1_$_lo - blo) | 0);
    var hi$2 = ((((rem1_$_hi - bhi) | 0) + ((((~rem1_$_lo) & blo) | ((~(rem1_$_lo ^ blo)) & lo$4)) >> 31)) | 0);
    return $bL(lo$4, hi$2);
  }
});
var $d_RTLong$ = new $TypeData().i($c_RTLong$, "org.scalajs.linker.runtime.RuntimeLong$", ({
  bs: 1
}));
var $n_RTLong$;
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$();
  }
  return $n_RTLong$;
}
/** @constructor */
function $c_s_Array$() {
}
$p = $c_s_Array$.prototype = new $h_O();
$p.constructor = $c_s_Array$;
/** @constructor */
function $h_s_Array$() {
}
$h_s_Array$.prototype = $p;
$p.o4 = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.b.length !== ys.b.length)) {
    return false;
  }
  var len = xs.b.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().c(xs.b[i], ys.b[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bt: 1
}));
var $n_s_Array$;
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$();
  }
  return $n_s_Array$;
}
/** @constructor */
function $c_s_LowPriorityImplicits2() {
}
$p = $c_s_LowPriorityImplicits2.prototype = new $h_O();
$p.constructor = $c_s_LowPriorityImplicits2;
/** @constructor */
function $h_s_LowPriorityImplicits2() {
}
$h_s_LowPriorityImplicits2.prototype = $p;
function $f_sc_IterableOnceOps__foreach__F1__V($thiz, f) {
  var it = $thiz.aj();
  while (it.X()) {
    f.h(it.S());
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.aj();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.ap();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().i3(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().i3(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.X())) {
    $m_sr_ScalaRunTime$().p5(dest, i, it.S());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.ap() === 0) ? (("" + start) + end) : $thiz.kN($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).bo.ay);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.bo;
  if ((start.length !== 0)) {
    jsb.ay = (("" + jsb.ay) + start);
  }
  var it = $thiz.aj();
  if (it.X()) {
    var obj = it.S();
    jsb.ay = (("" + jsb.ay) + obj);
    while (it.X()) {
      if ((sep.length !== 0)) {
        jsb.ay = (("" + jsb.ay) + sep);
      }
      var obj$1 = it.S();
      jsb.ay = (("" + jsb.ay) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.ay = (("" + jsb.ay) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.lr = null;
  this.hi = null;
  this.lr = head;
  this.hi = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.pU = (function() {
  return this.lr.i0().aj();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  cb: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.ls = null;
  $n_sc_StringOps$ = this;
  this.ls = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.ls));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  cj: 1
}));
var $n_sc_StringOps$;
function $m_sc_StringOps$() {
  if ((!$n_sc_StringOps$)) {
    $n_sc_StringOps$ = new $c_sc_StringOps$();
  }
  return $n_sc_StringOps$;
}
/** @constructor */
function $c_sci_IndexedSeqDefaults$() {
  this.lv = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().q2($m_jl_System$SystemProperties$().o9("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.lv = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  co: 1
}));
var $n_sci_IndexedSeqDefaults$;
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$();
  }
  return $n_sci_IndexedSeqDefaults$;
}
/** @constructor */
function $c_sr_BoxesRunTime$() {
}
$p = $c_sr_BoxesRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_BoxesRunTime$;
/** @constructor */
function $h_sr_BoxesRunTime$() {
}
$h_sr_BoxesRunTime$.prototype = $p;
$p.c = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.pD(x, y) : ((x instanceof $Char) ? this.pB(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.pD = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.pC(xn, y);
  } else if ((y instanceof $Char)) {
    if (((typeof xn) === "number")) {
      return ((+xn) === y.c);
    } else if ((xn instanceof $Long)) {
      var $x_1 = $uJ(xn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = y.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
    }
  } else {
    return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y));
  }
});
$p.pC = (function(xn, yn) {
  if (((typeof xn) === "number")) {
    var x2 = (+xn);
    if (((typeof yn) === "number")) {
      return (x2 === (+yn));
    } else if ((yn instanceof $Long)) {
      var $x_1 = $uJ(yn);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      return (x2 === ((4.294967296E9 * x3_$_hi) + (x3_$_lo >>> 0.0)));
    } else {
      return (false && yn.u(x2));
    }
  } else if ((xn instanceof $Long)) {
    var $x_2 = $uJ(xn);
    var x3$2_$_lo = $x_2.l;
    var x3$2_$_hi = $x_2.h;
    if ((yn instanceof $Long)) {
      var $x_3 = $uJ(yn);
      var x2$3_$_lo = $x_3.l;
      var x2$3_$_hi = $x_3.h;
      return (((x3$2_$_lo ^ x2$3_$_lo) | (x3$2_$_hi ^ x2$3_$_hi)) === 0);
    } else if (((typeof yn) === "number")) {
      var x3$3 = (+yn);
      return (((4.294967296E9 * x3$2_$_hi) + (x3$2_$_lo >>> 0.0)) === x3$3);
    } else {
      return (false && yn.u($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.pB = (function(xc, y) {
  if ((y instanceof $Char)) {
    return (xc.c === y.c);
  } else if ($is_jl_Number(y)) {
    if (((typeof y) === "number")) {
      return ((+y) === xc.c);
    } else if ((y instanceof $Long)) {
      var $x_1 = $uJ(y);
      var x3_$_lo = $x_1.l;
      var x3_$_hi = $x_1.h;
      var value = xc.c;
      var hi = (value >> 31);
      return (((x3_$_lo ^ value) | (x3_$_hi ^ hi)) === 0);
    } else {
      return ((y === null) ? (xc === null) : $dp_equals__O__Z(y, xc));
    }
  } else {
    return ((xc === null) && (y === null));
  }
});
var $d_sr_BoxesRunTime$ = new $TypeData().i($c_sr_BoxesRunTime$, "scala.runtime.BoxesRunTime$", ({
  d0: 1
}));
var $n_sr_BoxesRunTime$;
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$();
  }
  return $n_sr_BoxesRunTime$;
}
/** @constructor */
function $c_sr_Scala3RunTime$() {
}
$p = $c_sr_Scala3RunTime$.prototype = new $h_O();
$p.constructor = $c_sr_Scala3RunTime$;
/** @constructor */
function $h_sr_Scala3RunTime$() {
}
$h_sr_Scala3RunTime$.prototype = $p;
$p.p6 = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.jo = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  d3: 1
}));
var $n_sr_Scala3RunTime$;
function $m_sr_Scala3RunTime$() {
  if ((!$n_sr_Scala3RunTime$)) {
    $n_sr_Scala3RunTime$ = new $c_sr_Scala3RunTime$();
  }
  return $n_sr_Scala3RunTime$;
}
/** @constructor */
function $c_sr_ScalaRunTime$() {
}
$p = $c_sr_ScalaRunTime$.prototype = new $h_O();
$p.constructor = $c_sr_ScalaRunTime$;
/** @constructor */
function $h_sr_ScalaRunTime$() {
}
$h_sr_ScalaRunTime$.prototype = $p;
$p.h8 = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.b;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.b[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.b[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.b[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.p5 = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.b[idx] = value;
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    xs.b[idx] = (+value);
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.b;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    xs.b[idx] = Math.fround(value);
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    xs.b[idx] = $uC(value);
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    xs.b[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    xs.b[idx] = (!(!value));
    return (void 0);
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.bO = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.K(), (x.H() + "("), ",", ")");
});
$p.ar = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.b.length === 0)) {
    var this$2 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$2);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  d4: 1
}));
var $n_sr_ScalaRunTime$;
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$();
  }
  return $n_sr_ScalaRunTime$;
}
/** @constructor */
function $c_sr_Statics$() {
}
$p = $c_sr_Statics$.prototype = new $h_O();
$p.constructor = $c_sr_Statics$;
/** @constructor */
function $h_sr_Statics$() {
}
$h_sr_Statics$.prototype = $p;
$p.k = (function(hash, data) {
  var h = this.jm(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.jm = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ac = (function(hash, length) {
  return this.p7((hash ^ length));
});
$p.p7 = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.q5 = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.aH = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().jh(dv);
    var lv_$_lo = $x_1.l;
    var lv_$_hi = $x_1.h;
    if ((((4.294967296E9 * lv_$_hi) + (lv_$_lo >>> 0.0)) === dv)) {
      return (lv_$_lo ^ lv_$_hi);
    } else {
      var valueInt = (dv | 0);
      if (((valueInt === dv) && ((1.0 / dv) !== (-Infinity)))) {
        return valueInt;
      } else if ((dv !== dv)) {
        return 2146959360;
      } else {
        var fpBitsDataView = $fpBitsDataView;
        fpBitsDataView.setFloat64(0, dv, true);
        return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
      }
    }
  }
});
$p.O = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.aH((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.q5($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.q0 = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  d6: 1
}));
var $n_sr_Statics$;
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$();
  }
  return $n_sr_Statics$;
}
function $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product($thiz, x, self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return new $c_T1(x);
  }
  if ((self instanceof $c_T1)) {
    return $ct_T2__O__O__(new $c_T2(), x, self.gj);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.a0(), self.a1());
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.aK, self.aU, self.b3);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.bC, self.bk, self.bl, self.bm);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.gx, self.fl, self.fm, self.fn, self.fo);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.gy, self.fp, self.fq, self.fr, self.fs, self.ft);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.gz, self.fu, self.fv, self.fw, self.fx, self.fy, self.fz);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.gA, self.fA, self.fB, self.fC, self.fD, self.fE, self.fF, self.fG);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.gB, self.fH, self.fI, self.fJ, self.fK, self.fL, self.fM, self.fN, self.fO);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.gk, self.cc, self.cd, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.cb);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.gl, self.cm, self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.ck, self.cl);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.gm, self.cx, self.cy, self.cz, self.cA, self.cB, self.cC, self.cD, self.cE, self.cu, self.cv, self.cw);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.gn, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cF, self.cG, self.cH, self.cI);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.go, self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d3, self.cR, self.cS, self.cT, self.cU, self.cV);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.gp, self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.d4, self.d5, self.d6, self.d7, self.d8, self.d9);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.gq, self.dq, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.gr, self.dG, self.dH, self.dI, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.gs, self.dX, self.dY, self.dZ, self.e0, self.e1, self.e2, self.e3, self.e4, self.dO, self.dP, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.gt, self.ef, self.eg, self.eh, self.ei, self.ej, self.ek, self.el, self.em, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.ec, self.ed, self.ee);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.gu, self.ex, self.ez, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF, self.en, self.eo, self.ep, self.eq, self.er, self.es, self.et, self.eu, self.ev, self.ew, self.ey);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.gv, self.eQ, self.eT, self.eU, self.eV, self.eW, self.eX, self.eY, self.eZ, self.eG, self.eH, self.eI, self.eJ, self.eK, self.eL, self.eM, self.eN, self.eO, self.eP, self.eR, self.eS);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.gw, self.fa, self.fe, self.ff, self.fg, self.fh, self.fi, self.fj, self.fk, self.f0, self.f1, self.f2, self.f3, self.f4, self.f5, self.f6, self.f7, self.f8, self.f9, self.fb, self.fc, self.fd]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.z()) | 0));
  arr.b[0] = x;
  var src = xxl.al;
  var length = xxl.z();
  src.aT(0, arr, 1, length);
  return new $c_sr_TupleXXL(arr);
}
function $p_sr_Tuples$__specialCaseTail__s_Product__s_Product($thiz, self) {
  matchResult34$1: {
    var $x_1;
    if ((self instanceof $c_T1)) {
      var $x_1 = $m_T$package$EmptyTuple$();
      break matchResult34$1;
    }
    if ((self instanceof $c_T2)) {
      var $x_1 = new $c_T1(self.a1());
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = $ct_T2__O__O__(new $c_T2(), self.aU, self.b3);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.bk, self.bl, self.bm);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.fl, self.fm, self.fn, self.fo);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.fp, self.fq, self.fr, self.fs, self.ft);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.fu, self.fv, self.fw, self.fx, self.fy, self.fz);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.fA, self.fB, self.fC, self.fD, self.fE, self.fF, self.fG);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.fH, self.fI, self.fJ, self.fK, self.fL, self.fM, self.fN, self.fO);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.cc, self.cd, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj, self.cb);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.cm, self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.ck, self.cl);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.cx, self.cy, self.cz, self.cA, self.cB, self.cC, self.cD, self.cE, self.cu, self.cv, self.cw);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cF, self.cG, self.cH, self.cI);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.cW, self.cX, self.cY, self.cZ, self.d0, self.d1, self.d2, self.d3, self.cR, self.cS, self.cT, self.cU, self.cV);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.d4, self.d5, self.d6, self.d7, self.d8, self.d9);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.dq, self.dr, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.di, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.dG, self.dH, self.dI, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dF);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.dX, self.dY, self.dZ, self.e0, self.e1, self.e2, self.e3, self.e4, self.dO, self.dP, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dV, self.dW);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.ef, self.eg, self.eh, self.ei, self.ej, self.ek, self.el, self.em, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.ec, self.ed, self.ee);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.ex, self.ez, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF, self.en, self.eo, self.ep, self.eq, self.er, self.es, self.et, self.eu, self.ev, self.ew, self.ey);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.eQ, self.eT, self.eU, self.eV, self.eW, self.eX, self.eY, self.eZ, self.eG, self.eH, self.eI, self.eJ, self.eK, self.eL, self.eM, self.eN, self.eO, self.eP, self.eR, self.eS);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.fa, self.fe, self.ff, self.fg, self.fh, self.fi, self.fj, self.fk, self.f0, self.f1, self.f2, self.f3, self.f4, self.f5, self.f6, self.f7, self.f8, self.f9, self.fb, self.fc, self.fd);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.z() === 23)) {
    var elems = xxl.al;
    return new $c_T22(elems.b[1], elems.b[2], elems.b[3], elems.b[4], elems.b[5], elems.b[6], elems.b[7], elems.b[8], elems.b[9], elems.b[10], elems.b[11], elems.b[12], elems.b[13], elems.b[14], elems.b[15], elems.b[16], elems.b[17], elems.b[18], elems.b[19], elems.b[20], elems.b[21], elems.b[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.al.b.length - 1) | 0));
    var src = xxl.al;
    var length = ((xxl.al.b.length - 1) | 0);
    src.aT(1, arr$1, 0, length);
    return new $c_sr_TupleXXL(arr$1);
  }
}
/** @constructor */
function $c_sr_Tuples$() {
}
$p = $c_sr_Tuples$.prototype = new $h_O();
$p.constructor = $c_sr_Tuples$;
/** @constructor */
function $h_sr_Tuples$() {
}
$h_sr_Tuples$.prototype = $p;
$p.pL = (function(xs) {
  switch (xs.b.length) {
    case 0: {
      return $m_T$package$EmptyTuple$();
      break;
    }
    case 1: {
      return new $c_T1(xs.b[0]);
      break;
    }
    case 2: {
      return $ct_T2__O__O__(new $c_T2(), xs.b[0], xs.b[1]);
      break;
    }
    case 3: {
      return new $c_T3(xs.b[0], xs.b[1], xs.b[2]);
      break;
    }
    case 4: {
      return new $c_T4(xs.b[0], xs.b[1], xs.b[2], xs.b[3]);
      break;
    }
    case 5: {
      return new $c_T5(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4]);
      break;
    }
    case 6: {
      return new $c_T6(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5]);
      break;
    }
    case 7: {
      return new $c_T7(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6]);
      break;
    }
    case 8: {
      return new $c_T8(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7]);
      break;
    }
    case 9: {
      return new $c_T9(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8]);
      break;
    }
    case 10: {
      return new $c_T10(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9]);
      break;
    }
    case 11: {
      return new $c_T11(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10]);
      break;
    }
    case 12: {
      return new $c_T12(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11]);
      break;
    }
    case 13: {
      return new $c_T13(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12]);
      break;
    }
    case 14: {
      return new $c_T14(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13]);
      break;
    }
    case 15: {
      return new $c_T15(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14]);
      break;
    }
    case 16: {
      return new $c_T16(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15]);
      break;
    }
    case 17: {
      return new $c_T17(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16]);
      break;
    }
    case 18: {
      return new $c_T18(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17]);
      break;
    }
    case 19: {
      return new $c_T19(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18]);
      break;
    }
    case 20: {
      return new $c_T20(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19]);
      break;
    }
    case 21: {
      return new $c_T21(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19], xs.b[20]);
      break;
    }
    case 22: {
      return new $c_T22(xs.b[0], xs.b[1], xs.b[2], xs.b[3], xs.b[4], xs.b[5], xs.b[6], xs.b[7], xs.b[8], xs.b[9], xs.b[10], xs.b[11], xs.b[12], xs.b[13], xs.b[14], xs.b[15], xs.b[16], xs.b[17], xs.b[18], xs.b[19], xs.b[20], xs.b[21]);
      break;
    }
    default: {
      return new $c_sr_TupleXXL(xs.bd());
    }
  }
});
$p.pM = (function(xs) {
  return ((xs.b.length <= 22) ? this.pL(xs) : new $c_sr_TupleXXL(xs));
});
$p.nY = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.pk = (function(self, that) {
  var selfSize = $m_sr_Tuples$().oC(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().oC(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.al;
    src.aT(0, arr, 0, selfSize);
  } else {
    self.K().nZ(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.al;
    src$1.aT(0, arr, selfSize, thatSize);
  } else {
    that.K().nZ(arr, selfSize, thatSize);
  }
  return this.pM(arr);
});
$p.oC = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.z();
  }
  throw new $c_s_MatchError(self);
});
$p.rq = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  d7: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  aI: 1
}), $noIsInstance);
/** @constructor */
function $c_sjs_js_Any$ObjectCompanionOps$() {
}
$p = $c_sjs_js_Any$ObjectCompanionOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$ObjectCompanionOps$;
/** @constructor */
function $h_sjs_js_Any$ObjectCompanionOps$() {
}
$h_sjs_js_Any$ObjectCompanionOps$.prototype = $p;
$p.pT = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  d9: 1
}));
var $n_sjs_js_Any$ObjectCompanionOps$;
function $m_sjs_js_Any$ObjectCompanionOps$() {
  if ((!$n_sjs_js_Any$ObjectCompanionOps$)) {
    $n_sjs_js_Any$ObjectCompanionOps$ = new $c_sjs_js_Any$ObjectCompanionOps$();
  }
  return $n_sjs_js_Any$ObjectCompanionOps$;
}
/** @constructor */
function $c_sjs_js_ArrayOps$() {
}
$p = $c_sjs_js_ArrayOps$.prototype = new $h_O();
$p.constructor = $c_sjs_js_ArrayOps$;
/** @constructor */
function $h_sjs_js_ArrayOps$() {
}
$h_sjs_js_ArrayOps$.prototype = $p;
$p.oc = (function(this$, elem, from) {
  var len = (this$.length | 0);
  var i = from;
  while ((i < len)) {
    if ($m_sr_BoxesRunTime$().c(elem, this$[i])) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.qC = (function(this$, f) {
  var len = (this$.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    res[i] = f.h(this$[i]);
    i = ((1 + i) | 0);
  }
  return res;
});
$p.oI = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.aj();
  while (((i < len) && it.X())) {
    b.push($ct_T2__O__O__(new $c_T2(), this$[i], it.S()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.oJ = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = $ct_T2__O__O__(new $c_T2(), this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.V = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.h(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  da: 1
}));
var $n_sjs_js_ArrayOps$;
function $m_sjs_js_ArrayOps$() {
  if ((!$n_sjs_js_ArrayOps$)) {
    $n_sjs_js_ArrayOps$ = new $c_sjs_js_ArrayOps$();
  }
  return $n_sjs_js_ArrayOps$;
}
/** @constructor */
function $c_sjs_js_ArrayOpsCommon$() {
}
$p = $c_sjs_js_ArrayOpsCommon$.prototype = new $h_O();
$p.constructor = $c_sjs_js_ArrayOpsCommon$;
/** @constructor */
function $h_sjs_js_ArrayOpsCommon$() {
}
$h_sjs_js_ArrayOpsCommon$.prototype = $p;
$p.a = (function(left, right) {
  var leftLength = (left.length | 0);
  var rightLength = (right.length | 0);
  var result = new Array(((leftLength + rightLength) | 0));
  var i = 0;
  while (true) {
    if ((i !== leftLength)) {
      result[i] = left[i];
      i = ((1 + i) | 0);
      continue;
    }
    break;
  }
  var i$1 = 0;
  while (true) {
    if ((i$1 !== rightLength)) {
      result[((i$1 + leftLength) | 0)] = right[i$1];
      i$1 = ((1 + i$1) | 0);
      continue;
    }
    break;
  }
  return result;
});
var $d_sjs_js_ArrayOpsCommon$ = new $TypeData().i($c_sjs_js_ArrayOpsCommon$, "scala.scalajs.js.ArrayOpsCommon$", ({
  db: 1
}));
var $n_sjs_js_ArrayOpsCommon$;
function $m_sjs_js_ArrayOpsCommon$() {
  if ((!$n_sjs_js_ArrayOpsCommon$)) {
    $n_sjs_js_ArrayOpsCommon$ = new $c_sjs_js_ArrayOpsCommon$();
  }
  return $n_sjs_js_ArrayOpsCommon$;
}
/** @constructor */
function $c_sjs_js_WrappedDictionary$Cache$() {
  this.lF = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.lF = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  dg: 1
}));
var $n_sjs_js_WrappedDictionary$Cache$;
function $m_sjs_js_WrappedDictionary$Cache$() {
  if ((!$n_sjs_js_WrappedDictionary$Cache$)) {
    $n_sjs_js_WrappedDictionary$Cache$ = new $c_sjs_js_WrappedDictionary$Cache$();
  }
  return $n_sjs_js_WrappedDictionary$Cache$;
}
/** @constructor */
function $c_sjs_js_special_package$() {
}
$p = $c_sjs_js_special_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_special_package$;
/** @constructor */
function $h_sjs_js_special_package$() {
}
$h_sjs_js_special_package$.prototype = $p;
$p.f = (function(properties) {
  var result = ({});
  properties.c7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.a0()] = pair$2$2.a1();
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  dh: 1
}));
var $n_sjs_js_special_package$;
function $m_sjs_js_special_package$() {
  if ((!$n_sjs_js_special_package$)) {
    $n_sjs_js_special_package$ = new $c_sjs_js_special_package$();
  }
  return $n_sjs_js_special_package$;
}
/** @constructor */
function $c_sjsr_Compat$() {
}
$p = $c_sjsr_Compat$.prototype = new $h_O();
$p.constructor = $c_sjsr_Compat$;
/** @constructor */
function $h_sjsr_Compat$() {
}
$h_sjsr_Compat$.prototype = $p;
$p.aq = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.iv;
  } else {
    var result = [];
    seq.c7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  di: 1
}));
var $n_sjsr_Compat$;
function $m_sjsr_Compat$() {
  if ((!$n_sjsr_Compat$)) {
    $n_sjsr_Compat$ = new $c_sjsr_Compat$();
  }
  return $n_sjsr_Compat$;
}
/** @constructor */
function $c_sjsr_package$() {
}
$p = $c_sjsr_package$.prototype = new $h_O();
$p.constructor = $c_sjsr_package$;
/** @constructor */
function $h_sjsr_package$() {
}
$h_sjsr_package$.prototype = $p;
$p.d = (function(array) {
  var len = array.b.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.b[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  dj: 1
}));
var $n_sjsr_package$;
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$();
  }
  return $n_sjsr_package$;
}
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.k = (function(hash, data) {
  var h = this.jm(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.jm = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.ac = (function(hash, length) {
  return this.ip((hash ^ length));
});
$p.ip = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.Y = (function(x, seed, ignorePrefix) {
  var arr = x.z();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.H()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.k(h, $f_T__hashCode__I(x.H()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.k(h, $m_sr_Statics$().O(x.p(i)));
      i = ((1 + i) | 0);
    }
    return this.ac(h, arr);
  }
});
$p.pf = (function(x, seed, caseClassName) {
  var arr = x.z();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.H()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.k(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.k(h, $m_sr_Statics$().O(x.p(i)));
      i = ((1 + i) | 0);
    }
    return this.ac(h, arr);
  }
});
$p.rx = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.aj();
  while (iterator.X()) {
    var x = iterator.S();
    var h = $m_sr_Statics$().O(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.k(h$2, a);
  h$2 = this.k(h$2, b);
  h$2 = this.jm(h$2, c);
  return this.ac(h$2, n);
});
$p.qR = (function(xs, seed) {
  var it = xs.aj();
  var h = seed;
  if ((!it.X())) {
    return this.ac(h, 0);
  }
  var x0 = it.S();
  if ((!it.X())) {
    return this.ac(this.k(h, $m_sr_Statics$().O(x0)), 1);
  }
  var x1 = it.S();
  var initial = $m_sr_Statics$().O(x0);
  h = this.k(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().O(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.X()) {
    h = this.k(h, prev);
    var hash = $m_sr_Statics$().O(it.S());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.k(h, hash);
      i = ((1 + i) | 0);
      while (it.X()) {
        h = this.k(h, $m_sr_Statics$().O(it.S()));
        i = ((1 + i) | 0);
      }
      return this.ac(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.ip(this.k(this.k(h0, rangeDiff), prev));
});
$p.nU = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().i3(a);
  switch (l) {
    case 0: {
      return this.ac(h, 0);
      break;
    }
    case 1: {
      return this.ac(this.k(h, $m_sr_Statics$().O($m_sr_ScalaRunTime$().h8(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().O($m_sr_ScalaRunTime$().h8(a, 0));
      h = this.k(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().O($m_sr_ScalaRunTime$().h8(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.k(h, prev);
        var hash = $m_sr_Statics$().O($m_sr_ScalaRunTime$().h8(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.k(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.k(h, $m_sr_Statics$().O($m_sr_ScalaRunTime$().h8(a, i)));
            i = ((1 + i) | 0);
          }
          return this.ac(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.ip(this.k(this.k(h0, rangeDiff), prev));
    }
  }
});
$p.oy = (function(start, step, last, seed) {
  return this.ip(this.k(this.k(this.k(seed, start), step), last));
});
$p.pW = (function(a, seed) {
  var h = seed;
  var l = a.Q();
  switch (l) {
    case 0: {
      return this.ac(h, 0);
      break;
    }
    case 1: {
      return this.ac(this.k(h, $m_sr_Statics$().O(a.ah(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().O(a.ah(0));
      h = this.k(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().O(a.ah(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.k(h, prev);
        var hash = $m_sr_Statics$().O(a.ah(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.k(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.k(h, $m_sr_Statics$().O(a.ah(i)));
            i = ((1 + i) | 0);
          }
          return this.ac(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.ip(this.k(this.k(h0, rangeDiff), prev));
    }
  }
});
$p.q4 = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.ai())) {
    elems.jj();
  }
  return ((rangeState === 2) ? this.oy(initial, rangeDiff, prev, seed) : this.ac(h, n));
});
function $p_Lsketches_templates_rooms_lroom_LRoom$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$1, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().nR(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.x, n$3.I, n$3.y);
    var values$proxy1 = $m_sr_Tuples$().pk(vl.jX.gh(v$3), $m_sr_Tuples$().nY(nVal, $m_T$package$EmptyTuple$()));
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.p(0);
    var value = nestedValues.p(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.p(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.p(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.p(1);
    var value$4 = nestedValues$2.p(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.p(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy1.p(2);
    var value$6 = nestedValues$3.p(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.p(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.p(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy1.py();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.ad.length | 0))) {
    var n = (mesh$proxy1.ad[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy1 = vertexCount;
  var buffer = new ArrayBuffer((count$proxy1 << 5));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy1);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy1.ad.length | 0))) {
      var arr = mesh$proxy1.ad[fi];
      var opt$proxy1 = mesh$proxy1.gQ[fi].hw;
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy1 = vi;
        var offset$proxy9 = (index$proxy1 << 5);
        var x2 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy9);
        f(x0, opt$proxy1, x2);
        vi = ((1 + vi) | 0);
        si = ((1 + si) | 0);
      }
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, null);
  } else {
    var idxBuf = [];
    var base = 0;
    fi = 0;
    while ((fi < (mesh$proxy1.ad.length | 0))) {
      var arr$2 = mesh$proxy1.ad[fi];
      var n$2 = (arr$2.length | 0);
      var opt$proxy2 = mesh$proxy1.gQ[fi].hw;
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy2 = vi;
        var offset$proxy10 = (index$proxy2 << 5);
        var x2$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy10);
        f(x0$1, opt$proxy2, x2$1);
        vi = ((1 + vi) | 0);
        si$2 = ((1 + si$2) | 0);
      }
      if ((n$2 === 3)) {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
      } else {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
        idxBuf.push(base, ((2 + base) | 0), ((3 + base) | 0));
      }
      base = ((base + n$2) | 0);
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.ou(idxBuf, vertexCount));
  }
  return p$1.o6($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
}
function $p_Lsketches_templates_rooms_lroom_LRoom$package$__texSize$1__D__D__T2($thiz, w, h) {
  return $ct_T2__O__O__(new $c_T2(), $doubleToInt((w * $m_Lsketches_templates_rooms_lroom_LRoom$package$().iw)), $doubleToInt((h * $m_Lsketches_templates_rooms_lroom_LRoom$package$().iw)));
}
function $p_Lsketches_templates_rooms_lroom_LRoom$package$__poolAxisDist$1__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, poolSpacing$1, v) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().kV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().nN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ga($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb(v, (0.5 * $m_Lsketches_templates_rooms_lroom_LRoom$package$().fU)), poolSpacing$1), 0.5)), 0.5)), poolSpacing$1);
}
function $p_Lsketches_templates_rooms_lroom_LRoom$package$__insideFamily$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketchlib_utils_room_BeamFamily__Ltrivalibs_graphics_math_gpu_Expr($thiz, wp$1, f) {
  var o = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().aS(wp$1), (-f.aM.m)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().hf(wp$1), f.aM.o));
  var d = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().kV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().nN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ga($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb(o, f.bI), f.bs), 0.5)), 0.5)), f.bs);
  var e$proxy6 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bg(d, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h((0.5 * f.bW)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(((0.5 * f.bW) + $m_Lsketches_templates_rooms_lroom_LRoom$package$().hl)));
  return $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(1.0)) + " - ") + e$proxy6.e) + ")"));
}
function $p_Lsketches_templates_rooms_lroom_LRoom$package$__wallAmbience$1__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Form__Lsketchlib_utils_room_Wall__I__I__Ltrivalibs_graphics_painter_Panel($thiz, wallBaker$1, p$2, wallForm, wall, w, h) {
  var Painter_this = wallBaker$1.bU;
  var value$proxy8 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.av;
  var buffer = new ArrayBuffer(64);
  var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), Painter_this.g, uv$proxy1);
  b.E.A(b.j, value$proxy8);
  var $x_2 = b.D.queue;
  var $x_1 = b.B;
  var s$proxy2 = b.j;
  $x_2.writeBuffer($x_1, 0.0, s$proxy2.dv.buffer);
  var Bindable_this = wallBaker$1.bU.gf(wallForm, wallBaker$1.jI, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var \u03b4scrutinee407 = e1$proxy1.t;
  var idx = (Bindable_this.W.F.model | 0);
  while (((Bindable_this.J.length | 0) <= idx)) {
    Bindable_this.J.push(null);
  }
  Bindable_this.J[idx] = \u03b4scrutinee407;
  var panel = wallBaker$1.bU.bB(w, h, (void 0), (void 0), (void 0), (void 0), true, "rgba8unorm", (void 0), Bindable_this, (void 0), (void 0), (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("topY", wall.aX);
  var \u03b4scrutinee417 = (+e1$proxy2.t);
  var idx$2 = (Bindable_this.W.F.topY | 0);
  if (((idx$2 < (Bindable_this.J.length | 0)) && (Bindable_this.J[idx$2] !== null))) {
    var BufferBinding_this$3 = Bindable_this.J[idx$2];
    BufferBinding_this$3.E.A(BufferBinding_this$3.j, \u03b4scrutinee417);
    var $x_4 = BufferBinding_this$3.D.queue;
    var $x_3 = BufferBinding_this$3.B;
    var s$proxy3 = BufferBinding_this$3.j;
    $x_4.writeBuffer($x_3, 0.0, s$proxy3.dv.buffer);
  } else {
    var uv$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy1 = Bindable_this.nl.g;
    var buffer$2 = new ArrayBuffer(4);
    var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), device$proxy1, uv$1);
    b$2.E.A(b$2.j, \u03b4scrutinee417);
    var $x_6 = b$2.D.queue;
    var $x_5 = b$2.B;
    var s$proxy4 = b$2.j;
    $x_6.writeBuffer($x_5, 0.0, s$proxy4.dv.buffer);
    while (((Bindable_this.J.length | 0) <= idx$2)) {
      Bindable_this.J.push(null);
    }
    Bindable_this.J[idx$2] = b$2;
  }
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$2, panel);
  return panel;
}
function $p_Lsketches_templates_rooms_lroom_LRoom$package$__wallTex$1__Lsketchlib_utils_room_Hanging__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Form__Lsketchlib_utils_room_Wall__sjs_js_Array__Ltrivalibs_graphics_painter_Panel($thiz, hanging$1, wallBaker$2, p$3, wallForm, wall, pieces) {
  matchResult9: {
    var \u03b48$;
    var x25 = $p_Lsketches_templates_rooms_lroom_LRoom$package$__texSize$1__D__D__T2($thiz, wall.aP, wall.aX);
    if ((x25 !== null)) {
      (x25.a0() | 0);
      (x25.a1() | 0);
      var \u03b48$ = x25;
      break matchResult9;
    }
    throw new $c_s_MatchError(x25);
  }
  var w$2 = (\u03b48$.a0() | 0);
  var h$2 = (\u03b48$.a1() | 0);
  return hanging$1.pi($p_Lsketches_templates_rooms_lroom_LRoom$package$__wallAmbience$1__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Form__Lsketchlib_utils_room_Wall__I__I__Ltrivalibs_graphics_painter_Panel($thiz, wallBaker$2, p$3, wallForm, wall, w$2, h$2), w$2, h$2, pieces);
}
function $p_Lsketches_templates_rooms_lroom_LRoom$package$__flatPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel($thiz, p$4, flatShade$1, c) {
  var Bindable_this = p$4.bA(flatShade$1, (void 0), (void 0), (void 0));
  var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("color", c);
  var \u03b4scrutinee479 = e1$proxy3.t;
  var idx = (Bindable_this.C.F.color | 0);
  if (((idx < (Bindable_this.i.length | 0)) && (Bindable_this.i[idx] !== null))) {
    var BufferBinding_this = Bindable_this.i[idx];
    BufferBinding_this.E.A(BufferBinding_this.j, \u03b4scrutinee479);
    var $x_2 = BufferBinding_this.D.queue;
    var $x_1 = BufferBinding_this.B;
    var s$proxy5 = BufferBinding_this.j;
    $x_2.writeBuffer($x_1, 0.0, s$proxy5.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
    var device$proxy2 = Bindable_this.c4.g;
    var buffer = new ArrayBuffer(16);
    var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), device$proxy2, uv);
    b.E.A(b.j, \u03b4scrutinee479);
    var $x_4 = b.D.queue;
    var $x_3 = b.B;
    var s$proxy6 = b.j;
    $x_4.writeBuffer($x_3, 0.0, s$proxy6.dv.buffer);
    while (((Bindable_this.i.length | 0) <= idx)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx] = b;
  }
  Bindable_this.P = null;
  var panel = p$4.bB(8, 8, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this, (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$4, panel);
  return panel;
}
function $p_Lsketches_templates_rooms_lroom_LRoom$package$__curate$1__sjs_js_Array__Lsketchlib_utils_room_Hanging__Lsketchlib_utils_room_Wall__I__sjs_js_Array($thiz, pieceImages$2, hanging$3, wall, wallIndex) {
  var out = [];
  var end = ($m_Lsketches_templates_rooms_lroom_LRoom$package$().iB.length | 0);
  var isEmpty = (end <= 0);
  var scala$collection$immutable$Range$$lastElement = ((end - 1) | 0);
  if ((!isEmpty)) {
    var i = 0;
    while (true) {
      var x0 = i;
      var at = (wall.aP * (+$m_Lsketches_templates_rooms_lroom_LRoom$package$().iB[x0]));
      if (((at + (0.5 * $m_Lsketches_templates_rooms_lroom_LRoom$package$().jB)) <= wall.aP)) {
        var pick = ((((Math.imul(wallIndex, ($m_Lsketches_templates_rooms_lroom_LRoom$package$().iB.length | 0)) + x0) | 0) % $checkIntDivisor((pieceImages$2.length | 0))) | 0);
        out.push(hanging$3.pS(wall, new $c_Lsketchlib_utils_room_PaintingSpec($m_Lsketches_templates_rooms_lroom_LRoom$package$().jB, $m_Lsketches_templates_rooms_lroom_LRoom$package$().m0, $m_Lsketches_templates_rooms_lroom_LRoom$package$().lZ, pieceImages$2[pick], 3.0), at, $m_Lsketches_templates_rooms_lroom_LRoom$package$().lX, (+$m_Lsketches_templates_rooms_lroom_LRoom$package$().m1[pick])));
      }
      if ((i === scala$collection$immutable$Range$$lastElement)) {
        break;
      }
      i = ((1 + i) | 0);
    }
  }
  return out;
}
/** @constructor */
function $c_Lsketches_templates_rooms_lroom_LRoom$package$() {
  this.fU = 0.0;
  this.bp = 0.0;
  this.iD = 0.0;
  this.lM = 0.0;
  this.hl = 0.0;
  this.jE = 0.0;
  this.jF = 0.0;
  this.m9 = 0.0;
  this.jG = 0.0;
  this.ma = 0.0;
  this.jH = 0.0;
  this.iC = 0.0;
  this.jC = 0.0;
  this.iy = 0.0;
  this.ix = 0.0;
  this.fV = 0.0;
  this.m7 = 0.0;
  this.lK = 0.0;
  this.iA = 0.0;
  this.m2 = 0.0;
  this.iz = 0.0;
  this.iw = 0.0;
  this.lL = 0.0;
  this.lS = 0.0;
  this.lP = 0.0;
  this.lO = 0.0;
  this.lR = 0.0;
  this.lQ = 0.0;
  this.lN = null;
  this.hm = null;
  this.jD = null;
  this.m8 = null;
  this.lI = null;
  this.lJ = 0.0;
  this.lH = 0.0;
  this.m5 = 0.0;
  this.m6 = 0.0;
  this.m4 = 0.0;
  this.m3 = 0.0;
  this.lT = null;
  this.lU = 0;
  this.jA = 0.0;
  this.lW = 0.0;
  this.lV = 0.0;
  this.jB = 0.0;
  this.m0 = 0.0;
  this.lZ = 0.0;
  this.lX = 0.0;
  this.iB = null;
  this.lY = null;
  this.m1 = null;
  $n_Lsketches_templates_rooms_lroom_LRoom$package$ = this;
  this.fU = 0.5;
  this.bp = 0.1;
  this.iD = 0.32;
  this.lM = 6.0E-4;
  this.hl = 0.02;
  this.jE = (-5.0);
  this.jF = 5.0;
  this.m9 = 0.5;
  this.jG = (-5.0);
  this.ma = 0.5;
  this.jH = 5.0;
  this.iC = 5.5;
  this.jC = 0.5;
  this.iy = 1.7;
  this.ix = $m_Lsketches_templates_rooms_lroom_LRoom$package$().iC;
  this.fV = ($m_Lsketches_templates_rooms_lroom_LRoom$package$().ix - $m_Lsketches_templates_rooms_lroom_LRoom$package$().iD);
  this.m7 = 0.6;
  this.lK = 1.0;
  this.iA = ($m_Lsketches_templates_rooms_lroom_LRoom$package$().ix + $m_Lsketches_templates_rooms_lroom_LRoom$package$().lK);
  var p$proxy1 = ($m_Lsketches_templates_rooms_lroom_LRoom$package$().jF - $m_Lsketches_templates_rooms_lroom_LRoom$package$().jE);
  var other$proxy1 = ($m_Lsketches_templates_rooms_lroom_LRoom$package$().jH - $m_Lsketches_templates_rooms_lroom_LRoom$package$().jG);
  this.m2 = (+Math.max(p$proxy1, other$proxy1));
  this.iz = (1.05 * ((($m_Lsketches_templates_rooms_lroom_LRoom$package$().iA - $m_Lsketches_templates_rooms_lroom_LRoom$package$().fV) * ($m_Lsketches_templates_rooms_lroom_LRoom$package$().m2 - $m_Lsketches_templates_rooms_lroom_LRoom$package$().jC)) / ($m_Lsketches_templates_rooms_lroom_LRoom$package$().fV - $m_Lsketches_templates_rooms_lroom_LRoom$package$().iy)));
  this.iw = 64.0;
  this.lL = 0.08;
  this.lS = 0.06;
  this.lP = 0.91;
  this.lO = 0.03;
  this.lR = 0.3;
  this.lQ = 0.9;
  this.lN = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.8, 0.78, 0.75);
  this.hm = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.87, 0.87, 0.86);
  this.jD = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.97, 0.97, 0.96);
  this.m8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.88, 0.88, 0.87);
  this.lI = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.99, 0.97);
  this.lJ = 0.7;
  this.lH = 128.0;
  this.m5 = 0.1;
  this.m6 = 0.44;
  this.m4 = 0.25;
  this.m3 = 2.7;
  this.lT = new $c_Ltrivalibs_graphics_math_cpu_Vec3(2.0, 1.9, 1.7);
  this.lU = 3;
  this.jA = 0.55;
  this.lW = 0.5;
  this.lV = 0.42;
  this.jB = 1.0;
  this.m0 = 1.3;
  this.lZ = 0.08;
  this.lX = 1.55;
  this.iB = [0.3333333333333333, 0.6666666666666666];
  this.lY = [new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.4, 0.0, 0.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.95, 0.45, 0.95), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.4), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.45, 0.95, 0.95), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.4, 0.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.95, 0.95, 0.45), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.03, 0.03, 0.03), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.97, 0.97, 0.97)];
  this.m1 = [0.85, 0.5, 0.85, 0.55, 0.85, 0.5, 1.0, 0.4];
}
$p = $c_Lsketches_templates_rooms_lroom_LRoom$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_templates_rooms_lroom_LRoom$package$;
/** @constructor */
function $h_Lsketches_templates_rooms_lroom_LRoom$package$() {
}
$h_Lsketches_templates_rooms_lroom_LRoom$package$.prototype = $p;
$p.ha = (function(wanted, inwardSign) {
  var a = ((wanted + (0.5 * (inwardSign * $m_Lsketches_templates_rooms_lroom_LRoom$package$().bp))) / $m_Lsketches_templates_rooms_lroom_LRoom$package$().fU);
  var $x_1 = $m_RTLong$().jh((+Math.round(a)));
  var x_$_lo = $x_1.l;
  var x_$_hi = $x_1.h;
  return ((((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0)) * $m_Lsketches_templates_rooms_lroom_LRoom$package$().fU) - (0.5 * (inwardSign * $m_Lsketches_templates_rooms_lroom_LRoom$package$().bp)));
});
$p.ob = (function(dist, wp) {
  var p = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hY(wp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_lroom_LRoom$package$().lQ);
  var creep = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Lsketchlib_shaders_Noise$().jg(p, 3, 2.0, 0.5, $m_Ltrivalibs_graphics_math_gpu_vec3$().hZ(41.0)), $m_Lsketches_templates_rooms_lroom_LRoom$package$().lO);
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jl($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jl($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_templates_rooms_lroom_LRoom$package$().lP), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().o5($m_Lsketchlib_shaders_Noise$().jg($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hY(p, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), 2.3), 3, 2.0, 0.5, $m_Ltrivalibs_graphics_math_gpu_vec3$().hZ(9.0))), $m_Lsketches_templates_rooms_lroom_LRoom$package$().lR)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bg($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag(dist, creep), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_templates_rooms_lroom_LRoom$package$().lS)));
});
$p.l1 = (function(wp, normal, edgeDistance) {
  var scaledWp = $m_Ltrivalibs_graphics_math_gpu_vec3$().bc($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().aS(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp), 0.2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp), 0.3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().hf(wp), 0.8), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp), 0.2)));
  var edge = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bg(edgeDistance, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_templates_rooms_lroom_LRoom$package$().lL));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jl($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.74), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().o5($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ga($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Lsketchlib_shaders_Noise$().jg($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hY(scaledWp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), 0.1), 3, 3.6, 0.12, $m_Ltrivalibs_graphics_math_gpu_vec3$().hZ(120.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Lsketchlib_shaders_Noise$().jg($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hY($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().pn(scaledWp, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), normal), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), 0.15), 3, 2.1, 0.25, $m_Ltrivalibs_graphics_math_gpu_vec3$().hZ(70.0)), 0.3), edge)), 1.3)));
});
$p.r8 = (function(canvas) {
  $m_Ltrivalibs_graphics_painter_Painter$().pX(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$7) => {
    var sampler = p$7.io();
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().oZ(0.9, 1.0, 0.1, 100.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, $m_Lsketches_templates_rooms_lroom_LRoom$package$().iy, 0.0));
    $m_Ltrivalibs_dev_devPreserve$().p4(cam, "camera");
    var x0 = $m_Lsketches_templates_rooms_lroom_LRoom$package$().ha($m_Lsketches_templates_rooms_lroom_LRoom$package$().jE, 1.0);
    var x1 = $m_Lsketches_templates_rooms_lroom_LRoom$package$().ha($m_Lsketches_templates_rooms_lroom_LRoom$package$().jF, (-1.0));
    var xm = $m_Lsketches_templates_rooms_lroom_LRoom$package$().ha($m_Lsketches_templates_rooms_lroom_LRoom$package$().m9, (-1.0));
    var z0 = $m_Lsketches_templates_rooms_lroom_LRoom$package$().ha($m_Lsketches_templates_rooms_lroom_LRoom$package$().jG, 1.0);
    var zm = $m_Lsketches_templates_rooms_lroom_LRoom$package$().ha($m_Lsketches_templates_rooms_lroom_LRoom$package$().ma, (-1.0));
    var z1 = $m_Lsketches_templates_rooms_lroom_LRoom$package$().ha($m_Lsketches_templates_rooms_lroom_LRoom$package$().jH, (-1.0));
    var footprint = new $c_Lsketchlib_utils_room_Footprint([new $c_Lsketchlib_utils_room_Ring([new $c_Ltrivalibs_graphics_math_cpu_Vec2(x0, z0), new $c_Ltrivalibs_graphics_math_cpu_Vec2(x1, z0), new $c_Ltrivalibs_graphics_math_cpu_Vec2(x1, zm), new $c_Ltrivalibs_graphics_math_cpu_Vec2(xm, zm), new $c_Ltrivalibs_graphics_math_cpu_Vec2(xm, z1), new $c_Ltrivalibs_graphics_math_cpu_Vec2(x0, z1)], 1.0, $m_Lsketches_templates_rooms_lroom_LRoom$package$().iC)]);
    var floorBnd = $m_Lsketchlib_utils_room_Boundary$().nS(footprint.bJ);
    var ceilBnd = $m_Lsketchlib_utils_room_Plan$package$().pg(footprint, $m_Lsketches_templates_rooms_lroom_LRoom$package$().iC);
    var bb = $m_Lsketchlib_utils_room_Plan$package$().pc(footprint);
    var bbW = ((+bb.bl) - (+bb.bC));
    var bbD = ((+bb.bm) - (+bb.bk));
    var floorForm = $p_Lsketches_templates_rooms_lroom_LRoom$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$7, [$m_Lsketchlib_utils_room_Surfaces$package$().ow(bb, 0.0, false, 0.0)]);
    var lightForm = $p_Lsketches_templates_rooms_lroom_LRoom$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$7, [$m_Lsketchlib_utils_room_Surfaces$package$().ow(bb, $m_Lsketches_templates_rooms_lroom_LRoom$package$().iA, true, $m_Lsketches_templates_rooms_lroom_LRoom$package$().iz)]);
    var walls = $m_Lsketchlib_utils_room_Walls$package$().rD(floorBnd, $m_Lsketches_templates_rooms_lroom_LRoom$package$().fV);
    var families = [new $c_Lsketchlib_utils_room_BeamFamily(new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0), $m_Lsketches_templates_rooms_lroom_LRoom$package$().fU, 0.0, $m_Lsketches_templates_rooms_lroom_LRoom$package$().bp), new $c_Lsketchlib_utils_room_BeamFamily(new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0), $m_Lsketches_templates_rooms_lroom_LRoom$package$().fU, 0.0, $m_Lsketches_templates_rooms_lroom_LRoom$package$().bp)];
    var beams = [];
    new $c_sci_Range$Exclusive(0, (families.length | 0), 1).c7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      var i = (v1$2 | 0);
      var bs = $m_Lsketchlib_utils_room_Raster$package$().pF(families[i], ceilBnd, $m_Lsketches_templates_rooms_lroom_LRoom$package$().iD, ($m_Lsketches_templates_rooms_lroom_LRoom$package$().fV - (i * $m_Lsketches_templates_rooms_lroom_LRoom$package$().lM)));
      var j = 0;
      while ((j < (bs.length | 0))) {
        beams.push(bs[j]);
        j = ((1 + j) | 0);
      }
    })));
    var atlas = new $c_Lsketchlib_utils_room_BeamAtlas(beams, ceilBnd);
    var beamForm = $p_Lsketches_templates_rooms_lroom_LRoom$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$7, atlas.mt);
    matchResult1$1: {
      var \u03b42$;
      var x1$2 = $p_Lsketches_templates_rooms_lroom_LRoom$package$__texSize$1__D__D__T2(this, bbW, bbD);
      if ((x1$2 !== null)) {
        (x1$2.a0() | 0);
        (x1$2.a1() | 0);
        var \u03b42$ = x1$2;
        break matchResult1$1;
      }
      throw new $c_s_MatchError(x1$2);
    }
    var rfw$2 = (\u03b42$.a0() | 0);
    var rfh$2 = (\u03b42$.a1() | 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var transform$proxy1 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var format$proxy1 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var mips$proxy1 = true;
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var clearColor$proxy1 = (void 0);
    var frag$proxy1 = new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((wp$2, normal$2, _$1$2) => $m_Ltrivalibs_graphics_math_gpu_vec4$().ab($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bf($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().is($m_Lsketches_templates_rooms_lroom_LRoom$package$().lN), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_lroom_LRoom$package$().l1(wp$2, normal$2, $m_Lsketchlib_utils_room_Fields$package$().o3(wp$2, normal$2, floorBnd, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_templates_rooms_lroom_LRoom$package$().ix)))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_lroom_LRoom$package$().ob($m_Lsketchlib_utils_room_Fields$package$().kT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jt(wp$2), floorBnd), wp$2)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0))));
    var $x_3 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3);
      var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
        var $x_1 = $m_sjsr_package$();
        var AssignTarget_this = ctx$2.am.a2("color");
        var value$proxy1 = frag$proxy1.kP(ctx$2.a5.l("worldPos"), ctx$2.a5.l("normal"), ctx$2.a5.l("uv"));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_1.d(new ($d_T.r().C)([(((("  " + AssignTarget_this.T) + " = ") + value$proxy1.e) + ";")]))), "", "\n", "");
      }));
      var d = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg;
      try {
        var $x_2 = body$proxy1.h(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev;
      }
      program$3.aE = $x_2;
      $m_sjs_js_ArrayOps$().V(reg.a3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$9) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$9, data$3);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy1.h(program);
    var b = program.b0;
    var b$1 = program.aE;
    var helperFns$proxy1 = program.ao();
    var id = p$7.s;
    p$7.s = ((1 + p$7.s) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().a(["model"], []);
    var dict = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$1 = 0;
    while ((i$1 < (names.length | 0))) {
      dict[names[i$1]] = i$1;
      i$1 = ((1 + i$1) | 0);
    }
    var names$2 = [];
    var dict$2 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bw.v()], []));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a7, sd.a6, fragBuiltinParams);
    var args$proxy1 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([baseWgsl]));
    console.log(...$m_sjsr_Compat$().aq(args$proxy1));
    var module = p$7.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$3 = 0;
    while ((i$3 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$3), $ct_T2__O__O__(new $c_T2(), "offset", (offsets[i$3] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats[i$3])])))));
      i$3 = ((1 + i$3) | 0);
    }
    var vbl = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride), $ct_T2__O__O__(new $c_T2(), "attributes", attributes)]))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
    var result = [];
    $m_sjs_js_ArrayOps$().V(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2)])))))) | 0)))(p$7)));
    var x4 = $ct_T2__O__O__(new $c_T2(), result, $m_Ltrivalibs_graphics_shader_layouts$().M(p$7.g, result));
    var \u03b42$$2 = x4;
    var bgls$2 = \u03b42$$2.aB;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().M(p$7.g, bgls$2);
    var floorTex = $x_3.kQ(new $c_Lsketchlib_utils_bake_TextureBaker(p$7, new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2)), floorForm, rfw$2, rfh$2, transform$proxy1, format$proxy1, mips$proxy1, clearColor$proxy1);
    matchResult3$1: {
      var \u03b44$;
      var x7 = $p_Lsketches_templates_rooms_lroom_LRoom$package$__texSize$1__D__D__T2(this, (bbW + (2.0 * $m_Lsketches_templates_rooms_lroom_LRoom$package$().iz)), (bbD + (2.0 * $m_Lsketches_templates_rooms_lroom_LRoom$package$().iz)));
      if ((x7 !== null)) {
        (x7.a0() | 0);
        (x7.a1() | 0);
        var \u03b44$ = x7;
        break matchResult3$1;
      }
      throw new $c_s_MatchError(x7);
    }
    var lw$2 = (\u03b44$.a0() | 0);
    var lh$2 = (\u03b44$.a1() | 0);
    var poolSpacing = ($m_Lsketches_templates_rooms_lroom_LRoom$package$().fU * $m_Lsketches_templates_rooms_lroom_LRoom$package$().lU);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var transform$1 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var mips$1 = true;
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var clearColor$1 = (void 0);
    var frag$proxy2 = new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((wp$2$1, _$2$2, _$3$2, color$2) => {
      var pool = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("pool");
      var $x_5 = $m_sjsr_package$();
      var e$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bg($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().kX($m_Ltrivalibs_graphics_math_gpu_vec2$().ab($p_Lsketches_templates_rooms_lroom_LRoom$package$__poolAxisDist$1__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, poolSpacing, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().aS(wp$2$1)), $p_Lsketches_templates_rooms_lroom_LRoom$package$__poolAxisDist$1__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr(this, poolSpacing, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().hf(wp$2$1)))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_templates_rooms_lroom_LRoom$package$().jA), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(($m_Lsketches_templates_rooms_lroom_LRoom$package$().jA + $m_Lsketches_templates_rooms_lroom_LRoom$package$().lW)));
      var $x_4 = pool.an($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(1.0)) + " - ") + e$proxy3.e) + ")")));
      var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ab($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bf($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().is($m_Lsketches_templates_rooms_lroom_LRoom$package$().lT), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jl($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_templates_rooms_lroom_LRoom$package$().lV), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0), pool)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_5.d(new ($d_T.r().C)([$x_4, (((("  " + color$2.T) + " = ") + value$proxy2.e) + ";")]))), "", "\n", "");
    }));
    var $x_7 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$1);
      var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => frag$proxy2.nP(ctx$2$1.a5.l("worldPos"), ctx$2$1.a5.l("normal"), ctx$2$1.a5.l("uv"), ctx$2$1.am.a2("color"))));
      var d$1 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$1;
      try {
        var $x_6 = body$proxy3.h(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$1;
      }
      program$3$1.aE = $x_6;
      $m_sjs_js_ArrayOps$().V(reg$1.a3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$10) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$10, data$3$1);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy2.h(program$2);
    var b$3 = program$2.b0;
    var b$4 = program$2.aE;
    var helperFns$proxy2 = program$2.ao();
    var id$2 = p$7.s;
    p$7.s = ((1 + p$7.s) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["model"], []);
    var dict$3 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$4.length | 0))) {
      dict$3[names$4[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var names$5 = [];
    var dict$4 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$5 = 0;
    while ((i$5 < (names$5.length | 0))) {
      dict$4[names$5[i$5]] = i$5;
      i$5 = ((1 + i$5) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$3, b$4, helperFns$proxy2);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bw.v()], []));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a7, sd$2.a6, fragBuiltinParams$2);
    var args$proxy2 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([baseWgsl$2]));
    console.log(...$m_sjsr_Compat$().aq(args$proxy2));
    var module$2 = p$7.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl$2)])))));
    var formats$2 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$2 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var stride$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var attributes$2 = [];
    var i$6 = 0;
    while ((i$6 < (formats$2.length | 0))) {
      attributes$2.push($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$6), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$2[i$6] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$2[i$6])])))));
      i$6 = ((1 + i$6) | 0);
    }
    var vbl$2 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$2), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$2)]))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().V(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$1)])))))) | 0)))(p$7)));
    var x10 = $ct_T2__O__O__(new $c_T2(), result$2, $m_Ltrivalibs_graphics_shader_layouts$().M(p$7.g, result$2));
    var \u03b42$$3 = x10;
    var bgls$4 = \u03b42$$3.aB;
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p$7.g, bgls$4);
    var lightTex = $x_7.kQ(new $c_Lsketchlib_utils_bake_TextureBaker(p$7, new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl$2, bgls$4[0], null, pl$2, false, dict$3, dict$4)), lightForm, lw$2, lh$2, transform$1, "rgba16float", mips$1, clearColor$1);
    matchResult5$1: {
      var \u03b46$;
      var x13 = atlas.rs($m_Lsketches_templates_rooms_lroom_LRoom$package$().iw, $m_Lsketches_templates_rooms_lroom_LRoom$package$().lH);
      if ((x13 !== null)) {
        (x13.a0() | 0);
        (x13.a1() | 0);
        var \u03b46$ = x13;
        break matchResult5$1;
      }
      throw new $c_s_MatchError(x13);
    }
    var baw$2 = (\u03b46$.a0() | 0);
    var bah$2 = (\u03b46$.a1() | 0);
    var clearColor$2 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().oa().h(new $c_T4($m_Lsketches_templates_rooms_lroom_LRoom$package$().hm.x, $m_Lsketches_templates_rooms_lroom_LRoom$package$().hm.I, $m_Lsketches_templates_rooms_lroom_LRoom$package$().hm.y, 1.0));
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var transform$2 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var format$2 = (void 0);
    $m_Lsketchlib_utils_bake_TextureBaker$();
    var mips$2 = true;
    var frag$proxy3 = new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((wp$2$2, normal$2$1, uv$2) => {
      var dEdge = atlas.po(uv$2);
      var dFromSoffitCenter = atlas.rm(uv$2);
      var e$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bg(dFromSoffitCenter, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(((0.5 * $m_Lsketches_templates_rooms_lroom_LRoom$package$().bp) - $m_Lsketches_templates_rooms_lroom_LRoom$package$().hl)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(((0.5 * $m_Lsketches_templates_rooms_lroom_LRoom$package$().bp) + $m_Lsketches_templates_rooms_lroom_LRoom$package$().hl)));
      var soffitness = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(1.0)) + " - ") + e$proxy4.e) + ")"));
      var e$proxy5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bg(dFromSoffitCenter, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h((0.5 * $m_Lsketches_templates_rooms_lroom_LRoom$package$().bp)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(((0.5 * $m_Lsketches_templates_rooms_lroom_LRoom$package$().bp) + $m_Lsketches_templates_rooms_lroom_LRoom$package$().hl)));
      var nearSoffit = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(1.0)) + " - ") + e$proxy5.e) + ")"));
      var overlap = $p_Lsketches_templates_rooms_lroom_LRoom$package$__insideFamily$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketchlib_utils_room_BeamFamily__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2$2, families[0]);
      var fi = 1;
      while ((fi < (families.length | 0))) {
        overlap = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag(overlap, $p_Lsketches_templates_rooms_lroom_LRoom$package$__insideFamily$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketchlib_utils_room_BeamFamily__Ltrivalibs_graphics_math_gpu_Expr(this, wp$2$2, families[fi]));
        fi = ((1 + fi) | 0);
      }
      var crossing = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb(overlap, 1.0));
      var e$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bg($m_Lsketchlib_utils_room_Fields$package$().kT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jt(wp$2$2), ceilBnd), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_templates_rooms_lroom_LRoom$package$().bp));
      var atWall = $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(1.0)) + " - ") + e$proxy7.e) + ")"));
      var s$2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag(soffitness, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bN(nearSoffit, soffitness), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().qE(crossing, atWall)));
      var sideLift = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ga($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp$2$2), $m_Lsketches_templates_rooms_lroom_LRoom$package$().fV), $m_Lsketches_templates_rooms_lroom_LRoom$package$().iD));
      var sideTint = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kY($m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().is($m_Lsketches_templates_rooms_lroom_LRoom$package$().jD), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_lroom_LRoom$package$().lI, sideLift);
      var tint = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kY(sideTint, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_lroom_LRoom$package$().hm, s$2);
      var ambience = $m_Lsketches_templates_rooms_lroom_LRoom$package$().l1(wp$2$2, normal$2$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b2(dEdge, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(1.0)) + " - ") + s$2.e) + ")"))));
      return $m_Ltrivalibs_graphics_math_gpu_vec4$().ab($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bf(tint, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag(ambience, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b2($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(1.0)) + " - ") + ambience.e) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L(sideLift, $m_Lsketches_templates_rooms_lroom_LRoom$package$().lJ)))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
    }));
    var $x_10 = $m_Lsketchlib_utils_bake_Bake$package$();
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$2);
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
        var $x_8 = $m_sjsr_package$();
        var AssignTarget_this$1 = ctx$2$2.am.a2("color");
        var value$proxy3 = frag$proxy3.kP(ctx$2$2.a5.l("worldPos"), ctx$2$2.a5.l("normal"), ctx$2$2.a5.l("uv"));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_8.d(new ($d_T.r().C)([(((("  " + AssignTarget_this$1.T) + " = ") + value$proxy3.e) + ";")]))), "", "\n", "");
      }));
      var d$2 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2;
      try {
        var $x_9 = body$proxy5.h(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2;
      }
      program$3$2.aE = $x_9;
      $m_sjs_js_ArrayOps$().V(reg$2.a3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$11) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$11, data$3$2);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy3.h(program$3$3);
    var b$5 = program$3$3.b0;
    var b$6 = program$3$3.aE;
    var helperFns$proxy3 = program$3$3.ao();
    var id$3 = p$7.s;
    p$7.s = ((1 + p$7.s) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["model"], []);
    var dict$5 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$7 = 0;
    while ((i$7 < (names$7.length | 0))) {
      dict$5[names$7[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var names$8 = [];
    var dict$6 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$8 = 0;
    while ((i$8 < (names$8.length | 0))) {
      dict$6[names$8[i$8]] = i$8;
      i$8 = ((1 + i$8) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$5, b$6, helperFns$proxy3);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bw.v()], []));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a7, sd$3.a6, fragBuiltinParams$3);
    var args$proxy3 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([baseWgsl$3]));
    console.log(...$m_sjsr_Compat$().aq(args$proxy3));
    var module$3 = p$7.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl$3)])))));
    var formats$3 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$3 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$3 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var stride$3 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var attributes$3 = [];
    var i$9 = 0;
    while ((i$9 < (formats$3.length | 0))) {
      attributes$3.push($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$9), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$3[i$9] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$3[i$9])])))));
      i$9 = ((1 + i$9) | 0);
    }
    var vbl$3 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$3), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$3)]))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().V(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$2) => (result$3.push(Painter_this$3.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$2)])))))) | 0)))(p$7)));
    var x16 = $ct_T2__O__O__(new $c_T2(), result$3, $m_Ltrivalibs_graphics_shader_layouts$().M(p$7.g, result$3));
    var \u03b42$$4 = x16;
    var bgls$6 = \u03b42$$4.aB;
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().M(p$7.g, bgls$6);
    var beamTex = $x_10.kQ(new $c_Lsketchlib_utils_bake_TextureBaker(p$7, new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, vbl$3, bgls$6[0], null, pl$3, false, dict$5, dict$6)), beamForm, baw$2, bah$2, transform$2, format$2, mips$2, clearColor$2);
    var frag$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
      var wp = ctx$2$3.a5.l("worldPos");
      var normal = ctx$2$3.a5.l("normal");
      var topY = ctx$2$3.N.l("topY");
      var $x_19 = $m_sjsr_package$();
      var AssignTarget_this$2 = ctx$2$3.am.a2("color");
      var $x_18 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
      var $x_17 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
      var $x_16 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
      var $x_15 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
      var $x_14 = $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().is($m_Lsketches_templates_rooms_lroom_LRoom$package$().jD);
      var $x_13 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
      var $x_12 = $m_Lsketches_templates_rooms_lroom_LRoom$package$().m8;
      var $x_11 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
      var e$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp);
      var value$proxy4 = $x_18.ab($x_17.bf($x_16.bf($x_15.kY($x_14, $x_13, $x_12, $x_11.bg($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9($m_Lsketches_templates_rooms_lroom_LRoom$package$().fV)) + " - ") + e$proxy8.e) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h($m_Lsketches_templates_rooms_lroom_LRoom$package$().m7), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_lroom_LRoom$package$().l1(wp, normal, $m_Lsketchlib_utils_room_Fields$package$().o3(wp, normal, floorBnd, topY))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Lsketches_templates_rooms_lroom_LRoom$package$().ob($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp), wp)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_19.d(new ($d_T.r().C)([(((("  " + AssignTarget_this$2.T) + " = ") + value$proxy4.e) + ";")]))), "", "\n", "");
    }));
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($m_Lsketchlib_utils_bake_TextureBaker$(), program$3$4);
      var d$3 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$3;
      try {
        var $x_20 = frag$proxy4.h(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$3;
      }
      program$3$4.aE = $x_20;
      $m_sjs_js_ArrayOps$().V(reg$3.a3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$12) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$12, data$3$3);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy4.h(program$4);
    var b$7 = program$4.b0;
    var b$8 = program$4.aE;
    var helperFns$proxy4 = program$4.ao();
    var id$4 = p$7.s;
    p$7.s = ((1 + p$7.s) | 0);
    var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["topY"], []));
    var dict$7 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$10 = 0;
    while ((i$10 < (names$10.length | 0))) {
      dict$7[names$10[i$10]] = i$10;
      i$10 = ((1 + i$10) | 0);
    }
    var names$11 = [];
    var dict$8 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$11 = 0;
    while ((i$11 < (names$11.length | 0))) {
      dict$8[names$11[i$11]] = i$11;
      i$11 = ((1 + i$11) | 0);
    }
    var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$7, b$8, helperFns$proxy4);
    var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["topY"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bw.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], [])));
    var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.a7, sd$4.a6, fragBuiltinParams$4);
    var args$proxy4 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([baseWgsl$4]));
    console.log(...$m_sjsr_Compat$().aq(args$proxy4));
    var module$4 = p$7.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl$4)])))));
    var formats$4 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$4 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$4 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$4);
    var stride$4 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$4);
    var attributes$4 = [];
    var i$12 = 0;
    while ((i$12 < (formats$4.length | 0))) {
      attributes$4.push($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$12), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$4[i$12] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$4[i$12])])))));
      i$12 = ((1 + i$12) | 0);
    }
    var vbl$4 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$4), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$4)]))));
    var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], []))], []);
    var result$4 = [];
    $m_sjs_js_ArrayOps$().V(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$4) => ((entries$2$3) => (result$4.push(Painter_this$4.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$3)])))))) | 0)))(p$7)));
    var x19 = $ct_T2__O__O__(new $c_T2(), result$4, $m_Ltrivalibs_graphics_shader_layouts$().M(p$7.g, result$4));
    var \u03b42$$5 = x19;
    var bgls$8 = \u03b42$$5.aB;
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().M(p$7.g, bgls$8);
    var wallBaker = new $c_Lsketchlib_utils_bake_TextureBaker(p$7, new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, vbl$4, bgls$8[0], null, pl$4, false, dict$7, dict$8));
    var build$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$5) => {
      var body$proxy8 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$4) => {
        var $x_23 = $m_sjsr_package$();
        var AssignTarget_this$3 = ctx$2$4.b8.a2("uv");
        var value$proxy5 = ctx$2$4.bx.l("uv");
        var $x_22 = AssignTarget_this$3.T;
        var $x_21 = value$proxy5.e;
        var AssignTarget_this$2$1 = ctx$2$4.b8.hP;
        var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hc(ctx$2$4.hO.l("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ge(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ab(ctx$2$4.bx.l("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_23.d(new ($d_T.r().C)([(((("  " + $x_22) + " = ") + $x_21) + ";"), (((("  " + AssignTarget_this$2$1.T) + " = ") + value$proxy6.e) + ";")]))), "", "\n", "");
      }));
      var d$4 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$5 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$4), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$4;
      try {
        var $x_24 = body$proxy8.h(ctx$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$4;
      }
      program$3$5.b0 = $x_24;
      $m_sjs_js_ArrayOps$().V(reg$4.a3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$13) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$13, data$3$4);
      }))(program$3$5)));
      var body$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$5) => {
        var $x_25 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().gd();
        var AssignTarget_this$4 = ctx$2$5.am.a2("color");
        var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().bc($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$5.a5.l("uv"), ctx$2$5.N.l("samp"));
        return $x_25.h((((("  " + AssignTarget_this$4.T) + " = ") + value$proxy7.e) + ";"));
      }));
      var d$2$1 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$2$6 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2$1;
      try {
        var $x_26 = body$proxy10.h(ctx$2$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2$1;
      }
      program$3$5.aE = $x_26;
      $m_sjs_js_ArrayOps$().V(reg$2$1.a3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$14) => ((data$3$5) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$14, data$3$5);
      }))(program$3$5)));
    }));
    var program$5 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy5.h(program$5);
    var b$9 = program$5.b0;
    var b$10 = program$5.aE;
    var helperFns$proxy5 = program$5.ao();
    var id$5 = p$7.s;
    p$7.s = ((1 + p$7.s) | 0);
    var names$13 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
    var dict$9 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$13 = 0;
    while ((i$13 < (names$13.length | 0))) {
      dict$9[names$13[i$13]] = i$13;
      i$13 = ((1 + i$13) | 0);
    }
    var names$14 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$10 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$14 = 0;
    while ((i$14 < (names$14.length | 0))) {
      dict$10[names$14[i$14]] = i$14;
      i$14 = ((1 + i$14) | 0);
    }
    var sd$5 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$9, b$10, helperFns$proxy5);
    var vertexInputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$5 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bw.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], [])));
    var fragBuiltinParams$5 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$5 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$5, vertexInputStruct$5, vertexOutputStruct$5, fragmentOutputStruct$5, groupDecls$5, sd$5.a7, sd$5.a6, fragBuiltinParams$5);
    var wgsl$5 = (baseWgsl$5 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy5 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([wgsl$5]));
    console.log(...$m_sjsr_Compat$().aq(args$proxy5));
    var module$5 = p$7.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$5)])))));
    var formats$5 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$5 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$5 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$5);
    var stride$5 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$5);
    var attributes$5 = [];
    var i$15 = 0;
    while ((i$15 < (formats$5.length | 0))) {
      attributes$5.push($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$15), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$5[i$15] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$5[i$15])])))));
      i$15 = ((1 + i$15) | 0);
    }
    var vbl$5 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$5), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$5)]))));
    var descriptors$5 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
    var result$5 = [];
    $m_sjs_js_ArrayOps$().V(descriptors$5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$5) => ((entries$2$4) => (result$5.push(Painter_this$5.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$4)])))))) | 0)))(p$7)));
    var x22 = $ct_T2__O__O__(new $c_T2(), result$5, $m_Ltrivalibs_graphics_shader_layouts$().M(p$7.g, result$5));
    var \u03b42$$6 = x22;
    var bgls$10 = \u03b42$$6.aB;
    var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$5 = p$7.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries)])))));
    if ((panelBgl$5 !== null)) {
      var other$proxy6 = [panelBgl$5];
      var allBgls$5 = bgls$10.concat(other$proxy6);
    } else {
      var allBgls$5 = bgls$10;
    }
    var pl$5 = $m_Ltrivalibs_graphics_shader_layouts$().M(p$7.g, allBgls$5);
    var texturedShade = new $c_Ltrivalibs_graphics_painter_Shade(id$5, module$5, vbl$5, bgls$10[0], panelBgl$5, pl$5, false, dict$9, dict$10);
    var hanging = new $c_Lsketchlib_utils_room_Hanging(p$7, $m_Lsketches_templates_rooms_lroom_LRoom$package$().m5, $m_Lsketches_templates_rooms_lroom_LRoom$package$().m6, $m_Lsketches_templates_rooms_lroom_LRoom$package$().m4, $m_Lsketches_templates_rooms_lroom_LRoom$package$().m3);
    var build$proxy6 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$6) => {
      var body$proxy12 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$7) => {
        var $x_27 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().gd();
        var AssignTarget_this$5 = ctx$2$7.am.a2("color");
        var value$proxy9 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ab(ctx$2$7.N.l("color"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
        return $x_27.h((((("  " + AssignTarget_this$5.T) + " = ") + value$proxy9.e) + ";"));
      }));
      var d$5 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$6 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$5), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$5 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$5 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$5;
      try {
        var $x_28 = body$proxy12.h(ctx$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$5;
      }
      program$3$6.a8 = $x_28;
      $m_sjs_js_ArrayOps$().V(reg$5.a3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$2) => ((data$3$6) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$2, data$3$6);
      }))(program$3$6)));
    }));
    var program$6 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy6.h(program$6);
    var b$11 = program$6.a8;
    var helperFns$proxy6 = program$6.ao();
    var id$6 = p$7.s;
    p$7.s = ((1 + p$7.s) | 0);
    var names$16 = $m_sjs_js_ArrayOpsCommon$().a(["color"], []);
    var dict$11 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$16 = 0;
    while ((i$16 < (names$16.length | 0))) {
      dict$11[names$16[i$16]] = i$16;
      i$16 = ((1 + i$16) | 0);
    }
    var names$17 = [];
    var dict$12 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$17 = 0;
    while ((i$17 < (names$17.length | 0))) {
      dict$12[names$17[i$17]] = i$17;
      i$17 = ((1 + i$17) | 0);
    }
    var sd$6 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$11, helperFns$proxy6);
    var vertexInputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$6 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).R.v()], []));
    var fragBuiltinParams$6 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$6 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$6, vertexInputStruct$6, vertexOutputStruct$6, fragmentOutputStruct$6, groupDecls$6, sd$6.a7, sd$6.a6, fragBuiltinParams$6);
    var args$proxy6 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([baseWgsl$6]));
    console.log(...$m_sjsr_Compat$().aq(args$proxy6));
    var module$6 = p$7.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", baseWgsl$6)])))));
    var descriptors$6 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
    var result$6 = [];
    $m_sjs_js_ArrayOps$().V(descriptors$6, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$6) => ((entries$2$5) => (result$6.push(Painter_this$6.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$5)])))))) | 0)))(p$7)));
    var x28 = $ct_T2__O__O__(new $c_T2(), result$6, $m_Ltrivalibs_graphics_shader_layouts$().M(p$7.g, result$6));
    var \u03b46$$2 = x28;
    var bgls$12 = \u03b46$$2.aB;
    var pl$6 = $m_Ltrivalibs_graphics_shader_layouts$().M(p$7.g, bgls$12);
    var flatShade = new $c_Ltrivalibs_graphics_painter_Shade(id$6, module$6, null, bgls$12[0], null, pl$6, false, dict$11, dict$12);
    var pieceImages = $m_sjs_js_ArrayOps$().qC($m_Lsketches_templates_rooms_lroom_LRoom$package$().lY, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$7$1) => ((c$2) => $p_Lsketches_templates_rooms_lroom_LRoom$package$__flatPanel$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_painter_Panel(this, p$7$1, flatShade, c$2)))(p$7)));
    var Bindable_this = p$7.gf(lightForm, texturedShade, "none", (void 0));
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", lightTex);
    var \u03b4scrutinee490 = e1$proxy4.t;
    var idx = (Bindable_this.W.F.samp | 0);
    while (((Bindable_this.J.length | 0) <= idx)) {
      Bindable_this.J.push(null);
    }
    Bindable_this.J[idx] = \u03b4scrutinee490;
    var \u03b4scrutinee506 = e2$proxy1.t;
    var idx$2 = (Bindable_this.W.aA.tex | 0);
    while (((Bindable_this.a4.length | 0) <= idx$2)) {
      Bindable_this.a4.push(null);
    }
    Bindable_this.a4[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee506);
    var Bindable_this$4 = p$7.gf(beamForm, texturedShade, "none", (void 0));
    var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", beamTex);
    var \u03b4scrutinee512 = e1$proxy5.t;
    var idx$3 = (Bindable_this$4.W.F.samp | 0);
    while (((Bindable_this$4.J.length | 0) <= idx$3)) {
      Bindable_this$4.J.push(null);
    }
    Bindable_this$4.J[idx$3] = \u03b4scrutinee512;
    var \u03b4scrutinee528 = e2$proxy2.t;
    var idx$4 = (Bindable_this$4.W.aA.tex | 0);
    while (((Bindable_this$4.a4.length | 0) <= idx$4)) {
      Bindable_this$4.a4.push(null);
    }
    Bindable_this$4.a4[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee528);
    var aboveGround = [Bindable_this, Bindable_this$4];
    new $c_sci_Range$Exclusive(0, (walls.length | 0), 1).c7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$8) => ((v1$2$1) => {
      var i$18 = (v1$2$1 | 0);
      var wall = walls[i$18];
      var wallForm = $p_Lsketches_templates_rooms_lroom_LRoom$package$__form$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$8, [$m_Lsketchlib_utils_room_Walls$package$().qZ(wall)]);
      var pieces = $p_Lsketches_templates_rooms_lroom_LRoom$package$__curate$1__sjs_js_Array__Lsketchlib_utils_room_Hanging__Lsketchlib_utils_room_Wall__I__sjs_js_Array(this, pieceImages, hanging, wall, i$18);
      var Bindable_this$1 = p$8.gf(wallForm, texturedShade, "none", (void 0));
      var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
      var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", $p_Lsketches_templates_rooms_lroom_LRoom$package$__wallTex$1__Lsketchlib_utils_room_Hanging__Lsketchlib_utils_bake_TextureBaker__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_painter_Form__Lsketchlib_utils_room_Wall__sjs_js_Array__Ltrivalibs_graphics_painter_Panel(this, hanging, wallBaker, p$8, wallForm, wall, pieces));
      var \u03b4scrutinee534 = e1$proxy6.t;
      var idx$1 = (Bindable_this$1.W.F.samp | 0);
      while (((Bindable_this$1.J.length | 0) <= idx$1)) {
        Bindable_this$1.J.push(null);
      }
      Bindable_this$1.J[idx$1] = \u03b4scrutinee534;
      var \u03b4scrutinee550 = e2$proxy3.t;
      var idx$2$1 = (Bindable_this$1.W.aA.tex | 0);
      while (((Bindable_this$1.a4.length | 0) <= idx$2$1)) {
        Bindable_this$1.a4.push(null);
      }
      Bindable_this$1.a4[idx$2$1] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee550);
      aboveGround.push(Bindable_this$1);
      $m_sjs_js_ArrayOps$().V(pieces, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((piece$2) => (aboveGround.push(piece$2.gL) | 0))));
    }))(p$7)));
    var wallColor = new $c_Ltrivalibs_graphics_math_cpu_Vec4(0.9, 0.9, 0.9, 0.0);
    var mirror = $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().p3(p$7, cam, aboveGround, "vp", $m_Lsketches_templates_rooms_lroom_LRoom$package$().iA, $m_Ltrivalibs_graphics_geometry_Plane$().mx, 5.0, 3.0, 0.0, 0.6, 0.5, 3.0, wallColor);
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
    var uv$proxy2 = ul$proxy2.av;
    var buffer = new ArrayBuffer(8);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var canvasRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), p$7.g, uv$proxy2);
    var build$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$7) => {
      var body$proxy14 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$8) => {
        var $x_31 = $m_sjsr_package$();
        var AssignTarget_this$6 = ctx$2$8.b8.a2("uv");
        var value$proxy11 = ctx$2$8.bx.l("uv");
        var $x_30 = AssignTarget_this$6.T;
        var $x_29 = value$proxy11.e;
        var AssignTarget_this$2$2 = ctx$2$8.b8.hP;
        var value$proxy12 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hc(ctx$2$8.hO.l("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ge(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ab(ctx$2$8.bx.l("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_31.d(new ($d_T.r().C)([(((("  " + $x_30) + " = ") + $x_29) + ";"), (((("  " + AssignTarget_this$2$2.T) + " = ") + value$proxy12.e) + ";")]))), "", "\n", "");
      }));
      var d$6 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$7 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$6), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$6 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$6 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$6;
      try {
        var $x_32 = body$proxy14.h(ctx$7);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$6;
      }
      program$3$7.b0 = $x_32;
      $m_sjs_js_ArrayOps$().V(reg$6.a3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$15) => ((data$3$7) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$15, data$3$7);
      }))(program$3$7)));
      var body$proxy16 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$9) => {
        var base = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("base");
        var refl = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("refl");
        var mix = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("mix");
        var falloff = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("falloff");
        var $x_37 = $m_sjsr_package$();
        var $x_36 = base.an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gi($m_Ltrivalibs_graphics_math_gpu_expr$package$().bc($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$9.a5.l("uv"), ctx$2$9.N.l("samp"))));
        var $x_35 = refl.an($m_Ltrivalibs_graphics_math_gpu_expr$package$().bc($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "reflTex"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().pu($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hb(ctx$2$9.h3), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), ctx$2$9.N.l("res")), ctx$2$9.N.l("samp")));
        var e$proxy9 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ju(refl), 0.4);
        var $x_34 = falloff.an($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(1.0)) + " - ") + e$proxy9.e) + ")")));
        var $x_33 = mix.an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L(falloff, 0.25));
        var AssignTarget_this$7 = ctx$2$9.am.a2("color");
        var value$proxy13 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ab($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bf(base, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(1.0)) + " - ") + mix.e) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gi(refl), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), mix)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_37.d(new ($d_T.r().C)([$x_36, $x_35, $x_34, $x_33, (((("  " + AssignTarget_this$7.T) + " = ") + value$proxy13.e) + ";")]))), "", "\n", "");
      }));
      var d$2$2 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
      var ctx$2$10 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2$2;
      try {
        var $x_38 = body$proxy16.h(ctx$2$10);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2$2;
      }
      program$3$7.aE = $x_38;
      $m_sjs_js_ArrayOps$().V(reg$2$2.a3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$16) => ((data$3$8) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$16, data$3$8);
      }))(program$3$7)));
    }));
    var program$7 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy7.h(program$7);
    var b$12 = program$7.b0;
    var b$13 = program$7.aE;
    var helperFns$proxy7 = program$7.ao();
    var id$7 = p$7.s;
    p$7.s = ((1 + p$7.s) | 0);
    var names$19 = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["res"], [])));
    var dict$13 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$18$1 = 0;
    while ((i$18$1 < (names$19.length | 0))) {
      dict$13[names$19[i$18$1]] = i$18$1;
      i$18$1 = ((1 + i$18$1) | 0);
    }
    var names$20 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["reflTex"], []));
    var dict$14 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var i$19 = 0;
    while ((i$19 < (names$20.length | 0))) {
      dict$14[names$20[i$19]] = i$19;
      i$19 = ((1 + i$19) | 0);
    }
    var sd$7 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$12, b$13, helperFns$proxy7);
    var vertexInputStruct$7 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$7 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$7 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$7 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], $m_sjs_js_ArrayOpsCommon$().a(["res"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bw.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).R.v()], []))));
    var fragBuiltinParams$7 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$7 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$7, vertexInputStruct$7, vertexOutputStruct$7, fragmentOutputStruct$7, groupDecls$7, sd$7.a7, sd$7.a6, fragBuiltinParams$7);
    var wgsl$7 = (baseWgsl$7 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;\n@group(1) @binding(1) var reflTex: texture_2d<f32>;");
    var args$proxy7 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([wgsl$7]));
    console.log(...$m_sjsr_Compat$().aq(args$proxy7));
    var module$7 = p$7.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$7)])))));
    var formats$6 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], [])));
    var sizes$6 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], $m_sjs_js_ArrayOpsCommon$().a([12], [])));
    var offsets$6 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$6);
    var stride$7 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$6);
    var attributes$6 = [];
    var i$20 = 0;
    while ((i$20 < (formats$6.length | 0))) {
      attributes$6.push($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "shaderLocation", i$20), $ct_T2__O__O__(new $c_T2(), "offset", (offsets$6[i$20] | 0)), $ct_T2__O__O__(new $c_T2(), "format", formats$6[i$20])])))));
      i$20 = ((1 + i$20) | 0);
    }
    var vbl$6 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "arrayStride", stride$7), $ct_T2__O__O__(new $c_T2(), "attributes", attributes$6)]))));
    var descriptors$7 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 1), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])))], []);
    var result$7 = [];
    $m_sjs_js_ArrayOps$().V(descriptors$7, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$7) => ((entries$2$6) => (result$7.push(Painter_this$7.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$6)])))))) | 0)))(p$7)));
    var x31 = $ct_T2__O__O__(new $c_T2(), result$7, $m_Ltrivalibs_graphics_shader_layouts$().M(p$7.g, result$7));
    var \u03b42$$7 = x31;
    var bgls$14 = \u03b42$$7.aB;
    var entries$2$7 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []));
    var panelBgl$7 = p$7.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$7)])))));
    if ((panelBgl$7 !== null)) {
      var other$proxy8 = [panelBgl$7];
      var allBgls$7 = bgls$14.concat(other$proxy8);
    } else {
      var allBgls$7 = bgls$14;
    }
    var pl$7 = $m_Ltrivalibs_graphics_shader_layouts$().M(p$7.g, allBgls$7);
    var floorShade = new $c_Ltrivalibs_graphics_painter_Shade(id$7, module$7, vbl$6, bgls$14[0], panelBgl$7, pl$7, false, dict$13, dict$14);
    var Bindable_this$7 = p$7.gf(floorForm, floorShade, "front", (void 0));
    var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", floorTex);
    var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("reflTex", mirror.mk);
    var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("res", canvasRes);
    var \u03b4scrutinee652 = e1$proxy7.t;
    var idx$5 = (Bindable_this$7.W.F.samp | 0);
    while (((Bindable_this$7.J.length | 0) <= idx$5)) {
      Bindable_this$7.J.push(null);
    }
    Bindable_this$7.J[idx$5] = \u03b4scrutinee652;
    var \u03b4scrutinee670 = e2$proxy4.t;
    var idx$6 = (Bindable_this$7.W.aA.tex | 0);
    while (((Bindable_this$7.a4.length | 0) <= idx$6)) {
      Bindable_this$7.a4.push(null);
    }
    Bindable_this$7.a4[idx$6] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee670);
    var \u03b4scrutinee684 = e3$proxy1.t;
    var idx$7 = (Bindable_this$7.W.aA.reflTex | 0);
    while (((Bindable_this$7.a4.length | 0) <= idx$7)) {
      Bindable_this$7.a4.push(null);
    }
    Bindable_this$7.a4[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee684);
    var \u03b4scrutinee692 = e4$proxy1.t;
    var idx$8 = (Bindable_this$7.W.F.res | 0);
    while (((Bindable_this$7.J.length | 0) <= idx$8)) {
      Bindable_this$7.J.push(null);
    }
    Bindable_this$7.J[idx$8] = \u03b4scrutinee692;
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy3 = ul$proxy3.av;
    var buffer$2 = new ArrayBuffer(64);
    var arr$proxy10 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
    var sceneVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy10.dv, 0), p$7.g, uv$proxy3);
    var clearColor$4 = $m_Ltrivalibs_graphics_math_cpu_Vec4$().oa().h(new $c_T4(0.5, 0.6, 0.7, 1.0));
    var shapes$2 = aboveGround.concat([Bindable_this$7]);
    var Panel_this = p$7.bB((void 0), (void 0), clearColor$4, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes$2, (void 0), (void 0));
    var e1$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("vp", sceneVp);
    var \u03b4scrutinee701 = e1$proxy8.t;
    var dict$proxy1 = Panel_this.hL;
    dict$proxy1.vp = \u03b4scrutinee701;
    var bloom = $m_Lsketchlib_utils_bloom_Bloom$().p2(p$7, Panel_this, 0.0035, 1.0, 3.0, 5, 0.9, 1.5);
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().pZ(p$7.gW, true, 400.0, 5.0, true, (void 0), 90.0, 50.0);
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 2.5, 1.0);
    p$7.qQ(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$2, v2$2) => {
      var w = (+v1$2$2);
      var h = (+v2$2);
      var aspect$2 = (w / h);
      var fov$1 = cam.bL;
      var near$1 = cam.h2;
      var far$1 = cam.h1;
      var rotH$2 = cam.aR;
      var rotV$2 = cam.bM;
      var pos$5 = cam.af;
      cam.l3(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$5);
      var value$proxy15 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(w, h);
      canvasRes.E.A(canvasRes.j, value$proxy15);
      var $x_40 = canvasRes.D.queue;
      var $x_39 = canvasRes.B;
      var s$proxy7 = canvasRes.j;
      $x_40.writeBuffer($x_39, 0.0, s$proxy7.dv.buffer);
      mirror.r6(w, h);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().oY(((p$9) => ((arg1$2) => {
      var tpf = (+arg1$2);
      input.gg(tpf);
      controller.gg(tpf);
      cam.af = $m_Lsketchlib_utils_room_Confine$package$().pl(floorBnd, cam.af, $m_Lsketches_templates_rooms_lroom_LRoom$package$().jC, ($m_Ltrivalibs_dev_dev$package$().o1() ? cam.af.I : $m_Lsketches_templates_rooms_lroom_LRoom$package$().iy));
      var vp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().h9(), cam.j6, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.oH());
      sceneVp.E.A(sceneVp.j, vp);
      var $x_42 = sceneVp.D.queue;
      var $x_41 = sceneVp.B;
      var s$proxy8 = sceneVp.j;
      $x_42.writeBuffer($x_41, 0.0, s$proxy8.dv.buffer);
      mirror.qS(vp);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$9, Panel_this);
      bloom.qT();
      p$9.ri(bloom.me);
    }))(p$7));
  })));
});
var $d_Lsketches_templates_rooms_lroom_LRoom$package$ = new $TypeData().i($c_Lsketches_templates_rooms_lroom_LRoom$package$, "sketches.templates.rooms.lroom.LRoom$package$", ({
  dm: 1
}));
var $n_Lsketches_templates_rooms_lroom_LRoom$package$;
function $m_Lsketches_templates_rooms_lroom_LRoom$package$() {
  if ((!$n_Lsketches_templates_rooms_lroom_LRoom$package$)) {
    $n_Lsketches_templates_rooms_lroom_LRoom$package$ = new $c_Lsketches_templates_rooms_lroom_LRoom$package$();
  }
  return $n_Lsketches_templates_rooms_lroom_LRoom$package$;
}
/** @constructor */
function $c_Lsketchlib_shaders_Noise$() {
}
$p = $c_Lsketchlib_shaders_Noise$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_shaders_Noise$;
/** @constructor */
function $h_Lsketchlib_shaders_Noise$() {
}
$h_Lsketchlib_shaders_Noise$.prototype = $p;
$p.jg = (function(pos, octaves, freqMul, ampMul, seed) {
  var acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0);
  var freq = 1.0;
  var amp = 1.0;
  var total = 0.0;
  var i = 0;
  while ((i < octaves)) {
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var $x_2 = acc;
    var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_random_Simplex$().kC;
    var a1$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().hY(pos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), freq), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), seed);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().js(fn$proxy1);
    acc = $x_3.ag($x_2, $x_1.L($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((WgslFn$_this.jn(fn$proxy1) + "(") + a1$proxy1) + ")")), amp));
    total = (total + amp);
    freq = (freq * freqMul);
    amp = (amp * ampMul);
    i = ((1 + i) | 0);
  }
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ga(acc, total);
});
var $d_Lsketchlib_shaders_Noise$ = new $TypeData().i($c_Lsketchlib_shaders_Noise$, "sketchlib.shaders.Noise$", ({
  dn: 1
}));
var $n_Lsketchlib_shaders_Noise$;
function $m_Lsketchlib_shaders_Noise$() {
  if ((!$n_Lsketchlib_shaders_Noise$)) {
    $n_Lsketchlib_shaders_Noise$ = new $c_Lsketchlib_shaders_Noise$();
  }
  return $n_Lsketchlib_shaders_Noise$;
}
/** @constructor */
function $c_Lsketchlib_utils_bake_Bake$package$() {
}
$p = $c_Lsketchlib_utils_bake_Bake$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_Bake$package$;
/** @constructor */
function $h_Lsketchlib_utils_bake_Bake$package$() {
}
$h_Lsketchlib_utils_bake_Bake$package$.prototype = $p;
$p.kQ = (function(baker, form, width, height, transform, format, mips, clearColor) {
  var Painter_this = baker.bU;
  var value$proxy4 = ((transform === (void 0)) ? new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0) : transform);
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.av;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), Painter_this.g, uv$proxy1);
  b.E.A(b.j, value$proxy4);
  var $x_2 = b.D.queue;
  var $x_1 = b.B;
  var s$proxy1 = b.j;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var Bindable_this = baker.bU.gf(form, baker.jI, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var \u03b4scrutinee5 = e1$proxy1.t;
  var idx = (Bindable_this.W.F.model | 0);
  while (((Bindable_this.J.length | 0) <= idx)) {
    Bindable_this.J.push(null);
  }
  Bindable_this.J[idx] = \u03b4scrutinee5;
  var format$1 = ((format === (void 0)) ? "rgba8unorm" : format);
  var panel = baker.bU.bB(width, height, clearColor, (void 0), (void 0), (void 0), mips, format$1, (void 0), Bindable_this, (void 0), (void 0), (void 0));
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(baker.bU, panel);
  return panel;
});
var $d_Lsketchlib_utils_bake_Bake$package$ = new $TypeData().i($c_Lsketchlib_utils_bake_Bake$package$, "sketchlib.utils.bake.Bake$package$", ({
  dp: 1
}));
var $n_Lsketchlib_utils_bake_Bake$package$;
function $m_Lsketchlib_utils_bake_Bake$package$() {
  if ((!$n_Lsketchlib_utils_bake_Bake$package$)) {
    $n_Lsketchlib_utils_bake_Bake$package$ = new $c_Lsketchlib_utils_bake_Bake$package$();
  }
  return $n_Lsketchlib_utils_bake_Bake$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_bake_TextureBaker(painter, shade) {
  this.bU = null;
  this.jI = null;
  this.bU = painter;
  this.jI = shade;
}
$p = $c_Lsketchlib_utils_bake_TextureBaker.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker() {
}
$h_Lsketchlib_utils_bake_TextureBaker.prototype = $p;
var $d_Lsketchlib_utils_bake_TextureBaker = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker, "sketchlib.utils.bake.TextureBaker", ({
  dq: 1
}));
function $p_Lsketchlib_utils_bake_TextureBaker$__buildVert__Ltrivalibs_graphics_shader_dsl_Program__V($thiz, program) {
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg;
  try {
    var uv = ctx.bx.l("uv");
    var AssignTarget_this = ctx.b8.a2("worldPos");
    var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gi($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hc($thiz.jJ, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ge(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ab(ctx.bx.l("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x0 = (((("  " + AssignTarget_this.T) + " = ") + value$proxy1.e) + ";");
    var AssignTarget_this$2 = ctx.b8.a2("normal");
    var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().qP($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gi($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hc($thiz.jJ, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ge(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ab(ctx.bx.l("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$());
    var x1 = (((("  " + AssignTarget_this$2.T) + " = ") + value$proxy2.e) + ";");
    var AssignTarget_this$3 = ctx.b8.a2("uv");
    var x2 = (((("  " + AssignTarget_this$3.T) + " = ") + uv.e) + ";");
    var AssignTarget_this$4 = ctx.b8.hP;
    var $x_5 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_vec2$();
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aS(uv);
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ak(uv);
    var value$proxy3 = $x_5.bc($x_4.pI($x_3.ab($x_2, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(1.0)) + " - ") + e$proxy1.e) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, x2, (((("  " + AssignTarget_this$4.T) + " = ") + value$proxy3.e) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev;
  }
  program.b0 = $x_1;
  var array$1 = reg.a3;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
}
/** @constructor */
function $c_Lsketchlib_utils_bake_TextureBaker$() {
  this.jJ = null;
  $n_Lsketchlib_utils_bake_TextureBaker$ = this;
  this.jJ = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "model");
}
$p = $c_Lsketchlib_utils_bake_TextureBaker$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bake_TextureBaker$;
/** @constructor */
function $h_Lsketchlib_utils_bake_TextureBaker$() {
}
$h_Lsketchlib_utils_bake_TextureBaker$.prototype = $p;
var $d_Lsketchlib_utils_bake_TextureBaker$ = new $TypeData().i($c_Lsketchlib_utils_bake_TextureBaker$, "sketchlib.utils.bake.TextureBaker$", ({
  dr: 1
}));
var $n_Lsketchlib_utils_bake_TextureBaker$;
function $m_Lsketchlib_utils_bake_TextureBaker$() {
  if ((!$n_Lsketchlib_utils_bake_TextureBaker$)) {
    $n_Lsketchlib_utils_bake_TextureBaker$ = new $c_Lsketchlib_utils_bake_TextureBaker$();
  }
  return $n_Lsketchlib_utils_bake_TextureBaker$;
}
/** @constructor */
function $c_Lsketchlib_utils_bloom_Bloom$() {
}
$p = $c_Lsketchlib_utils_bloom_Bloom$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$() {
}
$h_Lsketchlib_utils_bloom_Bloom$.prototype = $p;
$p.p2 = (function(p, scene, intensity, threshold, blurRadius, mipLevels, toneKnee, toneWhite) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("bloom mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aO;
  }
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy1 = ul$proxy1.av;
  var buffer = new ArrayBuffer(4);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.g, uv$proxy1);
  b.E.A(b.j, blurRadius);
  var $x_2 = b.D.queue;
  var $x_1 = b.B;
  var s$proxy1 = b.j;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy2 = ul$proxy2.av;
  var buffer$2 = new ArrayBuffer(4);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.g, uv$proxy2);
  b$2.E.A(b$2.j, intensity);
  var $x_4 = b$2.D.queue;
  var $x_3 = b$2.B;
  var s$proxy2 = b$2.j;
  $x_4.writeBuffer($x_3, 0.0, s$proxy2.dv.buffer);
  var sampler = p.io();
  var build$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy1 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      var color = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("color");
      var brightness = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("brightness");
      var $x_7 = $m_sjsr_package$();
      var $x_6 = color.an($m_Ltrivalibs_graphics_math_gpu_expr$package$().jk($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().c6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hb(ctx$2.h3))));
      var $x_5 = brightness.an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().aS(color), 0.2126), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ak(color), 0.7152)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().hf(color), 0.0722)));
      var AssignTarget_this = ctx$2.am.a2("color");
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().rd($m_Ltrivalibs_graphics_math_gpu_vec4$().p1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), color, $m_Ltrivalibs_graphics_math_gpu_expr$package$().pJ(brightness, ctx$2.N.l("threshold")));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_7.d(new ($d_T.r().C)([$x_6, $x_5, (((("  " + AssignTarget_this.T) + " = ") + value$proxy1.e) + ";")]))), "", "\n", "");
    }));
    var d = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg;
    try {
      var $x_8 = body$proxy1.h(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev;
    }
    program$3.a8 = $x_8;
    $m_sjs_js_ArrayOps$().V(reg.a3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy1.h(program);
  var b$1 = program.a8;
  var helperFns$proxy1 = program.ao();
  var id = p.s;
  p.s = ((1 + p.s) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []);
  var dict = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], []);
  var dict$2 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a7, sd.a6, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;");
  var args$proxy1 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().aq(args$proxy1));
  var module = p.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], [])], []);
  var result = [];
  $m_sjs_js_ArrayOps$().V(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2)])))))) | 0))));
  var x1 = $ct_T2__O__O__(new $c_T2(), result, $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, result));
  var \u03b46$ = x1;
  var bgls$2 = \u03b46$.aB;
  var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl = p.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, allBgls);
  var thresholdShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
      var $x_9 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().gd();
      var AssignTarget_this$1 = ctx$2$1.am.a2("color");
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().nt;
      var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
      var a2$proxy1 = ctx$2$1.N.l("samp");
      var a3$proxy1 = ctx$2$1.a5.l("uv");
      var a4$proxy1 = ctx$2$1.N.l("blurRadius");
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().js(fn$proxy1);
      var value$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this.jn(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + a3$proxy1) + ", ") + a4$proxy1) + ")"));
      return $x_9.h((((("  " + AssignTarget_this$1.T) + " = ") + value$proxy2.e) + ";"));
    }));
    var d$1 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$1;
    try {
      var $x_10 = body$proxy3.h(ctx$1);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$1;
    }
    program$3$1.a8 = $x_10;
    $m_sjs_js_ArrayOps$().V(reg$1.a3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$1) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$1);
    }))(program$3$1)));
  }));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.h(program$2);
  var b$3 = program$2.a8;
  var helperFns$proxy2 = program$2.ao();
  var id$2 = p.s;
  p.s = ((1 + p.s) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$3 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$3 = 0;
  while ((i$3 < (names$4.length | 0))) {
    dict$3[names$4[i$3]] = i$3;
    i$3 = ((1 + i$3) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$4 = 0;
  while ((i$4 < (names$5.length | 0))) {
    dict$4[names$5[i$4]] = i$4;
    i$4 = ((1 + i$4) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a7, sd$2.a6, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().aq(args$proxy2));
  var module$2 = p.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$2)])))));
  var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$2 = [];
  $m_sjs_js_ArrayOps$().V(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$1) => (result$2.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$1)])))))) | 0))));
  var x4 = $ct_T2__O__O__(new $c_T2(), result$2, $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, result$2));
  var \u03b46$$2 = x4;
  var bgls$4 = \u03b46$$2.aB;
  var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$2 = p.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$2)])))));
  if ((panelBgl$2 !== null)) {
    var other$proxy2 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy2);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, allBgls$2);
  var downsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
    var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$2) => {
      var $x_11 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().gd();
      var AssignTarget_this$2 = ctx$2$2.am.a2("color");
      var WgslFn$_this$1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().nv;
      var a1$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
      var a2$proxy2 = ctx$2$2.N.l("samp");
      var a3$proxy2 = ctx$2$2.a5.l("uv");
      var a4$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L(ctx$2$2.N.l("blurRadius"), 0.5);
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().js(fn$proxy2);
      var value$proxy3 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this$1.jn(fn$proxy2) + "(") + a1$proxy2) + ", ") + a2$proxy2) + ", ") + a3$proxy2) + ", ") + a4$proxy2) + ")"));
      return $x_11.h((((("  " + AssignTarget_this$2.T) + " = ") + value$proxy3.e) + ";"));
    }));
    var d$2 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2;
    try {
      var $x_12 = body$proxy5.h(ctx$3);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2;
    }
    program$3$2.a8 = $x_12;
    $m_sjs_js_ArrayOps$().V(reg$2.a3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$7) => ((data$3$2) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$7, data$3$2);
    }))(program$3$2)));
  }));
  var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy3.h(program$3$3);
  var b$4 = program$3$3.a8;
  var helperFns$proxy3 = program$3$3.ao();
  var id$3 = p.s;
  p.s = ((1 + p.s) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$5 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$5 = 0;
  while ((i$5 < (names$7.length | 0))) {
    dict$5[names$7[i$5]] = i$5;
    i$5 = ((1 + i$5) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$6 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$6 = 0;
  while ((i$6 < (names$8.length | 0))) {
    dict$6[names$8[i$6]] = i$6;
    i$6 = ((1 + i$6) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$4, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a7, sd$3.a6, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().aq(args$proxy3));
  var module$3 = p.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$3)])))));
  var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []))], []);
  var result$3 = [];
  $m_sjs_js_ArrayOps$().V(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$3) => (result$3.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$3)])))))) | 0))));
  var x7 = $ct_T2__O__O__(new $c_T2(), result$3, $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, result$3));
  var \u03b46$$3 = x7;
  var bgls$6 = \u03b46$$3.aB;
  var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl$3 = p.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$3)])))));
  if ((panelBgl$3 !== null)) {
    var other$proxy3 = [panelBgl$3];
    var allBgls$3 = bgls$6.concat(other$proxy3);
  } else {
    var allBgls$3 = bgls$6;
  }
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, allBgls$3);
  var upsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var layers = [];
  var Bindable_this = p.bA(thresholdShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("threshold", threshold);
  var \u03b4scrutinee197 = e1$proxy1.t;
  var idx = (Bindable_this.C.aA.scene | 0);
  while (((Bindable_this.U.length | 0) <= idx)) {
    Bindable_this.U.push(null);
  }
  Bindable_this.U[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee197);
  Bindable_this.P = null;
  var \u03b4scrutinee201 = (+e2$proxy1.t);
  var idx$2 = (Bindable_this.C.F.threshold | 0);
  if (((idx$2 < (Bindable_this.i.length | 0)) && (Bindable_this.i[idx$2] !== null))) {
    var BufferBinding_this$5 = Bindable_this.i[idx$2];
    BufferBinding_this$5.E.A(BufferBinding_this$5.j, \u03b4scrutinee201);
    var $x_14 = BufferBinding_this$5.D.queue;
    var $x_13 = BufferBinding_this$5.B;
    var s$proxy5 = BufferBinding_this$5.j;
    $x_14.writeBuffer($x_13, 0.0, s$proxy5.dv.buffer);
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy1 = Bindable_this.c4.g;
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv$2);
    b$3$1.E.A(b$3$1.j, \u03b4scrutinee201);
    var $x_16 = b$3$1.D.queue;
    var $x_15 = b$3$1.B;
    var s$proxy6 = b$3$1.j;
    $x_16.writeBuffer($x_15, 0.0, s$proxy6.dv.buffer);
    while (((Bindable_this.i.length | 0) <= idx$2)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx$2] = b$3$1;
  }
  Bindable_this.P = null;
  layers.push(Bindable_this);
  var di = 0;
  while ((di < ((mipLevels - 1) | 0))) {
    var mipSource$1 = di;
    var mipTarget$1 = ((1 + di) | 0);
    var Bindable_this$5 = p.bA(downsampleShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee212 = e1$proxy2.t;
    var idx$3 = (Bindable_this$5.C.F.blurRadius | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$3)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$3] = \u03b4scrutinee212;
    Bindable_this$5.P = null;
    var \u03b4scrutinee224 = e2$proxy2.t;
    var idx$4 = (Bindable_this$5.C.F.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$4)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$4] = \u03b4scrutinee224;
    Bindable_this$5.P = null;
    layers.push(Bindable_this$5);
    di = ((1 + di) | 0);
  }
  var ui = ((mipLevels - 2) | 0);
  while ((ui >= 0)) {
    var Bindable_this$8 = p.bA(upsampleShade, $m_Ltrivalibs_graphics_painter_BlendState$().mY, ((1 + ui) | 0), ui);
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee234 = e1$proxy3.t;
    var idx$5 = (Bindable_this$8.C.F.blurRadius | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$5)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$5] = \u03b4scrutinee234;
    Bindable_this$8.P = null;
    var \u03b4scrutinee246 = e2$proxy3.t;
    var idx$6 = (Bindable_this$8.C.F.samp | 0);
    while (((Bindable_this$8.i.length | 0) <= idx$6)) {
      Bindable_this$8.i.push(null);
    }
    Bindable_this$8.i[idx$6] = \u03b4scrutinee246;
    Bindable_this$8.P = null;
    layers.push(Bindable_this$8);
    ui = ((ui - 1) | 0);
  }
  var bloomP = p.bB((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers);
  var toneOn = (toneWhite > toneKnee);
  var toneLift = (toneOn ? (1.0 - toneKnee) : 0.0);
  var toneFalloff = (toneOn ? ((-1.0) / (toneWhite - toneKnee)) : (-1.0));
  var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
    var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
      var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().c6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hb(ctx$2$3.h3));
      var c = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("c");
      var low = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("low");
      var over = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("over");
      var $x_20 = $m_sjsr_package$();
      var $x_19 = c.an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gi($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().oX($m_Ltrivalibs_graphics_math_gpu_expr$package$().jk($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().qK($m_Ltrivalibs_graphics_math_gpu_expr$package$().jk($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "bloom"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), ctx$2$3.N.l("intensity")))));
      var $x_18 = low.an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().qG(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_vec3$().c6(ctx$2$3.N.l("knee"))));
      var $x_17 = over.an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().oD(c, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), low));
      var AssignTarget_this$3 = ctx$2$3.am.a2("color");
      var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ab($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kO(low, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().oD($m_Ltrivalibs_graphics_math_gpu_vec3$().hZ(1.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().pE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().bf(over, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.N.l("falloff")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$())), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), ctx$2$3.N.l("lift"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_20.d(new ($d_T.r().C)([$x_19, $x_18, $x_17, (((("  " + AssignTarget_this$3.T) + " = ") + value$proxy4.e) + ";")]))), "", "\n", "");
    }));
    var d$3 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$3;
    try {
      var $x_21 = body$proxy7.h(ctx$4);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$3;
    }
    program$3$4.a8 = $x_21;
    $m_sjs_js_ArrayOps$().V(reg$3.a3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$8) => ((data$3$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$8, data$3$3);
    }))(program$3$4)));
  }));
  var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy4.h(program$4);
  var b$5 = program$4.a8;
  var helperFns$proxy4 = program$4.ao();
  var id$4 = p.s;
  p.s = ((1 + p.s) | 0);
  var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["intensity"], $m_sjs_js_ArrayOpsCommon$().a(["knee"], $m_sjs_js_ArrayOpsCommon$().a(["lift"], $m_sjs_js_ArrayOpsCommon$().a(["falloff"], []))));
  var dict$7 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$7 = 0;
  while ((i$7 < (names$10.length | 0))) {
    dict$7[names$10[i$7]] = i$7;
    i$7 = ((1 + i$7) | 0);
  }
  var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], $m_sjs_js_ArrayOpsCommon$().a(["bloom"], []));
  var dict$8 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$8 = 0;
  while ((i$8 < (names$11.length | 0))) {
    dict$8[names$11[i$8]] = i$8;
    i$8 = ((1 + i$8) | 0);
  }
  var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy4);
  var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["intensity"], $m_sjs_js_ArrayOpsCommon$().a(["knee"], $m_sjs_js_ArrayOpsCommon$().a(["lift"], $m_sjs_js_ArrayOpsCommon$().a(["falloff"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], [])))));
  var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.a7, sd$4.a6, fragBuiltinParams$4);
  var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;\n@group(1) @binding(1) var bloom: texture_2d<f32>;");
  var args$proxy4 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([wgsl$4]));
  console.log(...$m_sjsr_Compat$().aq(args$proxy4));
  var module$4 = p.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl$4)])))));
  var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 3), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], []))))], []);
  var result$4 = [];
  $m_sjs_js_ArrayOps$().V(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2$4) => (result$4.push(p.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2$4)])))))) | 0))));
  var x10 = $ct_T2__O__O__(new $c_T2(), result$4, $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, result$4));
  var \u03b46$$4 = x10;
  var bgls$8 = \u03b46$$4.aB;
  var entries$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []));
  var panelBgl$4 = p.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$4)])))));
  if ((panelBgl$4 !== null)) {
    var other$proxy4 = [panelBgl$4];
    var allBgls$4 = bgls$8.concat(other$proxy4);
  } else {
    var allBgls$4 = bgls$8;
  }
  var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, allBgls$4);
  var compositeShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
  var Bindable_this$11 = p.bA(compositeShade, (void 0), (void 0), (void 0));
  var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("bloom", bloomP);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("intensity", b$2);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("knee", toneKnee);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("lift", toneLift);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("falloff", toneFalloff);
  var \u03b4scrutinee349 = e1$proxy4.t;
  var idx$7 = (Bindable_this$11.C.aA.scene | 0);
  while (((Bindable_this$11.U.length | 0) <= idx$7)) {
    Bindable_this$11.U.push(null);
  }
  Bindable_this$11.U[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee349);
  Bindable_this$11.P = null;
  var \u03b4scrutinee365 = e2$proxy4.t;
  var idx$8 = (Bindable_this$11.C.aA.bloom | 0);
  while (((Bindable_this$11.U.length | 0) <= idx$8)) {
    Bindable_this$11.U.push(null);
  }
  Bindable_this$11.U[idx$8] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee365);
  Bindable_this$11.P = null;
  var \u03b4scrutinee369 = e3$proxy1.t;
  var idx$9 = (Bindable_this$11.C.F.intensity | 0);
  while (((Bindable_this$11.i.length | 0) <= idx$9)) {
    Bindable_this$11.i.push(null);
  }
  Bindable_this$11.i[idx$9] = \u03b4scrutinee369;
  Bindable_this$11.P = null;
  var \u03b4scrutinee381 = (+e4$proxy1.t);
  var idx$10 = (Bindable_this$11.C.F.knee | 0);
  if (((idx$10 < (Bindable_this$11.i.length | 0)) && (Bindable_this$11.i[idx$10] !== null))) {
    var BufferBinding_this$9 = Bindable_this$11.i[idx$10];
    BufferBinding_this$9.E.A(BufferBinding_this$9.j, \u03b4scrutinee381);
    var $x_23 = BufferBinding_this$9.D.queue;
    var $x_22 = BufferBinding_this$9.B;
    var s$proxy7 = BufferBinding_this$9.j;
    $x_23.writeBuffer($x_22, 0.0, s$proxy7.dv.buffer);
  } else {
    var uv$2$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy2 = Bindable_this$11.c4.g;
    var buffer$4 = new ArrayBuffer(4);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
    var b$4$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), device$proxy2, uv$2$1);
    b$4$1.E.A(b$4$1.j, \u03b4scrutinee381);
    var $x_25 = b$4$1.D.queue;
    var $x_24 = b$4$1.B;
    var s$proxy8 = b$4$1.j;
    $x_25.writeBuffer($x_24, 0.0, s$proxy8.dv.buffer);
    while (((Bindable_this$11.i.length | 0) <= idx$10)) {
      Bindable_this$11.i.push(null);
    }
    Bindable_this$11.i[idx$10] = b$4$1;
  }
  Bindable_this$11.P = null;
  var \u03b4scrutinee398 = (+e5$proxy1.t);
  var idx$11 = (Bindable_this$11.C.F.lift | 0);
  if (((idx$11 < (Bindable_this$11.i.length | 0)) && (Bindable_this$11.i[idx$11] !== null))) {
    var BufferBinding_this$13 = Bindable_this$11.i[idx$11];
    BufferBinding_this$13.E.A(BufferBinding_this$13.j, \u03b4scrutinee398);
    var $x_27 = BufferBinding_this$13.D.queue;
    var $x_26 = BufferBinding_this$13.B;
    var s$proxy9 = BufferBinding_this$13.j;
    $x_27.writeBuffer($x_26, 0.0, s$proxy9.dv.buffer);
  } else {
    var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy3 = Bindable_this$11.c4.g;
    var buffer$5 = new ArrayBuffer(4);
    var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
    var b$5$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), device$proxy3, uv$3);
    b$5$1.E.A(b$5$1.j, \u03b4scrutinee398);
    var $x_29 = b$5$1.D.queue;
    var $x_28 = b$5$1.B;
    var s$proxy10 = b$5$1.j;
    $x_29.writeBuffer($x_28, 0.0, s$proxy10.dv.buffer);
    while (((Bindable_this$11.i.length | 0) <= idx$11)) {
      Bindable_this$11.i.push(null);
    }
    Bindable_this$11.i[idx$11] = b$5$1;
  }
  Bindable_this$11.P = null;
  var \u03b4scrutinee419 = (+e6$proxy1.t);
  var idx$12 = (Bindable_this$11.C.F.falloff | 0);
  if (((idx$12 < (Bindable_this$11.i.length | 0)) && (Bindable_this$11.i[idx$12] !== null))) {
    var BufferBinding_this$17 = Bindable_this$11.i[idx$12];
    BufferBinding_this$17.E.A(BufferBinding_this$17.j, \u03b4scrutinee419);
    var $x_31 = BufferBinding_this$17.D.queue;
    var $x_30 = BufferBinding_this$17.B;
    var s$proxy11 = BufferBinding_this$17.j;
    $x_31.writeBuffer($x_30, 0.0, s$proxy11.dv.buffer);
  } else {
    var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy4 = Bindable_this$11.c4.g;
    var buffer$6 = new ArrayBuffer(4);
    var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
    var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy4, uv$4);
    b$6.E.A(b$6.j, \u03b4scrutinee419);
    var $x_33 = b$6.D.queue;
    var $x_32 = b$6.B;
    var s$proxy12 = b$6.j;
    $x_33.writeBuffer($x_32, 0.0, s$proxy12.dv.buffer);
    while (((Bindable_this$11.i.length | 0) <= idx$12)) {
      Bindable_this$11.i.push(null);
    }
    Bindable_this$11.i[idx$12] = b$6;
  }
  Bindable_this$11.P = null;
  return new $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP, p.bB((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0)), p, b, b$2);
});
var $d_Lsketchlib_utils_bloom_Bloom$ = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$, "sketchlib.utils.bloom.Bloom$", ({
  dt: 1
}));
var $n_Lsketchlib_utils_bloom_Bloom$;
function $m_Lsketchlib_utils_bloom_Bloom$() {
  if ((!$n_Lsketchlib_utils_bloom_Bloom$)) {
    $n_Lsketchlib_utils_bloom_Bloom$ = new $c_Lsketchlib_utils_bloom_Bloom$();
  }
  return $n_Lsketchlib_utils_bloom_Bloom$;
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade($thiz, p$1, vertical) {
  var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
    var body$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
      var uv = ctx$2.a5.l("uv");
      var a = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("a");
      var dist = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("dist");
      var $x_3 = $m_sjsr_package$();
      var $x_2 = a.an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ju($m_Ltrivalibs_graphics_math_gpu_expr$package$().oA($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), uv, ctx$2.N.l("samp"))));
      var $x_1 = dist.an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b2(a, ctx$2.N.l("blurStrength")), ctx$2.N.l("visHeight")), ctx$2.N.l("passScale")), ctx$2.N.l("strengthOffset")));
      var AssignTarget_this = ctx$2.am.a2("color");
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().nu;
      var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
      var a2$proxy1 = ctx$2.N.l("samp");
      var a4$proxy1 = ctx$2.N.l("res");
      var a5$proxy1 = (vertical ? $m_Ltrivalibs_graphics_math_gpu_vec2$().ab($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b2(dist, ctx$2.N.l("ratioVertical"))) : $m_Ltrivalibs_graphics_math_gpu_vec2$().ab(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0)));
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().js(fn$proxy1);
      var value$proxy4 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((((WgslFn$_this.jn(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + uv) + ", ") + a4$proxy1) + ", ") + a5$proxy1) + ")"));
      return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_3.d(new ($d_T.r().C)([$x_2, $x_1, (((("  " + AssignTarget_this.T) + " = ") + value$proxy4.e) + ";")]))), "", "\n", "");
    }));
    var d = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg;
    try {
      var $x_4 = body$proxy3.h(ctx);
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev;
    }
    program$3.a8 = $x_4;
    $m_sjs_js_ArrayOps$().V(reg.a3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3) => {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3);
    }))(program$3)));
  }));
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  build$proxy2.h(program);
  var b = program.a8;
  var helperFns$proxy2 = program.ao();
  var id = p$1.s;
  p$1.s = ((1 + p$1.s) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["ratioVertical"], $m_sjs_js_ArrayOpsCommon$().a(["strengthOffset"], $m_sjs_js_ArrayOpsCommon$().a(["passScale"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])))))));
  var dict = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i = 0;
  while ((i < (names.length | 0))) {
    dict[names[i]] = i;
    i = ((1 + i) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$2 = $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([]))));
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b, helperFns$proxy2);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["ratioVertical"], $m_sjs_js_ArrayOpsCommon$().a(["strengthOffset"], $m_sjs_js_ArrayOpsCommon$().a(["passScale"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["visHeight"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))))))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], []))))))));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a7, sd.a6, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().aq(args$proxy2));
  var module = p$1.g.createShaderModule($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "code", wgsl)])))));
  var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 1), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 2), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 3), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 4), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 5), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "buffer", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 6), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "sampler", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], [])))))))], []);
  var result = [];
  $m_sjs_js_ArrayOps$().V(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((entries$2) => (result.push(p$1.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries$2)])))))) | 0))));
  var x4 = $ct_T2__O__O__(new $c_T2(), result, $m_Ltrivalibs_graphics_shader_layouts$().M(p$1.g, result));
  var \u03b46$ = x4;
  var bgls$2 = \u03b46$.aB;
  var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "binding", 0), $ct_T2__O__O__(new $c_T2(), "visibility", 2), $ct_T2__O__O__(new $c_T2(), "texture", $m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([])))))]))))], []);
  var panelBgl = p$1.g.createBindGroupLayout($m_sjs_js_special_package$().f(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_T2.r().C)([$ct_T2__O__O__(new $c_T2(), "entries", entries)])))));
  if ((panelBgl !== null)) {
    var other$proxy2 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy2);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().M(p$1.g, allBgls);
  return new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer($thiz, p$2, uBlurStrength$1, uRatioVertical$1, uStrengthOffset$1, uRes$1, uVisHeight$1, sampler$1, shade, passScale) {
  var Bindable_this = p$2.bA(shade, (void 0), (void 0), (void 0));
  var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurStrength", uBlurStrength$1);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("ratioVertical", uRatioVertical$1);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("strengthOffset", uStrengthOffset$1);
  var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("passScale", passScale);
  var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("res", uRes$1);
  var e6$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("visHeight", uVisHeight$1);
  var e7$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler$1);
  var \u03b4scrutinee190 = e1$proxy2.t;
  var idx = (Bindable_this.C.F.blurStrength | 0);
  while (((Bindable_this.i.length | 0) <= idx)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx] = \u03b4scrutinee190;
  Bindable_this.P = null;
  var \u03b4scrutinee202 = e2$proxy2.t;
  var idx$2 = (Bindable_this.C.F.ratioVertical | 0);
  while (((Bindable_this.i.length | 0) <= idx$2)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$2] = \u03b4scrutinee202;
  Bindable_this.P = null;
  var \u03b4scrutinee218 = e3$proxy2.t;
  var idx$3 = (Bindable_this.C.F.strengthOffset | 0);
  while (((Bindable_this.i.length | 0) <= idx$3)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$3] = \u03b4scrutinee218;
  Bindable_this.P = null;
  var \u03b4scrutinee238 = (+e4$proxy1.t);
  var idx$4 = (Bindable_this.C.F.passScale | 0);
  if (((idx$4 < (Bindable_this.i.length | 0)) && (Bindable_this.i[idx$4] !== null))) {
    var BufferBinding_this = Bindable_this.i[idx$4];
    BufferBinding_this.E.A(BufferBinding_this.j, \u03b4scrutinee238);
    var $x_2 = BufferBinding_this.D.queue;
    var $x_1 = BufferBinding_this.B;
    var s$proxy7 = BufferBinding_this.j;
    $x_2.writeBuffer($x_1, 0.0, s$proxy7.dv.buffer);
  } else {
    var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy1 = Bindable_this.c4.g;
    var buffer = new ArrayBuffer(4);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), device$proxy1, uv);
    b.E.A(b.j, \u03b4scrutinee238);
    var $x_4 = b.D.queue;
    var $x_3 = b.B;
    var s$proxy8 = b.j;
    $x_4.writeBuffer($x_3, 0.0, s$proxy8.dv.buffer);
    while (((Bindable_this.i.length | 0) <= idx$4)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx$4] = b;
  }
  Bindable_this.P = null;
  var \u03b4scrutinee263 = e5$proxy1.t;
  var idx$5 = (Bindable_this.C.F.res | 0);
  while (((Bindable_this.i.length | 0) <= idx$5)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$5] = \u03b4scrutinee263;
  Bindable_this.P = null;
  var \u03b4scrutinee289 = e6$proxy1.t;
  var idx$6 = (Bindable_this.C.F.visHeight | 0);
  while (((Bindable_this.i.length | 0) <= idx$6)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$6] = \u03b4scrutinee289;
  Bindable_this.P = null;
  var \u03b4scrutinee321 = e7$proxy1.t;
  var idx$7 = (Bindable_this.C.F.samp | 0);
  while (((Bindable_this.i.length | 0) <= idx$7)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$7] = \u03b4scrutinee321;
  Bindable_this.P = null;
  return Bindable_this;
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
}
$p = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
/** @constructor */
function $h_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
}
$h_Lsketchlib_utils_mirror_GaussianMirrorReflection$.prototype = $p;
$p.p3 = (function(p, camera, shapes, vpName, alphaScale, mirror, blurStrength, blurRatioVertical, strengthOffset, scaleFactor, resolutionScale, overscan, clearColor) {
  if (((scaleFactor <= 0.0) || (scaleFactor >= 1.0))) {
    var message$proxy1 = (("GaussianMirrorReflection scaleFactor must be in (0, 1) " + ("(got " + scaleFactor)) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aO;
  }
  if ((resolutionScale <= 0.0)) {
    var message$proxy2 = (("GaussianMirrorReflection resolutionScale must be > 0 " + ("(got " + resolutionScale)) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy2)).aO;
  }
  if ((overscan < 0.0)) {
    var message$proxy3 = (("GaussianMirrorReflection overscan must be >= 0 (got " + overscan) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy3)).aO;
  }
  var p$proxy1 = (1.0 / (1.0 - (scaleFactor * scaleFactor)));
  var cascadeGain = (+Math.sqrt(p$proxy1));
  var sigmaPerDir = (1.64 * cascadeGain);
  var strengthScale = (0.01 / sigmaPerDir);
  var reflMat = mirror.r1();
  var pn = mirror.hz;
  var pd = mirror.hy;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.av;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var uVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.g, uv$proxy1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy2 = ul$proxy2.av;
  var buffer$2 = new ArrayBuffer(64);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var uInvVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.g, uv$proxy2);
  var value$proxy1 = (blurStrength * strengthScale);
  var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy3 = ul$proxy3.av;
  var buffer$3 = new ArrayBuffer(4);
  var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p.g, uv$proxy3);
  b.E.A(b.j, value$proxy1);
  var $x_2 = b.D.queue;
  var $x_1 = b.B;
  var s$proxy1 = b.j;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy4 = ul$proxy4.av;
  var buffer$4 = new ArrayBuffer(4);
  var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p.g, uv$proxy4);
  b$2.E.A(b$2.j, blurRatioVertical);
  var $x_4 = b$2.D.queue;
  var $x_3 = b$2.B;
  var s$proxy2 = b$2.j;
  $x_4.writeBuffer($x_3, 0.0, s$proxy2.dv.buffer);
  var ul$proxy5 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy5 = ul$proxy5.av;
  var buffer$5 = new ArrayBuffer(4);
  var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
  var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), p.g, uv$proxy5);
  b$3.E.A(b$3.j, strengthOffset);
  var $x_6 = b$3.D.queue;
  var $x_5 = b$3.B;
  var s$proxy3 = b$3.j;
  $x_6.writeBuffer($x_5, 0.0, s$proxy3.dv.buffer);
  var ul$proxy6 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$());
  var uv$proxy6 = ul$proxy6.av;
  var buffer$6 = new ArrayBuffer(8);
  var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
  var uRes = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), p.g, uv$proxy6);
  var ul$proxy7 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy7 = ul$proxy7.av;
  var buffer$7 = new ArrayBuffer(4);
  var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
  var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), p.g, uv$proxy7);
  b$4.E.A(b$4.j, 0.0);
  var $x_8 = b$4.D.queue;
  var $x_7 = b$4.B;
  var s$proxy4 = b$4.j;
  $x_8.writeBuffer($x_7, 0.0, s$proxy4.dv.buffer);
  var value$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec4(1.0, 1.0, 0.0, 0.0);
  var ul$proxy8 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$());
  var uv$proxy8 = ul$proxy8.av;
  var buffer$8 = new ArrayBuffer(16);
  var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
  var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), p.g, uv$proxy8);
  b$5.E.A(b$5.j, value$proxy2);
  var $x_10 = b$5.D.queue;
  var $x_9 = b$5.B;
  var s$proxy5 = b$5.j;
  $x_10.writeBuffer($x_9, 0.0, s$proxy5.dv.buffer);
  var sampler = p.io();
  var mirrorPanel = p.bB((void 0), (void 0), clearColor, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes, (void 0), (void 0));
  var dict$proxy1 = mirrorPanel.hL;
  dict$proxy1[vpName] = uVp;
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg;
  try {
    var uv$8 = ctx.a5.l("uv");
    var d$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("d");
    var ndc = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("ndc");
    var worldH = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldH");
    var worldPos = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldPos");
    var t = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("t");
    var x0 = d$1.an($m_Ltrivalibs_graphics_math_gpu_expr$package$().pr($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().c6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hb(ctx.h3))));
    var $x_13 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
    var $x_12 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aS(uv$8), 2.0), 1.0);
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ak(uv$8), 2.0);
    var x1 = ndc.an($x_13.bc($x_12, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(1.0)) + " - ") + e$proxy1.e) + ")")), d$1));
    var x2 = worldH.an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hc(ctx.N.l("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ge(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ab(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x3 = worldPos.an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().pt($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gi(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ju(worldH)));
    var x4 = t.an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ga($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().kS($m_Ltrivalibs_graphics_math_gpu_vec3$().bc($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(pn.x), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(pn.I), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(pn.y)), worldPos), pd), alphaScale)));
    var AssignTarget_this = ctx.am.a2("color");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().ab($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gi($m_Ltrivalibs_graphics_math_gpu_expr$package$().jk($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().c6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hb(ctx.h3)))), t);
    var $x_11 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, x2, x3, x4, (((("  " + AssignTarget_this.T) + " = ") + value$proxy3.e) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev;
  }
  program.a8 = $x_11;
  var array$1 = reg.a3;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var b$1 = program.a8;
  var helperFns$proxy1 = program.ao();
  var id = p.s;
  p.s = ((1 + p.s) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []);
  var dict = ({});
  var i$1 = 0;
  while ((i$1 < (names.length | 0))) {
    dict[names[i$1]] = i$1;
    i$1 = ((1 + i$1) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["col"], $m_sjs_js_ArrayOpsCommon$().a(["depth"], []));
  var dict$2 = ({});
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    dict$2[names$2[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).R.v()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a7, sd.a6, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
  var args$proxy1 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().aq(args$proxy1));
  var module = p.g.createShaderModule(({
    "code": wgsl
  }));
  var $x_15 = $m_sjs_js_ArrayOpsCommon$();
  var $x_14 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var descriptors = $x_15.a([$x_14.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$3 = 0;
  while ((i$3 < len$1)) {
    var x0$2 = descriptors[i$3];
    (result.push(p.g.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$3 = ((1 + i$3) | 0);
  }
  var \u03b46$___1 = result;
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, result);
  var bgls$2 = \u03b46$___1;
  var $x_17 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({});
  var $x_16 = $m_sjs_js_ArrayOpsCommon$();
  var _2$2 = ({
    "sampleType": "depth"
  });
  var entries = $x_17.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$1
  })], $x_16.a([({
    "binding": 1,
    "visibility": 2,
    "texture": _2$2
  })], []));
  var panelBgl = p.g.createBindGroupLayout(({
    "entries": entries
  }));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, allBgls);
  var bakeShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var blurShadeH = $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade(this, p, false);
  var blurShadeV = $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurShade$1__Ltrivalibs_graphics_painter_Painter__Z__Ltrivalibs_graphics_painter_Shade(this, p, true);
  var Bindable_this = p.bA(bakeShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("col", mirrorPanel);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", mirrorPanel.pa(0, (-1), true));
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", uInvVp);
  var \u03b4scrutinee168 = e1$proxy1.t;
  var idx = (Bindable_this.C.aA.col | 0);
  while (((Bindable_this.U.length | 0) <= idx)) {
    Bindable_this.U.push(null);
  }
  Bindable_this.U[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee168);
  Bindable_this.P = null;
  var \u03b4scrutinee178 = e2$proxy1.t;
  var idx$2 = (Bindable_this.C.aA.depth | 0);
  while (((Bindable_this.U.length | 0) <= idx$2)) {
    Bindable_this.U.push(null);
  }
  Bindable_this.U[idx$2] = \u03b4scrutinee178;
  Bindable_this.P = null;
  var \u03b4scrutinee182 = e3$proxy1.t;
  var idx$3 = (Bindable_this.C.F.invVp | 0);
  while (((Bindable_this.i.length | 0) <= idx$3)) {
    Bindable_this.i.push(null);
  }
  Bindable_this.i[idx$3] = \u03b4scrutinee182;
  Bindable_this.P = null;
  var pairCache = [];
  var cachedScale = new $c_sr_DoubleRef(1.0);
  var blurPanel = p.bB((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), (void 0));
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$2 = ({});
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$1;
  try {
    var $x_19 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().gd();
    var AssignTarget_this$1 = ctx$1.am.a2("color");
    var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().oA($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().oW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().qL(ctx$1.a5.l("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().hb(ctx$1.N.l("crop"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().rL(ctx$1.N.l("crop"))), ctx$1.N.l("samp"));
    var $x_18 = $x_19.h((((("  " + AssignTarget_this$1.T) + " = ") + value$proxy6.e) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$1;
  }
  program$2.a8 = $x_18;
  var array$18 = reg$1.a3;
  var len$2 = (array$18.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$18[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$6 = program$2.a8;
  var helperFns$proxy3 = program$2.ao();
  var id$2 = p.s;
  p.s = ((1 + p.s) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$3 = ({});
  var i$3$1 = 0;
  while ((i$3$1 < (names$4.length | 0))) {
    dict$3[names$4[i$3$1]] = i$3$1;
    i$3$1 = ((1 + i$3$1) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = ({});
  var i$4$1 = 0;
  while ((i$4$1 < (names$5.length | 0))) {
    dict$4[names$5[i$4$1]] = i$4$1;
    i$4$1 = ((1 + i$4$1) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$6, helperFns$proxy3);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["crop"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a7, sd$2.a6, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().aq(args$proxy3));
  var module$2 = p.g.createShaderModule(({
    "code": wgsl$2
  }));
  var $x_22 = $m_sjs_js_ArrayOpsCommon$();
  var $x_21 = $m_sjs_js_ArrayOpsCommon$();
  var _2$3 = ({
    "type": "uniform"
  });
  var $x_20 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({});
  var descriptors$2 = $x_22.a([$x_21.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$3
  })], $x_20.a([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$4
  })], []))], []);
  var result$2 = [];
  var len$3 = (descriptors$2.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    var x0$4 = descriptors$2[i$5];
    (result$2.push(p.g.createBindGroupLayout(({
      "entries": x0$4
    }))) | 0);
    i$5 = ((1 + i$5) | 0);
  }
  var \u03b46$$2___1 = result$2;
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, result$2);
  var bgls$4 = \u03b46$$2___1;
  var $x_23 = $m_sjs_js_ArrayOpsCommon$();
  var _2$5 = ({});
  var entries$2 = $x_23.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$5
  })], []);
  var panelBgl$2 = p.g.createBindGroupLayout(({
    "entries": entries$2
  }));
  if ((panelBgl$2 !== null)) {
    var other$proxy3 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy3);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, allBgls$2);
  var cropShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  if ((overscan > 0.0)) {
    var Bindable_this$5 = p.bA(cropShade, (void 0), (void 0), (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", blurPanel);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("crop", b$5);
    var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee411 = e1$proxy3.t;
    var idx$4 = (Bindable_this$5.C.aA.tex | 0);
    while (((Bindable_this$5.U.length | 0) <= idx$4)) {
      Bindable_this$5.U.push(null);
    }
    Bindable_this$5.U[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee411);
    Bindable_this$5.P = null;
    var \u03b4scrutinee415 = e2$proxy3.t;
    var idx$5 = (Bindable_this$5.C.F.crop | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$5)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$5] = \u03b4scrutinee415;
    Bindable_this$5.P = null;
    var \u03b4scrutinee425 = e3$proxy3.t;
    var idx$6 = (Bindable_this$5.C.F.samp | 0);
    while (((Bindable_this$5.i.length | 0) <= idx$6)) {
      Bindable_this$5.i.push(null);
    }
    Bindable_this$5.i[idx$6] = \u03b4scrutinee425;
    Bindable_this$5.P = null;
    var layers$3 = [Bindable_this$5];
    var $x_24 = p.bB((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers$3);
  } else {
    var $x_24 = null;
  }
  return new $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1(mirrorPanel, $x_24, blurPanel, camera, blurStrength, blurRatioVertical, Bindable_this, pairCache, overscan, uRes, b$4, b$5, resolutionScale, b, strengthScale, b$2, b$3, reflMat, uVp, uInvVp, p, scaleFactor, blurShadeH, cachedScale, blurShadeV, sampler);
});
$p.rl = (function(strengthScale$1, scaleFactor$1, subResHeight, strength, ratio) {
  var pairs = 1;
  var reach = (((strength * strengthScale$1) * subResHeight) * (+Math.max(ratio, 1.0)));
  while ((reach > 1.0)) {
    reach = (reach * scaleFactor$1);
    pairs = ((1 + pairs) | 0);
  }
  return pairs;
});
$p.rk = (function(pairCache$1, blurShadeH$1, cachedScale$1, blurShadeV$1, scaleFactor$2, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, n) {
  while (((pairCache$1.length | 0) < (n << 1))) {
    pairCache$1.push($p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer(this, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, blurShadeH$1, cachedScale$1.gE));
    pairCache$1.push($p_Lsketchlib_utils_mirror_GaussianMirrorReflection$__blurLayer$1__Ltrivalibs_graphics_painter_Painter__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_buffers_BufferBinding__Ltrivalibs_graphics_painter_GPUSampler__Ltrivalibs_graphics_painter_Shade__D__Ltrivalibs_graphics_painter_Layer(this, p$3, uBlurStrength$2, uRatioVertical$2, uStrengthOffset$2, uRes$2, uVisHeight$2, sampler$2, blurShadeV$1, cachedScale$1.gE));
    cachedScale$1.gE = (cachedScale$1.gE * scaleFactor$2);
  }
});
var $d_Lsketchlib_utils_mirror_GaussianMirrorReflection$ = new $TypeData().i($c_Lsketchlib_utils_mirror_GaussianMirrorReflection$, "sketchlib.utils.mirror.GaussianMirrorReflection$", ({
  dw: 1
}));
var $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
function $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$() {
  if ((!$n_Lsketchlib_utils_mirror_GaussianMirrorReflection$)) {
    $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$ = new $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$();
  }
  return $n_Lsketchlib_utils_mirror_GaussianMirrorReflection$;
}
function $p_Lsketchlib_utils_room_BeamAtlas__band$1__D__D__D__D__T2($thiz, rowV0$1, rowH$1, fromWorld, thickWorld) {
  return $ct_T2__O__O__(new $c_T2(), (rowV0$1 + (rowH$1 * (fromWorld / $thiz.gG))), (rowV0$1 + (rowH$1 * ((fromWorld + thickWorld) / $thiz.gG))));
}
function $p_Lsketchlib_utils_room_BeamAtlas__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array($thiz, u1$1, dir$2, w, h, n, center, vb) {
  var f = ((pos$2, uv$2) => $ct_T2__O__O__(new $c_T2(), pos$2, new $c_Ltrivalibs_graphics_math_cpu_Vec2((uv$2.o * u1$1), ((+vb.a0()) + (uv$2.m * ((+vb.a1()) - (+vb.a0())))))));
  var uvAtPivot = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
  var n$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), n, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var uDir = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), dir$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$1, dir$2))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var uVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), uDir, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), w);
  var vVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), h);
  var tlPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), center, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), uVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.o)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), vVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.m));
  var trPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var blPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec);
  var brPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), blPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
  var $x_3 = f(tlPos, x1);
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
  var $x_2 = f(blPos, x1$1);
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
  var $x_1 = f(brPos, x1$2);
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
  return $x_4.bz($x_3, $x_2, $x_1, f(trPos, x1$3));
}
function $p_Lsketchlib_utils_room_BeamAtlas__facesOutOfPlan$1__Lsketchlib_utils_room_Boundary__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__Z($thiz, clip$1, centerXZ, n) {
  return (!$m_Lsketchlib_utils_room_Confine$package$().kR(clip$1, new $c_Ltrivalibs_graphics_math_cpu_Vec2((centerXZ.o + (0.01 * n.x)), (centerXZ.m + (0.01 * n.y)))));
}
/** @constructor */
function $c_Lsketchlib_utils_room_BeamAtlas(beams, clip) {
  this.hr = 0;
  this.gH = 0.0;
  this.bH = 0.0;
  this.gG = 0.0;
  this.jS = 0.0;
  this.mt = null;
  this.hr = (beams.length | 0);
  this.gH = beams[0].b6;
  this.bH = beams[0].bG;
  this.gG = (this.gH + (2.0 * this.bH));
  var m = 0.0;
  var i = 0;
  while ((i < (beams.length | 0))) {
    var l = $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec2$().pR(), beams[i].br, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$(), beams[i].bq));
    if ((l > m)) {
      m = l;
    }
    i = ((1 + i) | 0);
  }
  this.jS = m;
  var out = [];
  var i$2 = 0;
  while ((i$2 < (beams.length | 0))) {
    var b = beams[i$2];
    var dx = (b.br.o - b.bq.o);
    var dz = (b.br.m - b.bq.m);
    var p$proxy1 = ((dx * dx) + (dz * dz));
    var len = (+Math.sqrt(p$proxy1));
    var dir = new $c_Ltrivalibs_graphics_math_cpu_Vec3((dx / len), 0.0, (dz / len));
    var perp = new $c_Ltrivalibs_graphics_math_cpu_Vec3((-dir.y), 0.0, dir.x);
    var cx = (0.5 * (b.bq.o + b.br.o));
    var cz = (0.5 * (b.bq.m + b.br.m));
    var u1 = (len / this.jS);
    var rowV0 = (i$2 / this.hr);
    var rowH = (1.0 / this.hr);
    var midY = (b.fW + (0.5 * b.bG));
    var sideA = new $c_Ltrivalibs_graphics_math_cpu_Vec2((cx + (0.5 * (perp.x * b.b6))), (cz + (0.5 * (perp.y * b.b6))));
    if ((!$p_Lsketchlib_utils_room_BeamAtlas__facesOutOfPlan$1__Lsketchlib_utils_room_Boundary__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__Z(this, clip, sideA, perp))) {
      out.push($p_Lsketchlib_utils_room_BeamAtlas__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array(this, u1, dir, len, b.bG, perp, new $c_Ltrivalibs_graphics_math_cpu_Vec3(sideA.o, midY, sideA.m), $p_Lsketchlib_utils_room_BeamAtlas__band$1__D__D__D__D__T2(this, rowV0, rowH, 0.0, this.bH)));
    }
    out.push($p_Lsketchlib_utils_room_BeamAtlas__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array(this, u1, dir, len, b.b6, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), new $c_Ltrivalibs_graphics_math_cpu_Vec3(cx, b.fW, cz), $p_Lsketchlib_utils_room_BeamAtlas__band$1__D__D__D__D__T2(this, rowV0, rowH, this.bH, this.gH)));
    var sideB = new $c_Ltrivalibs_graphics_math_cpu_Vec2((cx - (0.5 * (perp.x * b.b6))), (cz - (0.5 * (perp.y * b.b6))));
    if ((!$p_Lsketchlib_utils_room_BeamAtlas__facesOutOfPlan$1__Lsketchlib_utils_room_Boundary__Ltrivalibs_graphics_math_cpu_Vec2__Ltrivalibs_graphics_math_cpu_Vec3__Z(this, clip, sideB, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), perp, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$())))) {
      out.push($p_Lsketchlib_utils_room_BeamAtlas__face$1__D__Ltrivalibs_graphics_math_cpu_Vec3__D__D__Ltrivalibs_graphics_math_cpu_Vec3__Ltrivalibs_graphics_math_cpu_Vec3__T2__sjs_js_Array(this, u1, dir, len, b.bG, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), perp, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), new $c_Ltrivalibs_graphics_math_cpu_Vec3(sideB.o, midY, sideB.m), $p_Lsketchlib_utils_room_BeamAtlas__band$1__D__D__D__D__T2(this, rowV0, rowH, (this.bH + this.gH), this.bH)));
    }
    i$2 = ((1 + i$2) | 0);
  }
  this.mt = out;
}
$p = $c_Lsketchlib_utils_room_BeamAtlas.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_BeamAtlas;
/** @constructor */
function $h_Lsketchlib_utils_room_BeamAtlas() {
}
$h_Lsketchlib_utils_room_BeamAtlas.prototype = $p;
$p.rs = (function(alongScale, crossScale) {
  var a = (this.gG * crossScale);
  var $x_1 = $m_RTLong$().jh((+Math.round(a)));
  var x_$_lo = $x_1.l;
  var x_$_hi = $x_1.h;
  var b = ((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0));
  var rowTexels = $doubleToInt((+Math.max(1.0, b)));
  return $ct_T2__O__O__(new $c_T2(), $doubleToInt((this.jS * alongScale)), Math.imul(this.hr, rowTexels));
});
$p.nO = (function(uv) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().kV($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ak(uv), this.hr)), this.gG);
});
$p.po = (function(uv) {
  var a = this.nO(uv);
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().c9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().c9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().c9(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb(a, this.bH))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb(a, (this.bH + this.gH)))), $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(this.gG)) + " - ") + a.e) + ")")));
});
$p.rm = (function(uv) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bb(this.nO(uv), (this.bH + (0.5 * this.gH))));
});
var $d_Lsketchlib_utils_room_BeamAtlas = new $TypeData().i($c_Lsketchlib_utils_room_BeamAtlas, "sketchlib.utils.room.BeamAtlas", ({
  dy: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Boundary(edges) {
  this.bX = null;
  this.bX = edges;
}
$p = $c_Lsketchlib_utils_room_Boundary.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Boundary;
/** @constructor */
function $h_Lsketchlib_utils_room_Boundary() {
}
$h_Lsketchlib_utils_room_Boundary.prototype = $p;
var $d_Lsketchlib_utils_room_Boundary = new $TypeData().i($c_Lsketchlib_utils_room_Boundary, "sketchlib.utils.room.Boundary", ({
  dz: 1
}));
function $p_Lsketchlib_utils_room_Boundary$__ringEdges__Lsketchlib_utils_room_Ring__sjs_js_Array($thiz, r) {
  var n = (r.bt.length | 0);
  var f$proxy1 = r.gN;
  var s = (f$proxy1 * (($thiz.rj(r.bt) < 0.0) ? (-1.0) : 1.0));
  var out = [];
  var i = 0;
  while ((i < n)) {
    var a = r.bt[i];
    var b = r.bt[((((1 + i) | 0) === n) ? 0 : ((1 + i) | 0))];
    var dx = (b.o - a.o);
    var dz = (b.m - a.m);
    var p$proxy2 = ((dx * dx) + (dz * dz));
    var len = (+Math.sqrt(p$proxy2));
    out.push(new $c_Lsketchlib_utils_room_Edge(a, b, new $c_Ltrivalibs_graphics_math_cpu_Vec2((((-dz) / len) * s), ((dx / len) * s))));
    i = ((1 + i) | 0);
  }
  return out;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Boundary$() {
}
$p = $c_Lsketchlib_utils_room_Boundary$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Boundary$;
/** @constructor */
function $h_Lsketchlib_utils_room_Boundary$() {
}
$h_Lsketchlib_utils_room_Boundary$.prototype = $p;
$p.nS = (function(rings) {
  var out = [];
  var i = 0;
  while ((i < (rings.length | 0))) {
    var es = $p_Lsketchlib_utils_room_Boundary$__ringEdges__Lsketchlib_utils_room_Ring__sjs_js_Array(this, rings[i]);
    var j = 0;
    while ((j < (es.length | 0))) {
      out.push(es[j]);
      j = ((1 + j) | 0);
    }
    i = ((1 + i) | 0);
  }
  return new $c_Lsketchlib_utils_room_Boundary(out);
});
$p.rj = (function(ps) {
  var n = (ps.length | 0);
  var acc = 0.0;
  var i = 0;
  while ((i < n)) {
    var a = ps[i];
    var b = ps[((((1 + i) | 0) === n) ? 0 : ((1 + i) | 0))];
    acc = (acc + ((a.o * b.m) - (b.o * a.m)));
    i = ((1 + i) | 0);
  }
  return acc;
});
var $d_Lsketchlib_utils_room_Boundary$ = new $TypeData().i($c_Lsketchlib_utils_room_Boundary$, "sketchlib.utils.room.Boundary$", ({
  dA: 1
}));
var $n_Lsketchlib_utils_room_Boundary$;
function $m_Lsketchlib_utils_room_Boundary$() {
  if ((!$n_Lsketchlib_utils_room_Boundary$)) {
    $n_Lsketchlib_utils_room_Boundary$ = new $c_Lsketchlib_utils_room_Boundary$();
  }
  return $n_Lsketchlib_utils_room_Boundary$;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Confine$package$() {
}
$p = $c_Lsketchlib_utils_room_Confine$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Confine$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Confine$package$() {
}
$h_Lsketchlib_utils_room_Confine$package$.prototype = $p;
$p.qM = (function(bnd, pxz) {
  var edges = bnd.bX;
  var bestD = Infinity;
  var qx = 0.0;
  var qz = 0.0;
  var nx = 0.0;
  var nz = 0.0;
  var i = 0;
  while ((i < (edges.length | 0))) {
    var e = edges[i];
    var ex = (e.aD.o - e.Z.o);
    var ez = (e.aD.m - e.Z.m);
    var t = ((((pxz.o - e.Z.o) * ex) + ((pxz.m - e.Z.m) * ez)) / ((ex * ex) + (ez * ez)));
    if ((t < 0.0)) {
      t = 0.0;
    } else if ((t > 1.0)) {
      t = 1.0;
    }
    var cx = (e.Z.o + (ex * t));
    var cz = (e.Z.m + (ez * t));
    var dx = (pxz.o - cx);
    var dz = (pxz.m - cz);
    var p$proxy1 = ((dx * dx) + (dz * dz));
    var d = (+Math.sqrt(p$proxy1));
    if ((d < bestD)) {
      bestD = d;
      qx = cx;
      qz = cz;
      nx = e.bY.o;
      nz = e.bY.m;
    }
    i = ((1 + i) | 0);
  }
  return new $c_T3(new $c_Ltrivalibs_graphics_math_cpu_Vec2(qx, qz), bestD, new $c_Ltrivalibs_graphics_math_cpu_Vec2(nx, nz));
});
$p.kR = (function(bnd, pxz) {
  var edges = bnd.bX;
  var inside = false;
  var i = 0;
  while ((i < (edges.length | 0))) {
    var a = edges[i].Z;
    var b = edges[i].aD;
    if (((a.m > pxz.m) !== (b.m > pxz.m))) {
      var t = ((pxz.m - a.m) / (b.m - a.m));
      if ((pxz.o < (a.o + (t * (b.o - a.o))))) {
        inside = (!inside);
      }
    }
    i = ((1 + i) | 0);
  }
  return inside;
});
$p.nX = (function(bnd, pxz, margin) {
  var nb = $m_Lsketchlib_utils_room_Confine$package$().qM(bnd, pxz);
  if (((!$m_Lsketchlib_utils_room_Confine$package$().kR(bnd, pxz)) || ((+nb.aU) < 1.0E-9))) {
    return new $c_Ltrivalibs_graphics_math_cpu_Vec2((nb.aK.o + (nb.b3.o * margin)), (nb.aK.m + (nb.b3.m * margin)));
  } else if (((+nb.aU) < margin)) {
    var s = (margin / (+nb.aU));
    return new $c_Ltrivalibs_graphics_math_cpu_Vec2((nb.aK.o + ((pxz.o - nb.aK.o) * s)), (nb.aK.m + ((pxz.m - nb.aK.m) * s)));
  } else {
    return pxz;
  }
});
$p.pl = (function(bnd, pos, margin, eyeY) {
  var once = $m_Lsketchlib_utils_room_Confine$package$().nX(bnd, new $c_Ltrivalibs_graphics_math_cpu_Vec2(pos.x, pos.y), margin);
  var twice = $m_Lsketchlib_utils_room_Confine$package$().nX(bnd, once, margin);
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(twice.o, eyeY, twice.m);
});
var $d_Lsketchlib_utils_room_Confine$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Confine$package$, "sketchlib.utils.room.Confine$package$", ({
  dB: 1
}));
var $n_Lsketchlib_utils_room_Confine$package$;
function $m_Lsketchlib_utils_room_Confine$package$() {
  if ((!$n_Lsketchlib_utils_room_Confine$package$)) {
    $n_Lsketchlib_utils_room_Confine$package$ = new $c_Lsketchlib_utils_room_Confine$package$();
  }
  return $n_Lsketchlib_utils_room_Confine$package$;
}
function $p_Lsketchlib_utils_room_Fields$package$__segDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketchlib_utils_room_Edge__Ltrivalibs_graphics_math_gpu_Expr($thiz, pxz$1, e) {
  var ex = (e.aD.o - e.Z.o);
  var ez = (e.aD.m - e.Z.m);
  var eLenSq = ((ex * ex) + (ez * ez));
  var ev = $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().l7(new $c_Ltrivalibs_graphics_math_cpu_Vec2(ex, ez));
  var w = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().l5(pxz$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().l7(e.Z));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().kX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().l5(w, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().qJ(ev, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().jf($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ga($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().kS(w, ev), eLenSq)))));
}
function $p_Lsketchlib_utils_room_Fields$package$__vDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketchlib_utils_room_Edge__Ltrivalibs_graphics_math_gpu_Expr($thiz, pxz$2, e) {
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().kX($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().l5(pxz$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$(), $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().l7(e.Z)));
}
/** @constructor */
function $c_Lsketchlib_utils_room_Fields$package$() {
}
$p = $c_Lsketchlib_utils_room_Fields$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Fields$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Fields$package$() {
}
$h_Lsketchlib_utils_room_Fields$package$.prototype = $p;
$p.kT = (function(pxz, bnd) {
  var edges = bnd.bX;
  var acc = $p_Lsketchlib_utils_room_Fields$package$__segDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketchlib_utils_room_Edge__Ltrivalibs_graphics_math_gpu_Expr(this, pxz, edges[0]);
  var i = 1;
  while ((i < (edges.length | 0))) {
    acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().c9(acc, $p_Lsketchlib_utils_room_Fields$package$__segDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketchlib_utils_room_Edge__Ltrivalibs_graphics_math_gpu_Expr(this, pxz, edges[i]));
    i = ((1 + i) | 0);
  }
  return acc;
});
$p.pm = (function(pxz, bnd) {
  var edges = bnd.bX;
  var acc = $p_Lsketchlib_utils_room_Fields$package$__vDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketchlib_utils_room_Edge__Ltrivalibs_graphics_math_gpu_Expr(this, pxz, edges[0]);
  var i = 1;
  while ((i < (edges.length | 0))) {
    acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().c9(acc, $p_Lsketchlib_utils_room_Fields$package$__vDist$1__Ltrivalibs_graphics_math_gpu_Expr__Lsketchlib_utils_room_Edge__Ltrivalibs_graphics_math_gpu_Expr(this, pxz, edges[i]));
    i = ((1 + i) | 0);
  }
  return acc;
});
$p.o3 = (function(wp, normal, bnd, topY) {
  var isHoriz = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gb($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(normal));
  var plan = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Lsketchlib_utils_room_Fields$package$().kT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jt(wp), bnd), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(1.0)) + " - ") + isHoriz.e) + ")")), 1000.0));
  var vert = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().c9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bN(topY, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$().ak(wp))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L(isHoriz, 1000.0));
  var corner = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Lsketchlib_utils_room_Fields$package$().pm($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jt(wp), bnd), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L(isHoriz, 1000.0));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().c9($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().c9(plan, vert), corner);
});
var $d_Lsketchlib_utils_room_Fields$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Fields$package$, "sketchlib.utils.room.Fields$package$", ({
  dC: 1
}));
var $n_Lsketchlib_utils_room_Fields$package$;
function $m_Lsketchlib_utils_room_Fields$package$() {
  if ((!$n_Lsketchlib_utils_room_Fields$package$)) {
    $n_Lsketchlib_utils_room_Fields$package$ = new $c_Lsketchlib_utils_room_Fields$package$();
  }
  return $n_Lsketchlib_utils_room_Fields$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Hanging(p, fadeWorld, strength, dropMul, botFadeMul) {
  this.b7 = null;
  this.jT = 0.0;
  this.jU = 0.0;
  this.mv = null;
  this.mu = null;
  this.mw = null;
  this.b7 = p;
  this.jT = fadeWorld;
  this.jU = strength;
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg;
  try {
    var AssignTarget_this = ctx.b8.a2("uv");
    var value$proxy1 = ctx.bx.l("uv");
    var x0 = (((("  " + AssignTarget_this.T) + " = ") + value$proxy1.e) + ";");
    var AssignTarget_this$2 = ctx.b8.hP;
    var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().hc($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().qD(ctx.hO.l("vp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ge(), ctx.hO.l("model")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ge(), $m_Ltrivalibs_graphics_math_gpu_vec4$().ab(ctx.bx.l("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, (((("  " + AssignTarget_this$2.T) + " = ") + value$proxy2.e) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev;
  }
  program.b0 = $x_1;
  var array$1 = reg.a3;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var d$2 = ({});
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$2;
  try {
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().gd();
    var AssignTarget_this$1 = ctx$2.am.a2("color");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().bc($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "img"), ctx$2.a5.l("uv"), ctx$2.N.l("samp"));
    var $x_2 = $x_3.h((((("  " + AssignTarget_this$1.T) + " = ") + value$proxy3.e) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$2;
  }
  program.aE = $x_2;
  var array$2 = reg$2.a3;
  var len$1 = (array$2.length | 0);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$2[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
  var b = program.b0;
  var b$1 = program.aE;
  var helperFns$proxy1 = program.ao();
  var id = p.s;
  p.s = ((1 + p.s) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
  var dict = ({});
  var i$2 = 0;
  while ((i$2 < (names.length | 0))) {
    dict[names[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["img"], []);
  var dict$2 = ({});
  var i$2$1 = 0;
  while ((i$2$1 < (names$2.length | 0))) {
    dict$2[names$2[i$2$1]] = i$2$1;
    i$2$1 = ((1 + i$2$1) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["vp"], $m_sjs_js_ArrayOpsCommon$().a(["model"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bw.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).bw.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], []))));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a7, sd.a6, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var img: texture_2d<f32>;");
  var args$proxy1 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().aq(args$proxy1));
  var module = p.g.createShaderModule(({
    "code": wgsl
  }));
  var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
  var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
  var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
  var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
  var attributes = [];
  var i$3 = 0;
  while ((i$3 < (formats.length | 0))) {
    var value$2 = i$3;
    var value$3 = (offsets[i$3] | 0);
    var s = formats[i$3];
    attributes.push(({
      "shaderLocation": value$2,
      "offset": value$3,
      "format": s
    }));
    i$3 = ((1 + i$3) | 0);
  }
  var vbl = ({
    "arrayStride": stride,
    "attributes": attributes
  });
  var $x_7 = $m_sjs_js_ArrayOpsCommon$();
  var $x_6 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var $x_5 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({
    "type": "uniform"
  });
  var $x_4 = $m_sjs_js_ArrayOpsCommon$();
  var _2$2 = ({});
  var descriptors = $x_7.a([$x_6.a([({
    "binding": 0,
    "visibility": 1,
    "buffer": _2
  })], $x_5.a([({
    "binding": 1,
    "visibility": 1,
    "buffer": _2$1
  })], $x_4.a([({
    "binding": 2,
    "visibility": 2,
    "sampler": _2$2
  })], [])))], []);
  var result = [];
  var len$2 = (descriptors.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    var x0$3 = descriptors[i$4];
    (result.push(p.g.createBindGroupLayout(({
      "entries": x0$3
    }))) | 0);
    i$4 = ((1 + i$4) | 0);
  }
  var \u03b42$___1 = result;
  var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, result);
  var bgls$2 = \u03b42$___1;
  var $x_8 = $m_sjs_js_ArrayOpsCommon$();
  var _2$3 = ({});
  var entries = $x_8.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$3
  })], []);
  var panelBgl = p.g.createBindGroupLayout(({
    "entries": entries
  }));
  if ((panelBgl !== null)) {
    var other$proxy1 = [panelBgl];
    var allBgls = bgls$2.concat(other$proxy1);
  } else {
    var allBgls = bgls$2;
  }
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, allBgls);
  this.mv = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$1 = ({});
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$1;
  try {
    var $x_10 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().gd();
    var AssignTarget_this$3 = ctx$1.am.a2("color");
    var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().bc($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$1.a5.l("uv"), ctx$1.N.l("samp"));
    var $x_9 = $x_10.h((((("  " + AssignTarget_this$3.T) + " = ") + value$proxy4.e) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$1;
  }
  program$2.a8 = $x_9;
  var array$34 = reg$1.a3;
  var len$3 = (array$34.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$34[i$5]);
    i$5 = ((1 + i$5) | 0);
  }
  var b$2 = program$2.a8;
  var helperFns$proxy2 = program$2.ao();
  var id$2 = p.s;
  p.s = ((1 + p.s) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
  var dict$3 = ({});
  var i$4$1 = 0;
  while ((i$4$1 < (names$4.length | 0))) {
    dict$3[names$4[i$4$1]] = i$4$1;
    i$4$1 = ((1 + i$4$1) | 0);
  }
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$4 = ({});
  var i$5$1 = 0;
  while ((i$5$1 < (names$5.length | 0))) {
    dict$4[names$5[i$5$1]] = i$5$1;
    i$5$1 = ((1 + i$5$1) | 0);
  }
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$2, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).R.v()], []));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a7, sd$2.a6, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().aq(args$proxy2));
  var module$2 = p.g.createShaderModule(({
    "code": wgsl$2
  }));
  var $x_12 = $m_sjs_js_ArrayOpsCommon$();
  var $x_11 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({});
  var descriptors$2 = $x_12.a([$x_11.a([({
    "binding": 0,
    "visibility": 2,
    "sampler": _2$4
  })], [])], []);
  var result$2 = [];
  var len$4 = (descriptors$2.length | 0);
  var i$6 = 0;
  while ((i$6 < len$4)) {
    var x0$5 = descriptors$2[i$6];
    (result$2.push(p.g.createBindGroupLayout(({
      "entries": x0$5
    }))) | 0);
    i$6 = ((1 + i$6) | 0);
  }
  var \u03b46$___1 = result$2;
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, result$2);
  var bgls$4 = \u03b46$___1;
  var $x_13 = $m_sjs_js_ArrayOpsCommon$();
  var _2$5 = ({});
  var entries$2 = $x_13.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$5
  })], []);
  var panelBgl$2 = p.g.createBindGroupLayout(({
    "entries": entries$2
  }));
  if ((panelBgl$2 !== null)) {
    var other$proxy2 = [panelBgl$2];
    var allBgls$2 = bgls$4.concat(other$proxy2);
  } else {
    var allBgls$2 = bgls$4;
  }
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, allBgls$2);
  this.mu = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var program$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$3 = ({});
  var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = reg$3;
  try {
    var sm = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("sm");
    var x0$6 = sm.an($m_Lsketchlib_utils_room_Hanging$package$().rh(ctx$3.a5.l("uv"), ctx$3.N.l("rect"), ctx$3.N.l("fade"), dropMul, botFadeMul));
    var AssignTarget_this$4 = ctx$3.am.a2("color");
    var $x_16 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_15 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b2(ctx$3.N.l("strength"), sm);
    var value$proxy5 = $x_16.ab($x_15.c6($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aI().aJ((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(1.0)) + " - ") + e$proxy1.e) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
    var $x_14 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$6, (((("  " + AssignTarget_this$4.T) + " = ") + value$proxy5.e) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().n = prev$3;
  }
  program$3.a8 = $x_14;
  var array$50 = reg$3.a3;
  var len$5 = (array$50.length | 0);
  var i$7 = 0;
  while ((i$7 < len$5)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$3, array$50[i$7]);
    i$7 = ((1 + i$7) | 0);
  }
  var b$3 = program$3.a8;
  var helperFns$proxy3 = program$3.ao();
  var id$3 = p.s;
  p.s = ((1 + p.s) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["rect"], $m_sjs_js_ArrayOpsCommon$().a(["fade"], $m_sjs_js_ArrayOpsCommon$().a(["strength"], [])));
  var dict$5 = ({});
  var i$6$1 = 0;
  while ((i$6$1 < (names$7.length | 0))) {
    dict$5[names$7[i$6$1]] = i$6$1;
    i$6$1 = ((1 + i$6$1) | 0);
  }
  var names$8 = [];
  var dict$6 = ({});
  var i$7$1 = 0;
  while ((i$7$1 < (names$8.length | 0))) {
    dict$6[names$8[i$7$1]] = i$7$1;
    i$7$1 = ((1 + i$7$1) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["rect"], $m_sjs_js_ArrayOpsCommon$().a(["fade"], $m_sjs_js_ArrayOpsCommon$().a(["strength"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$()).R.v()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).R.v()], []))));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a7, sd$3.a6, fragBuiltinParams$3);
  var args$proxy3 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([baseWgsl$3]));
  console.log(...$m_sjsr_Compat$().aq(args$proxy3));
  var module$3 = p.g.createShaderModule(({
    "code": baseWgsl$3
  }));
  var $x_20 = $m_sjs_js_ArrayOpsCommon$();
  var $x_19 = $m_sjs_js_ArrayOpsCommon$();
  var _2$6 = ({
    "type": "uniform"
  });
  var $x_18 = $m_sjs_js_ArrayOpsCommon$();
  var _2$7 = ({
    "type": "uniform"
  });
  var $x_17 = $m_sjs_js_ArrayOpsCommon$();
  var _2$8 = ({
    "type": "uniform"
  });
  var descriptors$3 = $x_20.a([$x_19.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$6
  })], $x_18.a([({
    "binding": 1,
    "visibility": 2,
    "buffer": _2$7
  })], $x_17.a([({
    "binding": 2,
    "visibility": 2,
    "buffer": _2$8
  })], [])))], []);
  var result$3 = [];
  var len$6 = (descriptors$3.length | 0);
  var i$8 = 0;
  while ((i$8 < len$6)) {
    var x0$8 = descriptors$3[i$8];
    (result$3.push(p.g.createBindGroupLayout(({
      "entries": x0$8
    }))) | 0);
    i$8 = ((1 + i$8) | 0);
  }
  var \u03b46$$2___1 = result$3;
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, result$3);
  var bgls$6 = \u03b46$$2___1;
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().M(p.g, bgls$6);
  this.mw = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], null, pl$3, false, dict$5, dict$6);
}
$p = $c_Lsketchlib_utils_room_Hanging.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Hanging;
/** @constructor */
function $h_Lsketchlib_utils_room_Hanging() {
}
$h_Lsketchlib_utils_room_Hanging.prototype = $p;
$p.pS = (function(w, spec, centerFromLeft, centerHeight, shadowDim) {
  var pos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), $m_Lsketchlib_utils_room_Walls$package$().qU(w, centerFromLeft, centerHeight), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), w.bu, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), ((0.5 * spec.bK) + 0.02)));
  var Painter_this = this.b7;
  var value$proxy6 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().o8(pos, $m_Ltrivalibs_graphics_math_cpu_Quat$().o7($m_Lsketchlib_utils_room_Walls$package$().r9(w)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.av;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), Painter_this.g, uv$proxy1);
  b.E.A(b.j, value$proxy6);
  var $x_2 = b.D.queue;
  var $x_1 = b.B;
  var s$proxy1 = b.j;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var Bindable_this = this.b7.gf($m_Lsketchlib_utils_room_Hanging$package$().pK(spec, this.b7), this.mv, "none", (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", b);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", this.b7.io());
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("img", spec.gM);
  var \u03b4scrutinee213 = e1$proxy1.t;
  var idx = (Bindable_this.W.F.model | 0);
  while (((Bindable_this.J.length | 0) <= idx)) {
    Bindable_this.J.push(null);
  }
  Bindable_this.J[idx] = \u03b4scrutinee213;
  var \u03b4scrutinee227 = e2$proxy1.t;
  var idx$2 = (Bindable_this.W.F.samp | 0);
  while (((Bindable_this.J.length | 0) <= idx$2)) {
    Bindable_this.J.push(null);
  }
  Bindable_this.J[idx$2] = \u03b4scrutinee227;
  var \u03b4scrutinee247 = e3$proxy1.t;
  var idx$3 = (Bindable_this.W.aA.img | 0);
  while (((Bindable_this.a4.length | 0) <= idx$3)) {
    Bindable_this.a4.push(null);
  }
  Bindable_this.a4[idx$3] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee247);
  var baseRect = new $c_Ltrivalibs_graphics_math_cpu_Vec4((centerFromLeft / w.aP), (1.0 - (centerHeight / w.aX)), ((0.5 * spec.c0) / w.aP), ((0.5 * spec.bZ) / w.aX));
  var Painter_this$2 = this.b7;
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$());
  var uv$proxy2 = ul$proxy2.av;
  var buffer$2 = new ArrayBuffer(16);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), Painter_this$2.g, uv$proxy2);
  b$2.E.A(b$2.j, baseRect);
  var $x_4 = b$2.D.queue;
  var $x_3 = b$2.B;
  var s$proxy2 = b$2.j;
  $x_4.writeBuffer($x_3, 0.0, s$proxy2.dv.buffer);
  return new $c_Lsketchlib_utils_room_Painting(w, Bindable_this, b, b$2, new $c_Ltrivalibs_graphics_math_cpu_Vec2((this.jT / w.aP), (this.jT / w.aX)), (this.jU * ((shadowDim < 0.0) ? 0.0 : ((shadowDim > 1.0) ? 1.0 : shadowDim))), pos, baseRect);
});
$p.pi = (function(base, width, height, pieces) {
  if (((pieces.length | 0) === 0)) {
    return base;
  } else {
    var Bindable_this = this.b7.bA(this.mu, (void 0), (void 0), (void 0));
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", this.b7.io());
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", base);
    var \u03b4scrutinee251 = e1$proxy2.t;
    var idx = (Bindable_this.C.F.samp | 0);
    while (((Bindable_this.i.length | 0) <= idx)) {
      Bindable_this.i.push(null);
    }
    Bindable_this.i[idx] = \u03b4scrutinee251;
    Bindable_this.P = null;
    var \u03b4scrutinee263 = e2$proxy2.t;
    var idx$2 = (Bindable_this.C.aA.tex | 0);
    while (((Bindable_this.U.length | 0) <= idx$2)) {
      Bindable_this.U.push(null);
    }
    Bindable_this.U[idx$2] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee263);
    Bindable_this.P = null;
    var Bindable_this$4 = this.b7.bA(this.mw, $m_Ltrivalibs_graphics_painter_BlendState$().mZ, (void 0), (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("strength", this.jU);
    var \u03b4scrutinee271 = (+e1$proxy3.t);
    var idx$3 = (Bindable_this$4.C.F.strength | 0);
    if (((idx$3 < (Bindable_this$4.i.length | 0)) && (Bindable_this$4.i[idx$3] !== null))) {
      var BufferBinding_this = Bindable_this$4.i[idx$3];
      BufferBinding_this.E.A(BufferBinding_this.j, \u03b4scrutinee271);
      var $x_2 = BufferBinding_this.D.queue;
      var $x_1 = BufferBinding_this.B;
      var s$proxy3 = BufferBinding_this.j;
      $x_2.writeBuffer($x_1, 0.0, s$proxy3.dv.buffer);
    } else {
      var uv = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
      var device$proxy1 = Bindable_this$4.c4.g;
      var buffer = new ArrayBuffer(4);
      var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
      var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv);
      b.E.A(b.j, \u03b4scrutinee271);
      var $x_4 = b.D.queue;
      var $x_3 = b.B;
      var s$proxy4 = b.j;
      $x_4.writeBuffer($x_3, 0.0, s$proxy4.dv.buffer);
      while (((Bindable_this$4.i.length | 0) <= idx$3)) {
        Bindable_this$4.i.push(null);
      }
      Bindable_this$4.i[idx$3] = b;
    }
    Bindable_this$4.P = null;
    var i = 0;
    while ((i < (pieces.length | 0))) {
      var piece = pieces[i];
      var InstanceList_this = Bindable_this$4.iT;
      var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("rect", piece.gJ);
      var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("fade", piece.gI);
      var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("strength", piece.gK);
      var i$2 = InstanceList_this.oT();
      var Bindable_this$7 = InstanceList_this.g2[i$2];
      var \u03b4scrutinee286 = e1$proxy4.t;
      var idx$4 = (Bindable_this$7.iS.F.rect | 0);
      while (((Bindable_this$7.ae.length | 0) <= idx$4)) {
        Bindable_this$7.ae.push(null);
      }
      Bindable_this$7.ae[idx$4] = \u03b4scrutinee286;
      var \u03b4scrutinee296 = e2$proxy3.t;
      var idx$5 = (Bindable_this$7.iS.F.fade | 0);
      if (((idx$5 < (Bindable_this$7.ae.length | 0)) && (Bindable_this$7.ae[idx$5] !== null))) {
        var BufferBinding_this$5 = Bindable_this$7.ae[idx$5];
        BufferBinding_this$5.E.A(BufferBinding_this$5.j, \u03b4scrutinee296);
        var $x_6 = BufferBinding_this$5.D.queue;
        var $x_5 = BufferBinding_this$5.B;
        var s$proxy5 = BufferBinding_this$5.j;
        $x_6.writeBuffer($x_5, 0.0, s$proxy5.dv.buffer);
      } else {
        var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
        var device$proxy2 = Bindable_this$7.kj.g;
        var buffer$2 = new ArrayBuffer(8);
        var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
        var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), device$proxy2, uv$2);
        b$2.E.A(b$2.j, \u03b4scrutinee296);
        var $x_8 = b$2.D.queue;
        var $x_7 = b$2.B;
        var s$proxy6 = b$2.j;
        $x_8.writeBuffer($x_7, 0.0, s$proxy6.dv.buffer);
        while (((Bindable_this$7.ae.length | 0) <= idx$5)) {
          Bindable_this$7.ae.push(null);
        }
        Bindable_this$7.ae[idx$5] = b$2;
      }
      var \u03b4scrutinee311 = (+e3$proxy2.t);
      var idx$6 = (Bindable_this$7.iS.F.strength | 0);
      if (((idx$6 < (Bindable_this$7.ae.length | 0)) && (Bindable_this$7.ae[idx$6] !== null))) {
        var BufferBinding_this$9 = Bindable_this$7.ae[idx$6];
        BufferBinding_this$9.E.A(BufferBinding_this$9.j, \u03b4scrutinee311);
        var $x_10 = BufferBinding_this$9.D.queue;
        var $x_9 = BufferBinding_this$9.B;
        var s$proxy7 = BufferBinding_this$9.j;
        $x_10.writeBuffer($x_9, 0.0, s$proxy7.dv.buffer);
      } else {
        var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
        var device$proxy3 = Bindable_this$7.kj.g;
        var buffer$3 = new ArrayBuffer(4);
        var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
        var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), device$proxy3, uv$3);
        b$3.E.A(b$3.j, \u03b4scrutinee311);
        var $x_12 = b$3.D.queue;
        var $x_11 = b$3.B;
        var s$proxy8 = b$3.j;
        $x_12.writeBuffer($x_11, 0.0, s$proxy8.dv.buffer);
        while (((Bindable_this$7.ae.length | 0) <= idx$6)) {
          Bindable_this$7.ae.push(null);
        }
        Bindable_this$7.ae[idx$6] = b$3;
      }
      i = ((1 + i) | 0);
    }
    var layers$1 = [Bindable_this, Bindable_this$4];
    var panel = this.b7.bB(width, height, (void 0), (void 0), (void 0), (void 0), true, (void 0), (void 0), (void 0), (void 0), (void 0), layers$1);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(this.b7, panel);
    return panel;
  }
});
var $d_Lsketchlib_utils_room_Hanging = new $TypeData().i($c_Lsketchlib_utils_room_Hanging, "sketchlib.utils.room.Hanging", ({
  dD: 1
}));
function $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2($thiz, x, y, z, u, w) {
  return $ct_T2__O__O__(new $c_T2(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, w));
}
/** @constructor */
function $c_Lsketchlib_utils_room_Hanging$package$() {
}
$p = $c_Lsketchlib_utils_room_Hanging$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Hanging$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Hanging$package$() {
}
$h_Lsketchlib_utils_room_Hanging$package$.prototype = $p;
$p.rh = (function(uv, rect, fade, dropMul, botFadeMul) {
  var hx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().hf(rect);
  var hy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ju(rect);
  var dx = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aS(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().aS(rect));
  var dy = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ak(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$().ak(rect)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ak(fade), dropMul));
  var hMask = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bg($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gb(dx), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag(hx, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aS(fade), 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bN(hx, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aS(fade), 0.5)));
  var upperFade = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().aS(fade);
  var lowerFade = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$().ak(fade), botFadeMul);
  var upper = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bg(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().oF(hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L(upperFade, 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().oF(hy), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L(upperFade, 0.5)));
  var lower = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().bg(dy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().ag(hy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L(lowerFade, 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().bN(hy, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().L(lowerFade, 0.5)));
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().b2(hMask, upper), lower);
});
$p.pK = (function(spec, p) {
  var hw = (0.5 * spec.c0);
  var hh = (0.5 * spec.bZ);
  var hd = (0.5 * spec.bK);
  var p$proxy1 = (spec.bK / (spec.fX * spec.c0));
  var mu = ((p$proxy1 < 0.0) ? 0.0 : ((p$proxy1 > 0.45) ? 0.45 : p$proxy1));
  var p$proxy2 = (spec.bK / (spec.fX * spec.bZ));
  var mv = ((p$proxy2 < 0.0) ? 0.0 : ((p$proxy2 > 0.45) ? 0.45 : p$proxy2));
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().nR([$m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), 1.0, (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), 1.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), 0.0, (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), 0.0, mv)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, hd, mu, mv), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, hh, hd, (1.0 - mu), mv), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), (1.0 - mu), 0.0), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), mu, 0.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), hd, mu, (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), hd, (1.0 - mu), (1.0 - mv)), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), (1.0 - mu), 1.0), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), mu, 1.0)), $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), hh, (-hd), 0.0, 0.0), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, (-hw), (-hh), (-hd), 0.0, 1.0), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, (-hh), (-hd), 1.0, 1.0), $p_Lsketchlib_utils_room_Hanging$package$__v$1__D__D__D__D__D__T2(this, hw, hh, (-hd), 1.0, 0.0))], null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy1 = vl.jX.gh(v$3);
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.p(0);
    var value = nestedValues.p(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.p(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.p(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.p(1);
    var value$4 = nestedValues$2.p(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.p(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.ad.length | 0))) {
    var n = (mesh$proxy1.ad[fi].length | 0);
    vertexCount = ((vertexCount + n) | 0);
    if ((n === 4)) {
      hasQuads = true;
    }
    fi = ((1 + fi) | 0);
  }
  var count$proxy1 = vertexCount;
  var buffer = new ArrayBuffer(Math.imul(20, count$proxy1));
  var verts = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), count$proxy1);
  var vi = 0;
  if ((!hasQuads)) {
    fi = 0;
    while ((fi < (mesh$proxy1.ad.length | 0))) {
      var arr = mesh$proxy1.ad[fi];
      var si = 0;
      while ((si < (arr.length | 0))) {
        var x0 = arr[si];
        var index$proxy1 = vi;
        var offset$proxy6 = Math.imul(20, index$proxy1);
        var x1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy6);
        f(x0, x1);
        vi = ((1 + vi) | 0);
        si = ((1 + si) | 0);
      }
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, null);
  } else {
    var idxBuf = [];
    var base = 0;
    fi = 0;
    while ((fi < (mesh$proxy1.ad.length | 0))) {
      var arr$2 = mesh$proxy1.ad[fi];
      var n$2 = (arr$2.length | 0);
      var si$2 = 0;
      while ((si$2 < n$2)) {
        var x0$1 = arr$2[si$2];
        var index$proxy2 = vi;
        var offset$proxy7 = Math.imul(20, index$proxy2);
        var x1$1 = new ($a_Ltrivalibs_bufferdata_BufferView())(verts.dv, offset$proxy7);
        f(x0$1, x1$1);
        vi = ((1 + vi) | 0);
        si$2 = ((1 + si$2) | 0);
      }
      if ((n$2 === 3)) {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
      } else {
        idxBuf.push(base, ((1 + base) | 0), ((2 + base) | 0));
        idxBuf.push(base, ((2 + base) | 0), ((3 + base) | 0));
      }
      base = ((base + n$2) | 0);
      fi = ((1 + fi) | 0);
    }
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.ou(idxBuf, vertexCount));
  }
  return p.o6($x_1, (void 0), (void 0), (void 0), (void 0), (void 0));
});
var $d_Lsketchlib_utils_room_Hanging$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Hanging$package$, "sketchlib.utils.room.Hanging$package$", ({
  dE: 1
}));
var $n_Lsketchlib_utils_room_Hanging$package$;
function $m_Lsketchlib_utils_room_Hanging$package$() {
  if ((!$n_Lsketchlib_utils_room_Hanging$package$)) {
    $n_Lsketchlib_utils_room_Hanging$package$ = new $c_Lsketchlib_utils_room_Hanging$package$();
  }
  return $n_Lsketchlib_utils_room_Hanging$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Plan$package$() {
}
$p = $c_Lsketchlib_utils_room_Plan$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Plan$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Plan$package$() {
}
$h_Lsketchlib_utils_room_Plan$package$.prototype = $p;
$p.pg = (function(fp, roomHeight) {
  var rs = [];
  var i = 0;
  while ((i < (fp.bJ.length | 0))) {
    var r = fp.bJ[i];
    if ((r.gO >= roomHeight)) {
      rs.push(r);
    }
    i = ((1 + i) | 0);
  }
  return $m_Lsketchlib_utils_room_Boundary$().nS(rs);
});
$p.pc = (function(fp) {
  var minX = Infinity;
  var minZ = Infinity;
  var maxX = (-Infinity);
  var maxZ = (-Infinity);
  var i = 0;
  while ((i < (fp.bJ.length | 0))) {
    var ps = fp.bJ[i].bt;
    var j = 0;
    while ((j < (ps.length | 0))) {
      var p = ps[j];
      if ((p.o < minX)) {
        minX = p.o;
      }
      if ((p.o > maxX)) {
        maxX = p.o;
      }
      if ((p.m < minZ)) {
        minZ = p.m;
      }
      if ((p.m > maxZ)) {
        maxZ = p.m;
      }
      j = ((1 + j) | 0);
    }
    i = ((1 + i) | 0);
  }
  return new $c_T4(minX, minZ, maxX, maxZ);
});
$p.ph = (function(bnd, origin, dir) {
  var edges = bnd.bX;
  var ts = [];
  var i = 0;
  while ((i < (edges.length | 0))) {
    var e = edges[i];
    var ex = (e.aD.o - e.Z.o);
    var ez = (e.aD.m - e.Z.m);
    var det = ((ex * dir.m) - (ez * dir.o));
    if (((+Math.abs(det)) > 1.0E-12)) {
      var rx = (e.Z.o - origin.o);
      var rz = (e.Z.m - origin.m);
      var s = (((dir.o * rz) - (dir.m * rx)) / det);
      if (((s >= 0.0) && (s <= 1.0))) {
        ts.push((((ex * rz) - (ez * rx)) / det));
      }
    }
    i = ((1 + i) | 0);
  }
  var out = [];
  if (((ts.length | 0) < 2)) {
    return out;
  }
  var m = 1;
  while ((m < (ts.length | 0))) {
    var v = (+ts[m]);
    var q = ((m - 1) | 0);
    while (((q >= 0) && ((+ts[q]) > v))) {
      ts[((1 + q) | 0)] = ts[q];
      q = ((q - 1) | 0);
    }
    ts[((1 + q) | 0)] = v;
    m = ((1 + m) | 0);
  }
  var j = 0;
  while ((j < (((ts.length | 0) - 1) | 0))) {
    var t0 = (+ts[j]);
    var t1 = (+ts[((1 + j) | 0)]);
    var mid = (0.5 * (t0 + t1));
    if ((((t1 - t0) > 1.0E-9) && $m_Lsketchlib_utils_room_Confine$package$().kR(bnd, new $c_Ltrivalibs_graphics_math_cpu_Vec2((origin.o + (dir.o * mid)), (origin.m + (dir.m * mid)))))) {
      out.push(new $c_T2$mcDD$sp(t0, t1));
    }
    j = ((1 + j) | 0);
  }
  return out;
});
var $d_Lsketchlib_utils_room_Plan$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Plan$package$, "sketchlib.utils.room.Plan$package$", ({
  dF: 1
}));
var $n_Lsketchlib_utils_room_Plan$package$;
function $m_Lsketchlib_utils_room_Plan$package$() {
  if ((!$n_Lsketchlib_utils_room_Plan$package$)) {
    $n_Lsketchlib_utils_room_Plan$package$ = new $c_Lsketchlib_utils_room_Plan$package$();
  }
  return $n_Lsketchlib_utils_room_Plan$package$;
}
/** @constructor */
function $c_Lsketchlib_utils_room_Raster$package$() {
}
$p = $c_Lsketchlib_utils_room_Raster$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Raster$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Raster$package$() {
}
$h_Lsketchlib_utils_room_Raster$package$.prototype = $p;
$p.pF = (function(f, bnd, height, soffitY) {
  var edges = bnd.bX;
  var nx = (-f.aM.m);
  var nz = f.aM.o;
  var minO = Infinity;
  var maxO = (-Infinity);
  var i = 0;
  while ((i < (edges.length | 0))) {
    var o = ((edges[i].Z.o * nx) + (edges[i].Z.m * nz));
    if ((o < minO)) {
      minO = o;
    }
    if ((o > maxO)) {
      maxO = o;
    }
    i = ((1 + i) | 0);
  }
  var out = [];
  var a = ((minO - f.bI) / f.bs);
  var k = (+Math.ceil(a));
  var a$1 = ((maxO - f.bI) / f.bs);
  var kMax = (+Math.floor(a$1));
  while ((k <= kMax)) {
    var off = (f.bI + (k * f.bs));
    var origin = new $c_Ltrivalibs_graphics_math_cpu_Vec2((nx * off), (nz * off));
    var spans = $m_Lsketchlib_utils_room_Plan$package$().ph(bnd, origin, f.aM);
    var s = 0;
    while ((s < (spans.length | 0))) {
      var sp = spans[s];
      out.push(new $c_Lsketchlib_utils_room_Beam(new $c_Ltrivalibs_graphics_math_cpu_Vec2((origin.o + (f.aM.o * (+sp.a0()))), (origin.m + (f.aM.m * (+sp.a0())))), new $c_Ltrivalibs_graphics_math_cpu_Vec2((origin.o + (f.aM.o * (+sp.a1()))), (origin.m + (f.aM.m * (+sp.a1())))), f.bW, height, soffitY));
      s = ((1 + s) | 0);
    }
    k = (k + 1.0);
  }
  return out;
});
var $d_Lsketchlib_utils_room_Raster$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Raster$package$, "sketchlib.utils.room.Raster$package$", ({
  dG: 1
}));
var $n_Lsketchlib_utils_room_Raster$package$;
function $m_Lsketchlib_utils_room_Raster$package$() {
  if ((!$n_Lsketchlib_utils_room_Raster$package$)) {
    $n_Lsketchlib_utils_room_Raster$package$ = new $c_Lsketchlib_utils_room_Raster$package$();
  }
  return $n_Lsketchlib_utils_room_Raster$package$;
}
function $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2($thiz, y$1, x0$1, w$1, z1$1, d$1, x, z) {
  return $ct_T2__O__O__(new $c_T2(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y$1, z), new $c_Ltrivalibs_graphics_math_cpu_Vec2(((x - x0$1) / w$1), ((z1$1 - z) / d$1)));
}
/** @constructor */
function $c_Lsketchlib_utils_room_Surfaces$package$() {
}
$p = $c_Lsketchlib_utils_room_Surfaces$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Surfaces$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Surfaces$package$() {
}
$h_Lsketchlib_utils_room_Surfaces$package$.prototype = $p;
$p.ow = (function(bounds, y, faceUp, margin) {
  var x0 = ((+bounds.bC) - margin);
  var x1 = ((+bounds.bl) + margin);
  var z0 = ((+bounds.bk) - margin);
  var z1 = ((+bounds.bm) + margin);
  var w = (x1 - x0);
  var d = (z1 - z0);
  return (faceUp ? $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z0), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z1), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z1), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z0)) : $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z1), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x0, z0), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z0), $p_Lsketchlib_utils_room_Surfaces$package$__c$1__D__D__D__D__D__D__D__T2(this, y, x0, w, z1, d, x1, z1)));
});
var $d_Lsketchlib_utils_room_Surfaces$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Surfaces$package$, "sketchlib.utils.room.Surfaces$package$", ({
  dH: 1
}));
var $n_Lsketchlib_utils_room_Surfaces$package$;
function $m_Lsketchlib_utils_room_Surfaces$package$() {
  if ((!$n_Lsketchlib_utils_room_Surfaces$package$)) {
    $n_Lsketchlib_utils_room_Surfaces$package$ = new $c_Lsketchlib_utils_room_Surfaces$package$();
  }
  return $n_Lsketchlib_utils_room_Surfaces$package$;
}
function $p_Lsketchlib_utils_room_Walls$package$__corner$1__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2($thiz, w$1, right$1, su, sv, u, v) {
  return $ct_T2__O__O__(new $c_T2(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), w$1.fY, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), right$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (su * w$1.aP)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (0.5 * (sv * w$1.aX)))), new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
}
/** @constructor */
function $c_Lsketchlib_utils_room_Walls$package$() {
}
$p = $c_Lsketchlib_utils_room_Walls$package$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Walls$package$;
/** @constructor */
function $h_Lsketchlib_utils_room_Walls$package$() {
}
$h_Lsketchlib_utils_room_Walls$package$.prototype = $p;
$p.r9 = (function(w) {
  var y = w.bu.x;
  var x = w.bu.y;
  return (+Math.atan2(y, x));
});
$p.qZ = (function(w) {
  var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), w.bu);
  return $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().bz($p_Lsketchlib_utils_room_Walls$package$__corner$1__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2(this, w, right, (-1.0), 1.0, 0.0, 0.0), $p_Lsketchlib_utils_room_Walls$package$__corner$1__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2(this, w, right, (-1.0), (-1.0), 0.0, 1.0), $p_Lsketchlib_utils_room_Walls$package$__corner$1__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2(this, w, right, 1.0, (-1.0), 1.0, 1.0), $p_Lsketchlib_utils_room_Walls$package$__corner$1__Lsketchlib_utils_room_Wall__Ltrivalibs_graphics_math_cpu_Vec3__D__D__D__D__T2(this, w, right, 1.0, 1.0, 1.0, 0.0));
});
$p.qU = (function(w, fromLeft, height) {
  var right = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), w.bu);
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), w.fY, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), right, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (fromLeft - (0.5 * w.aP)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), (height - (0.5 * w.aX))));
});
$p.rD = (function(bnd, topY) {
  var edges = bnd.bX;
  var out = [];
  var i = 0;
  while ((i < (edges.length | 0))) {
    var e = edges[i];
    var dx = (e.aD.o - e.Z.o);
    var dz = (e.aD.m - e.Z.m);
    var $x_1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((0.5 * (e.Z.o + e.aD.o)), (0.5 * topY), (0.5 * (e.Z.m + e.aD.m)));
    var p$proxy1 = ((dx * dx) + (dz * dz));
    out.push(new $c_Lsketchlib_utils_room_Wall($x_1, (+Math.sqrt(p$proxy1)), topY, new $c_Ltrivalibs_graphics_math_cpu_Vec3(e.bY.o, 0.0, e.bY.m)));
    i = ((1 + i) | 0);
  }
  return out;
});
var $d_Lsketchlib_utils_room_Walls$package$ = new $TypeData().i($c_Lsketchlib_utils_room_Walls$package$, "sketchlib.utils.room.Walls$package$", ({
  dI: 1
}));
var $n_Lsketchlib_utils_room_Walls$package$;
function $m_Lsketchlib_utils_room_Walls$package$() {
  if ((!$n_Lsketchlib_utils_room_Walls$package$)) {
    $n_Lsketchlib_utils_room_Walls$package$ = new $c_Lsketchlib_utils_room_Walls$package$();
  }
  return $n_Lsketchlib_utils_room_Walls$package$;
}
/** @constructor */
function $c_Ltrivalibs_dev_DevHandle(resetFn) {
}
$p = $c_Ltrivalibs_dev_DevHandle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_DevHandle;
/** @constructor */
function $h_Ltrivalibs_dev_DevHandle() {
}
$h_Ltrivalibs_dev_DevHandle.prototype = $p;
var $d_Ltrivalibs_dev_DevHandle = new $TypeData().i($c_Ltrivalibs_dev_DevHandle, "trivalibs.dev.DevHandle", ({
  dJ: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.gP = null;
  this.jV = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.gP = [];
  this.jV = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.o1 = (function() {
  return (import.meta.hot !== (void 0));
});
$p.qF = (function() {
  var u = import.meta.url;
  var end = (u.indexOf("?") | 0);
  if ((end < 0)) {
    end = (u.indexOf("#") | 0);
  }
  if ((end >= 0)) {
    var endIndex = end;
    return u.substring(0, endIndex);
  } else {
    return u;
  }
});
$p.ro = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().qF()) + ":") + label);
});
$p.l4 = (function() {
  return window.sessionStorage;
});
$p.r0 = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().l4().getItem(key);
  if ((raw === null)) {
    return null;
  } else {
    try {
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }
});
$p.rI = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().l4().setItem(key, JSON.stringify(json));
});
$p.r5 = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().l4().removeItem(key);
});
$p.pz = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().jV)) {
    $m_Ltrivalibs_dev_dev$package$().jV = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().gP.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().gP[i].i0();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.r2 = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().pz();
  $m_Ltrivalibs_dev_dev$package$().gP.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().oc($m_Ltrivalibs_dev_dev$package$().gP, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().gP.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  dK: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.af.x, cam.af.I, cam.af.y, cam.aR, cam.bM];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.bL;
      var aspect$1 = cam.g6;
      var near$1 = cam.h2;
      var far$1 = cam.h1;
      cam.l3(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
    }
  }
}
/** @constructor */
function $c_Ltrivalibs_dev_devPreserve$() {
}
$p = $c_Ltrivalibs_dev_devPreserve$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_devPreserve$;
/** @constructor */
function $h_Ltrivalibs_dev_devPreserve$() {
}
$h_Ltrivalibs_dev_devPreserve$.prototype = $p;
$p.p4 = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().o1())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().ro(label);
    var initPos = cam.af;
    var initRotH = cam.aR;
    var initRotV = cam.bM;
    var stored = $m_Ltrivalibs_dev_dev$package$().r0(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.i0();
      $m_Ltrivalibs_dev_dev$package$().r5(sk);
      var fov$proxy1 = cam.bL;
      var aspect$proxy1 = cam.g6;
      var near$proxy1 = cam.h2;
      var far$proxy1 = cam.h1;
      cam.l3(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().r2(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().rI(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dL: 1
}));
var $n_Ltrivalibs_dev_devPreserve$;
function $m_Ltrivalibs_dev_devPreserve$() {
  if ((!$n_Ltrivalibs_dev_devPreserve$)) {
    $n_Ltrivalibs_dev_devPreserve$ = new $c_Ltrivalibs_dev_devPreserve$();
  }
  return $n_Ltrivalibs_dev_devPreserve$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_BufferBinding(buffer, device, uv) {
  this.j = null;
  this.D = null;
  this.E = null;
  this.B = null;
  this.j = buffer;
  this.D = device;
  this.E = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.B = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aT)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aT: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_BufferedGeometry(vertices, indices) {
  this.jW = null;
  this.iJ = null;
  this.jW = vertices;
  this.iJ = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dT: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.hw = null;
  this.oL = 0;
  this.hw = normal;
  this.oL = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dU: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.hx = null;
  this.ad = null;
  this.gQ = null;
  this.iL = null;
  this.iK = null;
  this.hx = evidence$1;
  this.ad = [];
  this.gQ = [];
  this.iL = [];
  this.iK = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.oU = (function(face, normal, section) {
  var faceIdx = (this.ad.length | 0);
  this.ad.push(face);
  this.gQ.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().qY(this.hx.bP(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().pT(Object, this.iK, key)) {
      var $x_2 = this.iL;
      var dict = this.iK;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().lF.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.mA.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.iL.length | 0);
      var dict$1 = this.iK;
      dict$1[key] = idx;
      this.iL.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.hx.bP(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.py = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.ad.length | 0))) {
    var arr = this.ad[i];
    if ((this.gQ[i].hw === null)) {
      var $x_2 = this.gQ[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().l0(this.ad[i], this.hx);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().l0(this.ad[i], this.hx);
      }
      $x_2.hw = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dX: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh$() {
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh$() {
}
$h_Ltrivalibs_graphics_geometry_Mesh$.prototype = $p;
$p.nR = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().oV(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dY: 1
}));
var $n_Ltrivalibs_graphics_geometry_Mesh$;
function $m_Ltrivalibs_graphics_geometry_Mesh$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Mesh$)) {
    $n_Ltrivalibs_graphics_geometry_Mesh$ = new $c_Ltrivalibs_graphics_geometry_Mesh$();
  }
  return $n_Ltrivalibs_graphics_geometry_Mesh$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane(normal, d) {
  this.hz = null;
  this.hy = 0.0;
  this.hz = normal;
  this.hy = d;
}
$p = $c_Ltrivalibs_graphics_geometry_Plane.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane() {
}
$h_Ltrivalibs_graphics_geometry_Plane.prototype = $p;
$p.r1 = (function() {
  var a = this.hz.x;
  var b = this.hz.I;
  var c = this.hz.y;
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((1.0 - ((2.0 * a) * a)), (((-2.0) * a) * b), (((-2.0) * a) * c), 0.0, (((-2.0) * a) * b), (1.0 - ((2.0 * b) * b)), (((-2.0) * b) * c), 0.0, (((-2.0) * a) * c), (((-2.0) * b) * c), (1.0 - ((2.0 * c) * c)), 0.0, ((2.0 * a) * this.hy), ((2.0 * b) * this.hy), ((2.0 * c) * this.hy), 1.0);
});
var $d_Ltrivalibs_graphics_geometry_Plane = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane, "trivalibs.graphics.geometry.Plane", ({
  dZ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane$() {
  this.mx = null;
  $n_Ltrivalibs_graphics_geometry_Plane$ = this;
  this.mx = new $c_Ltrivalibs_graphics_geometry_Plane(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), 0.0);
}
$p = $c_Ltrivalibs_graphics_geometry_Plane$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane$() {
}
$h_Ltrivalibs_graphics_geometry_Plane$.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Plane$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane$, "trivalibs.graphics.geometry.Plane$", ({
  e0: 1
}));
var $n_Ltrivalibs_graphics_geometry_Plane$;
function $m_Ltrivalibs_graphics_geometry_Plane$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Plane$)) {
    $n_Ltrivalibs_graphics_geometry_Plane$ = new $c_Ltrivalibs_graphics_geometry_Plane$();
  }
  return $n_Ltrivalibs_graphics_geometry_Plane$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIndex, vertexSlot) {
  this.oM = 0;
  this.oN = 0;
  this.oM = faceIndex;
  this.oN = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  e2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.oO = null;
  this.mA = null;
  this.oO = position;
  this.mA = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  e7: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_buffers$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_buffers$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_buffers$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_buffers$package$() {
}
$h_Ltrivalibs_graphics_geometry_buffers$package$.prototype = $p;
$p.ou = (function(idxBuf, vertexCount) {
  if (((idxBuf.length | 0) === 0)) {
    return null;
  } else if ((vertexCount <= 65535)) {
    var ua = new Uint16Array((idxBuf.length | 0));
    var i = 0;
    while ((i < (idxBuf.length | 0))) {
      ua[i] = idxBuf[i];
      i = ((1 + i) | 0);
    }
    return ua;
  } else {
    var ua$2 = new Uint32Array((idxBuf.length | 0));
    var i$2 = 0;
    while ((i$2 < (idxBuf.length | 0))) {
      ua$2[i$2] = (idxBuf[i$2] | 0);
      i$2 = ((1 + i$2) | 0);
    }
    return ua$2;
  }
});
var $d_Ltrivalibs_graphics_geometry_buffers$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_buffers$package$, "trivalibs.graphics.geometry.buffers$package$", ({
  e8: 1
}));
var $n_Ltrivalibs_graphics_geometry_buffers$package$;
function $m_Ltrivalibs_graphics_geometry_buffers$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_buffers$package$)) {
    $n_Ltrivalibs_graphics_geometry_buffers$package$ = new $c_Ltrivalibs_graphics_geometry_buffers$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_buffers$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_mesh$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_mesh$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_mesh$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_mesh$package$() {
}
$h_Ltrivalibs_graphics_geometry_mesh$package$.prototype = $p;
$p.oV = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.oU(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  e9: 1
}));
var $n_Ltrivalibs_graphics_geometry_mesh$package$;
function $m_Ltrivalibs_graphics_geometry_mesh$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_mesh$package$)) {
    $n_Ltrivalibs_graphics_geometry_mesh$package$ = new $c_Ltrivalibs_graphics_geometry_mesh$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_mesh$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_package$package$() {
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$() {
}
$h_Ltrivalibs_graphics_geometry_package$package$.prototype = $p;
$p.qY = (function(v) {
  return (((($doubleToInt((10000.0 * v.x)) + ",") + $doubleToInt((10000.0 * v.I))) + ",") + $doubleToInt((10000.0 * v.y)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  ea: 1
}));
var $n_Ltrivalibs_graphics_geometry_package$package$;
function $m_Ltrivalibs_graphics_geometry_package$package$() {
  if ((!$n_Ltrivalibs_graphics_geometry_package$package$)) {
    $n_Ltrivalibs_graphics_geometry_package$package$ = new $c_Ltrivalibs_graphics_geometry_package$package$();
  }
  return $n_Ltrivalibs_graphics_geometry_package$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
}
$p = $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
}
$h_Ltrivalibs_graphics_geometry_polygon$package$Quad$.prototype = $p;
$p.bz = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.rt = (function(q, evidence$1) {
  return q[0];
});
$p.pb = (function(q, evidence$1) {
  return q[1];
});
$p.pd = (function(q, evidence$1) {
  return q[2];
});
$p.rv = (function(q, evidence$1) {
  return q[3];
});
$p.l0 = (function(q, evidence$1) {
  var a = evidence$1.bP(this.rt(q, evidence$1));
  var b = evidence$1.bP(this.pb(q, evidence$1));
  var c = evidence$1.bP(this.pd(q, evidence$1));
  var d = evidence$1.bP(this.rv(q, evidence$1));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.x - a.x), (c.I - a.I), (c.y - a.y));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.x - b.x), (d.I - b.I), (d.y - b.y));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  ec: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Quad$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
}
$p = $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
}
$h_Ltrivalibs_graphics_geometry_polygon$package$Triangle$.prototype = $p;
$p.oS = (function(tri, evidence$1) {
  return tri[0];
});
$p.p8 = (function(tri, evidence$1) {
  return tri[1];
});
$p.pe = (function(tri, evidence$1) {
  return tri[2];
});
$p.l0 = (function(tri, evidence$1) {
  var pa = evidence$1.bP(this.oS(tri, evidence$1));
  var pb = evidence$1.bP(this.p8(tri, evidence$1));
  var pc = evidence$1.bP(this.pe(tri, evidence$1));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.x - pa.x), (pb.I - pa.I), (pb.y - pa.y));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.x - pa.x), (pc.I - pa.I), (pc.y - pa.y));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().G(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  ed: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.i4(m));
  var a01 = (+x$2.i5(m));
  var a02 = (+x$2.i6(m));
  var a03 = (+x$2.i7(m));
  var a10 = (+x$2.i8(m));
  var a11 = (+x$2.i9(m));
  var a12 = (+x$2.ia(m));
  var a13 = (+x$2.ib(m));
  var a20 = (+x$2.ic(m));
  var a21 = (+x$2.id(m));
  var a22 = (+x$2.ie(m));
  var a23 = (+x$2.ig(m));
  var a30 = (+x$2.ih(m));
  var a31 = (+x$2.ii(m));
  var a32 = (+x$2.ij(m));
  var a33 = (+x$2.ik(m));
  var b00 = (+x$2.i4(other));
  var b01 = (+x$2.i5(other));
  var b02 = (+x$2.i6(other));
  var b03 = (+x$2.i7(other));
  var b10 = (+x$2.i8(other));
  var b11 = (+x$2.i9(other));
  var b12 = (+x$2.ia(other));
  var b13 = (+x$2.ib(other));
  var b20 = (+x$2.ic(other));
  var b21 = (+x$2.id(other));
  var b22 = (+x$2.ie(other));
  var b23 = (+x$2.ig(other));
  var b30 = (+x$2.ih(other));
  var b31 = (+x$2.ii(other));
  var b32 = (+x$2.ij(other));
  var b33 = (+x$2.ik(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.i4(m));
  var a01 = (+x$2.i5(m));
  var a02 = (+x$2.i6(m));
  var a03 = (+x$2.i7(m));
  var a10 = (+x$2.i8(m));
  var a11 = (+x$2.i9(m));
  var a12 = (+x$2.ia(m));
  var a13 = (+x$2.ib(m));
  var a20 = (+x$2.ic(m));
  var a21 = (+x$2.id(m));
  var a22 = (+x$2.ie(m));
  var a23 = (+x$2.ig(m));
  var a30 = (+x$2.ih(m));
  var a31 = (+x$2.ii(m));
  var a32 = (+x$2.ij(m));
  var a33 = (+x$2.ik(m));
  var b00 = ((a00 * a11) - (a01 * a10));
  var b01 = ((a00 * a12) - (a02 * a10));
  var b02 = ((a00 * a13) - (a03 * a10));
  var b03 = ((a01 * a12) - (a02 * a11));
  var b04 = ((a01 * a13) - (a03 * a11));
  var b05 = ((a02 * a13) - (a03 * a12));
  var b06 = ((a20 * a31) - (a21 * a30));
  var b07 = ((a20 * a32) - (a22 * a30));
  var b08 = ((a20 * a33) - (a23 * a30));
  var b09 = ((a21 * a32) - (a22 * a31));
  var b10 = ((a21 * a33) - (a23 * a31));
  var b11 = ((a22 * a33) - (a23 * a32));
  var det = ((((((b00 * b11) - (b01 * b10)) + (b02 * b09)) + (b03 * b08)) - (b04 * b07)) + (b05 * b06));
  var invDet = (1.0 / det);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a11 * b11) - (a12 * b10)) + (a13 * b09)) * invDet), (((((-a01) * b11) + (a02 * b10)) - (a03 * b09)) * invDet), ((((a31 * b05) - (a32 * b04)) + (a33 * b03)) * invDet), (((((-a21) * b05) + (a22 * b04)) - (a23 * b03)) * invDet), (((((-a10) * b11) + (a12 * b08)) - (a13 * b07)) * invDet), ((((a00 * b11) - (a02 * b08)) + (a03 * b07)) * invDet), (((((-a30) * b05) + (a32 * b02)) - (a33 * b01)) * invDet), ((((a20 * b05) - (a22 * b02)) + (a23 * b01)) * invDet), ((((a10 * b10) - (a11 * b08)) + (a13 * b06)) * invDet), (((((-a00) * b10) + (a01 * b08)) - (a03 * b06)) * invDet), ((((a30 * b04) - (a31 * b02)) + (a33 * b00)) * invDet), (((((-a20) * b04) + (a21 * b02)) - (a23 * b00)) * invDet), (((((-a10) * b09) + (a11 * b07)) - (a12 * b06)) * invDet), ((((a00 * b09) - (a01 * b07)) + (a02 * b06)) * invDet), (((((-a30) * b03) + (a31 * b01)) - (a32 * b00)) * invDet), ((((a20 * b03) - (a21 * b01)) + (a22 * b00)) * invDet));
}
function $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($thiz, m, mb, other, x$4) {
  mb.oe(m, (+x$4.i4(other)));
  mb.of(m, (+x$4.i5(other)));
  mb.og(m, (+x$4.i6(other)));
  mb.oh(m, (+x$4.i7(other)));
  mb.oi(m, (+x$4.i8(other)));
  mb.oj(m, (+x$4.i9(other)));
  mb.ok(m, (+x$4.ia(other)));
  mb.ol(m, (+x$4.ib(other)));
  mb.om(m, (+x$4.ic(other)));
  mb.on(m, (+x$4.id(other)));
  mb.oo(m, (+x$4.ie(other)));
  mb.op(m, (+x$4.ig(other)));
  mb.oq(m, (+x$4.ih(other)));
  mb.or(m, (+x$4.ii(other)));
  mb.os(m, (+x$4.ij(other)));
  mb.ot(m, (+x$4.ik(other)));
}
function $f_Ltrivalibs_graphics_math_Vec2ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec2Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec2(((+x$2.as(v)) - (+x$2.as(other))), ((+x$2.at(v)) - (+x$2.at(other))));
}
function $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($thiz, v, x$2, other, x$4) {
  x$2.hd(v, (+x$4.as(other)));
  x$2.he(v, (+x$4.at(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.x + other.x), (v.I + other.I), (v.y + other.y));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((-v.x), (-v.I), (-v.y));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.x - other.x), (v.I - other.I), (v.y - other.y));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.x * scalar), (v.I * scalar), (v.y * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.x / scalar), (v.I / scalar), (v.y / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.I * other.y) - (v.y * other.I)), ((v.y * other.x) - (v.x * other.y)), ((v.x * other.I) - (v.I * other.x)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
function $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($thiz, v, x$2, other, x$4) {
  x$2.hd(v, (+x$4.as(other)));
  x$2.he(v, (+x$4.at(other)));
  x$2.lg(v, (+x$4.bj(other)));
  x$2.lb(v, (+x$4.bh(other)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.jY = 0.0;
  this.jZ = 0.0;
  this.k0 = 0.0;
  this.k1 = 0.0;
  this.k2 = 0.0;
  this.k3 = 0.0;
  this.k4 = 0.0;
  this.k5 = 0.0;
  this.k6 = 0.0;
  this.k7 = 0.0;
  this.k8 = 0.0;
  this.k9 = 0.0;
  this.ka = 0.0;
  this.kb = 0.0;
  this.kc = 0.0;
  this.kd = 0.0;
  this.jY = m00;
  this.jZ = m01;
  this.k0 = m02;
  this.k1 = m03;
  this.k2 = m10;
  this.k3 = m11;
  this.k4 = m12;
  this.k5 = m13;
  this.k6 = m20;
  this.k7 = m21;
  this.k8 = m22;
  this.k9 = m23;
  this.ka = m30;
  this.kb = m31;
  this.kc = m32;
  this.kd = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  er: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.iN = 0.0;
  this.iO = 0.0;
  this.iP = 0.0;
  this.iM = 0.0;
  this.iN = x;
  this.iO = y;
  this.iP = z;
  this.iM = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  eu: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$.prototype = $p;
$p.pN = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.o7 = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  ev: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((((((+x$2.bh(q)) * (+x$2.as(p))) + ((+x$2.as(q)) * (+x$2.bh(p)))) + ((+x$2.at(q)) * (+x$2.bj(p)))) - ((+x$2.bj(q)) * (+x$2.at(p)))), (((((+x$2.bh(q)) * (+x$2.at(p))) - ((+x$2.as(q)) * (+x$2.bj(p)))) + ((+x$2.at(q)) * (+x$2.bh(p)))) + ((+x$2.bj(q)) * (+x$2.as(p)))), (((((+x$2.bh(q)) * (+x$2.bj(p))) + ((+x$2.as(q)) * (+x$2.at(p)))) - ((+x$2.at(q)) * (+x$2.as(p)))) + ((+x$2.bj(q)) * (+x$2.bh(p)))), (((((+x$2.bh(q)) * (+x$2.bh(p))) - ((+x$2.as(q)) * (+x$2.as(p)))) - ((+x$2.at(q)) * (+x$2.at(p)))) - ((+x$2.bj(q)) * (+x$2.bj(p)))));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.o = 0.0;
  this.m = 0.0;
  this.o = x;
  this.m = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  ez: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.x = 0.0;
  this.I = 0.0;
  this.y = 0.0;
  this.x = x;
  this.I = y;
  this.y = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  eC: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4(x, y, z, w) {
  this.gS = 0.0;
  this.gT = 0.0;
  this.gU = 0.0;
  this.gR = 0.0;
  this.gS = x;
  this.gT = y;
  this.gU = z;
  this.gR = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4, "trivalibs.graphics.math.cpu.Vec4", ({
  eF: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.mK = null;
  this.mL = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.pQ = (function() {
  if ((!this.mL)) {
    this.mK = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.mL = true;
  }
  return this.mK;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  eJ: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  this.mM = null;
  this.mN = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$.prototype = $p;
$p.rz = (function() {
  if ((!this.mN)) {
    this.mM = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6();
    this.mN = true;
  }
  return this.mM;
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$", ({
  eM: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  this.mO = null;
  this.mP = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$.prototype = $p;
$p.rA = (function() {
  if ((!this.mP)) {
    this.mO = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8();
    this.mP = true;
  }
  return this.mO;
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$", ({
  eP: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.e = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.e = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.r = (function() {
  return this.e;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  b1: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$.prototype = $p;
$p.aI = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$1$2))));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  eT: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
function $m_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_LeftScalar$)) {
    $n_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$.prototype = $p;
$p.l7 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(v.o)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(v.m)) + ")"));
});
$p.is = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(v.x)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(v.I)) + ", ") + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9(v.y)) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$, "trivalibs.graphics.math.gpu.cpu_interop$package$", ({
  eW: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
function $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$ = new $c_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$() {
  this.mS = null;
  this.mT = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.oA = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.e) + ", ") + sampler.e) + ", ") + uv.e) + ")"));
});
$p.bc = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.e) + ", ") + sampler.e) + ", ") + uv.e) + ")"));
});
$p.jk = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.e) + ", ") + coord.e) + ", 0)"));
});
$p.pr = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.e) + ", ") + coord.e) + ", 0)"));
});
$p.gd = (function() {
  if ((!this.mT)) {
    this.mS = new $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2();
    this.mT = true;
  }
  return this.mS;
});
$p.rd = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.e) + ", ") + onTrue.e) + ", ") + cond.e) + ")"));
});
$p.pJ = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " > ") + b.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  eX: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_expr$package$;
function $m_Ltrivalibs_graphics_math_gpu_expr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_expr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_expr$package$ = new $c_Ltrivalibs_graphics_math_gpu_expr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_expr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  this.mU = null;
  this.mV = false;
  this.mW = null;
  this.mX = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.a9 = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.q = (function() {
  if ((!this.mV)) {
    this.mU = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.mV = true;
  }
  return this.mU;
});
$p.ge = (function() {
  if ((!this.mX)) {
    this.mW = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.mX = true;
  }
  return this.mW;
});
$p.jt = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".xz"));
});
$p.hb = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".xy"));
});
$p.rL = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".zw"));
});
$p.gi = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  eZ: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_ivec2$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_ivec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_ivec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_ivec2$() {
}
$h_Ltrivalibs_graphics_math_gpu_ivec2$.prototype = $p;
$p.c6 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec2<i32>(" + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_ivec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_ivec2$, "trivalibs.graphics.math.gpu.ivec2$", ({
  fb: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_ivec2$;
function $m_Ltrivalibs_graphics_math_gpu_ivec2$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_ivec2$)) {
    $n_Ltrivalibs_graphics_math_gpu_ivec2$ = new $c_Ltrivalibs_graphics_math_gpu_ivec2$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_ivec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec2$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec2$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec2$.prototype = $p;
$p.ab = (function(x, y) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec2<f32>(" + x.e) + ", ") + y.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec2$, "trivalibs.graphics.math.gpu.vec2$", ({
  fc: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec2$;
function $m_Ltrivalibs_graphics_math_gpu_vec2$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec2$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec2$ = new $c_Ltrivalibs_graphics_math_gpu_vec2$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec3$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec3$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec3$.prototype = $p;
$p.bc = (function(x, y, z) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.e) + ", ") + y.e) + ", ") + z.e) + ")"));
});
$p.c6 = (function(scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.e) + ")"));
});
$p.hZ = (function(scalar) {
  return this.c6($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  fd: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec3$;
function $m_Ltrivalibs_graphics_math_gpu_vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec3$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec3$ = new $c_Ltrivalibs_graphics_math_gpu_vec3$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_vec4$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_vec4$() {
}
$h_Ltrivalibs_graphics_math_gpu_vec4$.prototype = $p;
$p.p1 = (function(x, y, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.e) + ", ") + y.e) + ", ") + z.e) + ", ") + w.e) + ")"));
});
$p.ab = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.e) + ", ") + w.e) + ")"));
});
$p.bc = (function(xy, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec4<f32>(" + xy.e) + ", ") + z.e) + ", ") + w.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  fe: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_vec4$;
function $m_Ltrivalibs_graphics_math_gpu_vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_vec4$)) {
    $n_Ltrivalibs_graphics_math_gpu_vec4$ = new $c_Ltrivalibs_graphics_math_gpu_vec4$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_vec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BindPair(name, value) {
  this.t = null;
  this.t = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  ff: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.mY = null;
  this.mZ = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  this.mY = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  this.mZ = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  fg: 1
}));
var $n_Ltrivalibs_graphics_painter_BlendState$;
function $m_Ltrivalibs_graphics_painter_BlendState$() {
  if ((!$n_Ltrivalibs_graphics_painter_BlendState$)) {
    $n_Ltrivalibs_graphics_painter_BlendState$ = new $c_Ltrivalibs_graphics_painter_BlendState$();
  }
  return $n_Ltrivalibs_graphics_painter_BlendState$;
}
function $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V($thiz) {
  var format = null;
  var i = 0;
  while ((i < $thiz.fZ)) {
    var b = $thiz.g0[i];
    if (((format === null) && (b.c2 > 0))) {
      format = b.g1;
    }
    i = ((1 + i) | 0);
  }
  $thiz.kf = format;
}
function $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V($thiz, index, verts, indices, widenTo32) {
  while ((($thiz.g0.length | 0) <= index)) {
    $thiz.g0.push(new $c_Ltrivalibs_graphics_painter_FormBuffers());
  }
  var b = $thiz.g0[index];
  $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts);
  if ((indices !== null)) {
    $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, indices, widenTo32);
  } else {
    b.c2 = 0;
    b.hB = 0;
  }
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_graphics_painter_FormBuffers__Ltrivalibs_bufferdata_BufferView__V($thiz, b, verts) {
  var data = verts.dv.buffer;
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.c3 === null) || (b.ki < padded))) {
    if ((b.c3 !== null)) {
      var opt$proxy4 = b.c3;
      opt$proxy4.destroy();
    }
    b.c3 = $thiz.hA.g.createBuffer(({
      "size": padded,
      "usage": 40
    }));
    b.ki = padded;
  }
  $thiz.hA.aY.writeBuffer(b.c3, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.iQ = size;
  b.gV = (verts.off | 0);
}
function $p_Ltrivalibs_graphics_painter_Form__uploadIndices__Ltrivalibs_graphics_painter_FormBuffers__sjs_js_typedarray_TypedArray__Z__V($thiz, b, raw, widenTo32) {
  var data = null;
  var count = 0;
  if (((!(!(raw instanceof Uint16Array))) && widenTo32)) {
    var u32 = new Uint32Array((raw.length | 0));
    var i = 0;
    while ((i < (raw.length | 0))) {
      u32[i] = (raw[i] | 0);
      i = ((1 + i) | 0);
    }
    data = u32.buffer;
    count = (u32.length | 0);
    b.g1 = "uint32";
  } else if ((!(!(raw instanceof Uint16Array)))) {
    data = raw.buffer;
    count = (raw.length | 0);
    b.g1 = "uint16";
  } else {
    data = raw.buffer;
    count = (raw.length | 0);
    b.g1 = "uint32";
  }
  var size = (data.byteLength | 0);
  var p = ((-4) & ((3 + size) | 0));
  var padded = ((p < 4) ? 4 : p);
  if (((b.c1 === null) || (b.kh < padded))) {
    if ((b.c1 !== null)) {
      var opt$proxy8 = b.c1;
      opt$proxy8.destroy();
    }
    b.c1 = $thiz.hA.g.createBuffer(({
      "size": padded,
      "usage": 24
    }));
    b.kh = padded;
  }
  $thiz.hA.aY.writeBuffer(b.c1, 0.0, $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data));
  b.hB = size;
  b.c2 = count;
}
function $p_Ltrivalibs_graphics_painter_Form__alignedData__sjs_js_typedarray_ArrayBuffer__sjs_js_typedarray_ArrayBuffer($thiz, data) {
  var size = (data.byteLength | 0);
  if (((3 & size) === 0)) {
    return data;
  } else {
    var $x_1 = ArrayBuffer;
    var p = ((-4) & ((3 + size) | 0));
    var out = new $x_1(((p < 4) ? 4 : p));
    new Uint8Array(out).set(new Uint8Array(data));
    return out;
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.hA = null;
  this.g0 = null;
  this.fZ = 0;
  this.kg = null;
  this.ke = null;
  this.kf = null;
  this.hA = painter;
  this.g0 = [];
  this.fZ = 0;
  this.kg = "triangle-list";
  this.ke = "ccw";
  this.kf = null;
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.re = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.kg = topology;
  }
  if ((frontFace !== (void 0))) {
    this.ke = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, geometry.jW, geometry.iJ, false);
    this.fZ = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, 0, vertices, null, false);
    this.fZ = 1;
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((geometries !== (void 0))) {
    var use32 = false;
    var i = 0;
    while ((i < (geometries.length | 0))) {
      var idx = geometries[i].iJ;
      if (((idx !== null) && (!(!(idx instanceof Uint32Array))))) {
        use32 = true;
      }
      i = ((1 + i) | 0);
    }
    i = 0;
    while ((i < (geometries.length | 0))) {
      var geo = geometries[i];
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i, geo.jW, geo.iJ, use32);
      i = ((1 + i) | 0);
    }
    this.fZ = (geometries.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  if ((verticesAll !== (void 0))) {
    var i$1 = 0;
    while ((i$1 < (verticesAll.length | 0))) {
      $p_Ltrivalibs_graphics_painter_Form__upload__I__Ltrivalibs_bufferdata_BufferView__sjs_js_typedarray_TypedArray__Z__V(this, i$1, verticesAll[i$1], null, false);
      i$1 = ((1 + i$1) | 0);
    }
    this.fZ = (verticesAll.length | 0);
    $p_Ltrivalibs_graphics_painter_Form__refreshIndexFormat__V(this);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  fh: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_FormBuffers() {
  this.c3 = null;
  this.ki = 0;
  this.iQ = 0;
  this.gV = 0;
  this.c1 = null;
  this.kh = 0;
  this.hB = 0;
  this.c2 = 0;
  this.g1 = null;
  this.c3 = null;
  this.ki = 0;
  this.iQ = 0;
  this.gV = 0;
  this.c1 = null;
  this.kh = 0;
  this.hB = 0;
  this.c2 = 0;
  this.g1 = "uint16";
}
$p = $c_Ltrivalibs_graphics_painter_FormBuffers.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_FormBuffers;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_FormBuffers() {
}
$h_Ltrivalibs_graphics_painter_FormBuffers.prototype = $p;
var $d_Ltrivalibs_graphics_painter_FormBuffers = new $TypeData().i($c_Ltrivalibs_graphics_painter_FormBuffers, "trivalibs.graphics.painter.FormBuffers", ({
  fi: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.n1 = null;
  this.n0 = null;
  this.g2 = null;
  this.n1 = shade;
  this.n0 = painter;
  this.g2 = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.Q = (function() {
  return (this.g2.length | 0);
});
$p.oT = (function() {
  var inst = new $c_Ltrivalibs_graphics_painter_Instance(this.n1, this.n0);
  this.g2.push(inst);
  return (((this.g2.length | 0) - 1) | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  fk: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_LayerBindCache(panelId, epoch, valueGroup, panelGroup) {
  this.n3 = 0;
  this.n2 = 0;
  this.km = null;
  this.kl = null;
  this.n3 = panelId;
  this.n2 = epoch;
  this.km = valueGroup;
  this.kl = panelGroup;
}
$p = $c_Ltrivalibs_graphics_painter_LayerBindCache.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_LayerBindCache;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_LayerBindCache() {
}
$h_Ltrivalibs_graphics_painter_LayerBindCache.prototype = $p;
var $d_Ltrivalibs_graphics_painter_LayerBindCache = new $TypeData().i($c_Ltrivalibs_graphics_painter_LayerBindCache, "trivalibs.graphics.painter.LayerBindCache", ({
  fm: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.rE();
  var h = $thiz.pV();
  panel.pA(w, h);
  var msaa = panel.h0;
  var encoder = $thiz.g.createCommandEncoder();
  var panelFormats = panel.kU();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.rr())) {
    if ((panel.iZ !== null)) {
      var opt$proxy2 = panel.iZ;
      if (msaa) {
        var _2 = panel.ov(t);
        var TextureViewBundle_this = panel.aa[t];
        var _2$1 = TextureViewBundle_this.aZ[0];
        var value = opt$proxy2.gS;
        var value$1 = opt$proxy2.gT;
        var value$2 = opt$proxy2.gU;
        var value$3 = opt$proxy2.gR;
        var _2$2 = ({
          "r": value,
          "g": value$1,
          "b": value$2,
          "a": value$3
        });
        var attachment = ({
          "view": _2,
          "resolveTarget": _2$1,
          "loadOp": "clear",
          "storeOp": "discard",
          "clearValue": _2$2
        });
      } else {
        var TextureViewBundle_this$2 = panel.aa[t];
        var _2$3 = TextureViewBundle_this$2.aZ[0];
        var value$4 = opt$proxy2.gS;
        var value$5 = opt$proxy2.gT;
        var value$6 = opt$proxy2.gU;
        var value$7 = opt$proxy2.gR;
        var _2$4 = ({
          "r": value$4,
          "g": value$5,
          "b": value$6,
          "a": value$7
        });
        var attachment = ({
          "view": _2$3,
          "loadOp": "clear",
          "storeOp": "store",
          "clearValue": _2$4
        });
      }
    } else if (msaa) {
      var _2$5 = panel.ov(t);
      var TextureViewBundle_this$3 = panel.aa[t];
      var _2$6 = TextureViewBundle_this$3.aZ[0];
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var TextureViewBundle_this$4 = panel.aa[t];
      var _2$7 = TextureViewBundle_this$4.aZ[0];
      var attachment = ({
        "view": _2$7,
        "loadOp": "load",
        "storeOp": "store"
      });
    }
    colorAttachments.push(attachment);
    t = ((1 + t) | 0);
  }
  var passDesc = ({
    "colorAttachments": colorAttachments
  });
  if (panel.hJ) {
    var _2$8 = panel.o0();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.j0.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.j0[i], panel.hJ, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.aY.submit([encoder.finish()]);
  if (panel.hG) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.c5.length | 0))) {
    var layer = panel.c5[j];
    var needsPingPong = layer.nV();
    if ((layer.hC >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.aY.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.aa[0].aZ[layer.hC];
      var mipSrcView = ((layer.iU >= 0) ? panel.aa[0].aZ[layer.iU] : panel.jr());
      var enc = $thiz.g.createCommandEncoder();
      var _2$9 = [({
        "view": mipDstView,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var mipPass = enc.beginRenderPass(({
        "colorAttachments": _2$9
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, mipPass, layer, false, false, panelFormats, mipSrcView, panel);
      mipPass.end();
      $thiz.aY.submit([enc.finish()]);
    } else if (needsPingPong) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.aY.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.g.createCommandEncoder();
      var _2$10 = panel.qX();
      var _2$11 = [({
        "view": _2$10,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$11
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, ppPass, layer, false, false, panelFormats, panel.jr(), panel);
      ppPass.end();
      $thiz.aY.submit([enc$2.finish()]);
      panel.rp();
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.g.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$12 = panel.jr();
        var _2$13 = [({
          "view": _2$12,
          "loadOp": "load",
          "storeOp": "store"
        })];
        curPass = $x_1.beginRenderPass(({
          "colorAttachments": _2$13
        }));
      }
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, curPass, layer, false, false, panelFormats, null, panel);
    }
    j = ((1 + j) | 0);
  }
  if ((curPass !== null)) {
    curPass.end();
    $thiz.aY.submit([curEncoder.finish()]);
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.c5.length | 0))) {
    if ((panel.c5[mi].hC >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.kZ() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.n9)) {
    $thiz.n8 = $thiz.g.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.n9 = true;
  }
  return $thiz.n8;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.n5)) {
    var $x_2 = $thiz.g;
    var _2 = ({});
    var _2$1 = ({});
    var _2$2 = [({
      "binding": 0,
      "visibility": 2,
      "texture": _2
    }), ({
      "binding": 1,
      "visibility": 2,
      "sampler": _2$1
    })];
    var $x_1 = $x_2.createBindGroupLayout(({
      "entries": _2$2
    }));
    $thiz.n4 = $x_1;
    $thiz.n5 = true;
  }
  return $thiz.n4;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.n7)) {
    var module = $thiz.g.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.g;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pipelineLayout = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.g;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var f$proxy4 = $thiz.gX;
    var _2$2 = [({
      "format": f$proxy4
    })];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var $x_2 = $x_3.createRenderPipeline(({
      "layout": pipelineLayout,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4
    }));
    $thiz.n6 = $x_2;
    $thiz.n7 = true;
  }
  return $thiz.n6;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.nc)) {
    var $x_2 = $thiz.g;
    var _2 = ({
      "sampleType": "depth",
      "multisampled": true
    });
    var _2$1 = [({
      "binding": 0,
      "visibility": 2,
      "texture": _2
    })];
    var $x_1 = $x_2.createBindGroupLayout(({
      "entries": _2$1
    }));
    $thiz.nb = $x_1;
    $thiz.nc = true;
  }
  return $thiz.nb;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.ne)) {
    var module = $thiz.g.createShaderModule(({
      "code": "\n@group(0) @binding(0) var ms_depth: texture_depth_multisampled_2d;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  return vec4f(x, y, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main(@builtin(position) pos: vec4f) -> @builtin(frag_depth) f32 {\n  return textureLoad(ms_depth, vec2i(pos.xy), 0);\n}\n"
    }));
    var $x_1 = $thiz.g;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.g;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var _2$2 = [];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var _2$5 = ({
      "format": "depth24plus",
      "depthWriteEnabled": true,
      "depthCompare": "always"
    });
    var $x_2 = $x_3.createRenderPipeline(({
      "layout": pl,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4,
      "depthStencil": _2$5
    }));
    $thiz.nd = $x_2;
    $thiz.ne = true;
  }
  return $thiz.nd;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.g.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.r7();
  var _2$2 = ({
    "view": _2$1,
    "depthLoadOp": "clear",
    "depthStoreOp": "store",
    "depthClearValue": 1.0
  });
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2,
    "depthStencilAttachment": _2$2
  }));
  var $x_1 = $thiz.g;
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
  var _2$4 = panel.o0();
  var _2$5 = [({
    "binding": 0,
    "resource": _2$4
  })];
  var bindGroup = $x_1.createBindGroup(({
    "layout": _2$3,
    "entries": _2$5
  }));
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz));
  pass.setBindGroup(0, bindGroup);
  pass.draw(3);
  pass.end();
  $thiz.aY.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.ng)) {
    $thiz.nf = $thiz.g.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.ng = true;
  }
  return $thiz.nf;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.iV.hasOwnProperty(format)))))) {
    return $thiz.iV[format];
  } else {
    var module = $thiz.g.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.g;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_2 = $thiz.g;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var _2$2 = [({
      "format": format
    })];
    var _2$3 = ({
      "module": module,
      "entryPoint": "fs_main",
      "targets": _2$2
    });
    var _2$4 = ({
      "topology": "triangle-list"
    });
    var p = $x_2.createRenderPipeline(({
      "layout": pl,
      "vertex": _2$1,
      "fragment": _2$3,
      "primitive": _2$4
    }));
    $thiz.iV[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.kZ();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.g4.length | 0) > 0) ? panel.g4[0] : $thiz.gX);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.aa[0].aZ[((i - 1) | 0)];
    var dstView = panel.aa[0].aZ[i];
    var encoder = $thiz.g.createCommandEncoder();
    var _2 = ({
      "r": 0,
      "g": 0,
      "b": 0,
      "a": 0
    });
    var _2$1 = [({
      "view": dstView,
      "loadOp": "clear",
      "storeOp": "store",
      "clearValue": _2
    })];
    var pass = encoder.beginRenderPass(({
      "colorAttachments": _2$1
    }));
    var $x_1 = $thiz.g;
    var _2$2 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
    var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz);
    var _2$4 = [({
      "binding": 0,
      "resource": srcView
    }), ({
      "binding": 1,
      "resource": _2$3
    })];
    var bindGroup = $x_1.createBindGroup(({
      "layout": _2$2,
      "entries": _2$4
    }));
    pass.setPipeline(pipeline);
    pass.setBindGroup(0, bindGroup);
    pass.draw(3);
    pass.end();
    $thiz.aY.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.aQ.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.aQ[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.aw.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.aw[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.hL;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.F.hasOwnProperty(name)))))) {
      var idx = (shade.F[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.aA.hasOwnProperty(name)))))) {
      var idx$2 = (shade.aA[name] | 0);
      if (((idx$2 >= (workPanelBindings.length | 0)) || (workPanelBindings[idx$2] === null))) {
        while (((workPanelBindings.length | 0) <= idx$2)) {
          workPanelBindings.push(null);
        }
        var pb = ((!(!(value instanceof $a_Ltrivalibs_graphics_painter_PanelBinding()))) ? value : new ($a_Ltrivalibs_graphics_painter_PanelBinding())(value));
        workPanelBindings[idx$2] = pb;
      }
    }
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, workBindings, workPanelBindings) {
  var i = 0;
  while ((i < (inst.ae.length | 0))) {
    if ((inst.ae[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.ae[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.iR.length | 0))) {
    if ((inst.iR[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.iR[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.hL).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.kp !== null))) {
    var entries = [];
    var i = 0;
    while ((i < (bindings.length | 0))) {
      var b = bindings[i];
      if ((b !== null)) {
        entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.g;
    var _2 = shade.kp;
    return $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
  } else {
    return null;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shade, bindings) {
  var bg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, bindings);
  if ((bg !== null)) {
    pass.setBindGroup(0, bg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, srcView) {
  if ((shade.j3 !== null)) {
    var entries = [];
    if ((srcView !== null)) {
      entries.push(({
        "binding": 0,
        "resource": srcView
      }));
    }
    var startIdx = ((srcView !== null) ? 1 : 0);
    var k = startIdx;
    while ((k < (panelBindings.length | 0))) {
      var pb = panelBindings[k];
      if ((pb !== null)) {
        var view = ((!(!pb.depth)) ? pb.panel.pq() : (((pb.mipLevel | 0) < 0) ? pb.panel.aa[(pb.index | 0)].nm : pb.panel.aa[(pb.index | 0)].aZ[(pb.mipLevel | 0)]));
        var value = k;
        entries.push(({
          "binding": value,
          "resource": view
        }));
      }
      k = ((1 + k) | 0);
    }
    if (((entries.length | 0) > 0)) {
      var $x_1 = $thiz.g;
      var _2 = shade.j3;
      return $x_1.createBindGroup(({
        "layout": _2,
        "entries": entries
      }));
    } else {
      return null;
    }
  } else {
    return null;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shade, panelBindings, srcView) {
  var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, shade, panelBindings, srcView);
  if ((pg !== null)) {
    pass.setBindGroup(1, pg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.gX]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.W, shape.kr, fmts, depthTest, multisample, shape.hM.kg, shape.ks, shape.hM.ke, shape.hM.kf);
  pass.setPipeline(pipeline);
  var form = shape.hM;
  var bufferCount = form.fZ;
  var instanceCount = shape.kt.Q();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.J, shape.a4);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.W, $thiz.aQ, $thiz.aw);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.W, $thiz.aQ);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.W, $thiz.aw, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.W, shape.J);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.W, shape.a4, null);
    }
    var b = 0;
    while ((b < bufferCount)) {
      var buf = form.g0[b];
      if ((buf.gV > 0)) {
        pass.setVertexBuffer(0, buf.c3, 0.0, buf.iQ);
        if ((buf.c2 > 0)) {
          pass.setIndexBuffer(buf.c1, buf.g1, 0.0, buf.hB);
          pass.drawIndexed(buf.c2);
        } else {
          pass.draw(buf.gV);
        }
      }
      b = ((1 + b) | 0);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.kt.g2[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.J, shape.a4);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.W, $thiz.aQ, $thiz.aw);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.aQ, $thiz.aw);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.W, $thiz.aQ);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.W, $thiz.aw, null);
      var b$2 = 0;
      while ((b$2 < bufferCount)) {
        var buf$2 = form.g0[b$2];
        if ((buf$2.gV > 0)) {
          pass.setVertexBuffer(0, buf$2.c3, 0.0, buf$2.iQ);
          if ((buf$2.c2 > 0)) {
            pass.setIndexBuffer(buf$2.c1, buf$2.g1, 0.0, buf$2.hB);
            pass.drawIndexed(buf$2.c2);
          } else {
            pass.draw(buf$2.gV);
          }
        }
        b$2 = ((1 + b$2) | 0);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.gX]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.C, layer.kk, fmts, depthTest, multisample, "triangle-list", "none", "ccw", null);
  pass.setPipeline(pipeline);
  var instanceCount = layer.iT.Q();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.U);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.C, $thiz.aQ, $thiz.aw);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.C, $thiz.aQ);
      var effectiveSrcView = (((($thiz.aw.length | 0) > 0) && ($thiz.aw[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.C, $thiz.aw, effectiveSrcView);
    } else {
      var c = layer.P;
      if (((((c !== null) && (panel !== null)) && (c.n3 === panel.ko)) && (c.n2 === panel.g3))) {
        if ((c.km !== null)) {
          pass.setBindGroup(0, c.km);
        }
        if ((c.kl !== null)) {
          pass.setBindGroup(1, c.kl);
        }
      } else {
        var vg = $p_Ltrivalibs_graphics_painter_Painter__buildValueBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.C, layer.i);
        var pg = $p_Ltrivalibs_graphics_painter_Painter__buildPanelBindGroup__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_GPUBindGroup($thiz, layer.C, layer.U, srcView);
        if ((vg !== null)) {
          pass.setBindGroup(0, vg);
        }
        if ((pg !== null)) {
          pass.setBindGroup(1, pg);
        }
        layer.P = ((panel !== null) ? new $c_Ltrivalibs_graphics_painter_LayerBindCache(panel.ko, panel.g3, vg, pg) : null);
      }
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.iT.g2[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.i, layer.U);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.C, $thiz.aQ, $thiz.aw);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.aQ, $thiz.aw);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.C, $thiz.aQ);
      var effectiveSrcView$2 = (((($thiz.aw.length | 0) > 0) && ($thiz.aw[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.C, $thiz.aw, effectiveSrcView$2);
      pass.draw(3);
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, bs) {
  if ((bs === null)) {
    return "n";
  } else {
    var c = bs.color;
    var a = bs.alpha;
    return ((((((((((c.srcFactor + ".") + c.dstFactor) + ".") + c.operation) + "|") + a.srcFactor) + ".") + a.dstFactor) + ".") + a.operation);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shade, blendState, formats, depthTest, multisample, topology, cullMode, frontFace, indexFormat) {
  var stripIndexFormat = (((indexFormat !== null) && ((topology === "triangle-strip") || (topology === "line-strip"))) ? indexFormat : null);
  var stripKey = ((stripIndexFormat === null) ? "" : ((stripIndexFormat === "uint32") ? "4" : "2"));
  var key = (((((((((((((((shade.nj + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace) + stripKey);
  var cached = $thiz.kn[key];
  if ((cached !== (void 0))) {
    return cached;
  } else {
    var targets = [];
    var ti = 0;
    while ((ti < (formats.length | 0))) {
      if ((blendState === null)) {
        var f$proxy7 = formats[ti];
        var target = ({
          "format": f$proxy7
        });
      } else {
        var f$proxy8 = formats[ti];
        var target = ({
          "format": f$proxy8,
          "blend": blendState
        });
      }
      targets.push(target);
      ti = ((1 + ti) | 0);
    }
    if ((shade.kq !== null)) {
      var _2 = shade.j4;
      var _2$1 = [shade.kq];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.j4;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.nk;
    var _2$4 = shade.j4;
    var _2$5 = ({
      "module": _2$4,
      "entryPoint": "fs_main",
      "targets": targets
    });
    var _2$6 = ({
      "topology": topology,
      "cullMode": cullMode,
      "frontFace": frontFace
    });
    var desc = ({
      "layout": _2$3,
      "vertex": vertexDescriptor,
      "fragment": _2$5,
      "primitive": _2$6
    });
    if ((stripIndexFormat !== null)) {
      desc.primitive.stripIndexFormat = stripIndexFormat;
    }
    if (depthTest) {
      desc.depthStencil = ({
        "format": "depth24plus",
        "depthWriteEnabled": true,
        "depthCompare": "less"
      });
    }
    if (multisample) {
      desc.multisample = ({
        "count": 4
      });
    }
    var p = $thiz.g.createRenderPipeline(desc);
    $thiz.kn[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.B;
    var _2$1 = ({
      "buffer": _2
    });
    return ({
      "binding": i,
      "resource": _2$1
    });
  } else {
    return ({
      "binding": i,
      "resource": b
    });
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter(device, queue, canvas, context, preferredFormat) {
  this.g = null;
  this.aY = null;
  this.gW = null;
  this.na = null;
  this.gX = null;
  this.kn = null;
  this.s = 0;
  this.iW = null;
  this.nh = null;
  this.ni = false;
  this.n8 = null;
  this.n9 = false;
  this.n4 = null;
  this.n5 = false;
  this.n6 = null;
  this.n7 = false;
  this.nb = null;
  this.nc = false;
  this.nd = null;
  this.ne = false;
  this.nf = null;
  this.ng = false;
  this.iV = null;
  this.aQ = null;
  this.aw = null;
  this.g = device;
  this.aY = queue;
  this.gW = canvas;
  this.na = context;
  this.gX = preferredFormat;
  this.kn = ({});
  this.s = 0;
  this.iW = [];
  this.iV = ({});
  this.aQ = [];
  this.aw = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.qQ = (function(cb) {
  this.iW.push(cb);
  cb.nQ((this.gW.width | 0), (this.gW.height | 0));
});
$p.pH = (function(w, h) {
  var k = 0;
  while ((k < (this.iW.length | 0))) {
    this.iW[k].nQ(w, h);
    k = ((1 + k) | 0);
  }
});
$p.rE = (function() {
  return (this.gW.width | 0);
});
$p.pV = (function() {
  return (this.gW.height | 0);
});
$p.ra = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.g;
  var a$proxy1 = ((addressModeU === (void 0)) ? addressMode : addressModeU);
  var a$proxy2 = ((addressModeV === (void 0)) ? addressMode : addressModeV);
  return $x_1.createSampler(({
    "magFilter": magFilter,
    "minFilter": minFilter,
    "mipmapFilter": mipmapFilter,
    "addressModeU": a$proxy1,
    "addressModeV": a$proxy2
  }));
});
$p.io = (function() {
  if ((!this.ni)) {
    this.nh = this.ra("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    this.ni = true;
  }
  return this.nh;
});
$p.o6 = (function(geometry, vertices, geometries, verticesAll, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).re(geometry, vertices, geometries, verticesAll, topology, frontFace);
});
$p.gf = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).rg(cullMode, blendState);
});
$p.bA = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).rf(blendState, mipSource, mipTarget);
});
$p.bB = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).iq(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.ri = (function(panel) {
  var encoder = this.g.createCommandEncoder();
  var swapChainView = this.na.getCurrentTexture().createView();
  var _2 = [({
    "view": swapChainView,
    "loadOp": "load",
    "storeOp": "store"
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2
  }));
  var $x_1 = this.g;
  var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
  var _2$2 = panel.jr();
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler(this);
  var _2$4 = [({
    "binding": 0,
    "resource": _2$2
  }), ({
    "binding": 1,
    "resource": _2$3
  })];
  var bindGroup = $x_1.createBindGroup(({
    "layout": _2$1,
    "entries": _2$4
  }));
  pass.setPipeline($p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline(this));
  pass.setBindGroup(0, bindGroup);
  pass.draw(3);
  pass.end();
  this.aY.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  fn: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Painter$() {
}
$p = $c_Ltrivalibs_graphics_painter_Painter$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter$() {
}
$h_Ltrivalibs_graphics_painter_Painter$.prototype = $p;
$p.pY = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().pP();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).aO;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().pO(canvas);
        var format = maybeGpu.getPreferredCanvasFormat();
        context.configure(({
          "device": device$2,
          "format": format
        }));
        var painter = new $c_Ltrivalibs_graphics_painter_Painter(device$2, queue, canvas, context, format);
        var w = (canvas.clientWidth | 0);
        var h = (canvas.clientHeight | 0);
        canvas.width = w;
        canvas.height = h;
        var observer = new ResizeObserver(((entries$3) => {
          var entry = entries$3[0];
          var rw = (+entry.contentRect.width);
          var rh = (+entry.contentRect.height);
          if (((rw > 0.0) && (rh > 0.0))) {
            canvas.width = $doubleToInt(rw);
            canvas.height = $doubleToInt(rh);
            painter.pH(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().i2(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().i2(f$proxy11));
  }
});
$p.pX = (function(canvas, setup) {
  var promise$proxy4 = this.pY(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().i2(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  fo: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.hE !== null)) {
    var opt$proxy4 = $thiz.hE;
    opt$proxy4.destroy();
  }
  if (($thiz.hH !== null)) {
    var opt$proxy6 = $thiz.hH;
    opt$proxy6.destroy();
  }
  var depthUsage = ($thiz.hD ? 20 : 16);
  var $x_1 = $thiz.g5.g;
  var value = $thiz.gZ;
  var value$1 = $thiz.gY;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.h0 ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.hE = depthTex;
  $thiz.iX = depthTex.createView();
  if (($thiz.hD && $thiz.h0)) {
    var $x_2 = $thiz.g5.g;
    var value$2 = $thiz.gZ;
    var value$3 = $thiz.gY;
    var _2$2 = ({
      "width": value$2,
      "height": value$3
    });
    var resTex = $x_2.createTexture(({
      "size": _2$2,
      "format": "depth24plus",
      "usage": 20,
      "sampleCount": 1
    }));
    $thiz.hH = resTex;
    $thiz.hI = resTex.createView();
    $thiz.hG = true;
  } else {
    $thiz.hH = null;
    $thiz.hI = null;
    $thiz.hG = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.c5.length | 0))) {
    if ($thiz.c5[i].nV()) {
      return true;
    }
    i = ((1 + i) | 0);
  }
  return false;
}
function $p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle($thiz, tex, mipCount) {
  var perMip = [];
  var m = 0;
  while ((m < mipCount)) {
    var value = m;
    var $x_1 = tex.createView(({
      "baseMipLevel": value,
      "mipLevelCount": 1
    }));
    perMip.push($x_1);
    m = ((1 + m) | 0);
  }
  return new $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, tex.createView());
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O($thiz, format$1) {
  return ((format$1 === (void 0)) ? (void 0) : [format$1]);
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O($thiz, shape$1) {
  return ((shape$1 === (void 0)) ? (void 0) : [shape$1]);
}
function $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O($thiz, layer$1) {
  return ((layer$1 === (void 0)) ? (void 0) : [layer$1]);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Panel(painter) {
  this.g5 = null;
  this.j2 = 0;
  this.j1 = 0;
  this.iZ = null;
  this.hJ = false;
  this.h0 = false;
  this.hK = 0;
  this.g4 = null;
  this.j0 = null;
  this.c5 = null;
  this.hL = null;
  this.ko = 0;
  this.g3 = 0;
  this.bv = null;
  this.aa = null;
  this.hE = null;
  this.iX = null;
  this.hD = false;
  this.hH = null;
  this.hI = null;
  this.hG = false;
  this.hF = null;
  this.iY = null;
  this.gZ = 0;
  this.gY = 0;
  this.g5 = painter;
  this.j2 = 0;
  this.j1 = 0;
  this.iZ = null;
  this.hJ = false;
  this.h0 = false;
  this.hK = 1;
  this.g4 = [];
  this.j0 = [];
  this.c5 = [];
  this.hL = ({});
  $m_Ltrivalibs_graphics_painter_panel$package$().j5 = ((1 + $m_Ltrivalibs_graphics_painter_panel$package$().j5) | 0);
  this.ko = $m_Ltrivalibs_graphics_painter_panel$package$().j5;
  this.g3 = 0;
  this.bv = [];
  this.aa = [];
  this.hE = null;
  this.iX = null;
  this.hD = false;
  this.hH = null;
  this.hI = null;
  this.hG = false;
  this.hF = [];
  this.iY = [];
  this.gZ = 0;
  this.gY = 0;
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.kZ = (function() {
  if ((this.hK === 0)) {
    var a = this.gZ;
    var b = this.gY;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.hK;
  }
});
$p.kU = (function() {
  return (((this.g4.length | 0) === 0) ? [this.g5.gX] : this.g4);
});
$p.rr = (function() {
  return (this.kU().length | 0);
});
$p.jr = (function() {
  var TextureViewBundle_this = this.aa[0];
  return TextureViewBundle_this.aZ[0];
});
$p.qX = (function() {
  var TextureViewBundle_this = this.aa[1];
  return TextureViewBundle_this.aZ[0];
});
$p.o0 = (function() {
  return this.iX;
});
$p.r7 = (function() {
  return this.hI;
});
$p.ov = (function(index) {
  return this.iY[index];
});
$p.rp = (function() {
  var t = this.bv[0];
  this.bv[0] = this.bv[1];
  this.bv[1] = t;
  var sv = this.aa[0];
  this.aa[0] = this.aa[1];
  this.aa[1] = sv;
  this.g3 = ((1 + this.g3) | 0);
});
$p.pq = (function() {
  if (((!this.hD) && (this.hE !== null))) {
    this.hD = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.hG ? this.hI : this.iX);
});
$p.pa = (function(index, mipLevel, depth) {
  return new ($a_Ltrivalibs_graphics_painter_PanelBinding())(this, index, mipLevel, depth);
});
$p.iq = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.j2 = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.j1 = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.iZ = ((clearColor === null) ? null : new $c_Ltrivalibs_graphics_math_cpu_Vec4(clearColor.gS, clearColor.gT, clearColor.gU, clearColor.gR));
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.hJ = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.h0 = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.hK = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.hK = v$5;
    }
  }
  var x$1 = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x$1 !== (void 0))) {
    this.g4 = x$1;
  }
  var x$2 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$2 !== (void 0))) {
    this.j0 = x$2;
  }
  var x$3 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$3 !== (void 0))) {
    this.c5 = x$3;
  }
  if ((((this.g4.length | 0) > 1) && $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this))) {
    throw new $c_sjs_js_JavaScriptException(Error("Panel: MRT (multiple formats) cannot host auto-pong layers. Chain a single-format panel for post-processing instead.")).aO;
  }
  return this;
});
$p.pA = (function(canvasW, canvasH) {
  var targetW = ((this.j2 === 0) ? canvasW : this.j2);
  var targetH = ((this.j1 === 0) ? canvasH : this.j1);
  if (((targetW !== this.gZ) || (targetH !== this.gY))) {
    var d = 0;
    while ((d < (this.bv.length | 0))) {
      this.bv[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.hF.length | 0))) {
      this.hF[d].destroy();
      d = ((1 + d) | 0);
    }
    this.gZ = targetW;
    this.gY = targetH;
    var mipCount = this.kZ();
    var fmts = this.kU();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.bv = [];
    this.aa = [];
    this.hF = [];
    this.iY = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.g5.g;
      var _2 = ({
        "width": targetW,
        "height": targetH
      });
      var tex = $x_1.createTexture(({
        "size": _2,
        "format": fmt,
        "usage": 20,
        "mipLevelCount": mipCount
      }));
      this.bv.push(tex);
      this.aa.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, tex, mipCount));
      if (this.h0) {
        var $x_2 = this.g5.g;
        var _2$1 = ({
          "width": targetW,
          "height": targetH
        });
        var msaaTex = $x_2.createTexture(({
          "size": _2$1,
          "format": fmt,
          "sampleCount": 4,
          "usage": 16
        }));
        this.hF.push(msaaTex);
        this.iY.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (hasPong) {
      var $x_3 = this.g5.g;
      var _2$2 = ({
        "width": targetW,
        "height": targetH
      });
      var f$proxy3 = fmts[0];
      var pongTex = $x_3.createTexture(({
        "size": _2$2,
        "format": f$proxy3,
        "usage": 20,
        "mipLevelCount": mipCount
      }));
      this.bv.push(pongTex);
      this.aa.push($p_Ltrivalibs_graphics_painter_Panel__buildViews__Ltrivalibs_graphics_painter_GPUTexture__I__Ltrivalibs_graphics_painter_TextureViewBundle(this, pongTex, mipCount));
    }
    if (this.hJ) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
    this.g3 = ((1 + this.g3) | 0);
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  fp: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.nj = 0;
  this.j4 = null;
  this.kq = null;
  this.kp = null;
  this.j3 = null;
  this.nk = null;
  this.F = null;
  this.aA = null;
  this.nj = id;
  this.j4 = shaderModule;
  this.kq = vertexBufferLayout;
  this.kp = valueBindGroupLayout;
  this.j3 = panelBindGroupLayout;
  this.nk = pipelineLayout;
  this.F = uniformIndices;
  this.aA = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  fq: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_TextureViewBundle(perMip, sampling) {
  this.aZ = null;
  this.nm = null;
  this.aZ = perMip;
  this.nm = sampling;
}
$p = $c_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_TextureViewBundle;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_TextureViewBundle() {
}
$h_Ltrivalibs_graphics_painter_TextureViewBundle.prototype = $p;
var $d_Ltrivalibs_graphics_painter_TextureViewBundle = new $TypeData().i($c_Ltrivalibs_graphics_painter_TextureViewBundle, "trivalibs.graphics.painter.TextureViewBundle", ({
  fs: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_WebGPU$() {
}
$p = $c_Ltrivalibs_graphics_painter_WebGPU$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_WebGPU$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_WebGPU$() {
}
$h_Ltrivalibs_graphics_painter_WebGPU$.prototype = $p;
$p.pP = (function() {
  return window.navigator.gpu;
});
$p.pO = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  ft: 1
}));
var $n_Ltrivalibs_graphics_painter_WebGPU$;
function $m_Ltrivalibs_graphics_painter_WebGPU$() {
  if ((!$n_Ltrivalibs_graphics_painter_WebGPU$)) {
    $n_Ltrivalibs_graphics_painter_WebGPU$ = new $c_Ltrivalibs_graphics_painter_WebGPU$();
  }
  return $n_Ltrivalibs_graphics_painter_WebGPU$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_panel$package$() {
  this.j5 = 0;
  this.j5 = 0;
}
$p = $c_Ltrivalibs_graphics_painter_panel$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_panel$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_panel$package$() {
}
$h_Ltrivalibs_graphics_painter_panel$package$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_panel$package$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_panel$package$, "trivalibs.graphics.painter.panel$package$", ({
  fu: 1
}));
var $n_Ltrivalibs_graphics_painter_panel$package$;
function $m_Ltrivalibs_graphics_painter_panel$package$() {
  if ((!$n_Ltrivalibs_graphics_painter_panel$package$)) {
    $n_Ltrivalibs_graphics_painter_panel$package$ = new $c_Ltrivalibs_graphics_painter_panel$package$();
  }
  return $n_Ltrivalibs_graphics_painter_panel$package$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, in$1, sensitivity, speed) {
  this.nn = null;
  this.ax = null;
  this.ku = 0.0;
  this.no = 0.0;
  this.nn = cam;
  this.ax = in$1;
  this.ku = sensitivity;
  this.no = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.gg = (function(tpf) {
  var dist = ((this.no * tpf) / 1000.0);
  var forward = 0.0;
  if (((this.ax.aF.be("KeyW") || this.ax.aF.be("ArrowUp")) || (this.ax.kG.g9 && (this.ax.aF.ox() === 1)))) {
    forward = (forward + dist);
  }
  if ((((this.ax.aF.be("KeyS") || this.ax.aF.be("ArrowDown")) || this.ax.aF.q1(2)) || (this.ax.aF.ox() >= 2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.ax.aF.be("KeyA") || this.ax.aF.be("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.ax.aF.be("KeyD") || this.ax.aF.be("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.ax.aF.be("Space")) {
    up = (up + dist);
  }
  if ((this.ax.aF.be("ShiftLeft") || this.ax.aF.be("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.ax.kF.pp();
  var deltaH = (((+drag.a0()) * this.ku) / 1000.0);
  var deltaV = (((+drag.a1()) * this.ku) / 1000.0);
  this.nn.qI(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  fv: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.bL = 0.0;
  this.g6 = 0.0;
  this.h2 = 0.0;
  this.h1 = 0.0;
  this.aR = 0.0;
  this.bM = 0.0;
  this.af = null;
  this.j6 = null;
  this.bL = fov;
  this.g6 = aspect;
  this.h2 = near;
  this.h1 = far;
  this.aR = rotH;
  this.bM = rotV;
  this.af = pos;
  this.j6 = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.l3 = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.bL) || (aspect !== this.g6)) || (near !== this.h2)) || (far !== this.h1));
  this.bL = fov;
  this.g6 = aspect;
  this.h2 = near;
  this.h1 = far;
  if ((rotH !== this.aR)) {
    this.aR = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().la(rotH);
  }
  if ((rotV !== this.bM)) {
    this.bM = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().l8(rotV);
  }
  this.af = pos;
  if (needsProj) {
    this.j6 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().l9(this.bL, this.g6), aspect, near, far);
  }
});
$p.qI = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.aR = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().la((this.aR + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.bM = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().l8((this.bM + deltaV));
  }
  if ((up !== 0.0)) {
    this.af = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.af.x, (this.af.I + up), this.af.y);
  }
  if ((forward !== 0.0)) {
    var $x_4 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().G();
    var $x_3 = this.af;
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().G();
    var p$proxy1 = this.aR;
    var x$1 = (-(+Math.sin(p$proxy1)));
    var p$proxy2 = this.aR;
    this.af = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_4, $x_3, $x_2, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_1, new $c_Ltrivalibs_graphics_math_cpu_Vec3(x$1, 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_9 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().G();
    var $x_8 = this.af;
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_6 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().G();
    var p$proxy3 = this.aR;
    var $x_5 = Math.cos(p$proxy3);
    var p$proxy4 = this.aR;
    this.af = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_9, $x_8, $x_7, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_5)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.rw = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.af, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().o7(this.aR), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().pN(this.bM)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.oH = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().h9();
  var t = this.rw();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().o8(t.nr, t.np, t.nq), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  fw: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera$;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera$.prototype = $p;
$p.la = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.l8 = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.l9 = (function(fov, aspect) {
  var p$proxy5 = (0.5 * fov);
  var p$proxy6 = ((+Math.tan(p$proxy5)) / (+Math.min(aspect, 1.0)));
  return (2.0 * (+Math.atan(p$proxy6)));
});
$p.oZ = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), this.l9(fov, aspect), aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.la(rotH), this.l8(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  fx: 1
}));
var $n_Ltrivalibs_graphics_scene_PerspectiveCamera$;
function $m_Ltrivalibs_graphics_scene_PerspectiveCamera$() {
  if ((!$n_Ltrivalibs_graphics_scene_PerspectiveCamera$)) {
    $n_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $c_Ltrivalibs_graphics_scene_PerspectiveCamera$();
  }
  return $n_Ltrivalibs_graphics_scene_PerspectiveCamera$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_Transform(translation, rotation, scale) {
  this.nr = null;
  this.np = null;
  this.nq = null;
  this.nr = translation;
  this.np = rotation;
  this.nq = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  fy: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.aU) + ") ") + b.aK) + ": ")) + b.b3);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().oJ($m_sjs_js_ArrayOps$().oI(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.a0();
        if ((x11 !== null)) {
          var name = x11.a0();
          var typ = x11.a1();
          var $x_1 = (((((("  @location(" + (x0.a1() | 0)) + ") ") + name) + ": ") + typ) + ",");
          break matchResult3;
        }
      }
      throw new $c_s_MatchError(x0);
    }
    res[$x_2] = $x_1;
    i = ((1 + i) | 0);
  }
  var len$1 = (builtins.length | 0);
  var res$1 = new Array(len$1);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    var $x_4 = i$1;
    var x0$1 = builtins[i$1];
    matchResult4: {
      var $x_3;
      if ((x0$1 !== null)) {
        var name$1 = x0$1.aK;
        var builtin = x0$1.aU;
        var typ$1 = x0$1.b3;
        var $x_3 = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
        break matchResult4;
      }
      throw new $c_s_MatchError(x0$1);
    }
    res$1[$x_4] = $x_3;
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().a(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().oJ($m_sjs_js_ArrayOps$().oI(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.a0();
        if ((x20 !== null)) {
          var name = x20.a0();
          var typ = x20.a1();
          var bindingIdx = (x0.a1() | 0);
          var $x_2 = ((typ === "sampler") ? (((((("@group(" + groupIdx) + ") @binding(") + bindingIdx) + ") var ") + name) + ": sampler;") : (((((((("@group(" + groupIdx) + ") @binding(") + bindingIdx) + ") var<uniform> ") + name) + ": ") + typ) + ";"));
          break matchResult5;
        }
      }
      throw new $c_s_MatchError(x0);
    }
    res[$x_3] = $x_2;
    i = ((1 + i) | 0);
  }
  var $x_1 = res.join("\n");
  return $x_1;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_derive$() {
}
$p = $c_Ltrivalibs_graphics_shader_derive$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_derive$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_derive$() {
}
$h_Ltrivalibs_graphics_shader_derive$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_derive$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_derive$, "trivalibs.graphics.shader.derive$", ({
  fB: 1
}));
var $n_Ltrivalibs_graphics_shader_derive$;
function $m_Ltrivalibs_graphics_shader_derive$() {
  if ((!$n_Ltrivalibs_graphics_shader_derive$)) {
    $n_Ltrivalibs_graphics_shader_derive$ = new $c_Ltrivalibs_graphics_shader_derive$();
  }
  return $n_Ltrivalibs_graphics_shader_derive$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(target) {
  this.T = null;
  this.T = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  fC: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.kv = null;
  this.a3 = null;
  this.kv = ({});
  this.a3 = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.oG = (function(d) {
  if ((!(!(!(!(!this.kv.hasOwnProperty(d.name))))))) {
    this.kv[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.oG(array[i]);
      i = ((1 + i) | 0);
    }
    this.a3.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  fD: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.n = null;
  this.n = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.js = (function(d) {
  var r = this.n;
  if ((r !== null)) {
    r.oG(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  fE: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
function $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_FnRegistry$)) {
    $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(in$1, out, bindings, locals, textures) {
  this.a5 = null;
  this.am = null;
  this.N = null;
  this.oP = null;
  this.h3 = null;
  this.a5 = in$1;
  this.am = out;
  this.N = bindings;
  this.oP = textures;
  this.h3 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "in.position");
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  fF: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.kw.hasOwnProperty(data.name))))))) {
    var dict = $thiz.kw;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.kx.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.a8 = null;
  this.kx = null;
  this.kw = null;
  this.a8 = "";
  this.kx = [];
  this.kw = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.ao = (function() {
  return this.kx.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  fG: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.ky.hasOwnProperty(data.name))))))) {
    var dict = $thiz.ky;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.kz.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.b0 = null;
  this.aE = null;
  this.kz = null;
  this.ky = null;
  this.b0 = "";
  this.aE = "";
  this.kz = [];
  this.ky = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.ao = (function() {
  return this.kz.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  fH: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.bx = null;
  this.b8 = null;
  this.hO = null;
  this.bx = in$1;
  this.b8 = out;
  this.hO = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  fM: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
}
$h_Ltrivalibs_graphics_shader_dsl_WgslFnData$.prototype = $p;
$p.oR = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  fP: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
function $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_WgslFnData$)) {
    $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $c_Ltrivalibs_graphics_shader_dsl_WgslFnData$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_WgslFnData$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
}
$h_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$.prototype = $p;
$p.jn = (function(fn) {
  return fn.name;
});
$p.bi = (function(fn, ds) {
  var seen = ({});
  var merged = [];
  var i = 0;
  while ((i < (fn.deps.length | 0))) {
    var d = fn.deps[i];
    if ((!(!(!(!(!seen.hasOwnProperty(d.name))))))) {
      seen[d.name] = true;
      merged.push(d);
    }
    i = ((1 + i) | 0);
  }
  ds.c7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  fQ: 1
}));
var $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
function $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$() {
  if ((!$n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$)) {
    $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  }
  return $n_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$;
}
function $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($thiz, sizes) {
  var offsets = [];
  var elem = 0;
  elem = 0;
  var len = (sizes.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = sizes[i];
    var size = (x0 | 0);
    offsets.push(elem);
    elem = ((elem + size) | 0);
    i = ((1 + i) | 0);
  }
  return offsets;
}
function $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($thiz, sizes) {
  var elem = 0;
  elem = 0;
  var len = (sizes.length | 0);
  var i = 0;
  while ((i < len)) {
    var x0 = sizes[i];
    var size = (x0 | 0);
    elem = ((elem + size) | 0);
    i = ((1 + i) | 0);
  }
  return elem;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_layouts$() {
}
$p = $c_Ltrivalibs_graphics_shader_layouts$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_layouts$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_layouts$() {
}
$h_Ltrivalibs_graphics_shader_layouts$.prototype = $p;
$p.M = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  fR: 1
}));
var $n_Ltrivalibs_graphics_shader_layouts$;
function $m_Ltrivalibs_graphics_shader_layouts$() {
  if ((!$n_Ltrivalibs_graphics_shader_layouts$)) {
    $n_Ltrivalibs_graphics_shader_layouts$ = new $c_Ltrivalibs_graphics_shader_layouts$();
  }
  return $n_Ltrivalibs_graphics_shader_layouts$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
  this.nu = null;
  this.nt = null;
  this.nv = null;
  $n_Ltrivalibs_graphics_shader_lib_blur_Blur$ = this;
  var names = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["diameter"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], []))))));
  var types = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))))));
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn gaussian_blur(" + paramList) + ") -> vec4<f32> {\n  let sigma = diameter * 0.25;\n  let support: i32 = i32(ceil(sigma * 1.5));\n  let offset = dir / res;\n  let exp_factor = -1.0 / (2.0 * sigma * sigma);\n  var sum = textureSample(tex, s, uv);\n  var weight_sum = 1.0;\n  var i: i32 = 1;\n  while (i <= support) {\n    let j = f32(i);\n    let w0 = exp(exp_factor * j * j);\n    let w1 = exp(exp_factor * (j + 1.0) * (j + 1.0));\n    let uv_offset = offset * (j + w1 / (w0 + w1));\n    let weight = w0 + w1;\n    sum += (textureSample(tex, s, uv + uv_offset) + textureSample(tex, s, uv - uv_offset)) * weight;\n    weight_sum += weight * 2.0;\n    i = i + 2;\n  }\n  return sum / weight_sum;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur", src);
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], [])))));
  var types$2 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])))));
  var parts$2 = [];
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    parts$2.push(((names$2[i$2] + ": ") + types$2[i$2]));
    i$2 = ((1 + i$2) | 0);
  }
  var paramList$2 = parts$2.join(", ");
  var src$2 = (("fn gaussian_blur_5(" + paramList$2) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.3333333333333333) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.29411764705882354;\n  color += textureSample(tex, s, uv + off1) * 0.35294117647058826;\n  color += textureSample(tex, s, uv - off1) * 0.35294117647058826;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_5", src$2);
  var names$3 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], [])))));
  var types$3 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])))));
  var parts$3 = [];
  var i$3 = 0;
  while ((i$3 < (names$3.length | 0))) {
    parts$3.push(((names$3[i$3] + ": ") + types$3[i$3]));
    i$3 = ((1 + i$3) | 0);
  }
  var paramList$3 = parts$3.join(", ");
  var src$3 = (("fn gaussian_blur_9(" + paramList$3) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.3846153846) * dir / res;\n  let off2 = vec2<f32>(3.2307692308) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.2270270270;\n  color += textureSample(tex, s, uv + off1) * 0.3162162162;\n  color += textureSample(tex, s, uv - off1) * 0.3162162162;\n  color += textureSample(tex, s, uv + off2) * 0.0702702703;\n  color += textureSample(tex, s, uv - off2) * 0.0702702703;\n  return color;\n}");
  this.nu = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_9", src$3);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], [])))));
  var types$4 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])))));
  var parts$4 = [];
  var i$4 = 0;
  while ((i$4 < (names$4.length | 0))) {
    parts$4.push(((names$4[i$4] + ": ") + types$4[i$4]));
    i$4 = ((1 + i$4) | 0);
  }
  var paramList$4 = parts$4.join(", ");
  var src$4 = (("fn gaussian_blur_13(" + paramList$4) + ") -> vec4<f32> {\n  let off1 = vec2<f32>(1.411764705882353) * dir / res;\n  let off2 = vec2<f32>(3.2941176470588234) * dir / res;\n  let off3 = vec2<f32>(5.176470588235294) * dir / res;\n  var color = textureSample(tex, s, uv) * 0.1964825501511404;\n  color += textureSample(tex, s, uv + off1) * 0.2969069646728344;\n  color += textureSample(tex, s, uv - off1) * 0.2969069646728344;\n  color += textureSample(tex, s, uv + off2) * 0.09447039785044732;\n  color += textureSample(tex, s, uv - off2) * 0.09447039785044732;\n  color += textureSample(tex, s, uv + off3) * 0.010381362401148057;\n  color += textureSample(tex, s, uv - off3) * 0.010381362401148057;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_13", src$4);
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["diameter"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["dir"], []))))));
  var types$5 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []))))));
  var parts$5 = [];
  var i$5 = 0;
  while ((i$5 < (names$5.length | 0))) {
    parts$5.push(((names$5[i$5] + ": ") + types$5[i$5]));
    i$5 = ((1 + i$5) | 0);
  }
  var paramList$5 = parts$5.join(", ");
  var src$5 = (("fn box_blur(" + paramList$5) + ") -> vec4<f32> {\n  let support: i32 = i32(floor(diameter * 0.5));\n  let offset = dir / res;\n  var sum = textureSample(tex, s, uv);\n  var i: i32 = 1;\n  while (i <= support) {\n    sum += textureSample(tex, s, uv + offset * f32(i)) + textureSample(tex, s, uv - offset * f32(i));\n    i = i + 1;\n  }\n  return sum / (1.0 + f32(support) * 2.0);\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur", src$5);
  var names$6 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], [])))));
  var types$6 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], [])))));
  var parts$6 = [];
  var i$6 = 0;
  while ((i$6 < (names$6.length | 0))) {
    parts$6.push(((names$6[i$6] + ": ") + types$6[i$6]));
    i$6 = ((1 + i$6) | 0);
  }
  var paramList$6 = parts$6.join(", ");
  var src$6 = (("fn box_blur_2d(" + paramList$6) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n  var color = textureSample(tex, s, uv - o);\n  color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n  color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n  color += textureSample(tex, s, uv + o);\n  return color * 0.25;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur_2d", src$6);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["res"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], [])))));
  var types$7 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], [])))));
  var parts$7 = [];
  var i$7 = 0;
  while ((i$7 < (names$7.length | 0))) {
    parts$7.push(((names$7[i$7] + ": ") + types$7[i$7]));
    i$7 = ((1 + i$7) | 0);
  }
  var paramList$7 = parts$7.join(", ");
  var src$7 = (("fn tent_blur_2d(" + paramList$7) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / res;\n  var color = textureSample(tex, s, uv) * 0.25;\n  color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n  color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n  return color;\n}");
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tent_blur_2d", src$7);
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], []))));
  var types$8 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$8 = [];
  var i$8 = 0;
  while ((i$8 < (names$8.length | 0))) {
    parts$8.push(((names$8[i$8] + ": ") + types$8[i$8]));
    i$8 = ((1 + i$8) | 0);
  }
  var paramList$8 = parts$8.join(", ");
  var src$8 = (("fn box_blur_2d_auto(" + paramList$8) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n  var color = textureSample(tex, s, uv - o);\n  color += textureSample(tex, s, uv + vec2<f32>(o.x, -o.y));\n  color += textureSample(tex, s, uv + vec2<f32>(-o.x, o.y));\n  color += textureSample(tex, s, uv + o);\n  return color * 0.25;\n}");
  this.nt = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur_2d_auto", src$8);
  var names$9 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["s"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], $m_sjs_js_ArrayOpsCommon$().a(["radius"], []))));
  var types$9 = $m_sjs_js_ArrayOpsCommon$().a(["texture_2d<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["sampler"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$9 = [];
  var i$9 = 0;
  while ((i$9 < (names$9.length | 0))) {
    parts$9.push(((names$9[i$9] + ": ") + types$9[i$9]));
    i$9 = ((1 + i$9) | 0);
  }
  var paramList$9 = parts$9.join(", ");
  var src$9 = (("fn tent_blur_2d_auto(" + paramList$9) + ") -> vec4<f32> {\n  let o = vec2<f32>(radius) / vec2<f32>(textureDimensions(tex));\n  var color = textureSample(tex, s, uv) * 0.25;\n  color += (textureSample(tex, s, uv + vec2<f32>(0.0, o.y)) + textureSample(tex, s, uv + vec2<f32>(0.0, -o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, 0.0)) + textureSample(tex, s, uv + vec2<f32>(-o.x, 0.0))) * 0.125;\n  color += (textureSample(tex, s, uv + o) + textureSample(tex, s, uv + vec2<f32>(-o.x, o.y)) + textureSample(tex, s, uv + vec2<f32>(o.x, -o.y)) + textureSample(tex, s, uv - o)) * 0.0625;\n  return color;\n}");
  this.nv = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tent_blur_2d_auto", src$9);
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$, "trivalibs.graphics.shader.lib.blur.Blur$", ({
  fS: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
function $m_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_blur_Blur$)) {
    $n_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $c_Ltrivalibs_graphics_shader_lib_blur_Blur$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
  this.j7 = null;
  this.j8 = null;
  this.j9 = null;
  this.nw = null;
  this.nx = null;
  this.kC = null;
  this.ny = null;
  this.nz = null;
  $n_Ltrivalibs_graphics_shader_lib_random_Simplex$ = this;
  var names = $m_sjs_js_ArrayOpsCommon$().a(["x"], []);
  var types = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []);
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn permute_3_(" + paramList) + ") -> vec3<f32> {\n  return (((x * 34.) + 1.) * x) % vec3(289.);\n}");
  this.j7 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_3_", src);
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["x"], []);
  var types$2 = $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []);
  var parts$2 = [];
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    parts$2.push(((names$2[i$2] + ": ") + types$2[i$2]));
    i$2 = ((1 + i$2) | 0);
  }
  var paramList$2 = parts$2.join(", ");
  var src$2 = (("fn permute_4_(" + paramList$2) + ") -> vec4<f32> {\n  return ((x * 34. + 1.) * x) % vec4<f32>(289.);\n}");
  this.j8 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_4_", src$2);
  var names$3 = $m_sjs_js_ArrayOpsCommon$().a(["r"], []);
  var types$3 = $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []);
  var parts$3 = [];
  var i$3 = 0;
  while ((i$3 < (names$3.length | 0))) {
    parts$3.push(((names$3[i$3] + ": ") + types$3[i$3]));
    i$3 = ((1 + i$3) | 0);
  }
  var paramList$3 = parts$3.join(", ");
  var src$3 = (("fn taylor_inv_sqrt_4_(" + paramList$3) + ") -> vec4<f32> {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}");
  this.j9 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("taylor_inv_sqrt_4_", src$3);
  var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["v"], []);
  var types$4 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []);
  var parts$4 = [];
  var i$4 = 0;
  while ((i$4 < (names$4.length | 0))) {
    parts$4.push(((names$4[i$4] + ": ") + types$4[i$4]));
    i$4 = ((1 + i$4) | 0);
  }
  var paramList$4 = parts$4.join(", ");
  var src$4 = (("fn simplex_noise_2d(" + paramList$4) + ") -> f32 {\n\n    let C = vec4(\n        0.211324865405187,\n        0.366025403784439,\n        -0.577350269189626,\n        0.024390243902439\n    );\n    // first corner\n    var i = floor(v + dot(v, C.yy));\n    let x0 = v - i + dot(i, C.xx);\n    // other corners\n    var i1 = select(vec2(0., 1.), vec2(1., 0.), x0.x > x0.y);\n    var x12 = x0.xyxy + C.xxzz - vec4(i1, 0., 0.);\n    // permutations\n    i = i % vec2(289.);\n    let p = permute_3_(permute_3_(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));\n    var m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), vec3(0.));\n    m *= m;\n    m *= m;\n    // gradients: 41 points uniformly over a line, mapped onto a diamond\n    let x = 2. * fract(p * C.www) - 1.;\n    let h = abs(x) - 0.5;\n    let ox = floor(x + 0.5);\n    let a0 = x - ox;\n    m = m * (1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h));\n    let g = vec3(a0.x * x0.x + h.x * x0.y, a0.yz * x12.xz + h.yz * x12.yw);\n    return 130. * dot(m, g);\n}");
  this.nw = $x_1.bi(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d", src$4), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.j7]))));
  var $x_2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["v"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], []));
  var types$5 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []));
  var parts$5 = [];
  var i$5 = 0;
  while ((i$5 < (names$5.length | 0))) {
    parts$5.push(((names$5[i$5] + ": ") + types$5[i$5]));
    i$5 = ((1 + i$5) | 0);
  }
  var paramList$5 = parts$5.join(", ");
  var src$5 = (("fn simplex_noise_2d_seeded(" + paramList$5) + ") -> f32 {\n\n    let C = vec4(\n        0.211324865405187,\n        0.366025403784439,\n        -0.577350269189626,\n        0.024390243902439\n    );\n    // first corner\n    var i = floor(v + dot(v, C.yy));\n    let x0 = v - i + dot(i, C.xx);\n    // other corners\n    var i1 = select(vec2(0., 1.), vec2(1., 0.), x0.x > x0.y);\n    var x12 = x0.xyxy + C.xxzz - vec4(i1, 0., 0.);\n    // permutations\n    i = i % vec2(289.);\n    var p = permute_3_(permute_3_(i.y + vec3(0., i1.y, 1.)) + i.x + vec3(0., i1.x, 1.));\n    p = permute_3_(p + vec3(seed));\n    var m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), vec3(0.));\n    m *= m;\n    m *= m;\n    let x = 2. * fract(p * C.www) - 1.;\n    let h = abs(x) - 0.5;\n    let ox = floor(x + 0.5);\n    let a0 = x - ox;\n    m = m * (1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h));\n    let g = vec3(a0.x * x0.x + h.x * x0.y, a0.yz * x12.xz + h.yz * x12.yw);\n    return 130. * dot(m, g);\n}");
  this.nx = $x_2.bi(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_2d_seeded", src$5), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.j7]))));
  var $x_3 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$6 = $m_sjs_js_ArrayOpsCommon$().a(["v"], []);
  var types$6 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []);
  var parts$6 = [];
  var i$6 = 0;
  while ((i$6 < (names$6.length | 0))) {
    parts$6.push(((names$6[i$6] + ": ") + types$6[i$6]));
    i$6 = ((1 + i$6) | 0);
  }
  var paramList$6 = parts$6.join(", ");
  var src$6 = (("fn simplex_noise_3d(" + paramList$6) + ") -> f32 {\n\n    let C = vec2(1. / 6., 1. / 3.);\n    let D = vec4(0., 0.5, 1., 2.);\n    // first corner\n    var i = floor(v + dot(v, C.yyy));\n    let x0 = v - i + dot(i, C.xxx);\n    // other corners\n    let g = step(x0.yzx, x0.xyz);\n    let l = 1. - g;\n    let i1 = min(g.xyz, l.zxy);\n    let i2 = max(g.xyz, l.zxy);\n    let x1 = x0 - i1 + 1. * C.xxx;\n    let x2 = x0 - i2 + 2. * C.xxx;\n    let x3 = x0 - 1. + 3. * C.xxx;\n    // permutations\n    i = i % vec3(289.);\n    let p = permute_4_(permute_4_(permute_4_(\n        i.z + vec4(0., i1.z, i2.z, 1.)) +\n        i.y + vec4(0., i1.y, i2.y, 1.)) +\n        i.x + vec4(0., i1.x, i2.x, 1.)\n    );\n    // gradients (NxN points uniformly over a square, mapped onto an octahedron)\n    let n_ = 1. / 7.;\n    let ns = n_ * D.wyz - D.xzx;\n    let j = p - 49. * floor(p * ns.z * ns.z);\n    let x_ = floor(j * ns.z);\n    let y_ = floor(j - 7. * x_);\n    let x = x_ * ns.x + ns.yyyy;\n    let y = y_ * ns.x + ns.yyyy;\n    let h = 1. - abs(x) - abs(y);\n    let b0 = vec4(x.xy, y.xy);\n    let b1 = vec4(x.zw, y.zw);\n    let s0 = floor(b0) * 2. + 1.;\n    let s1 = floor(b1) * 2. + 1.;\n    let sh = -step(h, vec4(0.));\n    let a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n    let a1 = b1.xzyw + s1.xzyw * sh.zzww;\n    var p0 = vec3(a0.xy, h.x);\n    var p1 = vec3(a0.zw, h.y);\n    var p2 = vec3(a1.xy, h.z);\n    var p3 = vec3(a1.zw, h.w);\n    // normalize gradients\n    let norm = taylor_inv_sqrt_4_(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    // mix final noise value\n    var m = 0.5 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3));\n    m = max(m, vec4(0.));\n    m *= m;\n    return 105. * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\n}");
  this.kC = $x_3.bi(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d", src$6), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.j8, this.j9]))));
  var $x_4 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["v"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], []));
  var types$7 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []));
  var parts$7 = [];
  var i$7 = 0;
  while ((i$7 < (names$7.length | 0))) {
    parts$7.push(((names$7[i$7] + ": ") + types$7[i$7]));
    i$7 = ((1 + i$7) | 0);
  }
  var paramList$7 = parts$7.join(", ");
  var src$7 = (("fn simplex_noise_3d_seeded(" + paramList$7) + ") -> f32 {\n\n    let C = vec2(1. / 6., 1. / 3.);\n    let D = vec4(0., 0.5, 1., 2.);\n    // first corner\n    var i = floor(v + dot(v, C.yyy));\n    let x0 = v - i + dot(i, C.xxx);\n    // other corners\n    let g = step(x0.yzx, x0.xyz);\n    let l = 1. - g;\n    let i1 = min(g.xyz, l.zxy);\n    let i2 = max(g.xyz, l.zxy);\n    let x1 = x0 - i1 + 1. * C.xxx;\n    let x2 = x0 - i2 + 2. * C.xxx;\n    let x3 = x0 - 1. + 3. * C.xxx;\n    // permutations\n    i = i % vec3(289.);\n    let s = floor(seed + vec3(0.5));\n    let p = permute_4_(permute_4_(permute_4_(\n        i.z + vec4(0., i1.z, i2.z, 1.) + s.z) +\n        i.y + vec4(0., i1.y, i2.y, 1.) + s.y) +\n        i.x + vec4(0., i1.x, i2.x, 1.) + s.x\n    );\n    // gradients (NxN points uniformly over a square, mapped onto an octahedron)\n    let n_ = 1. / 7.;\n    let ns = n_ * D.wyz - D.xzx;\n    let j = p - 49. * floor(p * ns.z * ns.z);\n    let x_ = floor(j * ns.z);\n    let y_ = floor(j - 7. * x_);\n    let x = x_ * ns.x + ns.yyyy;\n    let y = y_ * ns.x + ns.yyyy;\n    let h = 1. - abs(x) - abs(y);\n    let b0 = vec4(x.xy, y.xy);\n    let b1 = vec4(x.zw, y.zw);\n    let s0 = floor(b0) * 2. + 1.;\n    let s1 = floor(b1) * 2. + 1.;\n    let sh = -step(h, vec4(0.));\n    let a0 = b0.xzyw + s0.xzyw * sh.xxyy;\n    let a1 = b1.xzyw + s1.xzyw * sh.zzww;\n    var p0 = vec3(a0.xy, h.x);\n    var p1 = vec3(a0.zw, h.y);\n    var p2 = vec3(a1.xy, h.z);\n    var p3 = vec3(a1.zw, h.w);\n    // normalize gradients\n    let norm = taylor_inv_sqrt_4_(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    // mix final noise value\n    var m = 0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3));\n    m = max(m, vec4(0.));\n    m *= m;\n    return 42. * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));\n}");
  this.ny = $x_4.bi(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_3d_seeded", src$7), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.j8, this.j9]))));
  var $x_5 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], []))));
  var types$8 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$8 = [];
  var i$8 = 0;
  while ((i$8 < (names$8.length | 0))) {
    parts$8.push(((names$8[i$8] + ": ") + types$8[i$8]));
    i$8 = ((1 + i$8) | 0);
  }
  var paramList$8 = parts$8.join(", ");
  var src$8 = (("fn fbm_simplex_2d(" + paramList$8) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_2d(pos * frequency) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_5.bi(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d", src$8), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.nw]))));
  var $x_6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$9 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], [])))));
  var types$9 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], [])))));
  var parts$9 = [];
  var i$9 = 0;
  while ((i$9 < (names$9.length | 0))) {
    parts$9.push(((names$9[i$9] + ": ") + types$9[i$9]));
    i$9 = ((1 + i$9) | 0);
  }
  var paramList$9 = parts$9.join(", ");
  var src$9 = (("fn fbm_simplex_2d_seeded(" + paramList$9) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_2d_seeded(pos * frequency, seed) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_6.bi(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_2d_seeded", src$9), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.nx]))));
  var $x_7 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], []))));
  var types$10 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []))));
  var parts$10 = [];
  var i$10 = 0;
  while ((i$10 < (names$10.length | 0))) {
    parts$10.push(((names$10[i$10] + ": ") + types$10[i$10]));
    i$10 = ((1 + i$10) | 0);
  }
  var paramList$10 = parts$10.join(", ");
  var src$10 = (("fn fbm_simplex_3d(" + paramList$10) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_3d(pos * frequency) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_7.bi(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d", src$10), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.kC]))));
  var $x_8 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["octaves"], $m_sjs_js_ArrayOpsCommon$().a(["lacunarity"], $m_sjs_js_ArrayOpsCommon$().a(["gain"], $m_sjs_js_ArrayOpsCommon$().a(["seed"], [])))));
  var types$11 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["i32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], [])))));
  var parts$11 = [];
  var i$11 = 0;
  while ((i$11 < (names$11.length | 0))) {
    parts$11.push(((names$11[i$11] + ": ") + types$11[i$11]));
    i$11 = ((1 + i$11) | 0);
  }
  var paramList$11 = parts$11.join(", ");
  var src$11 = (("fn fbm_simplex_3d_seeded(" + paramList$11) + ") -> f32 {\n\n    var sum = 0.;\n    var amplitude = 1.;\n    var frequency = 1.;\n    for (var i = 0; i < octaves; i += 1) {\n        sum += simplex_noise_3d_seeded(pos * frequency, seed) * amplitude;\n        amplitude *= gain;\n        frequency *= lacunarity;\n    }\n    return sum;\n}");
  $x_8.bi(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("fbm_simplex_3d_seeded", src$11), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.ny]))));
  var $x_9 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$12 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["jitter"], []));
  var types$12 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []));
  var parts$12 = [];
  var i$12 = 0;
  while ((i$12 < (names$12.length | 0))) {
    parts$12.push(((names$12[i$12] + ": ") + types$12[i$12]));
    i$12 = ((1 + i$12) | 0);
  }
  var paramList$12 = parts$12.join(", ");
  var src$12 = (("fn worley_2d(" + paramList$12) + ") -> vec2<f32> {\n\n    let k = 0.142857142857;\n    let ko = 0.428571428571;\n    let pi = floor(pos);\n    let pf = fract(pos);\n    let oi = vec3(-1.0, 0.0, 1.0);\n    let of_ = vec3(-0.5, 0.5, 1.5);\n    let px = permute_3_(pi.x + oi);\n    var p = permute_3_(px.x + pi.y + oi);\n    var ox = fract(p * k) - ko;\n    var oy = (floor(p * k) % 7.0) * k - ko;\n    var dx = pf.x + 0.5 + jitter * ox;\n    var dy = pf.y - of_ + jitter * oy;\n    var d1 = dx * dx + dy * dy;\n    p = permute_3_(px.y + pi.y + oi);\n    ox = fract(p * k) - ko;\n    oy = (floor(p * k) % 7.0) * k - ko;\n    dx = pf.x - 0.5 + jitter * ox;\n    dy = pf.y - of_ + jitter * oy;\n    var d2 = dx * dx + dy * dy;\n    p = permute_3_(px.z + pi.y + oi);\n    ox = fract(p * k) - ko;\n    oy = (floor(p * k) % 7.0) * k - ko;\n    dx = pf.x - 1.5 + jitter * ox;\n    dy = pf.y - of_ + jitter * oy;\n    let d3 = dx * dx + dy * dy;\n    let d1a = min(d1, d2);\n    d2 = max(d1, d2);\n    d2 = min(d2, d3);\n    d1 = min(d1a, d2);\n    d2 = max(d1a, d2);\n    if d1.x > d1.y {\n        let tmp = d1.x;\n        d1.x = d1.y;\n        d1.y = tmp;\n    }\n    if d1.x > d1.z {\n        let tmp = d1.x;\n        d1.x = d1.z;\n        d1.z = tmp;\n    }\n    d1.y = min(d1.y, d2.y);\n    d1.z = min(d1.z, d2.z);\n    d1.y = min(d1.y, d1.z);\n    d1.y = min(d1.y, d2.x);\n    return sqrt(d1.xy);\n}");
  $x_9.bi(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("worley_2d", src$12), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.j7]))));
  var names$13 = $m_sjs_js_ArrayOpsCommon$().a(["x"], []);
  var types$13 = $m_sjs_js_ArrayOpsCommon$().a(["f32"], []);
  var parts$13 = [];
  var i$13 = 0;
  while ((i$13 < (names$13.length | 0))) {
    parts$13.push(((names$13[i$13] + ": ") + types$13[i$13]));
    i$13 = ((1 + i$13) | 0);
  }
  var paramList$13 = parts$13.join(", ");
  var src$13 = (("fn permute_1_(" + paramList$13) + ") -> f32 {\n  return ((x * 34.0) + 1.0) * x % 289.0;\n}");
  var permute1 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute_1_", src$13);
  var names$14 = $m_sjs_js_ArrayOpsCommon$().a(["r"], []);
  var types$14 = $m_sjs_js_ArrayOpsCommon$().a(["f32"], []);
  var parts$14 = [];
  var i$14 = 0;
  while ((i$14 < (names$14.length | 0))) {
    parts$14.push(((names$14[i$14] + ": ") + types$14[i$14]));
    i$14 = ((1 + i$14) | 0);
  }
  var paramList$14 = parts$14.join(", ");
  var src$14 = (("fn taylor_inv_sqrt_1_(" + paramList$14) + ") -> f32 {\n  return 1.79284291400159 - 0.85373472095314 * r;\n}");
  var taylorInvSqrt1 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("taylor_inv_sqrt_1_", src$14);
  var names$15 = $m_sjs_js_ArrayOpsCommon$().a(["j"], $m_sjs_js_ArrayOpsCommon$().a(["ip"], []));
  var types$15 = $m_sjs_js_ArrayOpsCommon$().a(["f32"], $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []));
  var parts$15 = [];
  var i$15 = 0;
  while ((i$15 < (names$15.length | 0))) {
    parts$15.push(((names$15[i$15] + ": ") + types$15[i$15]));
    i$15 = ((1 + i$15) | 0);
  }
  var paramList$15 = parts$15.join(", ");
  var src$15 = (("fn grad_4_(" + paramList$15) + ") -> vec4<f32> {\n\n    let gj = floor(fract(j * ip.xyz) * 7.0) * ip.z - 1.0;\n    var p = vec4<f32>(gj.x, gj.y, gj.z, 1.5 - dot(abs(gj), vec3<f32>(1.0, 1.0, 1.0)));\n    // s = (p < 0) ? 1 : 0  \u2014 canonical Stegu lessThan(p, 0)\n    let s = vec4<f32>(1.0) - step(vec4<f32>(0.0, 0.0, 0.0, 0.0), p);\n    let dp = (s.xyz * 2.0 - 1.0) * s.www;\n    p.x = p.x + dp.x;\n    p.y = p.y + dp.y;\n    p.z = p.z + dp.z;\n    return p;\n}");
  var grad4 = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("grad_4_", src$15);
  var $x_10 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$16 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], []);
  var types$16 = $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []);
  var parts$16 = [];
  var i$16 = 0;
  while ((i$16 < (names$16.length | 0))) {
    parts$16.push(((names$16[i$16] + ": ") + types$16[i$16]));
    i$16 = ((1 + i$16) | 0);
  }
  var paramList$16 = parts$16.join(", ");
  var src$16 = (("fn simplex_noise_4d(" + paramList$16) + ") -> f32 {\n\n    let c = vec4<f32>(\n        0.138196601125011,\n        0.276393202250021,\n        0.414589803375032,\n        -0.447213595499958\n    );\n    let F4 = 0.309016994374947451;\n    var i = floor(pos + dot(pos, vec4<f32>(F4, F4, F4, F4)));\n    let x0 = pos - i + dot(i, c.xxxx);\n    let is_x = step(x0.yzw, x0.xxx);\n    let is_yz = step(x0.zww, x0.yyz);\n    var i0 = vec4<f32>(is_x.x + is_x.y + is_x.z, 1.0 - is_x.x, 1.0 - is_x.y, 1.0 - is_x.z);\n    i0.y = i0.y + is_yz.x + is_yz.y;\n    i0.z = i0.z + (1.0 - is_yz.x) + is_yz.z;\n    i0.w = i0.w + (1.0 - is_yz.y) + (1.0 - is_yz.z);\n    let i3 = clamp(i0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let i2 = clamp(i0 - 1.0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let i1 = clamp(i0 - 2.0, vec4<f32>(0.0, 0.0, 0.0, 0.0), vec4<f32>(1.0, 1.0, 1.0, 1.0));\n    let x1 = x0 - i1 + c.xxxx;\n    let x2 = x0 - i2 + c.yyyy;\n    let x3 = x0 - i3 + c.zzzz;\n    let x4 = x0 + c.wwww;\n    i = i % vec4<f32>(289.0, 289.0, 289.0, 289.0);\n    let j0 = permute_1_(permute_1_(permute_1_(permute_1_(i.w) + i.z) + i.y) + i.x);\n    let j1 = permute_4_(\n        permute_4_(\n            permute_4_(\n                permute_4_(i.w + vec4<f32>(i1.w, i2.w, i3.w, 1.0)) + i.z + vec4<f32>(i1.z, i2.z, i3.z, 1.0)\n            ) + i.y + vec4<f32>(i1.y, i2.y, i3.y, 1.0)\n        ) + i.x + vec4<f32>(i1.x, i2.x, i3.x, 1.0)\n    );\n    let ip = vec4<f32>(1.0 / 294.0, 1.0 / 49.0, 1.0 / 7.0, 0.0);\n    var p0 = grad_4_(j0, ip);\n    var p1 = grad_4_(j1.x, ip);\n    var p2 = grad_4_(j1.y, ip);\n    var p3 = grad_4_(j1.z, ip);\n    var p4 = grad_4_(j1.w, ip);\n    let norm = taylor_inv_sqrt_4_(vec4<f32>(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\n    p0 = p0 * norm.x;\n    p1 = p1 * norm.y;\n    p2 = p2 * norm.z;\n    p3 = p3 * norm.w;\n    p4 = p4 * taylor_inv_sqrt_1_(dot(p4, p4));\n    var m0 = max(0.6 - vec3<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2)), vec3<f32>(0.0, 0.0, 0.0));\n    var m1 = max(0.6 - vec2<f32>(dot(x3, x3), dot(x4, x4)), vec2<f32>(0.0, 0.0));\n    m0 = m0 * m0;\n    m1 = m1 * m1;\n    return 49.0 * (dot(m0 * m0, vec3<f32>(dot(p0, x0), dot(p1, x1), dot(p2, x2))) + dot(m1 * m1, vec2<f32>(dot(p3, x3), dot(p4, x4))));\n}");
  this.nz = $x_10.bi(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("simplex_noise_4d", src$16), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([permute1, this.j8, taylorInvSqrt1, this.j9, grad4]))));
  var $x_11 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$17 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["scale"], []));
  var types$17 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []));
  var parts$17 = [];
  var i$17 = 0;
  while ((i$17 < (names$17.length | 0))) {
    parts$17.push(((names$17[i$17] + ": ") + types$17[i$17]));
    i$17 = ((1 + i$17) | 0);
  }
  var paramList$17 = parts$17.join(", ");
  var src$17 = (("fn tiling_simplex_noise_2d(" + paramList$17) + ") -> f32 {\n\n    let angle_x = pos.x * 6.28318530718;\n    let angle_y = pos.y * 6.28318530718;\n    let nx = cos(angle_x) * scale;\n    let ny = sin(angle_x) * scale;\n    let nz = cos(angle_y) * scale;\n    let nw = sin(angle_y) * scale;\n    return simplex_noise_4d(vec4<f32>(nx, ny, nz, nw));\n}");
  $x_11.bi(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_simplex_noise_2d", src$17), new $c_sjsr_WrappedVarArgs($m_sjsr_package$().d(new ($d_Ltrivalibs_graphics_shader_dsl_WgslFnData.r().C)([this.nz]))));
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Simplex$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Simplex$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_random_Simplex$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Simplex$, "trivalibs.graphics.shader.lib.random.Simplex$", ({
  fT: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_random_Simplex$;
function $m_Ltrivalibs_graphics_shader_lib_random_Simplex$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_random_Simplex$)) {
    $n_Ltrivalibs_graphics_shader_lib_random_Simplex$ = new $c_Ltrivalibs_graphics_shader_lib_random_Simplex$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_random_Simplex$;
}
/** @constructor */
function $c_Ltrivalibs_utils_animation_Animator(frame, onFpsCallback) {
  this.nA = null;
  this.kD = null;
  this.hQ = 0;
  this.hR = 0.0;
  this.ja = 0.0;
  this.jb = 0.0;
  this.kE = false;
  this.nA = frame;
  this.kD = onFpsCallback;
  this.hQ = 0;
  this.hR = 0.0;
  this.ja = 0.0;
  this.jb = (-1.0);
  this.kE = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.oz = (function(time) {
  this.hQ = ((1 + this.hQ) | 0);
  if ((this.hR === 0.0)) {
    this.hR = time;
    this.ja = time;
  }
  var fpsElapsed = (time - this.hR);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.hQ) / fpsElapsed);
    if (((time - this.ja) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().ar(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().aq(args$proxy1));
      this.ja = time;
      if ((this.kD !== null)) {
        (0, this.kD)(fps);
      }
    }
    this.hQ = 0;
    this.hR = time;
  }
  var delta = ((this.jb < 0.0) ? 0.0 : (time - this.jb));
  this.jb = time;
  (0, this.nA)(delta);
  if (this.kE) {
    requestAnimationFrame($m_sjs_js_Any$().i2(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.oz((+v1$2));
    }))));
  }
});
$p.rn = (function() {
  this.kE = true;
  return requestAnimationFrame($m_sjs_js_Any$().i2(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.oz((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  g0: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_animation_animate$package$() {
}
$p = $c_Ltrivalibs_utils_animation_animate$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_animate$package$;
/** @constructor */
function $h_Ltrivalibs_utils_animation_animate$package$() {
}
$h_Ltrivalibs_utils_animation_animate$package$.prototype = $p;
$p.oY = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.rn();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  g1: 1
}));
var $n_Ltrivalibs_utils_animation_animate$package$;
function $m_Ltrivalibs_utils_animation_animate$package$() {
  if ((!$n_Ltrivalibs_utils_animation_animate$package$)) {
    $n_Ltrivalibs_utils_animation_animate$package$ = new $c_Ltrivalibs_utils_animation_animate$package$();
  }
  return $n_Ltrivalibs_utils_animation_animate$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_CanvasInput(input, drag, hold) {
  this.aF = null;
  this.kF = null;
  this.kG = null;
  this.aF = input;
  this.kF = drag;
  this.kG = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.gg = (function(tpf) {
  this.kF.gg(tpf);
  this.kG.gg(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  g2: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, pointersOf, glideMinSpeed, glideHalfLife) {
  $thiz.nD = pointersOf;
  $thiz.nC = glideHalfLife;
  $thiz.h4 = null;
  $thiz.kI = 0.0;
  $thiz.kJ = 0.0;
  $thiz.g7 = 0.0;
  $thiz.g8 = 0.0;
  $thiz.b9 = 0.0;
  $thiz.ba = 0.0;
  $thiz.kH = (glideHalfLife > 0.0);
  var s = (glideMinSpeed / 1000.0);
  $thiz.nB = ((s < 0.001) ? 0.001 : s);
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, glideMinSpeed, glideHalfLife) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife), glideMinSpeed, glideHalfLife);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, glideMinSpeed, glideHalfLife) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.b1));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.nD = null;
  this.nC = 0.0;
  this.h4 = null;
  this.kI = 0.0;
  this.kJ = 0.0;
  this.g7 = 0.0;
  this.g8 = 0.0;
  this.b9 = 0.0;
  this.ba = 0.0;
  this.kH = false;
  this.nB = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.pp = (function() {
  return $ct_T2__O__O__(new $c_T2(), this.g7, this.g8);
});
$p.gg = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().o2(this.nD.i0());
  if ((d === null)) {
    this.h4 = null;
    if (this.kH) {
      var p$proxy1 = ((this.b9 * this.b9) + (this.ba * this.ba));
      var $x_1 = ((+Math.sqrt(p$proxy1)) >= this.nB);
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var e$proxy1 = (tpf / this.nC);
      var f = (+Math.pow(0.5, e$proxy1));
      this.b9 = (this.b9 * f);
      this.ba = (this.ba * f);
      this.g7 = (this.b9 * tpf);
      this.g8 = (this.ba * tpf);
    } else {
      this.b9 = 0.0;
      this.ba = 0.0;
      this.g7 = 0.0;
      this.g8 = 0.0;
    }
  } else {
    if ((((this.h4 !== null) && (d.by !== null)) && ((+this.h4) === (+d.by)))) {
      this.g7 = (d.h6 - this.kI);
      this.g8 = (d.h7 - this.kJ);
      if ((this.kH && (tpf > 0.0))) {
        var e$proxy2 = (tpf / 40.0);
        var k = (1.0 - (+Math.pow(0.5, e$proxy2)));
        this.b9 = (this.b9 + (((this.g7 / tpf) - this.b9) * k));
        this.ba = (this.ba + (((this.g8 / tpf) - this.ba) * k));
      }
    } else {
      if ((this.h4 === null)) {
        this.b9 = 0.0;
        this.ba = 0.0;
      }
      this.g7 = 0.0;
      this.g8 = 0.0;
    }
    this.h4 = d.by;
    this.kI = d.h6;
    this.kJ = d.h7;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  g3: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.nG = pointersOf;
  $thiz.nE = holdDelay;
  $thiz.nF = holdRadius;
  $thiz.hT = null;
  $thiz.h5 = 0.0;
  $thiz.hU = false;
  $thiz.hS = false;
  $thiz.g9 = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.b1));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.nG = null;
  this.nE = 0.0;
  this.nF = 0.0;
  this.hT = null;
  this.h5 = 0.0;
  this.hU = false;
  this.hS = false;
  this.g9 = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.gg = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().o2(this.nG.i0());
  if ((d === null)) {
    this.hT = null;
    this.h5 = 0.0;
    this.hU = false;
    this.hS = false;
    this.g9 = false;
  } else {
    var pid = d.by;
    if ((!(((this.hT !== null) && (pid !== null)) && ((+this.hT) === (+pid))))) {
      this.hT = pid;
      this.h5 = 0.0;
      this.hU = false;
      this.hS = false;
    }
    this.h5 = (this.h5 + tpf);
    if (this.hS) {
      this.g9 = true;
    } else if ((this.h5 < this.nE)) {
      var dx = (d.h6 - d.kL);
      var dy = (d.h7 - d.kM);
      var p$proxy2 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy2)) > this.nF)) {
        this.hU = true;
      }
      this.g9 = false;
    } else if (this.hU) {
      this.g9 = false;
    } else {
      this.hS = true;
      this.g9 = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  g4: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.hX.length | 0))) {
    if (($thiz.hX[i].by === null)) {
      return $thiz.hX[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.b1.length | 0))) {
    var p = $thiz.b1[i];
    if (((p.by !== null) && ((+p.by) === id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.by = null;
    var idx = $m_sjs_js_ArrayOps$().oc($thiz.b1, p, 0);
    if ((idx >= 0)) {
      $thiz.b1.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.nL)) {
    $thiz.hX.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().q3($thiz.hV, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.hW.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.hW[k$3] = value$proxy1;
      if ((!($thiz.aG === (void 0)))) {
        var m$proxy3 = $thiz.aG;
        m$proxy3();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.hW[k$3$1];
    if ((!($thiz.aG === (void 0)))) {
      var m$proxy4 = $thiz.aG;
      m$proxy4();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().qV($thiz.nI, $m_Ltrivalibs_utils_events_pointer$package$().qW(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.nK) {
      $thiz.hV.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.jc[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.by = id;
      slot.kK = button;
      (+Date.now());
      slot.kL = x$1;
      slot.kM = y;
      slot.h6 = x$1;
      slot.h7 = y;
      $thiz.b1.push(slot);
      ($thiz.b1.length | 0);
    }
    if ((!($thiz.aG === (void 0)))) {
      var m$proxy5 = $thiz.aG;
      m$proxy5();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.h6 = x$2;
      p.h7 = y$1;
      if ((($thiz.b1.length | 0) > 0)) {
        $thiz.b1[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.jc[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.aG === (void 0)))) {
      var m$proxy6 = $thiz.aG;
      m$proxy6();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.aG === (void 0)))) {
      var m$proxy7 = $thiz.aG;
      m$proxy7();
    }
  })), $thiz.nM);
  $thiz.hV.addEventListener("focus", $thiz.nJ);
  $thiz.hV.addEventListener("blur", $thiz.nH);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.nI = null;
  this.hV = null;
  this.nM = false;
  this.aG = null;
  this.nK = false;
  this.nL = 0;
  this.hW = null;
  this.jc = null;
  this.hX = null;
  this.b1 = null;
  this.nJ = null;
  this.nH = null;
  this.nI = el;
  this.hV = keyTarget;
  this.nM = suppressContextMenu;
  this.aG = onActivity;
  this.nK = focusOnPointerDown;
  this.nL = maxPointers;
  this.hW = ({});
  this.jc = ({});
  this.hX = [];
  this.b1 = [];
  if ($m_sr_BoxesRunTime$().c(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().c(keyTarget, document.activeElement);
  }
  this.nJ = ((_$1$3) => {
    if ((!(this.aG === (void 0)))) {
      var m$proxy1 = this.aG;
      m$proxy1();
    }
  });
  this.nH = ((_$2$3) => {
    if ((!(this.aG === (void 0)))) {
      var m$proxy2 = this.aG;
      m$proxy2();
    }
  });
  $p_Ltrivalibs_utils_events_InputState__install__V(this);
}
$p = $c_Ltrivalibs_utils_events_InputState.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_InputState;
/** @constructor */
function $h_Ltrivalibs_utils_events_InputState() {
}
$h_Ltrivalibs_utils_events_InputState.prototype = $p;
$p.be = (function(key) {
  return (!(!(!(!this.hW.hasOwnProperty(key)))));
});
$p.q1 = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.jc.hasOwnProperty(key$proxy7)))));
});
$p.ox = (function() {
  return (this.b1.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  g5: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.by = null;
  this.kK = 0;
  this.kL = 0.0;
  this.kM = 0.0;
  this.h6 = 0.0;
  this.h7 = 0.0;
  this.by = null;
  this.kK = 0;
  this.kL = 0.0;
  this.kM = 0.0;
  this.h6 = 0.0;
  this.h7 = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  g6: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_gestures$package$() {
}
$p = $c_Ltrivalibs_utils_events_gestures$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_gestures$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_gestures$package$() {
}
$h_Ltrivalibs_utils_events_gestures$package$.prototype = $p;
$p.o2 = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.kK === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  g7: 1
}));
var $n_Ltrivalibs_utils_events_gestures$package$;
function $m_Ltrivalibs_utils_events_gestures$package$() {
  if ((!$n_Ltrivalibs_utils_events_gestures$package$)) {
    $n_Ltrivalibs_utils_events_gestures$package$ = new $c_Ltrivalibs_utils_events_gestures$package$();
  }
  return $n_Ltrivalibs_utils_events_gestures$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$p = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = $p;
$p.pZ = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity, dragGlideHalfLife, dragGlideMinSpeed) {
  canvas.setAttribute("tabindex", "0");
  var \u03b41$ = canvas.style;
  \u03b41$.setProperty("outline", "none");
  var \u03b42$ = canvas.style;
  \u03b42$.setProperty("touch-action", "none");
  var \u03b43$ = canvas.style;
  \u03b43$.setProperty("user-select", "none");
  var \u03b44$ = canvas.style;
  \u03b44$.setProperty("-webkit-user-select", "none");
  var \u03b45$ = canvas.style;
  \u03b45$.setProperty("-webkit-touch-callout", "none");
  var \u03b46$ = canvas.style;
  \u03b46$.setProperty("-webkit-tap-highlight-color", "transparent");
  var input = new $c_Ltrivalibs_utils_events_InputState(canvas, canvas, suppressContextMenu, onActivity, true, 4);
  if (initialFocus) {
    canvas.focus();
  }
  return new $c_Ltrivalibs_utils_events_CanvasInput(input, $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__D__D__(new $c_Ltrivalibs_utils_events_DragGesture(), input, dragGlideMinSpeed, dragGlideHalfLife), $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__(new $c_Ltrivalibs_utils_events_HoldGesture(), input, holdDelay, holdRadius));
});
var $d_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$, "trivalibs.utils.events.interactive_canvas$package$", ({
  g8: 1
}));
var $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
function $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
  if ((!$n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$)) {
    $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$();
  }
  return $n_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_keyboard$package$() {
}
$p = $c_Ltrivalibs_utils_events_keyboard$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_keyboard$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_keyboard$package$() {
}
$h_Ltrivalibs_utils_events_keyboard$package$.prototype = $p;
$p.q3 = (function(el, onDown, onUp, keepDefault) {
  var down = ((e$3) => {
    var isTab = (e$3.code === "Tab");
    if (((!keepDefault) && (!isTab))) {
      e$3.preventDefault();
    }
    if ((!(!(!e$3.repeat)))) {
      onDown.h(e$3.code);
    }
  });
  var up = ((e$3$1) => {
    onUp.h(e$3$1.code);
  });
  el.addEventListener("keydown", down);
  el.addEventListener("keyup", up);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("keydown", down);
    el.removeEventListener("keyup", up);
  }));
});
var $d_Ltrivalibs_utils_events_keyboard$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_keyboard$package$, "trivalibs.utils.events.keyboard$package$", ({
  g9: 1
}));
var $n_Ltrivalibs_utils_events_keyboard$package$;
function $m_Ltrivalibs_utils_events_keyboard$package$() {
  if ((!$n_Ltrivalibs_utils_events_keyboard$package$)) {
    $n_Ltrivalibs_utils_events_keyboard$package$ = new $c_Ltrivalibs_utils_events_keyboard$package$();
  }
  return $n_Ltrivalibs_utils_events_keyboard$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_pointer$package$() {
}
$p = $c_Ltrivalibs_utils_events_pointer$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_pointer$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_pointer$package$() {
}
$h_Ltrivalibs_utils_events_pointer$package$.prototype = $p;
$p.qV = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.p0((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.kP((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.nP((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
  });
  var cancelFn = ((e$3$3) => {
    onCancel.h((+e$3$3.pointerId));
  });
  var ctxFn = ((e$3$4) => {
    e$3$4.preventDefault();
  });
  el.addEventListener("pointerdown", downFn);
  moveTarget.addEventListener("pointermove", moveFn);
  moveTarget.addEventListener("pointerup", upFn);
  moveTarget.addEventListener("pointercancel", cancelFn);
  if (suppressContextMenu) {
    el.addEventListener("contextmenu", ctxFn);
  }
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("pointerdown", downFn);
    moveTarget.removeEventListener("pointermove", moveFn);
    moveTarget.removeEventListener("pointerup", upFn);
    moveTarget.removeEventListener("pointercancel", cancelFn);
    if (suppressContextMenu) {
      el.removeEventListener("contextmenu", ctxFn);
    }
  }));
});
$p.qW = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  ga: 1
}));
var $n_Ltrivalibs_utils_events_pointer$package$;
function $m_Ltrivalibs_utils_events_pointer$package$() {
  if ((!$n_Ltrivalibs_utils_events_pointer$package$)) {
    $n_Ltrivalibs_utils_events_pointer$package$ = new $c_Ltrivalibs_utils_events_pointer$package$();
  }
  return $n_Ltrivalibs_utils_events_pointer$package$;
}
/** @constructor */
function $c_jl_Character$() {
  this.jw = null;
  $n_jl_Character$ = this;
  this.jw = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.ru = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.ps = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().p9(this.jw, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.jw.b[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  b8: 1,
  a: 1
}));
var $n_jl_Character$;
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$();
  }
  return $n_jl_Character$;
}
/** @constructor */
function $c_jl_Integer$() {
}
$p = $c_jl_Integer$.prototype = new $h_O();
$p.constructor = $c_jl_Integer$;
/** @constructor */
function $h_jl_Integer$() {
}
$h_jl_Integer$.prototype = $p;
$p.il = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.q2 = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().il(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().il(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().il(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.ps(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().il(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().il(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  be: 1,
  a: 1
}));
var $n_jl_Integer$;
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$();
  }
  return $n_jl_Integer$;
}
/** @constructor */
function $c_jl_Number() {
}
$p = $c_jl_Number.prototype = new $h_O();
$p.constructor = $c_jl_Number;
/** @constructor */
function $h_jl_Number() {
}
$h_jl_Number.prototype = $p;
function $is_jl_Number(obj) {
  return (((obj instanceof $c_jl_Number) || ((typeof obj) === "number")) || (obj instanceof $Long));
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.u)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.li = s;
  if (writableStackTrace) {
    $thiz.pG();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.li = null;
  }
  ji() {
    return this.li;
  }
  pG() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.aO : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  r() {
    var className = $objectClassName(this);
    var message = this.ji();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  w() {
    return $c_O.prototype.w.call(this);
  }
  u(that) {
    return $c_O.prototype.u.call(this, that);
  }
  get "message"() {
    var m = this.ji();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.r();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_s_Conversion() {
}
$p = $c_s_Conversion.prototype = new $h_O();
$p.constructor = $c_s_Conversion;
/** @constructor */
function $h_s_Conversion() {
}
$h_s_Conversion.prototype = $p;
$p.r = (function() {
  return "<function1>";
});
/** @constructor */
function $c_s_LowPriorityImplicits() {
}
$p = $c_s_LowPriorityImplicits.prototype = new $h_s_LowPriorityImplicits2();
$p.constructor = $c_s_LowPriorityImplicits;
/** @constructor */
function $h_s_LowPriorityImplicits() {
}
$h_s_LowPriorityImplicits.prototype = $p;
$p.rF = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.b.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.lw;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
function $p_sci_Range$__description__I__I__I__Z__T($thiz, start, end, step, isInclusive) {
  return ((((start + (isInclusive ? " to " : " until ")) + end) + " by ") + step);
}
/** @constructor */
function $c_sci_Range$() {
}
$p = $c_sci_Range$.prototype = new $h_O();
$p.constructor = $c_sci_Range$;
/** @constructor */
function $h_sci_Range$() {
}
$h_sci_Range$.prototype = $p;
$p.oB = (function(start, end, step, isInclusive) {
  throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), ($p_sci_Range$__description__I__I__I__Z__T(this, start, end, step, isInclusive) + ": seqs cannot contain more than Int.MaxValue elements."));
});
$p.rb = (function(what) {
  return new $c_ju_NoSuchElementException((what + " on empty Range"));
});
var $d_sci_Range$ = new $TypeData().i($c_sci_Range$, "scala.collection.immutable.Range$", ({
  ct: 1,
  a: 1
}));
var $n_sci_Range$;
function $m_sci_Range$() {
  if ((!$n_sci_Range$)) {
    $n_sci_Range$ = new $c_sci_Range$();
  }
  return $n_sci_Range$;
}
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.r = (function() {
  return "<function0>";
});
/** @constructor */
function $c_sr_AbstractFunction1() {
}
$p = $c_sr_AbstractFunction1.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction1;
/** @constructor */
function $h_sr_AbstractFunction1() {
}
$h_sr_AbstractFunction1.prototype = $p;
$p.r = (function() {
  return "<function1>";
});
/** @constructor */
function $c_sr_AbstractFunction2() {
}
$p = $c_sr_AbstractFunction2.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction2;
/** @constructor */
function $h_sr_AbstractFunction2() {
}
$h_sr_AbstractFunction2.prototype = $p;
$p.r = (function() {
  return "<function2>";
});
/** @constructor */
function $c_sr_AbstractFunction3() {
}
$p = $c_sr_AbstractFunction3.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction3;
/** @constructor */
function $h_sr_AbstractFunction3() {
}
$h_sr_AbstractFunction3.prototype = $p;
$p.r = (function() {
  return "<function3>";
});
/** @constructor */
function $c_sr_AbstractFunction4() {
}
$p = $c_sr_AbstractFunction4.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction4;
/** @constructor */
function $h_sr_AbstractFunction4() {
}
$h_sr_AbstractFunction4.prototype = $p;
$p.r = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_AbstractFunction5() {
}
$p = $c_sr_AbstractFunction5.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction5;
/** @constructor */
function $h_sr_AbstractFunction5() {
}
$h_sr_AbstractFunction5.prototype = $p;
$p.r = (function() {
  return "<function5>";
});
/** @constructor */
function $c_sr_DoubleRef(elem) {
  this.gE = 0.0;
  this.gE = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.r = (function() {
  return ("" + this.gE);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  d1: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.fT = 0;
  this.lG = 0;
  this.oK = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.fT = $f_T__hashCode__I("Seq");
  this.lG = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.oK = this.rx($m_sci_Nil$(), this.lG);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.l2 = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.pW(xs, this.fT) : ((xs instanceof $c_sci_List) ? this.q4(xs, this.fT) : this.qR(xs, this.fT)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  dl: 1,
  dk: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP$1, resultP$1, p$1, uBlurRadius$1, uIntensity$1) {
  this.mc = null;
  this.mb = null;
  this.md = null;
  this.me = null;
  this.mc = p$1;
  this.mb = bloomP$1;
  this.md = resultP$1;
  this.me = resultP$1;
}
$p = $c_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$$anon$1() {
}
$h_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = $p;
$p.qT = (function() {
  var Painter_this = this.mc;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.mb);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.md);
});
var $d_Lsketchlib_utils_bloom_Bloom$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$$anon$1, "sketchlib.utils.bloom.Bloom$$anon$1", ({
  du: 1,
  ds: 1
}));
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__rebuildLayers__V($thiz) {
  if (($thiz.bV > 0.0)) {
    var pairs = $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().rl($thiz.mm, $thiz.jP, $thiz.hp, $thiz.jL, $thiz.jK);
    $m_Lsketchlib_utils_mirror_GaussianMirrorReflection$().rk($thiz.jN, $thiz.mg, $thiz.mi, $thiz.mh, $thiz.jP, $thiz.iI, $thiz.mn, $thiz.mq, $thiz.mr, $thiz.jQ, $thiz.jR, $thiz.ml, pairs);
    var layers = [$thiz.mf];
    var i = 0;
    while ((i < (pairs << 1))) {
      layers.push($thiz.jN[i]);
      i = ((1 + i) | 0);
    }
    $thiz.hn.iq((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), layers);
  }
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__applySizing__V($thiz) {
  if (($thiz.bV > 0.0)) {
    var sigma = ((0.01 * $thiz.jL) * $thiz.hp);
    var p$proxy2 = ($thiz.jM * sigma);
    var p$proxy3 = (+Math.ceil(p$proxy2));
    var other$proxy4 = (0.5 * $thiz.hq);
    var mx = (+Math.min(p$proxy3, other$proxy4));
    var $x_1 = $thiz.jM;
    var p$proxy4 = $thiz.jK;
    var p$proxy5 = (($x_1 * sigma) * (+Math.max(p$proxy4, 1.0)));
    var p$proxy6 = (+Math.ceil(p$proxy5));
    var other$proxy5 = (0.5 * $thiz.bV);
    var my = (+Math.min(p$proxy6, other$proxy5));
    var pw = $doubleToInt(($thiz.hq + (2.0 * mx)));
    var ph = $doubleToInt(($thiz.bV + (2.0 * my)));
    $thiz.iH.iq(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    $thiz.hn.iq(pw, ph, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
    var BufferBinding_this = $thiz.jQ;
    var value$proxy7 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(pw, ph);
    BufferBinding_this.E.A(BufferBinding_this.j, value$proxy7);
    var $x_3 = BufferBinding_this.D.queue;
    var $x_2 = BufferBinding_this.B;
    var s$proxy9 = BufferBinding_this.j;
    $x_3.writeBuffer($x_2, 0.0, s$proxy9.dv.buffer);
    var BufferBinding_this$3 = $thiz.jR;
    var value$proxy8 = $thiz.hp;
    BufferBinding_this$3.E.A(BufferBinding_this$3.j, value$proxy8);
    var $x_5 = BufferBinding_this$3.D.queue;
    var $x_4 = BufferBinding_this$3.B;
    var s$proxy10 = BufferBinding_this$3.j;
    $x_5.writeBuffer($x_4, 0.0, s$proxy10.dv.buffer);
    $thiz.iF = ($thiz.hq / pw);
    $thiz.iG = ($thiz.bV / ph);
    var BufferBinding_this$5 = $thiz.mo;
    var value$proxy9 = new $c_Ltrivalibs_graphics_math_cpu_Vec4($thiz.iF, $thiz.iG, (mx / pw), (my / ph));
    BufferBinding_this$5.E.A(BufferBinding_this$5.j, value$proxy9);
    var $x_7 = BufferBinding_this$5.D.queue;
    var $x_6 = BufferBinding_this$5.B;
    var s$proxy11 = BufferBinding_this$5.j;
    $x_7.writeBuffer($x_6, 0.0, s$proxy11.dv.buffer);
    $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__rebuildLayers__V($thiz);
  }
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__deriveRefH__V($thiz) {
  var $x_2 = $thiz.bV;
  var $x_1 = $thiz.iE.bL;
  var this$1 = $thiz.iE;
  $thiz.hp = (($x_2 * $x_1) / $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().l9(this$1.bL, this$1.g6));
}
function $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4($thiz) {
  var this$1 = $thiz.iE;
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().h9(), this$1.j6, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this$1.oH());
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1(mirrorPanel$1, cropPanel$1, blurPanel$1, camera$1, blurStrength$1, blurRatioVertical$1, bakeLayer$1, pairCache$2, overscan$1, uRes$3, uVisHeight$3, uCrop$1, resolutionScale$1, uBlurStrength$3, strengthScale$2, uRatioVertical$3, uStrengthOffset$3, reflMat$1, uVp$1, uInvVp$1, p$4, scaleFactor$3, blurShadeH$2, cachedScale$2, blurShadeV$2, sampler$3) {
  this.mf = null;
  this.jN = null;
  this.hn = null;
  this.jM = 0.0;
  this.iH = null;
  this.jQ = null;
  this.jR = null;
  this.mo = null;
  this.jO = 0.0;
  this.ho = null;
  this.mn = null;
  this.mm = 0.0;
  this.mq = null;
  this.mr = null;
  this.mj = null;
  this.ms = null;
  this.mp = null;
  this.iI = null;
  this.jP = 0.0;
  this.mg = null;
  this.mi = null;
  this.mh = null;
  this.ml = null;
  this.mk = null;
  this.iE = null;
  this.jL = 0.0;
  this.jK = 0.0;
  this.hq = 0.0;
  this.bV = 0.0;
  this.hp = 0.0;
  this.iF = 0.0;
  this.iG = 0.0;
  this.mf = bakeLayer$1;
  this.jN = pairCache$2;
  this.hn = blurPanel$1;
  this.jM = overscan$1;
  this.iH = mirrorPanel$1;
  this.jQ = uRes$3;
  this.jR = uVisHeight$3;
  this.mo = uCrop$1;
  this.jO = resolutionScale$1;
  this.ho = cropPanel$1;
  this.mn = uBlurStrength$3;
  this.mm = strengthScale$2;
  this.mq = uRatioVertical$3;
  this.mr = uStrengthOffset$3;
  this.mj = reflMat$1;
  this.ms = uVp$1;
  this.mp = uInvVp$1;
  this.iI = p$4;
  this.jP = scaleFactor$3;
  this.mg = blurShadeH$2;
  this.mi = cachedScale$2;
  this.mh = blurShadeV$2;
  this.ml = sampler$3;
  this.mk = ((cropPanel$1 !== null) ? cropPanel$1 : blurPanel$1);
  this.iE = camera$1;
  this.jL = blurStrength$1;
  this.jK = blurRatioVertical$1;
  this.hq = 0.0;
  this.bV = 0.0;
  this.hp = 0.0;
  this.iF = 1.0;
  this.iG = 1.0;
}
$p = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1() {
}
$h_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1.prototype = $p;
$p.r6 = (function(w, h) {
  var x = $doubleToInt((w * this.jO));
  var sw = ((x > 1) ? x : 1);
  var x$1 = $doubleToInt((h * this.jO));
  var sh = ((x$1 > 1) ? x$1 : 1);
  this.hq = sw;
  this.bV = sh;
  $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__deriveRefH__V(this);
  if ((this.ho !== null)) {
    this.ho.iq(sw, sh, (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0));
  }
  $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__applySizing__V(this);
});
$p.qS = (function(vp) {
  var cameraVP = ((vp === (void 0)) ? $p_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_math_cpu_Mat4(this) : vp);
  var m$1 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().h9(), new $c_Ltrivalibs_graphics_math_cpu_Mat4(this.iF, 0.0, 0.0, 0.0, 0.0, this.iG, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().h9(), cameraVP, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this.mj));
  var BufferBinding_this = this.ms;
  BufferBinding_this.E.A(BufferBinding_this.j, m$1);
  var $x_2 = BufferBinding_this.D.queue;
  var $x_1 = BufferBinding_this.B;
  var s$proxy15 = BufferBinding_this.j;
  $x_2.writeBuffer($x_1, 0.0, s$proxy15.dv.buffer);
  var BufferBinding_this$3 = this.mp;
  var value$proxy11 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().h9(), m$1, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
  BufferBinding_this$3.E.A(BufferBinding_this$3.j, value$proxy11);
  var $x_4 = BufferBinding_this$3.D.queue;
  var $x_3 = BufferBinding_this$3.B;
  var s$proxy16 = BufferBinding_this$3.j;
  $x_4.writeBuffer($x_3, 0.0, s$proxy16.dv.buffer);
  if ((this.ho !== null)) {
    var Painter_this = this.iI;
    var c$proxy1 = this.ho;
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.iH);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.hn);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, c$proxy1);
  } else {
    var Painter_this$2 = this.iI;
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this$2, this.iH);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this$2, this.hn);
  }
});
var $d_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_mirror_GaussianMirrorReflection$$anon$1, "sketchlib.utils.mirror.GaussianMirrorReflection$$anon$1", ({
  dx: 1,
  dv: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.av = null;
  this.av = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dN: 1,
  dM: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$.prototype = $p;
$p.rG = (function(ref, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.A = (function(ref, value) {
  this.rG(ref, (+value));
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Double_$times$colon$", ({
  dO: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = $p;
$p.A = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().pQ(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dP: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$.prototype = $p;
$p.A = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec2MutableOps__set__O__Ltrivalibs_graphics_math_Vec2Mutable__O__Ltrivalibs_graphics_math_Vec2Base__V($m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$().rz(), ref, $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec2_Vec2Buffer$", ({
  dQ: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec2\uff3fVec2Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$.prototype = $p;
$p.rH = (function(ref, value) {
  var value$proxy2 = value.x;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.I;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.y;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.A = (function(ref, value) {
  this.rH(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  dR: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$.prototype = $p;
$p.A = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Vec4MutableOps__set__O__Ltrivalibs_graphics_math_Vec4Mutable__O__Ltrivalibs_graphics_math_Vec4Base__V($m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$().rA(), ref, $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec4_Vec4Buffer$", ({
  dS: 1,
  F: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec4\uff3fVec4Buffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
}
$p = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
}
$h_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$.prototype = $p;
$p.gh = (function(t) {
  return $ct_T2__O__O__(new $c_T2(), t.o, t.m);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dV: 1,
  aU: 1
}));
var $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
function $m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$() {
  if ((!$n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$)) {
    $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$();
  }
  return $n_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
}
$p = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
}
$h_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$.prototype = $p;
$p.gh = (function(t) {
  return new $c_T3(t.x, t.I, t.y);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  dW: 1,
  aU: 1
}));
var $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
function $m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$() {
  if ((!$n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$)) {
    $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$();
  }
  return $n_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayout$named(x$1) {
  this.jX = null;
  this.jX = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  e4: 1,
  e3: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.my = null;
  this.mz = null;
  this.my = x$1;
  this.mz = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.ry = (function(t) {
  return $m_sr_Tuples$().nY(this.my.gh(t.p(0)), this.mz.gh($m_sr_Tuples$().rq(t)));
});
$p.gh = (function(t) {
  return this.ry(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  e5: 1,
  aV: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$.prototype = $p;
$p.gh = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  e6: 1,
  aV: 1
}));
var $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
function $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$() {
  if ((!$n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$)) {
    $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$();
  }
  return $n_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(idx$2) {
  this.mB = 0;
  this.mB = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.bP = (function(t) {
  return t.p(this.mB);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  eb: 1,
  e1: 1
}));
function $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($thiz, v, other) {
  return (((+$thiz.as(v)) * (+$thiz.as(other))) + ((+$thiz.at(v)) * (+$thiz.at(other))));
}
function $f_Ltrivalibs_graphics_math_Vec2Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec2Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.x * other.x) + (v.I * other.I)) + (v.y * other.y));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.mC = null;
  this.mD = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.h9 = (function() {
  if ((!this.mD)) {
    this.mC = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.mD = true;
  }
  return this.mC;
});
$p.o8 = (function(t, r, s) {
  var x = r.iN;
  var y = r.iO;
  var z = r.iP;
  var w = r.iM;
  var x2 = (x + x);
  var y2 = (y + y);
  var z2 = (z + z);
  var xx = (x * x2);
  var xy = (x * y2);
  var xz = (x * z2);
  var yy = (y * y2);
  var yz = (y * z2);
  var zz = (z * z2);
  var wx = (w * x2);
  var wy = (w * y2);
  var wz = (w * z2);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.x), ((xy + wz) * s.x), ((xz - wy) * s.x), 0.0, ((xy - wz) * s.I), ((1.0 - (xx + zz)) * s.I), ((yz + wx) * s.I), 0.0, ((xz + wy) * s.y), ((yz - wx) * s.y), ((1.0 - (xx + yy)) * s.y), 0.0, t.x, t.I, t.y, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  es: 1,
  ee: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat4$;
function $m_Ltrivalibs_graphics_math_cpu_Mat4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat4$ = new $c_Ltrivalibs_graphics_math_cpu_Mat4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_QuatImmutableOps_Quat$", ({
  ew: 1,
  ey: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2$() {
  this.mE = null;
  this.mF = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2$.prototype = $p;
$p.pR = (function() {
  if ((!this.mF)) {
    this.mE = $m_Ltrivalibs_graphics_math_cpu_Vec2$();
    this.mF = true;
  }
  return this.mE;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$, "trivalibs.graphics.math.cpu.Vec2$", ({
  eA: 1,
  eh: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec2$;
function $m_Ltrivalibs_graphics_math_cpu_Vec2$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec2$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec2$ = new $c_Ltrivalibs_graphics_math_cpu_Vec2$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$() {
  this.mG = null;
  this.mH = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.G = (function() {
  if ((!this.mH)) {
    this.mG = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.mH = true;
  }
  return this.mG;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  eD: 1,
  el: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$() {
  this.mI = null;
  this.mJ = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$.prototype = $p;
$p.oa = (function() {
  if ((!this.mJ)) {
    this.mI = new $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3();
    this.mJ = true;
  }
  return this.mI;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$, "trivalibs.graphics.math.cpu.Vec4$", ({
  eG: 1,
  eo: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$$anon$18", ({
  eK: 1,
  eg: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$$anon$6, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$$anon$6", ({
  eN: 1,
  ej: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$$anon$8, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$$anon$8", ({
  eQ: 1,
  eq: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(f$2) {
  this.mQ = null;
  this.mQ = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = $p;
$p.aJ = (function(s) {
  return this.mQ.h(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1, "trivalibs.graphics.math.gpu.LeftScalar$$anon$1", ({
  eU: 1,
  eS: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.e = null;
  this.mR = null;
  this.mR = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.an = (function(value) {
  return (((("  let " + this.mR) + " = ") + value.e) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  eV: 1,
  b1: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6, "trivalibs.graphics.math.gpu.float_expr$package$$anon$6", ({
  f1: 1,
  Y: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = $p;
$p.qD = (function(m, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.e) + " * ") + other.e) + ")"));
});
$p.hc = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.e) + " * ") + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  f2: 1,
  ef: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$.prototype = $p;
$p.gb = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.e) + ")"));
});
$p.kV = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + a.e) + ")"));
});
$p.c9 = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + a.e) + ", ") + other.e) + ")"));
});
$p.qE = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("max(" + a.e) + ", ") + other.e) + ")"));
});
$p.jf = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.e) + ")"));
});
$p.o5 = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.e) + " * 0.5 + 0.5)"));
});
$p.jl = (function(a, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + a.e) + ", ") + b.e) + ", ") + t.e) + ")"));
});
$p.bg = (function(a, edge0, edge1) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.e) + ", ") + edge1.e) + ", ") + a.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  f3: 1,
  gb: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$.prototype = $p;
$p.ag = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " + ") + b.e) + ")"));
});
$p.bN = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " - ") + b.e) + ")"));
});
$p.b2 = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " * ") + b.e) + ")"));
});
$p.oQ = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " / ") + b.e) + ")"));
});
$p.oF = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(-" + a.e) + ")"));
});
$p.nN = (function(a, b) {
  return this.ag(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(b));
});
$p.bb = (function(a, b) {
  return this.bN(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(b));
});
$p.L = (function(a, b) {
  return this.b2(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(b));
});
$p.ga = (function(a, b) {
  return this.oQ(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(b));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  f4: 1,
  gc: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$.prototype = $p;
$p.aS = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.ak = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".y"));
});
$p.kS = (function(v, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.e) + ", ") + other.e) + ")"));
});
$p.kX = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("length(" + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2BaseG_FloatExpr_Vec2Expr$", ({
  f5: 1,
  Z: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2BaseG\uff3fFloatExpr\uff3fVec2Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$.prototype = $p;
$p.oW = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.l5 = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " - ") + other.e) + ")"));
});
$p.qL = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + other.e) + ")"));
});
$p.qJ = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + scalar.e) + ")"));
});
$p.pu = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " / ") + other.e) + ")"));
});
$p.pI = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.e) + " * 2.0 - 1.0)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  f6: 1,
  ei: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$.prototype = $p;
$p.aS = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.ak = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".y"));
});
$p.hf = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".z"));
});
$p.kS = (function(v, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.e) + ", ") + other.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3BaseG_FloatExpr_Vec3Expr$", ({
  f7: 1,
  b0: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3BaseG\uff3fFloatExpr\uff3fVec3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$.prototype = $p;
$p.kO = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.oD = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " - ") + other.e) + ")"));
});
$p.bf = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + scalar.e) + ")"));
});
$p.hY = (function(v, x$2, scalar) {
  return this.bf(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(scalar));
});
$p.pt = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " / ") + scalar.e) + ")"));
});
$p.pn = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("cross(" + v.e) + ", ") + other.e) + ")"));
});
$p.qP = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("normalize(" + v.e) + ")"));
});
$p.pE = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("exp(" + v.e) + ")"));
});
$p.qG = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + v.e) + ", ") + other.e) + ")"));
});
$p.qH = (function(v, x$2, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.e) + ", ") + b.e) + ", ") + t.e) + ")"));
});
$p.kY = (function(v, x$2, b, t) {
  return this.qH(v, x$2, $m_Ltrivalibs_graphics_math_gpu_cpu\uff3finterop$package$().is(b), t);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  f8: 1,
  em: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$.prototype = $p;
$p.aS = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.ak = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".y"));
});
$p.hf = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".z"));
});
$p.ju = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".w"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4BaseG_FloatExpr_Vec4Expr$", ({
  f9: 1,
  K: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4BaseG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$.prototype = $p;
$p.oX = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.qK = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + scalar.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  fa: 1,
  ep: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Instance(shade, painter) {
  this.iS = null;
  this.kj = null;
  this.ae = null;
  this.iR = null;
  this.iS = shade;
  this.kj = painter;
  this.ae = [];
  this.iR = [];
}
$p = $c_Ltrivalibs_graphics_painter_Instance.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Instance;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Instance() {
}
$h_Ltrivalibs_graphics_painter_Instance.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Instance = new $TypeData().i($c_Ltrivalibs_graphics_painter_Instance, "trivalibs.graphics.painter.Instance", ({
  fj: 1,
  a2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.c4 = null;
  this.C = null;
  this.kk = null;
  this.iU = 0;
  this.hC = 0;
  this.i = null;
  this.U = null;
  this.P = null;
  this.iT = null;
  this.c4 = painter;
  this.C = shade;
  this.kk = null;
  this.iU = (-1);
  this.hC = (-1);
  this.i = [];
  this.U = [];
  this.P = null;
  this.iT = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.nV = (function() {
  return ((this.C.j3 !== null) && (((this.U.length | 0) === 0) || (this.U[0] === null)));
});
$p.rf = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.kk = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.iU = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.hC = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  fl: 1,
  a2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.nl = null;
  this.hM = null;
  this.W = null;
  this.ks = null;
  this.kr = null;
  this.J = null;
  this.a4 = null;
  this.kt = null;
  this.nl = painter;
  this.hM = form;
  this.W = shade;
  this.ks = "none";
  this.kr = null;
  this.J = [];
  this.a4 = [];
  this.kt = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.rg = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.ks = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.kr = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  fr: 1,
  a2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.R = null;
  this.R = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.v = (function() {
  return this.R.v();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  fz: 1,
  t: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.bw = null;
  this.bw = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.v = (function() {
  return this.bw.v();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  fA: 1,
  t: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.kA = null;
  this.kA = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.a2 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.kA === "") ? name : ((this.kA + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  fI: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.kB = null;
  this.kB = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.l = (function(name) {
  return ((this.kB === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.kB + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  fJ: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(kinds) {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor, "trivalibs.graphics.shader.dsl.TypedLocalAccessor", ({
  fK: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor() {
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor, "trivalibs.graphics.shader.dsl.TypedPanelAccessor", ({
  fL: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.ns = null;
  this.hP = null;
  this.ns = prefix;
  this.hP = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.a2 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.ns + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  fN: 1,
  D: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$.prototype = $p;
$p.v = (function() {
  return "f32";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$, "trivalibs.graphics.shader.types$package$given_WGSLType_Float$", ({
  fU: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = $p;
$p.v = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  fV: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$.prototype = $p;
$p.v = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  fW: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$.prototype = $p;
$p.v = (function() {
  return "vec2<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec2$", ({
  fX: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$.prototype = $p;
$p.v = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  fY: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$.prototype = $p;
$p.v = (function() {
  return "vec4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec4$", ({
  fZ: 1,
  t: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec4$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.jv = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.r = (function() {
  return ((this.jv.Y ? "interface " : (this.jv.X ? "" : "class ")) + this.jv.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  b9: 1,
  a: 1,
  h: 1
}));
class $c_jl_Error extends $c_jl_Throwable {
}
class $c_jl_Exception extends $c_jl_Throwable {
}
/** @constructor */
function $c_s_Predef$() {
  $n_s_Predef$ = this;
  $m_sci_List$();
}
$p = $c_s_Predef$.prototype = new $h_s_LowPriorityImplicits();
$p.constructor = $c_s_Predef$;
/** @constructor */
function $h_s_Predef$() {
}
$h_s_Predef$.prototype = $p;
var $d_s_Predef$ = new $TypeData().i($c_s_Predef$, "scala.Predef$", ({
  bC: 1,
  bz: 1,
  bA: 1
}));
var $n_s_Predef$;
function $m_s_Predef$() {
  if ((!$n_s_Predef$)) {
    $n_s_Predef$ = new $c_s_Predef$();
  }
  return $n_s_Predef$;
}
function $f_s_Product1__productElement__I__O($thiz, n) {
  if ((n === 0)) {
    return $thiz.gj;
  } else {
    throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gk;
      break;
    }
    case 1: {
      return $thiz.cc;
      break;
    }
    case 2: {
      return $thiz.cd;
      break;
    }
    case 3: {
      return $thiz.ce;
      break;
    }
    case 4: {
      return $thiz.cf;
      break;
    }
    case 5: {
      return $thiz.cg;
      break;
    }
    case 6: {
      return $thiz.ch;
      break;
    }
    case 7: {
      return $thiz.ci;
      break;
    }
    case 8: {
      return $thiz.cj;
      break;
    }
    case 9: {
      return $thiz.cb;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 9)"));
    }
  }
}
function $f_s_Product11__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gl;
      break;
    }
    case 1: {
      return $thiz.cm;
      break;
    }
    case 2: {
      return $thiz.cn;
      break;
    }
    case 3: {
      return $thiz.co;
      break;
    }
    case 4: {
      return $thiz.cp;
      break;
    }
    case 5: {
      return $thiz.cq;
      break;
    }
    case 6: {
      return $thiz.cr;
      break;
    }
    case 7: {
      return $thiz.cs;
      break;
    }
    case 8: {
      return $thiz.ct;
      break;
    }
    case 9: {
      return $thiz.ck;
      break;
    }
    case 10: {
      return $thiz.cl;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 10)"));
    }
  }
}
function $f_s_Product12__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gm;
      break;
    }
    case 1: {
      return $thiz.cx;
      break;
    }
    case 2: {
      return $thiz.cy;
      break;
    }
    case 3: {
      return $thiz.cz;
      break;
    }
    case 4: {
      return $thiz.cA;
      break;
    }
    case 5: {
      return $thiz.cB;
      break;
    }
    case 6: {
      return $thiz.cC;
      break;
    }
    case 7: {
      return $thiz.cD;
      break;
    }
    case 8: {
      return $thiz.cE;
      break;
    }
    case 9: {
      return $thiz.cu;
      break;
    }
    case 10: {
      return $thiz.cv;
      break;
    }
    case 11: {
      return $thiz.cw;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 11)"));
    }
  }
}
function $f_s_Product13__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gn;
      break;
    }
    case 1: {
      return $thiz.cJ;
      break;
    }
    case 2: {
      return $thiz.cK;
      break;
    }
    case 3: {
      return $thiz.cL;
      break;
    }
    case 4: {
      return $thiz.cM;
      break;
    }
    case 5: {
      return $thiz.cN;
      break;
    }
    case 6: {
      return $thiz.cO;
      break;
    }
    case 7: {
      return $thiz.cP;
      break;
    }
    case 8: {
      return $thiz.cQ;
      break;
    }
    case 9: {
      return $thiz.cF;
      break;
    }
    case 10: {
      return $thiz.cG;
      break;
    }
    case 11: {
      return $thiz.cH;
      break;
    }
    case 12: {
      return $thiz.cI;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 12)"));
    }
  }
}
function $f_s_Product14__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.go;
      break;
    }
    case 1: {
      return $thiz.cW;
      break;
    }
    case 2: {
      return $thiz.cX;
      break;
    }
    case 3: {
      return $thiz.cY;
      break;
    }
    case 4: {
      return $thiz.cZ;
      break;
    }
    case 5: {
      return $thiz.d0;
      break;
    }
    case 6: {
      return $thiz.d1;
      break;
    }
    case 7: {
      return $thiz.d2;
      break;
    }
    case 8: {
      return $thiz.d3;
      break;
    }
    case 9: {
      return $thiz.cR;
      break;
    }
    case 10: {
      return $thiz.cS;
      break;
    }
    case 11: {
      return $thiz.cT;
      break;
    }
    case 12: {
      return $thiz.cU;
      break;
    }
    case 13: {
      return $thiz.cV;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 13)"));
    }
  }
}
function $f_s_Product15__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gp;
      break;
    }
    case 1: {
      return $thiz.da;
      break;
    }
    case 2: {
      return $thiz.db;
      break;
    }
    case 3: {
      return $thiz.dc;
      break;
    }
    case 4: {
      return $thiz.dd;
      break;
    }
    case 5: {
      return $thiz.de;
      break;
    }
    case 6: {
      return $thiz.df;
      break;
    }
    case 7: {
      return $thiz.dg;
      break;
    }
    case 8: {
      return $thiz.dh;
      break;
    }
    case 9: {
      return $thiz.d4;
      break;
    }
    case 10: {
      return $thiz.d5;
      break;
    }
    case 11: {
      return $thiz.d6;
      break;
    }
    case 12: {
      return $thiz.d7;
      break;
    }
    case 13: {
      return $thiz.d8;
      break;
    }
    case 14: {
      return $thiz.d9;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 14)"));
    }
  }
}
function $f_s_Product16__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gq;
      break;
    }
    case 1: {
      return $thiz.dq;
      break;
    }
    case 2: {
      return $thiz.dr;
      break;
    }
    case 3: {
      return $thiz.ds;
      break;
    }
    case 4: {
      return $thiz.dt;
      break;
    }
    case 5: {
      return $thiz.du;
      break;
    }
    case 6: {
      return $thiz.dv;
      break;
    }
    case 7: {
      return $thiz.dw;
      break;
    }
    case 8: {
      return $thiz.dx;
      break;
    }
    case 9: {
      return $thiz.di;
      break;
    }
    case 10: {
      return $thiz.dj;
      break;
    }
    case 11: {
      return $thiz.dk;
      break;
    }
    case 12: {
      return $thiz.dl;
      break;
    }
    case 13: {
      return $thiz.dm;
      break;
    }
    case 14: {
      return $thiz.dn;
      break;
    }
    case 15: {
      return $thiz.dp;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 15)"));
    }
  }
}
function $f_s_Product17__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gr;
      break;
    }
    case 1: {
      return $thiz.dG;
      break;
    }
    case 2: {
      return $thiz.dH;
      break;
    }
    case 3: {
      return $thiz.dI;
      break;
    }
    case 4: {
      return $thiz.dJ;
      break;
    }
    case 5: {
      return $thiz.dK;
      break;
    }
    case 6: {
      return $thiz.dL;
      break;
    }
    case 7: {
      return $thiz.dM;
      break;
    }
    case 8: {
      return $thiz.dN;
      break;
    }
    case 9: {
      return $thiz.dy;
      break;
    }
    case 10: {
      return $thiz.dz;
      break;
    }
    case 11: {
      return $thiz.dA;
      break;
    }
    case 12: {
      return $thiz.dB;
      break;
    }
    case 13: {
      return $thiz.dC;
      break;
    }
    case 14: {
      return $thiz.dD;
      break;
    }
    case 15: {
      return $thiz.dE;
      break;
    }
    case 16: {
      return $thiz.dF;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 16)"));
    }
  }
}
function $f_s_Product18__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gs;
      break;
    }
    case 1: {
      return $thiz.dX;
      break;
    }
    case 2: {
      return $thiz.dY;
      break;
    }
    case 3: {
      return $thiz.dZ;
      break;
    }
    case 4: {
      return $thiz.e0;
      break;
    }
    case 5: {
      return $thiz.e1;
      break;
    }
    case 6: {
      return $thiz.e2;
      break;
    }
    case 7: {
      return $thiz.e3;
      break;
    }
    case 8: {
      return $thiz.e4;
      break;
    }
    case 9: {
      return $thiz.dO;
      break;
    }
    case 10: {
      return $thiz.dP;
      break;
    }
    case 11: {
      return $thiz.dQ;
      break;
    }
    case 12: {
      return $thiz.dR;
      break;
    }
    case 13: {
      return $thiz.dS;
      break;
    }
    case 14: {
      return $thiz.dT;
      break;
    }
    case 15: {
      return $thiz.dU;
      break;
    }
    case 16: {
      return $thiz.dV;
      break;
    }
    case 17: {
      return $thiz.dW;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 17)"));
    }
  }
}
function $f_s_Product19__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gt;
      break;
    }
    case 1: {
      return $thiz.ef;
      break;
    }
    case 2: {
      return $thiz.eg;
      break;
    }
    case 3: {
      return $thiz.eh;
      break;
    }
    case 4: {
      return $thiz.ei;
      break;
    }
    case 5: {
      return $thiz.ej;
      break;
    }
    case 6: {
      return $thiz.ek;
      break;
    }
    case 7: {
      return $thiz.el;
      break;
    }
    case 8: {
      return $thiz.em;
      break;
    }
    case 9: {
      return $thiz.e5;
      break;
    }
    case 10: {
      return $thiz.e6;
      break;
    }
    case 11: {
      return $thiz.e7;
      break;
    }
    case 12: {
      return $thiz.e8;
      break;
    }
    case 13: {
      return $thiz.e9;
      break;
    }
    case 14: {
      return $thiz.ea;
      break;
    }
    case 15: {
      return $thiz.eb;
      break;
    }
    case 16: {
      return $thiz.ec;
      break;
    }
    case 17: {
      return $thiz.ed;
      break;
    }
    case 18: {
      return $thiz.ee;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 18)"));
    }
  }
}
function $f_s_Product2__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.a0();
      break;
    }
    case 1: {
      return $thiz.a1();
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 1)"));
    }
  }
}
function $f_s_Product20__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gu;
      break;
    }
    case 1: {
      return $thiz.ex;
      break;
    }
    case 2: {
      return $thiz.ez;
      break;
    }
    case 3: {
      return $thiz.eA;
      break;
    }
    case 4: {
      return $thiz.eB;
      break;
    }
    case 5: {
      return $thiz.eC;
      break;
    }
    case 6: {
      return $thiz.eD;
      break;
    }
    case 7: {
      return $thiz.eE;
      break;
    }
    case 8: {
      return $thiz.eF;
      break;
    }
    case 9: {
      return $thiz.en;
      break;
    }
    case 10: {
      return $thiz.eo;
      break;
    }
    case 11: {
      return $thiz.ep;
      break;
    }
    case 12: {
      return $thiz.eq;
      break;
    }
    case 13: {
      return $thiz.er;
      break;
    }
    case 14: {
      return $thiz.es;
      break;
    }
    case 15: {
      return $thiz.et;
      break;
    }
    case 16: {
      return $thiz.eu;
      break;
    }
    case 17: {
      return $thiz.ev;
      break;
    }
    case 18: {
      return $thiz.ew;
      break;
    }
    case 19: {
      return $thiz.ey;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 19)"));
    }
  }
}
function $f_s_Product21__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gv;
      break;
    }
    case 1: {
      return $thiz.eQ;
      break;
    }
    case 2: {
      return $thiz.eT;
      break;
    }
    case 3: {
      return $thiz.eU;
      break;
    }
    case 4: {
      return $thiz.eV;
      break;
    }
    case 5: {
      return $thiz.eW;
      break;
    }
    case 6: {
      return $thiz.eX;
      break;
    }
    case 7: {
      return $thiz.eY;
      break;
    }
    case 8: {
      return $thiz.eZ;
      break;
    }
    case 9: {
      return $thiz.eG;
      break;
    }
    case 10: {
      return $thiz.eH;
      break;
    }
    case 11: {
      return $thiz.eI;
      break;
    }
    case 12: {
      return $thiz.eJ;
      break;
    }
    case 13: {
      return $thiz.eK;
      break;
    }
    case 14: {
      return $thiz.eL;
      break;
    }
    case 15: {
      return $thiz.eM;
      break;
    }
    case 16: {
      return $thiz.eN;
      break;
    }
    case 17: {
      return $thiz.eO;
      break;
    }
    case 18: {
      return $thiz.eP;
      break;
    }
    case 19: {
      return $thiz.eR;
      break;
    }
    case 20: {
      return $thiz.eS;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 20)"));
    }
  }
}
function $f_s_Product22__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gw;
      break;
    }
    case 1: {
      return $thiz.fa;
      break;
    }
    case 2: {
      return $thiz.fe;
      break;
    }
    case 3: {
      return $thiz.ff;
      break;
    }
    case 4: {
      return $thiz.fg;
      break;
    }
    case 5: {
      return $thiz.fh;
      break;
    }
    case 6: {
      return $thiz.fi;
      break;
    }
    case 7: {
      return $thiz.fj;
      break;
    }
    case 8: {
      return $thiz.fk;
      break;
    }
    case 9: {
      return $thiz.f0;
      break;
    }
    case 10: {
      return $thiz.f1;
      break;
    }
    case 11: {
      return $thiz.f2;
      break;
    }
    case 12: {
      return $thiz.f3;
      break;
    }
    case 13: {
      return $thiz.f4;
      break;
    }
    case 14: {
      return $thiz.f5;
      break;
    }
    case 15: {
      return $thiz.f6;
      break;
    }
    case 16: {
      return $thiz.f7;
      break;
    }
    case 17: {
      return $thiz.f8;
      break;
    }
    case 18: {
      return $thiz.f9;
      break;
    }
    case 19: {
      return $thiz.fb;
      break;
    }
    case 20: {
      return $thiz.fc;
      break;
    }
    case 21: {
      return $thiz.fd;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 21)"));
    }
  }
}
function $f_s_Product3__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.aK;
      break;
    }
    case 1: {
      return $thiz.aU;
      break;
    }
    case 2: {
      return $thiz.b3;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 2)"));
    }
  }
}
function $f_s_Product4__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.bC;
      break;
    }
    case 1: {
      return $thiz.bk;
      break;
    }
    case 2: {
      return $thiz.bl;
      break;
    }
    case 3: {
      return $thiz.bm;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 3)"));
    }
  }
}
function $f_s_Product5__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gx;
      break;
    }
    case 1: {
      return $thiz.fl;
      break;
    }
    case 2: {
      return $thiz.fm;
      break;
    }
    case 3: {
      return $thiz.fn;
      break;
    }
    case 4: {
      return $thiz.fo;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 4)"));
    }
  }
}
function $f_s_Product6__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gy;
      break;
    }
    case 1: {
      return $thiz.fp;
      break;
    }
    case 2: {
      return $thiz.fq;
      break;
    }
    case 3: {
      return $thiz.fr;
      break;
    }
    case 4: {
      return $thiz.fs;
      break;
    }
    case 5: {
      return $thiz.ft;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 5)"));
    }
  }
}
function $f_s_Product7__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gz;
      break;
    }
    case 1: {
      return $thiz.fu;
      break;
    }
    case 2: {
      return $thiz.fv;
      break;
    }
    case 3: {
      return $thiz.fw;
      break;
    }
    case 4: {
      return $thiz.fx;
      break;
    }
    case 5: {
      return $thiz.fy;
      break;
    }
    case 6: {
      return $thiz.fz;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 6)"));
    }
  }
}
function $f_s_Product8__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gA;
      break;
    }
    case 1: {
      return $thiz.fA;
      break;
    }
    case 2: {
      return $thiz.fB;
      break;
    }
    case 3: {
      return $thiz.fC;
      break;
    }
    case 4: {
      return $thiz.fD;
      break;
    }
    case 5: {
      return $thiz.fE;
      break;
    }
    case 6: {
      return $thiz.fF;
      break;
    }
    case 7: {
      return $thiz.fG;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 7)"));
    }
  }
}
function $f_s_Product9__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.gB;
      break;
    }
    case 1: {
      return $thiz.fH;
      break;
    }
    case 2: {
      return $thiz.fI;
      break;
    }
    case 3: {
      return $thiz.fJ;
      break;
    }
    case 4: {
      return $thiz.fK;
      break;
    }
    case 5: {
      return $thiz.fL;
      break;
    }
    case 6: {
      return $thiz.fM;
      break;
    }
    case 7: {
      return $thiz.fN;
      break;
    }
    case 8: {
      return $thiz.fO;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).pj(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().bn : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.aj();
  while ($thiz.X()) {
    if ((!those.X())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().c($thiz.S(), those.S()))) {
      return false;
    }
  }
  return (!those.X());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.bn = null;
  $n_sc_Iterator$ = this;
  this.bn = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  c9: 1,
  a: 1,
  aw: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cG)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.lx = null;
  this.lx = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.i0 = (function() {
  return (0, this.lx)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cP: 1,
  cO: 1,
  bu: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.ly = null;
  this.ly = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.h = (function(x0) {
  return (0, this.ly)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cR: 1,
  cQ: 1,
  g: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.lz = null;
  this.lz = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.nQ = (function(x0, x1) {
  return (0, this.lz)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cT: 1,
  cS: 1,
  bv: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.lA = null;
  this.lA = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.kP = (function(x0, x1, x2) {
  return (0, this.lA)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cV: 1,
  cU: 1,
  bw: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.lB = null;
  this.lB = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.nP = (function(x0, x1, x2, x3) {
  return (0, this.lB)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cX: 1,
  cW: 1,
  bx: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.lC = null;
  this.lC = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.p0 = (function(x0, x1, x2, x3, x4) {
  return (0, this.lC)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  cZ: 1,
  cY: 1,
  by: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  d2: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.al = null;
  this.al = es;
  if ((es.b.length <= 22)) {
    $m_sr_Scala3RunTime$().p6();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function(n) {
  return this.al.b[n];
});
$p.z = (function() {
  return this.al.b.length;
});
$p.H = (function() {
  return "Tuple";
});
$p.r = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().rF(this.al), "(", ",", ")");
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().pf(this, (-889275714), null);
});
$p.u = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.al === that.al)) {
      return true;
    } else {
      if ((this.al.b.length !== that.al.b.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.al.b.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.al;
        var n = i;
        var $x_1 = arr$3.b[n];
        var arr$4 = that.al;
        var n$1 = i;
        if ((!$x_2.c($x_1, arr$4.b[n$1]))) {
          return false;
        }
        i = ((1 + i) | 0);
      }
      return true;
    }
  } else {
    return false;
  }
});
function $isArrayOf_sr_TupleXXL(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aH)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aH: 1,
  b: 1,
  c: 1
}));
/** @constructor */
function $c_sjs_js_Any$() {
}
$p = $c_sjs_js_Any$.prototype = new $h_O();
$p.constructor = $c_sjs_js_Any$;
/** @constructor */
function $h_sjs_js_Any$() {
}
$h_sjs_js_Any$.prototype = $p;
$p.i2 = (function(f) {
  return ((arg1$2) => f.h(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  d8: 1,
  dc: 1,
  dd: 1
}));
var $n_sjs_js_Any$;
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$();
  }
  return $n_sjs_js_Any$;
}
var $b_Ltrivalibs_bufferdata_BufferView;
function $a_Ltrivalibs_bufferdata_BufferView() {
  if ((!$b_Ltrivalibs_bufferdata_BufferView)) {
    $b_Ltrivalibs_bufferdata_BufferView = class $b_Ltrivalibs_bufferdata_BufferView extends Object {
      constructor(arg, arg$2) {
        var dv = null;
        var off = 0;
        dv = arg;
        off = (arg$2 | 0);
        super();
        Object.defineProperty(this, "dv", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "off", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        this.dv = dv;
        this.off = off;
      }
    };
  }
  return $b_Ltrivalibs_bufferdata_BufferView;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3.prototype = $p;
$p.h = (function(x) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec4((+x.bC), (+x.bk), (+x.bl), (+x.bm));
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$$anon$3, "trivalibs.graphics.math.cpu.Vec4$$anon$3", ({
  eH: 1,
  M: 1,
  g: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2.prototype = $p;
$p.h = (function(x) {
  return x;
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2, "trivalibs.graphics.math.gpu.expr$package$$anon$2", ({
  eY: 1,
  M: 1,
  g: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = $p;
$p.h = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a9((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  f0: 1,
  M: 1,
  g: 1
}));
var $b_Ltrivalibs_graphics_painter_BlendFn;
function $a_Ltrivalibs_graphics_painter_BlendFn() {
  if ((!$b_Ltrivalibs_graphics_painter_BlendFn)) {
    $b_Ltrivalibs_graphics_painter_BlendFn = class $b_Ltrivalibs_graphics_painter_BlendFn extends Object {
      constructor(arg, arg$2, ...rest) {
        var srcFactor = null;
        var dstFactor = null;
        var operation = null;
        srcFactor = arg;
        dstFactor = arg$2;
        operation = ((rest[0] === (void 0)) ? "add" : rest[0]);
        super();
        Object.defineProperty(this, "srcFactor", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "dstFactor", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "operation", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.srcFactor = srcFactor;
        this.dstFactor = dstFactor;
        this.operation = operation;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_BlendFn;
}
var $b_Ltrivalibs_graphics_painter_BlendState;
function $a_Ltrivalibs_graphics_painter_BlendState() {
  if ((!$b_Ltrivalibs_graphics_painter_BlendState)) {
    $b_Ltrivalibs_graphics_painter_BlendState = class $b_Ltrivalibs_graphics_painter_BlendState extends Object {
      constructor(arg, arg$2) {
        var color = null;
        var alpha = null;
        color = arg;
        alpha = arg$2;
        super();
        Object.defineProperty(this, "color", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "alpha", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.color = color;
        this.alpha = alpha;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_BlendState;
}
var $b_Ltrivalibs_graphics_painter_PanelBinding;
function $a_Ltrivalibs_graphics_painter_PanelBinding() {
  if ((!$b_Ltrivalibs_graphics_painter_PanelBinding)) {
    $b_Ltrivalibs_graphics_painter_PanelBinding = class $b_Ltrivalibs_graphics_painter_PanelBinding extends Object {
      constructor(arg, ...rest) {
        var panel = null;
        var index = 0;
        var mipLevel = 0;
        var depth = false;
        panel = arg;
        index = ((rest[0] === (void 0)) ? 0 : (rest[0] | 0));
        mipLevel = ((rest[1] === (void 0)) ? (-1) : (rest[1] | 0));
        depth = ((rest[2] !== (void 0)) && (!(!rest[2])));
        super();
        Object.defineProperty(this, "panel", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "index", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        Object.defineProperty(this, "mipLevel", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": 0
        }));
        Object.defineProperty(this, "depth", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": false
        }));
        this.panel = panel;
        this.index = index;
        this.mipLevel = mipLevel;
        this.depth = depth;
      }
    };
  }
  return $b_Ltrivalibs_graphics_painter_PanelBinding;
}
var $b_Ltrivalibs_graphics_shader_dsl_WgslFnData;
function $a_Ltrivalibs_graphics_shader_dsl_WgslFnData() {
  if ((!$b_Ltrivalibs_graphics_shader_dsl_WgslFnData)) {
    $b_Ltrivalibs_graphics_shader_dsl_WgslFnData = class $b_Ltrivalibs_graphics_shader_dsl_WgslFnData extends Object {
      constructor(arg, arg$2, ...rest) {
        var name = null;
        var src = null;
        var deps = null;
        name = arg;
        src = arg$2;
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().oR() : rest[0]);
        super();
        Object.defineProperty(this, "name", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "src", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        Object.defineProperty(this, "deps", ({
          "configurable": true,
          "enumerable": true,
          "writable": true,
          "value": null
        }));
        this.name = name;
        this.src = src;
        this.deps = deps;
      }
    };
  }
  return $b_Ltrivalibs_graphics_shader_dsl_WgslFnData;
}
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData = new $TypeData().i(2, "trivalibs.graphics.shader.dsl.WgslFnData", ({
  fO: 1,
  de: 1,
  aI: 1
}), ((x) => (x instanceof $a_Ltrivalibs_graphics_shader_dsl_WgslFnData())));
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  b5: 1,
  ba: 1,
  f: 1,
  a: 1
}));
function $f_jl_Boolean__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_jl_Boolean__hashCode__I($thiz) {
  return ($thiz ? 1231 : 1237);
}
function $f_jl_Boolean__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Boolean = new $TypeData().i(0, "java.lang.Boolean", ({
  b6: 1,
  a: 1,
  i: 1,
  h: 1
}), ((x) => ((typeof x) === "boolean")));
function $f_jl_Character__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Character__equals__O__Z($thiz, that) {
  return ((that instanceof $Char) && ($thiz === that.c));
}
function $f_jl_Character__toString__T($thiz) {
  return ("" + $cToS($thiz));
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  a3: 1,
  a: 1,
  i: 1,
  h: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.ay = null;
  this.ay = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.r = (function() {
  return this.ay;
});
$p.Q = (function() {
  return this.ay.length;
});
$p.nW = (function(index) {
  return this.ay.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bk: 1,
  L: 1,
  b3: 1,
  a: 1
}));
/** @constructor */
function $c_sc_AbstractIterator() {
}
$p = $c_sc_AbstractIterator.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterator;
/** @constructor */
function $h_sc_AbstractIterator() {
}
$h_sc_AbstractIterator.prototype = $p;
$p.ap = (function() {
  return (-1);
});
$p.nZ = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.kN = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.aj = (function() {
  return this;
});
$p.i1 = (function(n) {
  return this.jq(n, (-1));
});
$p.jq = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.r = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.c8(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.ap();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.ap();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.aj(), that);
}
/** @constructor */
function $c_Lsketchlib_utils_room_Beam(a, b, width, height, soffitY) {
  this.bq = null;
  this.br = null;
  this.b6 = 0.0;
  this.bG = 0.0;
  this.fW = 0.0;
  this.bq = a;
  this.br = b;
  this.b6 = width;
  this.bG = height;
  this.fW = soffitY;
}
$p = $c_Lsketchlib_utils_room_Beam.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Beam;
/** @constructor */
function $h_Lsketchlib_utils_room_Beam() {
}
$h_Lsketchlib_utils_room_Beam.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().k(acc, 2066383);
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.bq));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.br));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().aH(this.b6));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().aH(this.bG));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().aH(this.fW));
  return $m_sr_Statics$().ac(acc, 5);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_Beam)) {
    if ((((this.b6 === x$0.b6) && (this.bG === x$0.bG)) && (this.fW === x$0.fW))) {
      var x = this.bq;
      var x$2 = x$0.bq;
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.br;
      var x$4 = x$0.br;
      return ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().bO(this);
});
$p.z = (function() {
  return 5;
});
$p.H = (function() {
  return "Beam";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.bq;
      break;
    }
    case 1: {
      return this.br;
      break;
    }
    case 2: {
      return this.b6;
      break;
    }
    case 3: {
      return this.bG;
      break;
    }
    case 4: {
      return this.fW;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_Beam(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aL)));
}
var $d_Lsketchlib_utils_room_Beam = new $TypeData().i($c_Lsketchlib_utils_room_Beam, "sketchlib.utils.room.Beam", ({
  aL: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_BeamFamily(dir, spacing, phase, width) {
  this.aM = null;
  this.bs = 0.0;
  this.bI = 0.0;
  this.bW = 0.0;
  this.aM = dir;
  this.bs = spacing;
  this.bI = phase;
  this.bW = width;
}
$p = $c_Lsketchlib_utils_room_BeamFamily.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_BeamFamily;
/** @constructor */
function $h_Lsketchlib_utils_room_BeamFamily() {
}
$h_Lsketchlib_utils_room_BeamFamily.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().k(acc, (-649758701));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.aM));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().aH(this.bs));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().aH(this.bI));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().aH(this.bW));
  return $m_sr_Statics$().ac(acc, 4);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_BeamFamily)) {
    if ((((this.bs === x$0.bs) && (this.bI === x$0.bI)) && (this.bW === x$0.bW))) {
      var x = this.aM;
      var x$2 = x$0.aM;
      return ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().bO(this);
});
$p.z = (function() {
  return 4;
});
$p.H = (function() {
  return "BeamFamily";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.aM;
      break;
    }
    case 1: {
      return this.bs;
      break;
    }
    case 2: {
      return this.bI;
      break;
    }
    case 3: {
      return this.bW;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_BeamFamily(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aM)));
}
var $d_Lsketchlib_utils_room_BeamFamily = new $TypeData().i($c_Lsketchlib_utils_room_BeamFamily, "sketchlib.utils.room.BeamFamily", ({
  aM: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Edge(a, b, inwardNormal) {
  this.Z = null;
  this.aD = null;
  this.bY = null;
  this.Z = a;
  this.aD = b;
  this.bY = inwardNormal;
}
$p = $c_Lsketchlib_utils_room_Edge.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Edge;
/** @constructor */
function $h_Lsketchlib_utils_room_Edge() {
}
$h_Lsketchlib_utils_room_Edge.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 2040767547, true);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_Edge)) {
    var x = this.Z;
    var x$2 = x$0.Z;
    if (((x === null) ? (x$2 === null) : (x === x$2))) {
      var x$3 = this.aD;
      var x$4 = x$0.aD;
      var $x_1 = ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$5 = this.bY;
      var x$6 = x$0.bY;
      return ((x$5 === null) ? (x$6 === null) : (x$5 === x$6));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().bO(this);
});
$p.z = (function() {
  return 3;
});
$p.H = (function() {
  return "Edge";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.Z;
      break;
    }
    case 1: {
      return this.aD;
      break;
    }
    case 2: {
      return this.bY;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_Edge(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aN)));
}
var $d_Lsketchlib_utils_room_Edge = new $TypeData().i($c_Lsketchlib_utils_room_Edge, "sketchlib.utils.room.Edge", ({
  aN: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Footprint(rings) {
  this.bJ = null;
  this.bJ = rings;
}
$p = $c_Lsketchlib_utils_room_Footprint.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Footprint;
/** @constructor */
function $h_Lsketchlib_utils_room_Footprint() {
}
$h_Lsketchlib_utils_room_Footprint.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-905123115), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lsketchlib_utils_room_Footprint) && $m_sr_BoxesRunTime$().c(this.bJ, x$0.bJ)));
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().bO(this);
});
$p.z = (function() {
  return 1;
});
$p.H = (function() {
  return "Footprint";
});
$p.p = (function(n) {
  if ((n === 0)) {
    return this.bJ;
  }
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
function $isArrayOf_Lsketchlib_utils_room_Footprint(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aO)));
}
var $d_Lsketchlib_utils_room_Footprint = new $TypeData().i($c_Lsketchlib_utils_room_Footprint, "sketchlib.utils.room.Footprint", ({
  aO: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Painting(wall, shape, model, shadowRect, shadowFade, shadowStrength, basePos, baseRect) {
  this.hv = null;
  this.gL = null;
  this.hu = null;
  this.gJ = null;
  this.gI = null;
  this.gK = 0.0;
  this.hs = null;
  this.ht = null;
  this.hv = wall;
  this.gL = shape;
  this.hu = model;
  this.gJ = shadowRect;
  this.gI = shadowFade;
  this.gK = shadowStrength;
  this.hs = basePos;
  this.ht = baseRect;
}
$p = $c_Lsketchlib_utils_room_Painting.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Painting;
/** @constructor */
function $h_Lsketchlib_utils_room_Painting() {
}
$h_Lsketchlib_utils_room_Painting.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().k(acc, 990625508);
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.hv));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.gL));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.hu));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.gJ));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.gI));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().aH(this.gK));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.hs));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.ht));
  return $m_sr_Statics$().ac(acc, 8);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_Painting)) {
    if ((this.gK === x$0.gK)) {
      var x = this.hv;
      var x$2 = x$0.hv;
      var $x_6 = ((x === null) ? (x$2 === null) : x.u(x$2));
    } else {
      var $x_6 = false;
    }
    if ($x_6) {
      var x$3 = this.gL;
      var x$4 = x$0.gL;
      var $x_5 = ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      var $x_5 = false;
    }
    if ($x_5) {
      var x$5 = this.hu;
      var x$6 = x$0.hu;
      var $x_4 = ((x$5 === null) ? (x$6 === null) : (x$5 === x$6));
    } else {
      var $x_4 = false;
    }
    if ($x_4) {
      var x$7 = this.gJ;
      var x$8 = x$0.gJ;
      var $x_3 = ((x$7 === null) ? (x$8 === null) : (x$7 === x$8));
    } else {
      var $x_3 = false;
    }
    if ($x_3) {
      var x$9 = this.gI;
      var x$10 = x$0.gI;
      var $x_2 = ((x$9 === null) ? (x$10 === null) : (x$9 === x$10));
    } else {
      var $x_2 = false;
    }
    if ($x_2) {
      var x$11 = this.hs;
      var x$12 = x$0.hs;
      var $x_1 = ((x$11 === null) ? (x$12 === null) : (x$11 === x$12));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$13 = this.ht;
      var x$14 = x$0.ht;
      return ((x$13 === null) ? (x$14 === null) : (x$13 === x$14));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().bO(this);
});
$p.z = (function() {
  return 8;
});
$p.H = (function() {
  return "Painting";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.hv;
      break;
    }
    case 1: {
      return this.gL;
      break;
    }
    case 2: {
      return this.hu;
      break;
    }
    case 3: {
      return this.gJ;
      break;
    }
    case 4: {
      return this.gI;
      break;
    }
    case 5: {
      return this.gK;
      break;
    }
    case 6: {
      return this.hs;
      break;
    }
    case 7: {
      return this.ht;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_Painting(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aP)));
}
var $d_Lsketchlib_utils_room_Painting = new $TypeData().i($c_Lsketchlib_utils_room_Painting, "sketchlib.utils.room.Painting", ({
  aP: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_PaintingSpec(width, height, depth, image, sideStretch) {
  this.c0 = 0.0;
  this.bZ = 0.0;
  this.bK = 0.0;
  this.gM = null;
  this.fX = 0.0;
  this.c0 = width;
  this.bZ = height;
  this.bK = depth;
  this.gM = image;
  this.fX = sideStretch;
}
$p = $c_Lsketchlib_utils_room_PaintingSpec.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_PaintingSpec;
/** @constructor */
function $h_Lsketchlib_utils_room_PaintingSpec() {
}
$h_Lsketchlib_utils_room_PaintingSpec.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().k(acc, 1068570815);
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().aH(this.c0));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().aH(this.bZ));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().aH(this.bK));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.gM));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().aH(this.fX));
  return $m_sr_Statics$().ac(acc, 5);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_PaintingSpec)) {
    if (((((this.c0 === x$0.c0) && (this.bZ === x$0.bZ)) && (this.bK === x$0.bK)) && (this.fX === x$0.fX))) {
      var x = this.gM;
      var x$2 = x$0.gM;
      return ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().bO(this);
});
$p.z = (function() {
  return 5;
});
$p.H = (function() {
  return "PaintingSpec";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.c0;
      break;
    }
    case 1: {
      return this.bZ;
      break;
    }
    case 2: {
      return this.bK;
      break;
    }
    case 3: {
      return this.gM;
      break;
    }
    case 4: {
      return this.fX;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_PaintingSpec(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aQ)));
}
var $d_Lsketchlib_utils_room_PaintingSpec = new $TypeData().i($c_Lsketchlib_utils_room_PaintingSpec, "sketchlib.utils.room.PaintingSpec", ({
  aQ: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Ring(points, facing, height) {
  this.bt = null;
  this.gN = 0.0;
  this.gO = 0.0;
  this.bt = points;
  this.gN = facing;
  this.gO = height;
}
$p = $c_Lsketchlib_utils_room_Ring.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Ring;
/** @constructor */
function $h_Lsketchlib_utils_room_Ring() {
}
$h_Lsketchlib_utils_room_Ring.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().k(acc, 2547280);
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.bt));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.gN));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().aH(this.gO));
  return $m_sr_Statics$().ac(acc, 3);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Lsketchlib_utils_room_Ring) && (((this.gO === x$0.gO) && $m_sr_BoxesRunTime$().c(this.bt, x$0.bt)) && (this.gN === x$0.gN))));
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().bO(this);
});
$p.z = (function() {
  return 3;
});
$p.H = (function() {
  return "Ring";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.bt;
      break;
    }
    case 1: {
      return this.gN;
      break;
    }
    case 2: {
      return this.gO;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_Ring(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aR)));
}
var $d_Lsketchlib_utils_room_Ring = new $TypeData().i($c_Lsketchlib_utils_room_Ring, "sketchlib.utils.room.Ring", ({
  aR: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketchlib_utils_room_Wall(center, width, height, inwardNormal) {
  this.fY = null;
  this.aP = 0.0;
  this.aX = 0.0;
  this.bu = null;
  this.fY = center;
  this.aP = width;
  this.aX = height;
  this.bu = inwardNormal;
}
$p = $c_Lsketchlib_utils_room_Wall.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_room_Wall;
/** @constructor */
function $h_Lsketchlib_utils_room_Wall() {
}
$h_Lsketchlib_utils_room_Wall.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().k(acc, 2688490);
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.fY));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().aH(this.aP));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().aH(this.aX));
  acc = $m_sr_Statics$().k(acc, $m_sr_Statics$().O(this.bu));
  return $m_sr_Statics$().ac(acc, 4);
});
$p.u = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketchlib_utils_room_Wall)) {
    if (((this.aP === x$0.aP) && (this.aX === x$0.aX))) {
      var x = this.fY;
      var x$2 = x$0.fY;
      var $x_1 = ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      var $x_1 = false;
    }
    if ($x_1) {
      var x$3 = this.bu;
      var x$4 = x$0.bu;
      return ((x$3 === null) ? (x$4 === null) : (x$3 === x$4));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().bO(this);
});
$p.z = (function() {
  return 4;
});
$p.H = (function() {
  return "Wall";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.fY;
      break;
    }
    case 1: {
      return this.aP;
      break;
    }
    case 2: {
      return this.aX;
      break;
    }
    case 3: {
      return this.bu;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketchlib_utils_room_Wall(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aS)));
}
var $d_Lsketchlib_utils_room_Wall = new $TypeData().i($c_Lsketchlib_utils_room_Wall, "sketchlib.utils.room.Wall", ({
  aS: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = $p;
$p.i4 = (function(m) {
  return m.jY;
});
$p.i5 = (function(m) {
  return m.jZ;
});
$p.i6 = (function(m) {
  return m.k0;
});
$p.i7 = (function(m) {
  return m.k1;
});
$p.i8 = (function(m) {
  return m.k2;
});
$p.i9 = (function(m) {
  return m.k3;
});
$p.ia = (function(m) {
  return m.k4;
});
$p.ib = (function(m) {
  return m.k5;
});
$p.ic = (function(m) {
  return m.k6;
});
$p.id = (function(m) {
  return m.k7;
});
$p.ie = (function(m) {
  return m.k8;
});
$p.ig = (function(m) {
  return m.k9;
});
$p.ih = (function(m) {
  return m.ka;
});
$p.ii = (function(m) {
  return m.kb;
});
$p.ij = (function(m) {
  return m.kc;
});
$p.ik = (function(m) {
  return m.kd;
});
$p.oe = (function(m, v) {
  m.jY = v;
});
$p.of = (function(m, v) {
  m.jZ = v;
});
$p.og = (function(m, v) {
  m.k0 = v;
});
$p.oh = (function(m, v) {
  m.k1 = v;
});
$p.oi = (function(m, v) {
  m.k2 = v;
});
$p.oj = (function(m, v) {
  m.k3 = v;
});
$p.ok = (function(m, v) {
  m.k4 = v;
});
$p.ol = (function(m, v) {
  m.k5 = v;
});
$p.om = (function(m, v) {
  m.k6 = v;
});
$p.on = (function(m, v) {
  m.k7 = v;
});
$p.oo = (function(m, v) {
  m.k8 = v;
});
$p.op = (function(m, v) {
  m.k9 = v;
});
$p.oq = (function(m, v) {
  m.ka = v;
});
$p.or = (function(m, v) {
  m.kb = v;
});
$p.os = (function(m, v) {
  m.kc = v;
});
$p.ot = (function(m, v) {
  m.kd = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  et: 1,
  Y: 1,
  aW: 1,
  aX: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
function $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$.prototype = $p;
$p.as = (function(v) {
  return v.iN;
});
$p.at = (function(v) {
  return v.iO;
});
$p.bj = (function(v) {
  return v.iP;
});
$p.bh = (function(v) {
  return v.iM;
});
$p.hd = (function(v, value) {
  v.iN = value;
});
$p.he = (function(v, value) {
  v.iO = value;
});
$p.lg = (function(v, value) {
  v.iP = value;
});
$p.lb = (function(v, value) {
  v.iM = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  ex: 1,
  K: 1,
  a0: 1,
  a1: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$.prototype = $p;
$p.as = (function(v) {
  return v.o;
});
$p.at = (function(v) {
  return v.m;
});
$p.hd = (function(v, value) {
  v.o = value;
});
$p.he = (function(v, value) {
  v.m = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$, "trivalibs.graphics.math.cpu.Vec2$given_Vec2Mutable_Vec2$", ({
  eB: 1,
  Z: 1,
  aY: 1,
  aZ: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
function $m_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$ = new $c_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec2$given\uff3fVec2Mutable\uff3fVec2$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$, "trivalibs.graphics.math.cpu.Vec3$given_Vec3Mutable_Vec3$", ({
  eE: 1,
  b0: 1,
  ek: 1,
  en: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$.prototype = $p;
$p.as = (function(v) {
  return v.gS;
});
$p.at = (function(v) {
  return v.gT;
});
$p.bj = (function(v) {
  return v.gU;
});
$p.bh = (function(v) {
  return v.gR;
});
$p.hd = (function(v, value) {
  v.gS = value;
});
$p.he = (function(v, value) {
  v.gT = value;
});
$p.lg = (function(v, value) {
  v.gU = value;
});
$p.lb = (function(v, value) {
  v.gR = value;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$, "trivalibs.graphics.math.cpu.Vec4$given_Vec4Mutable_Vec4$", ({
  eI: 1,
  K: 1,
  a0: 1,
  a1: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
function $m_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$ = new $c_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec4$given\uff3fVec4Mutable\uff3fVec4$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$.prototype = $p;
$p.q6 = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.q8 = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.qa = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.qc = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.qe = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.qg = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.qi = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.qk = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.qm = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.qo = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.qq = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.qs = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.qu = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.qw = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.qy = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.qA = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.q7 = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.q9 = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.qb = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.qd = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.qf = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.qh = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.qj = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.ql = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.qn = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.qp = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.qr = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.qt = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.qv = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.qx = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.qz = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.qB = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.i4 = (function(m) {
  return this.q6(m);
});
$p.i5 = (function(m) {
  return this.q8(m);
});
$p.i6 = (function(m) {
  return this.qa(m);
});
$p.i7 = (function(m) {
  return this.qc(m);
});
$p.i8 = (function(m) {
  return this.qe(m);
});
$p.i9 = (function(m) {
  return this.qg(m);
});
$p.ia = (function(m) {
  return this.qi(m);
});
$p.ib = (function(m) {
  return this.qk(m);
});
$p.ic = (function(m) {
  return this.qm(m);
});
$p.id = (function(m) {
  return this.qo(m);
});
$p.ie = (function(m) {
  return this.qq(m);
});
$p.ig = (function(m) {
  return this.qs(m);
});
$p.ih = (function(m) {
  return this.qu(m);
});
$p.ii = (function(m) {
  return this.qw(m);
});
$p.ij = (function(m) {
  return this.qy(m);
});
$p.ik = (function(m) {
  return this.qA(m);
});
$p.oe = (function(m, v) {
  this.q7(m, v);
});
$p.of = (function(m, v) {
  this.q9(m, v);
});
$p.og = (function(m, v) {
  this.qb(m, v);
});
$p.oh = (function(m, v) {
  this.qd(m, v);
});
$p.oi = (function(m, v) {
  this.qf(m, v);
});
$p.oj = (function(m, v) {
  this.qh(m, v);
});
$p.ok = (function(m, v) {
  this.qj(m, v);
});
$p.ol = (function(m, v) {
  this.ql(m, v);
});
$p.om = (function(m, v) {
  this.qn(m, v);
});
$p.on = (function(m, v) {
  this.qp(m, v);
});
$p.oo = (function(m, v) {
  this.qr(m, v);
});
$p.op = (function(m, v) {
  this.qt(m, v);
});
$p.oq = (function(m, v) {
  this.qv(m, v);
});
$p.or = (function(m, v) {
  this.qx(m, v);
});
$p.os = (function(m, v) {
  this.qz(m, v);
});
$p.ot = (function(m, v) {
  this.qB(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  eL: 1,
  Y: 1,
  aW: 1,
  aX: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$.prototype = $p;
$p.lc = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.le = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.ld = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (v.off | 0);
  v.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.lf = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy4 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy4, value$proxy2, true);
});
$p.as = (function(v) {
  return this.lc(v);
});
$p.at = (function(v) {
  return this.le(v);
});
$p.hd = (function(v, value) {
  this.ld(v, value);
});
$p.he = (function(v, value) {
  this.lf(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$, "trivalibs.graphics.math.cpu.vec2$package$Vec2Buffer$vec2MutableBuffer$", ({
  eO: 1,
  Z: 1,
  aY: 1,
  aZ: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec2$package$Vec2Buffer$vec2MutableBuffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$.prototype = $p;
$p.lc = (function(v) {
  var offset$proxy1 = (v.off | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy1, true));
});
$p.le = (function(v) {
  var offset$proxy2 = ((4 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy2, true));
});
$p.rJ = (function(v) {
  var offset$proxy3 = ((8 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy3, true));
});
$p.rB = (function(v) {
  var offset$proxy4 = ((12 + (v.off | 0)) | 0);
  return Math.fround(v.dv.getFloat32(offset$proxy4, true));
});
$p.ld = (function(v, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy5 = (v.off | 0);
  v.dv.setFloat32(offset$proxy5, value$proxy1, true);
});
$p.lf = (function(v, value) {
  var value$proxy2 = Math.fround(value);
  var offset$proxy6 = ((4 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy6, value$proxy2, true);
});
$p.rK = (function(v, value) {
  var value$proxy3 = Math.fround(value);
  var offset$proxy7 = ((8 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy7, value$proxy3, true);
});
$p.rC = (function(v, value) {
  var value$proxy4 = Math.fround(value);
  var offset$proxy8 = ((12 + (v.off | 0)) | 0);
  v.dv.setFloat32(offset$proxy8, value$proxy4, true);
});
$p.as = (function(v) {
  return this.lc(v);
});
$p.at = (function(v) {
  return this.le(v);
});
$p.bj = (function(v) {
  return this.rJ(v);
});
$p.bh = (function(v) {
  return this.rB(v);
});
$p.hd = (function(v, value) {
  this.ld(v, value);
});
$p.he = (function(v, value) {
  this.lf(v, value);
});
$p.lg = (function(v, value) {
  this.rK(v, value);
});
$p.lb = (function(v, value) {
  this.rC(v, value);
});
var $d_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$, "trivalibs.graphics.math.cpu.vec4$package$Vec4Buffer$vec4MutableBuffer$", ({
  eR: 1,
  K: 1,
  a0: 1,
  a1: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_vec4$package$Vec4Buffer$vec4MutableBuffer$;
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T($thiz, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, vertexBody, fragmentBody, fragBuiltinParams) {
  var f$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, vertexBody);
  var g$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, fragmentBody, fragBuiltinParams);
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.hN, f$proxy1, g$proxy1];
  var parts = [];
  var i = 0;
  while ((i < (all.length | 0))) {
    if ((all[i].length > 0)) {
      parts.push(all[i]);
    }
    i = ((1 + i) | 0);
  }
  return parts.join("\n\n");
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, body) {
  return (("@vertex\nfn vs_main(in: VertexInput) -> VertexOutput {\n  var out: VertexOutput;\n" + body) + "\n  return out;\n}");
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, body, builtinParams) {
  return (((("@fragment\nfn fs_main(in: VertexOutput" + builtinParams) + ") -> FragmentOutput {\n  var out: FragmentOutput;\n") + body) + "\n  return out;\n}");
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_ShaderDef(vertexBody, fragmentBody, helperFns) {
  this.a7 = null;
  this.a6 = null;
  this.hN = null;
  this.a7 = vertexBody;
  this.a6 = fragmentBody;
  this.hN = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-1488826029), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.a7 === x$0.a7) && (this.a6 === x$0.a6)) && (this.hN === x$0.hN))));
});
$p.r = (function() {
  return $m_sr_ScalaRunTime$().bO(this);
});
$p.z = (function() {
  return 3;
});
$p.H = (function() {
  return "ShaderDef";
});
$p.p = (function(n) {
  switch (n) {
    case 0: {
      return this.a7;
      break;
    }
    case 1: {
      return this.a6;
      break;
    }
    case 2: {
      return this.hN;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b2)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  b2: 1,
  b: 1,
  c: 1,
  a: 1
}));
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  b4: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $f_jl_Byte__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Byte__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Byte__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Byte = new $TypeData().i(0, "java.lang.Byte", ({
  b7: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1
}), ((x) => $isByte(x)));
function $ct_jl_IllegalArgumentException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_IllegalArgumentException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
var $d_jl_IllegalArgumentException = new $TypeData().i($c_jl_IllegalArgumentException, "java.lang.IllegalArgumentException", ({
  a5: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_IndexOutOfBoundsException = new $TypeData().i($c_jl_IndexOutOfBoundsException, "java.lang.IndexOutOfBoundsException", ({
  bc: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $ct_jl_NullPointerException__T__($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz;
}
function $ct_jl_NullPointerException__($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz;
}
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
}
var $d_jl_NullPointerException = new $TypeData().i($c_jl_NullPointerException, "java.lang.NullPointerException", ({
  bf: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bh)));
}
function $f_jl_Short__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Short__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Short__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Short = new $TypeData().i(0, "java.lang.Short", ({
  bi: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  bm: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_ju_NoSuchElementException = new $TypeData().i($c_ju_NoSuchElementException, "java.util.NoSuchElementException", ({
  br: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.ll)) {
    if (($thiz.it === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.it;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.jv.N));
      try {
        var $x_1 = ((($thiz.it + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.lk = $x_1;
    $thiz.ll = true;
  }
  return $thiz.lk;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.it = null;
    this.lk = null;
    this.ll = false;
    this.it = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  ji() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bB: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.hg = 0;
  this.ln = 0;
  this.lm = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.lm = outer;
  this.hg = 0;
  this.ln = outer.z();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.X = (function() {
  return (this.hg < this.ln);
});
$p.S = (function() {
  var result = this.lm.p(this.hg);
  this.hg = ((1 + this.hg) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bD: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.gj = null;
  this.gj = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.z = (function() {
  return 1;
});
$p.p = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.r = (function() {
  return (("(" + this.gj) + ")");
});
$p.H = (function() {
  return "Tuple1";
});
$p.K = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 1228477340, true);
});
$p.u = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().c(this.gj, x$1.gj)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  a8: 1,
  bE: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.gk = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.cb = null;
  this.gk = _1;
  this.cc = _2;
  this.cd = _3;
  this.ce = _4;
  this.cf = _5;
  this.cg = _6;
  this.ch = _7;
  this.ci = _8;
  this.cj = _9;
  this.cb = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 10;
});
$p.p = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 2104595240, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().c(this.gk, x$0.gk) && $m_sr_BoxesRunTime$().c(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().c(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().c(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().c(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().c(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().c(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().c(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().c(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().c(this.cb, x$0.cb))));
});
$p.H = (function() {
  return "Tuple10";
});
$p.r = (function() {
  return (((((((((((((((((((("(" + this.gk) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.cb) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  a9: 1,
  b: 1,
  c: 1,
  bF: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.gl = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.ck = null;
  this.cl = null;
  this.gl = _1;
  this.cm = _2;
  this.cn = _3;
  this.co = _4;
  this.cp = _5;
  this.cq = _6;
  this.cr = _7;
  this.cs = _8;
  this.ct = _9;
  this.ck = _10;
  this.cl = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 11;
});
$p.p = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 838406606, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().c(this.gl, x$0.gl) && $m_sr_BoxesRunTime$().c(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().c(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().c(this.co, x$0.co)) && $m_sr_BoxesRunTime$().c(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().c(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().c(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().c(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().c(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().c(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().c(this.cl, x$0.cl))));
});
$p.H = (function() {
  return "Tuple11";
});
$p.r = (function() {
  return (((((((((((((((((((((("(" + this.gl) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ",") + this.ck) + ",") + this.cl) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  aa: 1,
  b: 1,
  c: 1,
  bG: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.gm = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.gm = _1;
  this.cx = _2;
  this.cy = _3;
  this.cz = _4;
  this.cA = _5;
  this.cB = _6;
  this.cC = _7;
  this.cD = _8;
  this.cE = _9;
  this.cu = _10;
  this.cv = _11;
  this.cw = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 12;
});
$p.p = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-1964145863), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().c(this.gm, x$0.gm) && $m_sr_BoxesRunTime$().c(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().c(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().c(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().c(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().c(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().c(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().c(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().c(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().c(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().c(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().c(this.cw, x$0.cw))));
});
$p.H = (function() {
  return "Tuple12";
});
$p.r = (function() {
  return (((((((((((((((((((((((("(" + this.gm) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  ab: 1,
  b: 1,
  c: 1,
  bH: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.gn = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cQ = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.gn = _1;
  this.cJ = _2;
  this.cK = _3;
  this.cL = _4;
  this.cM = _5;
  this.cN = _6;
  this.cO = _7;
  this.cP = _8;
  this.cQ = _9;
  this.cF = _10;
  this.cG = _11;
  this.cH = _12;
  this.cI = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 13;
});
$p.p = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 1224168367, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().c(this.gn, x$0.gn) && $m_sr_BoxesRunTime$().c(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().c(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().c(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().c(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().c(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().c(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().c(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().c(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().c(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().c(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().c(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().c(this.cI, x$0.cI))));
});
$p.H = (function() {
  return "Tuple13";
});
$p.r = (function() {
  return (((((((((((((((((((((((((("(" + this.gn) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  ac: 1,
  b: 1,
  c: 1,
  bI: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.go = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.cR = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.go = _1;
  this.cW = _2;
  this.cX = _3;
  this.cY = _4;
  this.cZ = _5;
  this.d0 = _6;
  this.d1 = _7;
  this.d2 = _8;
  this.d3 = _9;
  this.cR = _10;
  this.cS = _11;
  this.cT = _12;
  this.cU = _13;
  this.cV = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 14;
});
$p.p = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 147759069, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().c(this.go, x$0.go) && $m_sr_BoxesRunTime$().c(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().c(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().c(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().c(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().c(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().c(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().c(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().c(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().c(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().c(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().c(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().c(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().c(this.cV, x$0.cV))));
});
$p.H = (function() {
  return "Tuple14";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((("(" + this.go) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.cR) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  ad: 1,
  b: 1,
  c: 1,
  bJ: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.gp = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.gp = _1;
  this.da = _2;
  this.db = _3;
  this.dc = _4;
  this.dd = _5;
  this.de = _6;
  this.df = _7;
  this.dg = _8;
  this.dh = _9;
  this.d4 = _10;
  this.d5 = _11;
  this.d6 = _12;
  this.d7 = _13;
  this.d8 = _14;
  this.d9 = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 15;
});
$p.p = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 1834180931, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().c(this.gp, x$0.gp) && $m_sr_BoxesRunTime$().c(this.da, x$0.da)) && $m_sr_BoxesRunTime$().c(this.db, x$0.db)) && $m_sr_BoxesRunTime$().c(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().c(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().c(this.de, x$0.de)) && $m_sr_BoxesRunTime$().c(this.df, x$0.df)) && $m_sr_BoxesRunTime$().c(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().c(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().c(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().c(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().c(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().c(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().c(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().c(this.d9, x$0.d9))));
});
$p.H = (function() {
  return "Tuple15";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((("(" + this.gp) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  ae: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.gq = null;
  this.dq = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.di = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.gq = _1;
  this.dq = _2;
  this.dr = _3;
  this.ds = _4;
  this.dt = _5;
  this.du = _6;
  this.dv = _7;
  this.dw = _8;
  this.dx = _9;
  this.di = _10;
  this.dj = _11;
  this.dk = _12;
  this.dl = _13;
  this.dm = _14;
  this.dn = _15;
  this.dp = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 16;
});
$p.p = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 499793902, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().c(this.gq, x$0.gq) && $m_sr_BoxesRunTime$().c(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().c(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().c(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().c(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().c(this.du, x$0.du)) && $m_sr_BoxesRunTime$().c(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().c(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().c(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().c(this.di, x$0.di)) && $m_sr_BoxesRunTime$().c(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().c(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().c(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().c(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().c(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().c(this.dp, x$0.dp))));
});
$p.H = (function() {
  return "Tuple16";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.gq) + ",") + this.dq) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.di) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  af: 1,
  b: 1,
  c: 1,
  bL: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.gr = null;
  this.dG = null;
  this.dH = null;
  this.dI = null;
  this.dJ = null;
  this.dK = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dF = null;
  this.gr = _1;
  this.dG = _2;
  this.dH = _3;
  this.dI = _4;
  this.dJ = _5;
  this.dK = _6;
  this.dL = _7;
  this.dM = _8;
  this.dN = _9;
  this.dy = _10;
  this.dz = _11;
  this.dA = _12;
  this.dB = _13;
  this.dC = _14;
  this.dD = _15;
  this.dE = _16;
  this.dF = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 17;
});
$p.p = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-934366247), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().c(this.gr, x$0.gr) && $m_sr_BoxesRunTime$().c(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().c(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().c(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().c(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().c(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().c(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().c(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().c(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().c(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().c(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().c(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().c(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().c(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().c(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().c(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().c(this.dF, x$0.dF))));
});
$p.H = (function() {
  return "Tuple17";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.gr) + ",") + this.dG) + ",") + this.dH) + ",") + this.dI) + ",") + this.dJ) + ",") + this.dK) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dF) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  ag: 1,
  b: 1,
  c: 1,
  bM: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.gs = null;
  this.dX = null;
  this.dY = null;
  this.dZ = null;
  this.e0 = null;
  this.e1 = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dR = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.gs = _1;
  this.dX = _2;
  this.dY = _3;
  this.dZ = _4;
  this.e0 = _5;
  this.e1 = _6;
  this.e2 = _7;
  this.e3 = _8;
  this.e4 = _9;
  this.dO = _10;
  this.dP = _11;
  this.dQ = _12;
  this.dR = _13;
  this.dS = _14;
  this.dT = _15;
  this.dU = _16;
  this.dV = _17;
  this.dW = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 18;
});
$p.p = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-937041276), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().c(this.gs, x$0.gs) && $m_sr_BoxesRunTime$().c(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().c(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().c(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().c(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().c(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().c(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().c(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().c(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().c(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().c(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().c(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().c(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().c(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().c(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().c(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().c(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().c(this.dW, x$0.dW))));
});
$p.H = (function() {
  return "Tuple18";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.gs) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e1) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  ah: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.gt = null;
  this.ef = null;
  this.eg = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.el = null;
  this.em = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.eb = null;
  this.ec = null;
  this.ed = null;
  this.ee = null;
  this.gt = _1;
  this.ef = _2;
  this.eg = _3;
  this.eh = _4;
  this.ei = _5;
  this.ej = _6;
  this.ek = _7;
  this.el = _8;
  this.em = _9;
  this.e5 = _10;
  this.e6 = _11;
  this.e7 = _12;
  this.e8 = _13;
  this.e9 = _14;
  this.ea = _15;
  this.eb = _16;
  this.ec = _17;
  this.ed = _18;
  this.ee = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 19;
});
$p.p = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-1955940499), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().c(this.gt, x$0.gt) && $m_sr_BoxesRunTime$().c(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().c(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().c(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().c(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().c(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().c(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().c(this.el, x$0.el)) && $m_sr_BoxesRunTime$().c(this.em, x$0.em)) && $m_sr_BoxesRunTime$().c(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().c(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().c(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().c(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().c(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().c(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().c(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().c(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().c(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().c(this.ee, x$0.ee))));
});
$p.H = (function() {
  return "Tuple19";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.gt) + ",") + this.ef) + ",") + this.eg) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.el) + ",") + this.em) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.eb) + ",") + this.ec) + ",") + this.ed) + ",") + this.ee) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  ai: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
function $ct_T2__O__O__($thiz, _1, _2) {
  $thiz.aB = _1;
  $thiz.jy = _2;
  return $thiz;
}
/** @constructor */
function $c_T2() {
  this.aB = null;
  this.jy = null;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.z = (function() {
  return 2;
});
$p.p = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.a0 = (function() {
  return this.aB;
});
$p.a1 = (function() {
  return this.jy;
});
$p.r = (function() {
  return (((("(" + this.a0()) + ",") + this.a1()) + ")");
});
$p.H = (function() {
  return "Tuple2";
});
$p.K = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-116390334), true);
});
$p.u = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().c(this.a0(), x$1.a0()) && $m_sr_BoxesRunTime$().c(this.a1(), x$1.a1()))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.N)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  N: 1,
  a7: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.gu = null;
  this.ex = null;
  this.ez = null;
  this.eA = null;
  this.eB = null;
  this.eC = null;
  this.eD = null;
  this.eE = null;
  this.eF = null;
  this.en = null;
  this.eo = null;
  this.ep = null;
  this.eq = null;
  this.er = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.ev = null;
  this.ew = null;
  this.ey = null;
  this.gu = _1;
  this.ex = _2;
  this.ez = _3;
  this.eA = _4;
  this.eB = _5;
  this.eC = _6;
  this.eD = _7;
  this.eE = _8;
  this.eF = _9;
  this.en = _10;
  this.eo = _11;
  this.ep = _12;
  this.eq = _13;
  this.er = _14;
  this.es = _15;
  this.et = _16;
  this.eu = _17;
  this.ev = _18;
  this.ew = _19;
  this.ey = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 20;
});
$p.p = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 1328807075, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gu, x$0.gu) && $m_sr_BoxesRunTime$().c(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().c(this.ez, x$0.ez)) && $m_sr_BoxesRunTime$().c(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().c(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().c(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().c(this.eD, x$0.eD)) && $m_sr_BoxesRunTime$().c(this.eE, x$0.eE)) && $m_sr_BoxesRunTime$().c(this.eF, x$0.eF)) && $m_sr_BoxesRunTime$().c(this.en, x$0.en)) && $m_sr_BoxesRunTime$().c(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().c(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().c(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().c(this.er, x$0.er)) && $m_sr_BoxesRunTime$().c(this.es, x$0.es)) && $m_sr_BoxesRunTime$().c(this.et, x$0.et)) && $m_sr_BoxesRunTime$().c(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().c(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().c(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().c(this.ey, x$0.ey))));
});
$p.H = (function() {
  return "Tuple20";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.gu) + ",") + this.ex) + ",") + this.ez) + ",") + this.eA) + ",") + this.eB) + ",") + this.eC) + ",") + this.eD) + ",") + this.eE) + ",") + this.eF) + ",") + this.en) + ",") + this.eo) + ",") + this.ep) + ",") + this.eq) + ",") + this.er) + ",") + this.es) + ",") + this.et) + ",") + this.eu) + ",") + this.ev) + ",") + this.ew) + ",") + this.ey) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  aj: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.gv = null;
  this.eQ = null;
  this.eT = null;
  this.eU = null;
  this.eV = null;
  this.eW = null;
  this.eX = null;
  this.eY = null;
  this.eZ = null;
  this.eG = null;
  this.eH = null;
  this.eI = null;
  this.eJ = null;
  this.eK = null;
  this.eL = null;
  this.eM = null;
  this.eN = null;
  this.eO = null;
  this.eP = null;
  this.eR = null;
  this.eS = null;
  this.gv = _1;
  this.eQ = _2;
  this.eT = _3;
  this.eU = _4;
  this.eV = _5;
  this.eW = _6;
  this.eX = _7;
  this.eY = _8;
  this.eZ = _9;
  this.eG = _10;
  this.eH = _11;
  this.eI = _12;
  this.eJ = _13;
  this.eK = _14;
  this.eL = _15;
  this.eM = _16;
  this.eN = _17;
  this.eO = _18;
  this.eP = _19;
  this.eR = _20;
  this.eS = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 21;
});
$p.p = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-21288119), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gv, x$0.gv) && $m_sr_BoxesRunTime$().c(this.eQ, x$0.eQ)) && $m_sr_BoxesRunTime$().c(this.eT, x$0.eT)) && $m_sr_BoxesRunTime$().c(this.eU, x$0.eU)) && $m_sr_BoxesRunTime$().c(this.eV, x$0.eV)) && $m_sr_BoxesRunTime$().c(this.eW, x$0.eW)) && $m_sr_BoxesRunTime$().c(this.eX, x$0.eX)) && $m_sr_BoxesRunTime$().c(this.eY, x$0.eY)) && $m_sr_BoxesRunTime$().c(this.eZ, x$0.eZ)) && $m_sr_BoxesRunTime$().c(this.eG, x$0.eG)) && $m_sr_BoxesRunTime$().c(this.eH, x$0.eH)) && $m_sr_BoxesRunTime$().c(this.eI, x$0.eI)) && $m_sr_BoxesRunTime$().c(this.eJ, x$0.eJ)) && $m_sr_BoxesRunTime$().c(this.eK, x$0.eK)) && $m_sr_BoxesRunTime$().c(this.eL, x$0.eL)) && $m_sr_BoxesRunTime$().c(this.eM, x$0.eM)) && $m_sr_BoxesRunTime$().c(this.eN, x$0.eN)) && $m_sr_BoxesRunTime$().c(this.eO, x$0.eO)) && $m_sr_BoxesRunTime$().c(this.eP, x$0.eP)) && $m_sr_BoxesRunTime$().c(this.eR, x$0.eR)) && $m_sr_BoxesRunTime$().c(this.eS, x$0.eS))));
});
$p.H = (function() {
  return "Tuple21";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.gv) + ",") + this.eQ) + ",") + this.eT) + ",") + this.eU) + ",") + this.eV) + ",") + this.eW) + ",") + this.eX) + ",") + this.eY) + ",") + this.eZ) + ",") + this.eG) + ",") + this.eH) + ",") + this.eI) + ",") + this.eJ) + ",") + this.eK) + ",") + this.eL) + ",") + this.eM) + ",") + this.eN) + ",") + this.eO) + ",") + this.eP) + ",") + this.eR) + ",") + this.eS) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  ak: 1,
  b: 1,
  c: 1,
  bR: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.gw = null;
  this.fa = null;
  this.fe = null;
  this.ff = null;
  this.fg = null;
  this.fh = null;
  this.fi = null;
  this.fj = null;
  this.fk = null;
  this.f0 = null;
  this.f1 = null;
  this.f2 = null;
  this.f3 = null;
  this.f4 = null;
  this.f5 = null;
  this.f6 = null;
  this.f7 = null;
  this.f8 = null;
  this.f9 = null;
  this.fb = null;
  this.fc = null;
  this.fd = null;
  this.gw = _1;
  this.fa = _2;
  this.fe = _3;
  this.ff = _4;
  this.fg = _5;
  this.fh = _6;
  this.fi = _7;
  this.fj = _8;
  this.fk = _9;
  this.f0 = _10;
  this.f1 = _11;
  this.f2 = _12;
  this.f3 = _13;
  this.f4 = _14;
  this.f5 = _15;
  this.f6 = _16;
  this.f7 = _17;
  this.f8 = _18;
  this.f9 = _19;
  this.fb = _20;
  this.fc = _21;
  this.fd = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 22;
});
$p.p = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-139445068), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().c(this.gw, x$0.gw) && $m_sr_BoxesRunTime$().c(this.fa, x$0.fa)) && $m_sr_BoxesRunTime$().c(this.fe, x$0.fe)) && $m_sr_BoxesRunTime$().c(this.ff, x$0.ff)) && $m_sr_BoxesRunTime$().c(this.fg, x$0.fg)) && $m_sr_BoxesRunTime$().c(this.fh, x$0.fh)) && $m_sr_BoxesRunTime$().c(this.fi, x$0.fi)) && $m_sr_BoxesRunTime$().c(this.fj, x$0.fj)) && $m_sr_BoxesRunTime$().c(this.fk, x$0.fk)) && $m_sr_BoxesRunTime$().c(this.f0, x$0.f0)) && $m_sr_BoxesRunTime$().c(this.f1, x$0.f1)) && $m_sr_BoxesRunTime$().c(this.f2, x$0.f2)) && $m_sr_BoxesRunTime$().c(this.f3, x$0.f3)) && $m_sr_BoxesRunTime$().c(this.f4, x$0.f4)) && $m_sr_BoxesRunTime$().c(this.f5, x$0.f5)) && $m_sr_BoxesRunTime$().c(this.f6, x$0.f6)) && $m_sr_BoxesRunTime$().c(this.f7, x$0.f7)) && $m_sr_BoxesRunTime$().c(this.f8, x$0.f8)) && $m_sr_BoxesRunTime$().c(this.f9, x$0.f9)) && $m_sr_BoxesRunTime$().c(this.fb, x$0.fb)) && $m_sr_BoxesRunTime$().c(this.fc, x$0.fc)) && $m_sr_BoxesRunTime$().c(this.fd, x$0.fd))));
});
$p.H = (function() {
  return "Tuple22";
});
$p.r = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.gw) + ",") + this.fa) + ",") + this.fe) + ",") + this.ff) + ",") + this.fg) + ",") + this.fh) + ",") + this.fi) + ",") + this.fj) + ",") + this.fk) + ",") + this.f0) + ",") + this.f1) + ",") + this.f2) + ",") + this.f3) + ",") + this.f4) + ",") + this.f5) + ",") + this.f6) + ",") + this.f7) + ",") + this.f8) + ",") + this.f9) + ",") + this.fb) + ",") + this.fc) + ",") + this.fd) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  al: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.aK = null;
  this.aU = null;
  this.b3 = null;
  this.aK = _1;
  this.aU = _2;
  this.b3 = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 3;
});
$p.p = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-192629203), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().c(this.aK, x$0.aK) && $m_sr_BoxesRunTime$().c(this.aU, x$0.aU)) && $m_sr_BoxesRunTime$().c(this.b3, x$0.b3))));
});
$p.H = (function() {
  return "Tuple3";
});
$p.r = (function() {
  return (((((("(" + this.aK) + ",") + this.aU) + ",") + this.b3) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  am: 1,
  b: 1,
  c: 1,
  bT: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.bC = null;
  this.bk = null;
  this.bl = null;
  this.bm = null;
  this.bC = _1;
  this.bk = _2;
  this.bl = _3;
  this.bm = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 4;
});
$p.p = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-1542739752), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().c(this.bC, x$0.bC) && $m_sr_BoxesRunTime$().c(this.bk, x$0.bk)) && $m_sr_BoxesRunTime$().c(this.bl, x$0.bl)) && $m_sr_BoxesRunTime$().c(this.bm, x$0.bm))));
});
$p.H = (function() {
  return "Tuple4";
});
$p.r = (function() {
  return (((((((("(" + this.bC) + ",") + this.bk) + ",") + this.bl) + ",") + this.bm) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  an: 1,
  b: 1,
  c: 1,
  bU: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.gx = null;
  this.fl = null;
  this.fm = null;
  this.fn = null;
  this.fo = null;
  this.gx = _1;
  this.fl = _2;
  this.fm = _3;
  this.fn = _4;
  this.fo = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 5;
});
$p.p = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 417360321, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().c(this.gx, x$0.gx) && $m_sr_BoxesRunTime$().c(this.fl, x$0.fl)) && $m_sr_BoxesRunTime$().c(this.fm, x$0.fm)) && $m_sr_BoxesRunTime$().c(this.fn, x$0.fn)) && $m_sr_BoxesRunTime$().c(this.fo, x$0.fo))));
});
$p.H = (function() {
  return "Tuple5";
});
$p.r = (function() {
  return (((((((((("(" + this.gx) + ",") + this.fl) + ",") + this.fm) + ",") + this.fn) + ",") + this.fo) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  ao: 1,
  b: 1,
  c: 1,
  bV: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.gy = null;
  this.fp = null;
  this.fq = null;
  this.fr = null;
  this.fs = null;
  this.ft = null;
  this.gy = _1;
  this.fp = _2;
  this.fq = _3;
  this.fr = _4;
  this.fs = _5;
  this.ft = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 6;
});
$p.p = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-1037607828), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().c(this.gy, x$0.gy) && $m_sr_BoxesRunTime$().c(this.fp, x$0.fp)) && $m_sr_BoxesRunTime$().c(this.fq, x$0.fq)) && $m_sr_BoxesRunTime$().c(this.fr, x$0.fr)) && $m_sr_BoxesRunTime$().c(this.fs, x$0.fs)) && $m_sr_BoxesRunTime$().c(this.ft, x$0.ft))));
});
$p.H = (function() {
  return "Tuple6";
});
$p.r = (function() {
  return (((((((((((("(" + this.gy) + ",") + this.fp) + ",") + this.fq) + ",") + this.fr) + ",") + this.fs) + ",") + this.ft) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  ap: 1,
  b: 1,
  c: 1,
  bW: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.gz = null;
  this.fu = null;
  this.fv = null;
  this.fw = null;
  this.fx = null;
  this.fy = null;
  this.fz = null;
  this.gz = _1;
  this.fu = _2;
  this.fv = _3;
  this.fw = _4;
  this.fx = _5;
  this.fy = _6;
  this.fz = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 7;
});
$p.p = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-1050932777), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().c(this.gz, x$0.gz) && $m_sr_BoxesRunTime$().c(this.fu, x$0.fu)) && $m_sr_BoxesRunTime$().c(this.fv, x$0.fv)) && $m_sr_BoxesRunTime$().c(this.fw, x$0.fw)) && $m_sr_BoxesRunTime$().c(this.fx, x$0.fx)) && $m_sr_BoxesRunTime$().c(this.fy, x$0.fy)) && $m_sr_BoxesRunTime$().c(this.fz, x$0.fz))));
});
$p.H = (function() {
  return "Tuple7";
});
$p.r = (function() {
  return (((((((((((((("(" + this.gz) + ",") + this.fu) + ",") + this.fv) + ",") + this.fw) + ",") + this.fx) + ",") + this.fy) + ",") + this.fz) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aq)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  aq: 1,
  b: 1,
  c: 1,
  bX: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.gA = null;
  this.fA = null;
  this.fB = null;
  this.fC = null;
  this.fD = null;
  this.fE = null;
  this.fF = null;
  this.fG = null;
  this.gA = _1;
  this.fA = _2;
  this.fB = _3;
  this.fC = _4;
  this.fD = _5;
  this.fE = _6;
  this.fF = _7;
  this.fG = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 8;
});
$p.p = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, 1998822530, true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().c(this.gA, x$0.gA) && $m_sr_BoxesRunTime$().c(this.fA, x$0.fA)) && $m_sr_BoxesRunTime$().c(this.fB, x$0.fB)) && $m_sr_BoxesRunTime$().c(this.fC, x$0.fC)) && $m_sr_BoxesRunTime$().c(this.fD, x$0.fD)) && $m_sr_BoxesRunTime$().c(this.fE, x$0.fE)) && $m_sr_BoxesRunTime$().c(this.fF, x$0.fF)) && $m_sr_BoxesRunTime$().c(this.fG, x$0.fG))));
});
$p.H = (function() {
  return "Tuple8";
});
$p.r = (function() {
  return (((((((((((((((("(" + this.gA) + ",") + this.fA) + ",") + this.fB) + ",") + this.fC) + ",") + this.fD) + ",") + this.fE) + ",") + this.fF) + ",") + this.fG) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ar)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  ar: 1,
  b: 1,
  c: 1,
  bY: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.gB = null;
  this.fH = null;
  this.fI = null;
  this.fJ = null;
  this.fK = null;
  this.fL = null;
  this.fM = null;
  this.fN = null;
  this.fO = null;
  this.gB = _1;
  this.fH = _2;
  this.fI = _3;
  this.fJ = _4;
  this.fK = _5;
  this.fL = _6;
  this.fM = _7;
  this.fN = _8;
  this.fO = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 9;
});
$p.p = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().Y(this, (-1807911176), true);
});
$p.u = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().c(this.gB, x$0.gB) && $m_sr_BoxesRunTime$().c(this.fH, x$0.fH)) && $m_sr_BoxesRunTime$().c(this.fI, x$0.fI)) && $m_sr_BoxesRunTime$().c(this.fJ, x$0.fJ)) && $m_sr_BoxesRunTime$().c(this.fK, x$0.fK)) && $m_sr_BoxesRunTime$().c(this.fL, x$0.fL)) && $m_sr_BoxesRunTime$().c(this.fM, x$0.fM)) && $m_sr_BoxesRunTime$().c(this.fN, x$0.fN)) && $m_sr_BoxesRunTime$().c(this.fO, x$0.fO))));
});
$p.H = (function() {
  return "Tuple9";
});
$p.r = (function() {
  return (((((((((((((((((("(" + this.gB) + ",") + this.fH) + ",") + this.fI) + ",") + this.fJ) + ",") + this.fK) + ",") + this.fL) + ",") + this.fM) + ",") + this.fN) + ",") + this.fO) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.as)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  as: 1,
  b: 1,
  c: 1,
  bZ: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.gc() + "("), ", ", ")");
}
/** @constructor */
function $c_sc_Iterator$$anon$19() {
}
$p = $c_sc_Iterator$$anon$19.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$$anon$19;
/** @constructor */
function $h_sc_Iterator$$anon$19() {
}
$h_sc_Iterator$$anon$19.prototype = $p;
$p.X = (function() {
  return false;
});
$p.qN = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.ap = (function() {
  return 0;
});
$p.S = (function() {
  this.qN();
});
$p.jq = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  ca: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.aL instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.aL;
      $thiz.aL = c.aL;
      $thiz.bR = c.bR;
      if ((c.aW !== null)) {
        if (($thiz.aV === null)) {
          $thiz.aV = c.aV;
        }
        var x$proxy10 = c.aV;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().jo();
        }
        x$proxy10.hi = $thiz.aW;
        $thiz.aW = c.aW;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.aW === null)) {
      $thiz.aL = null;
      $thiz.aV = null;
      return false;
    } else {
      $thiz.aL = $thiz.aW.pU();
      if (($thiz.aV === $thiz.aW)) {
        var x$proxy12 = $thiz.aV;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().jo();
        }
        $thiz.aV = x$proxy12.hi;
      }
      $thiz.aW = $thiz.aW.hi;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.bR) {
        return true;
      } else {
        if ((!(($thiz.aL !== null) && $thiz.aL.X()))) {
          continue;
        }
        $thiz.bR = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.aL = null;
  this.aW = null;
  this.aV = null;
  this.bR = false;
  this.aL = from;
  this.aW = null;
  this.aV = null;
  this.bR = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.X = (function() {
  if (this.bR) {
    return true;
  } else if ((this.aL !== null)) {
    if (this.aL.X()) {
      this.bR = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.S = (function() {
  if (this.X()) {
    this.bR = false;
    var x$proxy13 = this.aL;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().jo();
    }
    return x$proxy13.S();
  } else {
    return $m_sc_Iterator$().bn.S();
  }
});
$p.pj = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.aW === null)) {
    this.aW = c;
    this.aV = c;
  } else {
    var x$proxy14 = this.aV;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().jo();
    }
    x$proxy14.hi = c;
    this.aV = c;
  }
  if ((this.aL === null)) {
    this.aL = $m_sc_Iterator$().bn;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ax)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  ax: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.bE > 0)) {
    if ($thiz.bS.X()) {
      $thiz.bS.S();
      $thiz.bE = (($thiz.bE - 1) | 0);
    } else {
      $thiz.bE = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.aN < 0)) {
    return (-1);
  } else {
    var that = (($thiz.aN - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.bS = null;
  this.aN = 0;
  this.bE = 0;
  this.bS = underlying;
  this.aN = limit;
  this.bE = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.ap = (function() {
  var size = this.bS.ap();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.bE) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.aN < 0)) {
      return dropSize;
    } else {
      var x = this.aN;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.X = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.aN !== 0) && this.bS.X());
});
$p.S = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.aN > 0)) {
    this.aN = ((this.aN - 1) | 0);
    return this.bS.S();
  } else {
    return ((this.aN < 0) ? this.bS.S() : $m_sc_Iterator$().bn.S());
  }
});
$p.jq = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.aN < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.bE + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().bn;
  } else if ((sum < 0)) {
    this.bE = 2147483647;
    this.aN = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.bS, ((sum - 2147483647) | 0), rest))));
  } else {
    this.bE = sum;
    this.aN = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  cc: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.px(n);
  if (skipped.ai()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.kW();
}
function $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  return ($is_sc_LinearSeq(that) ? $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $thiz, that) : $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that));
}
function $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      if ((((!a$tailLocal1.ai()) && (!b$tailLocal1.ai())) && $m_sr_BoxesRunTime$().c(a$tailLocal1.kW(), b$tailLocal1.kW()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.l6();
        var b$tailLocal1$tmp1 = b$tailLocal1.l6();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.ai() && b$tailLocal1.ai());
    }
  }
}
/** @constructor */
function $c_sci_List$() {
  $n_sci_List$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_List$.prototype = new $h_O();
$p.constructor = $c_sci_List$;
/** @constructor */
function $h_sci_List$() {
}
$h_sci_List$.prototype = $p;
var $d_sci_List$ = new $TypeData().i($c_sci_List$, "scala.collection.immutable.List$", ({
  cr: 1,
  a: 1,
  aw: 1,
  ce: 1,
  ci: 1
}));
var $n_sci_List$;
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$();
  }
  return $n_sci_List$;
}
/** @constructor */
function $c_sr_ScalaRunTime$$anon$1(x$1) {
  this.lE = null;
  this.hk = 0;
  this.lD = 0;
  this.lE = x$1;
  this.hk = 0;
  this.lD = x$1.z();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.X = (function() {
  return (this.hk < this.lD);
});
$p.S = (function() {
  var result = this.lE.p(this.hk);
  this.hk = ((1 + this.hk) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  d5: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1
}));
function $f_jl_Double__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Double__hashCode__I($thiz) {
  var valueInt = ($thiz | 0);
  if (((valueInt === $thiz) && ((1.0 / $thiz) !== (-Infinity)))) {
    return valueInt;
  } else if (($thiz !== $thiz)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, $thiz, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Double__toString__T($thiz) {
  return ("" + $thiz);
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  a4: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1,
  C: 1
}), ((x) => ((typeof x) === "number")));
function $f_jl_Float__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Float__hashCode__I($thiz) {
  var value = $thiz;
  var valueInt = (value | 0);
  if (((valueInt === value) && ((1.0 / value) !== (-Infinity)))) {
    return valueInt;
  } else if ((value !== value)) {
    return 2146959360;
  } else {
    var fpBitsDataView = $fpBitsDataView;
    fpBitsDataView.setFloat64(0, value, true);
    return ((fpBitsDataView.getInt32(0, true) | 0) ^ (fpBitsDataView.getInt32(4, true) | 0));
  }
}
function $f_jl_Float__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Float = new $TypeData().i(0, "java.lang.Float", ({
  bb: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1,
  C: 1
}), ((x) => $isFloat(x)));
function $f_jl_Integer__equals__O__Z($thiz, that) {
  return Object.is($thiz, that);
}
function $f_jl_Integer__hashCode__I($thiz) {
  return $thiz;
}
function $f_jl_Integer__toString__T($thiz) {
  return ("" + $thiz);
}
var $d_jl_Integer = new $TypeData().i(0, "java.lang.Integer", ({
  bd: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1,
  C: 1
}), ((x) => $isInt(x)));
function $f_jl_Long__equals__O__Z($thiz, $thizhi, that) {
  if ((that instanceof $Long)) {
    var $x_1 = that;
    var this$1_$_lo = $x_1.l;
    var this$1_$_hi = $x_1.h;
    return ((($thiz ^ this$1_$_lo) | ($thizhi ^ this$1_$_hi)) === 0);
  } else {
    return false;
  }
}
function $f_jl_Long__hashCode__I($thiz, $thizhi) {
  return ($thiz ^ $thizhi);
}
function $f_jl_Long__toString__T($thiz, $thizhi) {
  return $m_RTLong$().oE($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  a6: 1,
  u: 1,
  a: 1,
  i: 1,
  h: 1,
  C: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  bg: 1,
  a5: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $f_T__hashCode__I($thiz) {
  var n = $thiz.length;
  var h = 0;
  var i = 0;
  while ((i !== n)) {
    h = (((((h << 5) - h) | 0) + $thiz.charCodeAt(i)) | 0);
    i = ((1 + i) | 0);
  }
  return h;
}
function $f_T__equals__O__Z($thiz, that) {
  return ($thiz === that);
}
function $f_T__indexOf__I__I($thiz, ch) {
  var str = $m_jl_Character$().ru(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bj: 1,
  a: 1,
  i: 1,
  L: 1,
  h: 1,
  C: 1
}), ((x) => ((typeof x) === "string")));
/** @constructor */
function $c_sc_AbstractIterable() {
}
$p = $c_sc_AbstractIterable.prototype = new $h_O();
$p.constructor = $c_sc_AbstractIterable;
/** @constructor */
function $h_sc_AbstractIterable() {
}
$h_sc_AbstractIterable.prototype = $p;
$p.c7 = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.kN = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.gc = (function() {
  return this.ca();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.iu = null;
  this.bD = 0;
  this.hh = 0;
  this.iu = xs;
  this.bD = 0;
  this.hh = $m_jl_reflect_Array$().i3(this.iu);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.ap = (function() {
  return ((this.hh - this.bD) | 0);
});
$p.X = (function() {
  return (this.bD < this.hh);
});
$p.S = (function() {
  if ((this.bD >= $m_jl_reflect_Array$().i3(this.iu))) {
    $m_sc_Iterator$().bn.S();
  }
  var r = $m_sr_ScalaRunTime$().h8(this.iu, this.bD);
  this.bD = ((1 + this.bD) | 0);
  return r;
});
$p.i1 = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.bD + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.hh;
    } else {
      var a = this.hh;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.bD = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  c4: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.b4) ? $thiz.b4 : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.lq = null;
  this.bQ = 0;
  this.b4 = 0;
  this.lq = self;
  this.bQ = 0;
  this.b4 = self.Q();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.ap = (function() {
  return this.b4;
});
$p.X = (function() {
  return (this.b4 > 0);
});
$p.S = (function() {
  if ((this.b4 > 0)) {
    var r = this.lq.ah(this.bQ);
    this.bQ = ((1 + this.bQ) | 0);
    this.b4 = ((this.b4 - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().bn.S();
  }
});
$p.i1 = (function(n) {
  if ((n > 0)) {
    this.bQ = ((this.bQ + n) | 0);
    var b = ((this.b4 - n) | 0);
    this.b4 = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.jq = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.b4 = ((b < 0) ? 0 : b);
  this.bQ = ((this.bQ + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c8: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.lu)) {
    $thiz.lt = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.lu = true;
  }
  return $thiz.lt;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.lt = null;
  this.lu = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  cn: 1,
  a: 1,
  av: 1,
  at: 1,
  au: 1,
  ay: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
/** @constructor */
function $c_sci_RangeIterator(start, step, lastElement, initiallyEmpty) {
  this.gD = 0;
  this.fS = 0;
  this.fQ = false;
  this.fR = 0;
  this.gD = step;
  this.fS = lastElement;
  this.fQ = (!initiallyEmpty);
  this.fR = start;
}
$p = $c_sci_RangeIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sci_RangeIterator;
/** @constructor */
function $h_sci_RangeIterator() {
}
$h_sci_RangeIterator.prototype = $p;
$p.ap = (function() {
  return (this.fQ ? ((1 + ((((this.fS - this.fR) | 0) / $checkIntDivisor(this.gD)) | 0)) | 0) : 0);
});
$p.X = (function() {
  return this.fQ;
});
$p.qO = (function() {
  if ((!this.fQ)) {
    $m_sc_Iterator$().bn.S();
  }
  var value = this.fR;
  this.fQ = (value !== this.fS);
  this.fR = ((value + this.gD) | 0);
  return value;
});
$p.i1 = (function(n) {
  if ((n > 0)) {
    var value = this.fR;
    var hi = (value >> 31);
    var value$1 = Math.imul(this.gD, n);
    var hi$1 = (value$1 >> 31);
    var lo = ((value + value$1) | 0);
    var hi$2 = ((((hi + hi$1) | 0) + ((((value & value$1) | ((value | value$1) & (~lo))) >>> 31) | 0)) | 0);
    if ((this.gD > 0)) {
      var x = this.fS;
      var hi$3 = (x >> 31);
      if (((hi$3 === hi$2) ? ((x >>> 0) < (lo >>> 0)) : (hi$3 < hi$2))) {
        var $x_1_$_lo = x;
        var $x_1_$_hi = hi$3;
      } else {
        var $x_1_$_lo = lo;
        var $x_1_$_hi = hi$2;
      }
      this.fR = $x_1_$_lo;
      var value$2 = this.fS;
      var hi$4 = (value$2 >> 31);
      this.fQ = ((hi$2 === hi$4) ? ((lo >>> 0) <= (value$2 >>> 0)) : (hi$2 < hi$4));
    } else if ((this.gD < 0)) {
      var x$2 = this.fS;
      var hi$5 = (x$2 >> 31);
      if (((hi$5 === hi$2) ? ((x$2 >>> 0) > (lo >>> 0)) : (hi$5 > hi$2))) {
        var $x_2_$_lo = x$2;
        var $x_2_$_hi = hi$5;
      } else {
        var $x_2_$_lo = lo;
        var $x_2_$_hi = hi$2;
      }
      this.fR = $x_2_$_lo;
      var value$3 = this.fS;
      var hi$6 = (value$3 >> 31);
      this.fQ = ((hi$2 === hi$6) ? ((lo >>> 0) >= (value$3 >>> 0)) : (hi$2 > hi$6));
    }
  }
  return this;
});
$p.S = (function() {
  return this.qO();
});
var $d_sci_RangeIterator = new $TypeData().i($c_sci_RangeIterator, "scala.collection.immutable.RangeIterator", ({
  cv: 1,
  m: 1,
  d: 1,
  e: 1,
  r: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq$() {
  this.lw = null;
  $n_scm_ArraySeq$ = this;
  this.lw = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cx: 1,
  a: 1,
  av: 1,
  at: 1,
  au: 1,
  ay: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
/** @constructor */
function $c_T$package$EmptyTuple$() {
}
$p = $c_T$package$EmptyTuple$.prototype = new $h_O();
$p.constructor = $c_T$package$EmptyTuple$;
/** @constructor */
function $h_T$package$EmptyTuple$() {
}
$h_T$package$EmptyTuple$.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.w = (function() {
  return 924202651;
});
$p.z = (function() {
  return 0;
});
$p.H = (function() {
  return "EmptyTuple";
});
$p.p = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.r = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  c0: 1,
  b: 1,
  c: 1,
  a: 1,
  cD: 1,
  cE: 1,
  cF: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
/** @constructor */
function $c_T2$mcDD$sp(_1$mcD$sp, _2$mcD$sp) {
  this.aB = null;
  this.jy = null;
  this.lo = 0.0;
  this.lp = 0.0;
  this.lo = _1$mcD$sp;
  this.lp = _2$mcD$sp;
  $ct_T2__O__O__(this, null, null);
}
$p = $c_T2$mcDD$sp.prototype = new $h_T2();
$p.constructor = $c_T2$mcDD$sp;
/** @constructor */
function $h_T2$mcDD$sp() {
}
$h_T2$mcDD$sp.prototype = $p;
$p.a1 = (function() {
  return this.lp;
});
$p.a0 = (function() {
  return this.lo;
});
var $d_T2$mcDD$sp = new $TypeData().i($c_T2$mcDD$sp, "scala.Tuple2$mcDD$sp", ({
  c1: 1,
  N: 1,
  a7: 1,
  c: 1,
  b: 1,
  a: 1,
  bP: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.ca() + "(<not computed>)");
}
/** @constructor */
function $c_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$p = $c_s_reflect_ManifestFactory$ClassTypeManifest.prototype = new $h_O();
$p.constructor = $c_s_reflect_ManifestFactory$ClassTypeManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$ClassTypeManifest() {
}
$h_s_reflect_ManifestFactory$ClassTypeManifest.prototype = $p;
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.aO = null;
    this.aO = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  ji() {
    return $dp_toString__T(this.aO);
  }
  H() {
    return "JavaScriptException";
  }
  z() {
    return 1;
  }
  p(x$1) {
    return ((x$1 === 0) ? this.aO : $m_sr_Statics$().q0(x$1));
  }
  K() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  w() {
    return $m_s_util_hashing_MurmurHash3$().Y(this, 1744042595, true);
  }
  u(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().c(this.aO, x$1.aO)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aJ)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aJ: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.ai())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.l6();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.jz = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.r = (function() {
  return this.jz;
});
$p.u = (function(that) {
  return (this === that);
});
$p.w = (function() {
  return $systemIdentityHashCode(this);
});
/** @constructor */
function $c_sc_AbstractView() {
}
$p = $c_sc_AbstractView.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractView;
/** @constructor */
function $h_sc_AbstractView() {
}
$h_sc_AbstractView.prototype = $p;
$p.r = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.jz = null;
  this.jz = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cL: 1,
  cM: 1,
  cK: 1,
  a: 1,
  cN: 1,
  cH: 1,
  b: 1,
  cI: 1,
  cJ: 1
}));
var $n_s_reflect_ManifestFactory$ObjectManifest$;
function $m_s_reflect_ManifestFactory$ObjectManifest$() {
  if ((!$n_s_reflect_ManifestFactory$ObjectManifest$)) {
    $n_s_reflect_ManifestFactory$ObjectManifest$ = new $c_s_reflect_ManifestFactory$ObjectManifest$();
  }
  return $n_s_reflect_ManifestFactory$ObjectManifest$;
}
function $f_sc_Seq__equals__O__Z($thiz, o) {
  if (($thiz === o)) {
    return true;
  } else {
    if ($is_sc_Seq(o)) {
      if (o.je($thiz)) {
        return $thiz.im(o);
      }
    }
    return false;
  }
}
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.l)));
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.l)));
}
/** @constructor */
function $c_sc_AbstractSeq() {
}
$p = $c_sc_AbstractSeq.prototype = new $h_sc_AbstractIterable();
$p.constructor = $c_sc_AbstractSeq;
/** @constructor */
function $h_sc_AbstractSeq() {
}
$h_sc_AbstractSeq.prototype = $p;
$p.ai = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.im = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.je = (function(that) {
  return true;
});
$p.u = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().l2(this);
});
$p.r = (function() {
  return $f_sc_Iterable__toString__T(this);
});
/** @constructor */
function $c_sc_AbstractSeqView() {
}
$p = $c_sc_AbstractSeqView.prototype = new $h_sc_AbstractView();
$p.constructor = $c_sc_AbstractSeqView;
/** @constructor */
function $h_sc_AbstractSeqView() {
}
$h_sc_AbstractSeqView.prototype = $p;
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.n)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.n)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.O)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.O)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.hj = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.hj = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.ah = (function(idx) {
  return this.hj.ah(idx);
});
$p.Q = (function() {
  return this.hj.Q();
});
$p.ai = (function() {
  return this.hj.ai();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.hj = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.c8 = (function(len) {
  var x = this.Q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ap = (function() {
  return this.Q();
});
$p.aj = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.ca = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  c7: 1,
  cg: 1,
  c2: 1,
  c3: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  a: 1,
  ck: 1,
  s: 1,
  cf: 1,
  x: 1,
  c6: 1
}));
/** @constructor */
function $c_sci_AbstractSeq() {
}
$p = $c_sci_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_sci_AbstractSeq;
/** @constructor */
function $h_sci_AbstractSeq() {
}
$h_sci_AbstractSeq.prototype = $p;
function $f_sci_IndexedSeq__canEqual__O__Z($thiz, that) {
  return ($is_sci_IndexedSeq(that) ? ($thiz.Q() === that.Q()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.Q();
      var equal = (length === o.Q());
      if (equal) {
        var index = 0;
        var a = $thiz.jd();
        var b = o.jd();
        var preferredLength = ((a < b) ? a : b);
        var hi = (length >> 31);
        var hi$1 = (preferredLength >> 31);
        var lo = (preferredLength << 1);
        var hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        if (((hi === hi$2) ? ((length >>> 0) > (lo >>> 0)) : (hi > hi$2))) {
          var maxApplyCompare = preferredLength;
        } else {
          var maxApplyCompare = length;
        }
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().c($thiz.ah(index), o.ah(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.aj().i1(index);
          var thatIt = o.aj().i1(index);
          while ((equal && thisIt.X())) {
            equal = $m_sr_BoxesRunTime$().c(thisIt.S(), thatIt.S());
          }
        }
      }
      return equal;
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o);
  }
}
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.E)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.E)));
}
/** @constructor */
function $c_scm_AbstractSeq() {
}
$p = $c_scm_AbstractSeq.prototype = new $h_sc_AbstractSeq();
$p.constructor = $c_scm_AbstractSeq;
/** @constructor */
function $h_scm_AbstractSeq() {
}
$h_scm_AbstractSeq.prototype = $p;
/** @constructor */
function $c_sjsr_WrappedVarArgs(array) {
  this.iv = null;
  this.iv = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.je = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.im = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.jd = (function() {
  return $m_sci_IndexedSeqDefaults$().lv;
});
$p.aj = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.c8 = (function(len) {
  var x = this.Q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ap = (function() {
  return this.Q();
});
$p.u = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.w = (function() {
  return $m_s_util_hashing_MurmurHash3$().l2(this);
});
$p.r = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.ai = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.c7 = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.kN = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.Q = (function() {
  return (this.iv.length | 0);
});
$p.ah = (function(idx) {
  return this.iv[idx];
});
$p.gc = (function() {
  return "WrappedVarArgs";
});
$p.h = (function(v1) {
  return this.ah((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aK)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aK: 1,
  E: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  G: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  I: 1,
  H: 1,
  x: 1,
  n: 1,
  Q: 1,
  J: 1,
  z: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_scm_AbstractBuffer() {
}
$p = $c_scm_AbstractBuffer.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_AbstractBuffer;
/** @constructor */
function $h_scm_AbstractBuffer() {
}
$h_scm_AbstractBuffer.prototype = $p;
function $p_sci_Range__isInexact$1__Z($thiz) {
  return ((($thiz.fP + $thiz.az) | 0) !== $thiz.gC);
}
function $ct_sci_Range__I__I__I__($thiz, start, end, step) {
  $thiz.au = start;
  $thiz.gC = end;
  $thiz.az = step;
  $thiz.aC = ((step >= 0) ? (start >= end) : (start <= end));
  if ((step === 0)) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "step cannot be 0.");
  }
  var stepSign = (step >> 31);
  var gap = (((((end - start) | 0) ^ stepSign) - stepSign) | 0);
  var absStep = (((step ^ stepSign) - stepSign) | 0);
  var div = (((gap >>> 0) / ($checkIntDivisor(absStep) >>> 0)) | 0);
  $thiz.bT = ((Math.imul(absStep, div) !== gap) ? ((1 + div) | 0) : div);
  if ((((-3) & ((1 + step) | 0)) === 0)) {
    var $x_1 = ((end - step) | 0);
  } else {
    var n = (($thiz.bT - 1) | 0);
    var $x_1 = (($thiz.au + Math.imul($thiz.az, n)) | 0);
  }
  $thiz.fP = $x_1;
  return $thiz;
}
/** @constructor */
function $c_sci_Range() {
  this.au = 0;
  this.gC = 0;
  this.az = 0;
  this.aC = false;
  this.bT = 0;
  this.fP = 0;
}
$p = $c_sci_Range.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_Range;
/** @constructor */
function $h_sci_Range() {
}
$h_sci_Range.prototype = $p;
$p.je = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.ca = (function() {
  return "IndexedSeq";
});
$p.c8 = (function(len) {
  var x = this.Q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ap = (function() {
  return this.Q();
});
$p.aj = (function() {
  return new $c_sci_RangeIterator(this.au, this.az, this.fP, this.aC);
});
$p.ai = (function() {
  return this.aC;
});
$p.Q = (function() {
  return (this.aC ? 0 : ((this.bT > 0) ? this.bT : $m_sci_Range$().oB(this.au, this.gC, this.az, false)));
});
$p.od = (function() {
  if (this.aC) {
    var $x_1 = $m_sci_Range$().rb("last");
    throw (($x_1 instanceof $c_sjs_js_JavaScriptException) ? $x_1.aO : $x_1);
  } else {
    return this.fP;
  }
});
$p.rc = (function() {
  if (((this.bT <= 0) && (!this.aC))) {
    $m_sci_Range$().oB(this.au, this.gC, this.az, false);
  }
});
$p.c7 = (function(f) {
  if ((!this.aC)) {
    var i = this.au;
    while (true) {
      f.h(i);
      if ((i === this.fP)) {
        return (void 0);
      }
      i = ((i + this.az) | 0);
    }
  }
});
$p.im = (function(that) {
  if ((that instanceof $c_sci_Range)) {
    var x1$2 = this.Q();
    switch (x1$2) {
      case 0: {
        return that.aC;
        break;
      }
      case 1: {
        return ((that.Q() === 1) && (this.au === that.au));
        break;
      }
      default: {
        return ((that.Q() === x1$2) && ((this.au === that.au) && (this.az === that.az)));
      }
    }
  } else {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, that);
  }
});
$p.jd = (function() {
  return 2147483647;
});
$p.u = (function(other) {
  if ((other instanceof $c_sci_Range)) {
    if (this.aC) {
      return other.aC;
    } else if (((!other.aC) && (this.au === other.au))) {
      var l0 = this.od();
      return ((l0 === other.od()) && ((this.au === l0) || (this.az === other.az)));
    } else {
      return false;
    }
  } else {
    return $f_sc_Seq__equals__O__Z(this, other);
  }
});
$p.w = (function() {
  if ((this.Q() >= 2)) {
    var this$1 = $m_s_util_hashing_MurmurHash3$();
    return this$1.oy(this.au, this.az, this.fP, this$1.fT);
  } else {
    return $m_s_util_hashing_MurmurHash3$().l2(this);
  }
});
$p.r = (function() {
  var stepped = ((this.az === 1) ? "" : (" by " + this.az));
  return ((((((this.aC ? "empty " : ($p_sci_Range__isInexact$1__Z(this) ? "inexact " : "")) + "Range ") + this.au) + " until ") + this.gC) + stepped);
});
$p.gc = (function() {
  return "Range";
});
$p.nT = (function(idx) {
  if ((((idx < 0) || (idx >= this.bT)) || this.aC)) {
    this.rc();
    var max = (this.aC ? (-1) : ((this.bT - 1) | 0));
    throw new $c_jl_IndexOutOfBoundsException((((idx + " is out of bounds (min 0, max ") + max) + ")"));
  } else {
    return ((this.au + Math.imul(this.az, idx)) | 0);
  }
});
$p.h = (function(v1) {
  return this.nT((v1 | 0));
});
$p.ah = (function(i) {
  return this.nT(i);
});
function $isArrayOf_sci_Range(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.c8 = (function(len) {
  var x = this.bF.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ap = (function() {
  return this.bF.b.length;
});
$p.ca = (function() {
  return "IndexedSeq";
});
$p.je = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.im = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.gc = (function() {
  return "ArraySeq";
});
$p.jd = (function() {
  return 2147483647;
});
/** @constructor */
function $c_sci_Range$Exclusive(start, end, step) {
  this.au = 0;
  this.gC = 0;
  this.az = 0;
  this.aC = false;
  this.bT = 0;
  this.fP = 0;
  $ct_sci_Range__I__I__I__(this, start, end, step);
}
$p = $c_sci_Range$Exclusive.prototype = new $h_sci_Range();
$p.constructor = $c_sci_Range$Exclusive;
/** @constructor */
function $h_sci_Range$Exclusive() {
}
$h_sci_Range$Exclusive.prototype = $p;
var $d_sci_Range$Exclusive = new $TypeData().i($c_sci_Range$Exclusive, "scala.collection.immutable.Range$Exclusive", ({
  cu: 1,
  aB: 1,
  P: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  E: 1,
  x: 1,
  n: 1,
  Q: 1,
  J: 1,
  z: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.c8 = (function(len) {
  var x = this.b5.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ap = (function() {
  return this.b5.b.length;
});
$p.ca = (function() {
  return "IndexedSeq";
});
$p.gc = (function() {
  return "ArraySeq";
});
$p.u = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.b5.b.length !== other.b5.b.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aC)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.bF = null;
  this.bF = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.Q = (function() {
  return this.bF.b.length;
});
$p.ah = (function(i) {
  return this.bF.b[i];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.nU(this.bF, this$1.fT);
});
$p.u = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().o4(this.bF, that.bF) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.aj = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.bF);
});
$p.h = (function(v1) {
  return this.ah((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  az: 1,
  cm: 1,
  P: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  x: 1,
  n: 1,
  Q: 1,
  E: 1,
  z: 1,
  A: 1,
  J: 1,
  c5: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    return ((i$tailLocal1 === len$1) ? (xs$tailLocal1.ai() ? 0 : 1) : (xs$tailLocal1.ai() ? (-1) : xs$tailLocal1.ir()));
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.ai();
      var bEmpty = b$tailLocal1.ai();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.jj();
      }
      if (false) {
        a$tailLocal1.ir();
      }
      return (aEmpty && bEmpty);
    }
  }
}
/** @constructor */
function $c_sci_List() {
}
$p = $c_sci_List.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_List;
/** @constructor */
function $h_sci_List() {
}
$h_sci_List.prototype = $p;
$p.ah = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.im = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.ca = (function() {
  return "LinearSeq";
});
$p.ai = (function() {
  return (this === $m_sci_Nil$());
});
$p.c7 = (function(f) {
  var these = this;
  while ((!these.ai())) {
    f.h(these.jj());
    these.ir();
  }
});
$p.Q = (function() {
  var these = this;
  var len = 0;
  while ((!these.ai())) {
    len = ((1 + len) | 0);
    these.ir();
  }
  return len;
});
$p.c8 = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.gc = (function() {
  return "List";
});
$p.u = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.px = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.b5 = null;
  this.b5 = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.Q = (function() {
  return this.b5.b.length;
});
$p.ah = (function(index) {
  return this.b5.b[index];
});
$p.w = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.nU(this.b5, this$1.fT);
});
$p.u = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().o4(this.b5, that.b5) : $c_scm_ArraySeq.prototype.u.call(this, that));
});
$p.aj = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.b5);
});
$p.h = (function(v1) {
  return this.ah((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aD)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aD: 1,
  aC: 1,
  R: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  V: 1,
  B: 1,
  S: 1,
  X: 1,
  W: 1,
  x: 1,
  n: 1,
  U: 1,
  T: 1,
  z: 1,
  A: 1,
  a: 1
}));
/** @constructor */
function $c_sci_Nil$() {
  $n_sci_Nil$ = this;
  var _1 = $m_sci_Nil$();
  $m_sci_Nil$();
}
$p = $c_sci_Nil$.prototype = new $h_sci_List();
$p.constructor = $c_sci_Nil$;
/** @constructor */
function $h_sci_Nil$() {
}
$h_sci_Nil$.prototype = $p;
$p.K = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 0;
});
$p.H = (function() {
  return "Nil";
});
$p.p = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.jj = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.ir = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.ap = (function() {
  return 0;
});
$p.aj = (function() {
  return $m_sc_Iterator$().bn;
});
$p.kW = (function() {
  this.jj();
});
$p.l6 = (function() {
  this.ir();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  cs: 1,
  aA: 1,
  P: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  cd: 1,
  O: 1,
  cq: 1,
  cp: 1,
  z: 1,
  A: 1,
  ch: 1,
  J: 1,
  a: 1,
  cl: 1,
  c: 1
}));
var $n_sci_Nil$;
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$();
  }
  return $n_sci_Nil$;
}
function $ct_scm_StringBuilder__jl_StringBuilder__($thiz, underlying) {
  $thiz.bo = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.bo = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.aj = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.c8 = (function(len) {
  var x = this.bo.Q();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ca = (function() {
  return "IndexedSeq";
});
$p.Q = (function() {
  return this.bo.Q();
});
$p.ap = (function() {
  return this.bo.Q();
});
$p.r = (function() {
  return this.bo.ay;
});
$p.ai = (function() {
  return (this.bo.Q() === 0);
});
$p.ah = (function(i) {
  return $bC(this.bo.nW(i));
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.bo.nW(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cC: 1,
  R: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  V: 1,
  B: 1,
  S: 1,
  X: 1,
  W: 1,
  aF: 1,
  aG: 1,
  aE: 1,
  cA: 1,
  x: 1,
  n: 1,
  U: 1,
  T: 1,
  L: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.gF = null;
  this.gF = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.ca = (function() {
  return "IndexedSeq";
});
$p.aj = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.c8 = (function(len) {
  var x = (this.gF.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ah = (function(index) {
  return this.gF[index];
});
$p.Q = (function() {
  return (this.gF.length | 0);
});
$p.ap = (function() {
  return (this.gF.length | 0);
});
$p.gc = (function() {
  return "WrappedArray";
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  return this.gF[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  df: 1,
  cw: 1,
  R: 1,
  y: 1,
  w: 1,
  d: 1,
  e: 1,
  q: 1,
  p: 1,
  o: 1,
  g: 1,
  v: 1,
  s: 1,
  b: 1,
  l: 1,
  V: 1,
  B: 1,
  S: 1,
  X: 1,
  W: 1,
  aF: 1,
  aG: 1,
  cB: 1,
  cy: 1,
  A: 1,
  z: 1,
  T: 1,
  x: 1,
  n: 1,
  U: 1,
  cz: 1,
  aE: 1,
  a: 1
}));
let $e_sketch = (function(arg) {
  $m_Lsketches_templates_rooms_lroom_LRoom$package$().r8(arg);
});
export { $e_sketch as sketch };
