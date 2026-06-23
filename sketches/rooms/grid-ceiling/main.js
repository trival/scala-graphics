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
  return (arg0.$classData.Z ? arg0.aO() : $objectClone(arg0));
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
        return null.o6();
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
        return instance.r(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.r.call(instance, x0);
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
        return instance.x();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.x.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.o7(x0);
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
$p.x = (function() {
  return $systemIdentityHashCode(this);
});
$p.r = (function(that) {
  return (this === that);
});
$p.m = (function() {
  var i = this.x();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.m();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.c[i] = null;
    }
  } else {
    this.c = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.aJ = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.c, srcPos, dest.c, destPos, length);
});
$p.aO = (function() {
  return new $ac_O(this.c.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.c[i] = false;
    }
  } else {
    this.c = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.aJ = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.c, srcPos, dest.c, destPos, length);
});
$p.aO = (function() {
  return new $ac_Z(this.c.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Uint16Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.aJ = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aO = (function() {
  return new $ac_C(this.c.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Int8Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.aJ = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aO = (function() {
  return new $ac_B(this.c.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Int16Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.aJ = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aO = (function() {
  return new $ac_S(this.c.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Int32Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.aJ = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aO = (function() {
  return new $ac_I(this.c.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.c = new Int32Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.aJ = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.aO = (function() {
  return new $ac_J(this.c.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Float32Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.aJ = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aO = (function() {
  return new $ac_F(this.c.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.c = new Float64Array(arg);
  } else {
    this.c = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.aJ = (function(srcPos, dest, destPos, length) {
  dest.c.set(this.c.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.aO = (function() {
  return new $ac_D(this.c.slice());
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
    y: 1,
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
    var u = result.c;
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
      this.c = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.c[i] = null;
      }
    } else {
      this.c = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.aJ = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.c, srcPos, dest.c, destPos, length);
  });
  $p.aO = (function() {
    return new ArrayClass(this.c.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    y: 1,
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
/** @constructor */
function $c_jl_System$Streams$() {
  this.iV = null;
  this.lB = null;
  $n_jl_System$Streams$ = this;
  this.iV = new $c_jl_JSConsoleBasedPrintStream(false);
  this.lB = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  bd: 1
}));
var $n_jl_System$Streams$;
function $m_jl_System$Streams$() {
  if ((!$n_jl_System$Streams$)) {
    $n_jl_System$Streams$ = new $c_jl_System$Streams$();
  }
  return $n_jl_System$Streams$;
}
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
  this.hJ = null;
  this.iW = null;
  $n_jl_System$SystemProperties$ = this;
  this.hJ = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.iW = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.kX = (function(key, default$1) {
  if ((this.hJ !== null)) {
    var dict = this.hJ;
    return ((!(!$m_jl_Utils$Cache$().iY.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.iW.kX(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  be: 1
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
  this.iY = null;
  $n_jl_Utils$Cache$ = this;
  this.iY = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  bg: 1
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
  bh: 1
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
$p.iL = (function(array) {
  return ((array instanceof $ac_O) ? array.c.length : ((array instanceof $ac_Z) ? array.c.length : ((array instanceof $ac_C) ? array.c.length : ((array instanceof $ac_B) ? array.c.length : ((array instanceof $ac_S) ? array.c.length : ((array instanceof $ac_I) ? array.c.length : ((array instanceof $ac_J) ? ((array.c.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.c.length : ((array instanceof $ac_D) ? array.c.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bi: 1
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
$p.lY = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.c.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.c[mid];
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
  bj: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().nC(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().nB(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().m7(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().m6(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().hy(value);
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
  return $m_RTLong$().lu(lo, hi);
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
$p.lu = (function(lo, hi) {
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
$p.hy = (function(value) {
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
$p.m6 = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.hC(rlo, rhi, rlo$1, rhi$1, true);
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
$p.m7 = (function(alo, ahi, blo, bhi) {
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
    return this.hC(alo, ahi, blo, bhi, true);
  }
});
$p.nB = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.hC(rlo, rhi, rlo$1, rhi$1, false);
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
$p.nC = (function(alo, ahi, blo, bhi) {
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
    return this.hC(alo, ahi, blo, bhi, false);
  }
});
$p.hC = (function(alo, ahi, blo, bhi, askQuotient) {
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
  bl: 1
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
$p.kV = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.c.length !== ys.c.length)) {
    return false;
  }
  var len = xs.c.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().b(xs.c[i], ys.c[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bm: 1
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
  var it = $thiz.a9();
  while (it.L()) {
    f.h(it.H());
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.ai() === 0) ? (("" + start) + end) : $thiz.iG($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).aK.aa);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.aK;
  if ((start.length !== 0)) {
    jsb.aa = (("" + jsb.aa) + start);
  }
  var it = $thiz.a9();
  if (it.L()) {
    var obj = it.H();
    jsb.aa = (("" + jsb.aa) + obj);
    while (it.L()) {
      if ((sep.length !== 0)) {
        jsb.aa = (("" + jsb.aa) + sep);
      }
      var obj$1 = it.H();
      jsb.aa = (("" + jsb.aa) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.aa = (("" + jsb.aa) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.j5 = null;
  this.g1 = null;
  this.j5 = head;
  this.g1 = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.mu = (function() {
  return this.j5.gy().a9();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  c4: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.j6 = null;
  $n_sc_StringOps$ = this;
  this.j6 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.j6));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  cc: 1
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
  this.j9 = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().mC($m_jl_System$SystemProperties$().kX("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.j9 = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  ch: 1
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
$p.b = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.mf(x, y) : ((x instanceof $Char) ? this.md(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.mf = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.me(xn, y);
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
$p.me = (function(xn, yn) {
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
      return (false && yn.r(x2));
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
      return (false && yn.r($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.md = (function(xc, y) {
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
  cR: 1
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
$p.lX = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.hB = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  cT: 1
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
$p.fO = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.c;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.c[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.c[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.c[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.lJ = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.I(), (x.D() + "("), ",", ")");
});
$p.ak = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.c.length === 0)) {
    var this$2 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$2);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  cU: 1
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
$p.mH = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.m9 = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().hy(dv);
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
$p.a2 = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.m9((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.mH($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.mA = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  cW: 1
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
    return new $c_T2(x, self.f8);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.Y, self.ao);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.b7, self.aT, self.aU);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.eq, self.b8, self.b9, self.ba);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.fm, self.er, self.es, self.et, self.eu);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.fn, self.ev, self.ew, self.ex, self.ey, self.ez);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.fo, self.eA, self.eB, self.eC, self.eD, self.eE, self.eF);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.fp, self.eG, self.eH, self.eI, self.eJ, self.eK, self.eL, self.eM);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.fq, self.eN, self.eO, self.eP, self.eQ, self.eR, self.eS, self.eT, self.eU);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.f9, self.bh, self.bi, self.bj, self.bk, self.bl, self.bm, self.bn, self.bo, self.bg);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.fa, self.br, self.bs, self.bt, self.bu, self.bv, self.bw, self.bx, self.by, self.bp, self.bq);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.fb, self.bC, self.bD, self.bE, self.bF, self.bG, self.bH, self.bI, self.bJ, self.bz, self.bA, self.bB);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.fc, self.bO, self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bV, self.bK, self.bL, self.bM, self.bN);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.fd, self.c1, self.c2, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.bW, self.bX, self.bY, self.bZ, self.c0);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.fe, self.cf, self.cg, self.ch, self.ci, self.cj, self.ck, self.cl, self.cm, self.c9, self.ca, self.cb, self.cc, self.cd, self.ce);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.ff, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.cA, self.cB, self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.ct);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.fg, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cR, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.fh, self.d1, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.fi, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq, self.dr, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.di);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.fj, self.dC, self.dE, self.dF, self.dG, self.dH, self.dI, self.dJ, self.dK, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA, self.dB, self.dD);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.fk, self.dV, self.dY, self.dZ, self.e0, self.e1, self.e2, self.e3, self.e4, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dW, self.dX);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.fl, self.ef, self.ej, self.ek, self.el, self.em, self.en, self.eo, self.ep, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.ec, self.ed, self.ee, self.eg, self.eh, self.ei]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.z()) | 0));
  arr.c[0] = x;
  var src = xxl.ab;
  var length = xxl.z();
  src.aJ(0, arr, 1, length);
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
      var $x_1 = new $c_T1(self.ao);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.aT, self.aU);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.b8, self.b9, self.ba);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.er, self.es, self.et, self.eu);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.ev, self.ew, self.ex, self.ey, self.ez);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.eA, self.eB, self.eC, self.eD, self.eE, self.eF);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.eG, self.eH, self.eI, self.eJ, self.eK, self.eL, self.eM);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.eN, self.eO, self.eP, self.eQ, self.eR, self.eS, self.eT, self.eU);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.bh, self.bi, self.bj, self.bk, self.bl, self.bm, self.bn, self.bo, self.bg);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.br, self.bs, self.bt, self.bu, self.bv, self.bw, self.bx, self.by, self.bp, self.bq);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.bC, self.bD, self.bE, self.bF, self.bG, self.bH, self.bI, self.bJ, self.bz, self.bA, self.bB);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.bO, self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bV, self.bK, self.bL, self.bM, self.bN);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.c1, self.c2, self.c3, self.c4, self.c5, self.c6, self.c7, self.c8, self.bW, self.bX, self.bY, self.bZ, self.c0);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.cf, self.cg, self.ch, self.ci, self.cj, self.ck, self.cl, self.cm, self.c9, self.ca, self.cb, self.cc, self.cd, self.ce);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.cA, self.cB, self.cn, self.co, self.cp, self.cq, self.cr, self.cs, self.ct);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cR, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cJ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.d1, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq, self.dr, self.d9, self.da, self.db, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.di);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.dC, self.dE, self.dF, self.dG, self.dH, self.dI, self.dJ, self.dK, self.ds, self.dt, self.du, self.dv, self.dw, self.dx, self.dy, self.dz, self.dA, self.dB, self.dD);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.dV, self.dY, self.dZ, self.e0, self.e1, self.e2, self.e3, self.e4, self.dL, self.dM, self.dN, self.dO, self.dP, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dW, self.dX);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.ef, self.ej, self.ek, self.el, self.em, self.en, self.eo, self.ep, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea, self.eb, self.ec, self.ed, self.ee, self.eg, self.eh, self.ei);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.z() === 23)) {
    var elems = xxl.ab;
    return new $c_T22(elems.c[1], elems.c[2], elems.c[3], elems.c[4], elems.c[5], elems.c[6], elems.c[7], elems.c[8], elems.c[9], elems.c[10], elems.c[11], elems.c[12], elems.c[13], elems.c[14], elems.c[15], elems.c[16], elems.c[17], elems.c[18], elems.c[19], elems.c[20], elems.c[21], elems.c[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.ab.c.length - 1) | 0));
    var src = xxl.ab;
    var length = ((xxl.ab.c.length - 1) | 0);
    src.aJ(1, arr$1, 0, length);
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
$p.m1 = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.nR = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  cX: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  cY: 1
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
$p.mt = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  d0: 1
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
$p.l0 = (function(this$, elem, from) {
  var len = (this$.length | 0);
  var i = from;
  while ((i < len)) {
    if ($m_sr_BoxesRunTime$().b(elem, this$[i])) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.lz = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.a9();
  while (((i < len) && it.L())) {
    b.push(new $c_T2(this$[i], it.H()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.lA = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
$p.ag = (function(this$, f) {
  var len = (this$.length | 0);
  var i = 0;
  while ((i < len)) {
    f.h(this$[i]);
    i = ((1 + i) | 0);
  }
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  d1: 1
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
  d2: 1
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
  this.jj = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.jj = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  d6: 1
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
$p.g = (function(properties) {
  var result = ({});
  properties.gA(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.Y] = pair$2$2.ao;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  d7: 1
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
$p.aj = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.h6;
  } else {
    var result = [];
    seq.gA(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  d8: 1
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
$p.f = (function(array) {
  var len = array.c.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.c[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  d9: 1
}));
var $n_sjsr_package$;
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$();
  }
  return $n_sjsr_package$;
}
/** @constructor */
function $c_s_util_CommandLineParser$() {
}
$p = $c_s_util_CommandLineParser$.prototype = new $h_O();
$p.constructor = $c_s_util_CommandLineParser$;
/** @constructor */
function $h_s_util_CommandLineParser$() {
}
$h_s_util_CommandLineParser$.prototype = $p;
$p.nN = (function(err) {
  var where = ((err.kZ() === 0) ? "" : ((err.kZ() === 1) ? " after first argument" : ((" after " + err.kZ()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.o8());
  $m_s_Console$().nn().mD((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  da: 1
}));
var $n_s_util_CommandLineParser$;
function $m_s_util_CommandLineParser$() {
  if ((!$n_s_util_CommandLineParser$)) {
    $n_s_util_CommandLineParser$ = new $c_s_util_CommandLineParser$();
  }
  return $n_s_util_CommandLineParser$;
}
/** @constructor */
function $c_s_util_DynamicVariable(init) {
  this.hL = null;
  this.hL = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.m = (function() {
  return (("DynamicVariable(" + this.hL) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  dc: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3() {
}
$p = $c_s_util_hashing_MurmurHash3.prototype = new $h_O();
$p.constructor = $c_s_util_hashing_MurmurHash3;
/** @constructor */
function $h_s_util_hashing_MurmurHash3() {
}
$h_s_util_hashing_MurmurHash3.prototype = $p;
$p.C = (function(hash, data) {
  var h = this.lk(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.lk = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.as = (function(hash, length) {
  return this.gV((hash ^ length));
});
$p.gV = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.M = (function(x, seed, ignorePrefix) {
  var arr = x.z();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.D()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.C(h, $f_T__hashCode__I(x.D()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.C(h, $m_sr_Statics$().a2(x.s(i)));
      i = ((1 + i) | 0);
    }
    return this.as(h, arr);
  }
});
$p.lZ = (function(x, seed, caseClassName) {
  var arr = x.z();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.D()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.C(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.C(h, $m_sr_Statics$().a2(x.s(i)));
      i = ((1 + i) | 0);
    }
    return this.as(h, arr);
  }
});
$p.nW = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.a9();
  while (iterator.L()) {
    var x = iterator.H();
    var h = $m_sr_Statics$().a2(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.C(h$2, a);
  h$2 = this.C(h$2, b);
  h$2 = this.lk(h$2, c);
  return this.as(h$2, n);
});
$p.nm = (function(xs, seed) {
  var it = xs.a9();
  var h = seed;
  if ((!it.L())) {
    return this.as(h, 0);
  }
  var x0 = it.H();
  if ((!it.L())) {
    return this.as(this.C(h, $m_sr_Statics$().a2(x0)), 1);
  }
  var x1 = it.H();
  var initial = $m_sr_Statics$().a2(x0);
  h = this.C(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().a2(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.L()) {
    h = this.C(h, prev);
    var hash = $m_sr_Statics$().a2(it.H());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.C(h, hash);
      i = ((1 + i) | 0);
      while (it.L()) {
        h = this.C(h, $m_sr_Statics$().a2(it.H()));
        i = ((1 + i) | 0);
      }
      return this.as(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.gV(this.C(this.C(h0, rangeDiff), prev));
});
$p.kK = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().iL(a);
  switch (l) {
    case 0: {
      return this.as(h, 0);
      break;
    }
    case 1: {
      return this.as(this.C(h, $m_sr_Statics$().a2($m_sr_ScalaRunTime$().fO(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a2($m_sr_ScalaRunTime$().fO(a, 0));
      h = this.C(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a2($m_sr_ScalaRunTime$().fO(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.C(h, prev);
        var hash = $m_sr_Statics$().a2($m_sr_ScalaRunTime$().fO(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.C(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.C(h, $m_sr_Statics$().a2($m_sr_ScalaRunTime$().fO(a, i)));
            i = ((1 + i) | 0);
          }
          return this.as(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gV(this.C(this.C(h0, rangeDiff), prev));
    }
  }
});
$p.nx = (function(start, step, last, seed) {
  return this.gV(this.C(this.C(this.C(seed, start), step), last));
});
$p.mw = (function(a, seed) {
  var h = seed;
  var l = a.J();
  switch (l) {
    case 0: {
      return this.as(h, 0);
      break;
    }
    case 1: {
      return this.as(this.C(h, $m_sr_Statics$().a2(a.a3(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().a2(a.a3(0));
      h = this.C(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().a2(a.a3(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.C(h, prev);
        var hash = $m_sr_Statics$().a2(a.a3(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.C(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.C(h, $m_sr_Statics$().a2(a.a3(i)));
            i = ((1 + i) | 0);
          }
          return this.as(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gV(this.C(this.C(h0, rangeDiff), prev));
    }
  }
});
$p.mG = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.a5())) {
    elems.hA();
  }
  return ((rangeState === 2) ? this.nx(initial, rangeDiff, prev, seed) : this.as(h, n));
});
function $p_Lsketches_rooms_gridceiling_GridCeiling$package$__fbm$1__I__I__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, FbmOctaves$2, domainPeriod$1, FbmGain$2, domainPos) {
  var acc = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0);
  var freq = 1;
  var amp = 1.0;
  var totalAmp = 0.0;
  var o = 0;
  while ((o < FbmOctaves$2)) {
    var pd = Math.imul(domainPeriod$1, freq);
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var $x_3 = acc;
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
    var $x_1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4();
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$().ku;
    var a1$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kG(domainPos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac(), freq);
    var a2$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec3$().aG($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(pd), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(pd));
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().gY(fn$proxy1);
    acc = $x_4.iE($x_3, $x_2.an($x_1.fW($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((WgslFn$_this.gT(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ")"))), amp));
    totalAmp = (totalAmp + amp);
    freq = (freq << 1);
    amp = (amp * FbmGain$2);
    o = ((1 + o) | 0);
  }
  return $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gz($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().mj($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().iD(acc, totalAmp)));
}
function $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeShade$1__I__D__Ltrivalibs_graphics_painter_Painter__D__I__Ltrivalibs_graphics_painter_Shade($thiz, FbmOctaves$1, FbmGain$1, p$1, NoiseScale$1, domainPeriod) {
  var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg;
  try {
    var uv = ctx.b3.l("uv");
    var AssignTarget_this = ctx.b4.X("worldPos");
    var value$proxy1 = ctx.b3.l("position");
    var x0 = (((("  " + AssignTarget_this.O) + " = ") + value$proxy1.e) + ";");
    var AssignTarget_this$2 = ctx.b4.go;
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_vec4$();
    var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().kW($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f3().h2(uv));
    var $x_2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
    var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f3().fX(uv);
    var value$proxy2 = $x_4.kJ($x_3, $x_2.kW($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aQ().aS((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " - ") + e$proxy2.e) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
    var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, (((("  " + AssignTarget_this$2.O) + " = ") + value$proxy2.e) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev;
  }
  program.b2 = $x_1;
  var array$1 = reg.V;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var d$2 = ({});
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$2;
  try {
    var n = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
    var x0$2 = n.B($p_Lsketches_rooms_gridceiling_GridCeiling$package$__fbm$1__I__I__D__Ltrivalibs_graphics_math_gpu_Expr__Ltrivalibs_graphics_math_gpu_Expr($thiz, FbmOctaves$1, domainPeriod, FbmGain$1, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kG(ctx$2.am.l("worldPos"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac(), NoiseScale$1)));
    var AssignTarget_this$1 = ctx$2.ad.X("color");
    var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().aH($m_Ltrivalibs_graphics_math_gpu_vec3$().b5(n), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
    var $x_5 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$2, (((("  " + AssignTarget_this$1.O) + " = ") + value$proxy3.e) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$2;
  }
  program.b1 = $x_5;
  var array$3 = reg$2.V;
  var len$1 = (array$3.length | 0);
  var i$1 = 0;
  while ((i$1 < len$1)) {
    $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$3[i$1]);
    i$1 = ((1 + i$1) | 0);
  }
  var b = program.b2;
  var b$1 = program.b1;
  var helperFns$proxy1 = program.ah();
  var id = p$1.p;
  p$1.p = ((1 + p$1.p) | 0);
  var names = [];
  var dict = ({});
  var i$2 = 0;
  while ((i$2 < (names.length | 0))) {
    dict[names[i$2]] = i$2;
    i$2 = ((1 + i$2) | 0);
  }
  var names$2 = [];
  var dict$2 = ({});
  var i$2$1 = 0;
  while ((i$2$1 < (names$2.length | 0))) {
    dict$2[names$2[i$2$1]] = i$2$1;
    i$2$1 = ((1 + i$2$1) | 0);
  }
  var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy1);
  var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
  var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["worldPos"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, "", sd.a1, sd.a0, fragBuiltinParams);
  var args$proxy1 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([baseWgsl]));
  console.log(...$m_sjsr_Compat$().aj(args$proxy1));
  var module = p$1.d.createShaderModule(({
    "code": baseWgsl
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
  var bgls = [];
  return new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, null, null, $m_Ltrivalibs_graphics_shader_layouts$().G(p$1.d, bgls), false, dict, dict$2);
}
function $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$2, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().lT(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy1 = vl.jA.fV(v$3);
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.s(0);
    var value = nestedValues.s(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.s(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.s(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.s(1);
    var value$4 = nestedValues$2.s(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.s(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.aZ.length | 0))) {
    var n = (mesh$proxy1.aZ[fi].length | 0);
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
    while ((fi < (mesh$proxy1.aZ.length | 0))) {
      var arr = mesh$proxy1.aZ[fi];
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
    while ((fi < (mesh$proxy1.aZ.length | 0))) {
      var arr$2 = mesh$proxy1.aZ[fi];
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.ne(idxBuf, vertexCount));
  }
  return p$2.ml($x_1, (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel($thiz, p$3, w, h, faces, shade) {
  var shape$1 = p$3.fU($p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$3, faces), shade, "none", (void 0));
  return p$3.b6(w, h, (void 0), (void 0), (void 0), (void 0), true, (void 0), (void 0), shape$1, (void 0), (void 0), (void 0));
}
/** @constructor */
function $c_Lsketches_rooms_gridceiling_GridCeiling$package$() {
}
$p = $c_Lsketches_rooms_gridceiling_GridCeiling$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_gridceiling_GridCeiling$package$;
/** @constructor */
function $h_Lsketches_rooms_gridceiling_GridCeiling$package$() {
}
$h_Lsketches_rooms_gridceiling_GridCeiling$package$.prototype = $p;
$p.ay = (function(c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
});
$p.lq = (function(n, length, xCenter, startZ, step, gridY, sw, sh, tileWorld, vTileCount) {
  var perStripV = ((2.0 * sh) + sw);
  var vFull = (vTileCount * perStripV);
  var vH = (sh / vFull);
  var vB = (sw / vFull);
  var perStripVn = (perStripV / vFull);
  var faces = [];
  var i = 0;
  while ((i < n)) {
    var box = $m_Ltrivalibs_graphics_geometry_Box$().iH(new $c_Ltrivalibs_graphics_math_cpu_Vec3(xCenter, gridY, (startZ + (i * step))), length, sh, sw);
    var vb = (i * perStripVn);
    var f = ((tileWorld, vb, vH) => ((c$2, uvw$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ay(c$2, (c$2.u / tileWorld), (vb + (uvw$2.t * vH)))))(tileWorld, vb, vH);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0 = box.fw;
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    var $x_3 = f(x0, x1);
    var x0$1 = box.eX;
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_2 = f(x0$1, x1$1);
    var x0$2 = box.eY;
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    var $x_1 = f(x0$2, x1$2);
    var x0$3 = box.fx;
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
    faces.push($x_4.ax($x_3, $x_2, $x_1, f(x0$3, x1$3)));
    var f$1 = ((tileWorld, vb, vH) => ((c$2$1, uvw$2$1) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ay(c$2$1, (c$2$1.u / tileWorld), ((vb + vH) + (uvw$2$1.t * vH)))))(tileWorld, vb, vH);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$4 = box.fv;
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
    var $x_7 = f$1(x0$4, x1$4);
    var x0$5 = box.eW;
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_6 = f$1(x0$5, x1$5);
    var x0$6 = box.eV;
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_5 = f$1(x0$6, x1$6);
    var x0$7 = box.fu;
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    faces.push($x_8.ax($x_7, $x_6, $x_5, f$1(x0$7, x1$7)));
    var f$2 = ((tileWorld, vb, vH, vB) => ((c$2$2, uvw$2$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ay(c$2$2, (c$2$2.u / tileWorld), ((vb + (2.0 * vH)) + (uvw$2$2.v * vB)))))(tileWorld, vb, vH, vB);
    var $x_12 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$8 = box.eX;
    var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_11 = f$2(x0$8, x1$8);
    var x0$9 = box.eV;
    var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_10 = f$2(x0$9, x1$9);
    var x0$10 = box.eW;
    var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_9 = f$2(x0$10, x1$10);
    var x0$11 = box.eY;
    var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    faces.push($x_12.ax($x_11, $x_10, $x_9, f$2(x0$11, x1$11)));
    i = ((1 + i) | 0);
  }
  return faces;
});
$p.kP = (function(n, length, zCenter, startX, step, gridY, sw, sh, tileWorld, vTileCount) {
  var perStripV = ((2.0 * sh) + sw);
  var vFull = (vTileCount * perStripV);
  var vH = (sh / vFull);
  var vB = (sw / vFull);
  var perStripVn = (perStripV / vFull);
  var faces = [];
  var i = 0;
  while ((i < n)) {
    var box = $m_Ltrivalibs_graphics_geometry_Box$().iH(new $c_Ltrivalibs_graphics_math_cpu_Vec3((startX + (i * step)), gridY, zCenter), sw, sh, length);
    var vb = (i * perStripVn);
    var f = ((tileWorld, vb, vH) => ((c$2, uvw$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ay(c$2, (c$2.v / tileWorld), (vb + (uvw$2.t * vH)))))(tileWorld, vb, vH);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0 = box.fu;
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    var $x_3 = f(x0, x1);
    var x0$1 = box.eV;
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_2 = f(x0$1, x1$1);
    var x0$2 = box.eX;
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_1 = f(x0$2, x1$2);
    var x0$3 = box.fw;
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    faces.push($x_4.ax($x_3, $x_2, $x_1, f(x0$3, x1$3)));
    var f$1 = ((tileWorld, vb, vH) => ((c$2$1, uvw$2$1) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ay(c$2$1, (c$2$1.v / tileWorld), ((vb + vH) + (uvw$2$1.t * vH)))))(tileWorld, vb, vH);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$4 = box.fx;
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
    var $x_7 = f$1(x0$4, x1$4);
    var x0$5 = box.eY;
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    var $x_6 = f$1(x0$5, x1$5);
    var x0$6 = box.eW;
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_5 = f$1(x0$6, x1$6);
    var x0$7 = box.fv;
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
    faces.push($x_8.ax($x_7, $x_6, $x_5, f$1(x0$7, x1$7)));
    var f$2 = ((tileWorld, vb, vH, vB) => ((c$2$2, uvw$2$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ay(c$2$2, (c$2$2.v / tileWorld), ((vb + (2.0 * vH)) + (uvw$2$2.u * vB)))))(tileWorld, vb, vH, vB);
    var $x_12 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$8 = box.eX;
    var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_11 = f$2(x0$8, x1$8);
    var x0$9 = box.eV;
    var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_10 = f$2(x0$9, x1$9);
    var x0$10 = box.eW;
    var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_9 = f$2(x0$10, x1$10);
    var x0$11 = box.eY;
    var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    faces.push($x_12.ax($x_11, $x_10, $x_9, f$2(x0$11, x1$11)));
    i = ((1 + i) | 0);
  }
  return faces;
});
$p.hD = (function(size, centerXZ, y, normal, tileWorld) {
  var center$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(centerXZ, y, centerXZ);
  var f = ((pos$2, _$1$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ay(pos$2, (pos$2.u / tileWorld), (pos$2.v / tileWorld)));
  var uvAtPivot = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
  var n = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), normal, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  var x = n.t;
  if (((+Math.abs(x)) > 0.999)) {
    var up = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
  } else {
    var up = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  }
  var uDir = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), up, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n);
  var uVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), uDir, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), size);
  var vVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), n, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), size);
  var tlPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), center$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), uVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.i6)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), vVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.i7));
  var trPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var blPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec);
  var brPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), blPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
  var $x_3 = f(tlPos, x1);
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
  var $x_2 = f(blPos, x1$1);
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
  var $x_1 = f(brPos, x1$2);
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
  return [$x_4.ax($x_3, $x_2, $x_1, f(trPos, x1$3))];
});
$p.kN = (function(size, height) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().iH(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * height), 0.0), size, height, size);
  var f = ((c$2, uvw$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ay(c$2, uvw$2.u, (0.0 + (0.2 * uvw$2.v))));
  var $x_24 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.fu;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_23 = f(x0, x1);
  var x0$1 = box.fw;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_22 = f(x0$1, x1$1);
  var x0$2 = box.fx;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_21 = f(x0$2, x1$2);
  var x0$3 = box.fv;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_20 = $x_24.ax($x_23, $x_22, $x_21, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ay(c$2$1, uvw$2$1.u, (0.2 + (0.2 * uvw$2$1.t))));
  var $x_19 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.fw;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_18 = f$1(x0$4, x1$4);
  var x0$5 = box.eX;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_17 = f$1(x0$5, x1$5);
  var x0$6 = box.eY;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_16 = f$1(x0$6, x1$6);
  var x0$7 = box.fx;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_15 = $x_19.ax($x_18, $x_17, $x_16, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ay(c$2$2, uvw$2$2.u, (0.4 + (0.2 * uvw$2$2.t))));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.fv;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_13 = f$2(x0$8, x1$8);
  var x0$9 = box.eW;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_12 = f$2(x0$9, x1$9);
  var x0$10 = box.eV;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_11 = f$2(x0$10, x1$10);
  var x0$11 = box.fu;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_10 = $x_14.ax($x_13, $x_12, $x_11, f$2(x0$11, x1$11));
  var f$3 = ((c$2$3, uvw$2$3) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ay(c$2$3, uvw$2$3.v, (0.6000000000000001 + (0.2 * uvw$2$3.t))));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$12 = box.fu;
  var x1$12 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_8 = f$3(x0$12, x1$12);
  var x0$13 = box.eV;
  var x1$13 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_7 = f$3(x0$13, x1$13);
  var x0$14 = box.eX;
  var x1$14 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_6 = f$3(x0$14, x1$14);
  var x0$15 = box.fw;
  var x1$15 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_5 = $x_9.ax($x_8, $x_7, $x_6, f$3(x0$15, x1$15));
  var f$4 = ((c$2$4, uvw$2$4) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().ay(c$2$4, uvw$2$4.v, (0.8 + (0.2 * uvw$2$4.t))));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$16 = box.fx;
  var x1$16 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_3 = f$4(x0$16, x1$16);
  var x0$17 = box.eY;
  var x1$17 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_2 = f$4(x0$17, x1$17);
  var x0$18 = box.eW;
  var x1$18 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$4(x0$18, x1$18);
  var x0$19 = box.fv;
  var x1$19 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  return [$x_20, $x_15, $x_10, $x_5, $x_4.ax($x_3, $x_2, $x_1, f$4(x0$19, x1$19))];
});
$p.nF = (function() {
  $m_Ltrivalibs_graphics_painter_Painter$().mx(document.getElementById("canvas"), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$11) => {
    var rowCount = $doubleToInt((+Math.floor(226.66666666666666)));
    var colCount = $doubleToInt((+Math.floor(226.66666666666666)));
    var gridStep = (340.0 / rowCount);
    var gridStart = ((-170.0) + (0.5 * gridStep));
    var LightColor = new $c_Ltrivalibs_graphics_math_cpu_Vec3(2.4, 2.2, 2.0);
    var p$proxy3 = (28.0 / gridStep);
    var $x_1 = $m_RTLong$().hy((+Math.round(p$proxy3)));
    var x_$_lo = $x_1.l;
    var x_$_hi = $x_1.h;
    var x$1 = $doubleToInt(((4.294967296E9 * x_$_hi) + (x_$_lo >>> 0.0)));
    var TileCells = ((x$1 > 1) ? x$1 : 1);
    var tileWorld = (TileCells * gridStep);
    var p$proxy4 = (0.075 * tileWorld);
    var $x_2 = $m_RTLong$().hy((+Math.round(p$proxy4)));
    var x$2_$_lo = $x_2.l;
    var x$2_$_hi = $x_2.h;
    var x$3 = $doubleToInt(((4.294967296E9 * x$2_$_hi) + (x$2_$_lo >>> 0.0)));
    var noisePeriod = ((x$3 > 1) ? x$3 : 1);
    var NoiseScale = (noisePeriod / tileWorld);
    var noiseBakeShade = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeShade$1__I__D__Ltrivalibs_graphics_painter_Painter__D__I__Ltrivalibs_graphics_painter_Shade(this, 4, 0.3, p$11, NoiseScale, noisePeriod);
    var gridTileU = $doubleToInt((24.0 * tileWorld));
    var gridTileV = $doubleToInt((24.0 * (1.75 * TileCells)));
    var planeTilePx = $doubleToInt((24.0 * tileWorld));
    var rowTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, gridTileU, gridTileV, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().lq(TileCells, tileWorld, (0.5 * tileWorld), gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells), noiseBakeShade);
    var colTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, gridTileU, gridTileV, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().kP(TileCells, tileWorld, (0.5 * tileWorld), gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells), noiseBakeShade);
    var groundTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, planeTilePx, planeTilePx, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().hD(tileWorld, (0.5 * tileWorld), 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), tileWorld), noiseBakeShade);
    var ceilTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, planeTilePx, planeTilePx, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().hD(tileWorld, (0.5 * tileWorld), 20.0, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), tileWorld), noiseBakeShade);
    var boxTile = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__bakeTile$1__Ltrivalibs_graphics_painter_Painter__I__I__sjs_js_Array__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_Panel(this, p$11, 1024, 1024, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().kN(7.0, 10.5), noiseBakeShade);
    var rowForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().lq(rowCount, 340.0, 0.0, gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells));
    var colForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().kP(colCount, 340.0, 0.0, gridStart, gridStep, 19.0, 0.15, 0.8, tileWorld, TileCells));
    var groundForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().hD(340.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), tileWorld));
    var ceilForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().hD(340.0, 0.0, 20.0, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().W(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), tileWorld));
    var boxForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$11, $m_Lsketches_rooms_gridceiling_GridCeiling$package$().kN(7.0, 10.5));
    var build$proxy2 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3) => {
      var body$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2) => {
        var $x_5 = $m_sjsr_package$();
        var AssignTarget_this = ctx$2.b4.go;
        var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().h0(ctx$2.hq.l("mvp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gC(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aH(ctx$2.b3.l("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        var $x_4 = AssignTarget_this.O;
        var $x_3 = value$proxy4.e;
        var AssignTarget_this$2 = ctx$2.b4.X("uv");
        var value$proxy5 = ctx$2.b3.l("uv");
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_5.f(new ($d_T.r().C)([(((("  " + $x_4) + " = ") + $x_3) + ";"), (((("  " + AssignTarget_this$2.O) + " = ") + value$proxy5.e) + ";")]))), "", "\n", "");
      }));
      var d = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg;
      try {
        var $x_6 = body$proxy5.h(ctx);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev;
      }
      program$3.b2 = $x_6;
      $m_sjs_js_ArrayOps$().ag(reg.V, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$11) => ((data$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$11, data$3);
      }))(program$3)));
      var body$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$1) => {
        var n = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
        var lum = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lum");
        var $x_10 = $m_sjsr_package$();
        var $x_9 = n.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4().fW($m_Ltrivalibs_graphics_math_gpu_expr$package$().aG($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$1.am.l("uv"), ctx$2$1.P.l("samp"))));
        var $x_8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().f2(n, 0.5), 0.3);
        var $x_7 = lum.B($x_8.gz($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aQ().aS((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(0.85)) + " + ") + e$proxy3.e) + ")"))));
        var AssignTarget_this$1 = ctx$2$1.ad.X("color");
        var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_vec4$().aH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().fT(ctx$2$1.P.l("tint"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac(), lum), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_10.f(new ($d_T.r().C)([$x_9, $x_7, (((("  " + AssignTarget_this$1.O) + " = ") + value$proxy6.e) + ";")]))), "", "\n", "");
      }));
      var d$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$2;
      try {
        var $x_11 = body$proxy7.h(ctx$2$2);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$2;
      }
      program$3.b1 = $x_11;
      $m_sjs_js_ArrayOps$().ag(reg$2.V, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$12) => ((data$3$1) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$12, data$3$1);
      }))(program$3)));
    }));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy2.h(program);
    var b = program.b2;
    var b$1 = program.b1;
    var helperFns$proxy2 = program.ah();
    var id = p$11.p;
    p$11.p = ((1 + p$11.p) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i = 0;
    while ((i < (names.length | 0))) {
      dict[names[i]] = i;
      i = ((1 + i) | 0);
    }
    var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$2 = 0;
    while ((i$2 < (names$2.length | 0))) {
      dict$2[names$2[i$2]] = i$2;
      i$2 = ((1 + i$2) | 0);
    }
    var sd = new $c_Ltrivalibs_graphics_shader_ShaderDef(b, b$1, helperFns$proxy2);
    var vertexInputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).gn.A()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).K.A()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.A()], []))));
    var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a1, sd.a0, fragBuiltinParams);
    var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy2 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([wgsl]));
    console.log(...$m_sjsr_Compat$().aj(args$proxy2));
    var module = p$11.d.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl)])))));
    var formats = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
    var sizes = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
    var offsets = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var stride = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes);
    var attributes = [];
    var i$3 = 0;
    while ((i$3 < (formats.length | 0))) {
      attributes.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$3), new $c_T2("offset", (offsets[i$3] | 0)), new $c_T2("format", formats[i$3])])))));
      i$3 = ((1 + i$3) | 0);
    }
    var vbl = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("arrayStride", stride), new $c_T2("attributes", attributes)]))));
    var descriptors = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result = [];
    $m_sjs_js_ArrayOps$().ag(descriptors, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$1) => ((entries$2) => (result.push(Painter_this$1.d.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2)])))))) | 0)))(p$11)));
    var x1 = new $c_T2(result, $m_Ltrivalibs_graphics_shader_layouts$().G(p$11.d, result));
    var \u03b42$ = x1;
    var bgls$2 = \u03b42$.Y;
    var entries = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl = p$11.d.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries)])))));
    var allBgls = ((panelBgl !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$2, [panelBgl]) : bgls$2);
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().G(p$11.d, allBgls);
    var renderShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], panelBgl, pl, false, dict, dict$2);
    var build$proxy3 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$1) => {
      var body$proxy9 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$3) => {
        var $x_14 = $m_sjsr_package$();
        var AssignTarget_this$3 = ctx$2$3.b4.go;
        var value$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().h0(ctx$2$3.hq.l("mvp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gC(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aH(ctx$2$3.b3.l("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        var $x_13 = AssignTarget_this$3.O;
        var $x_12 = value$proxy7.e;
        var AssignTarget_this$2$1 = ctx$2$3.b4.X("uv");
        var value$proxy8 = ctx$2$3.b3.l("uv");
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_14.f(new ($d_T.r().C)([(((("  " + $x_13) + " = ") + $x_12) + ";"), (((("  " + AssignTarget_this$2$1.O) + " = ") + value$proxy8.e) + ";")]))), "", "\n", "");
      }));
      var d$1 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$1;
      try {
        var $x_15 = body$proxy9.h(ctx$1);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$1;
      }
      program$3$1.b2 = $x_15;
      $m_sjs_js_ArrayOps$().ag(reg$1.V, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$13) => ((data$3$2) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$13, data$3$2);
      }))(program$3$1)));
      var body$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$4) => {
        var n$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
        var lum$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lum");
        var worldZ = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldZ");
        var s$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("s");
        var band = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("band");
        var $x_22 = $m_sjsr_package$();
        var $x_21 = n$1.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4().fW($m_Ltrivalibs_graphics_math_gpu_expr$package$().aG($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$4.am.l("uv"), ctx$2$4.P.l("samp"))));
        var $x_20 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().f2(n$1, 0.5), 0.3);
        var $x_19 = lum$1.B($x_20.gz($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aQ().aS((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(0.85)) + " + ") + e$proxy4.e) + ")"))));
        var $x_18 = worldZ.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f3().fX(ctx$2$4.am.l("uv")), tileWorld));
        var $x_17 = s$1.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().mm($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().iD(worldZ, 1.2)));
        var $x_16 = band.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lt($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lK($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().f2(s$1, 0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.06), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.03)));
        var AssignTarget_this$4 = ctx$2$4.ad.X("color");
        var value$proxy9 = $m_Ltrivalibs_graphics_math_gpu_vec4$().aH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().fT(ctx$2$4.P.l("tint"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac(), lum$1), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().mg(band, $m_Ltrivalibs_graphics_math_gpu_vec3$().aG($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(LightColor.u), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(LightColor.t), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(LightColor.v)))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_22.f(new ($d_T.r().C)([$x_21, $x_19, $x_18, $x_17, $x_16, (((("  " + AssignTarget_this$4.O) + " = ") + value$proxy9.e) + ";")]))), "", "\n", "");
      }));
      var d$2$1 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$2$5 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$2$1;
      try {
        var $x_23 = body$proxy11.h(ctx$2$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$2$1;
      }
      program$3$1.b1 = $x_23;
      $m_sjs_js_ArrayOps$().ag(reg$2$1.V, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$14) => ((data$3$3) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$14, data$3$3);
      }))(program$3$1)));
    }));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy3.h(program$2);
    var b$2 = program$2.b2;
    var b$3 = program$2.b1;
    var helperFns$proxy3 = program$2.ah();
    var id$2 = p$11.p;
    p$11.p = ((1 + p$11.p) | 0);
    var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$4 = 0;
    while ((i$4 < (names$4.length | 0))) {
      dict$3[names$4[i$4]] = i$4;
      i$4 = ((1 + i$4) | 0);
    }
    var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$4 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$5 = 0;
    while ((i$5 < (names$5.length | 0))) {
      dict$4[names$5[i$5]] = i$5;
      i$5 = ((1 + i$5) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$2, b$3, helperFns$proxy3);
    var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).gn.A()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).K.A()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.A()], []))));
    var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a1, sd$2.a0, fragBuiltinParams$2);
    var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy3 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([wgsl$2]));
    console.log(...$m_sjsr_Compat$().aj(args$proxy3));
    var module$2 = p$11.d.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl$2)])))));
    var formats$2 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
    var sizes$2 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
    var offsets$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var stride$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var attributes$2 = [];
    var i$6 = 0;
    while ((i$6 < (formats$2.length | 0))) {
      attributes$2.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$6), new $c_T2("offset", (offsets$2[i$6] | 0)), new $c_T2("format", formats$2[i$6])])))));
      i$6 = ((1 + i$6) | 0);
    }
    var vbl$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$2), new $c_T2("attributes", attributes$2)]))));
    var descriptors$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$2 = [];
    $m_sjs_js_ArrayOps$().ag(descriptors$2, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$2) => ((entries$2$1) => (result$2.push(Painter_this$2.d.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$1)])))))) | 0)))(p$11)));
    var x4 = new $c_T2(result$2, $m_Ltrivalibs_graphics_shader_layouts$().G(p$11.d, result$2));
    var \u03b42$$2 = x4;
    var bgls$4 = \u03b42$$2.Y;
    var entries$2$2 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$2 = p$11.d.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$2)])))));
    var allBgls$2 = ((panelBgl$2 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$4, [panelBgl$2]) : bgls$4);
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p$11.d, allBgls$2);
    var ceilShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl$2, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy1 = ul$proxy1.aM;
    var buffer = new ArrayBuffer(64);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var mvp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p$11.d, uv$proxy1);
    var samp = p$11.iO("linear", "linear", "linear", "repeat", (void 0), (void 0));
    var clampSamp = p$11.iO("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
    var Bindable_this = p$11.fU(ceilForm, ceilShade, "none", (void 0));
    var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", ceilTile);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.1, 1.1, 1.12));
    var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var \u03b4scrutinee249 = e1$proxy1.o;
    var idx = (Bindable_this.F.Z.tex | 0);
    while (((Bindable_this.T.length | 0) <= idx)) {
      Bindable_this.T.push(null);
    }
    Bindable_this.T[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee249);
    var \u03b4scrutinee255 = e2$proxy1.o;
    var idx$2 = (Bindable_this.F.E.tint | 0);
    if (((idx$2 < (Bindable_this.k.length | 0)) && (Bindable_this.k[idx$2] !== null))) {
      var BufferBinding_this = Bindable_this.k[idx$2];
      BufferBinding_this.S.Q(BufferBinding_this.n, \u03b4scrutinee255);
      var $x_25 = BufferBinding_this.R.queue;
      var $x_24 = BufferBinding_this.N;
      var s$proxy3 = BufferBinding_this.n;
      $x_25.writeBuffer($x_24, 0.0, s$proxy3.dv.buffer);
    } else {
      var uv$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var device$proxy1 = Bindable_this.fH.d;
      var buffer$2 = new ArrayBuffer(16);
      var arr$proxy5 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
      var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy5.dv, 0), device$proxy1, uv$1);
      b$4.S.Q(b$4.n, \u03b4scrutinee255);
      var $x_27 = b$4.R.queue;
      var $x_26 = b$4.N;
      var s$proxy4 = b$4.n;
      $x_27.writeBuffer($x_26, 0.0, s$proxy4.dv.buffer);
      while (((Bindable_this.k.length | 0) <= idx$2)) {
        Bindable_this.k.push(null);
      }
      Bindable_this.k[idx$2] = b$4;
    }
    var \u03b4scrutinee270 = e3$proxy1.o;
    var idx$3 = (Bindable_this.F.E.samp | 0);
    while (((Bindable_this.k.length | 0) <= idx$3)) {
      Bindable_this.k.push(null);
    }
    Bindable_this.k[idx$3] = \u03b4scrutinee270;
    var Bindable_this$6 = p$11.fU(rowForm, renderShade, "none", (void 0));
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", rowTile);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.9, 0.9, 0.92));
    var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var \u03b4scrutinee290 = e1$proxy2.o;
    var idx$4 = (Bindable_this$6.F.Z.tex | 0);
    while (((Bindable_this$6.T.length | 0) <= idx$4)) {
      Bindable_this$6.T.push(null);
    }
    Bindable_this$6.T[idx$4] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee290);
    var \u03b4scrutinee296 = e2$proxy2.o;
    var idx$5 = (Bindable_this$6.F.E.tint | 0);
    if (((idx$5 < (Bindable_this$6.k.length | 0)) && (Bindable_this$6.k[idx$5] !== null))) {
      var BufferBinding_this$5 = Bindable_this$6.k[idx$5];
      BufferBinding_this$5.S.Q(BufferBinding_this$5.n, \u03b4scrutinee296);
      var $x_29 = BufferBinding_this$5.R.queue;
      var $x_28 = BufferBinding_this$5.N;
      var s$proxy5 = BufferBinding_this$5.n;
      $x_29.writeBuffer($x_28, 0.0, s$proxy5.dv.buffer);
    } else {
      var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var device$proxy2 = Bindable_this$6.fH.d;
      var buffer$3 = new ArrayBuffer(16);
      var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
      var b$2$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy2, uv$2);
      b$2$1.S.Q(b$2$1.n, \u03b4scrutinee296);
      var $x_31 = b$2$1.R.queue;
      var $x_30 = b$2$1.N;
      var s$proxy6 = b$2$1.n;
      $x_31.writeBuffer($x_30, 0.0, s$proxy6.dv.buffer);
      while (((Bindable_this$6.k.length | 0) <= idx$5)) {
        Bindable_this$6.k.push(null);
      }
      Bindable_this$6.k[idx$5] = b$2$1;
    }
    var \u03b4scrutinee311 = e3$proxy2.o;
    var idx$6 = (Bindable_this$6.F.E.samp | 0);
    while (((Bindable_this$6.k.length | 0) <= idx$6)) {
      Bindable_this$6.k.push(null);
    }
    Bindable_this$6.k[idx$6] = \u03b4scrutinee311;
    var Bindable_this$11 = p$11.fU(colForm, renderShade, "none", (void 0));
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", colTile);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.9, 0.9, 0.92));
    var e3$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var \u03b4scrutinee331 = e1$proxy3.o;
    var idx$7 = (Bindable_this$11.F.Z.tex | 0);
    while (((Bindable_this$11.T.length | 0) <= idx$7)) {
      Bindable_this$11.T.push(null);
    }
    Bindable_this$11.T[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee331);
    var \u03b4scrutinee337 = e2$proxy3.o;
    var idx$8 = (Bindable_this$11.F.E.tint | 0);
    if (((idx$8 < (Bindable_this$11.k.length | 0)) && (Bindable_this$11.k[idx$8] !== null))) {
      var BufferBinding_this$9 = Bindable_this$11.k[idx$8];
      BufferBinding_this$9.S.Q(BufferBinding_this$9.n, \u03b4scrutinee337);
      var $x_33 = BufferBinding_this$9.R.queue;
      var $x_32 = BufferBinding_this$9.N;
      var s$proxy7 = BufferBinding_this$9.n;
      $x_33.writeBuffer($x_32, 0.0, s$proxy7.dv.buffer);
    } else {
      var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var device$proxy3 = Bindable_this$11.fH.d;
      var buffer$4 = new ArrayBuffer(16);
      var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
      var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), device$proxy3, uv$3);
      b$3$1.S.Q(b$3$1.n, \u03b4scrutinee337);
      var $x_35 = b$3$1.R.queue;
      var $x_34 = b$3$1.N;
      var s$proxy8 = b$3$1.n;
      $x_35.writeBuffer($x_34, 0.0, s$proxy8.dv.buffer);
      while (((Bindable_this$11.k.length | 0) <= idx$8)) {
        Bindable_this$11.k.push(null);
      }
      Bindable_this$11.k[idx$8] = b$3$1;
    }
    var \u03b4scrutinee352 = e3$proxy3.o;
    var idx$9 = (Bindable_this$11.F.E.samp | 0);
    while (((Bindable_this$11.k.length | 0) <= idx$9)) {
      Bindable_this$11.k.push(null);
    }
    Bindable_this$11.k[idx$9] = \u03b4scrutinee352;
    var Bindable_this$16 = p$11.fU(boxForm, renderShade, "none", (void 0));
    var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", boxTile);
    var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.48, 0.47, 0.47));
    var e3$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
    var \u03b4scrutinee372 = e1$proxy4.o;
    var idx$10 = (Bindable_this$16.F.Z.tex | 0);
    while (((Bindable_this$16.T.length | 0) <= idx$10)) {
      Bindable_this$16.T.push(null);
    }
    Bindable_this$16.T[idx$10] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee372);
    var \u03b4scrutinee378 = e2$proxy4.o;
    var idx$11 = (Bindable_this$16.F.E.tint | 0);
    if (((idx$11 < (Bindable_this$16.k.length | 0)) && (Bindable_this$16.k[idx$11] !== null))) {
      var BufferBinding_this$13 = Bindable_this$16.k[idx$11];
      BufferBinding_this$13.S.Q(BufferBinding_this$13.n, \u03b4scrutinee378);
      var $x_37 = BufferBinding_this$13.R.queue;
      var $x_36 = BufferBinding_this$13.N;
      var s$proxy9 = BufferBinding_this$13.n;
      $x_37.writeBuffer($x_36, 0.0, s$proxy9.dv.buffer);
    } else {
      var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var device$proxy4 = Bindable_this$16.fH.d;
      var buffer$5 = new ArrayBuffer(16);
      var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
      var b$4$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), device$proxy4, uv$4);
      b$4$1.S.Q(b$4$1.n, \u03b4scrutinee378);
      var $x_39 = b$4$1.R.queue;
      var $x_38 = b$4$1.N;
      var s$proxy10 = b$4$1.n;
      $x_39.writeBuffer($x_38, 0.0, s$proxy10.dv.buffer);
      while (((Bindable_this$16.k.length | 0) <= idx$11)) {
        Bindable_this$16.k.push(null);
      }
      Bindable_this$16.k[idx$11] = b$4$1;
    }
    var \u03b4scrutinee393 = e3$proxy4.o;
    var idx$12 = (Bindable_this$16.F.E.samp | 0);
    while (((Bindable_this$16.k.length | 0) <= idx$12)) {
      Bindable_this$16.k.push(null);
    }
    Bindable_this$16.k[idx$12] = \u03b4scrutinee393;
    var mirror = $m_Lsketchlib_utils_mirror_MirrorReflection$().lU(p$11, [Bindable_this$6, Bindable_this$11, Bindable_this, Bindable_this$16], "mvp", 10.0, null, $m_Ltrivalibs_graphics_geometry_Plane$().jz, 60.0, 6, new $c_T4(0.0, 0.0, 0.0, 0.0));
    var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
    var uv$proxy2 = ul$proxy2.aM;
    var buffer$6 = new ArrayBuffer(4);
    var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
    var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), p$11.d, uv$proxy2);
    b$5.S.Q(b$5.n, 0.4);
    var $x_41 = b$5.R.queue;
    var $x_40 = b$5.N;
    var s$proxy11 = b$5.n;
    $x_41.writeBuffer($x_40, 0.0, s$proxy11.dv.buffer);
    var build$proxy4 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$2) => {
      var body$proxy13 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$6) => {
        var $x_44 = $m_sjsr_package$();
        var AssignTarget_this$5 = ctx$2$6.b4.go;
        var value$proxy14 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().h0(ctx$2$6.hq.l("mvp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gC(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aH(ctx$2$6.b3.l("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
        var $x_43 = AssignTarget_this$5.O;
        var $x_42 = value$proxy14.e;
        var AssignTarget_this$2$2 = ctx$2$6.b4.X("uv");
        var value$proxy15 = ctx$2$6.b3.l("uv");
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_44.f(new ($d_T.r().C)([(((("  " + $x_43) + " = ") + $x_42) + ";"), (((("  " + AssignTarget_this$2$2.O) + " = ") + value$proxy15.e) + ";")]))), "", "\n", "");
      }));
      var d$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$3;
      try {
        var $x_45 = body$proxy13.h(ctx$3);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$3;
      }
      program$3$2.b2 = $x_45;
      $m_sjs_js_ArrayOps$().ag(reg$3.V, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$15) => ((data$3$4) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$15, data$3$4);
      }))(program$3$2)));
      var body$proxy15 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$7) => {
        var n$2 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
        var lum$2 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lum");
        var base = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("base");
        var refl = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("refl");
        var falloff = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("falloff");
        var mix = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("mix");
        var $x_54 = $m_sjsr_package$();
        var $x_53 = n$2.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4().fW($m_Ltrivalibs_graphics_math_gpu_expr$package$().aG($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$7.am.l("uv"), ctx$2$7.P.l("samp"))));
        var $x_52 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().f2(n$2, 0.5), 0.3);
        var $x_51 = lum$2.B($x_52.gz($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aQ().aS((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(0.85)) + " + ") + e$proxy5.e) + ")"))));
        var $x_50 = base.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().fT(ctx$2$7.P.l("tint"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac(), lum$2));
        var $x_49 = refl.B($m_Ltrivalibs_graphics_math_gpu_expr$package$().fS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "reflTex"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().b5($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f6(ctx$2$7.bf))));
        var $x_48 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy6 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4().h1(refl);
        var $x_47 = falloff.B($x_48.nf($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aQ().aS((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " - ") + e$proxy6.e) + ")")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.1)));
        var $x_46 = mix.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().iF(ctx$2$7.P.l("reflStrength"), falloff));
        var AssignTarget_this$6 = ctx$2$7.ad.X("color");
        var value$proxy16 = $m_Ltrivalibs_graphics_math_gpu_vec4$().aH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().fT(base, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac(), $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aQ().aS((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " - ") + mix.e) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().fT($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h3(refl), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac(), mix)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_54.f(new ($d_T.r().C)([$x_53, $x_51, $x_50, $x_49, $x_47, $x_46, (((("  " + AssignTarget_this$6.O) + " = ") + value$proxy16.e) + ";")]))), "", "\n", "");
      }));
      var d$2$2 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$2$8 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$2$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$2$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$2$2;
      try {
        var $x_55 = body$proxy15.h(ctx$2$8);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$2$2;
      }
      program$3$2.b1 = $x_55;
      $m_sjs_js_ArrayOps$().ag(reg$2$2.V, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Program_this$16) => ((data$3$5) => {
        $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(Program_this$16, data$3$5);
      }))(program$3$2)));
    }));
    var program$3$3 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    build$proxy4.h(program$3$3);
    var b$6 = program$3$3.b2;
    var b$7 = program$3$3.b1;
    var helperFns$proxy4 = program$3$3.ah();
    var id$3 = p$11.p;
    p$11.p = ((1 + p$11.p) | 0);
    var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["reflStrength"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))));
    var dict$5 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$7 = 0;
    while ((i$7 < (names$7.length | 0))) {
      dict$5[names$7[i$7]] = i$7;
      i$7 = ((1 + i$7) | 0);
    }
    var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], $m_sjs_js_ArrayOpsCommon$().a(["reflTex"], []));
    var dict$6 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$8 = 0;
    while ((i$8 < (names$8.length | 0))) {
      dict$6[names$8[i$8]] = i$8;
      i$8 = ((1 + i$8) | 0);
    }
    var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$6, b$7, helperFns$proxy4);
    var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().a(["position"], $m_sjs_js_ArrayOpsCommon$().a(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertexIndex", "vertex_index", "u32")], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("instanceIndex", "instance_index", "u32")], [])));
    var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["mvp"], $m_sjs_js_ArrayOpsCommon$().a(["tint"], $m_sjs_js_ArrayOpsCommon$().a(["reflStrength"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).gn.A()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).K.A()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.A()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.A()], [])))));
    var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a1, sd$3.a0, fragBuiltinParams$3);
    var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;\n@group(1) @binding(1) var reflTex: texture_2d<f32>;");
    var args$proxy4 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([wgsl$3]));
    console.log(...$m_sjsr_Compat$().aj(args$proxy4));
    var module$3 = p$11.d.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl$3)])))));
    var formats$3 = $m_sjs_js_ArrayOpsCommon$().a(["float32x3"], $m_sjs_js_ArrayOpsCommon$().a(["float32x2"], []));
    var sizes$3 = $m_sjs_js_ArrayOpsCommon$().a([12], $m_sjs_js_ArrayOpsCommon$().a([8], []));
    var offsets$3 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var stride$9 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$3);
    var attributes$3 = [];
    var i$9 = 0;
    while ((i$9 < (formats$3.length | 0))) {
      attributes$3.push($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("shaderLocation", i$9), new $c_T2("offset", (offsets$3[i$9] | 0)), new $c_T2("format", formats$3[i$9])])))));
      i$9 = ((1 + i$9) | 0);
    }
    var vbl$3 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("arrayStride", stride$9), new $c_T2("attributes", attributes$3)]))));
    var descriptors$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 1), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 3), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []))))], []);
    var result$3 = [];
    $m_sjs_js_ArrayOps$().ag(descriptors$3, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$3) => ((entries$2$3) => (result$3.push(Painter_this$3.d.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$3)])))))) | 0)))(p$11)));
    var x7 = new $c_T2(result$3, $m_Ltrivalibs_graphics_shader_layouts$().G(p$11.d, result$3));
    var \u03b42$$3 = x7;
    var bgls$6 = \u03b42$$3.Y;
    var entries$3 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []));
    var panelBgl$3 = p$11.d.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$3)])))));
    var allBgls$3 = ((panelBgl$3 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$6, [panelBgl$3]) : bgls$6);
    var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().G(p$11.d, allBgls$3);
    var groundShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, vbl$3, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
    var Bindable_this$21 = p$11.fU(groundForm, groundShade, "none", (void 0));
    var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", groundTile);
    var e2$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("tint", new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.85, 0.84, 0.82));
    var e3$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("reflStrength", b$5);
    var e4$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var e5$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("reflTex", mirror.ju);
    var \u03b4scrutinee513 = e1$proxy5.o;
    var idx$13 = (Bindable_this$21.F.Z.tex | 0);
    while (((Bindable_this$21.T.length | 0) <= idx$13)) {
      Bindable_this$21.T.push(null);
    }
    Bindable_this$21.T[idx$13] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee513);
    var \u03b4scrutinee519 = e2$proxy5.o;
    var idx$14 = (Bindable_this$21.F.E.tint | 0);
    if (((idx$14 < (Bindable_this$21.k.length | 0)) && (Bindable_this$21.k[idx$14] !== null))) {
      var BufferBinding_this$19 = Bindable_this$21.k[idx$14];
      BufferBinding_this$19.S.Q(BufferBinding_this$19.n, \u03b4scrutinee519);
      var $x_57 = BufferBinding_this$19.R.queue;
      var $x_56 = BufferBinding_this$19.N;
      var s$proxy12 = BufferBinding_this$19.n;
      $x_57.writeBuffer($x_56, 0.0, s$proxy12.dv.buffer);
    } else {
      var uv$5$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
      var device$proxy5 = Bindable_this$21.fH.d;
      var buffer$7 = new ArrayBuffer(16);
      var arr$proxy10 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
      var b$6$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy10.dv, 0), device$proxy5, uv$5$1);
      b$6$1.S.Q(b$6$1.n, \u03b4scrutinee519);
      var $x_59 = b$6$1.R.queue;
      var $x_58 = b$6$1.N;
      var s$proxy13 = b$6$1.n;
      $x_59.writeBuffer($x_58, 0.0, s$proxy13.dv.buffer);
      while (((Bindable_this$21.k.length | 0) <= idx$14)) {
        Bindable_this$21.k.push(null);
      }
      Bindable_this$21.k[idx$14] = b$6$1;
    }
    var \u03b4scrutinee534 = e3$proxy5.o;
    var idx$15 = (Bindable_this$21.F.E.reflStrength | 0);
    while (((Bindable_this$21.k.length | 0) <= idx$15)) {
      Bindable_this$21.k.push(null);
    }
    Bindable_this$21.k[idx$15] = \u03b4scrutinee534;
    var \u03b4scrutinee554 = e4$proxy1.o;
    var idx$16 = (Bindable_this$21.F.E.samp | 0);
    while (((Bindable_this$21.k.length | 0) <= idx$16)) {
      Bindable_this$21.k.push(null);
    }
    Bindable_this$21.k[idx$16] = \u03b4scrutinee554;
    var \u03b4scrutinee580 = e5$proxy1.o;
    var idx$17 = (Bindable_this$21.F.Z.reflTex | 0);
    while (((Bindable_this$21.T.length | 0) <= idx$17)) {
      Bindable_this$21.T.push(null);
    }
    Bindable_this$21.T[idx$17] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee580);
    var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy3 = ul$proxy3.aM;
    var buffer$8 = new ArrayBuffer(64);
    var arr$proxy11 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
    var invVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy11.dv, 0), p$11.d, uv$proxy3);
    var ul$proxy4 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$());
    var uv$proxy4 = ul$proxy4.aM;
    var buffer$9 = new ArrayBuffer(16);
    var arr$proxy12 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$9), 1);
    var camPos = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy12.dv, 0), p$11.d, uv$proxy4);
    var fogColor = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.48, 0.49, 0.5);
    var clearColor$3 = new $c_T4(fogColor.u, fogColor.t, fogColor.v, 1.0);
    var shapes$3 = [Bindable_this$21, Bindable_this, Bindable_this$6, Bindable_this$11, Bindable_this$16];
    var Panel_this = p$11.b6((void 0), (void 0), clearColor$3, true, true, (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes$3, (void 0), (void 0));
    var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("mvp", mvp);
    var \u03b4scrutinee581 = e1$proxy6.o;
    var dict$proxy1 = Panel_this.gj;
    dict$proxy1.mvp = \u03b4scrutinee581;
    var build$proxy5 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$4) => {
      var body$proxy17 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$9) => {
        var $x_60 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fQ();
        var AssignTarget_this$7 = ctx$2$9.ad.X("color");
        var value$proxy19 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().aG($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "src"), ctx$2$9.am.l("uv"), ctx$2$9.P.l("samp"));
        return $x_60.h((((("  " + AssignTarget_this$7.O) + " = ") + value$proxy19.e) + ";"));
      }));
      var d$4 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$4 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$4), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$4 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$4 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$4;
      try {
        var $x_61 = body$proxy17.h(ctx$4);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$4;
      }
      program$3$4.U = $x_61;
      $m_sjs_js_ArrayOps$().ag(reg$4.V, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$4) => ((data$3$6) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$4, data$3$6);
      }))(program$3$4)));
    }));
    var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy5.h(program$4);
    var b$8 = program$4.U;
    var helperFns$proxy5 = program$4.ah();
    var id$4 = p$11.p;
    p$11.p = ((1 + p$11.p) | 0);
    var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
    var dict$7 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$10 = 0;
    while ((i$10 < (names$10.length | 0))) {
      dict$7[names$10[i$10]] = i$10;
      i$10 = ((1 + i$10) | 0);
    }
    var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["src"], []);
    var dict$8 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$11 = 0;
    while ((i$11 < (names$11.length | 0))) {
      dict$8[names$11[i$11]] = i$11;
      i$11 = ((1 + i$11) | 0);
    }
    var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$8, helperFns$proxy5);
    var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.A()], []));
    var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.a1, sd$4.a0, fragBuiltinParams$4);
    var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var src: texture_2d<f32>;");
    var args$proxy5 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([wgsl$4]));
    console.log(...$m_sjsr_Compat$().aj(args$proxy5));
    var module$4 = p$11.d.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl$4)])))));
    var descriptors$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result$4 = [];
    $m_sjs_js_ArrayOps$().ag(descriptors$4, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$4) => ((entries$2$4) => (result$4.push(Painter_this$4.d.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$4)])))))) | 0)))(p$11)));
    var x10 = new $c_T2(result$4, $m_Ltrivalibs_graphics_shader_layouts$().G(p$11.d, result$4));
    var \u03b46$ = x10;
    var bgls$8 = \u03b46$.Y;
    var entries$4 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$4 = p$11.d.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$4)])))));
    var allBgls$4 = ((panelBgl$4 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$8, [panelBgl$4]) : bgls$8);
    var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().G(p$11.d, allBgls$4);
    var copyShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
    var build$proxy6 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$5) => {
      var body$proxy19 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$10) => {
        var $x_62 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fQ();
        var AssignTarget_this$8 = ctx$2$10.ad.X("color");
        var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
        var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().hr;
        var a1$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
        var a2$proxy2 = ctx$2$10.P.l("samp");
        var a3$proxy1 = ctx$2$10.am.l("uv");
        var a4$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(4.0);
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().gY(fn$proxy2);
        var value$proxy20 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this.gT(fn$proxy2) + "(") + a1$proxy2) + ", ") + a2$proxy2) + ", ") + a3$proxy1) + ", ") + a4$proxy1) + ")"));
        return $x_62.h((((("  " + AssignTarget_this$8.O) + " = ") + value$proxy20.e) + ";"));
      }));
      var d$5 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$5 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$5), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$5 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$5 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$5;
      try {
        var $x_63 = body$proxy19.h(ctx$5);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$5;
      }
      program$3$5.U = $x_63;
      $m_sjs_js_ArrayOps$().ag(reg$5.V, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$5) => ((data$3$7) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$5, data$3$7);
      }))(program$3$5)));
    }));
    var program$5 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy6.h(program$5);
    var b$9 = program$5.U;
    var helperFns$proxy6 = program$5.ah();
    var id$5 = p$11.p;
    p$11.p = ((1 + p$11.p) | 0);
    var names$13 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
    var dict$9 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$12 = 0;
    while ((i$12 < (names$13.length | 0))) {
      dict$9[names$13[i$12]] = i$12;
      i$12 = ((1 + i$12) | 0);
    }
    var names$14 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
    var dict$10 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$13 = 0;
    while ((i$13 < (names$14.length | 0))) {
      dict$10[names$14[i$13]] = i$13;
      i$13 = ((1 + i$13) | 0);
    }
    var sd$5 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$9, helperFns$proxy6);
    var vertexInputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$5 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$5 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.A()], []));
    var fragBuiltinParams$5 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$5 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$5, vertexInputStruct$5, vertexOutputStruct$5, fragmentOutputStruct$5, groupDecls$5, sd$5.a1, sd$5.a0, fragBuiltinParams$5);
    var wgsl$5 = (baseWgsl$5 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy6 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([wgsl$5]));
    console.log(...$m_sjsr_Compat$().aj(args$proxy6));
    var module$5 = p$11.d.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl$5)])))));
    var descriptors$5 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], [])], []);
    var result$5 = [];
    $m_sjs_js_ArrayOps$().ag(descriptors$5, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$5) => ((entries$2$5) => (result$5.push(Painter_this$5.d.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$5)])))))) | 0)))(p$11)));
    var x13 = new $c_T2(result$5, $m_Ltrivalibs_graphics_shader_layouts$().G(p$11.d, result$5));
    var \u03b46$$2 = x13;
    var bgls$10 = \u03b46$$2.Y;
    var entries$5 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], []);
    var panelBgl$5 = p$11.d.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$5)])))));
    var allBgls$5 = ((panelBgl$5 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$10, [panelBgl$5]) : bgls$10);
    var pl$5 = $m_Ltrivalibs_graphics_shader_layouts$().G(p$11.d, allBgls$5);
    var downBlurShade = new $c_Ltrivalibs_graphics_painter_Shade(id$5, module$5, null, bgls$10[0], panelBgl$5, pl$5, false, dict$9, dict$10);
    var fadeLayers = [];
    var Bindable_this$28 = p$11.aR(copyShade, (void 0), (void 0), (void 0));
    var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("src", Panel_this);
    var e2$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
    var \u03b4scrutinee706 = e1$proxy7.o;
    var idx$18 = (Bindable_this$28.w.Z.src | 0);
    while (((Bindable_this$28.y.length | 0) <= idx$18)) {
      Bindable_this$28.y.push(null);
    }
    Bindable_this$28.y[idx$18] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee706);
    var \u03b4scrutinee710 = e2$proxy6.o;
    var idx$19 = (Bindable_this$28.w.E.samp | 0);
    while (((Bindable_this$28.j.length | 0) <= idx$19)) {
      Bindable_this$28.j.push(null);
    }
    Bindable_this$28.j[idx$19] = \u03b4scrutinee710;
    fadeLayers.push(Bindable_this$28);
    var fm = 0;
    while ((fm < 5)) {
      var mipSource$1 = fm;
      var mipTarget$1 = ((1 + fm) | 0);
      var Bindable_this$31 = p$11.aR(downBlurShade, (void 0), mipSource$1, mipTarget$1);
      var e1$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
      var \u03b4scrutinee718 = e1$proxy8.o;
      var idx$20 = (Bindable_this$31.w.E.samp | 0);
      while (((Bindable_this$31.j.length | 0) <= idx$20)) {
        Bindable_this$31.j.push(null);
      }
      Bindable_this$31.j[idx$20] = \u03b4scrutinee718;
      fadeLayers.push(Bindable_this$31);
      fm = ((1 + fm) | 0);
    }
    var fadeBlurPanel = p$11.b6((void 0), (void 0), (void 0), (void 0), (void 0), 6, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), fadeLayers);
    var build$proxy7 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((program$3$6) => {
      var body$proxy21 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((ctx$2$11) => {
        var uv$8 = ctx$2$11.am.l("uv");
        var d$6 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("d");
        var ndc = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("ndc");
        var worldH = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldH");
        var worldPos = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldPos");
        var dist = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("dist");
        var f = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("f");
        var lod = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lod");
        var col = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("col");
        var $x_76 = $m_sjsr_package$();
        var $x_75 = d$6.B($m_Ltrivalibs_graphics_math_gpu_expr$package$().kQ($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().b5($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f6(ctx$2$11.bf))));
        var $x_74 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
        var $x_73 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().f2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f3().h2(uv$8), 2.0), 1.0);
        var e$proxy7 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f3().fX(uv$8), 2.0);
        var $x_72 = ndc.B($x_74.aG($x_73, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aQ().aS((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " - ") + e$proxy7.e) + ")")), d$6));
        var $x_71 = worldH.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().h0(ctx$2$11.P.l("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gC(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aH(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().kY().h(1)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
        var $x_70 = worldPos.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h3(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4().h1(worldH)));
        var $x_69 = dist.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac().l1($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().nQ(worldPos, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac(), ctx$2$11.P.l("camPos"))));
        var $x_68 = f.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lt(dist, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(18.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(160.0)));
        var $x_67 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var $x_66 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
        var e$proxy8 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().an(f, 4.0);
        var $x_65 = lod.B($x_67.lj($x_66.l2($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aQ().aS((("(f32(1) + " + e$proxy8.e) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().kY().h(5)));
        var $x_64 = col.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h3($m_Ltrivalibs_graphics_math_gpu_expr$package$().lr($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), uv$8, ctx$2$11.P.l("samp"), lod)));
        var AssignTarget_this$9 = ctx$2$11.ad.X("color");
        var value$proxy21 = $m_Ltrivalibs_graphics_math_gpu_vec4$().aH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().nv($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().nh(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac(), $m_Ltrivalibs_graphics_math_gpu_vec3$().aG($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(fogColor.u), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(fogColor.t), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(fogColor.v)), f), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac(), 2.2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0));
        return $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs($x_76.f(new ($d_T.r().C)([$x_75, $x_72, $x_71, $x_70, $x_69, $x_68, $x_65, $x_64, (((("  " + AssignTarget_this$9.O) + " = ") + value$proxy21.e) + ";")]))), "", "\n", "");
      }));
      var d$7 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
      var ctx$6 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$7), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
      var reg$6 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
      var prev$6 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$6;
      try {
        var $x_77 = body$proxy21.h(ctx$6);
      } finally {
        $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$6;
      }
      program$3$6.U = $x_77;
      $m_sjs_js_ArrayOps$().ag(reg$6.V, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((LayerProgram_this$6) => ((data$3$8) => {
        $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(LayerProgram_this$6, data$3$8);
      }))(program$3$6)));
    }));
    var program$6 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
    build$proxy7.h(program$6);
    var b$10 = program$6.U;
    var helperFns$proxy7 = program$6.ah();
    var id$6 = p$11.p;
    p$11.p = ((1 + p$11.p) | 0);
    var names$16 = $m_sjs_js_ArrayOpsCommon$().a(["invVp"], $m_sjs_js_ArrayOpsCommon$().a(["camPos"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])));
    var dict$11 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$14 = 0;
    while ((i$14 < (names$16.length | 0))) {
      dict$11[names$16[i$14]] = i$14;
      i$14 = ((1 + i$14) | 0);
    }
    var names$17 = $m_sjs_js_ArrayOpsCommon$().a(["col"], $m_sjs_js_ArrayOpsCommon$().a(["depth"], []));
    var dict$12 = $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([]))));
    var i$15 = 0;
    while ((i$15 < (names$17.length | 0))) {
      dict$12[names$17[i$15]] = i$15;
      i$15 = ((1 + i$15) | 0);
    }
    var sd$6 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$10, helperFns$proxy7);
    var vertexInputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
    var vertexOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
    var fragmentOutputStruct$6 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
    var groupDecls$6 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["invVp"], $m_sjs_js_ArrayOpsCommon$().a(["camPos"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []))), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).K.A()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$()).K.A()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.A()], []))));
    var fragBuiltinParams$6 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
    var baseWgsl$6 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$6, vertexInputStruct$6, vertexOutputStruct$6, fragmentOutputStruct$6, groupDecls$6, sd$6.a1, sd$6.a0, fragBuiltinParams$6);
    var wgsl$6 = (baseWgsl$6 + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
    var args$proxy7 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([wgsl$6]));
    console.log(...$m_sjsr_Compat$().aj(args$proxy7));
    var module$6 = p$11.d.createShaderModule($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("code", wgsl$6)])))));
    var descriptors$6 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("buffer", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("type", "uniform")])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 2), new $c_T2("visibility", 2), new $c_T2("sampler", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], [])))], []);
    var result$6 = [];
    $m_sjs_js_ArrayOps$().ag(descriptors$6, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((Painter_this$6) => ((entries$2$6) => (result$6.push(Painter_this$6.d.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$2$6)])))))) | 0)))(p$11)));
    var x16 = new $c_T2(result$6, $m_Ltrivalibs_graphics_shader_layouts$().G(p$11.d, result$6));
    var \u03b46$$3 = x16;
    var bgls$12 = \u03b46$$3.Y;
    var entries$6 = $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 0), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([])))))]))))], $m_sjs_js_ArrayOpsCommon$().a([$m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("binding", 1), new $c_T2("visibility", 2), new $c_T2("texture", $m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("sampleType", "depth")])))))]))))], []));
    var panelBgl$6 = p$11.d.createBindGroupLayout($m_sjs_js_special_package$().g(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().f(new ($d_T2.r().C)([new $c_T2("entries", entries$6)])))));
    var allBgls$6 = ((panelBgl$6 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$12, [panelBgl$6]) : bgls$12);
    var pl$6 = $m_Ltrivalibs_graphics_shader_layouts$().G(p$11.d, allBgls$6);
    var resolveShade = new $c_Ltrivalibs_graphics_painter_Shade(id$6, module$6, null, bgls$12[0], panelBgl$6, pl$6, false, dict$11, dict$12);
    var Bindable_this$33 = p$11.aR(resolveShade, (void 0), (void 0), (void 0));
    var e1$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("col", fadeBlurPanel);
    var e2$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", Panel_this.kL(0, (-1), true));
    var e3$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", invVp);
    var e4$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("camPos", camPos);
    var e5$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", clampSamp);
    var \u03b4scrutinee810 = e1$proxy9.o;
    var idx$21 = (Bindable_this$33.w.Z.col | 0);
    while (((Bindable_this$33.y.length | 0) <= idx$21)) {
      Bindable_this$33.y.push(null);
    }
    Bindable_this$33.y[idx$21] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee810);
    var \u03b4scrutinee824 = e2$proxy7.o;
    var idx$22 = (Bindable_this$33.w.Z.depth | 0);
    while (((Bindable_this$33.y.length | 0) <= idx$22)) {
      Bindable_this$33.y.push(null);
    }
    Bindable_this$33.y[idx$22] = \u03b4scrutinee824;
    var \u03b4scrutinee828 = e3$proxy6.o;
    var idx$23 = (Bindable_this$33.w.E.invVp | 0);
    while (((Bindable_this$33.j.length | 0) <= idx$23)) {
      Bindable_this$33.j.push(null);
    }
    Bindable_this$33.j[idx$23] = \u03b4scrutinee828;
    var \u03b4scrutinee838 = e4$proxy2.o;
    var idx$24 = (Bindable_this$33.w.E.camPos | 0);
    while (((Bindable_this$33.j.length | 0) <= idx$24)) {
      Bindable_this$33.j.push(null);
    }
    Bindable_this$33.j[idx$24] = \u03b4scrutinee838;
    var \u03b4scrutinee852 = e5$proxy2.o;
    var idx$25 = (Bindable_this$33.w.E.samp | 0);
    while (((Bindable_this$33.j.length | 0) <= idx$25)) {
      Bindable_this$33.j.push(null);
    }
    Bindable_this$33.j[idx$25] = \u03b4scrutinee852;
    var fadePanel = p$11.b6((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), Bindable_this$33, (void 0));
    var bloom = $m_Lsketchlib_utils_bloom_Bloom$().lV(p$11, fadePanel, 0.005, 1.0, 4.0, 5);
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().lP(0.6, 1.0, 0.1, 340.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 3.0, 15.0));
    $m_Ltrivalibs_dev_devPreserve$().lW(cam, "camera");
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().mz(p$11.fz, true, 400.0, 5.0, true, (void 0));
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, input, 1.0, 3.0);
    p$11.nl(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var cw = (+v1$2);
      var ch = (+v2$2);
      var aspect$2 = (cw / ch);
      var fov$1 = cam.fJ;
      var near$1 = cam.fK;
      var far$1 = cam.fI;
      var rotH$2 = cam.ar;
      var rotV$2 = cam.b0;
      var pos$2 = cam.a8;
      cam.iP(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2);
    })));
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, rowTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, colTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, groundTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, ceilTile);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$11, boxTile);
    $m_Ltrivalibs_utils_animation_animate$package$().lO(((p$5) => ((arg1$2) => {
      var tpf = (+arg1$2);
      input.gZ(tpf);
      controller.gZ(tpf);
      var vp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fR(), cam.hp, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.lw());
      mvp.S.Q(mvp.n, vp);
      var $x_79 = mvp.R.queue;
      var $x_78 = mvp.N;
      var s$proxy15 = mvp.n;
      $x_79.writeBuffer($x_78, 0.0, s$proxy15.dv.buffer);
      var value$proxy23 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fR(), vp, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
      invVp.S.Q(invVp.n, value$proxy23);
      var $x_81 = invVp.R.queue;
      var $x_80 = invVp.N;
      var s$proxy16 = invVp.n;
      $x_81.writeBuffer($x_80, 0.0, s$proxy16.dv.buffer);
      var value$proxy24 = cam.a8;
      camPos.S.Q(camPos.n, value$proxy24);
      var $x_83 = camPos.R.queue;
      var $x_82 = camPos.N;
      var s$proxy17 = camPos.n;
      $x_83.writeBuffer($x_82, 0.0, s$proxy17.dv.buffer);
      mirror.np(vp);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, Panel_this);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, fadeBlurPanel);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, fadePanel);
      bloom.nq();
      p$5.nM(bloom.jo);
    }))(p$11));
  })));
});
var $d_Lsketches_rooms_gridceiling_GridCeiling$package$ = new $TypeData().i($c_Lsketches_rooms_gridceiling_GridCeiling$package$, "sketches.rooms.gridceiling.GridCeiling$package$", ({
  df: 1
}));
var $n_Lsketches_rooms_gridceiling_GridCeiling$package$;
function $m_Lsketches_rooms_gridceiling_GridCeiling$package$() {
  if ((!$n_Lsketches_rooms_gridceiling_GridCeiling$package$)) {
    $n_Lsketches_rooms_gridceiling_GridCeiling$package$ = new $c_Lsketches_rooms_gridceiling_GridCeiling$package$();
  }
  return $n_Lsketches_rooms_gridceiling_GridCeiling$package$;
}
function $s_Lsketches_rooms_gridceiling_roomsGridCeiling__main__AT__V(args) {
  try {
    $m_Lsketches_rooms_gridceiling_GridCeiling$package$().nF();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().nN(e);
    } else {
      throw e;
    }
  }
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
$p.lV = (function(p, scene, intensity, threshold, blurRadius, mipLevels) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("bloom mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aL;
  }
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy1 = ul$proxy1.aM;
  var buffer = new ArrayBuffer(4);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.d, uv$proxy1);
  b.S.Q(b.n, blurRadius);
  var $x_2 = b.R.queue;
  var $x_1 = b.N;
  var s$proxy1 = b.n;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy2 = ul$proxy2.aM;
  var buffer$2 = new ArrayBuffer(4);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.d, uv$proxy2);
  b$2.S.Q(b$2.n, intensity);
  var $x_4 = b$2.R.queue;
  var $x_3 = b$2.N;
  var s$proxy2 = b$2.n;
  $x_4.writeBuffer($x_3, 0.0, s$proxy2.dv.buffer);
  var sampler = p.nG();
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg;
  try {
    var color = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("color");
    var brightness = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("brightness");
    var x0 = color.B($m_Ltrivalibs_graphics_math_gpu_expr$package$().fS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().b5($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f6(ctx.bf))));
    var x1 = brightness.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().iE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().iE($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4().fW(color), 0.2126), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4().lx(color), 0.7152)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4().ly(color), 0.0722)));
    var AssignTarget_this = ctx.ad.X("color");
    var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().nH($m_Ltrivalibs_graphics_math_gpu_vec4$().kJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), color, $m_Ltrivalibs_graphics_math_gpu_expr$package$().mk(brightness, ctx.P.l("threshold")));
    var $x_5 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, (((("  " + AssignTarget_this.O) + " = ") + value$proxy1.e) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev;
  }
  program.U = $x_5;
  var array$1 = reg.V;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var b$1 = program.U;
  var helperFns$proxy1 = program.ah();
  var id = p.p;
  p.p = ((1 + p.p) | 0);
  var names = $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []);
  var dict = ({});
  var i$1 = 0;
  while ((i$1 < (names.length | 0))) {
    dict[names[i$1]] = i$1;
    i$1 = ((1 + i$1) | 0);
  }
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], []);
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
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["threshold"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.A()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a1, sd.a0, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;");
  var args$proxy1 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().aj(args$proxy1));
  var module = p.d.createShaderModule(({
    "code": wgsl
  }));
  var $x_7 = $m_sjs_js_ArrayOpsCommon$();
  var $x_6 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var descriptors = $x_7.a([$x_6.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$3 = 0;
  while ((i$3 < len$1)) {
    var x0$2 = descriptors[i$3];
    (result.push(p.d.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$3 = ((1 + i$3) | 0);
  }
  var \u03b46$___1 = result;
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.d, result);
  var bgls$2 = \u03b46$___1;
  var $x_8 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({});
  var entries = $x_8.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$1
  })], []);
  var panelBgl = p.d.createBindGroupLayout(({
    "entries": entries
  }));
  var allBgls = ((panelBgl !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$2, [panelBgl]) : bgls$2);
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().G(p.d, allBgls);
  var thresholdShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$1 = ({});
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$1;
  try {
    var $x_10 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fQ();
    var AssignTarget_this$1 = ctx$1.ad.X("color");
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().kq;
    var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
    var a2$proxy1 = ctx$1.P.l("samp");
    var a3$proxy1 = ctx$1.am.l("uv");
    var a4$proxy1 = ctx$1.P.l("blurRadius");
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().gY(fn$proxy1);
    var value$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this.gT(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + a3$proxy1) + ", ") + a4$proxy1) + ")"));
    var $x_9 = $x_10.h((((("  " + AssignTarget_this$1.O) + " = ") + value$proxy2.e) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$1;
  }
  program$2.U = $x_9;
  var array$16 = reg$1.V;
  var len$2 = (array$16.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$16[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$3 = program$2.U;
  var helperFns$proxy2 = program$2.ah();
  var id$2 = p.p;
  p.p = ((1 + p.p) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
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
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.A()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.A()], [])));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a1, sd$2.a0, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().aj(args$proxy2));
  var module$2 = p.d.createShaderModule(({
    "code": wgsl$2
  }));
  var $x_13 = $m_sjs_js_ArrayOpsCommon$();
  var $x_12 = $m_sjs_js_ArrayOpsCommon$();
  var _2$2 = ({
    "type": "uniform"
  });
  var $x_11 = $m_sjs_js_ArrayOpsCommon$();
  var _2$3 = ({});
  var descriptors$2 = $x_13.a([$x_12.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$2
  })], $x_11.a([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$3
  })], []))], []);
  var result$2 = [];
  var len$3 = (descriptors$2.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    var x0$4 = descriptors$2[i$5];
    (result$2.push(p.d.createBindGroupLayout(({
      "entries": x0$4
    }))) | 0);
    i$5 = ((1 + i$5) | 0);
  }
  var \u03b46$$2___1 = result$2;
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.d, result$2);
  var bgls$4 = \u03b46$$2___1;
  var $x_14 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({});
  var entries$2 = $x_14.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$4
  })], []);
  var panelBgl$2 = p.d.createBindGroupLayout(({
    "entries": entries$2
  }));
  var allBgls$2 = ((panelBgl$2 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$4, [panelBgl$2]) : bgls$4);
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.d, allBgls$2);
  var downsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var program$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$2 = ({});
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$2;
  try {
    var $x_16 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fQ();
    var AssignTarget_this$2 = ctx$2.ad.X("color");
    var WgslFn$_this$1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy2 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().hr;
    var a1$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
    var a2$proxy2 = ctx$2.P.l("samp");
    var a3$proxy2 = ctx$2.am.l("uv");
    var a4$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().an(ctx$2.P.l("blurRadius"), 0.5);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().gY(fn$proxy2);
    var value$proxy3 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this$1.gT(fn$proxy2) + "(") + a1$proxy2) + ", ") + a2$proxy2) + ", ") + a3$proxy2) + ", ") + a4$proxy2) + ")"));
    var $x_15 = $x_16.h((((("  " + AssignTarget_this$2.O) + " = ") + value$proxy3.e) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$2;
  }
  program$3.U = $x_15;
  var array$35 = reg$2.V;
  var len$4 = (array$35.length | 0);
  var i$6 = 0;
  while ((i$6 < len$4)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$3, array$35[i$6]);
    i$6 = ((1 + i$6) | 0);
  }
  var b$4 = program$3.U;
  var helperFns$proxy3 = program$3.ah();
  var id$3 = p.p;
  p.p = ((1 + p.p) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$5 = ({});
  var i$5$1 = 0;
  while ((i$5$1 < (names$7.length | 0))) {
    dict$5[names$7[i$5$1]] = i$5$1;
    i$5$1 = ((1 + i$5$1) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["tex"], []);
  var dict$6 = ({});
  var i$6$1 = 0;
  while ((i$6$1 < (names$8.length | 0))) {
    dict$6[names$8[i$6$1]] = i$6$1;
    i$6$1 = ((1 + i$6$1) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$4, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurRadius"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.A()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.A()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a1, sd$3.a0, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().aj(args$proxy3));
  var module$3 = p.d.createShaderModule(({
    "code": wgsl$3
  }));
  var $x_19 = $m_sjs_js_ArrayOpsCommon$();
  var $x_18 = $m_sjs_js_ArrayOpsCommon$();
  var _2$5 = ({
    "type": "uniform"
  });
  var $x_17 = $m_sjs_js_ArrayOpsCommon$();
  var _2$6 = ({});
  var descriptors$3 = $x_19.a([$x_18.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$5
  })], $x_17.a([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$6
  })], []))], []);
  var result$3 = [];
  var len$5 = (descriptors$3.length | 0);
  var i$7 = 0;
  while ((i$7 < len$5)) {
    var x0$6 = descriptors$3[i$7];
    (result$3.push(p.d.createBindGroupLayout(({
      "entries": x0$6
    }))) | 0);
    i$7 = ((1 + i$7) | 0);
  }
  var \u03b46$$3___1 = result$3;
  var \u03b46$$3___2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.d, result$3);
  var bgls$6 = \u03b46$$3___1;
  var $x_20 = $m_sjs_js_ArrayOpsCommon$();
  var _2$7 = ({});
  var entries$3 = $x_20.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$7
  })], []);
  var panelBgl$3 = p.d.createBindGroupLayout(({
    "entries": entries$3
  }));
  var allBgls$3 = ((panelBgl$3 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$6, [panelBgl$3]) : bgls$6);
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.d, allBgls$3);
  var upsampleShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var layers = [];
  var Bindable_this = p.aR(thresholdShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("threshold", threshold);
  var \u03b4scrutinee197 = e1$proxy1.o;
  var idx = (Bindable_this.w.Z.scene | 0);
  while (((Bindable_this.y.length | 0) <= idx)) {
    Bindable_this.y.push(null);
  }
  Bindable_this.y[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee197);
  var \u03b4scrutinee201 = (+e2$proxy1.o);
  var idx$2 = (Bindable_this.w.E.threshold | 0);
  if (((idx$2 < (Bindable_this.j.length | 0)) && (Bindable_this.j[idx$2] !== null))) {
    var BufferBinding_this$5 = Bindable_this.j[idx$2];
    BufferBinding_this$5.S.Q(BufferBinding_this$5.n, \u03b4scrutinee201);
    var $x_22 = BufferBinding_this$5.R.queue;
    var $x_21 = BufferBinding_this$5.N;
    var s$proxy5 = BufferBinding_this$5.n;
    $x_22.writeBuffer($x_21, 0.0, s$proxy5.dv.buffer);
  } else {
    var uv$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$();
    var device$proxy1 = Bindable_this.k2.d;
    var buffer$3 = new ArrayBuffer(4);
    var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
    var b$3$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), device$proxy1, uv$2);
    b$3$1.S.Q(b$3$1.n, \u03b4scrutinee201);
    var $x_24 = b$3$1.R.queue;
    var $x_23 = b$3$1.N;
    var s$proxy6 = b$3$1.n;
    $x_24.writeBuffer($x_23, 0.0, s$proxy6.dv.buffer);
    while (((Bindable_this.j.length | 0) <= idx$2)) {
      Bindable_this.j.push(null);
    }
    Bindable_this.j[idx$2] = b$3$1;
  }
  layers.push(Bindable_this);
  var di = 0;
  while ((di < ((mipLevels - 1) | 0))) {
    var mipSource$1 = di;
    var mipTarget$1 = ((1 + di) | 0);
    var Bindable_this$5 = p.aR(downsampleShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee212 = e1$proxy2.o;
    var idx$3 = (Bindable_this$5.w.E.blurRadius | 0);
    while (((Bindable_this$5.j.length | 0) <= idx$3)) {
      Bindable_this$5.j.push(null);
    }
    Bindable_this$5.j[idx$3] = \u03b4scrutinee212;
    var \u03b4scrutinee224 = e2$proxy2.o;
    var idx$4 = (Bindable_this$5.w.E.samp | 0);
    while (((Bindable_this$5.j.length | 0) <= idx$4)) {
      Bindable_this$5.j.push(null);
    }
    Bindable_this$5.j[idx$4] = \u03b4scrutinee224;
    layers.push(Bindable_this$5);
    di = ((1 + di) | 0);
  }
  var ui = ((mipLevels - 2) | 0);
  while ((ui >= 0)) {
    var Bindable_this$8 = p.aR(upsampleShade, $m_Ltrivalibs_graphics_painter_BlendState$().k1, ((1 + ui) | 0), ui);
    var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("blurRadius", b);
    var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee234 = e1$proxy3.o;
    var idx$5 = (Bindable_this$8.w.E.blurRadius | 0);
    while (((Bindable_this$8.j.length | 0) <= idx$5)) {
      Bindable_this$8.j.push(null);
    }
    Bindable_this$8.j[idx$5] = \u03b4scrutinee234;
    var \u03b4scrutinee246 = e2$proxy3.o;
    var idx$6 = (Bindable_this$8.w.E.samp | 0);
    while (((Bindable_this$8.j.length | 0) <= idx$6)) {
      Bindable_this$8.j.push(null);
    }
    Bindable_this$8.j[idx$6] = \u03b4scrutinee246;
    layers.push(Bindable_this$8);
    ui = ((ui - 1) | 0);
  }
  var bloomP = p.b6((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers);
  var program$4 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$3 = ({});
  var ctx$3 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$3 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$3 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$3;
  try {
    var coord = $m_Ltrivalibs_graphics_math_gpu_ivec2$().b5($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f6(ctx$3.bf));
    var $x_26 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fQ();
    var AssignTarget_this$3 = ctx$3.ad.X("color");
    var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().lN($m_Ltrivalibs_graphics_math_gpu_expr$package$().fS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "scene"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$().nj($m_Ltrivalibs_graphics_math_gpu_expr$package$().fS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "bloom"), coord), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4(), ctx$3.P.l("intensity")));
    var $x_25 = $x_26.h((((("  " + AssignTarget_this$3.O) + " = ") + value$proxy4.e) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$3;
  }
  program$4.U = $x_25;
  var array$54 = reg$3.V;
  var len$6 = (array$54.length | 0);
  var i$8 = 0;
  while ((i$8 < len$6)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$4, array$54[i$8]);
    i$8 = ((1 + i$8) | 0);
  }
  var b$5 = program$4.U;
  var helperFns$proxy4 = program$4.ah();
  var id$4 = p.p;
  p.p = ((1 + p.p) | 0);
  var names$10 = $m_sjs_js_ArrayOpsCommon$().a(["intensity"], []);
  var dict$7 = ({});
  var i$7$1 = 0;
  while ((i$7$1 < (names$10.length | 0))) {
    dict$7[names$10[i$7$1]] = i$7$1;
    i$7$1 = ((1 + i$7$1) | 0);
  }
  var names$11 = $m_sjs_js_ArrayOpsCommon$().a(["scene"], $m_sjs_js_ArrayOpsCommon$().a(["bloom"], []));
  var dict$8 = ({});
  var i$8$1 = 0;
  while ((i$8$1 < (names$11.length | 0))) {
    dict$8[names$11[i$8$1]] = i$8$1;
    i$8$1 = ((1 + i$8$1) | 0);
  }
  var sd$4 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$5, helperFns$proxy4);
  var vertexInputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$4 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$4 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["intensity"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.A()], []));
  var fragBuiltinParams$4 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$4 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$4, vertexInputStruct$4, vertexOutputStruct$4, fragmentOutputStruct$4, groupDecls$4, sd$4.a1, sd$4.a0, fragBuiltinParams$4);
  var wgsl$4 = (baseWgsl$4 + "\n\n@group(1) @binding(0) var scene: texture_2d<f32>;\n@group(1) @binding(1) var bloom: texture_2d<f32>;");
  var args$proxy4 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([wgsl$4]));
  console.log(...$m_sjsr_Compat$().aj(args$proxy4));
  var module$4 = p.d.createShaderModule(({
    "code": wgsl$4
  }));
  var $x_28 = $m_sjs_js_ArrayOpsCommon$();
  var $x_27 = $m_sjs_js_ArrayOpsCommon$();
  var _2$8 = ({
    "type": "uniform"
  });
  var descriptors$4 = $x_28.a([$x_27.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$8
  })], [])], []);
  var result$4 = [];
  var len$7 = (descriptors$4.length | 0);
  var i$9 = 0;
  while ((i$9 < len$7)) {
    var x0$8 = descriptors$4[i$9];
    (result$4.push(p.d.createBindGroupLayout(({
      "entries": x0$8
    }))) | 0);
    i$9 = ((1 + i$9) | 0);
  }
  var \u03b46$$4___1 = result$4;
  var \u03b46$$4___2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.d, result$4);
  var bgls$8 = \u03b46$$4___1;
  var $x_30 = $m_sjs_js_ArrayOpsCommon$();
  var _2$9 = ({});
  var $x_29 = $m_sjs_js_ArrayOpsCommon$();
  var _2$10 = ({});
  var entries$4 = $x_30.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$9
  })], $x_29.a([({
    "binding": 1,
    "visibility": 2,
    "texture": _2$10
  })], []));
  var panelBgl$4 = p.d.createBindGroupLayout(({
    "entries": entries$4
  }));
  var allBgls$4 = ((panelBgl$4 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$8, [panelBgl$4]) : bgls$8);
  var pl$4 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.d, allBgls$4);
  var compositeShade = new $c_Ltrivalibs_graphics_painter_Shade(id$4, module$4, null, bgls$8[0], panelBgl$4, pl$4, false, dict$7, dict$8);
  var Bindable_this$11 = p.aR(compositeShade, (void 0), (void 0), (void 0));
  var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("scene", scene);
  var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("bloom", bloomP);
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("intensity", b$2);
  var \u03b4scrutinee325 = e1$proxy4.o;
  var idx$7 = (Bindable_this$11.w.Z.scene | 0);
  while (((Bindable_this$11.y.length | 0) <= idx$7)) {
    Bindable_this$11.y.push(null);
  }
  Bindable_this$11.y[idx$7] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee325);
  var \u03b4scrutinee335 = e2$proxy4.o;
  var idx$8 = (Bindable_this$11.w.Z.bloom | 0);
  while (((Bindable_this$11.y.length | 0) <= idx$8)) {
    Bindable_this$11.y.push(null);
  }
  Bindable_this$11.y[idx$8] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee335);
  var \u03b4scrutinee339 = e3$proxy1.o;
  var idx$9 = (Bindable_this$11.w.E.intensity | 0);
  while (((Bindable_this$11.j.length | 0) <= idx$9)) {
    Bindable_this$11.j.push(null);
  }
  Bindable_this$11.j[idx$9] = \u03b4scrutinee339;
  return new $c_Lsketchlib_utils_bloom_Bloom$$anon$1(bloomP, p.b6((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), Bindable_this$11, (void 0)), p, b, b$2);
});
var $d_Lsketchlib_utils_bloom_Bloom$ = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$, "sketchlib.utils.bloom.Bloom$", ({
  dh: 1
}));
var $n_Lsketchlib_utils_bloom_Bloom$;
function $m_Lsketchlib_utils_bloom_Bloom$() {
  if ((!$n_Lsketchlib_utils_bloom_Bloom$)) {
    $n_Lsketchlib_utils_bloom_Bloom$ = new $c_Lsketchlib_utils_bloom_Bloom$();
  }
  return $n_Lsketchlib_utils_bloom_Bloom$;
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_MirrorReflection$() {
}
$p = $c_Lsketchlib_utils_mirror_MirrorReflection$.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_MirrorReflection$;
/** @constructor */
function $h_Lsketchlib_utils_mirror_MirrorReflection$() {
}
$h_Lsketchlib_utils_mirror_MirrorReflection$.prototype = $p;
$p.lU = (function(p, shapes, vpName, alphaScale, camera, mirror, blurStrength, mipLevels, clearColor) {
  if ((mipLevels < 2)) {
    var message$proxy1 = (("MirrorReflection mipLevels must be >= 2 (got " + mipLevels) + ")");
    throw new $c_sjs_js_JavaScriptException(Error(message$proxy1)).aL;
  }
  var reflMat = mirror.nz();
  var maxBlur = ((mipLevels - 1) | 0);
  var pn = mirror.g5;
  var pd = mirror.g4;
  var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy1 = ul$proxy1.aM;
  var buffer = new ArrayBuffer(64);
  var arr$proxy1 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
  var uVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy1.dv, 0), p.d, uv$proxy1);
  var ul$proxy2 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
  var uv$proxy2 = ul$proxy2.aM;
  var buffer$2 = new ArrayBuffer(64);
  var arr$proxy2 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
  var uInvVp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy2.dv, 0), p.d, uv$proxy2);
  var ul$proxy3 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$());
  var uv$proxy3 = ul$proxy3.aM;
  var buffer$3 = new ArrayBuffer(4);
  var arr$proxy3 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
  var b = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy3.dv, 0), p.d, uv$proxy3);
  b.S.Q(b.n, blurStrength);
  var $x_2 = b.R.queue;
  var $x_1 = b.N;
  var s$proxy1 = b.n;
  $x_2.writeBuffer($x_1, 0.0, s$proxy1.dv.buffer);
  var sampler = p.iO("linear", "linear", "linear", "clamp-to-edge", (void 0), (void 0));
  var mirrorPanel = p.b6((void 0), (void 0), clearColor, true, (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), shapes, (void 0), (void 0));
  var dict$proxy1 = mirrorPanel.gj;
  dict$proxy1[vpName] = uVp;
  var program = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d = ({});
  var ctx = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg;
  try {
    var uv$3 = ctx.am.l("uv");
    var d$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("d");
    var ndc = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("ndc");
    var worldH = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldH");
    var worldPos = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("worldPos");
    var t = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("t");
    var x0 = d$1.B($m_Ltrivalibs_graphics_math_gpu_expr$package$().kQ($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "depth"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().b5($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f6(ctx.bf))));
    var $x_5 = $m_Ltrivalibs_graphics_math_gpu_vec3$();
    var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().f2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f3().h2(uv$3), 2.0), 1.0);
    var e$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().an($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f3().fX(uv$3), 2.0);
    var x1 = ndc.B($x_5.aG($x_4, $m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aQ().aS((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " - ") + e$proxy1.e) + ")")), d$1));
    var x2 = worldH.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().h0(ctx.P.l("invVp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().gC(), $m_Ltrivalibs_graphics_math_gpu_vec4$().aH(ndc, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$()));
    var x3 = worldPos.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().kS($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h3(worldH), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4().h1(worldH)));
    var x4 = t.B($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().gz($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().iD($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().f2($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ac().kT($m_Ltrivalibs_graphics_math_gpu_vec3$().aG($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(pn.u), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(pn.t), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(pn.v)), worldPos), pd), alphaScale)));
    var AssignTarget_this = ctx.ad.X("color");
    var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_vec4$().aH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().h3($m_Ltrivalibs_graphics_math_gpu_expr$package$().fS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().b5($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f6(ctx.bf)))), t);
    var $x_3 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1, x2, x3, x4, (((("  " + AssignTarget_this.O) + " = ") + value$proxy1.e) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev;
  }
  program.U = $x_3;
  var array$1 = reg.V;
  var len = (array$1.length | 0);
  var i = 0;
  while ((i < len)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
    i = ((1 + i) | 0);
  }
  var b$1 = program.U;
  var helperFns$proxy1 = program.ah();
  var id = p.p;
  p.p = ((1 + p.p) | 0);
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
  var groupDecls = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["invVp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).K.A()], []));
  var fragBuiltinParams = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, groupDecls, sd.a1, sd.a0, fragBuiltinParams);
  var wgsl = (baseWgsl + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;\n@group(1) @binding(1) var depth: texture_depth_2d;");
  var args$proxy1 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([wgsl]));
  console.log(...$m_sjsr_Compat$().aj(args$proxy1));
  var module = p.d.createShaderModule(({
    "code": wgsl
  }));
  var $x_7 = $m_sjs_js_ArrayOpsCommon$();
  var $x_6 = $m_sjs_js_ArrayOpsCommon$();
  var _2 = ({
    "type": "uniform"
  });
  var descriptors = $x_7.a([$x_6.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2
  })], [])], []);
  var result = [];
  var len$1 = (descriptors.length | 0);
  var i$3 = 0;
  while ((i$3 < len$1)) {
    var x0$2 = descriptors[i$3];
    (result.push(p.d.createBindGroupLayout(({
      "entries": x0$2
    }))) | 0);
    i$3 = ((1 + i$3) | 0);
  }
  var \u03b46$___1 = result;
  var \u03b46$___2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.d, result);
  var bgls$2 = \u03b46$___1;
  var $x_9 = $m_sjs_js_ArrayOpsCommon$();
  var _2$1 = ({});
  var $x_8 = $m_sjs_js_ArrayOpsCommon$();
  var _2$2 = ({
    "sampleType": "depth"
  });
  var entries = $x_9.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$1
  })], $x_8.a([({
    "binding": 1,
    "visibility": 2,
    "texture": _2$2
  })], []));
  var panelBgl = p.d.createBindGroupLayout(({
    "entries": entries
  }));
  var allBgls = ((panelBgl !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$2, [panelBgl]) : bgls$2);
  var pl = $m_Ltrivalibs_graphics_shader_layouts$().G(p.d, allBgls);
  var bakeShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, null, bgls$2[0], panelBgl, pl, false, dict, dict$2);
  var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$2 = ({});
  var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$1;
  try {
    var $x_11 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fQ();
    var AssignTarget_this$1 = ctx$1.ad.X("color");
    var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
    var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_blur_Blur$().hr;
    var a1$proxy1 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex");
    var a2$proxy1 = ctx$1.P.l("samp");
    var a3$proxy1 = ctx$1.am.l("uv");
    var a4$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(4.0);
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().gY(fn$proxy1);
    var value$proxy2 = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((((WgslFn$_this.gT(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ", ") + a3$proxy1) + ", ") + a4$proxy1) + ")"));
    var $x_10 = $x_11.h((((("  " + AssignTarget_this$1.O) + " = ") + value$proxy2.e) + ";"));
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$1;
  }
  program$2.U = $x_10;
  var array$18 = reg$1.V;
  var len$2 = (array$18.length | 0);
  var i$4 = 0;
  while ((i$4 < len$2)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$18[i$4]);
    i$4 = ((1 + i$4) | 0);
  }
  var b$2 = program$2.U;
  var helperFns$proxy2 = program$2.ah();
  var id$2 = p.p;
  p.p = ((1 + p.p) | 0);
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["samp"], []);
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
  var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$2, helperFns$proxy2);
  var vertexInputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$2 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$2 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["samp"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.A()], []));
  var fragBuiltinParams$2 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$2, vertexInputStruct$2, vertexOutputStruct$2, fragmentOutputStruct$2, groupDecls$2, sd$2.a1, sd$2.a0, fragBuiltinParams$2);
  var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
  var args$proxy2 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([wgsl$2]));
  console.log(...$m_sjsr_Compat$().aj(args$proxy2));
  var module$2 = p.d.createShaderModule(({
    "code": wgsl$2
  }));
  var $x_13 = $m_sjs_js_ArrayOpsCommon$();
  var $x_12 = $m_sjs_js_ArrayOpsCommon$();
  var _2$3 = ({});
  var descriptors$2 = $x_13.a([$x_12.a([({
    "binding": 0,
    "visibility": 2,
    "sampler": _2$3
  })], [])], []);
  var result$2 = [];
  var len$3 = (descriptors$2.length | 0);
  var i$5 = 0;
  while ((i$5 < len$3)) {
    var x0$4 = descriptors$2[i$5];
    (result$2.push(p.d.createBindGroupLayout(({
      "entries": x0$4
    }))) | 0);
    i$5 = ((1 + i$5) | 0);
  }
  var \u03b46$$2___1 = result$2;
  var \u03b46$$2___2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.d, result$2);
  var bgls$4 = \u03b46$$2___1;
  var $x_14 = $m_sjs_js_ArrayOpsCommon$();
  var _2$4 = ({});
  var entries$2 = $x_14.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$4
  })], []);
  var panelBgl$2 = p.d.createBindGroupLayout(({
    "entries": entries$2
  }));
  var allBgls$2 = ((panelBgl$2 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$4, [panelBgl$2]) : bgls$4);
  var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.d, allBgls$2);
  var downBlurShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, null, bgls$4[0], panelBgl$2, pl$2, false, dict$3, dict$4);
  var blurLayers = [];
  var Bindable_this = p.aR(bakeShade, (void 0), (void 0), (void 0));
  var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("col", mirrorPanel);
  var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("depth", mirrorPanel.kL(0, (-1), true));
  var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("invVp", uInvVp);
  var \u03b4scrutinee132 = e1$proxy1.o;
  var idx = (Bindable_this.w.Z.col | 0);
  while (((Bindable_this.y.length | 0) <= idx)) {
    Bindable_this.y.push(null);
  }
  Bindable_this.y[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee132);
  var \u03b4scrutinee142 = e2$proxy1.o;
  var idx$2 = (Bindable_this.w.Z.depth | 0);
  while (((Bindable_this.y.length | 0) <= idx$2)) {
    Bindable_this.y.push(null);
  }
  Bindable_this.y[idx$2] = \u03b4scrutinee142;
  var \u03b4scrutinee146 = e3$proxy1.o;
  var idx$3 = (Bindable_this.w.E.invVp | 0);
  while (((Bindable_this.j.length | 0) <= idx$3)) {
    Bindable_this.j.push(null);
  }
  Bindable_this.j[idx$3] = \u03b4scrutinee146;
  blurLayers.push(Bindable_this);
  var mi = 0;
  while ((mi < ((mipLevels - 1) | 0))) {
    var mipSource$1 = mi;
    var mipTarget$1 = ((1 + mi) | 0);
    var Bindable_this$5 = p.aR(downBlurShade, (void 0), mipSource$1, mipTarget$1);
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
    var \u03b4scrutinee154 = e1$proxy2.o;
    var idx$4 = (Bindable_this$5.w.E.samp | 0);
    while (((Bindable_this$5.j.length | 0) <= idx$4)) {
      Bindable_this$5.j.push(null);
    }
    Bindable_this$5.j[idx$4] = \u03b4scrutinee154;
    blurLayers.push(Bindable_this$5);
    mi = ((1 + mi) | 0);
  }
  var blurPanel = p.b6((void 0), (void 0), (void 0), (void 0), (void 0), mipLevels, (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), blurLayers);
  var program$3 = new $c_Ltrivalibs_graphics_shader_dsl_LayerProgram();
  var d$3 = ({});
  var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$3), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
  var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
  var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i;
  $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = reg$2;
  try {
    var uv$4 = ctx$2.am.l("uv");
    var t$1 = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("t");
    var lod = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("lod");
    var Vec4BaseG_this = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().a4();
    var v$proxy1 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().fS($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), $m_Ltrivalibs_graphics_math_gpu_ivec2$().b5($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().f6(ctx$2.bf)));
    var x0$5 = t$1.B(Vec4BaseG_this.h1(v$proxy1));
    var $x_17 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
    var $x_16 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
    var e$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$().iF(t$1, ctx$2.P.l("blurStrength"));
    var x1$1 = lod.B($x_17.lj($x_16.l2($m_Ltrivalibs_graphics_math_gpu_LeftScalar$().aQ().aS((((("(" + $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP(1.0)) + " + ") + e$proxy2.e) + ")"))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(maxBlur)));
    var AssignTarget_this$2 = ctx$2.ad.X("color");
    var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_expr$package$().lr($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "col"), uv$4, ctx$2.P.l("samp"), lod);
    var $x_15 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$5, x1$1, (((("  " + AssignTarget_this$2.O) + " = ") + value$proxy4.e) + ";")]), "", "\n", "");
  } finally {
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().i = prev$2;
  }
  program$3.U = $x_15;
  var array$34 = reg$2.V;
  var len$4 = (array$34.length | 0);
  var i$6 = 0;
  while ((i$6 < len$4)) {
    $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$3, array$34[i$6]);
    i$6 = ((1 + i$6) | 0);
  }
  var b$3 = program$3.U;
  var helperFns$proxy3 = program$3.ah();
  var id$3 = p.p;
  p.p = ((1 + p.p) | 0);
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], []));
  var dict$5 = ({});
  var i$5$1 = 0;
  while ((i$5$1 < (names$7.length | 0))) {
    dict$5[names$7[i$5$1]] = i$5$1;
    i$5$1 = ((1 + i$5$1) | 0);
  }
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["col"], []);
  var dict$6 = ({});
  var i$6$1 = 0;
  while ((i$6$1 < (names$8.length | 0))) {
    dict$6[names$8[i$6$1]] = i$6$1;
    i$6$1 = ((1 + i$6$1) | 0);
  }
  var sd$3 = new $c_Ltrivalibs_graphics_shader_ShaderDef("  let x = f32((in.vertex_index << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(in.vertex_index & 2u) * 2.0 - 1.0;\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  out.position = vec4f(x, y, 0.0, 1.0);", b$3, helperFns$proxy3);
  var vertexInputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", [], [], $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("vertex_index", "vertex_index", "u32")], []));
  var vertexOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().a(["uv"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("position", "position", "vec4<f32>")], []));
  var fragmentOutputStruct$3 = $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().a(["color"], []), $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []), []);
  var groupDecls$3 = $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().a(["blurStrength"], $m_sjs_js_ArrayOpsCommon$().a(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$()).K.A()], $m_sjs_js_ArrayOpsCommon$().a([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).K.A()], [])));
  var fragBuiltinParams$3 = $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), $m_sjs_js_ArrayOpsCommon$().a([new $c_T3("frontFacing", "front_facing", "bool")], []));
  var baseWgsl$3 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T(sd$3, vertexInputStruct$3, vertexOutputStruct$3, fragmentOutputStruct$3, groupDecls$3, sd$3.a1, sd$3.a0, fragBuiltinParams$3);
  var wgsl$3 = (baseWgsl$3 + "\n\n@group(1) @binding(0) var col: texture_2d<f32>;");
  var args$proxy3 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([wgsl$3]));
  console.log(...$m_sjsr_Compat$().aj(args$proxy3));
  var module$3 = p.d.createShaderModule(({
    "code": wgsl$3
  }));
  var $x_20 = $m_sjs_js_ArrayOpsCommon$();
  var $x_19 = $m_sjs_js_ArrayOpsCommon$();
  var _2$5 = ({
    "type": "uniform"
  });
  var $x_18 = $m_sjs_js_ArrayOpsCommon$();
  var _2$6 = ({});
  var descriptors$3 = $x_20.a([$x_19.a([({
    "binding": 0,
    "visibility": 2,
    "buffer": _2$5
  })], $x_18.a([({
    "binding": 1,
    "visibility": 2,
    "sampler": _2$6
  })], []))], []);
  var result$3 = [];
  var len$5 = (descriptors$3.length | 0);
  var i$7 = 0;
  while ((i$7 < len$5)) {
    var x0$7 = descriptors$3[i$7];
    (result$3.push(p.d.createBindGroupLayout(({
      "entries": x0$7
    }))) | 0);
    i$7 = ((1 + i$7) | 0);
  }
  var \u03b46$$3___1 = result$3;
  var \u03b46$$3___2 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.d, result$3);
  var bgls$6 = \u03b46$$3___1;
  var $x_21 = $m_sjs_js_ArrayOpsCommon$();
  var _2$7 = ({});
  var entries$3 = $x_21.a([({
    "binding": 0,
    "visibility": 2,
    "texture": _2$7
  })], []);
  var panelBgl$3 = p.d.createBindGroupLayout(({
    "entries": entries$3
  }));
  var allBgls$3 = ((panelBgl$3 !== null) ? $m_sjs_js_ArrayOpsCommon$().a(bgls$6, [panelBgl$3]) : bgls$6);
  var pl$3 = $m_Ltrivalibs_graphics_shader_layouts$().G(p.d, allBgls$3);
  var resolveShade = new $c_Ltrivalibs_graphics_painter_Shade(id$3, module$3, null, bgls$6[0], panelBgl$3, pl$3, false, dict$5, dict$6);
  var Bindable_this$7 = p.aR(resolveShade, (void 0), (void 0), (void 0));
  var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("col", blurPanel);
  var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("blurStrength", b);
  var e3$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", sampler);
  var \u03b4scrutinee232 = e1$proxy3.o;
  var idx$5 = (Bindable_this$7.w.Z.col | 0);
  while (((Bindable_this$7.y.length | 0) <= idx$5)) {
    Bindable_this$7.y.push(null);
  }
  Bindable_this$7.y[idx$5] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee232);
  var \u03b4scrutinee236 = e2$proxy2.o;
  var idx$6 = (Bindable_this$7.w.E.blurStrength | 0);
  while (((Bindable_this$7.j.length | 0) <= idx$6)) {
    Bindable_this$7.j.push(null);
  }
  Bindable_this$7.j[idx$6] = \u03b4scrutinee236;
  var \u03b4scrutinee248 = e3$proxy2.o;
  var idx$7 = (Bindable_this$7.w.E.samp | 0);
  while (((Bindable_this$7.j.length | 0) <= idx$7)) {
    Bindable_this$7.j.push(null);
  }
  Bindable_this$7.j[idx$7] = \u03b4scrutinee248;
  var layers$2 = [Bindable_this$7];
  return new $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1(mirrorPanel, p.b6((void 0), (void 0), (void 0), (void 0), (void 0), (void 0), (void 0), "rgba16float", (void 0), (void 0), (void 0), (void 0), layers$2), b, camera, reflMat, uVp, uInvVp, p, blurPanel);
});
var $d_Lsketchlib_utils_mirror_MirrorReflection$ = new $TypeData().i($c_Lsketchlib_utils_mirror_MirrorReflection$, "sketchlib.utils.mirror.MirrorReflection$", ({
  dk: 1
}));
var $n_Lsketchlib_utils_mirror_MirrorReflection$;
function $m_Lsketchlib_utils_mirror_MirrorReflection$() {
  if ((!$n_Lsketchlib_utils_mirror_MirrorReflection$)) {
    $n_Lsketchlib_utils_mirror_MirrorReflection$ = new $c_Lsketchlib_utils_mirror_MirrorReflection$();
  }
  return $n_Lsketchlib_utils_mirror_MirrorReflection$;
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
  dm: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.ft = null;
  this.hN = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.ft = [];
  this.hN = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.m4 = (function() {
  return (import.meta.hot !== (void 0));
});
$p.ng = (function() {
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
$p.nP = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().ng()) + ":") + label);
});
$p.iQ = (function() {
  return window.sessionStorage;
});
$p.ny = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().iQ().getItem(key);
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
$p.o4 = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().iQ().setItem(key, JSON.stringify(json));
});
$p.nD = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().iQ().removeItem(key);
});
$p.mb = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().hN)) {
    $m_Ltrivalibs_dev_dev$package$().hN = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().ft.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().ft[i].gy();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.nA = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().mb();
  $m_Ltrivalibs_dev_dev$package$().ft.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().l0($m_Ltrivalibs_dev_dev$package$().ft, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().ft.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  dn: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.a8.u, cam.a8.t, cam.a8.v, cam.ar, cam.b0];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.fJ;
      var aspect$1 = cam.gl;
      var near$1 = cam.fK;
      var far$1 = cam.fI;
      cam.iP(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.lW = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().m4())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().nP(label);
    var initPos = cam.a8;
    var initRotH = cam.ar;
    var initRotV = cam.b0;
    var stored = $m_Ltrivalibs_dev_dev$package$().ny(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.gy();
      $m_Ltrivalibs_dev_dev$package$().nD(sk);
      var fov$proxy1 = cam.fJ;
      var aspect$proxy1 = cam.gl;
      var near$proxy1 = cam.fK;
      var far$proxy1 = cam.fI;
      cam.iP(fov$proxy1, aspect$proxy1, near$proxy1, far$proxy1, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().nA(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().o4(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dp: 1
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
  this.n = null;
  this.R = null;
  this.S = null;
  this.N = null;
  this.n = buffer;
  this.R = device;
  this.S = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.N = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aI)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aI: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.fw = null;
  this.fx = null;
  this.eX = null;
  this.eY = null;
  this.fu = null;
  this.fv = null;
  this.eV = null;
  this.eW = null;
  this.fw = frontTopLeft;
  this.fx = frontTopRight;
  this.eX = frontBottomLeft;
  this.eY = frontBottomRight;
  this.fu = backTopLeft;
  this.fv = backTopRight;
  this.eV = backBottomLeft;
  this.eW = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  dv: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box$() {
}
$p = $c_Ltrivalibs_graphics_geometry_Box$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box$() {
}
$h_Ltrivalibs_graphics_geometry_Box$.prototype = $p;
$p.iH = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.u;
  var cy = center.t;
  var cz = center.v;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  dw: 1
}));
var $n_Ltrivalibs_graphics_geometry_Box$;
function $m_Ltrivalibs_graphics_geometry_Box$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Box$)) {
    $n_Ltrivalibs_graphics_geometry_Box$ = new $c_Ltrivalibs_graphics_geometry_Box$();
  }
  return $n_Ltrivalibs_graphics_geometry_Box$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_BufferedGeometry(vertices, indices) {
  this.jx = null;
  this.hO = null;
  this.jx = vertices;
  this.hO = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dx: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dy: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.hP = null;
  this.aZ = null;
  this.jy = null;
  this.h8 = null;
  this.h7 = null;
  this.hP = evidence$1;
  this.aZ = [];
  this.jy = [];
  this.h8 = [];
  this.h7 = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.lL = (function(face, normal, section) {
  var faceIdx = (this.aZ.length | 0);
  this.aZ.push(face);
  this.jy.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().nu(this.hP.lo(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().mt(Object, this.h7, key)) {
      var $x_2 = this.h8;
      var dict = this.h7;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().jj.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.jD.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.h8.length | 0);
      var dict$1 = this.h7;
      dict$1[key] = idx;
      this.h8.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.hP.lo(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dB: 1
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
$p.lT = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().lM(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dC: 1
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
  this.g5 = null;
  this.g4 = 0.0;
  this.g5 = normal;
  this.g4 = d;
}
$p = $c_Ltrivalibs_graphics_geometry_Plane.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane() {
}
$h_Ltrivalibs_graphics_geometry_Plane.prototype = $p;
$p.nz = (function() {
  var a = this.g5.u;
  var b = this.g5.t;
  var c = this.g5.v;
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((1.0 - ((2.0 * a) * a)), (((-2.0) * a) * b), (((-2.0) * a) * c), 0.0, (((-2.0) * a) * b), (1.0 - ((2.0 * b) * b)), (((-2.0) * b) * c), 0.0, (((-2.0) * a) * c), (((-2.0) * b) * c), (1.0 - ((2.0 * c) * c)), 0.0, ((2.0 * a) * this.g4), ((2.0 * b) * this.g4), ((2.0 * c) * this.g4), 1.0);
});
var $d_Ltrivalibs_graphics_geometry_Plane = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane, "trivalibs.graphics.geometry.Plane", ({
  dD: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Plane$() {
  this.jz = null;
  $n_Ltrivalibs_graphics_geometry_Plane$ = this;
  this.jz = new $c_Ltrivalibs_graphics_geometry_Plane(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), 0.0);
}
$p = $c_Ltrivalibs_graphics_geometry_Plane$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Plane$;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Plane$() {
}
$h_Ltrivalibs_graphics_geometry_Plane$.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Plane$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Plane$, "trivalibs.graphics.geometry.Plane$", ({
  dE: 1
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
  this.lD = 0;
  this.lE = 0;
  this.lD = faceIndex;
  this.lE = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  dG: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.jD = null;
  this.jD = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  dL: 1
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
$p.ne = (function(idxBuf, vertexCount) {
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
  dM: 1
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
$p.lM = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.lL(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  dN: 1
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
$p.nu = (function(v) {
  return (((($doubleToInt((10000.0 * v.u)) + ",") + $doubleToInt((10000.0 * v.t))) + ",") + $doubleToInt((10000.0 * v.v)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  dO: 1
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
$p.ax = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  dQ: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Quad$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Quad$;
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.gD(m));
  var a01 = (+x$2.gE(m));
  var a02 = (+x$2.gF(m));
  var a03 = (+x$2.gG(m));
  var a10 = (+x$2.gH(m));
  var a11 = (+x$2.gI(m));
  var a12 = (+x$2.gJ(m));
  var a13 = (+x$2.gK(m));
  var a20 = (+x$2.gL(m));
  var a21 = (+x$2.gM(m));
  var a22 = (+x$2.gN(m));
  var a23 = (+x$2.gO(m));
  var a30 = (+x$2.gP(m));
  var a31 = (+x$2.gQ(m));
  var a32 = (+x$2.gR(m));
  var a33 = (+x$2.gS(m));
  var b00 = (+x$2.gD(other));
  var b01 = (+x$2.gE(other));
  var b02 = (+x$2.gF(other));
  var b03 = (+x$2.gG(other));
  var b10 = (+x$2.gH(other));
  var b11 = (+x$2.gI(other));
  var b12 = (+x$2.gJ(other));
  var b13 = (+x$2.gK(other));
  var b20 = (+x$2.gL(other));
  var b21 = (+x$2.gM(other));
  var b22 = (+x$2.gN(other));
  var b23 = (+x$2.gO(other));
  var b30 = (+x$2.gP(other));
  var b31 = (+x$2.gQ(other));
  var b32 = (+x$2.gR(other));
  var b33 = (+x$2.gS(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.gD(m));
  var a01 = (+x$2.gE(m));
  var a02 = (+x$2.gF(m));
  var a03 = (+x$2.gG(m));
  var a10 = (+x$2.gH(m));
  var a11 = (+x$2.gI(m));
  var a12 = (+x$2.gJ(m));
  var a13 = (+x$2.gK(m));
  var a20 = (+x$2.gL(m));
  var a21 = (+x$2.gM(m));
  var a22 = (+x$2.gN(m));
  var a23 = (+x$2.gO(m));
  var a30 = (+x$2.gP(m));
  var a31 = (+x$2.gQ(m));
  var a32 = (+x$2.gR(m));
  var a33 = (+x$2.gS(m));
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
  mb.l3(m, (+x$4.gD(other)));
  mb.l4(m, (+x$4.gE(other)));
  mb.l5(m, (+x$4.gF(other)));
  mb.l6(m, (+x$4.gG(other)));
  mb.l7(m, (+x$4.gH(other)));
  mb.l8(m, (+x$4.gI(other)));
  mb.l9(m, (+x$4.gJ(other)));
  mb.la(m, (+x$4.gK(other)));
  mb.lb(m, (+x$4.gL(other)));
  mb.lc(m, (+x$4.gM(other)));
  mb.ld(m, (+x$4.gN(other)));
  mb.le(m, (+x$4.gO(other)));
  mb.lf(m, (+x$4.gP(other)));
  mb.lg(m, (+x$4.gQ(other)));
  mb.lh(m, (+x$4.gR(other)));
  mb.li(m, (+x$4.gS(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.u + other.u), (v.t + other.t), (v.v + other.v));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((-v.u), (-v.t), (-v.v));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.u - other.u), (v.t - other.t), (v.v - other.v));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.u * scalar), (v.t * scalar), (v.v * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.u / scalar), (v.t / scalar), (v.v / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.t * other.v) - (v.v * other.t)), ((v.v * other.u) - (v.u * other.v)), ((v.u * other.t) - (v.t * other.u)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.hQ = 0.0;
  this.hR = 0.0;
  this.hS = 0.0;
  this.hT = 0.0;
  this.hU = 0.0;
  this.hV = 0.0;
  this.hW = 0.0;
  this.hX = 0.0;
  this.hY = 0.0;
  this.hZ = 0.0;
  this.i0 = 0.0;
  this.i1 = 0.0;
  this.i2 = 0.0;
  this.i3 = 0.0;
  this.i4 = 0.0;
  this.i5 = 0.0;
  this.hQ = m00;
  this.hR = m01;
  this.hS = m02;
  this.hT = m03;
  this.hU = m10;
  this.hV = m11;
  this.hW = m12;
  this.hX = m13;
  this.hY = m20;
  this.hZ = m21;
  this.i0 = m22;
  this.i1 = m23;
  this.i2 = m30;
  this.i3 = m31;
  this.i4 = m32;
  this.i5 = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  e2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.aC = 0.0;
  this.aD = 0.0;
  this.aE = 0.0;
  this.aB = 0.0;
  this.aC = x;
  this.aD = y;
  this.aE = z;
  this.aB = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  e5: 1
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
$p.mn = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.mo = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  e6: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(((((q.aB * p.aC) + (q.aC * p.aB)) + (q.aD * p.aE)) - (q.aE * p.aD)), ((((q.aB * p.aD) - (q.aC * p.aE)) + (q.aD * p.aB)) + (q.aE * p.aC)), ((((q.aB * p.aE) + (q.aC * p.aD)) - (q.aD * p.aC)) + (q.aE * p.aB)), ((((q.aB * p.aB) - (q.aC * p.aC)) - (q.aD * p.aD)) - (q.aE * p.aE)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.i6 = 0.0;
  this.i7 = 0.0;
  this.i6 = x;
  this.i7 = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  ea: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.u = 0.0;
  this.t = 0.0;
  this.v = 0.0;
  this.u = x;
  this.t = y;
  this.v = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  eb: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.jJ = null;
  this.jK = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.ms = (function() {
  if ((!this.jK)) {
    this.jJ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.jK = true;
  }
  return this.jJ;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  ee: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
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
$p.m = (function() {
  return this.e;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  aP: 1
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
$p.aQ = (function() {
  return new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), _$1$2))));
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$, "trivalibs.graphics.math.gpu.LeftScalar$", ({
  ei: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
function $m_Ltrivalibs_graphics_math_gpu_LeftScalar$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_LeftScalar$)) {
    $n_Ltrivalibs_graphics_math_gpu_LeftScalar$ = new $c_Ltrivalibs_graphics_math_gpu_LeftScalar$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_LeftScalar$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$() {
  this.jN = null;
  this.jO = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.aG = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.e) + ", ") + sampler.e) + ", ") + uv.e) + ")"));
});
$p.lr = (function(tex, uv, sampler, level) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("textureSampleLevel(" + tex.e) + ", ") + sampler.e) + ", ") + uv.e) + ", ") + level.e) + ")"));
});
$p.fS = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.e) + ", ") + coord.e) + ", 0)"));
});
$p.kQ = (function(tex, coord) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("textureLoad(" + tex.e) + ", ") + coord.e) + ", 0)"));
});
$p.fQ = (function() {
  if ((!this.jO)) {
    this.jN = new $c_Ltrivalibs_graphics_math_gpu_expr$package$$anon$2();
    this.jO = true;
  }
  return this.jN;
});
$p.nH = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.e) + ", ") + onTrue.e) + ", ") + cond.e) + ")"));
});
$p.mk = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " > ") + b.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  el: 1
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
  this.jP = null;
  this.jQ = false;
  this.jR = null;
  this.jS = false;
  this.jV = null;
  this.jW = false;
  this.jX = null;
  this.jY = false;
  this.jZ = null;
  this.k0 = false;
  this.jT = null;
  this.jU = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.aP = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.q = (function() {
  if ((!this.jQ)) {
    this.jP = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.jQ = true;
  }
  return this.jP;
});
$p.kY = (function() {
  if ((!this.jS)) {
    this.jR = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3();
    this.jS = true;
  }
  return this.jR;
});
$p.f3 = (function() {
  if ((!this.jW)) {
    this.jV = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4();
    this.jW = true;
  }
  return this.jV;
});
$p.ac = (function() {
  if ((!this.jY)) {
    this.jX = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.jY = true;
  }
  return this.jX;
});
$p.a4 = (function() {
  if ((!this.k0)) {
    this.jZ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.k0 = true;
  }
  return this.jZ;
});
$p.gC = (function() {
  if ((!this.jU)) {
    this.jT = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9();
    this.jU = true;
  }
  return this.jT;
});
$p.f6 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".xy"));
});
$p.h3 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  en: 1
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
$p.b5 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec2<i32>(" + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_ivec2$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_ivec2$, "trivalibs.graphics.math.gpu.ivec2$", ({
  ez: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_ivec2$;
function $m_Ltrivalibs_graphics_math_gpu_ivec2$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_ivec2$)) {
    $n_Ltrivalibs_graphics_math_gpu_ivec2$ = new $c_Ltrivalibs_graphics_math_gpu_ivec2$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_ivec2$;
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
$p.aG = (function(x, y, z) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.e) + ", ") + y.e) + ", ") + z.e) + ")"));
});
$p.b5 = (function(scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  eA: 1
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
$p.kJ = (function(x, y, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((((("vec4<f32>(" + x.e) + ", ") + y.e) + ", ") + z.e) + ", ") + w.e) + ")"));
});
$p.aH = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.e) + ", ") + w.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  eB: 1
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
  this.o = null;
  this.o = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  eC: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_BlendState$() {
  this.k1 = null;
  $n_Ltrivalibs_graphics_painter_BlendState$ = this;
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one-minus-src-alpha"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one-minus-src-alpha"));
  this.k1 = new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("src-alpha", "one"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("one", "one"));
  new ($a_Ltrivalibs_graphics_painter_BlendState())(new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst", "zero"), new ($a_Ltrivalibs_graphics_painter_BlendFn())("dst-alpha", "zero"));
}
$p = $c_Ltrivalibs_graphics_painter_BlendState$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BlendState$;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BlendState$() {
}
$h_Ltrivalibs_graphics_painter_BlendState$.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BlendState$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_BlendState$, "trivalibs.graphics.painter.BlendState$", ({
  eD: 1
}));
var $n_Ltrivalibs_graphics_painter_BlendState$;
function $m_Ltrivalibs_graphics_painter_BlendState$() {
  if ((!$n_Ltrivalibs_graphics_painter_BlendState$)) {
    $n_Ltrivalibs_graphics_painter_BlendState$ = new $c_Ltrivalibs_graphics_painter_BlendState$();
  }
  return $n_Ltrivalibs_graphics_painter_BlendState$;
}
function $p_Ltrivalibs_graphics_painter_Form__uploadIndices__sjs_js_typedarray_TypedArray__V($thiz, raw) {
  if ((!(!(raw instanceof Uint16Array)))) {
    var \u03b41$___1 = raw.buffer;
    var \u03b41$___2 = (raw.length | 0);
    var \u03b41$___3 = "uint16";
  } else {
    var \u03b41$___1 = raw.buffer;
    var \u03b41$___2 = (raw.length | 0);
    var \u03b41$___3 = "uint32";
  }
  var ab = \u03b41$___1;
  var count = (\u03b41$___2 | 0);
  var fmt = \u03b41$___3;
  var $x_1 = $thiz.g6.d;
  var value = (ab.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 24
  }));
  $thiz.g6.av.writeBuffer(buf, 0.0, ab);
  if (($thiz.fy !== null)) {
    var opt$proxy2 = $thiz.fy;
    opt$proxy2.destroy();
  }
  $thiz.fy = buf;
  $thiz.h9 = count;
  $thiz.i9 = fmt;
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V($thiz, verts) {
  var $x_1 = $thiz.g6.d;
  var value = (verts.dv.buffer.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 40
  }));
  $thiz.g6.av.writeBuffer(buf, 0.0, verts.dv.buffer);
  if (($thiz.g7 !== null)) {
    var opt$proxy4 = $thiz.g7;
    opt$proxy4.destroy();
  }
  $thiz.g7 = buf;
  $thiz.ha = (verts.off | 0);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.g6 = null;
  this.g7 = null;
  this.ha = 0;
  this.fy = null;
  this.h9 = 0;
  this.i9 = null;
  this.ia = null;
  this.i8 = null;
  this.g6 = painter;
  this.g7 = null;
  this.ha = 0;
  this.fy = null;
  this.h9 = 0;
  this.i9 = "uint16";
  this.ia = "triangle-list";
  this.i8 = "ccw";
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.nJ = (function(geometry, vertices, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.ia = topology;
  }
  if ((frontFace !== (void 0))) {
    this.i8 = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, geometry.jx);
    if ((geometry.hO !== null)) {
      $p_Ltrivalibs_graphics_painter_Form__uploadIndices__sjs_js_typedarray_TypedArray__V(this, geometry.hO);
    }
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, vertices);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  eE: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.hb = null;
  this.hb = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.J = (function() {
  return (this.hb.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  eF: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.o0();
  var h = $thiz.mv();
  panel.mc(w, h);
  var msaa = panel.fG;
  var encoder = $thiz.d.createCommandEncoder();
  var panelFormats = panel.iK();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.nS())) {
    if ((panel.hk !== null)) {
      matchResult6: {
        var \u03b412$;
        var x18 = panel.hk;
        if ((x18 !== null)) {
          var x19 = $f_s_Product4__productElement__I__O(x18, 0);
          var x20 = $f_s_Product4__productElement__I__O(x18, 1);
          var x21 = $f_s_Product4__productElement__I__O(x18, 2);
          var x22 = $f_s_Product4__productElement__I__O(x18, 3);
          var \u03b412$ = x18;
          break matchResult6;
        }
        throw new $c_s_MatchError(x18);
      }
      var r$2 = (+\u03b412$.eq);
      var g$2 = (+\u03b412$.b8);
      var b$2 = (+\u03b412$.b9);
      var a$2 = (+\u03b412$.ba);
      if (msaa) {
        var _2 = panel.ll(t);
        var _2$1 = panel.hE(t);
        var _2$2 = ({
          "r": r$2,
          "g": g$2,
          "b": b$2,
          "a": a$2
        });
        var attachment = ({
          "view": _2,
          "resolveTarget": _2$1,
          "loadOp": "clear",
          "storeOp": "discard",
          "clearValue": _2$2
        });
      } else {
        var _2$3 = panel.hE(t);
        var _2$4 = ({
          "r": r$2,
          "g": g$2,
          "b": b$2,
          "a": a$2
        });
        var attachment = ({
          "view": _2$3,
          "loadOp": "clear",
          "storeOp": "store",
          "clearValue": _2$4
        });
      }
    } else if (msaa) {
      var _2$5 = panel.ll(t);
      var _2$6 = panel.hE(t);
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var _2$7 = panel.hE(t);
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
  if (panel.gh) {
    var _2$8 = panel.kR();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.hl.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.hl[i], panel.gh, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.av.submit([encoder.finish()]);
  if (panel.gc) {
    $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
  var srcView = panel.nT();
  var dstView = panel.nt();
  var hasPongLayers = false;
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.be.length | 0))) {
    var layer = panel.be[j];
    var hasPanelLayout = (layer.w.gk !== null);
    var slot0Manual = ((hasPanelLayout && ((layer.y.length | 0) > 0)) && (layer.y[0] !== null));
    var needsPingPong = (hasPanelLayout && (!slot0Manual));
    if ((layer.g8 >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.av.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.gX(0, layer.g8);
      var mipSrcView = ((layer.hc >= 0) ? panel.gX(0, layer.hc) : srcView);
      var enc = $thiz.d.createCommandEncoder();
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
      $thiz.av.submit([enc.finish()]);
    } else if (needsPingPong) {
      hasPongLayers = true;
      if ((curPass !== null)) {
        curPass.end();
        $thiz.av.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.d.createCommandEncoder();
      var _2$10 = dstView;
      var _2$11 = [({
        "view": _2$10,
        "loadOp": "load",
        "storeOp": "store"
      })];
      var ppPass = enc$2.beginRenderPass(({
        "colorAttachments": _2$11
      }));
      $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, ppPass, layer, false, false, panelFormats, srcView, panel);
      ppPass.end();
      $thiz.av.submit([enc$2.finish()]);
      var tmp = srcView;
      srcView = dstView;
      dstView = tmp;
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.d.createCommandEncoder();
        var $x_1 = curEncoder;
        var _2$12 = srcView;
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
    $thiz.av.submit([curEncoder.finish()]);
  }
  if (hasPongLayers) {
    panel.gd = srcView;
  } else {
    panel.gd = null;
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.be.length | 0))) {
    if ((panel.be[mi].g8 >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.iN() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.k8)) {
    $thiz.k7 = $thiz.d.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.k8 = true;
  }
  return $thiz.k7;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.k4)) {
    var $x_2 = $thiz.d;
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
    $thiz.k3 = $x_1;
    $thiz.k4 = true;
  }
  return $thiz.k3;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.k6)) {
    var module = $thiz.d.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.d;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pipelineLayout = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.d;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var f$proxy4 = $thiz.fA;
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
    $thiz.k5 = $x_2;
    $thiz.k6 = true;
  }
  return $thiz.k5;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.kb)) {
    var $x_2 = $thiz.d;
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
    $thiz.ka = $x_1;
    $thiz.kb = true;
  }
  return $thiz.ka;
}
function $p_Ltrivalibs_graphics_painter_Painter__depthResolvePipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.kd)) {
    var module = $thiz.d.createShaderModule(({
      "code": "\n@group(0) @binding(0) var ms_depth: texture_depth_multisampled_2d;\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> @builtin(position) vec4f {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  return vec4f(x, y, 0.0, 1.0);\n}\n\n@fragment\nfn fs_main(@builtin(position) pos: vec4f) -> @builtin(frag_depth) f32 {\n  return textureLoad(ms_depth, vec2i(pos.xy), 0);\n}\n"
    }));
    var $x_1 = $thiz.d;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.d;
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
    $thiz.kc = $x_2;
    $thiz.kd = true;
  }
  return $thiz.kc;
}
function $p_Ltrivalibs_graphics_painter_Painter__resolvePanelDepth__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var encoder = $thiz.d.createCommandEncoder();
  var _2 = [];
  var _2$1 = panel.nE();
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
  var $x_1 = $thiz.d;
  var _2$3 = $p_Ltrivalibs_graphics_painter_Painter__depthResolveBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz);
  var _2$4 = panel.kR();
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
  $thiz.av.submit([encoder.finish()]);
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.kf)) {
    $thiz.ke = $thiz.d.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.kf = true;
  }
  return $thiz.ke;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.hd.hasOwnProperty(format)))))) {
    return $thiz.hd[format];
  } else {
    var module = $thiz.d.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.d;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_2 = $thiz.d;
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
    $thiz.hd[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.iN();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.fF.length | 0) > 0) ? panel.fF[0] : $thiz.fA);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.gX(0, ((i - 1) | 0));
    var dstView = panel.gX(0, i);
    var encoder = $thiz.d.createCommandEncoder();
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
    var $x_1 = $thiz.d;
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
    $thiz.av.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.aq.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.aq[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.a6.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.a6[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.gj;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.E.hasOwnProperty(name)))))) {
      var idx = (shade.E[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.Z.hasOwnProperty(name)))))) {
      var idx$2 = (shade.Z[name] | 0);
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
  while ((i < (inst.kM().length | 0))) {
    if ((inst.kM()[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.kM()[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.lm().length | 0))) {
    if ((inst.lm()[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.lm()[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.gj).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.id !== null))) {
    var entries = [];
    var i = 0;
    while ((i < (bindings.length | 0))) {
      var b = bindings[i];
      if ((b !== null)) {
        entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.d;
    var _2 = shade.id;
    var bg = $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
    pass.setBindGroup(0, bg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shade, panelBindings, srcView) {
  if ((shade.gk !== null)) {
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
        var view = ((!(!pb.depth)) ? pb.panel.m3() : pb.panel.gX((pb.index | 0), (pb.mipLevel | 0)));
        var value = k;
        entries.push(({
          "binding": value,
          "resource": view
        }));
      }
      k = ((1 + k) | 0);
    }
    if (((entries.length | 0) > 0)) {
      var $x_1 = $thiz.d;
      var _2 = shade.gk;
      var pg = $x_1.createBindGroup(({
        "layout": _2,
        "entries": entries
      }));
      pass.setBindGroup(1, pg);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.fA]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.F, shape.ig, fmts, depthTest, multisample, shape.aF.ia, shape.ih, shape.aF.i8);
  pass.setPipeline(pipeline);
  pass.setVertexBuffer(0, shape.aF.g7);
  var opt$proxy9 = shape.aF.fy;
  var hasIndex = (opt$proxy9 !== null);
  if (hasIndex) {
    pass.setIndexBuffer(shape.aF.fy, shape.aF.i9);
  }
  var instanceCount = shape.ii.J();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.k, shape.T);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.F, $thiz.aq, $thiz.a6);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.F, $thiz.aq);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.F, $thiz.a6, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.F, shape.k);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.F, shape.T, null);
    }
    if (hasIndex) {
      pass.drawIndexed(shape.aF.h9);
    } else {
      pass.draw(shape.aF.ha);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.ii.hb[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.k, shape.T);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.F, $thiz.aq, $thiz.a6);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.aq, $thiz.a6);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.F, $thiz.aq);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.F, $thiz.a6, null);
      if (hasIndex) {
        pass.drawIndexed(shape.aF.h9);
      } else {
        pass.draw(shape.aF.ha);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.fA]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.w, layer.ib, fmts, depthTest, multisample, "triangle-list", "none", "ccw");
  pass.setPipeline(pipeline);
  var instanceCount = layer.ic.J();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.j, layer.y);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.w, $thiz.aq, $thiz.a6);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.w, $thiz.aq);
      var effectiveSrcView = (((($thiz.a6.length | 0) > 0) && ($thiz.a6[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.w, $thiz.a6, effectiveSrcView);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.w, layer.j);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.w, layer.y, srcView);
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.ic.hb[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.j, layer.y);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.w, $thiz.aq, $thiz.a6);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.aq, $thiz.a6);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.w, $thiz.aq);
      var effectiveSrcView$2 = (((($thiz.a6.length | 0) > 0) && ($thiz.a6[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.w, $thiz.a6, effectiveSrcView$2);
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
function $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shade, blendState, formats, depthTest, multisample, topology, cullMode, frontFace) {
  var key = ((((((((((((((shade.ki + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace);
  if ((!(!(!(!$thiz.he.hasOwnProperty(key)))))) {
    return $thiz.he[key];
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
    if ((shade.ie !== null)) {
      var _2 = shade.ho;
      var _2$1 = [shade.ie];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.ho;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.kj;
    var _2$4 = shade.ho;
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
    var p = $thiz.d.createRenderPipeline(desc);
    $thiz.he[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.N;
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
  this.d = null;
  this.av = null;
  this.fz = null;
  this.k9 = null;
  this.fA = null;
  this.he = null;
  this.p = 0;
  this.hf = null;
  this.kg = null;
  this.kh = false;
  this.k7 = null;
  this.k8 = false;
  this.k3 = null;
  this.k4 = false;
  this.k5 = null;
  this.k6 = false;
  this.ka = null;
  this.kb = false;
  this.kc = null;
  this.kd = false;
  this.ke = null;
  this.kf = false;
  this.hd = null;
  this.aq = null;
  this.a6 = null;
  this.d = device;
  this.av = queue;
  this.fz = canvas;
  this.k9 = context;
  this.fA = preferredFormat;
  this.he = ({});
  this.p = 0;
  this.hf = [];
  this.hd = ({});
  this.aq = [];
  this.a6 = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.nl = (function(cb) {
  this.hf.push(cb);
  cb.kI((this.fz.width | 0), (this.fz.height | 0));
});
$p.mi = (function(w, h) {
  var k = 0;
  while ((k < (this.hf.length | 0))) {
    this.hf[k].kI(w, h);
    k = ((1 + k) | 0);
  }
});
$p.o0 = (function() {
  return (this.fz.width | 0);
});
$p.mv = (function() {
  return (this.fz.height | 0);
});
$p.nG = (function() {
  if ((!this.kh)) {
    this.kg = this.d.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    this.kh = true;
  }
  return this.kg;
});
$p.iO = (function(magFilter, minFilter, mipmapFilter, addressMode, addressModeU, addressModeV) {
  var $x_1 = this.d;
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
$p.ml = (function(geometry, vertices, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).nJ(geometry, vertices, topology, frontFace);
});
$p.fU = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).nL(cullMode, blendState);
});
$p.aR = (function(shade, blendState, mipSource, mipTarget) {
  return new $c_Ltrivalibs_graphics_painter_Layer(this, shade).nK(blendState, mipSource, mipTarget);
});
$p.b6 = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).nI(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.nM = (function(panel) {
  var encoder = this.d.createCommandEncoder();
  var swapChainView = this.k9.getCurrentTexture().createView();
  var _2 = [({
    "view": swapChainView,
    "loadOp": "load",
    "storeOp": "store"
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2
  }));
  var $x_1 = this.d;
  var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
  var _2$2 = panel.no();
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
  this.av.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  eH: 1
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
$p.my = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().mr();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).aL;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().mq(canvas);
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
            painter.mi(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().gB(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().gB(f$proxy11));
  }
});
$p.mx = (function(canvas, setup) {
  var promise$proxy4 = this.my(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().gB(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  eI: 1
}));
var $n_Ltrivalibs_graphics_painter_Painter$;
function $m_Ltrivalibs_graphics_painter_Painter$() {
  if ((!$n_Ltrivalibs_graphics_painter_Painter$)) {
    $n_Ltrivalibs_graphics_painter_Painter$ = new $c_Ltrivalibs_graphics_painter_Painter$();
  }
  return $n_Ltrivalibs_graphics_painter_Painter$;
}
function $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V($thiz) {
  if (($thiz.ga !== null)) {
    var opt$proxy6 = $thiz.ga;
    opt$proxy6.destroy();
  }
  if (($thiz.gf !== null)) {
    var opt$proxy8 = $thiz.gf;
    opt$proxy8.destroy();
  }
  var depthUsage = ($thiz.g9 ? 20 : 16);
  var $x_1 = $thiz.f0.d;
  var value = $thiz.fE;
  var value$1 = $thiz.fB;
  var _2 = ({
    "width": value,
    "height": value$1
  });
  var _2$1 = ($thiz.fG ? 4 : 1);
  var depthTex = $x_1.createTexture(({
    "size": _2,
    "format": "depth24plus",
    "usage": depthUsage,
    "sampleCount": _2$1
  }));
  $thiz.ga = depthTex;
  $thiz.hg = depthTex.createView();
  if (($thiz.g9 && $thiz.fG)) {
    var $x_2 = $thiz.f0.d;
    var value$2 = $thiz.fE;
    var value$3 = $thiz.fB;
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
    $thiz.gf = resTex;
    $thiz.gg = resTex.createView();
    $thiz.gc = true;
  } else {
    $thiz.gf = null;
    $thiz.gg = null;
    $thiz.gc = false;
  }
}
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.be.length | 0))) {
    if (($thiz.be[i].w.gk !== null)) {
      return true;
    }
    i = ((1 + i) | 0);
  }
  return false;
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
  this.f0 = null;
  this.hn = 0;
  this.hm = 0;
  this.hk = null;
  this.gh = false;
  this.fG = false;
  this.gi = 0;
  this.fF = null;
  this.hl = null;
  this.be = null;
  this.gj = null;
  this.fD = null;
  this.eZ = null;
  this.hj = null;
  this.ge = null;
  this.hi = null;
  this.ga = null;
  this.hg = null;
  this.g9 = false;
  this.gf = null;
  this.gg = null;
  this.gc = false;
  this.gb = null;
  this.hh = null;
  this.gd = null;
  this.fE = 0;
  this.fB = 0;
  this.fC = null;
  this.f0 = painter;
  this.hn = 0;
  this.hm = 0;
  this.hk = null;
  this.gh = false;
  this.fG = false;
  this.gi = 1;
  this.fF = [];
  this.hl = [];
  this.be = [];
  this.gj = ({});
  this.fD = [];
  this.eZ = [];
  this.hj = [];
  this.ge = [];
  this.hi = [];
  this.ga = null;
  this.hg = null;
  this.g9 = false;
  this.gf = null;
  this.gg = null;
  this.gc = false;
  this.gb = [];
  this.hh = [];
  this.gd = null;
  this.fE = 0;
  this.fB = 0;
  this.fC = ({});
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.iN = (function() {
  if ((this.gi === 0)) {
    var a = this.fE;
    var b = this.fB;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.gi;
  }
});
$p.iK = (function() {
  return (((this.fF.length | 0) === 0) ? [this.f0.fA] : this.fF);
});
$p.nS = (function() {
  return (this.iK().length | 0);
});
$p.nT = (function() {
  return this.eZ[0];
});
$p.nt = (function() {
  return this.hi[0];
});
$p.kR = (function() {
  return this.hg;
});
$p.nE = (function() {
  return this.gg;
});
$p.no = (function() {
  return ((this.gd !== null) ? this.gd : this.eZ[0]);
});
$p.gX = (function(index, mipLevel) {
  if ((mipLevel < 0)) {
    var sv = this.hj[index];
    return ((sv !== null) ? sv : this.eZ[index]);
  } else {
    var key = ((index + "|") + mipLevel);
    if ((!(!(!(!this.fC.hasOwnProperty(key)))))) {
      return this.fC[key];
    } else {
      var view = this.fD[index].createView(({
        "baseMipLevel": mipLevel,
        "mipLevelCount": 1
      }));
      this.fC[key] = view;
      return view;
    }
  }
});
$p.hE = (function(index) {
  return this.eZ[index];
});
$p.ll = (function(index) {
  return this.hh[index];
});
$p.m3 = (function() {
  if (((!this.g9) && (this.ga !== null))) {
    this.g9 = true;
    $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
  }
  return (this.gc ? this.gg : this.hg);
});
$p.kL = (function(index, mipLevel, depth) {
  return new ($a_Ltrivalibs_graphics_painter_PanelBinding())(this, index, mipLevel, depth);
});
$p.nI = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.hn = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.hm = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.hk = clearColor;
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.gh = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.fG = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.gi = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.gi = v$5;
    }
  }
  var x = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x !== (void 0))) {
    this.fF = x;
  }
  var x$1 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$1 !== (void 0))) {
    this.hl = x$1;
  }
  var x$2 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$2 !== (void 0))) {
    this.be = x$2;
  }
  return this;
});
$p.mc = (function(canvasW, canvasH) {
  var targetW = ((this.hn === 0) ? canvasW : this.hn);
  var targetH = ((this.hm === 0) ? canvasH : this.hm);
  if (((targetW !== this.fE) || (targetH !== this.fB))) {
    var d = 0;
    while ((d < (this.fD.length | 0))) {
      this.fD[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.ge.length | 0))) {
      this.ge[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.gb.length | 0))) {
      this.gb[d].destroy();
      d = ((1 + d) | 0);
    }
    this.fE = targetW;
    this.fB = targetH;
    var mipKeys = Object.keys(this.fC);
    var mk = 0;
    while ((mk < (mipKeys.length | 0))) {
      delete this.fC[mipKeys[mk]];
      mk = ((1 + mk) | 0);
    }
    var mipCount = this.iN();
    var fmts = this.iK();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.fD = [];
    this.eZ = [];
    this.hj = [];
    this.ge = [];
    this.hi = [];
    this.gb = [];
    this.hh = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.f0.d;
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
      this.fD.push(tex);
      this.eZ.push(tex.createView(({
        "baseMipLevel": 0,
        "mipLevelCount": 1
      })));
      this.hj.push(((mipCount > 1) ? tex.createView() : null));
      if (hasPong) {
        var $x_2 = this.f0.d;
        var _2$1 = ({
          "width": targetW,
          "height": targetH
        });
        var pongTex = $x_2.createTexture(({
          "size": _2$1,
          "format": fmt,
          "usage": 20,
          "mipLevelCount": mipCount
        }));
        this.ge.push(pongTex);
        this.hi.push(pongTex.createView(({
          "baseMipLevel": 0,
          "mipLevelCount": 1
        })));
      }
      if (this.fG) {
        var $x_3 = this.f0.d;
        var _2$2 = ({
          "width": targetW,
          "height": targetH
        });
        var msaaTex = $x_3.createTexture(({
          "size": _2$2,
          "format": fmt,
          "sampleCount": 4,
          "usage": 16
        }));
        this.gb.push(msaaTex);
        this.hh.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (this.gh) {
      $p_Ltrivalibs_graphics_painter_Panel__allocDepth__V(this);
    }
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  eJ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.ki = 0;
  this.ho = null;
  this.ie = null;
  this.id = null;
  this.gk = null;
  this.kj = null;
  this.E = null;
  this.Z = null;
  this.ki = id;
  this.ho = shaderModule;
  this.ie = vertexBufferLayout;
  this.id = valueBindGroupLayout;
  this.gk = panelBindGroupLayout;
  this.kj = pipelineLayout;
  this.E = uniformIndices;
  this.Z = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  eK: 1
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
$p.mr = (function() {
  return window.navigator.gpu;
});
$p.mq = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  eM: 1
}));
var $n_Ltrivalibs_graphics_painter_WebGPU$;
function $m_Ltrivalibs_graphics_painter_WebGPU$() {
  if ((!$n_Ltrivalibs_graphics_painter_WebGPU$)) {
    $n_Ltrivalibs_graphics_painter_WebGPU$ = new $c_Ltrivalibs_graphics_painter_WebGPU$();
  }
  return $n_Ltrivalibs_graphics_painter_WebGPU$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(cam, in$1, sensitivity, speed) {
  this.kk = null;
  this.a7 = null;
  this.ij = 0.0;
  this.kl = 0.0;
  this.kk = cam;
  this.a7 = in$1;
  this.ij = sensitivity;
  this.kl = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.gZ = (function(tpf) {
  var dist = ((this.kl * tpf) / 1000.0);
  var backward = (((this.a7.ae.aI("KeyS") || this.a7.ae.aI("ArrowDown")) || this.a7.ae.mB(2)) || (this.a7.ae.ln() >= 2));
  var forward = 0.0;
  if (((this.a7.ae.aI("KeyW") || this.a7.ae.aI("ArrowUp")) || (this.a7.ix.f1 && (this.a7.ae.ln() < 2)))) {
    forward = (forward + dist);
  }
  if (backward) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((this.a7.ae.aI("KeyA") || this.a7.ae.aI("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((this.a7.ae.aI("KeyD") || this.a7.ae.aI("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (this.a7.ae.aI("Space")) {
    up = (up + dist);
  }
  if ((this.a7.ae.aI("ShiftLeft") || this.a7.ae.aI("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = this.a7.iw.m2();
  var deltaH = (((-(+drag.Y)) * this.ij) / 1000.0);
  var deltaV = (((-(+drag.ao)) * this.ij) / 1000.0);
  this.kk.ni(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  eN: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.fJ = 0.0;
  this.gl = 0.0;
  this.fK = 0.0;
  this.fI = 0.0;
  this.ar = 0.0;
  this.b0 = 0.0;
  this.a8 = null;
  this.hp = null;
  this.fJ = fov;
  this.gl = aspect;
  this.fK = near;
  this.fI = far;
  this.ar = rotH;
  this.b0 = rotV;
  this.a8 = pos;
  this.hp = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.iP = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.fJ) || (aspect !== this.gl)) || (near !== this.fK)) || (far !== this.fI));
  this.fJ = fov;
  this.gl = aspect;
  this.fK = near;
  this.fI = far;
  if ((rotH !== this.ar)) {
    this.ar = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iT(rotH);
  }
  if ((rotV !== this.b0)) {
    this.b0 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iS(rotV);
  }
  this.a8 = pos;
  if (needsProj) {
    this.hp = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  }
});
$p.ni = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.ar = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iT((this.ar + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.b0 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iS((this.b0 + deltaV));
  }
  if ((up !== 0.0)) {
    this.a8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.a8.u, (this.a8.t + up), this.a8.v);
  }
  if ((forward !== 0.0)) {
    var $x_4 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().W();
    var $x_3 = this.a8;
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().W();
    var p$proxy1 = this.ar;
    var x$1 = (-(+Math.sin(p$proxy1)));
    var p$proxy2 = this.ar;
    this.a8 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_4, $x_3, $x_2, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_1, new $c_Ltrivalibs_graphics_math_cpu_Vec3(x$1, 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_9 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().W();
    var $x_8 = this.a8;
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_6 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().W();
    var p$proxy3 = this.ar;
    var $x_5 = Math.cos(p$proxy3);
    var p$proxy4 = this.ar;
    this.a8 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_9, $x_8, $x_7, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_5)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.nV = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.a8, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().mo(this.ar), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().mn(this.b0)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.lw = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().fR();
  var t = this.nV();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().mp(t.ko, t.km, t.kn), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  eO: 1
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
$p.iT = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.iS = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.lP = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.iT(rotH), this.iS(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  eP: 1
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
  this.ko = null;
  this.km = null;
  this.kn = null;
  this.ko = translation;
  this.km = rotation;
  this.kn = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  eQ: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__buildFragBuiltinParams__sjs_js_Array__T($thiz, builtins) {
  var s = "";
  var i = 0;
  while ((i < (builtins.length | 0))) {
    var b = builtins[i];
    s = ((s + ((((", @builtin(" + b.aT) + ") ") + b.b7) + ": ")) + b.aU);
    i = ((1 + i) | 0);
  }
  return s;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().lA($m_sjs_js_ArrayOps$().lz(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.Y;
        if ((x11 !== null)) {
          var name = x11.Y;
          var typ = x11.ao;
          var $x_1 = (((((("  @location(" + (x0.ao | 0)) + ") ") + name) + ": ") + typ) + ",");
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
        var name$1 = x0$1.b7;
        var builtin = x0$1.aT;
        var typ$1 = x0$1.aU;
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
  var array$1 = $m_sjs_js_ArrayOps$().lA($m_sjs_js_ArrayOps$().lz(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.Y;
        if ((x20 !== null)) {
          var name = x20.Y;
          var typ = x20.ao;
          var bindingIdx = (x0.ao | 0);
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
  eT: 1
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
  this.O = null;
  this.O = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  eU: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.ik = null;
  this.V = null;
  this.ik = ({});
  this.V = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.lv = (function(d) {
  if ((!(!(!(!(!this.ik.hasOwnProperty(d.name))))))) {
    this.ik[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.lv(array[i]);
      i = ((1 + i) | 0);
    }
    this.V.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  eV: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.i = null;
  this.i = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.gY = (function(d) {
  var r = this.i;
  if ((r !== null)) {
    r.lv(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  eW: 1
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
  this.am = null;
  this.ad = null;
  this.P = null;
  this.lF = null;
  this.bf = null;
  this.am = in$1;
  this.ad = out;
  this.P = bindings;
  this.lF = textures;
  this.bf = $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "in.position");
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  eX: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.il.hasOwnProperty(data.name))))))) {
    var dict = $thiz.il;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_LayerProgram__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.im.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
  this.U = null;
  this.im = null;
  this.il = null;
  this.U = "";
  this.im = [];
  this.il = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_LayerProgram;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_LayerProgram() {
}
$h_Ltrivalibs_graphics_shader_dsl_LayerProgram.prototype = $p;
$p.ah = (function() {
  return this.im.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_LayerProgram = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_LayerProgram, "trivalibs.graphics.shader.dsl.LayerProgram", ({
  eY: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.io.hasOwnProperty(data.name))))))) {
    var dict = $thiz.io;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.ip.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.b2 = null;
  this.b1 = null;
  this.ip = null;
  this.io = null;
  this.b2 = "";
  this.b1 = "";
  this.ip = [];
  this.io = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.ah = (function() {
  return this.ip.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  eZ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.b3 = null;
  this.b4 = null;
  this.hq = null;
  this.b3 = in$1;
  this.b4 = out;
  this.hq = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  f4: 1
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
$p.lH = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  f6: 1
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
$p.gT = (function(fn) {
  return fn.name;
});
$p.f7 = (function(fn, ds) {
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
  ds.gA(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  f7: 1
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
$p.G = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  f8: 1
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
  this.kq = null;
  this.hr = null;
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
  new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("gaussian_blur_9", src$3);
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
  this.kq = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("box_blur_2d_auto", src$8);
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
  this.hr = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tent_blur_2d_auto", src$9);
}
$p = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_blur_Blur$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
}
$h_Ltrivalibs_graphics_shader_lib_blur_Blur$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_blur_Blur$, "trivalibs.graphics.shader.lib.blur.Blur$", ({
  f9: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
function $m_Ltrivalibs_graphics_shader_lib_blur_Blur$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_blur_Blur$)) {
    $n_Ltrivalibs_graphics_shader_lib_blur_Blur$ = new $c_Ltrivalibs_graphics_shader_lib_blur_Blur$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_blur_Blur$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$() {
  this.kr = null;
  this.ks = null;
  this.kt = null;
  this.is = null;
  this.it = null;
  this.ku = null;
  $n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$ = this;
  var names = $m_sjs_js_ArrayOpsCommon$().a(["x"], []);
  var types = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []);
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn mod289v3f(" + paramList) + ") -> vec3<f32> {\n  return x - floor(x / 289.0) * 289.0;\n}");
  this.kr = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("mod289v3f", src);
  var names$2 = $m_sjs_js_ArrayOpsCommon$().a(["x"], []);
  var types$2 = $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []);
  var parts$2 = [];
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    parts$2.push(((names$2[i$2] + ": ") + types$2[i$2]));
    i$2 = ((1 + i$2) | 0);
  }
  var paramList$2 = parts$2.join(", ");
  var src$2 = (("fn mod289v4f(" + paramList$2) + ") -> vec4<f32> {\n  return x - floor(x / 289.0) * 289.0;\n}");
  this.ks = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("mod289v4f", src$2);
  var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$3 = $m_sjs_js_ArrayOpsCommon$().a(["i"], []);
  var types$3 = $m_sjs_js_ArrayOpsCommon$().a(["vec4<f32>"], []);
  var parts$3 = [];
  var i$3 = 0;
  while ((i$3 < (names$3.length | 0))) {
    parts$3.push(((names$3[i$3] + ": ") + types$3[i$3]));
    i$3 = ((1 + i$3) | 0);
  }
  var paramList$3 = parts$3.join(", ");
  var src$3 = (("fn permute289v4f(" + paramList$3) + ") -> vec4<f32> {\n\n  var im: vec4<f32> = mod289v4f(i);\n  return mod289v4f((im*34.0 + 10.0)*im);\n}");
  this.kt = $x_1.f7(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute289v4f", src$3), new $c_sjsr_WrappedVarArgs([this.ks]));
  var $x_2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$4 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["period"], $m_sjs_js_ArrayOpsCommon$().a(["normRot"], [])));
  var types$4 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], [])));
  var parts$4 = [];
  var i$4 = 0;
  while ((i$4 < (names$4.length | 0))) {
    parts$4.push(((names$4[i$4] + ": ") + types$4[i$4]));
    i$4 = ((1 + i$4) | 0);
  }
  var paramList$4 = parts$4.join(", ");
  var src$4 = (("fn tiling_rot_noise_2d(" + paramList$4) + ") -> vec3<f32> {\n\n  let alpha = normRot * 6.28318530718;\n  var uv: vec2<f32>;\n  var f0: vec2<f32>;\n  var i0: vec2<f32>;\n  var i1: vec2<f32>;\n  var i2: vec2<f32>;\n  var o1: vec2<f32>;\n  var v0: vec2<f32>;\n  var v1: vec2<f32>;\n  var v2: vec2<f32>;\n  var x0: vec2<f32>;\n  var x1: vec2<f32>;\n  var x2: vec2<f32>;\n  uv = vec2<f32>(pos.x+pos.y*0.5, pos.y);\n  i0 = floor(uv);\n  f0 = uv - i0;\n  o1 = select(vec2<f32>(0.0,1.0), vec2<f32>(1.0, 0.0), f0.x > f0.y);\n  i1 = i0 + o1;\n  i2 = i0 + vec2<f32>(1.0, 1.0);\n  v0 = vec2<f32>(i0.x - i0.y*0.5, i0.y);\n  v1 = vec2<f32>(v0.x + o1.x - o1.y*0.5, v0.y + o1.y);\n  v2 = vec2<f32>(v0.x + 0.5, v0.y + 1.0);\n  x0 = pos - v0;\n  x1 = pos - v1;\n  x2 = pos - v2;\n  var iu: vec3<f32>;\n  var iv: vec3<f32>;\n  var xw: vec3<f32>;\n  var yw: vec3<f32>;\n  if(any(period > vec2<f32>(0.0, 0.0))) {\n    xw = vec3<f32>(v0.x, v1.x, v2.x);\n    yw = vec3<f32>(v0.y, v1.y, v2.y);\n    if(period.x > 0.0) {\n      xw = xw - floor(vec3<f32>(v0.x, v1.x, v2.x) / period.x) * period.x;\n    }\n    if(period.y > 0.0) {\n      yw = yw - floor(vec3<f32>(v0.y, v1.y, v2.y) / period.y) * period.y;\n    }\n    iu = floor(xw + 0.5*yw + 0.5);\n    iv = floor(yw + 0.5);\n  } else {\n    iu = vec3<f32>(i0.x, i1.x, i2.x);\n    iv = vec3<f32>(i0.y, i1.y, i2.y);\n  }\n  var hash: vec3<f32>;\n  var psi: vec3<f32>;\n  var gx: vec3<f32>;\n  var gy: vec3<f32>;\n  var g0: vec2<f32>;\n  var g1: vec2<f32>;\n  var g2: vec2<f32>;\n  hash = mod289v3f(iu);\n  hash = mod289v3f((hash*51.0 + 2.0)*hash + iv);\n  hash = mod289v3f((hash*34.0 + 10.0)*hash);\n  psi = hash*0.07482 + alpha;\n  gx = cos(psi);\n  gy = sin(psi);\n  g0 = vec2<f32>(gx.x, gy.x);\n  g1 = vec2<f32>(gx.y, gy.y);\n  g2 = vec2<f32>(gx.z, gy.z);\n  var w: vec3<f32>;\n  var w2: vec3<f32>;\n  var w4: vec3<f32>;\n  var gdotx: vec3<f32>;\n  var n: f32;\n  w = 0.8 - vec3<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2));\n  w = max(w, vec3<f32>(0.0, 0.0, 0.0));\n  w2 = w*w;\n  w4 = w2*w2;\n  gdotx = vec3<f32>(dot(g0, x0), dot(g1, x1), dot(g2, x2));\n  n = 10.9*dot(w4, gdotx);\n  var w3: vec3<f32>;\n  var dw: vec3<f32>;\n  var dn0: vec2<f32>;\n  var dn1: vec2<f32>;\n  var dn2: vec2<f32>;\n  var grad: vec2<f32>;\n  w3 = w2*w;\n  dw = -8.0*w3*gdotx;\n  dn0 = w4.x*g0 + dw.x*x0;\n  dn1 = w4.y*g1 + dw.y*x1;\n  dn2 = w4.z*g2 + dw.z*x2;\n  grad = 10.9*(dn0 + dn1 + dn2);\n  return vec3<f32>(n, grad.x, grad.y);\n}");
  this.is = $x_2.f7(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_rot_noise_2d", src$4), new $c_sjsr_WrappedVarArgs([this.kr]));
  var $x_3 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$5 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["period"], []));
  var types$5 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], []));
  var parts$5 = [];
  var i$5 = 0;
  while ((i$5 < (names$5.length | 0))) {
    parts$5.push(((names$5[i$5] + ": ") + types$5[i$5]));
    i$5 = ((1 + i$5) | 0);
  }
  var paramList$5 = parts$5.join(", ");
  var src$5 = (("fn tiling_noise_2d(" + paramList$5) + ") -> vec3<f32> {\n  return tiling_rot_noise_2d(pos, period, 0.0);\n}");
  $x_3.f7(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_noise_2d", src$5), new $c_sjsr_WrappedVarArgs([this.is]));
  var $x_4 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$6 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["normRot"], []));
  var types$6 = $m_sjs_js_ArrayOpsCommon$().a(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []));
  var parts$6 = [];
  var i$6 = 0;
  while ((i$6 < (names$6.length | 0))) {
    parts$6.push(((names$6[i$6] + ": ") + types$6[i$6]));
    i$6 = ((1 + i$6) | 0);
  }
  var paramList$6 = parts$6.join(", ");
  var src$6 = (("fn rot_noise_2d(" + paramList$6) + ") -> vec3<f32> {\n  return tiling_rot_noise_2d(pos, vec2<f32>(0.0, 0.0), normRot);\n}");
  $x_4.f7(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("rot_noise_2d", src$6), new $c_sjsr_WrappedVarArgs([this.is]));
  var $x_5 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$7 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["period"], $m_sjs_js_ArrayOpsCommon$().a(["normRot"], [])));
  var types$7 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], [])));
  var parts$7 = [];
  var i$7 = 0;
  while ((i$7 < (names$7.length | 0))) {
    parts$7.push(((names$7[i$7] + ": ") + types$7[i$7]));
    i$7 = ((1 + i$7) | 0);
  }
  var paramList$7 = parts$7.join(", ");
  var src$7 = (("fn tiling_rot_noise_3d(" + paramList$7) + ") -> vec4<f32> {\n\n  let alpha = normRot * 6.28318530718;\n  let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0);\n  let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5,-0.5);\n  var uvw: vec3<f32>;\n  var i0: vec3<f32>;\n  var i1: vec3<f32>;\n  var i2: vec3<f32>;\n  var i3: vec3<f32>;\n  var f0: vec3<f32>;\n  var gt_: vec3<f32>;\n  var lt_: vec3<f32>;\n  var gt: vec3<f32>;\n  var lt: vec3<f32>;\n  var o1: vec3<f32>;\n  var o2: vec3<f32>;\n  var v0: vec3<f32>;\n  var v1: vec3<f32>;\n  var v2: vec3<f32>;\n  var v3: vec3<f32>;\n  var x0: vec3<f32>;\n  var x1: vec3<f32>;\n  var x2: vec3<f32>;\n  var x3: vec3<f32>;\n  uvw = M * pos;\n  i0 = floor(uvw);\n  f0 = uvw - i0;\n  gt_ = step(f0.xyx, f0.yzz);\n  lt_ = 1.0 - gt_;\n  gt = vec3<f32>(lt_.z, gt_.xy);\n  lt = vec3<f32>(lt_.xy, gt_.z);\n  o1 = min(gt, lt);\n  o2 = max(gt, lt);\n  i1 = i0 + o1;\n  i2 = i0 + o2;\n  i3 = i0 + vec3<f32>(1.0, 1.0, 1.0);\n  v0 = Mi * i0;\n  v1 = Mi * i1;\n  v2 = Mi * i2;\n  v3 = Mi * i3;\n  x0 = pos - v0;\n  x1 = pos - v1;\n  x2 = pos - v2;\n  x3 = pos - v3;\n  var vx: vec4<f32>;\n  var vy: vec4<f32>;\n  var vz: vec4<f32>;\n  if(any(period > vec3<f32>(0.0))) {\n    vx = vec4<f32>(v0.x, v1.x, v2.x, v3.x);\n    vy = vec4<f32>(v0.y, v1.y, v2.y, v3.y);\n    vz = vec4<f32>(v0.z, v1.z, v2.z, v3.z);\n    if(period.x > 0.0) {\n      vx = vx - floor(vx / period.x) * period.x;\n    }\n    if(period.y > 0.0) {\n      vy = vy - floor(vy / period.y) * period.y;\n    }\n    if(period.z > 0.0) {\n      vz = vz - floor(vz / period.z) * period.z;\n    }\n    i0 = floor(M * vec3<f32>(vx.x, vy.x, vz.x) + 0.5);\n    i1 = floor(M * vec3<f32>(vx.y, vy.y, vz.y) + 0.5);\n    i2 = floor(M * vec3<f32>(vx.z, vy.z, vz.z) + 0.5);\n    i3 = floor(M * vec3<f32>(vx.w, vy.w, vz.w) + 0.5);\n  }\n  var hash: vec4<f32>;\n  var theta: vec4<f32>;\n  var sz: vec4<f32>;\n  var psi: vec4<f32>;\n  var St: vec4<f32>;\n  var Ct: vec4<f32>;\n  var sz_: vec4<f32>;\n  hash = permute289v4f(permute289v4f(permute289v4f(\n    vec4<f32>(i0.z, i1.z, i2.z, i3.z))\n    + vec4<f32>(i0.y, i1.y, i2.y, i3.y))\n    + vec4<f32>(i0.x, i1.x, i2.x, i3.x));\n  theta = hash * 3.883222077;\n  sz = hash * -0.006920415 + 0.996539792;\n  psi = hash * 0.108705628;\n  Ct = cos(theta);\n  St = sin(theta);\n  sz_ = sqrt(1.0 - sz*sz);\n  var gx: vec4<f32>;\n  var gy: vec4<f32>;\n  var gz: vec4<f32>;\n  var px: vec4<f32>;\n  var py: vec4<f32>;\n  var pz: vec4<f32>;\n  var Sp: vec4<f32>;\n  var Cp: vec4<f32>;\n  var Ctp: vec4<f32>;\n  var qx: vec4<f32>;\n  var qy: vec4<f32>;\n  var qz: vec4<f32>;\n  var Sa: vec4<f32>;\n  var Ca: vec4<f32>;\n  if(alpha != 0.0) {\n    px = Ct * sz_;\n    py = St * sz_;\n    pz = sz;\n    Sp = sin(psi);\n    Cp = cos(psi);\n    Ctp = St*Sp - Ct*Cp;\n    qx = mix(Ctp*St, Sp, sz);\n    qy = mix(-Ctp*Ct, Cp, sz);\n    qz = -(py*Cp + px*Sp);\n    Sa = vec4<f32>(sin(alpha));\n    Ca = vec4<f32>(cos(alpha));\n    gx = Ca*px + Sa*qx;\n    gy = Ca*py + Sa*qy;\n    gz = Ca*pz + Sa*qz;\n  } else {\n    gx = Ct * sz_;\n    gy = St * sz_;\n    gz = sz;\n  }\n  var g0: vec3<f32>;\n  var g1: vec3<f32>;\n  var g2: vec3<f32>;\n  var g3: vec3<f32>;\n  var w: vec4<f32>;\n  var w2: vec4<f32>;\n  var w3: vec4<f32>;\n  var gdotx: vec4<f32>;\n  var n: f32;\n  g0 = vec3<f32>(gx.x, gy.x, gz.x);\n  g1 = vec3<f32>(gx.y, gy.y, gz.y);\n  g2 = vec3<f32>(gx.z, gy.z, gz.z);\n  g3 = vec3<f32>(gx.w, gy.w, gz.w);\n  w = 0.5 - vec4<f32>(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3));\n  w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\n  w2 = w * w;\n  w3 = w2 * w;\n  gdotx = vec4<f32>(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3));\n  n = 39.5 * dot(w3, gdotx);\n  var dw: vec4<f32> = -6.0 * w2 * gdotx;\n  var dn0: vec3<f32> = w3.x * g0 + dw.x * x0;\n  var dn1: vec3<f32> = w3.y * g1 + dw.y * x1;\n  var dn2: vec3<f32> = w3.z * g2 + dw.z * x2;\n  var dn3: vec3<f32> = w3.w * g3 + dw.w * x3;\n  var grad: vec3<f32> = 39.5 * (dn0 + dn1 + dn2 + dn3);\n  return vec4<f32>(n, grad.x, grad.y, grad.z);\n}");
  this.it = $x_5.f7(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_rot_noise_3d", src$7), new $c_sjsr_WrappedVarArgs([this.kt]));
  var $x_6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$8 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["period"], []));
  var types$8 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], []));
  var parts$8 = [];
  var i$8 = 0;
  while ((i$8 < (names$8.length | 0))) {
    parts$8.push(((names$8[i$8] + ": ") + types$8[i$8]));
    i$8 = ((1 + i$8) | 0);
  }
  var paramList$8 = parts$8.join(", ");
  var src$8 = (("fn tiling_noise_3d(" + paramList$8) + ") -> vec4<f32> {\n  return tiling_rot_noise_3d(pos, period, 0.0);\n}");
  this.ku = $x_6.f7(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_noise_3d", src$8), new $c_sjsr_WrappedVarArgs([this.it]));
  var $x_7 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$9 = $m_sjs_js_ArrayOpsCommon$().a(["pos"], $m_sjs_js_ArrayOpsCommon$().a(["normRot"], []));
  var types$9 = $m_sjs_js_ArrayOpsCommon$().a(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().a(["f32"], []));
  var parts$9 = [];
  var i$9 = 0;
  while ((i$9 < (names$9.length | 0))) {
    parts$9.push(((names$9[i$9] + ": ") + types$9[i$9]));
    i$9 = ((1 + i$9) | 0);
  }
  var paramList$9 = parts$9.join(", ");
  var src$9 = (("fn rot_noise_3d(" + paramList$9) + ") -> vec4<f32> {\n  return tiling_rot_noise_3d(pos, vec3<f32>(0.0, 0.0, 0.0), normRot);\n}");
  $x_7.f7(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("rot_noise_3d", src$9), new $c_sjsr_WrappedVarArgs([this.it]));
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$, "trivalibs.graphics.shader.lib.random.Psrdnoise$", ({
  fa: 1
}));
var $n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$;
function $m_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$() {
  if ((!$n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$)) {
    $n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$ = new $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$();
  }
  return $n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$;
}
/** @constructor */
function $c_Ltrivalibs_utils_animation_Animator(frame, onFpsCallback) {
  this.kv = null;
  this.iu = null;
  this.gp = 0;
  this.gq = 0.0;
  this.hs = 0.0;
  this.ht = 0.0;
  this.iv = false;
  this.kv = frame;
  this.iu = onFpsCallback;
  this.gp = 0;
  this.gq = 0.0;
  this.hs = 0.0;
  this.ht = (-1.0);
  this.iv = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.lp = (function(time) {
  this.gp = ((1 + this.gp) | 0);
  if ((this.gq === 0.0)) {
    this.gq = time;
    this.hs = time;
  }
  var fpsElapsed = (time - this.gq);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.gp) / fpsElapsed);
    if (((time - this.hs) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().ak(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().aj(args$proxy1));
      this.hs = time;
      if ((this.iu !== null)) {
        (0, this.iu)(fps);
      }
    }
    this.gp = 0;
    this.gq = time;
  }
  var delta = ((this.ht < 0.0) ? 0.0 : (time - this.ht));
  this.ht = time;
  (0, this.kv)(delta);
  if (this.iv) {
    requestAnimationFrame($m_sjs_js_Any$().gB(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.lp((+v1$2));
    }))));
  }
});
$p.nO = (function() {
  this.iv = true;
  return requestAnimationFrame($m_sjs_js_Any$().gB(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.lp((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  ff: 1
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
$p.lO = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.nO();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  fg: 1
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
  this.ae = null;
  this.iw = null;
  this.ix = null;
  this.ae = input;
  this.iw = drag;
  this.ix = hold;
}
$p = $c_Ltrivalibs_utils_events_CanvasInput.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_CanvasInput;
/** @constructor */
function $h_Ltrivalibs_utils_events_CanvasInput() {
}
$h_Ltrivalibs_utils_events_CanvasInput.prototype = $p;
$p.gZ = (function(tpf) {
  this.iw.nX();
  this.ix.gZ(tpf);
});
var $d_Ltrivalibs_utils_events_CanvasInput = new $TypeData().i($c_Ltrivalibs_utils_events_CanvasInput, "trivalibs.utils.events.CanvasInput", ({
  fh: 1
}));
function $ct_Ltrivalibs_utils_events_DragGesture__F0__($thiz, pointersOf) {
  $thiz.kw = pointersOf;
  $thiz.gr = null;
  $thiz.iy = 0.0;
  $thiz.iz = 0.0;
  $thiz.hu = 0.0;
  $thiz.hv = 0.0;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__($thiz, input) {
  $ct_Ltrivalibs_utils_events_DragGesture__F0__($thiz, $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__F0(input));
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_DragGesture__DragGesture$superArg$1__Ltrivalibs_utils_events_InputState__F0(input) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aw));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_DragGesture() {
  this.kw = null;
  this.gr = null;
  this.iy = 0.0;
  this.iz = 0.0;
  this.hu = 0.0;
  this.hv = 0.0;
}
$p = $c_Ltrivalibs_utils_events_DragGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_DragGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_DragGesture() {
}
$h_Ltrivalibs_utils_events_DragGesture.prototype = $p;
$p.m2 = (function() {
  return new $c_T2(this.hu, this.hv);
});
$p.nX = (function() {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().kU(this.kw.gy());
  if ((d === null)) {
    this.gr = null;
    this.hu = 0.0;
    this.hv = 0.0;
  } else {
    var opt$proxy2 = this.gr;
    var sameDriver = (((opt$proxy2 !== null) && (d.aN !== null)) && ((+this.gr) === (+d.aN)));
    this.hu = (sameDriver ? (d.fM - this.iy) : 0.0);
    this.hv = (sameDriver ? (d.fN - this.iz) : 0.0);
    this.gr = d.aN;
    this.iy = d.fM;
    this.iz = d.fN;
  }
});
var $d_Ltrivalibs_utils_events_DragGesture = new $TypeData().i($c_Ltrivalibs_utils_events_DragGesture, "trivalibs.utils.events.DragGesture", ({
  fi: 1
}));
function $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, pointersOf, holdDelay, holdRadius) {
  $thiz.kz = pointersOf;
  $thiz.kx = holdDelay;
  $thiz.ky = holdRadius;
  $thiz.gt = null;
  $thiz.fL = 0.0;
  $thiz.gu = false;
  $thiz.gs = false;
  $thiz.f1 = false;
  return $thiz;
}
function $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__($thiz, input, holdDelay, holdRadius) {
  $ct_Ltrivalibs_utils_events_HoldGesture__F0__D__D__($thiz, $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius), holdDelay, holdRadius);
  return $thiz;
}
function $ps_Ltrivalibs_utils_events_HoldGesture__HoldGesture$superArg$1__Ltrivalibs_utils_events_InputState__D__D__F0(input, holdDelay, holdRadius) {
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => input.aw));
}
/** @constructor */
function $c_Ltrivalibs_utils_events_HoldGesture() {
  this.kz = null;
  this.kx = 0.0;
  this.ky = 0.0;
  this.gt = null;
  this.fL = 0.0;
  this.gu = false;
  this.gs = false;
  this.f1 = false;
}
$p = $c_Ltrivalibs_utils_events_HoldGesture.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_HoldGesture;
/** @constructor */
function $h_Ltrivalibs_utils_events_HoldGesture() {
}
$h_Ltrivalibs_utils_events_HoldGesture.prototype = $p;
$p.gZ = (function(tpf) {
  var d = $m_Ltrivalibs_utils_events_gestures$package$().kU(this.kz.gy());
  if ((d === null)) {
    this.gt = null;
    this.fL = 0.0;
    this.gu = false;
    this.gs = false;
    this.f1 = false;
  } else {
    var pid = d.aN;
    if ((!(((this.gt !== null) && (pid !== null)) && ((+this.gt) === (+pid))))) {
      this.gt = pid;
      this.fL = 0.0;
      this.gu = false;
      this.gs = false;
    }
    this.fL = (this.fL + tpf);
    if (this.gs) {
      this.f1 = true;
    } else if ((this.fL < this.kx)) {
      var dx = (d.fM - d.iB);
      var dy = (d.fN - d.iC);
      var p$proxy1 = ((dx * dx) + (dy * dy));
      if (((+Math.sqrt(p$proxy1)) > this.ky)) {
        this.gu = true;
      }
      this.f1 = false;
    } else if (this.gu) {
      this.f1 = false;
    } else {
      this.gs = true;
      this.f1 = true;
    }
  }
});
var $d_Ltrivalibs_utils_events_HoldGesture = new $TypeData().i($c_Ltrivalibs_utils_events_HoldGesture, "trivalibs.utils.events.HoldGesture", ({
  fj: 1
}));
function $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz) {
  var i = 0;
  while ((i < ($thiz.gx.length | 0))) {
    if (($thiz.gx[i].aN === null)) {
      return $thiz.gx[i];
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id) {
  var i = 0;
  while ((i < ($thiz.aw.length | 0))) {
    var p = $thiz.aw[i];
    if (((p.aN !== null) && ((+p.aN) === id))) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
}
function $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id) {
  var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id);
  if ((p !== null)) {
    p.aN = null;
    var idx = $m_sjs_js_ArrayOps$().l0($thiz.aw, p, 0);
    if ((idx >= 0)) {
      $thiz.aw.splice(idx, 1);
    }
  }
}
function $p_Ltrivalibs_utils_events_InputState__install__V($thiz) {
  var i = 0;
  while ((i < $thiz.kE)) {
    $thiz.gx.push(new $c_Ltrivalibs_utils_events_Pointer());
    i = ((1 + i) | 0);
  }
  $m_Ltrivalibs_utils_events_keyboard$package$().mE($thiz.gv, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!$thiz.gw.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      $thiz.gw[k$3] = value$proxy1;
      if ((!($thiz.af === (void 0)))) {
        var m$proxy3 = $thiz.af;
        m$proxy3();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete $thiz.gw[k$3$1];
    if ((!($thiz.af === (void 0)))) {
      var m$proxy4 = $thiz.af;
      m$proxy4();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().nr($thiz.kB, $m_Ltrivalibs_utils_events_pointer$package$().ns(), new $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(((v1$2, v2$2, v3$2, v4$2, v5$2) => {
    var button = (v1$2 | 0);
    var id = (+v2$2);
    var x$1 = (+v3$2);
    var y = (+v4$2);
    if ($thiz.kD) {
      $thiz.gv.focus();
    }
    var key$proxy3 = ("" + button);
    var value$proxy2 = (+Date.now());
    $thiz.hw[key$proxy3] = value$proxy2;
    var slot = $p_Ltrivalibs_utils_events_InputState__freeSlot__Ltrivalibs_utils_events_Pointer($thiz);
    if ((slot !== null)) {
      slot.aN = id;
      slot.iA = button;
      (+Date.now());
      slot.iB = x$1;
      slot.iC = y;
      slot.fM = x$1;
      slot.fN = y;
      $thiz.aw.push(slot);
      ($thiz.aw.length | 0);
    }
    if ((!($thiz.af === (void 0)))) {
      var m$proxy5 = $thiz.af;
      m$proxy5();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var id$1 = (+v1$2$1);
    var x$2 = (+v2$2$1);
    var y$1 = (+v3$2$1);
    var p = $p_Ltrivalibs_utils_events_InputState__slotById__D__Ltrivalibs_utils_events_Pointer($thiz, id$1);
    if ((p !== null)) {
      p.fM = x$2;
      p.fN = y$1;
      if ((($thiz.aw.length | 0) > 0)) {
        $thiz.aw[0];
      }
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2$1) => {
    var button$1 = (v1$2$2 | 0);
    var id$2 = (+v2$2$2);
    delete $thiz.hw[("" + button$1)];
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, id$2);
    if ((!($thiz.af === (void 0)))) {
      var m$proxy6 = $thiz.af;
      m$proxy6();
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2$3) => {
    $p_Ltrivalibs_utils_events_InputState__removePointer__D__V($thiz, (+v1$2$3));
    if ((!($thiz.af === (void 0)))) {
      var m$proxy7 = $thiz.af;
      m$proxy7();
    }
  })), $thiz.kF);
  $thiz.gv.addEventListener("focus", $thiz.kC);
  $thiz.gv.addEventListener("blur", $thiz.kA);
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, suppressContextMenu, onActivity, focusOnPointerDown, maxPointers) {
  this.kB = null;
  this.gv = null;
  this.kF = false;
  this.af = null;
  this.kD = false;
  this.kE = 0;
  this.gw = null;
  this.hw = null;
  this.gx = null;
  this.aw = null;
  this.kC = null;
  this.kA = null;
  this.kB = el;
  this.gv = keyTarget;
  this.kF = suppressContextMenu;
  this.af = onActivity;
  this.kD = focusOnPointerDown;
  this.kE = maxPointers;
  this.gw = ({});
  this.hw = ({});
  this.gx = [];
  this.aw = [];
  if ($m_sr_BoxesRunTime$().b(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().b(keyTarget, document.activeElement);
  }
  this.kC = ((_$1$3) => {
    if ((!(this.af === (void 0)))) {
      var m$proxy1 = this.af;
      m$proxy1();
    }
  });
  this.kA = ((_$2$3) => {
    if ((!(this.af === (void 0)))) {
      var m$proxy2 = this.af;
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
$p.aI = (function(key) {
  return (!(!(!(!this.gw.hasOwnProperty(key)))));
});
$p.mB = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.hw.hasOwnProperty(key$proxy7)))));
});
$p.ln = (function() {
  return (this.aw.length | 0);
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  fk: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_Pointer() {
  this.aN = null;
  this.iA = 0;
  this.iB = 0.0;
  this.iC = 0.0;
  this.fM = 0.0;
  this.fN = 0.0;
  this.aN = null;
  this.iA = 0;
  this.iB = 0.0;
  this.iC = 0.0;
  this.fM = 0.0;
  this.fN = 0.0;
}
$p = $c_Ltrivalibs_utils_events_Pointer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_Pointer;
/** @constructor */
function $h_Ltrivalibs_utils_events_Pointer() {
}
$h_Ltrivalibs_utils_events_Pointer.prototype = $p;
var $d_Ltrivalibs_utils_events_Pointer = new $TypeData().i($c_Ltrivalibs_utils_events_Pointer, "trivalibs.utils.events.Pointer", ({
  fl: 1
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
$p.kU = (function(pointers) {
  var i = 0;
  while ((i < (pointers.length | 0))) {
    var p = pointers[i];
    if ((p.iA === 0)) {
      return p;
    }
    i = ((1 + i) | 0);
  }
  return null;
});
var $d_Ltrivalibs_utils_events_gestures$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_gestures$package$, "trivalibs.utils.events.gestures$package$", ({
  fm: 1
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
$p.mz = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity) {
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
  return new $c_Ltrivalibs_utils_events_CanvasInput(input, $ct_Ltrivalibs_utils_events_DragGesture__Ltrivalibs_utils_events_InputState__(new $c_Ltrivalibs_utils_events_DragGesture(), input), $ct_Ltrivalibs_utils_events_HoldGesture__Ltrivalibs_utils_events_InputState__D__D__(new $c_Ltrivalibs_utils_events_HoldGesture(), input, holdDelay, holdRadius));
});
var $d_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$, "trivalibs.utils.events.interactive_canvas$package$", ({
  fn: 1
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
$p.mE = (function(el, onDown, onUp, keepDefault) {
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
  fo: 1
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
$p.nr = (function(el, moveTarget, onDown, onMove, onUp, onCancel, suppressContextMenu) {
  var downFn = ((e$3) => {
    onDown.lQ((e$3.button | 0), (+e$3.pointerId), (+e$3.clientX), (+e$3.clientY), (!(!e$3.isPrimary)));
  });
  var moveFn = ((e$3$1) => {
    onMove.lS((+e$3$1.pointerId), (+e$3$1.clientX), (+e$3$1.clientY));
  });
  var upFn = ((e$3$2) => {
    onUp.lR((e$3$2.button | 0), (+e$3$2.pointerId), (+e$3$2.clientX), (+e$3$2.clientY));
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
$p.ns = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  fp: 1
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
  this.hI = null;
  $n_jl_Character$ = this;
  this.hI = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.nU = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.m5 = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().lY(this.hI, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.hI.c[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  aY: 1,
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
$p.gU = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.mC = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().gU(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().gU(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().gU(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.m5(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().gU(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().gU(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  b4: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.m)));
}
function $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.iX = s;
  if (writableStackTrace) {
    $thiz.mh();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.iX = null;
  }
  hz() {
    return this.iX;
  }
  mh() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.aL : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  m() {
    var className = $objectClassName(this);
    var message = this.hz();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  x() {
    return $c_O.prototype.x.call(this);
  }
  r(that) {
    return $c_O.prototype.r.call(this, that);
  }
  get "message"() {
    var m = this.hz();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.m();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_s_Console$() {
  this.iZ = null;
  $n_s_Console$ = this;
  this.iZ = new $c_s_util_DynamicVariable($m_jl_System$Streams$().iV);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.nn = (function() {
  return this.iZ.hL;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  bn: 1,
  cw: 1
}));
var $n_s_Console$;
function $m_s_Console$() {
  if ((!$n_s_Console$)) {
    $n_s_Console$ = new $c_s_Console$();
  }
  return $n_s_Console$;
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
$p.m = (function() {
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
$p.o1 = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.c.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.ja;
  } else {
    return new $c_scm_ArraySeq$ofRef(xs);
  }
});
/** @constructor */
function $c_sr_AbstractFunction0() {
}
$p = $c_sr_AbstractFunction0.prototype = new $h_O();
$p.constructor = $c_sr_AbstractFunction0;
/** @constructor */
function $h_sr_AbstractFunction0() {
}
$h_sr_AbstractFunction0.prototype = $p;
$p.m = (function() {
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
$p.m = (function() {
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
$p.m = (function() {
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
$p.m = (function() {
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
$p.m = (function() {
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
$p.m = (function() {
  return "<function5>";
});
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.fs = 0;
  this.jk = 0;
  this.lC = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.fs = $f_T__hashCode__I("Seq");
  this.jk = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.lC = this.nW($m_sci_Nil$(), this.jk);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.ls = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.mw(xs, this.fs) : ((xs instanceof $c_sci_List) ? this.mG(xs, this.fs) : this.nm(xs, this.fs)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  de: 1,
  dd: 1
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
  this.jm = null;
  this.jl = null;
  this.jn = null;
  this.jo = null;
  this.jm = p$1;
  this.jl = bloomP$1;
  this.jn = resultP$1;
  this.jo = resultP$1;
}
$p = $c_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_bloom_Bloom$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_bloom_Bloom$$anon$1() {
}
$h_Lsketchlib_utils_bloom_Bloom$$anon$1.prototype = $p;
$p.nq = (function() {
  var Painter_this = this.jm;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.jl);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.jn);
});
var $d_Lsketchlib_utils_bloom_Bloom$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_bloom_Bloom$$anon$1, "sketchlib.utils.bloom.Bloom$$anon$1", ({
  di: 1,
  dg: 1
}));
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_scene_PerspectiveCamera($thiz) {
  throw new $c_sjs_js_JavaScriptException(Error("MirrorReflection.paint needs a camera (construct with `camera = \u2026`) or an explicit `vp` argument")).aL;
}
function $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy2$1__Ltrivalibs_graphics_math_cpu_Mat4($thiz) {
  var this$1 = (($thiz.hM !== null) ? $thiz.hM : $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy1$1__Ltrivalibs_graphics_scene_PerspectiveCamera($thiz));
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fR(), this$1.hp, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this$1.lw());
}
/** @constructor */
function $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1(mirrorPanel$1, resolvePanel$1, uBlurStrength$1, camera$1, reflMat$1, uVp$1, uInvVp$1, p$1, blurPanel$1) {
  this.hM = null;
  this.js = null;
  this.jw = null;
  this.jv = null;
  this.jr = null;
  this.jq = null;
  this.jp = null;
  this.jt = null;
  this.ju = null;
  this.hM = camera$1;
  this.js = reflMat$1;
  this.jw = uVp$1;
  this.jv = uInvVp$1;
  this.jr = p$1;
  this.jq = mirrorPanel$1;
  this.jp = blurPanel$1;
  this.jt = resolvePanel$1;
  this.ju = resolvePanel$1;
}
$p = $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1.prototype = new $h_O();
$p.constructor = $c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1;
/** @constructor */
function $h_Lsketchlib_utils_mirror_MirrorReflection$$anon$1() {
}
$h_Lsketchlib_utils_mirror_MirrorReflection$$anon$1.prototype = $p;
$p.np = (function(vp) {
  var cameraVP = ((vp === (void 0)) ? $p_Lsketchlib_utils_mirror_MirrorReflection$$anon$1__default$proxy2$1__Ltrivalibs_graphics_math_cpu_Mat4(this) : vp);
  var m = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fR(), cameraVP, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), this.js);
  var BufferBinding_this = this.jw;
  BufferBinding_this.S.Q(BufferBinding_this.n, m);
  var $x_2 = BufferBinding_this.R.queue;
  var $x_1 = BufferBinding_this.N;
  var s$proxy4 = BufferBinding_this.n;
  $x_2.writeBuffer($x_1, 0.0, s$proxy4.dv.buffer);
  var BufferBinding_this$3 = this.jv;
  var value$proxy5 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().fR(), m, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
  BufferBinding_this$3.S.Q(BufferBinding_this$3.n, value$proxy5);
  var $x_4 = BufferBinding_this$3.R.queue;
  var $x_3 = BufferBinding_this$3.N;
  var s$proxy5 = BufferBinding_this$3.n;
  $x_4.writeBuffer($x_3, 0.0, s$proxy5.dv.buffer);
  var Painter_this = this.jr;
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.jq);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.jp);
  $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(Painter_this, this.jt);
});
var $d_Lsketchlib_utils_mirror_MirrorReflection$$anon$1 = new $TypeData().i($c_Lsketchlib_utils_mirror_MirrorReflection$$anon$1, "sketchlib.utils.mirror.MirrorReflection$$anon$1", ({
  dl: 1,
  dj: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.aM = null;
  this.aM = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dr: 1,
  dq: 1
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
$p.o2 = (function(ref, value) {
  var value$proxy1 = Math.fround(value);
  var offset$proxy3 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy3, value$proxy1, true);
});
$p.Q = (function(ref, value) {
  this.o2(ref, (+value));
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fDouble\uff3f$times$colon$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Double_$times$colon$", ({
  ds: 1,
  T: 1
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
$p.Q = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().ms(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dt: 1,
  T: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
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
$p.o3 = (function(ref, value) {
  var value$proxy2 = value.u;
  var value$proxy3 = Math.fround(value$proxy2);
  var offset$proxy5 = (ref.off | 0);
  ref.dv.setFloat32(offset$proxy5, value$proxy3, true);
  var value$proxy4 = value.t;
  var value$proxy5 = Math.fround(value$proxy4);
  var offset$proxy6 = ((4 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy6, value$proxy5, true);
  var value$proxy6 = value.v;
  var value$proxy7 = Math.fround(value$proxy6);
  var offset$proxy7 = ((8 + (ref.off | 0)) | 0);
  ref.dv.setFloat32(offset$proxy7, value$proxy7, true);
});
$p.Q = (function(ref, value) {
  this.o3(ref, value);
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Vec3_Vec4Buffer$", ({
  du: 1,
  T: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fVec3\uff3fVec4Buffer$;
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
$p.fV = (function(t) {
  return new $c_T2(t.i6, t.i7);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dz: 1,
  aJ: 1
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
$p.fV = (function(t) {
  return new $c_T3(t.u, t.t, t.v);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  dA: 1,
  aJ: 1
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
  this.jA = null;
  this.jA = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  dI: 1,
  dH: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.jB = null;
  this.jC = null;
  this.jB = x$1;
  this.jC = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.nY = (function(t) {
  return $m_sr_Tuples$().m1(this.jB.fV(t.s(0)), this.jC.fV($m_sr_Tuples$().nR(t)));
});
$p.fV = (function(t) {
  return this.nY(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  dJ: 1,
  aK: 1
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
$p.fV = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  dK: 1,
  aK: 1
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
  this.jE = 0;
  this.jE = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.lo = (function(t) {
  return t.s(this.jE);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  dP: 1,
  dF: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.u * other.u) + (v.t * other.t)) + (v.v * other.v));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.jF = null;
  this.jG = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.fR = (function() {
  if ((!this.jG)) {
    this.jF = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.jG = true;
  }
  return this.jF;
});
$p.mp = (function(t, r, s) {
  var x = r.aC;
  var y = r.aD;
  var z = r.aE;
  var w = r.aB;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.u), ((xy + wz) * s.u), ((xz - wy) * s.u), 0.0, ((xy - wz) * s.t), ((1.0 - (xx + zz)) * s.t), ((yz + wx) * s.t), 0.0, ((xz + wy) * s.v), ((yz - wx) * s.v), ((1.0 - (xx + yy)) * s.v), 0.0, t.u, t.t, t.v, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  e3: 1,
  dR: 1
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
  e7: 1,
  e9: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3$() {
  this.jH = null;
  this.jI = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.W = (function() {
  if ((!this.jI)) {
    this.jH = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.jI = true;
  }
  return this.jH;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  ec: 1,
  dW: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$;
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
  ef: 1,
  dT: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1(f$2) {
  this.jL = null;
  this.jL = f$2;
}
$p = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1.prototype = $p;
$p.aS = (function(s) {
  return this.jL.h(s);
});
var $d_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LeftScalar$$anon$1, "trivalibs.graphics.math.gpu.LeftScalar$$anon$1", ({
  ej: 1,
  eh: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.e = null;
  this.jM = null;
  this.jM = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.B = (function(value) {
  return (((("  let " + this.jM) + " = ") + value.e) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  ek: 1,
  aP: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4.prototype = $p;
$p.h2 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.fX = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4, "trivalibs.graphics.math.gpu.float_expr$package$$anon$4", ({
  eq: 1,
  dU: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5.prototype = $p;
$p.m8 = (function(v, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("dot(" + v.e) + ", ") + other.e) + ")"));
});
$p.mF = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("length(" + v.e) + ")"));
});
$p.kT = (function(v, other) {
  return this.m8(v, other);
});
$p.l1 = (function(v) {
  return this.mF(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5, "trivalibs.graphics.math.gpu.float_expr$package$$anon$5", ({
  er: 1,
  aN: 1
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
$p.h2 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".x"));
});
$p.fX = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".y"));
});
$p.o5 = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".z"));
});
$p.nZ = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.e + ".w"));
});
$p.fW = (function(v) {
  return this.h2(v);
});
$p.lx = (function(v) {
  return this.fX(v);
});
$p.ly = (function(v) {
  return this.o5(v);
});
$p.h1 = (function(v) {
  return this.nZ(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6, "trivalibs.graphics.math.gpu.float_expr$package$$anon$6", ({
  es: 1,
  aO: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9, "trivalibs.graphics.math.gpu.float_expr$package$$anon$9", ({
  et: 1,
  U: 1
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
$p.h0 = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.e) + " * ") + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  eu: 1,
  dS: 1
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
$p.lK = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("abs(" + a.e) + ")"));
});
$p.mm = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + a.e) + ")"));
});
$p.l2 = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("log2(" + a.e) + ")"));
});
$p.lj = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("min(" + a.e) + ", ") + other.e) + ")"));
});
$p.nf = (function(a, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("max(" + a.e) + ", ") + other.e) + ")"));
});
$p.gz = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("saturate(" + a.e) + ")"));
});
$p.kW = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.e) + " * 2.0 - 1.0)"));
});
$p.mj = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.e) + " * 0.5 + 0.5)"));
});
$p.lt = (function(a, edge0, edge1) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("smoothstep(" + edge0.e) + ", ") + edge1.e) + ", ") + a.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  ev: 1,
  fq: 1
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
$p.iE = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " + ") + b.e) + ")"));
});
$p.lI = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " - ") + b.e) + ")"));
});
$p.iF = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " * ") + b.e) + ")"));
});
$p.lG = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " / ") + b.e) + ")"));
});
$p.f2 = (function(a, b) {
  return this.lI(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(b));
});
$p.an = (function(a, b) {
  return this.iF(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(b));
});
$p.iD = (function(a, b) {
  return this.lG(a, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(b));
});
$p.mg = (function(a, v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.e) + " * ") + v.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  ew: 1,
  fr: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
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
$p.kH = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.nQ = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " - ") + other.e) + ")"));
});
$p.fT = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + scalar.e) + ")"));
});
$p.kG = (function(v, x$2, scalar) {
  return this.fT(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(scalar));
});
$p.kS = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " / ") + scalar.e) + ")"));
});
$p.nw = (function(v, x$2, e) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("pow(" + v.e) + ", vec3<f32>(") + e.e) + "))"));
});
$p.nv = (function(v, x$2, scalar) {
  return this.nw(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().q().h(scalar));
});
$p.nh = (function(v, x$2, b, t) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("mix(" + v.e) + ", ") + b.e) + ", ") + t.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  ex: 1,
  dX: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$;
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
$p.lN = (function(v, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " + ") + other.e) + ")"));
});
$p.nj = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.e) + " * ") + scalar.e) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  ey: 1,
  e0: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Layer(painter, shade) {
  this.k2 = null;
  this.w = null;
  this.ib = null;
  this.hc = 0;
  this.g8 = 0;
  this.j = null;
  this.y = null;
  this.ic = null;
  this.k2 = painter;
  this.w = shade;
  this.ib = null;
  this.hc = (-1);
  this.g8 = (-1);
  this.j = [];
  this.y = [];
  this.ic = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Layer.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Layer;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Layer() {
}
$h_Ltrivalibs_graphics_painter_Layer.prototype = $p;
$p.nK = (function(blendState, mipSource, mipTarget) {
  if ((blendState !== (void 0))) {
    this.ib = blendState;
  }
  if ((mipSource !== (void 0))) {
    var v = (mipSource | 0);
    this.hc = v;
  }
  if ((mipTarget !== (void 0))) {
    var v$1 = (mipTarget | 0);
    this.g8 = v$1;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Layer = new $TypeData().i($c_Ltrivalibs_graphics_painter_Layer, "trivalibs.graphics.painter.Layer", ({
  eG: 1,
  aQ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.fH = null;
  this.aF = null;
  this.F = null;
  this.ih = null;
  this.ig = null;
  this.k = null;
  this.T = null;
  this.ii = null;
  this.fH = painter;
  this.aF = form;
  this.F = shade;
  this.ih = "none";
  this.ig = null;
  this.k = [];
  this.T = [];
  this.ii = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.nL = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.ih = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.ig = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  eL: 1,
  aQ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.K = null;
  this.K = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.A = (function() {
  return this.K.A();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  eR: 1,
  x: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.gn = null;
  this.gn = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.A = (function() {
  return this.gn.A();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  eS: 1,
  x: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.iq = null;
  this.iq = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.X = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.iq === "") ? name : ((this.iq + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  f0: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.ir = null;
  this.ir = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.l = (function(name) {
  return ((this.ir === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.ir + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  f1: 1,
  A: 1
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
  f2: 1,
  A: 1
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
  f3: 1,
  A: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.kp = null;
  this.go = null;
  this.kp = prefix;
  this.go = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.X = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.kp + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  f5: 1,
  A: 1
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
$p.A = (function() {
  return "f32";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fFloat$, "trivalibs.graphics.shader.types$package$given_WGSLType_Float$", ({
  fb: 1,
  x: 1
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
$p.A = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  fc: 1,
  x: 1
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
$p.A = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  fd: 1,
  x: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
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
$p.A = (function() {
  return "vec3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Vec3$", ({
  fe: 1,
  x: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fVec3$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.hH = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.m = (function() {
  return ((this.hH.Y ? "interface " : (this.hH.X ? "" : "class ")) + this.hH.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  aZ: 1,
  a: 1,
  g: 1
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
  bw: 1,
  bt: 1,
  bu: 1
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
    return $thiz.f8;
  } else {
    throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.f9;
      break;
    }
    case 1: {
      return $thiz.bh;
      break;
    }
    case 2: {
      return $thiz.bi;
      break;
    }
    case 3: {
      return $thiz.bj;
      break;
    }
    case 4: {
      return $thiz.bk;
      break;
    }
    case 5: {
      return $thiz.bl;
      break;
    }
    case 6: {
      return $thiz.bm;
      break;
    }
    case 7: {
      return $thiz.bn;
      break;
    }
    case 8: {
      return $thiz.bo;
      break;
    }
    case 9: {
      return $thiz.bg;
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
      return $thiz.fa;
      break;
    }
    case 1: {
      return $thiz.br;
      break;
    }
    case 2: {
      return $thiz.bs;
      break;
    }
    case 3: {
      return $thiz.bt;
      break;
    }
    case 4: {
      return $thiz.bu;
      break;
    }
    case 5: {
      return $thiz.bv;
      break;
    }
    case 6: {
      return $thiz.bw;
      break;
    }
    case 7: {
      return $thiz.bx;
      break;
    }
    case 8: {
      return $thiz.by;
      break;
    }
    case 9: {
      return $thiz.bp;
      break;
    }
    case 10: {
      return $thiz.bq;
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
      return $thiz.fb;
      break;
    }
    case 1: {
      return $thiz.bC;
      break;
    }
    case 2: {
      return $thiz.bD;
      break;
    }
    case 3: {
      return $thiz.bE;
      break;
    }
    case 4: {
      return $thiz.bF;
      break;
    }
    case 5: {
      return $thiz.bG;
      break;
    }
    case 6: {
      return $thiz.bH;
      break;
    }
    case 7: {
      return $thiz.bI;
      break;
    }
    case 8: {
      return $thiz.bJ;
      break;
    }
    case 9: {
      return $thiz.bz;
      break;
    }
    case 10: {
      return $thiz.bA;
      break;
    }
    case 11: {
      return $thiz.bB;
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
      return $thiz.fc;
      break;
    }
    case 1: {
      return $thiz.bO;
      break;
    }
    case 2: {
      return $thiz.bP;
      break;
    }
    case 3: {
      return $thiz.bQ;
      break;
    }
    case 4: {
      return $thiz.bR;
      break;
    }
    case 5: {
      return $thiz.bS;
      break;
    }
    case 6: {
      return $thiz.bT;
      break;
    }
    case 7: {
      return $thiz.bU;
      break;
    }
    case 8: {
      return $thiz.bV;
      break;
    }
    case 9: {
      return $thiz.bK;
      break;
    }
    case 10: {
      return $thiz.bL;
      break;
    }
    case 11: {
      return $thiz.bM;
      break;
    }
    case 12: {
      return $thiz.bN;
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
      return $thiz.fd;
      break;
    }
    case 1: {
      return $thiz.c1;
      break;
    }
    case 2: {
      return $thiz.c2;
      break;
    }
    case 3: {
      return $thiz.c3;
      break;
    }
    case 4: {
      return $thiz.c4;
      break;
    }
    case 5: {
      return $thiz.c5;
      break;
    }
    case 6: {
      return $thiz.c6;
      break;
    }
    case 7: {
      return $thiz.c7;
      break;
    }
    case 8: {
      return $thiz.c8;
      break;
    }
    case 9: {
      return $thiz.bW;
      break;
    }
    case 10: {
      return $thiz.bX;
      break;
    }
    case 11: {
      return $thiz.bY;
      break;
    }
    case 12: {
      return $thiz.bZ;
      break;
    }
    case 13: {
      return $thiz.c0;
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
      return $thiz.fe;
      break;
    }
    case 1: {
      return $thiz.cf;
      break;
    }
    case 2: {
      return $thiz.cg;
      break;
    }
    case 3: {
      return $thiz.ch;
      break;
    }
    case 4: {
      return $thiz.ci;
      break;
    }
    case 5: {
      return $thiz.cj;
      break;
    }
    case 6: {
      return $thiz.ck;
      break;
    }
    case 7: {
      return $thiz.cl;
      break;
    }
    case 8: {
      return $thiz.cm;
      break;
    }
    case 9: {
      return $thiz.c9;
      break;
    }
    case 10: {
      return $thiz.ca;
      break;
    }
    case 11: {
      return $thiz.cb;
      break;
    }
    case 12: {
      return $thiz.cc;
      break;
    }
    case 13: {
      return $thiz.cd;
      break;
    }
    case 14: {
      return $thiz.ce;
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
      return $thiz.ff;
      break;
    }
    case 1: {
      return $thiz.cu;
      break;
    }
    case 2: {
      return $thiz.cv;
      break;
    }
    case 3: {
      return $thiz.cw;
      break;
    }
    case 4: {
      return $thiz.cx;
      break;
    }
    case 5: {
      return $thiz.cy;
      break;
    }
    case 6: {
      return $thiz.cz;
      break;
    }
    case 7: {
      return $thiz.cA;
      break;
    }
    case 8: {
      return $thiz.cB;
      break;
    }
    case 9: {
      return $thiz.cn;
      break;
    }
    case 10: {
      return $thiz.co;
      break;
    }
    case 11: {
      return $thiz.cp;
      break;
    }
    case 12: {
      return $thiz.cq;
      break;
    }
    case 13: {
      return $thiz.cr;
      break;
    }
    case 14: {
      return $thiz.cs;
      break;
    }
    case 15: {
      return $thiz.ct;
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
      return $thiz.fg;
      break;
    }
    case 1: {
      return $thiz.cK;
      break;
    }
    case 2: {
      return $thiz.cL;
      break;
    }
    case 3: {
      return $thiz.cM;
      break;
    }
    case 4: {
      return $thiz.cN;
      break;
    }
    case 5: {
      return $thiz.cO;
      break;
    }
    case 6: {
      return $thiz.cP;
      break;
    }
    case 7: {
      return $thiz.cQ;
      break;
    }
    case 8: {
      return $thiz.cR;
      break;
    }
    case 9: {
      return $thiz.cC;
      break;
    }
    case 10: {
      return $thiz.cD;
      break;
    }
    case 11: {
      return $thiz.cE;
      break;
    }
    case 12: {
      return $thiz.cF;
      break;
    }
    case 13: {
      return $thiz.cG;
      break;
    }
    case 14: {
      return $thiz.cH;
      break;
    }
    case 15: {
      return $thiz.cI;
      break;
    }
    case 16: {
      return $thiz.cJ;
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
      return $thiz.fh;
      break;
    }
    case 1: {
      return $thiz.d1;
      break;
    }
    case 2: {
      return $thiz.d2;
      break;
    }
    case 3: {
      return $thiz.d3;
      break;
    }
    case 4: {
      return $thiz.d4;
      break;
    }
    case 5: {
      return $thiz.d5;
      break;
    }
    case 6: {
      return $thiz.d6;
      break;
    }
    case 7: {
      return $thiz.d7;
      break;
    }
    case 8: {
      return $thiz.d8;
      break;
    }
    case 9: {
      return $thiz.cS;
      break;
    }
    case 10: {
      return $thiz.cT;
      break;
    }
    case 11: {
      return $thiz.cU;
      break;
    }
    case 12: {
      return $thiz.cV;
      break;
    }
    case 13: {
      return $thiz.cW;
      break;
    }
    case 14: {
      return $thiz.cX;
      break;
    }
    case 15: {
      return $thiz.cY;
      break;
    }
    case 16: {
      return $thiz.cZ;
      break;
    }
    case 17: {
      return $thiz.d0;
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
      return $thiz.fi;
      break;
    }
    case 1: {
      return $thiz.dj;
      break;
    }
    case 2: {
      return $thiz.dk;
      break;
    }
    case 3: {
      return $thiz.dl;
      break;
    }
    case 4: {
      return $thiz.dm;
      break;
    }
    case 5: {
      return $thiz.dn;
      break;
    }
    case 6: {
      return $thiz.dp;
      break;
    }
    case 7: {
      return $thiz.dq;
      break;
    }
    case 8: {
      return $thiz.dr;
      break;
    }
    case 9: {
      return $thiz.d9;
      break;
    }
    case 10: {
      return $thiz.da;
      break;
    }
    case 11: {
      return $thiz.db;
      break;
    }
    case 12: {
      return $thiz.dc;
      break;
    }
    case 13: {
      return $thiz.dd;
      break;
    }
    case 14: {
      return $thiz.de;
      break;
    }
    case 15: {
      return $thiz.df;
      break;
    }
    case 16: {
      return $thiz.dg;
      break;
    }
    case 17: {
      return $thiz.dh;
      break;
    }
    case 18: {
      return $thiz.di;
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
      return $thiz.Y;
      break;
    }
    case 1: {
      return $thiz.ao;
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
      return $thiz.fj;
      break;
    }
    case 1: {
      return $thiz.dC;
      break;
    }
    case 2: {
      return $thiz.dE;
      break;
    }
    case 3: {
      return $thiz.dF;
      break;
    }
    case 4: {
      return $thiz.dG;
      break;
    }
    case 5: {
      return $thiz.dH;
      break;
    }
    case 6: {
      return $thiz.dI;
      break;
    }
    case 7: {
      return $thiz.dJ;
      break;
    }
    case 8: {
      return $thiz.dK;
      break;
    }
    case 9: {
      return $thiz.ds;
      break;
    }
    case 10: {
      return $thiz.dt;
      break;
    }
    case 11: {
      return $thiz.du;
      break;
    }
    case 12: {
      return $thiz.dv;
      break;
    }
    case 13: {
      return $thiz.dw;
      break;
    }
    case 14: {
      return $thiz.dx;
      break;
    }
    case 15: {
      return $thiz.dy;
      break;
    }
    case 16: {
      return $thiz.dz;
      break;
    }
    case 17: {
      return $thiz.dA;
      break;
    }
    case 18: {
      return $thiz.dB;
      break;
    }
    case 19: {
      return $thiz.dD;
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
      return $thiz.fk;
      break;
    }
    case 1: {
      return $thiz.dV;
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
      return $thiz.dL;
      break;
    }
    case 10: {
      return $thiz.dM;
      break;
    }
    case 11: {
      return $thiz.dN;
      break;
    }
    case 12: {
      return $thiz.dO;
      break;
    }
    case 13: {
      return $thiz.dP;
      break;
    }
    case 14: {
      return $thiz.dQ;
      break;
    }
    case 15: {
      return $thiz.dR;
      break;
    }
    case 16: {
      return $thiz.dS;
      break;
    }
    case 17: {
      return $thiz.dT;
      break;
    }
    case 18: {
      return $thiz.dU;
      break;
    }
    case 19: {
      return $thiz.dW;
      break;
    }
    case 20: {
      return $thiz.dX;
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
      return $thiz.fl;
      break;
    }
    case 1: {
      return $thiz.ef;
      break;
    }
    case 2: {
      return $thiz.ej;
      break;
    }
    case 3: {
      return $thiz.ek;
      break;
    }
    case 4: {
      return $thiz.el;
      break;
    }
    case 5: {
      return $thiz.em;
      break;
    }
    case 6: {
      return $thiz.en;
      break;
    }
    case 7: {
      return $thiz.eo;
      break;
    }
    case 8: {
      return $thiz.ep;
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
    case 19: {
      return $thiz.eg;
      break;
    }
    case 20: {
      return $thiz.eh;
      break;
    }
    case 21: {
      return $thiz.ei;
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
      return $thiz.b7;
      break;
    }
    case 1: {
      return $thiz.aT;
      break;
    }
    case 2: {
      return $thiz.aU;
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
      return $thiz.eq;
      break;
    }
    case 1: {
      return $thiz.b8;
      break;
    }
    case 2: {
      return $thiz.b9;
      break;
    }
    case 3: {
      return $thiz.ba;
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
      return $thiz.fm;
      break;
    }
    case 1: {
      return $thiz.er;
      break;
    }
    case 2: {
      return $thiz.es;
      break;
    }
    case 3: {
      return $thiz.et;
      break;
    }
    case 4: {
      return $thiz.eu;
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
      return $thiz.fn;
      break;
    }
    case 1: {
      return $thiz.ev;
      break;
    }
    case 2: {
      return $thiz.ew;
      break;
    }
    case 3: {
      return $thiz.ex;
      break;
    }
    case 4: {
      return $thiz.ey;
      break;
    }
    case 5: {
      return $thiz.ez;
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
      return $thiz.fo;
      break;
    }
    case 1: {
      return $thiz.eA;
      break;
    }
    case 2: {
      return $thiz.eB;
      break;
    }
    case 3: {
      return $thiz.eC;
      break;
    }
    case 4: {
      return $thiz.eD;
      break;
    }
    case 5: {
      return $thiz.eE;
      break;
    }
    case 6: {
      return $thiz.eF;
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
      return $thiz.fp;
      break;
    }
    case 1: {
      return $thiz.eG;
      break;
    }
    case 2: {
      return $thiz.eH;
      break;
    }
    case 3: {
      return $thiz.eI;
      break;
    }
    case 4: {
      return $thiz.eJ;
      break;
    }
    case 5: {
      return $thiz.eK;
      break;
    }
    case 6: {
      return $thiz.eL;
      break;
    }
    case 7: {
      return $thiz.eM;
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
      return $thiz.fq;
      break;
    }
    case 1: {
      return $thiz.eN;
      break;
    }
    case 2: {
      return $thiz.eO;
      break;
    }
    case 3: {
      return $thiz.eP;
      break;
    }
    case 4: {
      return $thiz.eQ;
      break;
    }
    case 5: {
      return $thiz.eR;
      break;
    }
    case 6: {
      return $thiz.eS;
      break;
    }
    case 7: {
      return $thiz.eT;
      break;
    }
    case 8: {
      return $thiz.eU;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).m0(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().aW : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.a9();
  while ($thiz.L()) {
    if ((!those.L())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().b($thiz.H(), those.H()))) {
      return false;
    }
  }
  return (!those.L());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.aW = null;
  $n_sc_Iterator$ = this;
  this.aW = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  c2: 1,
  a: 1,
  at: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cx)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.jb = null;
  this.jb = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.gy = (function() {
  return (0, this.jb)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cG: 1,
  cF: 1,
  bo: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.jc = null;
  this.jc = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.h = (function(x0) {
  return (0, this.jc)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cI: 1,
  cH: 1,
  h: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.jd = null;
  this.jd = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.kI = (function(x0, x1) {
  return (0, this.jd)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cK: 1,
  cJ: 1,
  bp: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.je = null;
  this.je = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.lS = (function(x0, x1, x2) {
  return (0, this.je)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cM: 1,
  cL: 1,
  bq: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.jf = null;
  this.jf = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.lR = (function(x0, x1, x2, x3) {
  return (0, this.jf)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cO: 1,
  cN: 1,
  br: 1
}));
/** @constructor */
function $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078(f) {
  this.jg = null;
  this.jg = f;
}
$p = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = new $h_sr_AbstractFunction5();
$p.constructor = $c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078;
/** @constructor */
function $h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078() {
}
$h_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078.prototype = $p;
$p.lQ = (function(x0, x1, x2, x3, x4) {
  return (0, this.jg)(x0, x1, x2, x3, x4);
});
var $d_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078 = new $TypeData().i($c_sr_AbstractFunction5_$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078, "scala.runtime.AbstractFunction5.$$Lambda$e688b1adbc65539969b4b8c5192c202236fd1078", ({
  cQ: 1,
  cP: 1,
  bs: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  cS: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.ab = null;
  this.ab = es;
  if ((es.c.length <= 22)) {
    $m_sr_Scala3RunTime$().lX();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function(n) {
  return this.ab.c[n];
});
$p.z = (function() {
  return this.ab.c.length;
});
$p.D = (function() {
  return "Tuple";
});
$p.m = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().o1(this.ab), "(", ",", ")");
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().lZ(this, (-889275714), null);
});
$p.r = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.ab === that.ab)) {
      return true;
    } else {
      if ((this.ab.c.length !== that.ab.c.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.ab.c.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.ab;
        var n = i;
        var $x_1 = arr$3.c[n];
        var arr$4 = that.ab;
        var n$1 = i;
        if ((!$x_2.b($x_1, arr$4.c[n$1]))) {
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aF)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aF: 1,
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
$p.gB = (function(f) {
  return ((arg1$2) => f.h(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  cZ: 1,
  d3: 1,
  d4: 1
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
  em: 1,
  G: 1,
  h: 1
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
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().aP((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  eo: 1,
  G: 1,
  h: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3.prototype = $p;
$p.h = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("f32(" + (x | 0)) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$3, "trivalibs.graphics.math.gpu.float_expr$package$$anon$3", ({
  ep: 1,
  G: 1,
  h: 1
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
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().lH() : rest[0]);
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
/** @constructor */
function $c_Ljava_io_OutputStream() {
}
$p = $c_Ljava_io_OutputStream.prototype = new $h_O();
$p.constructor = $c_Ljava_io_OutputStream;
/** @constructor */
function $h_Ljava_io_OutputStream() {
}
$h_Ljava_io_OutputStream.prototype = $p;
class $c_jl_AssertionError extends $c_jl_Error {
  constructor(detailMessage) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, ("" + detailMessage), ((detailMessage instanceof $c_jl_Throwable) ? detailMessage : null), true, true);
  }
}
var $d_jl_AssertionError = new $TypeData().i($c_jl_AssertionError, "java.lang.AssertionError", ({
  aV: 1,
  b0: 1,
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
  aW: 1,
  a: 1,
  i: 1,
  g: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a0)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  a0: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.aa = null;
  this.aa = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.m = (function() {
  return this.aa;
});
$p.J = (function() {
  return this.aa.length;
});
$p.kO = (function(index) {
  return this.aa.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bc: 1,
  F: 1,
  Y: 1,
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
$p.ai = (function() {
  return (-1);
});
$p.iG = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.a9 = (function() {
  return this;
});
$p.hx = (function(n) {
  return this.hG(n, (-1));
});
$p.hG = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.m = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.f4(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.ai();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.ai();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.a9(), that);
}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.db)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$.prototype = $p;
$p.gD = (function(m) {
  return m.hQ;
});
$p.gE = (function(m) {
  return m.hR;
});
$p.gF = (function(m) {
  return m.hS;
});
$p.gG = (function(m) {
  return m.hT;
});
$p.gH = (function(m) {
  return m.hU;
});
$p.gI = (function(m) {
  return m.hV;
});
$p.gJ = (function(m) {
  return m.hW;
});
$p.gK = (function(m) {
  return m.hX;
});
$p.gL = (function(m) {
  return m.hY;
});
$p.gM = (function(m) {
  return m.hZ;
});
$p.gN = (function(m) {
  return m.i0;
});
$p.gO = (function(m) {
  return m.i1;
});
$p.gP = (function(m) {
  return m.i2;
});
$p.gQ = (function(m) {
  return m.i3;
});
$p.gR = (function(m) {
  return m.i4;
});
$p.gS = (function(m) {
  return m.i5;
});
$p.l3 = (function(m, v) {
  m.hQ = v;
});
$p.l4 = (function(m, v) {
  m.hR = v;
});
$p.l5 = (function(m, v) {
  m.hS = v;
});
$p.l6 = (function(m, v) {
  m.hT = v;
});
$p.l7 = (function(m, v) {
  m.hU = v;
});
$p.l8 = (function(m, v) {
  m.hV = v;
});
$p.l9 = (function(m, v) {
  m.hW = v;
});
$p.la = (function(m, v) {
  m.hX = v;
});
$p.lb = (function(m, v) {
  m.hY = v;
});
$p.lc = (function(m, v) {
  m.hZ = v;
});
$p.ld = (function(m, v) {
  m.i0 = v;
});
$p.le = (function(m, v) {
  m.i1 = v;
});
$p.lf = (function(m, v) {
  m.i2 = v;
});
$p.lg = (function(m, v) {
  m.i3 = v;
});
$p.lh = (function(m, v) {
  m.i4 = v;
});
$p.li = (function(m, v) {
  m.i5 = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  e4: 1,
  U: 1,
  aL: 1,
  aM: 1
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
$p.fW = (function(v) {
  return v.aC;
});
$p.lx = (function(v) {
  return v.aD;
});
$p.ly = (function(v) {
  return v.aE;
});
$p.h1 = (function(v) {
  return v.aB;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  e8: 1,
  aO: 1,
  dZ: 1,
  e1: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$;
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
$p.kT = (function(v, other) {
  return $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D(this, v, other);
});
$p.l1 = (function(v) {
  return $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(this, v);
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$, "trivalibs.graphics.math.cpu.Vec3$given_Vec3Mutable_Vec3$", ({
  ed: 1,
  aN: 1,
  dV: 1,
  dY: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
function $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$;
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
$p.mI = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.mK = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.mM = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.mO = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.mQ = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.mS = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.mU = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.mW = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.mY = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.n0 = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.n2 = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.n4 = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.n6 = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.n8 = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.na = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.nc = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.mJ = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.mL = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.mN = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.mP = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.mR = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.mT = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.mV = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.mX = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.mZ = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.n1 = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.n3 = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.n5 = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.n7 = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.n9 = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.nb = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.nd = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.gD = (function(m) {
  return this.mI(m);
});
$p.gE = (function(m) {
  return this.mK(m);
});
$p.gF = (function(m) {
  return this.mM(m);
});
$p.gG = (function(m) {
  return this.mO(m);
});
$p.gH = (function(m) {
  return this.mQ(m);
});
$p.gI = (function(m) {
  return this.mS(m);
});
$p.gJ = (function(m) {
  return this.mU(m);
});
$p.gK = (function(m) {
  return this.mW(m);
});
$p.gL = (function(m) {
  return this.mY(m);
});
$p.gM = (function(m) {
  return this.n0(m);
});
$p.gN = (function(m) {
  return this.n2(m);
});
$p.gO = (function(m) {
  return this.n4(m);
});
$p.gP = (function(m) {
  return this.n6(m);
});
$p.gQ = (function(m) {
  return this.n8(m);
});
$p.gR = (function(m) {
  return this.na(m);
});
$p.gS = (function(m) {
  return this.nc(m);
});
$p.l3 = (function(m, v) {
  this.mJ(m, v);
});
$p.l4 = (function(m, v) {
  this.mL(m, v);
});
$p.l5 = (function(m, v) {
  this.mN(m, v);
});
$p.l6 = (function(m, v) {
  this.mP(m, v);
});
$p.l7 = (function(m, v) {
  this.mR(m, v);
});
$p.l8 = (function(m, v) {
  this.mT(m, v);
});
$p.l9 = (function(m, v) {
  this.mV(m, v);
});
$p.la = (function(m, v) {
  this.mX(m, v);
});
$p.lb = (function(m, v) {
  this.mZ(m, v);
});
$p.lc = (function(m, v) {
  this.n1(m, v);
});
$p.ld = (function(m, v) {
  this.n3(m, v);
});
$p.le = (function(m, v) {
  this.n5(m, v);
});
$p.lf = (function(m, v) {
  this.n7(m, v);
});
$p.lg = (function(m, v) {
  this.n9(m, v);
});
$p.lh = (function(m, v) {
  this.nb(m, v);
});
$p.li = (function(m, v) {
  this.nd(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  eg: 1,
  U: 1,
  aL: 1,
  aM: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T__T($thiz, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, vertexBody, fragmentBody, fragBuiltinParams) {
  var f$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, vertexBody);
  var g$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T__T($thiz, fragmentBody, fragBuiltinParams);
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.gm, f$proxy1, g$proxy1];
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
  this.a1 = null;
  this.a0 = null;
  this.gm = null;
  this.a1 = vertexBody;
  this.a0 = fragmentBody;
  this.gm = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, (-1488826029), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.a1 === x$0.a1) && (this.a0 === x$0.a0)) && (this.gm === x$0.gm))));
});
$p.m = (function() {
  return $m_sr_ScalaRunTime$().lJ(this);
});
$p.z = (function() {
  return 3;
});
$p.D = (function() {
  return "ShaderDef";
});
$p.s = (function(n) {
  switch (n) {
    case 0: {
      return this.a1;
      break;
    }
    case 1: {
      return this.a0;
      break;
    }
    case 2: {
      return this.gm;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aR)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  aR: 1,
  b: 1,
  c: 1,
  a: 1
}));
function $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, out) {
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_FilterOutputStream() {
}
$p = $c_Ljava_io_FilterOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_Ljava_io_FilterOutputStream;
/** @constructor */
function $h_Ljava_io_FilterOutputStream() {
}
$h_Ljava_io_FilterOutputStream.prototype = $p;
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_ArithmeticException = new $TypeData().i($c_jl_ArithmeticException, "java.lang.ArithmeticException", ({
  aU: 1,
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
  aX: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1
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
  a2: 1,
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
  b2: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$p = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = new $h_Ljava_io_OutputStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream$DummyOutputStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream$DummyOutputStream() {
}
$h_jl_JSConsoleBasedPrintStream$DummyOutputStream.prototype = $p;
var $d_jl_JSConsoleBasedPrintStream$DummyOutputStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream$DummyOutputStream, "java.lang.JSConsoleBasedPrintStream$DummyOutputStream", ({
  b6: 1,
  X: 1,
  V: 1,
  Z: 1,
  W: 1
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
  b7: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.b9)));
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
  ba: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  bf: 1,
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
  bk: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.j1)) {
    if (($thiz.h4 === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.h4;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.hH.N));
      try {
        var $x_1 = ((($thiz.h4 + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.j0 = $x_1;
    $thiz.j1 = true;
  }
  return $thiz.j0;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.h4 = null;
    this.j0 = null;
    this.j1 = false;
    this.h4 = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hz() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bv: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fZ = 0;
  this.j3 = 0;
  this.j2 = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.j2 = outer;
  this.fZ = 0;
  this.j3 = outer.z();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.L = (function() {
  return (this.fZ < this.j3);
});
$p.H = (function() {
  var result = this.j2.s(this.fZ);
  this.fZ = ((1 + this.fZ) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bx: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.f8 = null;
  this.f8 = _1;
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
$p.s = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.m = (function() {
  return (("(" + this.f8) + ")");
});
$p.D = (function() {
  return "Tuple1";
});
$p.I = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, 1228477340, true);
});
$p.r = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().b(this.f8, x$1.f8)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  a4: 1,
  by: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.f9 = null;
  this.bh = null;
  this.bi = null;
  this.bj = null;
  this.bk = null;
  this.bl = null;
  this.bm = null;
  this.bn = null;
  this.bo = null;
  this.bg = null;
  this.f9 = _1;
  this.bh = _2;
  this.bi = _3;
  this.bj = _4;
  this.bk = _5;
  this.bl = _6;
  this.bm = _7;
  this.bn = _8;
  this.bo = _9;
  this.bg = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 10;
});
$p.s = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, 2104595240, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().b(this.f9, x$0.f9) && $m_sr_BoxesRunTime$().b(this.bh, x$0.bh)) && $m_sr_BoxesRunTime$().b(this.bi, x$0.bi)) && $m_sr_BoxesRunTime$().b(this.bj, x$0.bj)) && $m_sr_BoxesRunTime$().b(this.bk, x$0.bk)) && $m_sr_BoxesRunTime$().b(this.bl, x$0.bl)) && $m_sr_BoxesRunTime$().b(this.bm, x$0.bm)) && $m_sr_BoxesRunTime$().b(this.bn, x$0.bn)) && $m_sr_BoxesRunTime$().b(this.bo, x$0.bo)) && $m_sr_BoxesRunTime$().b(this.bg, x$0.bg))));
});
$p.D = (function() {
  return "Tuple10";
});
$p.m = (function() {
  return (((((((((((((((((((("(" + this.f9) + ",") + this.bh) + ",") + this.bi) + ",") + this.bj) + ",") + this.bk) + ",") + this.bl) + ",") + this.bm) + ",") + this.bn) + ",") + this.bo) + ",") + this.bg) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  a5: 1,
  b: 1,
  c: 1,
  bz: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.fa = null;
  this.br = null;
  this.bs = null;
  this.bt = null;
  this.bu = null;
  this.bv = null;
  this.bw = null;
  this.bx = null;
  this.by = null;
  this.bp = null;
  this.bq = null;
  this.fa = _1;
  this.br = _2;
  this.bs = _3;
  this.bt = _4;
  this.bu = _5;
  this.bv = _6;
  this.bw = _7;
  this.bx = _8;
  this.by = _9;
  this.bp = _10;
  this.bq = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 11;
});
$p.s = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, 838406606, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().b(this.fa, x$0.fa) && $m_sr_BoxesRunTime$().b(this.br, x$0.br)) && $m_sr_BoxesRunTime$().b(this.bs, x$0.bs)) && $m_sr_BoxesRunTime$().b(this.bt, x$0.bt)) && $m_sr_BoxesRunTime$().b(this.bu, x$0.bu)) && $m_sr_BoxesRunTime$().b(this.bv, x$0.bv)) && $m_sr_BoxesRunTime$().b(this.bw, x$0.bw)) && $m_sr_BoxesRunTime$().b(this.bx, x$0.bx)) && $m_sr_BoxesRunTime$().b(this.by, x$0.by)) && $m_sr_BoxesRunTime$().b(this.bp, x$0.bp)) && $m_sr_BoxesRunTime$().b(this.bq, x$0.bq))));
});
$p.D = (function() {
  return "Tuple11";
});
$p.m = (function() {
  return (((((((((((((((((((((("(" + this.fa) + ",") + this.br) + ",") + this.bs) + ",") + this.bt) + ",") + this.bu) + ",") + this.bv) + ",") + this.bw) + ",") + this.bx) + ",") + this.by) + ",") + this.bp) + ",") + this.bq) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  a6: 1,
  b: 1,
  c: 1,
  bA: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.fb = null;
  this.bC = null;
  this.bD = null;
  this.bE = null;
  this.bF = null;
  this.bG = null;
  this.bH = null;
  this.bI = null;
  this.bJ = null;
  this.bz = null;
  this.bA = null;
  this.bB = null;
  this.fb = _1;
  this.bC = _2;
  this.bD = _3;
  this.bE = _4;
  this.bF = _5;
  this.bG = _6;
  this.bH = _7;
  this.bI = _8;
  this.bJ = _9;
  this.bz = _10;
  this.bA = _11;
  this.bB = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 12;
});
$p.s = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, (-1964145863), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().b(this.fb, x$0.fb) && $m_sr_BoxesRunTime$().b(this.bC, x$0.bC)) && $m_sr_BoxesRunTime$().b(this.bD, x$0.bD)) && $m_sr_BoxesRunTime$().b(this.bE, x$0.bE)) && $m_sr_BoxesRunTime$().b(this.bF, x$0.bF)) && $m_sr_BoxesRunTime$().b(this.bG, x$0.bG)) && $m_sr_BoxesRunTime$().b(this.bH, x$0.bH)) && $m_sr_BoxesRunTime$().b(this.bI, x$0.bI)) && $m_sr_BoxesRunTime$().b(this.bJ, x$0.bJ)) && $m_sr_BoxesRunTime$().b(this.bz, x$0.bz)) && $m_sr_BoxesRunTime$().b(this.bA, x$0.bA)) && $m_sr_BoxesRunTime$().b(this.bB, x$0.bB))));
});
$p.D = (function() {
  return "Tuple12";
});
$p.m = (function() {
  return (((((((((((((((((((((((("(" + this.fb) + ",") + this.bC) + ",") + this.bD) + ",") + this.bE) + ",") + this.bF) + ",") + this.bG) + ",") + this.bH) + ",") + this.bI) + ",") + this.bJ) + ",") + this.bz) + ",") + this.bA) + ",") + this.bB) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  a7: 1,
  b: 1,
  c: 1,
  bB: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.fc = null;
  this.bO = null;
  this.bP = null;
  this.bQ = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.bU = null;
  this.bV = null;
  this.bK = null;
  this.bL = null;
  this.bM = null;
  this.bN = null;
  this.fc = _1;
  this.bO = _2;
  this.bP = _3;
  this.bQ = _4;
  this.bR = _5;
  this.bS = _6;
  this.bT = _7;
  this.bU = _8;
  this.bV = _9;
  this.bK = _10;
  this.bL = _11;
  this.bM = _12;
  this.bN = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 13;
});
$p.s = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, 1224168367, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().b(this.fc, x$0.fc) && $m_sr_BoxesRunTime$().b(this.bO, x$0.bO)) && $m_sr_BoxesRunTime$().b(this.bP, x$0.bP)) && $m_sr_BoxesRunTime$().b(this.bQ, x$0.bQ)) && $m_sr_BoxesRunTime$().b(this.bR, x$0.bR)) && $m_sr_BoxesRunTime$().b(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().b(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().b(this.bU, x$0.bU)) && $m_sr_BoxesRunTime$().b(this.bV, x$0.bV)) && $m_sr_BoxesRunTime$().b(this.bK, x$0.bK)) && $m_sr_BoxesRunTime$().b(this.bL, x$0.bL)) && $m_sr_BoxesRunTime$().b(this.bM, x$0.bM)) && $m_sr_BoxesRunTime$().b(this.bN, x$0.bN))));
});
$p.D = (function() {
  return "Tuple13";
});
$p.m = (function() {
  return (((((((((((((((((((((((((("(" + this.fc) + ",") + this.bO) + ",") + this.bP) + ",") + this.bQ) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ",") + this.bU) + ",") + this.bV) + ",") + this.bK) + ",") + this.bL) + ",") + this.bM) + ",") + this.bN) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  a8: 1,
  b: 1,
  c: 1,
  bC: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.fd = null;
  this.c1 = null;
  this.c2 = null;
  this.c3 = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.c8 = null;
  this.bW = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.c0 = null;
  this.fd = _1;
  this.c1 = _2;
  this.c2 = _3;
  this.c3 = _4;
  this.c4 = _5;
  this.c5 = _6;
  this.c6 = _7;
  this.c7 = _8;
  this.c8 = _9;
  this.bW = _10;
  this.bX = _11;
  this.bY = _12;
  this.bZ = _13;
  this.c0 = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 14;
});
$p.s = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, 147759069, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().b(this.fd, x$0.fd) && $m_sr_BoxesRunTime$().b(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().b(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().b(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().b(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().b(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().b(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().b(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().b(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().b(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().b(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().b(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().b(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().b(this.c0, x$0.c0))));
});
$p.D = (function() {
  return "Tuple14";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((("(" + this.fd) + ",") + this.c1) + ",") + this.c2) + ",") + this.c3) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ",") + this.c8) + ",") + this.bW) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.c0) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  a9: 1,
  b: 1,
  c: 1,
  bD: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.fe = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.cl = null;
  this.cm = null;
  this.c9 = null;
  this.ca = null;
  this.cb = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.fe = _1;
  this.cf = _2;
  this.cg = _3;
  this.ch = _4;
  this.ci = _5;
  this.cj = _6;
  this.ck = _7;
  this.cl = _8;
  this.cm = _9;
  this.c9 = _10;
  this.ca = _11;
  this.cb = _12;
  this.cc = _13;
  this.cd = _14;
  this.ce = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 15;
});
$p.s = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, 1834180931, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().b(this.fe, x$0.fe) && $m_sr_BoxesRunTime$().b(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().b(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().b(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().b(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().b(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().b(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().b(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().b(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().b(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().b(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().b(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().b(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().b(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().b(this.ce, x$0.ce))));
});
$p.D = (function() {
  return "Tuple15";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((("(" + this.fe) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.cl) + ",") + this.cm) + ",") + this.c9) + ",") + this.ca) + ",") + this.cb) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  aa: 1,
  b: 1,
  c: 1,
  bE: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.ff = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.cB = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.ff = _1;
  this.cu = _2;
  this.cv = _3;
  this.cw = _4;
  this.cx = _5;
  this.cy = _6;
  this.cz = _7;
  this.cA = _8;
  this.cB = _9;
  this.cn = _10;
  this.co = _11;
  this.cp = _12;
  this.cq = _13;
  this.cr = _14;
  this.cs = _15;
  this.ct = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 16;
});
$p.s = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, 499793902, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().b(this.ff, x$0.ff) && $m_sr_BoxesRunTime$().b(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().b(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().b(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().b(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().b(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().b(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().b(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().b(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().b(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().b(this.co, x$0.co)) && $m_sr_BoxesRunTime$().b(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().b(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().b(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().b(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().b(this.ct, x$0.ct))));
});
$p.D = (function() {
  return "Tuple16";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.ff) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ",") + this.cB) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  ab: 1,
  b: 1,
  c: 1,
  bF: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.fg = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cQ = null;
  this.cR = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.cJ = null;
  this.fg = _1;
  this.cK = _2;
  this.cL = _3;
  this.cM = _4;
  this.cN = _5;
  this.cO = _6;
  this.cP = _7;
  this.cQ = _8;
  this.cR = _9;
  this.cC = _10;
  this.cD = _11;
  this.cE = _12;
  this.cF = _13;
  this.cG = _14;
  this.cH = _15;
  this.cI = _16;
  this.cJ = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 17;
});
$p.s = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, (-934366247), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().b(this.fg, x$0.fg) && $m_sr_BoxesRunTime$().b(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().b(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().b(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().b(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().b(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().b(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().b(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().b(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().b(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().b(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().b(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().b(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().b(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().b(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().b(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().b(this.cJ, x$0.cJ))));
});
$p.D = (function() {
  return "Tuple17";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.fg) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ",") + this.cJ) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  ac: 1,
  b: 1,
  c: 1,
  bG: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.fh = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.fh = _1;
  this.d1 = _2;
  this.d2 = _3;
  this.d3 = _4;
  this.d4 = _5;
  this.d5 = _6;
  this.d6 = _7;
  this.d7 = _8;
  this.d8 = _9;
  this.cS = _10;
  this.cT = _11;
  this.cU = _12;
  this.cV = _13;
  this.cW = _14;
  this.cX = _15;
  this.cY = _16;
  this.cZ = _17;
  this.d0 = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 18;
});
$p.s = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, (-937041276), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().b(this.fh, x$0.fh) && $m_sr_BoxesRunTime$().b(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().b(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().b(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().b(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().b(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().b(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().b(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().b(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().b(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().b(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().b(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().b(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().b(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().b(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().b(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().b(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().b(this.d0, x$0.d0))));
});
$p.D = (function() {
  return "Tuple18";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.fh) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  ad: 1,
  b: 1,
  c: 1,
  bH: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.fi = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.dr = null;
  this.d9 = null;
  this.da = null;
  this.db = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.fi = _1;
  this.dj = _2;
  this.dk = _3;
  this.dl = _4;
  this.dm = _5;
  this.dn = _6;
  this.dp = _7;
  this.dq = _8;
  this.dr = _9;
  this.d9 = _10;
  this.da = _11;
  this.db = _12;
  this.dc = _13;
  this.dd = _14;
  this.de = _15;
  this.df = _16;
  this.dg = _17;
  this.dh = _18;
  this.di = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 19;
});
$p.s = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, (-1955940499), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().b(this.fi, x$0.fi) && $m_sr_BoxesRunTime$().b(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().b(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().b(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().b(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().b(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().b(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().b(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().b(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().b(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().b(this.da, x$0.da)) && $m_sr_BoxesRunTime$().b(this.db, x$0.db)) && $m_sr_BoxesRunTime$().b(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().b(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().b(this.de, x$0.de)) && $m_sr_BoxesRunTime$().b(this.df, x$0.df)) && $m_sr_BoxesRunTime$().b(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().b(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().b(this.di, x$0.di))));
});
$p.D = (function() {
  return "Tuple19";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.fi) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ",") + this.dr) + ",") + this.d9) + ",") + this.da) + ",") + this.db) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  ae: 1,
  b: 1,
  c: 1,
  bI: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.Y = null;
  this.ao = null;
  this.Y = _1;
  this.ao = _2;
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
$p.s = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.m = (function() {
  return (((("(" + this.Y) + ",") + this.ao) + ")");
});
$p.D = (function() {
  return "Tuple2";
});
$p.I = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, (-116390334), true);
});
$p.r = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().b(this.Y, x$1.Y) && $m_sr_BoxesRunTime$().b(this.ao, x$1.ao))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  af: 1,
  bJ: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.fj = null;
  this.dC = null;
  this.dE = null;
  this.dF = null;
  this.dG = null;
  this.dH = null;
  this.dI = null;
  this.dJ = null;
  this.dK = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dD = null;
  this.fj = _1;
  this.dC = _2;
  this.dE = _3;
  this.dF = _4;
  this.dG = _5;
  this.dH = _6;
  this.dI = _7;
  this.dJ = _8;
  this.dK = _9;
  this.ds = _10;
  this.dt = _11;
  this.du = _12;
  this.dv = _13;
  this.dw = _14;
  this.dx = _15;
  this.dy = _16;
  this.dz = _17;
  this.dA = _18;
  this.dB = _19;
  this.dD = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 20;
});
$p.s = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, 1328807075, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().b(this.fj, x$0.fj) && $m_sr_BoxesRunTime$().b(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().b(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().b(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().b(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().b(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().b(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().b(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().b(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().b(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().b(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().b(this.du, x$0.du)) && $m_sr_BoxesRunTime$().b(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().b(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().b(this.dx, x$0.dx)) && $m_sr_BoxesRunTime$().b(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().b(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().b(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().b(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().b(this.dD, x$0.dD))));
});
$p.D = (function() {
  return "Tuple20";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.fj) + ",") + this.dC) + ",") + this.dE) + ",") + this.dF) + ",") + this.dG) + ",") + this.dH) + ",") + this.dI) + ",") + this.dJ) + ",") + this.dK) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dD) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  ag: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.fk = null;
  this.dV = null;
  this.dY = null;
  this.dZ = null;
  this.e0 = null;
  this.e1 = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.dQ = null;
  this.dR = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.dW = null;
  this.dX = null;
  this.fk = _1;
  this.dV = _2;
  this.dY = _3;
  this.dZ = _4;
  this.e0 = _5;
  this.e1 = _6;
  this.e2 = _7;
  this.e3 = _8;
  this.e4 = _9;
  this.dL = _10;
  this.dM = _11;
  this.dN = _12;
  this.dO = _13;
  this.dP = _14;
  this.dQ = _15;
  this.dR = _16;
  this.dS = _17;
  this.dT = _18;
  this.dU = _19;
  this.dW = _20;
  this.dX = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 21;
});
$p.s = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, (-21288119), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().b(this.fk, x$0.fk) && $m_sr_BoxesRunTime$().b(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().b(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().b(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().b(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().b(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().b(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().b(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().b(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().b(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().b(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().b(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().b(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().b(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().b(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().b(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().b(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().b(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().b(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().b(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().b(this.dX, x$0.dX))));
});
$p.D = (function() {
  return "Tuple21";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.fk) + ",") + this.dV) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e1) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dW) + ",") + this.dX) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  ah: 1,
  b: 1,
  c: 1,
  bL: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.fl = null;
  this.ef = null;
  this.ej = null;
  this.ek = null;
  this.el = null;
  this.em = null;
  this.en = null;
  this.eo = null;
  this.ep = null;
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
  this.eg = null;
  this.eh = null;
  this.ei = null;
  this.fl = _1;
  this.ef = _2;
  this.ej = _3;
  this.ek = _4;
  this.el = _5;
  this.em = _6;
  this.en = _7;
  this.eo = _8;
  this.ep = _9;
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
  this.eg = _20;
  this.eh = _21;
  this.ei = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 22;
});
$p.s = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, (-139445068), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().b(this.fl, x$0.fl) && $m_sr_BoxesRunTime$().b(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().b(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().b(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().b(this.el, x$0.el)) && $m_sr_BoxesRunTime$().b(this.em, x$0.em)) && $m_sr_BoxesRunTime$().b(this.en, x$0.en)) && $m_sr_BoxesRunTime$().b(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().b(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().b(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().b(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().b(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().b(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().b(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().b(this.ea, x$0.ea)) && $m_sr_BoxesRunTime$().b(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().b(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().b(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().b(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().b(this.eg, x$0.eg)) && $m_sr_BoxesRunTime$().b(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().b(this.ei, x$0.ei))));
});
$p.D = (function() {
  return "Tuple22";
});
$p.m = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.fl) + ",") + this.ef) + ",") + this.ej) + ",") + this.ek) + ",") + this.el) + ",") + this.em) + ",") + this.en) + ",") + this.eo) + ",") + this.ep) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ",") + this.eb) + ",") + this.ec) + ",") + this.ed) + ",") + this.ee) + ",") + this.eg) + ",") + this.eh) + ",") + this.ei) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  ai: 1,
  b: 1,
  c: 1,
  bM: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.b7 = null;
  this.aT = null;
  this.aU = null;
  this.b7 = _1;
  this.aT = _2;
  this.aU = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 3;
});
$p.s = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, (-192629203), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().b(this.b7, x$0.b7) && $m_sr_BoxesRunTime$().b(this.aT, x$0.aT)) && $m_sr_BoxesRunTime$().b(this.aU, x$0.aU))));
});
$p.D = (function() {
  return "Tuple3";
});
$p.m = (function() {
  return (((((("(" + this.b7) + ",") + this.aT) + ",") + this.aU) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  aj: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.eq = null;
  this.b8 = null;
  this.b9 = null;
  this.ba = null;
  this.eq = _1;
  this.b8 = _2;
  this.b9 = _3;
  this.ba = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 4;
});
$p.s = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, (-1542739752), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().b(this.eq, x$0.eq) && $m_sr_BoxesRunTime$().b(this.b8, x$0.b8)) && $m_sr_BoxesRunTime$().b(this.b9, x$0.b9)) && $m_sr_BoxesRunTime$().b(this.ba, x$0.ba))));
});
$p.D = (function() {
  return "Tuple4";
});
$p.m = (function() {
  return (((((((("(" + this.eq) + ",") + this.b8) + ",") + this.b9) + ",") + this.ba) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  ak: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.fm = null;
  this.er = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.fm = _1;
  this.er = _2;
  this.es = _3;
  this.et = _4;
  this.eu = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 5;
});
$p.s = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, 417360321, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().b(this.fm, x$0.fm) && $m_sr_BoxesRunTime$().b(this.er, x$0.er)) && $m_sr_BoxesRunTime$().b(this.es, x$0.es)) && $m_sr_BoxesRunTime$().b(this.et, x$0.et)) && $m_sr_BoxesRunTime$().b(this.eu, x$0.eu))));
});
$p.D = (function() {
  return "Tuple5";
});
$p.m = (function() {
  return (((((((((("(" + this.fm) + ",") + this.er) + ",") + this.es) + ",") + this.et) + ",") + this.eu) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  al: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.fn = null;
  this.ev = null;
  this.ew = null;
  this.ex = null;
  this.ey = null;
  this.ez = null;
  this.fn = _1;
  this.ev = _2;
  this.ew = _3;
  this.ex = _4;
  this.ey = _5;
  this.ez = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 6;
});
$p.s = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, (-1037607828), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().b(this.fn, x$0.fn) && $m_sr_BoxesRunTime$().b(this.ev, x$0.ev)) && $m_sr_BoxesRunTime$().b(this.ew, x$0.ew)) && $m_sr_BoxesRunTime$().b(this.ex, x$0.ex)) && $m_sr_BoxesRunTime$().b(this.ey, x$0.ey)) && $m_sr_BoxesRunTime$().b(this.ez, x$0.ez))));
});
$p.D = (function() {
  return "Tuple6";
});
$p.m = (function() {
  return (((((((((((("(" + this.fn) + ",") + this.ev) + ",") + this.ew) + ",") + this.ex) + ",") + this.ey) + ",") + this.ez) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  am: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.fo = null;
  this.eA = null;
  this.eB = null;
  this.eC = null;
  this.eD = null;
  this.eE = null;
  this.eF = null;
  this.fo = _1;
  this.eA = _2;
  this.eB = _3;
  this.eC = _4;
  this.eD = _5;
  this.eE = _6;
  this.eF = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 7;
});
$p.s = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, (-1050932777), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().b(this.fo, x$0.fo) && $m_sr_BoxesRunTime$().b(this.eA, x$0.eA)) && $m_sr_BoxesRunTime$().b(this.eB, x$0.eB)) && $m_sr_BoxesRunTime$().b(this.eC, x$0.eC)) && $m_sr_BoxesRunTime$().b(this.eD, x$0.eD)) && $m_sr_BoxesRunTime$().b(this.eE, x$0.eE)) && $m_sr_BoxesRunTime$().b(this.eF, x$0.eF))));
});
$p.D = (function() {
  return "Tuple7";
});
$p.m = (function() {
  return (((((((((((((("(" + this.fo) + ",") + this.eA) + ",") + this.eB) + ",") + this.eC) + ",") + this.eD) + ",") + this.eE) + ",") + this.eF) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  an: 1,
  b: 1,
  c: 1,
  bR: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.fp = null;
  this.eG = null;
  this.eH = null;
  this.eI = null;
  this.eJ = null;
  this.eK = null;
  this.eL = null;
  this.eM = null;
  this.fp = _1;
  this.eG = _2;
  this.eH = _3;
  this.eI = _4;
  this.eJ = _5;
  this.eK = _6;
  this.eL = _7;
  this.eM = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 8;
});
$p.s = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, 1998822530, true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().b(this.fp, x$0.fp) && $m_sr_BoxesRunTime$().b(this.eG, x$0.eG)) && $m_sr_BoxesRunTime$().b(this.eH, x$0.eH)) && $m_sr_BoxesRunTime$().b(this.eI, x$0.eI)) && $m_sr_BoxesRunTime$().b(this.eJ, x$0.eJ)) && $m_sr_BoxesRunTime$().b(this.eK, x$0.eK)) && $m_sr_BoxesRunTime$().b(this.eL, x$0.eL)) && $m_sr_BoxesRunTime$().b(this.eM, x$0.eM))));
});
$p.D = (function() {
  return "Tuple8";
});
$p.m = (function() {
  return (((((((((((((((("(" + this.fp) + ",") + this.eG) + ",") + this.eH) + ",") + this.eI) + ",") + this.eJ) + ",") + this.eK) + ",") + this.eL) + ",") + this.eM) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  ao: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.fq = null;
  this.eN = null;
  this.eO = null;
  this.eP = null;
  this.eQ = null;
  this.eR = null;
  this.eS = null;
  this.eT = null;
  this.eU = null;
  this.fq = _1;
  this.eN = _2;
  this.eO = _3;
  this.eP = _4;
  this.eQ = _5;
  this.eR = _6;
  this.eS = _7;
  this.eT = _8;
  this.eU = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 9;
});
$p.s = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().M(this, (-1807911176), true);
});
$p.r = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().b(this.fq, x$0.fq) && $m_sr_BoxesRunTime$().b(this.eN, x$0.eN)) && $m_sr_BoxesRunTime$().b(this.eO, x$0.eO)) && $m_sr_BoxesRunTime$().b(this.eP, x$0.eP)) && $m_sr_BoxesRunTime$().b(this.eQ, x$0.eQ)) && $m_sr_BoxesRunTime$().b(this.eR, x$0.eR)) && $m_sr_BoxesRunTime$().b(this.eS, x$0.eS)) && $m_sr_BoxesRunTime$().b(this.eT, x$0.eT)) && $m_sr_BoxesRunTime$().b(this.eU, x$0.eU))));
});
$p.D = (function() {
  return "Tuple9";
});
$p.m = (function() {
  return (((((((((((((((((("(" + this.fq) + ",") + this.eN) + ",") + this.eO) + ",") + this.eP) + ",") + this.eQ) + ",") + this.eR) + ",") + this.eS) + ",") + this.eT) + ",") + this.eU) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ap)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  ap: 1,
  b: 1,
  c: 1,
  bT: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.fP() + "("), ", ", ")");
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
$p.L = (function() {
  return false;
});
$p.nk = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.ai = (function() {
  return 0;
});
$p.H = (function() {
  this.nk();
});
$p.hG = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  c3: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.al instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.al;
      $thiz.al = c.al;
      $thiz.bc = c.bc;
      if ((c.au !== null)) {
        if (($thiz.at === null)) {
          $thiz.at = c.at;
        }
        var x$proxy10 = c.at;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().hB();
        }
        x$proxy10.g1 = $thiz.au;
        $thiz.au = c.au;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.au === null)) {
      $thiz.al = null;
      $thiz.at = null;
      return false;
    } else {
      $thiz.al = $thiz.au.mu();
      if (($thiz.at === $thiz.au)) {
        var x$proxy12 = $thiz.at;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().hB();
        }
        $thiz.at = x$proxy12.g1;
      }
      $thiz.au = $thiz.au.g1;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.bc) {
        return true;
      } else {
        if ((!(($thiz.al !== null) && $thiz.al.L()))) {
          continue;
        }
        $thiz.bc = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.al = null;
  this.au = null;
  this.at = null;
  this.bc = false;
  this.al = from;
  this.au = null;
  this.at = null;
  this.bc = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.L = (function() {
  if (this.bc) {
    return true;
  } else if ((this.al !== null)) {
    if (this.al.L()) {
      this.bc = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.H = (function() {
  if (this.L()) {
    this.bc = false;
    var x$proxy13 = this.al;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().hB();
    }
    return x$proxy13.H();
  } else {
    return $m_sc_Iterator$().aW.H();
  }
});
$p.m0 = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.au === null)) {
    this.au = c;
    this.at = c;
  } else {
    var x$proxy14 = this.at;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().hB();
    }
    x$proxy14.g1 = c;
    this.at = c;
  }
  if ((this.al === null)) {
    this.al = $m_sc_Iterator$().aW;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.au)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  au: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.aX > 0)) {
    if ($thiz.bd.L()) {
      $thiz.bd.H();
      $thiz.aX = (($thiz.aX - 1) | 0);
    } else {
      $thiz.aX = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.ap < 0)) {
    return (-1);
  } else {
    var that = (($thiz.ap - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.bd = null;
  this.ap = 0;
  this.aX = 0;
  this.bd = underlying;
  this.ap = limit;
  this.aX = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.ai = (function() {
  var size = this.bd.ai();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.aX) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.ap < 0)) {
      return dropSize;
    } else {
      var x = this.ap;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.L = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.ap !== 0) && this.bd.L());
});
$p.H = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.ap > 0)) {
    this.ap = ((this.ap - 1) | 0);
    return this.bd.H();
  } else {
    return ((this.ap < 0) ? this.bd.H() : $m_sc_Iterator$().aW.H());
  }
});
$p.hG = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.ap < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.aX + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().aW;
  } else if ((sum < 0)) {
    this.aX = 2147483647;
    this.ap = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.bd, ((sum - 2147483647) | 0), rest))));
  } else {
    this.aX = sum;
    this.ap = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  c5: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.ma(n);
  if (skipped.a5()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.iM();
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
      if ((((!a$tailLocal1.a5()) && (!b$tailLocal1.a5())) && $m_sr_BoxesRunTime$().b(a$tailLocal1.iM(), b$tailLocal1.iM()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.iR();
        var b$tailLocal1$tmp1 = b$tailLocal1.iR();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.a5() && b$tailLocal1.a5());
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
  ck: 1,
  a: 1,
  at: 1,
  c7: 1,
  cb: 1
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
  this.ji = null;
  this.g3 = 0;
  this.jh = 0;
  this.ji = x$1;
  this.g3 = 0;
  this.jh = x$1.z();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.L = (function() {
  return (this.g3 < this.jh);
});
$p.H = (function() {
  var result = this.ji.s(this.g3);
  this.g3 = ((1 + this.g3) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  cV: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a1)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  a1: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1,
  z: 1
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
  b1: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1,
  z: 1
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
  b3: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1,
  z: 1
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
  return $m_RTLong$().lu($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  a3: 1,
  m: 1,
  a: 1,
  i: 1,
  g: 1,
  z: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  b8: 1,
  a2: 1,
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
  var str = $m_jl_Character$().nU(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bb: 1,
  a: 1,
  i: 1,
  F: 1,
  g: 1,
  z: 1
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
$p.gA = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.iG = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fP = (function() {
  return this.f5();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.h5 = null;
  this.aV = 0;
  this.g0 = 0;
  this.h5 = xs;
  this.aV = 0;
  this.g0 = $m_jl_reflect_Array$().iL(this.h5);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.ai = (function() {
  return ((this.g0 - this.aV) | 0);
});
$p.L = (function() {
  return (this.aV < this.g0);
});
$p.H = (function() {
  if ((this.aV >= $m_jl_reflect_Array$().iL(this.h5))) {
    $m_sc_Iterator$().aW.H();
  }
  var r = $m_sr_ScalaRunTime$().fO(this.h5, this.aV);
  this.aV = ((1 + this.aV) | 0);
  return r;
});
$p.hx = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.aV + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.g0;
    } else {
      var a = this.g0;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.aV = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  bX: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.az) ? $thiz.az : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.j4 = null;
  this.bb = 0;
  this.az = 0;
  this.j4 = self;
  this.bb = 0;
  this.az = self.J();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.ai = (function() {
  return this.az;
});
$p.L = (function() {
  return (this.az > 0);
});
$p.H = (function() {
  if ((this.az > 0)) {
    var r = this.j4.a3(this.bb);
    this.bb = ((1 + this.bb) | 0);
    this.az = ((this.az - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().aW.H();
  }
});
$p.hx = (function(n) {
  if ((n > 0)) {
    this.bb = ((this.bb + n) | 0);
    var b = ((this.az - n) | 0);
    this.az = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.hG = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.az = ((b < 0) ? 0 : b);
  this.bb = ((this.bb + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c1: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.j8)) {
    $thiz.j7 = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.j8 = true;
  }
  return $thiz.j7;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.j7 = null;
  this.j8 = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  cg: 1,
  a: 1,
  as: 1,
  aq: 1,
  ar: 1,
  av: 1
}));
var $n_sci_ArraySeq$;
function $m_sci_ArraySeq$() {
  if ((!$n_sci_ArraySeq$)) {
    $n_sci_ArraySeq$ = new $c_sci_ArraySeq$();
  }
  return $n_sci_ArraySeq$;
}
/** @constructor */
function $c_scm_ArraySeq$() {
  this.ja = null;
  $n_scm_ArraySeq$ = this;
  this.ja = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cn: 1,
  a: 1,
  as: 1,
  aq: 1,
  ar: 1,
  av: 1
}));
var $n_scm_ArraySeq$;
function $m_scm_ArraySeq$() {
  if ((!$n_scm_ArraySeq$)) {
    $n_scm_ArraySeq$ = new $c_scm_ArraySeq$();
  }
  return $n_scm_ArraySeq$;
}
function $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__($thiz, _out, autoFlush, charset) {
  $ct_Ljava_io_FilterOutputStream__Ljava_io_OutputStream__($thiz, _out);
  return $thiz;
}
/** @constructor */
function $c_Ljava_io_PrintStream() {
}
$p = $c_Ljava_io_PrintStream.prototype = new $h_Ljava_io_FilterOutputStream();
$p.constructor = $c_Ljava_io_PrintStream;
/** @constructor */
function $h_Ljava_io_PrintStream() {
}
$h_Ljava_io_PrintStream.prototype = $p;
/** @constructor */
function $c_T$package$EmptyTuple$() {
}
$p = $c_T$package$EmptyTuple$.prototype = new $h_O();
$p.constructor = $c_T$package$EmptyTuple$;
/** @constructor */
function $h_T$package$EmptyTuple$() {
}
$h_T$package$EmptyTuple$.prototype = $p;
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.x = (function() {
  return 924202651;
});
$p.z = (function() {
  return 0;
});
$p.D = (function() {
  return "EmptyTuple";
});
$p.s = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.m = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bU: 1,
  b: 1,
  c: 1,
  a: 1,
  ct: 1,
  cu: 1,
  cv: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.f5() + "(<not computed>)");
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
    this.aL = null;
    this.aL = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  hz() {
    return $dp_toString__T(this.aL);
  }
  D() {
    return "JavaScriptException";
  }
  z() {
    return 1;
  }
  s(x$1) {
    return ((x$1 === 0) ? this.aL : $m_sr_Statics$().mA(x$1));
  }
  I() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  x() {
    return $m_s_util_hashing_MurmurHash3$().M(this, 1744042595, true);
  }
  r(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().b(this.aL, x$1.aL)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aG)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aG: 1,
  k: 1,
  j: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.iU && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.iU = false;
  this.fY = null;
  this.iU = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.fY = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.mD = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.fY = (("" + this.fY) + rest);
      rest = "";
    } else {
      var $x_1 = this.fY;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.fY = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  b5: 1,
  aT: 1,
  aS: 1,
  X: 1,
  V: 1,
  Z: 1,
  W: 1,
  Y: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.a5())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.iR();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.hK = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.m = (function() {
  return this.hK;
});
$p.r = (function(that) {
  return (this === that);
});
$p.x = (function() {
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
$p.m = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.hK = null;
  this.hK = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cC: 1,
  cD: 1,
  cB: 1,
  a: 1,
  cE: 1,
  cy: 1,
  b: 1,
  cz: 1,
  cA: 1
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
      if (o.iJ($thiz)) {
        return $thiz.hF(o);
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
$p.a5 = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.hF = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.iJ = (function(that) {
  return true;
});
$p.r = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().ls(this);
});
$p.m = (function() {
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.o)));
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.o)));
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.n.H)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.H)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.g2 = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.g2 = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.a3 = (function(idx) {
  return this.g2.a3(idx);
});
$p.J = (function() {
  return this.g2.J();
});
$p.a5 = (function() {
  return this.g2.a5();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.g2 = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.f4 = (function(len) {
  var x = this.J();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ai = (function() {
  return this.J();
});
$p.a9 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.f5 = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  c0: 1,
  c9: 1,
  bV: 1,
  bW: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  a: 1,
  cd: 1,
  t: 1,
  c8: 1,
  w: 1,
  bZ: 1
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
  return ($is_sci_IndexedSeq(that) ? ($thiz.J() === that.J()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.J();
      var equal = (length === o.J());
      if (equal) {
        var index = 0;
        var a = $thiz.iI();
        var b = o.iI();
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
          equal = $m_sr_BoxesRunTime$().b($thiz.a3(index), o.a3(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.a9().hx(index);
          var thatIt = o.a9().hx(index);
          while ((equal && thisIt.L())) {
            equal = $m_sr_BoxesRunTime$().b(thisIt.H(), thatIt.H());
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
  this.h6 = null;
  this.h6 = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.iJ = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hF = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.iI = (function() {
  return $m_sci_IndexedSeqDefaults$().j9;
});
$p.a9 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.f4 = (function(len) {
  var x = this.J();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ai = (function() {
  return this.J();
});
$p.r = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.x = (function() {
  return $m_s_util_hashing_MurmurHash3$().ls(this);
});
$p.m = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.a5 = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.gA = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.iG = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.J = (function() {
  return (this.h6.length | 0);
});
$p.a3 = (function(idx) {
  return this.h6[idx];
});
$p.fP = (function() {
  return "WrappedVarArgs";
});
$p.h = (function(v1) {
  return this.a3((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aH)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aH: 1,
  E: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  I: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  K: 1,
  J: 1,
  w: 1,
  o: 1,
  ay: 1,
  L: 1,
  C: 1,
  D: 1,
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
/** @constructor */
function $c_sci_ArraySeq() {
}
$p = $c_sci_ArraySeq.prototype = new $h_sci_AbstractSeq();
$p.constructor = $c_sci_ArraySeq;
/** @constructor */
function $h_sci_ArraySeq() {
}
$h_sci_ArraySeq.prototype = $p;
$p.f4 = (function(len) {
  var x = this.aY.c.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ai = (function() {
  return this.aY.c.length;
});
$p.f5 = (function() {
  return "IndexedSeq";
});
$p.iJ = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.hF = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fP = (function() {
  return "ArraySeq";
});
$p.iI = (function() {
  return 2147483647;
});
/** @constructor */
function $c_scm_ArraySeq() {
}
$p = $c_scm_ArraySeq.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_ArraySeq;
/** @constructor */
function $h_scm_ArraySeq() {
}
$h_scm_ArraySeq.prototype = $p;
$p.f4 = (function(len) {
  var x = this.aA.c.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.ai = (function() {
  return this.aA.c.length;
});
$p.f5 = (function() {
  return "IndexedSeq";
});
$p.fP = (function() {
  return "ArraySeq";
});
$p.r = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.aA.c.length !== other.aA.c.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.aY = null;
  this.aY = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.J = (function() {
  return this.aY.c.length;
});
$p.a3 = (function(i) {
  return this.aY.c[i];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.kK(this.aY, this$1.fs);
});
$p.r = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().kV(this.aY, that.aY) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.a9 = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aY);
});
$p.h = (function(v1) {
  return this.a3((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ax)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  ax: 1,
  cf: 1,
  aw: 1,
  B: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  I: 1,
  K: 1,
  J: 1,
  w: 1,
  o: 1,
  ay: 1,
  E: 1,
  C: 1,
  D: 1,
  L: 1,
  bY: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    return ((i$tailLocal1 === len$1) ? (xs$tailLocal1.a5() ? 0 : 1) : (xs$tailLocal1.a5() ? (-1) : xs$tailLocal1.gW()));
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.a5();
      var bEmpty = b$tailLocal1.a5();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.hA();
      }
      if (false) {
        a$tailLocal1.gW();
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
$p.a3 = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.hF = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.f5 = (function() {
  return "LinearSeq";
});
$p.a5 = (function() {
  return (this === $m_sci_Nil$());
});
$p.gA = (function(f) {
  var these = this;
  while ((!these.a5())) {
    f.h(these.hA());
    these.gW();
  }
});
$p.J = (function() {
  var these = this;
  var len = 0;
  while ((!these.a5())) {
    len = ((1 + len) | 0);
    these.gW();
  }
  return len;
});
$p.f4 = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.fP = (function() {
  return "List";
});
$p.r = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.ma = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.h = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.aA = null;
  this.aA = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.J = (function() {
  return this.aA.c.length;
});
$p.a3 = (function(index) {
  return this.aA.c[index];
});
$p.x = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.kK(this.aA, this$1.fs);
});
$p.r = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().kV(this.aA, that.aA) : $c_scm_ArraySeq.prototype.r.call(this, that));
});
$p.a9 = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aA);
});
$p.h = (function(v1) {
  return this.a3((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aB)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aB: 1,
  aA: 1,
  M: 1,
  B: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  Q: 1,
  y: 1,
  N: 1,
  S: 1,
  R: 1,
  w: 1,
  o: 1,
  P: 1,
  O: 1,
  C: 1,
  D: 1,
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
$p.I = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.z = (function() {
  return 0;
});
$p.D = (function() {
  return "Nil";
});
$p.s = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.hA = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.gW = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.ai = (function() {
  return 0;
});
$p.a9 = (function() {
  return $m_sc_Iterator$().aW;
});
$p.iM = (function() {
  this.hA();
});
$p.iR = (function() {
  this.gW();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  cl: 1,
  az: 1,
  aw: 1,
  B: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  I: 1,
  K: 1,
  J: 1,
  c6: 1,
  H: 1,
  cj: 1,
  ci: 1,
  C: 1,
  D: 1,
  ca: 1,
  L: 1,
  a: 1,
  ce: 1,
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
  $thiz.aK = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.aK = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.a9 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.f4 = (function(len) {
  var x = this.aK.J();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.f5 = (function() {
  return "IndexedSeq";
});
$p.J = (function() {
  return this.aK.J();
});
$p.ai = (function() {
  return this.aK.J();
});
$p.m = (function() {
  return this.aK.aa;
});
$p.a5 = (function() {
  return (this.aK.J() === 0);
});
$p.a3 = (function(i) {
  return $bC(this.aK.kO(i));
});
$p.h = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.aK.kO(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cs: 1,
  M: 1,
  B: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  Q: 1,
  y: 1,
  N: 1,
  S: 1,
  R: 1,
  aD: 1,
  aE: 1,
  aC: 1,
  cq: 1,
  w: 1,
  o: 1,
  P: 1,
  O: 1,
  F: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.fr = null;
  this.fr = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.f5 = (function() {
  return "IndexedSeq";
});
$p.a9 = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.f4 = (function(len) {
  var x = (this.fr.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.a3 = (function(index) {
  return this.fr[index];
});
$p.J = (function() {
  return (this.fr.length | 0);
});
$p.ai = (function() {
  return (this.fr.length | 0);
});
$p.fP = (function() {
  return "WrappedArray";
});
$p.h = (function(v1) {
  var index = (v1 | 0);
  return this.fr[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  d5: 1,
  cm: 1,
  M: 1,
  B: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  h: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  Q: 1,
  y: 1,
  N: 1,
  S: 1,
  R: 1,
  aD: 1,
  aE: 1,
  cr: 1,
  co: 1,
  D: 1,
  C: 1,
  O: 1,
  w: 1,
  o: 1,
  P: 1,
  cp: 1,
  aC: 1,
  a: 1
}));
$s_Lsketches_rooms_gridceiling_roomsGridCeiling__main__AT__V(new ($d_T.r().C)([]));
