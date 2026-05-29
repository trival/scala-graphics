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
  return (arg0.$classData.Z ? arg0.ae() : $objectClone(arg0));
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
        return null.mO();
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
        return instance.m(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.m.call(instance, x0);
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
        return instance.p();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.p.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.mP(x0);
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
$p.p = (function() {
  return $systemIdentityHashCode(this);
});
$p.m = (function(that) {
  return (this === that);
});
$p.j = (function() {
  var i = this.p();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.j();
});
function $ac_O(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = null;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_O.prototype = new $h_O();
$p.constructor = $ac_O;
$p.a5 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.ae = (function() {
  return new $ac_O(this.a.slice());
});
function $ah_O() {
}
$ah_O.prototype = $p;
function $ac_Z(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Array(arg);
    for (var i = 0; (i < arg); (i++)) {
      this.a[i] = false;
    }
  } else {
    this.a = arg;
  }
}
$p = $ac_Z.prototype = new $h_O();
$p.constructor = $ac_Z;
$p.a5 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
});
$p.ae = (function() {
  return new $ac_Z(this.a.slice());
});
function $ac_C(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Uint16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_C.prototype = new $h_O();
$p.constructor = $ac_C;
$p.a5 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ae = (function() {
  return new $ac_C(this.a.slice());
});
function $ac_B(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int8Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_B.prototype = new $h_O();
$p.constructor = $ac_B;
$p.a5 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ae = (function() {
  return new $ac_B(this.a.slice());
});
function $ac_S(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int16Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_S.prototype = new $h_O();
$p.constructor = $ac_S;
$p.a5 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ae = (function() {
  return new $ac_S(this.a.slice());
});
function $ac_I(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_I.prototype = new $h_O();
$p.constructor = $ac_I;
$p.a5 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ae = (function() {
  return new $ac_I(this.a.slice());
});
function $ac_J(arg) {
  if (((typeof arg) === "number")) {
    arg = (arg << 1);
    this.a = new Int32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_J.prototype = new $h_O();
$p.constructor = $ac_J;
$p.a5 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.ae = (function() {
  return new $ac_J(this.a.slice());
});
function $ac_F(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float32Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_F.prototype = new $h_O();
$p.constructor = $ac_F;
$p.a5 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ae = (function() {
  return new $ac_F(this.a.slice());
});
function $ac_D(arg) {
  if (((typeof arg) === "number")) {
    this.a = new Float64Array(arg);
  } else {
    this.a = arg;
  }
}
$p = $ac_D.prototype = new $h_O();
$p.constructor = $ac_D;
$p.a5 = (function(srcPos, dest, destPos, length) {
  dest.a.set(this.a.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.ae = (function() {
  return new $ac_D(this.a.slice());
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
    x: 1,
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
    var u = result.a;
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
      this.a = new Array(arg);
      for (var i = 0; (i < arg); (i++)) {
        this.a[i] = null;
      }
    } else {
      this.a = arg;
    }
  }
  var $p = ArrayClass.prototype = new $ah_O();
  $p.constructor = ArrayClass;
  $p.a5 = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.a, srcPos, dest.a, destPos, length);
  });
  $p.ae = (function() {
    return new ArrayClass(this.a.slice());
  });
  $p.$classData = this;
  var arrayBase = (componentData.B || componentData);
  var arrayDepth = (componentData.D + 1);
  var name = ("[" + componentData.E);
  this.C = ArrayClass;
  this.n = ({
    x: 1,
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
  this.iA = null;
  this.ks = null;
  $n_jl_System$Streams$ = this;
  this.iA = new $c_jl_JSConsoleBasedPrintStream(false);
  this.ks = new $c_jl_JSConsoleBasedPrintStream(true);
}
$p = $c_jl_System$Streams$.prototype = new $h_O();
$p.constructor = $c_jl_System$Streams$;
/** @constructor */
function $h_jl_System$Streams$() {
}
$h_jl_System$Streams$.prototype = $p;
var $d_jl_System$Streams$ = new $TypeData().i($c_jl_System$Streams$, "java.lang.System$Streams$", ({
  bf: 1
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
  this.hk = null;
  this.iB = null;
  $n_jl_System$SystemProperties$ = this;
  this.hk = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.iB = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.k1 = (function(key, default$1) {
  if ((this.hk !== null)) {
    var dict = this.hk;
    return ((!(!$m_jl_Utils$Cache$().iD.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.iB.k1(key, default$1);
  }
});
var $d_jl_System$SystemProperties$ = new $TypeData().i($c_jl_System$SystemProperties$, "java.lang.System$SystemProperties$", ({
  bg: 1
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
  this.iD = null;
  $n_jl_Utils$Cache$ = this;
  this.iD = Object.prototype.hasOwnProperty;
}
$p = $c_jl_Utils$Cache$.prototype = new $h_O();
$p.constructor = $c_jl_Utils$Cache$;
/** @constructor */
function $h_jl_Utils$Cache$() {
}
$h_jl_Utils$Cache$.prototype = $p;
var $d_jl_Utils$Cache$ = new $TypeData().i($c_jl_Utils$Cache$, "java.lang.Utils$Cache$", ({
  bi: 1
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
  bj: 1
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
$p.g3 = (function(array) {
  return ((array instanceof $ac_O) ? array.a.length : ((array instanceof $ac_Z) ? array.a.length : ((array instanceof $ac_C) ? array.a.length : ((array instanceof $ac_B) ? array.a.length : ((array instanceof $ac_S) ? array.a.length : ((array instanceof $ac_I) ? array.a.length : ((array instanceof $ac_J) ? ((array.a.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.a.length : ((array instanceof $ac_D) ? array.a.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
});
var $d_jl_reflect_Array$ = new $TypeData().i($c_jl_reflect_Array$, "java.lang.reflect.Array$", ({
  bk: 1
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
$p.kM = (function(a, key) {
  var startIndex = 0;
  var endIndex = a.a.length;
  while (true) {
    if ((startIndex === endIndex)) {
      return (~startIndex);
    } else {
      var mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
      var elem = a.a[mid];
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
  bl: 1
}));
var $n_ju_Arrays$;
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$();
  }
  return $n_ju_Arrays$;
}
function $s_RTLong__remainderUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().mk(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().mj(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().l2(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().l1(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().k0(value);
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
  return $m_RTLong$().km(lo, hi);
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
$p.km = (function(lo, hi) {
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
$p.k0 = (function(value) {
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
$p.l1 = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.hb(rlo, rhi, rlo$1, rhi$1, true);
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
$p.l2 = (function(alo, ahi, blo, bhi) {
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
    return this.hb(alo, ahi, blo, bhi, true);
  }
});
$p.mj = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.hb(rlo, rhi, rlo$1, rhi$1, false);
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
$p.mk = (function(alo, ahi, blo, bhi) {
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
    return this.hb(alo, ahi, blo, bhi, false);
  }
});
$p.hb = (function(alo, ahi, blo, bhi, askQuotient) {
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
  bn: 1
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
$p.jY = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.a.length !== ys.a.length)) {
    return false;
  }
  var len = xs.a.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().b(xs.a[i], ys.a[i]))) {
      return false;
    }
    i = ((1 + i) | 0);
  }
  return true;
});
var $d_s_Array$ = new $TypeData().i($c_s_Array$, "scala.Array$", ({
  bo: 1
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
  var it = $thiz.N();
  while (it.C()) {
    f.I(it.B());
  }
}
function $f_sc_IterableOnceOps__copyToArray__O__I__I__I($thiz, dest, start, n) {
  var it = $thiz.N();
  var i = start;
  matchResult18: {
    var srclen;
    var x31 = $thiz.T();
    if ((x31 === (-1))) {
      var srclen = $m_jl_reflect_Array$().g3(dest);
      break matchResult18;
    }
    var srclen = x31;
  }
  var destLen = $m_jl_reflect_Array$().g3(dest);
  var limit = ((n < srclen) ? n : srclen);
  var capacity = ((start < 0) ? destLen : ((destLen - start) | 0));
  var total = ((capacity < limit) ? capacity : limit);
  var end = ((start + ((total < 0) ? 0 : total)) | 0);
  while (((i < end) && it.C())) {
    $m_sr_ScalaRunTime$().kJ(dest, i, it.B());
    i = ((1 + i) | 0);
  }
  return ((i - start) | 0);
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.T() === 0) ? (("" + start) + end) : $thiz.i2($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).ag.Q);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.ag;
  if ((start.length !== 0)) {
    jsb.Q = (("" + jsb.Q) + start);
  }
  var it = $thiz.N();
  if (it.C()) {
    var obj = it.B();
    jsb.Q = (("" + jsb.Q) + obj);
    while (it.C()) {
      if ((sep.length !== 0)) {
        jsb.Q = (("" + jsb.Q) + sep);
      }
      var obj$1 = it.B();
      jsb.Q = (("" + jsb.Q) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.Q = (("" + jsb.Q) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.iK = null;
  this.fq = null;
  this.iK = head;
  this.fq = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.ls = (function() {
  return this.iK.fh().N();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  c6: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.iL = null;
  $n_sc_StringOps$ = this;
  this.iL = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.iL));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  ce: 1
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
  this.iO = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().lD($m_jl_System$SystemProperties$().k1("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.iO = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  cj: 1
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
  return ((x === y) || ($is_jl_Number(x) ? this.lb(x, y) : ((x instanceof $Char) ? this.l9(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.lb = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.la(xn, y);
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
$p.la = (function(xn, yn) {
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
      return (false && yn.m(x2));
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
      return (false && yn.m($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.l9 = (function(xc, y) {
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
  cS: 1
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
$p.kK = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.ha = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  cW: 1
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
$p.fi = (function(xs, idx) {
  if ((xs instanceof $ac_O)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_I)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_D)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = xs.a;
    var $x_2 = (idx << 1);
    return $bL($x_1[$x_2], $x_1[(($x_2 + 1) | 0)]);
  }
  if ((xs instanceof $ac_F)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_C)) {
    return $bC(xs.a[idx]);
  }
  if ((xs instanceof $ac_B)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_S)) {
    return xs.a[idx];
  }
  if ((xs instanceof $ac_Z)) {
    return xs.a[idx];
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.kJ = (function(xs, idx, value) {
  if ((xs instanceof $ac_O)) {
    xs.a[idx] = value;
    return (void 0);
  }
  if ((xs instanceof $ac_I)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_D)) {
    xs.a[idx] = (+value);
    return (void 0);
  }
  if ((xs instanceof $ac_J)) {
    var $x_1 = $uJ(value);
    var $x_2 = xs.a;
    var $x_3 = (idx << 1);
    $x_2[$x_3] = $x_1.l;
    $x_2[(($x_3 + 1) | 0)] = $x_1.h;
    return (void 0);
  }
  if ((xs instanceof $ac_F)) {
    xs.a[idx] = Math.fround(value);
    return (void 0);
  }
  if ((xs instanceof $ac_C)) {
    xs.a[idx] = $uC(value);
    return (void 0);
  }
  if ((xs instanceof $ac_B)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_S)) {
    xs.a[idx] = (value | 0);
    return (void 0);
  }
  if ((xs instanceof $ac_Z)) {
    xs.a[idx] = (!(!value));
    return (void 0);
  }
  if ((xs === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  throw new $c_s_MatchError(xs);
});
$p.kz = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.A(), (x.x() + "("), ",", ")");
});
$p.kn = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_sci_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef(this$2);
  } else {
    return new $c_sci_ArraySeq$ofRef(xs);
  }
});
var $d_sr_ScalaRunTime$ = new $TypeData().i($c_sr_ScalaRunTime$, "scala.runtime.ScalaRunTime$", ({
  cX: 1
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
$p.lH = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.l3 = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().k0(dv);
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
$p.K = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.l3((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.lH($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.lB = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  cZ: 1
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
    return new $c_T2(x, self.eG);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.a6, self.Z);
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.e0, self.aE, self.aF);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.e1, self.aG, self.aH, self.aI);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.eU, self.e2, self.e3, self.e4, self.e5);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.eV, self.e6, self.e7, self.e8, self.e9, self.ea);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.eW, self.eb, self.ec, self.ed, self.ee, self.ef, self.eg);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.eX, self.eh, self.ei, self.ej, self.ek, self.el, self.em, self.en);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.eY, self.eo, self.ep, self.eq, self.er, self.es, self.et, self.eu, self.ev);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.eH, self.aR, self.aS, self.aT, self.aU, self.aV, self.aW, self.aX, self.aY, self.aQ);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.eI, self.b1, self.b2, self.b3, self.b4, self.b5, self.b6, self.b7, self.b8, self.aZ, self.b0);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.eJ, self.bc, self.bd, self.be, self.bf, self.bg, self.bh, self.bi, self.bj, self.b9, self.ba, self.bb);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.eK, self.bo, self.bp, self.bq, self.br, self.bs, self.bt, self.bu, self.bv, self.bk, self.bl, self.bm, self.bn);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.eL, self.bB, self.bC, self.bD, self.bE, self.bF, self.bG, self.bH, self.bI, self.bw, self.bx, self.by, self.bz, self.bA);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.eM, self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bV, self.bW, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.eN, self.c4, self.c5, self.c6, self.c7, self.c8, self.c9, self.ca, self.cb, self.bX, self.bY, self.bZ, self.c0, self.c1, self.c2, self.c3);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.eO, self.ck, self.cl, self.cm, self.cn, self.co, self.cp, self.cq, self.cr, self.cc, self.cd, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.eP, self.cB, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.cA);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.eQ, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cR, self.cS);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.eR, self.db, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.dj, self.d1, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.d9, self.da, self.dc);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.eS, self.dv, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq, self.dr, self.ds, self.dt, self.du, self.dw, self.dx);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.eT, self.dP, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.dF, self.dG, self.dH, self.dI, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dQ, self.dR, self.dS]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.s()) | 0));
  arr.a[0] = x;
  var src = xxl.J;
  var length = xxl.s();
  src.a5(0, arr, 1, length);
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
      var $x_1 = new $c_T1(self.Z);
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = new $c_T2(self.aE, self.aF);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.aG, self.aH, self.aI);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.e2, self.e3, self.e4, self.e5);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.e6, self.e7, self.e8, self.e9, self.ea);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.eb, self.ec, self.ed, self.ee, self.ef, self.eg);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.eh, self.ei, self.ej, self.ek, self.el, self.em, self.en);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.eo, self.ep, self.eq, self.er, self.es, self.et, self.eu, self.ev);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.aR, self.aS, self.aT, self.aU, self.aV, self.aW, self.aX, self.aY, self.aQ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.b1, self.b2, self.b3, self.b4, self.b5, self.b6, self.b7, self.b8, self.aZ, self.b0);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.bc, self.bd, self.be, self.bf, self.bg, self.bh, self.bi, self.bj, self.b9, self.ba, self.bb);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.bo, self.bp, self.bq, self.br, self.bs, self.bt, self.bu, self.bv, self.bk, self.bl, self.bm, self.bn);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.bB, self.bC, self.bD, self.bE, self.bF, self.bG, self.bH, self.bI, self.bw, self.bx, self.by, self.bz, self.bA);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.bP, self.bQ, self.bR, self.bS, self.bT, self.bU, self.bV, self.bW, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.c4, self.c5, self.c6, self.c7, self.c8, self.c9, self.ca, self.cb, self.bX, self.bY, self.bZ, self.c0, self.c1, self.c2, self.c3);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.ck, self.cl, self.cm, self.cn, self.co, self.cp, self.cq, self.cr, self.cc, self.cd, self.ce, self.cf, self.cg, self.ch, self.ci, self.cj);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.cB, self.cC, self.cD, self.cE, self.cF, self.cG, self.cH, self.cI, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx, self.cy, self.cz, self.cA);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cZ, self.d0, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cQ, self.cR, self.cS);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.db, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.dj, self.d1, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.d9, self.da, self.dc);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.dv, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq, self.dr, self.ds, self.dt, self.du, self.dw, self.dx);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.dP, self.dT, self.dU, self.dV, self.dW, self.dX, self.dY, self.dZ, self.dF, self.dG, self.dH, self.dI, self.dJ, self.dK, self.dL, self.dM, self.dN, self.dO, self.dQ, self.dR, self.dS);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.s() === 23)) {
    var elems = xxl.J;
    return new $c_T22(elems.a[1], elems.a[2], elems.a[3], elems.a[4], elems.a[5], elems.a[6], elems.a[7], elems.a[8], elems.a[9], elems.a[10], elems.a[11], elems.a[12], elems.a[13], elems.a[14], elems.a[15], elems.a[16], elems.a[17], elems.a[18], elems.a[19], elems.a[20], elems.a[21], elems.a[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.J.a.length - 1) | 0));
    var src = xxl.J;
    var length = ((xxl.J.a.length - 1) | 0);
    src.a5(1, arr$1, 0, length);
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
$p.li = (function(xs) {
  switch (xs.a.length) {
    case 0: {
      return $m_T$package$EmptyTuple$();
      break;
    }
    case 1: {
      return new $c_T1(xs.a[0]);
      break;
    }
    case 2: {
      return new $c_T2(xs.a[0], xs.a[1]);
      break;
    }
    case 3: {
      return new $c_T3(xs.a[0], xs.a[1], xs.a[2]);
      break;
    }
    case 4: {
      return new $c_T4(xs.a[0], xs.a[1], xs.a[2], xs.a[3]);
      break;
    }
    case 5: {
      return new $c_T5(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4]);
      break;
    }
    case 6: {
      return new $c_T6(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5]);
      break;
    }
    case 7: {
      return new $c_T7(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6]);
      break;
    }
    case 8: {
      return new $c_T8(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7]);
      break;
    }
    case 9: {
      return new $c_T9(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8]);
      break;
    }
    case 10: {
      return new $c_T10(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9]);
      break;
    }
    case 11: {
      return new $c_T11(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10]);
      break;
    }
    case 12: {
      return new $c_T12(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11]);
      break;
    }
    case 13: {
      return new $c_T13(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12]);
      break;
    }
    case 14: {
      return new $c_T14(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13]);
      break;
    }
    case 15: {
      return new $c_T15(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14]);
      break;
    }
    case 16: {
      return new $c_T16(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15]);
      break;
    }
    case 17: {
      return new $c_T17(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16]);
      break;
    }
    case 18: {
      return new $c_T18(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17]);
      break;
    }
    case 19: {
      return new $c_T19(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18]);
      break;
    }
    case 20: {
      return new $c_T20(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18], xs.a[19]);
      break;
    }
    case 21: {
      return new $c_T21(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18], xs.a[19], xs.a[20]);
      break;
    }
    case 22: {
      return new $c_T22(xs.a[0], xs.a[1], xs.a[2], xs.a[3], xs.a[4], xs.a[5], xs.a[6], xs.a[7], xs.a[8], xs.a[9], xs.a[10], xs.a[11], xs.a[12], xs.a[13], xs.a[14], xs.a[15], xs.a[16], xs.a[17], xs.a[18], xs.a[19], xs.a[20], xs.a[21]);
      break;
    }
    default: {
      return new $c_sr_TupleXXL(xs.ae());
    }
  }
});
$p.lj = (function(xs) {
  return ((xs.a.length <= 22) ? this.li(xs) : new $c_sr_TupleXXL(xs));
});
$p.jV = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.kV = (function(self, that) {
  var selfSize = $m_sr_Tuples$().kk(self);
  if ((selfSize === 0)) {
    return that;
  }
  var thatSize = $m_sr_Tuples$().kk(that);
  if ((thatSize === 0)) {
    return self;
  }
  var arr = new $ac_O(((selfSize + thatSize) | 0));
  if ((self instanceof $c_sr_TupleXXL)) {
    var src = self.J;
    src.a5(0, arr, 0, selfSize);
  } else {
    self.A().jW(arr, 0, selfSize);
  }
  if ((that instanceof $c_sr_TupleXXL)) {
    var src$1 = that.J;
    src$1.a5(0, arr, selfSize, thatSize);
  } else {
    that.A().jW(arr, selfSize, thatSize);
  }
  return this.lj(arr);
});
$p.kk = (function(self) {
  if (($m_T$package$EmptyTuple$() === self)) {
    return 0;
  }
  if ((self !== null)) {
    return self.s();
  }
  throw new $c_s_MatchError(self);
});
$p.mw = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  d0: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  d1: 1
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
$p.lr = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  d3: 1
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
$p.lv = (function(this$, elem, from) {
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
$p.kq = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.N();
  while (((i < len) && it.C())) {
    b.push(new $c_T2(this$[i], it.B()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.kr = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = new $c_T2(this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  d4: 1
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
$p.u = (function(left, right) {
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
  d5: 1
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
  this.iX = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.iX = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  d9: 1
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
$p.kg = (function(properties) {
  var result = ({});
  properties.h7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.a6] = pair$2$2.Z;
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  da: 1
}));
var $n_sjs_js_special_package$;
function $m_sjs_js_special_package$() {
  if ((!$n_sjs_js_special_package$)) {
    $n_sjs_js_special_package$ = new $c_sjs_js_special_package$();
  }
  return $n_sjs_js_special_package$;
}
/** @constructor */
function $c_sjs_js_timers_package$() {
}
$p = $c_sjs_js_timers_package$.prototype = new $h_O();
$p.constructor = $c_sjs_js_timers_package$;
/** @constructor */
function $h_sjs_js_timers_package$() {
}
$h_sjs_js_timers_package$.prototype = $p;
$p.mr = (function(interval, body) {
  return setTimeout((() => {
    body.fh();
  }), interval);
});
$p.kT = (function(handle) {
  clearTimeout(handle);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  db: 1
}));
var $n_sjs_js_timers_package$;
function $m_sjs_js_timers_package$() {
  if ((!$n_sjs_js_timers_package$)) {
    $n_sjs_js_timers_package$ = new $c_sjs_js_timers_package$();
  }
  return $n_sjs_js_timers_package$;
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
$p.kl = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.gq;
  } else {
    var result = [];
    seq.h7(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  dc: 1
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
$p.kh = (function(array) {
  var len = array.a.length;
  var result = [];
  var i = 0;
  while ((i !== len)) {
    var x1 = i;
    result.push(array.a[x1]);
    i = ((1 + i) | 0);
  }
  return result;
});
var $d_sjsr_package$ = new $TypeData().i($c_sjsr_package$, "scala.scalajs.runtime.package$", ({
  dd: 1
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
$p.mt = (function(err) {
  var where = ((err.k5() === 0) ? "" : ((err.k5() === 1) ? " after first argument" : ((" after " + err.k5()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.mQ());
  $m_s_Console$().m7().lE((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  de: 1
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
  this.hm = null;
  this.hm = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.j = (function() {
  return (("DynamicVariable(" + this.hm) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  dg: 1
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
$p.w = (function(hash, data) {
  var h = this.ke(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.ke = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.a4 = (function(hash, length) {
  return this.gl((hash ^ length));
});
$p.gl = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.E = (function(x, seed, ignorePrefix) {
  var arr = x.s();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.x()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.w(h, $f_T__hashCode__I(x.x()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.w(h, $m_sr_Statics$().K(x.k(i)));
      i = ((1 + i) | 0);
    }
    return this.a4(h, arr);
  }
});
$p.kR = (function(x, seed, caseClassName) {
  var arr = x.s();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.x()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.w(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.w(h, $m_sr_Statics$().K(x.k(i)));
      i = ((1 + i) | 0);
    }
    return this.a4(h, arr);
  }
});
$p.mD = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.N();
  while (iterator.C()) {
    var x = iterator.B();
    var h = $m_sr_Statics$().K(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.w(h$2, a);
  h$2 = this.w(h$2, b);
  h$2 = this.ke(h$2, c);
  return this.a4(h$2, n);
});
$p.m6 = (function(xs, seed) {
  var it = xs.N();
  var h = seed;
  if ((!it.C())) {
    return this.a4(h, 0);
  }
  var x0 = it.B();
  if ((!it.C())) {
    return this.a4(this.w(h, $m_sr_Statics$().K(x0)), 1);
  }
  var x1 = it.B();
  var initial = $m_sr_Statics$().K(x0);
  h = this.w(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().K(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.C()) {
    h = this.w(h, prev);
    var hash = $m_sr_Statics$().K(it.B());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.w(h, hash);
      i = ((1 + i) | 0);
      while (it.C()) {
        h = this.w(h, $m_sr_Statics$().K(it.B()));
        i = ((1 + i) | 0);
      }
      return this.a4(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.gl(this.w(this.w(h0, rangeDiff), prev));
});
$p.jS = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().g3(a);
  switch (l) {
    case 0: {
      return this.a4(h, 0);
      break;
    }
    case 1: {
      return this.a4(this.w(h, $m_sr_Statics$().K($m_sr_ScalaRunTime$().fi(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().K($m_sr_ScalaRunTime$().fi(a, 0));
      h = this.w(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().K($m_sr_ScalaRunTime$().fi(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.w(h, prev);
        var hash = $m_sr_Statics$().K($m_sr_ScalaRunTime$().fi(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.w(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.w(h, $m_sr_Statics$().K($m_sr_ScalaRunTime$().fi(a, i)));
            i = ((1 + i) | 0);
          }
          return this.a4(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gl(this.w(this.w(h0, rangeDiff), prev));
    }
  }
});
$p.mg = (function(start, step, last, seed) {
  return this.gl(this.w(this.w(this.w(seed, start), step), last));
});
$p.lw = (function(a, seed) {
  var h = seed;
  var l = a.D();
  switch (l) {
    case 0: {
      return this.a4(h, 0);
      break;
    }
    case 1: {
      return this.a4(this.w(h, $m_sr_Statics$().K(a.L(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().K(a.L(0));
      h = this.w(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().K(a.L(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.w(h, prev);
        var hash = $m_sr_Statics$().K(a.L(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.w(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.w(h, $m_sr_Statics$().K(a.L(i)));
            i = ((1 + i) | 0);
          }
          return this.a4(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.gl(this.w(this.w(h0, rangeDiff), prev));
    }
  }
});
$p.lG = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.M())) {
    elems.h9();
  }
  return ((rangeState === 2) ? this.mg(initial, rangeDiff, prev, seed) : this.a4(h, n));
});
function $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c, u, v) {
  return new $c_T2(c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
}
function $p_Lsketches_rooms_columns_Columns$package$__columnFaces$1__sjs_js_Array($thiz) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().jQ(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().ft, $m_Lsketches_rooms_columns_Columns$package$().f2, $m_Lsketches_rooms_columns_Columns$package$().ft);
  var f = ((c$2, uvw$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2, uvw$2.q, uvw$2.l));
  var $x_19 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.gt;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_18 = f(x0, x1);
  var x0$1 = box.fw;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_17 = f(x0$1, x1$1);
  var x0$2 = box.fx;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_16 = f(x0$2, x1$2);
  var x0$3 = box.gu;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_15 = $x_19.aC($x_18, $x_17, $x_16, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$1, (1.0 - uvw$2$1.q), uvw$2$1.l));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.gs;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_13 = f$1(x0$4, x1$4);
  var x0$5 = box.fv;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_12 = f$1(x0$5, x1$5);
  var x0$6 = box.fu;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_11 = f$1(x0$6, x1$6);
  var x0$7 = box.gr;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_10 = $x_14.aC($x_13, $x_12, $x_11, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$2, (1.0 - uvw$2$2.n), uvw$2$2.l));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.gr;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_8 = f$2(x0$8, x1$8);
  var x0$9 = box.fu;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_7 = f$2(x0$9, x1$9);
  var x0$10 = box.fw;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_6 = f$2(x0$10, x1$10);
  var x0$11 = box.gt;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_5 = $x_9.aC($x_8, $x_7, $x_6, f$2(x0$11, x1$11));
  var f$3 = ((c$2$3, uvw$2$3) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$3, uvw$2$3.n, uvw$2$3.l));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$12 = box.gu;
  var x1$12 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_3 = f$3(x0$12, x1$12);
  var x0$13 = box.fx;
  var x1$13 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_2 = f$3(x0$13, x1$13);
  var x0$14 = box.fv;
  var x1$14 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$3(x0$14, x1$14);
  var x0$15 = box.gs;
  var x1$15 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  return [$x_15, $x_10, $x_5, $x_4.aC($x_3, $x_2, $x_1, f$3(x0$15, x1$15))];
}
function $p_Lsketches_rooms_columns_Columns$package$__balkFaces$1__sjs_js_Array($thiz) {
  var box = $m_Ltrivalibs_graphics_geometry_Box$().jQ(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0), $m_Lsketches_rooms_columns_Columns$package$().ft, $m_Lsketches_rooms_columns_Columns$package$().hn, $m_Lsketches_rooms_columns_Columns$package$().H);
  var f = ((c$2, uvw$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2, (1.0 - uvw$2.n), uvw$2.l));
  var $x_14 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0 = box.gr;
  var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
  var $x_13 = f(x0, x1);
  var x0$1 = box.fu;
  var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_12 = f(x0$1, x1$1);
  var x0$2 = box.fw;
  var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_11 = f(x0$2, x1$2);
  var x0$3 = box.gt;
  var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
  var $x_10 = $x_14.aC($x_13, $x_12, $x_11, f(x0$3, x1$3));
  var f$1 = ((c$2$1, uvw$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$1, uvw$2$1.n, uvw$2$1.l));
  var $x_9 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$4 = box.gu;
  var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
  var $x_8 = f$1(x0$4, x1$4);
  var x0$5 = box.fx;
  var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  var $x_7 = f$1(x0$5, x1$5);
  var x0$6 = box.fv;
  var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_6 = f$1(x0$6, x1$6);
  var x0$7 = box.gs;
  var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
  var $x_5 = $x_9.aC($x_8, $x_7, $x_6, f$1(x0$7, x1$7));
  var f$2 = ((c$2$2, uvw$2$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2($thiz, c$2$2, uvw$2$2.q, uvw$2$2.n));
  var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
  var x0$8 = box.fw;
  var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
  var $x_3 = f$2(x0$8, x1$8);
  var x0$9 = box.fu;
  var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
  var $x_2 = f$2(x0$9, x1$9);
  var x0$10 = box.fv;
  var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
  var $x_1 = f$2(x0$10, x1$10);
  var x0$11 = box.fx;
  var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
  return [$x_10, $x_5, $x_4.aC($x_3, $x_2, $x_1, f$2(x0$11, x1$11))];
}
function $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$1, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().kG(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, n$3, ref$3) => {
    var nVal = new $c_T3(n$3.q, n$3.l, n$3.n);
    var values$proxy1 = $m_sr_Tuples$().kV(vl.j1.fl(v$3), $m_sr_Tuples$().jV(nVal, $m_T$package$EmptyTuple$()));
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.k(0);
    var value = nestedValues.k(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.k(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.k(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.k(1);
    var value$4 = nestedValues$2.k(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.k(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
    var tailOffset$7 = ((8 + tailOffset$4) | 0);
    var nestedValues$3 = values$proxy1.k(2);
    var value$6 = nestedValues$3.k(0);
    ref$3.dv.setFloat32(tailOffset$7, Math.fround(value$6), true);
    var tailOffset$8 = ((4 + tailOffset$7) | 0);
    var value$7 = nestedValues$3.k(1);
    ref$3.dv.setFloat32(tailOffset$8, Math.fround(value$7), true);
    var tailOffset$9 = ((4 + tailOffset$8) | 0);
    var value$8 = nestedValues$3.k(2);
    ref$3.dv.setFloat32(tailOffset$9, Math.fround(value$8), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  mesh$proxy1.l6();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.a1.length | 0))) {
    var n = (mesh$proxy1.a1[fi].length | 0);
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
    while ((fi < (mesh$proxy1.a1.length | 0))) {
      var arr = mesh$proxy1.a1[fi];
      var opt$proxy1 = mesh$proxy1.f4[fi].fy;
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
    while ((fi < (mesh$proxy1.a1.length | 0))) {
      var arr$2 = mesh$proxy1.a1[fi];
      var n$2 = (arr$2.length | 0);
      var opt$proxy2 = mesh$proxy1.f4[fi].fy;
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.lW(idxBuf, vertexCount));
  }
  return p$1.lg($x_1, (void 0), (void 0), (void 0));
}
/** @constructor */
function $c_Lsketches_rooms_columns_Columns$package$() {
  this.H = 0.0;
  this.f2 = 0.0;
  this.ft = 0.0;
  this.hn = 0.0;
  this.X = 0;
  this.W = 0;
  $n_Lsketches_rooms_columns_Columns$package$ = this;
  this.H = 12.0;
  this.f2 = 40.0;
  this.ft = 2.0;
  this.hn = (3.4 * $m_Lsketches_rooms_columns_Columns$package$().ft);
  this.X = 8;
  this.W = 4;
}
$p = $c_Lsketches_rooms_columns_Columns$package$.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_columns_Columns$package$;
/** @constructor */
function $h_Lsketches_rooms_columns_Columns$package$() {
}
$h_Lsketches_rooms_columns_Columns$package$.prototype = $p;
$p.mm = (function() {
  var canvas = document.getElementById("canvas");
  $m_Ltrivalibs_graphics_painter_Painter$().lx(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$3) => {
    var n$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var center$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    var f = ((pos$2, uv$2) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, pos$2, uv$2.f5, uv$2.f6));
    var uvAtPivot = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
    var n = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), n$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var x = n.l;
    if (((+Math.abs(x)) > 0.999)) {
      var up = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    } else {
      var up = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    }
    var uDir = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), up, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n);
    var uVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), uDir, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 200.0);
    var vVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), n, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 200.0);
    var tlPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), center$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), uVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.f5)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), vVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.f6));
    var trPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
    var blPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec);
    var brPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), blPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
    var $x_3 = f(tlPos, x1);
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
    var $x_2 = f(blPos, x1$1);
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
    var $x_1 = f(brPos, x1$2);
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
    var groundFaces = [$x_4.aC($x_3, $x_2, $x_1, f(trPos, x1$3))];
    var n$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    var center$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, (0.5 * $m_Lsketches_rooms_columns_Columns$package$().f2), 0.0);
    var f$1 = ((pos$2$1, uv$2$1) => $p_Lsketches_rooms_columns_Columns$package$__vert$1__Ltrivalibs_graphics_math_cpu_Vec3__D__D__T2(this, pos$2$1, uv$2$1.f5, uv$2$1.f6));
    var width = $m_Lsketches_rooms_columns_Columns$package$().H;
    var height = $m_Lsketches_rooms_columns_Columns$package$().f2;
    var uvAtPivot$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
    var n$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), n$proxy2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var x$1 = n$1.l;
    if (((+Math.abs(x$1)) > 0.999)) {
      var up$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    } else {
      var up$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    }
    var uDir$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), up$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$1);
    var uVec$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), uDir$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), width);
    var vVec$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir$1), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), height);
    var tlPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), center$proxy2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), uVec$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot$1.f5)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), vVec$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot$1.f6));
    var trPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), tlPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec$1);
    var blPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), tlPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec$1);
    var brPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), blPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec$1);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
    var $x_7 = f$1(tlPos$1, x1$4);
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
    var $x_6 = f$1(blPos$1, x1$5);
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
    var $x_5 = f$1(brPos$1, x1$6);
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
    var wallFaces = [$x_8.aC($x_7, $x_6, $x_5, f$1(trPos$1, x1$7))];
    var groundForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, groundFaces);
    var wallForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, wallFaces);
    var columnForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, $p_Lsketches_rooms_columns_Columns$package$__columnFaces$1__sjs_js_Array(this));
    var balkForm = $p_Lsketches_rooms_columns_Columns$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$3, $p_Lsketches_rooms_columns_Columns$package$__balkFaces$1__sjs_js_Array(this));
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    var d = ({});
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eB;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eB = reg;
    try {
      var AssignTarget_this = ctx.h0.jI;
      var value$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().mI($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().lY(ctx.gY.av("viewProj"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().k3(), ctx.gY.av("model")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().k3(), $m_Ltrivalibs_graphics_math_gpu_vec4$().jR(ctx.gZ.av("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().eD().I(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().lq(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
      var x0 = (((("  " + AssignTarget_this.fQ) + " = ") + value$proxy1.r) + ";");
      var AssignTarget_this$2 = ctx.h0.hf("normal");
      var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$().mH(ctx.gY.av("normalMat"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().lo(), ctx.gZ.av("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().i7(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$());
      var x1$8 = (((("  " + AssignTarget_this$2.fQ) + " = ") + value$proxy2.r) + ";");
      var AssignTarget_this$3 = ctx.h0.hf("uv");
      var value$proxy3 = ctx.gZ.av("uv");
      var $x_9 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, x1$8, (((("  " + AssignTarget_this$3.fQ) + " = ") + value$proxy3.r) + ";")]), "", "\n", "");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eB = prev;
    }
    program.hV = $x_9;
    var array$1 = reg.hR;
    var len = (array$1.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
      i = ((1 + i) | 0);
    }
    var d$2 = ({});
    var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eB;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eB = reg$2;
    try {
      var uv = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("uv");
      var col = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("col");
      var x0$2 = uv.jO($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().lh($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().ky(ctx$2.fR.av("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fk(), 40.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fk()));
      var x1$9 = col.jO($m_Ltrivalibs_graphics_math_gpu_expr$package$().mn($m_Ltrivalibs_graphics_math_gpu_vec3$().kH($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fk().ko(ctx$2.fR.av("uv")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fk().kp(ctx$2.fR.av("uv")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().eD().I(0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().le(ctx$2.fR.av("normal"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().i7()), $m_Ltrivalibs_graphics_math_gpu_expr$package$().kO($m_Ltrivalibs_graphics_math_gpu_expr$package$().jZ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fk().ko(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().eD().I(0.2)), $m_Ltrivalibs_graphics_math_gpu_expr$package$().jZ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().fk().kp(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().eD().I(0.2)))));
      var AssignTarget_this$1 = ctx$2.jH.hf("color");
      var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_vec4$().jR($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().me(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().i7(), 2.2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().eD().I(1.0));
      var $x_10 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$2, x1$9, (((("  " + AssignTarget_this$1.fQ) + " = ") + value$proxy4.r) + ";")]), "", "\n", "");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().eB = prev$2;
    }
    program.hU = $x_10;
    var array$3 = reg$2.hR;
    var len$1 = (array$3.length | 0);
    var i$1 = 0;
    while ((i$1 < len$1)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$3[i$1]);
      i$1 = ((1 + i$1) | 0);
    }
    var b = program.hV;
    var b$1 = program.hU;
    var helperFns$proxy1 = program.lu();
    var id = p$3.gK;
    p$3.gK = ((1 + p$3.gK) | 0);
    var names = $m_sjs_js_ArrayOpsCommon$().u(["model"], $m_sjs_js_ArrayOpsCommon$().u(["normalMat"], $m_sjs_js_ArrayOpsCommon$().u(["viewProj"], [])));
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
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T(sd, $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().u(["position"], $m_sjs_js_ArrayOpsCommon$().u(["uv"], $m_sjs_js_ArrayOpsCommon$().u(["normal"], []))), $m_sjs_js_ArrayOpsCommon$().u(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().u(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().u(["vec3<f32>"], []))), []), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().u(["uv"], $m_sjs_js_ArrayOpsCommon$().u(["normal"], [])), $m_sjs_js_ArrayOpsCommon$().u(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().u(["vec3<f32>"], [])), $m_sjs_js_ArrayOpsCommon$().u([new $c_T3("position", "position", "vec4<f32>")], [])), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().u(["color"], []), $m_sjs_js_ArrayOpsCommon$().u(["vec4<f32>"], []), []), $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().u(["model"], $m_sjs_js_ArrayOpsCommon$().u(["normalMat"], $m_sjs_js_ArrayOpsCommon$().u(["viewProj"], []))), $m_sjs_js_ArrayOpsCommon$().u([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).fP.fm()], $m_sjs_js_ArrayOpsCommon$().u([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$()).fP.fm()], $m_sjs_js_ArrayOpsCommon$().u([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).fP.fm()], [])))), sd.fO, sd.fM);
    var args$proxy1 = $m_sr_ScalaRunTime$().kn(new ($d_sjs_js_Any.r().C)([baseWgsl]));
    console.log(...$m_sjsr_Compat$().kl(args$proxy1));
    var module = p$3.f.createShaderModule(({
      "code": baseWgsl
    }));
    var formats = $m_sjs_js_ArrayOpsCommon$().u(["float32x3"], $m_sjs_js_ArrayOpsCommon$().u(["float32x2"], $m_sjs_js_ArrayOpsCommon$().u(["float32x3"], [])));
    var sizes = $m_sjs_js_ArrayOpsCommon$().u([12], $m_sjs_js_ArrayOpsCommon$().u([8], $m_sjs_js_ArrayOpsCommon$().u([12], [])));
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
    var $x_14 = $m_sjs_js_ArrayOpsCommon$();
    var $x_13 = $m_sjs_js_ArrayOpsCommon$();
    var _2 = ({
      "type": "uniform"
    });
    var $x_12 = $m_sjs_js_ArrayOpsCommon$();
    var _2$1 = ({
      "type": "uniform"
    });
    var $x_11 = $m_sjs_js_ArrayOpsCommon$();
    var _2$2 = ({
      "type": "uniform"
    });
    var descriptors = $x_14.u([$x_13.u([({
      "binding": 0,
      "visibility": 1,
      "buffer": _2
    })], $x_12.u([({
      "binding": 1,
      "visibility": 1,
      "buffer": _2$1
    })], $x_11.u([({
      "binding": 2,
      "visibility": 1,
      "buffer": _2$2
    })], [])))], []);
    var result = [];
    var len$2 = (descriptors.length | 0);
    var i$4 = 0;
    while ((i$4 < len$2)) {
      var x0$4 = descriptors[i$4];
      (result.push(p$3.f.createBindGroupLayout(({
        "entries": x0$4
      }))) | 0);
      i$4 = ((1 + i$4) | 0);
    }
    var \u03b42$___1 = result;
    var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().jX(p$3.f, result);
    var bgls$2 = \u03b42$___1;
    var pl = $m_Ltrivalibs_graphics_shader_layouts$().jX(p$3.f, bgls$2);
    var shade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, bgls$2[0], null, pl, false, dict, dict$2);
    var identityMat = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    var identityN = $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(identityMat);
    var Bindable_this = p$3.hg(groundForm, shade, (void 0), (void 0));
    var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("model", identityMat);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", identityN);
    var \u03b4scrutinee106 = e1$proxy1.v;
    var idx = (Bindable_this.a9.t.model | 0);
    if (((idx < (Bindable_this.R.length | 0)) && (Bindable_this.R[idx] !== null))) {
      var BufferBinding_this = Bindable_this.R[idx];
      BufferBinding_this.h.i(BufferBinding_this.d, \u03b4scrutinee106);
      var $x_16 = BufferBinding_this.g.queue;
      var $x_15 = BufferBinding_this.e;
      var s$proxy2 = BufferBinding_this.d;
      $x_16.writeBuffer($x_15, 0.0, s$proxy2.dv.buffer);
    } else {
      var uv$1 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var device$proxy1 = Bindable_this.hO.f;
      var buffer = new ArrayBuffer(64);
      var arr$proxy6 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
      var b$2 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy6.dv, 0), device$proxy1, uv$1);
      b$2.h.i(b$2.d, \u03b4scrutinee106);
      var $x_18 = b$2.g.queue;
      var $x_17 = b$2.e;
      var s$proxy3 = b$2.d;
      $x_18.writeBuffer($x_17, 0.0, s$proxy3.dv.buffer);
      while (((Bindable_this.R.length | 0) <= idx)) {
        Bindable_this.R.push(null);
      }
      Bindable_this.R[idx] = b$2;
    }
    var \u03b4scrutinee117 = e2$proxy1.v;
    var idx$2 = (Bindable_this.a9.t.normalMat | 0);
    if (((idx$2 < (Bindable_this.R.length | 0)) && (Bindable_this.R[idx$2] !== null))) {
      var BufferBinding_this$5 = Bindable_this.R[idx$2];
      BufferBinding_this$5.h.i(BufferBinding_this$5.d, \u03b4scrutinee117);
      var $x_20 = BufferBinding_this$5.g.queue;
      var $x_19 = BufferBinding_this$5.e;
      var s$proxy4 = BufferBinding_this$5.d;
      $x_20.writeBuffer($x_19, 0.0, s$proxy4.dv.buffer);
    } else {
      var uv$2$2 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var device$proxy2 = Bindable_this.hO.f;
      var buffer$2 = new ArrayBuffer(48);
      var arr$proxy7 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$2), 1);
      var b$2$1 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy7.dv, 0), device$proxy2, uv$2$2);
      b$2$1.h.i(b$2$1.d, \u03b4scrutinee117);
      var $x_22 = b$2$1.g.queue;
      var $x_21 = b$2$1.e;
      var s$proxy5 = b$2$1.d;
      $x_22.writeBuffer($x_21, 0.0, s$proxy5.dv.buffer);
      while (((Bindable_this.R.length | 0) <= idx$2)) {
        Bindable_this.R.push(null);
      }
      Bindable_this.R[idx$2] = b$2$1;
    }
    var columnShape = p$3.hg(columnForm, shade, (void 0), (void 0));
    var balkShape = p$3.hg(balkForm, shade, (void 0), (void 0));
    var wallShape = p$3.hg(wallForm, shade, (void 0), (void 0));
    var colY = (0.5 * $m_Lsketches_rooms_columns_Columns$package$().f2);
    var iz = ((-$m_Lsketches_rooms_columns_Columns$package$().X) | 0);
    while ((iz <= $m_Lsketches_rooms_columns_Columns$package$().X)) {
      var z = (iz * $m_Lsketches_rooms_columns_Columns$package$().H);
      var x$proxy2 = (((-$m_Lsketches_rooms_columns_Columns$package$().W) | 0) * $m_Lsketches_rooms_columns_Columns$package$().H);
      var m = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy2, colY, z, 1.0);
      var InstanceList_this = columnShape.P;
      var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m);
      var e2$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m));
      var i$4$1 = InstanceList_this.Y();
      var Bindable_this$6 = InstanceList_this.G[i$4$1];
      var \u03b4scrutinee128 = e1$proxy2.v;
      var idx$3 = (Bindable_this$6.z.t.model | 0);
      if (((idx$3 < (Bindable_this$6.c.length | 0)) && (Bindable_this$6.c[idx$3] !== null))) {
        var BufferBinding_this$9 = Bindable_this$6.c[idx$3];
        BufferBinding_this$9.h.i(BufferBinding_this$9.d, \u03b4scrutinee128);
        var $x_24 = BufferBinding_this$9.g.queue;
        var $x_23 = BufferBinding_this$9.e;
        var s$proxy6 = BufferBinding_this$9.d;
        $x_24.writeBuffer($x_23, 0.0, s$proxy6.dv.buffer);
      } else {
        var uv$3 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy3 = Bindable_this$6.y.f;
        var buffer$3 = new ArrayBuffer(64);
        var arr$proxy8 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$3), 1);
        var b$3 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy8.dv, 0), device$proxy3, uv$3);
        b$3.h.i(b$3.d, \u03b4scrutinee128);
        var $x_26 = b$3.g.queue;
        var $x_25 = b$3.e;
        var s$proxy7 = b$3.d;
        $x_26.writeBuffer($x_25, 0.0, s$proxy7.dv.buffer);
        while (((Bindable_this$6.c.length | 0) <= idx$3)) {
          Bindable_this$6.c.push(null);
        }
        Bindable_this$6.c[idx$3] = b$3;
      }
      var \u03b4scrutinee139 = e2$proxy2.v;
      var idx$4 = (Bindable_this$6.z.t.normalMat | 0);
      if (((idx$4 < (Bindable_this$6.c.length | 0)) && (Bindable_this$6.c[idx$4] !== null))) {
        var BufferBinding_this$13 = Bindable_this$6.c[idx$4];
        BufferBinding_this$13.h.i(BufferBinding_this$13.d, \u03b4scrutinee139);
        var $x_28 = BufferBinding_this$13.g.queue;
        var $x_27 = BufferBinding_this$13.e;
        var s$proxy8 = BufferBinding_this$13.d;
        $x_28.writeBuffer($x_27, 0.0, s$proxy8.dv.buffer);
      } else {
        var uv$4 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy4 = Bindable_this$6.y.f;
        var buffer$4 = new ArrayBuffer(48);
        var arr$proxy9 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$4), 1);
        var b$4 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy9.dv, 0), device$proxy4, uv$4);
        b$4.h.i(b$4.d, \u03b4scrutinee139);
        var $x_30 = b$4.g.queue;
        var $x_29 = b$4.e;
        var s$proxy9 = b$4.d;
        $x_30.writeBuffer($x_29, 0.0, s$proxy9.dv.buffer);
        while (((Bindable_this$6.c.length | 0) <= idx$4)) {
          Bindable_this$6.c.push(null);
        }
        Bindable_this$6.c[idx$4] = b$4;
      }
      var x$proxy3 = ($m_Lsketches_rooms_columns_Columns$package$().W * $m_Lsketches_rooms_columns_Columns$package$().H);
      var m$2 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy3, colY, z, 1.0);
      var InstanceList_this$2 = columnShape.P;
      var e1$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$2);
      var e2$proxy3 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$2));
      var i$5 = InstanceList_this$2.Y();
      var Bindable_this$11 = InstanceList_this$2.G[i$5];
      var \u03b4scrutinee150 = e1$proxy3.v;
      var idx$5 = (Bindable_this$11.z.t.model | 0);
      if (((idx$5 < (Bindable_this$11.c.length | 0)) && (Bindable_this$11.c[idx$5] !== null))) {
        var BufferBinding_this$17 = Bindable_this$11.c[idx$5];
        BufferBinding_this$17.h.i(BufferBinding_this$17.d, \u03b4scrutinee150);
        var $x_32 = BufferBinding_this$17.g.queue;
        var $x_31 = BufferBinding_this$17.e;
        var s$proxy10 = BufferBinding_this$17.d;
        $x_32.writeBuffer($x_31, 0.0, s$proxy10.dv.buffer);
      } else {
        var uv$5 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy5 = Bindable_this$11.y.f;
        var buffer$5 = new ArrayBuffer(64);
        var arr$proxy10 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$5), 1);
        var b$5 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy10.dv, 0), device$proxy5, uv$5);
        b$5.h.i(b$5.d, \u03b4scrutinee150);
        var $x_34 = b$5.g.queue;
        var $x_33 = b$5.e;
        var s$proxy11 = b$5.d;
        $x_34.writeBuffer($x_33, 0.0, s$proxy11.dv.buffer);
        while (((Bindable_this$11.c.length | 0) <= idx$5)) {
          Bindable_this$11.c.push(null);
        }
        Bindable_this$11.c[idx$5] = b$5;
      }
      var \u03b4scrutinee161 = e2$proxy3.v;
      var idx$6 = (Bindable_this$11.z.t.normalMat | 0);
      if (((idx$6 < (Bindable_this$11.c.length | 0)) && (Bindable_this$11.c[idx$6] !== null))) {
        var BufferBinding_this$21 = Bindable_this$11.c[idx$6];
        BufferBinding_this$21.h.i(BufferBinding_this$21.d, \u03b4scrutinee161);
        var $x_36 = BufferBinding_this$21.g.queue;
        var $x_35 = BufferBinding_this$21.e;
        var s$proxy12 = BufferBinding_this$21.d;
        $x_36.writeBuffer($x_35, 0.0, s$proxy12.dv.buffer);
      } else {
        var uv$6 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy6 = Bindable_this$11.y.f;
        var buffer$6 = new ArrayBuffer(48);
        var arr$proxy11 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$6), 1);
        var b$6 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy11.dv, 0), device$proxy6, uv$6);
        b$6.h.i(b$6.d, \u03b4scrutinee161);
        var $x_38 = b$6.g.queue;
        var $x_37 = b$6.e;
        var s$proxy13 = b$6.d;
        $x_38.writeBuffer($x_37, 0.0, s$proxy13.dv.buffer);
        while (((Bindable_this$11.c.length | 0) <= idx$6)) {
          Bindable_this$11.c.push(null);
        }
        Bindable_this$11.c[idx$6] = b$6;
      }
      var x$proxy4 = (((1 - $m_Lsketches_rooms_columns_Columns$package$().W) | 0) * $m_Lsketches_rooms_columns_Columns$package$().H);
      var m$3 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy4, colY, z, 1.0);
      var InstanceList_this$3 = columnShape.P;
      var e1$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$3);
      var e2$proxy4 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$3));
      var i$6 = InstanceList_this$3.Y();
      var Bindable_this$16 = InstanceList_this$3.G[i$6];
      var \u03b4scrutinee172 = e1$proxy4.v;
      var idx$7 = (Bindable_this$16.z.t.model | 0);
      if (((idx$7 < (Bindable_this$16.c.length | 0)) && (Bindable_this$16.c[idx$7] !== null))) {
        var BufferBinding_this$25 = Bindable_this$16.c[idx$7];
        BufferBinding_this$25.h.i(BufferBinding_this$25.d, \u03b4scrutinee172);
        var $x_40 = BufferBinding_this$25.g.queue;
        var $x_39 = BufferBinding_this$25.e;
        var s$proxy14 = BufferBinding_this$25.d;
        $x_40.writeBuffer($x_39, 0.0, s$proxy14.dv.buffer);
      } else {
        var uv$7 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy7 = Bindable_this$16.y.f;
        var buffer$7 = new ArrayBuffer(64);
        var arr$proxy12 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$7), 1);
        var b$7 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy12.dv, 0), device$proxy7, uv$7);
        b$7.h.i(b$7.d, \u03b4scrutinee172);
        var $x_42 = b$7.g.queue;
        var $x_41 = b$7.e;
        var s$proxy15 = b$7.d;
        $x_42.writeBuffer($x_41, 0.0, s$proxy15.dv.buffer);
        while (((Bindable_this$16.c.length | 0) <= idx$7)) {
          Bindable_this$16.c.push(null);
        }
        Bindable_this$16.c[idx$7] = b$7;
      }
      var \u03b4scrutinee183 = e2$proxy4.v;
      var idx$8 = (Bindable_this$16.z.t.normalMat | 0);
      if (((idx$8 < (Bindable_this$16.c.length | 0)) && (Bindable_this$16.c[idx$8] !== null))) {
        var BufferBinding_this$29 = Bindable_this$16.c[idx$8];
        BufferBinding_this$29.h.i(BufferBinding_this$29.d, \u03b4scrutinee183);
        var $x_44 = BufferBinding_this$29.g.queue;
        var $x_43 = BufferBinding_this$29.e;
        var s$proxy16 = BufferBinding_this$29.d;
        $x_44.writeBuffer($x_43, 0.0, s$proxy16.dv.buffer);
      } else {
        var uv$8 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy8 = Bindable_this$16.y.f;
        var buffer$8 = new ArrayBuffer(48);
        var arr$proxy13 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$8), 1);
        var b$8 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy13.dv, 0), device$proxy8, uv$8);
        b$8.h.i(b$8.d, \u03b4scrutinee183);
        var $x_46 = b$8.g.queue;
        var $x_45 = b$8.e;
        var s$proxy17 = b$8.d;
        $x_46.writeBuffer($x_45, 0.0, s$proxy17.dv.buffer);
        while (((Bindable_this$16.c.length | 0) <= idx$8)) {
          Bindable_this$16.c.push(null);
        }
        Bindable_this$16.c[idx$8] = b$8;
      }
      var x$proxy5 = ((($m_Lsketches_rooms_columns_Columns$package$().W - 1) | 0) * $m_Lsketches_rooms_columns_Columns$package$().H);
      var m$4 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$proxy5, colY, z, 1.0);
      var InstanceList_this$4 = columnShape.P;
      var e1$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$4);
      var e2$proxy5 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$4));
      var i$7 = InstanceList_this$4.Y();
      var Bindable_this$21 = InstanceList_this$4.G[i$7];
      var \u03b4scrutinee194 = e1$proxy5.v;
      var idx$9 = (Bindable_this$21.z.t.model | 0);
      if (((idx$9 < (Bindable_this$21.c.length | 0)) && (Bindable_this$21.c[idx$9] !== null))) {
        var BufferBinding_this$33 = Bindable_this$21.c[idx$9];
        BufferBinding_this$33.h.i(BufferBinding_this$33.d, \u03b4scrutinee194);
        var $x_48 = BufferBinding_this$33.g.queue;
        var $x_47 = BufferBinding_this$33.e;
        var s$proxy18 = BufferBinding_this$33.d;
        $x_48.writeBuffer($x_47, 0.0, s$proxy18.dv.buffer);
      } else {
        var uv$9 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy9 = Bindable_this$21.y.f;
        var buffer$9 = new ArrayBuffer(64);
        var arr$proxy14 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$9), 1);
        var b$9 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy14.dv, 0), device$proxy9, uv$9);
        b$9.h.i(b$9.d, \u03b4scrutinee194);
        var $x_50 = b$9.g.queue;
        var $x_49 = b$9.e;
        var s$proxy19 = b$9.d;
        $x_50.writeBuffer($x_49, 0.0, s$proxy19.dv.buffer);
        while (((Bindable_this$21.c.length | 0) <= idx$9)) {
          Bindable_this$21.c.push(null);
        }
        Bindable_this$21.c[idx$9] = b$9;
      }
      var \u03b4scrutinee205 = e2$proxy5.v;
      var idx$10 = (Bindable_this$21.z.t.normalMat | 0);
      if (((idx$10 < (Bindable_this$21.c.length | 0)) && (Bindable_this$21.c[idx$10] !== null))) {
        var BufferBinding_this$37 = Bindable_this$21.c[idx$10];
        BufferBinding_this$37.h.i(BufferBinding_this$37.d, \u03b4scrutinee205);
        var $x_52 = BufferBinding_this$37.g.queue;
        var $x_51 = BufferBinding_this$37.e;
        var s$proxy20 = BufferBinding_this$37.d;
        $x_52.writeBuffer($x_51, 0.0, s$proxy20.dv.buffer);
      } else {
        var uv$10 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy10 = Bindable_this$21.y.f;
        var buffer$10 = new ArrayBuffer(48);
        var arr$proxy15 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$10), 1);
        var b$10 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy15.dv, 0), device$proxy10, uv$10);
        b$10.h.i(b$10.d, \u03b4scrutinee205);
        var $x_54 = b$10.g.queue;
        var $x_53 = b$10.e;
        var s$proxy21 = b$10.d;
        $x_54.writeBuffer($x_53, 0.0, s$proxy21.dv.buffer);
        while (((Bindable_this$21.c.length | 0) <= idx$10)) {
          Bindable_this$21.c.push(null);
        }
        Bindable_this$21.c[idx$10] = b$10;
      }
      iz = ((1 + iz) | 0);
    }
    var ix = ((-$m_Lsketches_rooms_columns_Columns$package$().W) | 0);
    while ((ix <= $m_Lsketches_rooms_columns_Columns$package$().W)) {
      var x$3 = (ix * $m_Lsketches_rooms_columns_Columns$package$().H);
      var z$proxy1 = (((-$m_Lsketches_rooms_columns_Columns$package$().X) | 0) * $m_Lsketches_rooms_columns_Columns$package$().H);
      var m$5 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy1, 1.0);
      var InstanceList_this$5 = columnShape.P;
      var e1$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$5);
      var e2$proxy6 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$5));
      var i$8 = InstanceList_this$5.Y();
      var Bindable_this$26 = InstanceList_this$5.G[i$8];
      var \u03b4scrutinee216 = e1$proxy6.v;
      var idx$11 = (Bindable_this$26.z.t.model | 0);
      if (((idx$11 < (Bindable_this$26.c.length | 0)) && (Bindable_this$26.c[idx$11] !== null))) {
        var BufferBinding_this$41 = Bindable_this$26.c[idx$11];
        BufferBinding_this$41.h.i(BufferBinding_this$41.d, \u03b4scrutinee216);
        var $x_56 = BufferBinding_this$41.g.queue;
        var $x_55 = BufferBinding_this$41.e;
        var s$proxy22 = BufferBinding_this$41.d;
        $x_56.writeBuffer($x_55, 0.0, s$proxy22.dv.buffer);
      } else {
        var uv$11 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy11 = Bindable_this$26.y.f;
        var buffer$11 = new ArrayBuffer(64);
        var arr$proxy16 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$11), 1);
        var b$11 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy16.dv, 0), device$proxy11, uv$11);
        b$11.h.i(b$11.d, \u03b4scrutinee216);
        var $x_58 = b$11.g.queue;
        var $x_57 = b$11.e;
        var s$proxy23 = b$11.d;
        $x_58.writeBuffer($x_57, 0.0, s$proxy23.dv.buffer);
        while (((Bindable_this$26.c.length | 0) <= idx$11)) {
          Bindable_this$26.c.push(null);
        }
        Bindable_this$26.c[idx$11] = b$11;
      }
      var \u03b4scrutinee227 = e2$proxy6.v;
      var idx$12 = (Bindable_this$26.z.t.normalMat | 0);
      if (((idx$12 < (Bindable_this$26.c.length | 0)) && (Bindable_this$26.c[idx$12] !== null))) {
        var BufferBinding_this$45 = Bindable_this$26.c[idx$12];
        BufferBinding_this$45.h.i(BufferBinding_this$45.d, \u03b4scrutinee227);
        var $x_60 = BufferBinding_this$45.g.queue;
        var $x_59 = BufferBinding_this$45.e;
        var s$proxy24 = BufferBinding_this$45.d;
        $x_60.writeBuffer($x_59, 0.0, s$proxy24.dv.buffer);
      } else {
        var uv$12 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy12 = Bindable_this$26.y.f;
        var buffer$12 = new ArrayBuffer(48);
        var arr$proxy17 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$12), 1);
        var b$12 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy17.dv, 0), device$proxy12, uv$12);
        b$12.h.i(b$12.d, \u03b4scrutinee227);
        var $x_62 = b$12.g.queue;
        var $x_61 = b$12.e;
        var s$proxy25 = b$12.d;
        $x_62.writeBuffer($x_61, 0.0, s$proxy25.dv.buffer);
        while (((Bindable_this$26.c.length | 0) <= idx$12)) {
          Bindable_this$26.c.push(null);
        }
        Bindable_this$26.c[idx$12] = b$12;
      }
      var z$proxy2 = ($m_Lsketches_rooms_columns_Columns$package$().X * $m_Lsketches_rooms_columns_Columns$package$().H);
      var m$6 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy2, 1.0);
      var InstanceList_this$6 = columnShape.P;
      var e1$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$6);
      var e2$proxy7 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$6));
      var i$9 = InstanceList_this$6.Y();
      var Bindable_this$31 = InstanceList_this$6.G[i$9];
      var \u03b4scrutinee238 = e1$proxy7.v;
      var idx$13 = (Bindable_this$31.z.t.model | 0);
      if (((idx$13 < (Bindable_this$31.c.length | 0)) && (Bindable_this$31.c[idx$13] !== null))) {
        var BufferBinding_this$49 = Bindable_this$31.c[idx$13];
        BufferBinding_this$49.h.i(BufferBinding_this$49.d, \u03b4scrutinee238);
        var $x_64 = BufferBinding_this$49.g.queue;
        var $x_63 = BufferBinding_this$49.e;
        var s$proxy26 = BufferBinding_this$49.d;
        $x_64.writeBuffer($x_63, 0.0, s$proxy26.dv.buffer);
      } else {
        var uv$13 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy13 = Bindable_this$31.y.f;
        var buffer$13 = new ArrayBuffer(64);
        var arr$proxy18 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$13), 1);
        var b$13 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy18.dv, 0), device$proxy13, uv$13);
        b$13.h.i(b$13.d, \u03b4scrutinee238);
        var $x_66 = b$13.g.queue;
        var $x_65 = b$13.e;
        var s$proxy27 = b$13.d;
        $x_66.writeBuffer($x_65, 0.0, s$proxy27.dv.buffer);
        while (((Bindable_this$31.c.length | 0) <= idx$13)) {
          Bindable_this$31.c.push(null);
        }
        Bindable_this$31.c[idx$13] = b$13;
      }
      var \u03b4scrutinee249 = e2$proxy7.v;
      var idx$14 = (Bindable_this$31.z.t.normalMat | 0);
      if (((idx$14 < (Bindable_this$31.c.length | 0)) && (Bindable_this$31.c[idx$14] !== null))) {
        var BufferBinding_this$53 = Bindable_this$31.c[idx$14];
        BufferBinding_this$53.h.i(BufferBinding_this$53.d, \u03b4scrutinee249);
        var $x_68 = BufferBinding_this$53.g.queue;
        var $x_67 = BufferBinding_this$53.e;
        var s$proxy28 = BufferBinding_this$53.d;
        $x_68.writeBuffer($x_67, 0.0, s$proxy28.dv.buffer);
      } else {
        var uv$14 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy14 = Bindable_this$31.y.f;
        var buffer$14 = new ArrayBuffer(48);
        var arr$proxy19 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$14), 1);
        var b$14 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy19.dv, 0), device$proxy14, uv$14);
        b$14.h.i(b$14.d, \u03b4scrutinee249);
        var $x_70 = b$14.g.queue;
        var $x_69 = b$14.e;
        var s$proxy29 = b$14.d;
        $x_70.writeBuffer($x_69, 0.0, s$proxy29.dv.buffer);
        while (((Bindable_this$31.c.length | 0) <= idx$14)) {
          Bindable_this$31.c.push(null);
        }
        Bindable_this$31.c[idx$14] = b$14;
      }
      var z$proxy3 = (((1 - $m_Lsketches_rooms_columns_Columns$package$().X) | 0) * $m_Lsketches_rooms_columns_Columns$package$().H);
      var m$7 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy3, 1.0);
      var InstanceList_this$7 = columnShape.P;
      var e1$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$7);
      var e2$proxy8 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$7));
      var i$10 = InstanceList_this$7.Y();
      var Bindable_this$36 = InstanceList_this$7.G[i$10];
      var \u03b4scrutinee260 = e1$proxy8.v;
      var idx$15 = (Bindable_this$36.z.t.model | 0);
      if (((idx$15 < (Bindable_this$36.c.length | 0)) && (Bindable_this$36.c[idx$15] !== null))) {
        var BufferBinding_this$57 = Bindable_this$36.c[idx$15];
        BufferBinding_this$57.h.i(BufferBinding_this$57.d, \u03b4scrutinee260);
        var $x_72 = BufferBinding_this$57.g.queue;
        var $x_71 = BufferBinding_this$57.e;
        var s$proxy30 = BufferBinding_this$57.d;
        $x_72.writeBuffer($x_71, 0.0, s$proxy30.dv.buffer);
      } else {
        var uv$15 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy15 = Bindable_this$36.y.f;
        var buffer$15 = new ArrayBuffer(64);
        var arr$proxy20 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$15), 1);
        var b$15 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy20.dv, 0), device$proxy15, uv$15);
        b$15.h.i(b$15.d, \u03b4scrutinee260);
        var $x_74 = b$15.g.queue;
        var $x_73 = b$15.e;
        var s$proxy31 = b$15.d;
        $x_74.writeBuffer($x_73, 0.0, s$proxy31.dv.buffer);
        while (((Bindable_this$36.c.length | 0) <= idx$15)) {
          Bindable_this$36.c.push(null);
        }
        Bindable_this$36.c[idx$15] = b$15;
      }
      var \u03b4scrutinee271 = e2$proxy8.v;
      var idx$16 = (Bindable_this$36.z.t.normalMat | 0);
      if (((idx$16 < (Bindable_this$36.c.length | 0)) && (Bindable_this$36.c[idx$16] !== null))) {
        var BufferBinding_this$61 = Bindable_this$36.c[idx$16];
        BufferBinding_this$61.h.i(BufferBinding_this$61.d, \u03b4scrutinee271);
        var $x_76 = BufferBinding_this$61.g.queue;
        var $x_75 = BufferBinding_this$61.e;
        var s$proxy32 = BufferBinding_this$61.d;
        $x_76.writeBuffer($x_75, 0.0, s$proxy32.dv.buffer);
      } else {
        var uv$16 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy16 = Bindable_this$36.y.f;
        var buffer$16 = new ArrayBuffer(48);
        var arr$proxy21 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$16), 1);
        var b$16 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy21.dv, 0), device$proxy16, uv$16);
        b$16.h.i(b$16.d, \u03b4scrutinee271);
        var $x_78 = b$16.g.queue;
        var $x_77 = b$16.e;
        var s$proxy33 = b$16.d;
        $x_78.writeBuffer($x_77, 0.0, s$proxy33.dv.buffer);
        while (((Bindable_this$36.c.length | 0) <= idx$16)) {
          Bindable_this$36.c.push(null);
        }
        Bindable_this$36.c[idx$16] = b$16;
      }
      var z$proxy4 = ((($m_Lsketches_rooms_columns_Columns$package$().X - 1) | 0) * $m_Lsketches_rooms_columns_Columns$package$().H);
      var m$8 = new $c_Ltrivalibs_graphics_math_cpu_Mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, x$3, colY, z$proxy4, 1.0);
      var InstanceList_this$8 = columnShape.P;
      var e1$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$8);
      var e2$proxy9 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$8));
      var i$11 = InstanceList_this$8.Y();
      var Bindable_this$41 = InstanceList_this$8.G[i$11];
      var \u03b4scrutinee282 = e1$proxy9.v;
      var idx$17 = (Bindable_this$41.z.t.model | 0);
      if (((idx$17 < (Bindable_this$41.c.length | 0)) && (Bindable_this$41.c[idx$17] !== null))) {
        var BufferBinding_this$65 = Bindable_this$41.c[idx$17];
        BufferBinding_this$65.h.i(BufferBinding_this$65.d, \u03b4scrutinee282);
        var $x_80 = BufferBinding_this$65.g.queue;
        var $x_79 = BufferBinding_this$65.e;
        var s$proxy34 = BufferBinding_this$65.d;
        $x_80.writeBuffer($x_79, 0.0, s$proxy34.dv.buffer);
      } else {
        var uv$17 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy17 = Bindable_this$41.y.f;
        var buffer$17 = new ArrayBuffer(64);
        var arr$proxy22 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$17), 1);
        var b$17 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy22.dv, 0), device$proxy17, uv$17);
        b$17.h.i(b$17.d, \u03b4scrutinee282);
        var $x_82 = b$17.g.queue;
        var $x_81 = b$17.e;
        var s$proxy35 = b$17.d;
        $x_82.writeBuffer($x_81, 0.0, s$proxy35.dv.buffer);
        while (((Bindable_this$41.c.length | 0) <= idx$17)) {
          Bindable_this$41.c.push(null);
        }
        Bindable_this$41.c[idx$17] = b$17;
      }
      var \u03b4scrutinee293 = e2$proxy9.v;
      var idx$18 = (Bindable_this$41.z.t.normalMat | 0);
      if (((idx$18 < (Bindable_this$41.c.length | 0)) && (Bindable_this$41.c[idx$18] !== null))) {
        var BufferBinding_this$69 = Bindable_this$41.c[idx$18];
        BufferBinding_this$69.h.i(BufferBinding_this$69.d, \u03b4scrutinee293);
        var $x_84 = BufferBinding_this$69.g.queue;
        var $x_83 = BufferBinding_this$69.e;
        var s$proxy36 = BufferBinding_this$69.d;
        $x_84.writeBuffer($x_83, 0.0, s$proxy36.dv.buffer);
      } else {
        var uv$18 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy18 = Bindable_this$41.y.f;
        var buffer$18 = new ArrayBuffer(48);
        var arr$proxy23 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$18), 1);
        var b$18 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy23.dv, 0), device$proxy18, uv$18);
        b$18.h.i(b$18.d, \u03b4scrutinee293);
        var $x_86 = b$18.g.queue;
        var $x_85 = b$18.e;
        var s$proxy37 = b$18.d;
        $x_86.writeBuffer($x_85, 0.0, s$proxy37.dv.buffer);
        while (((Bindable_this$41.c.length | 0) <= idx$18)) {
          Bindable_this$41.c.push(null);
        }
        Bindable_this$41.c[idx$18] = b$18;
      }
      ix = ((1 + ix) | 0);
    }
    var balkY = ($m_Lsketches_rooms_columns_Columns$package$().f2 - (0.5 * $m_Lsketches_rooms_columns_Columns$package$().hn));
    ix = ((-$m_Lsketches_rooms_columns_Columns$package$().W) | 0);
    while ((ix <= $m_Lsketches_rooms_columns_Columns$package$().W)) {
      var t$proxy1 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3((ix * $m_Lsketches_rooms_columns_Columns$package$().H), balkY, 0.0), new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, 0.0, 0.0, 1.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, (2.0 * $m_Lsketches_rooms_columns_Columns$package$().X)));
      var m$9 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eC(t$proxy1.aP, t$proxy1.aN, t$proxy1.aO);
      var InstanceList_this$9 = balkShape.P;
      var e1$proxy10 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$9);
      var e2$proxy10 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$9));
      var i$12 = InstanceList_this$9.Y();
      var Bindable_this$46 = InstanceList_this$9.G[i$12];
      var \u03b4scrutinee304 = e1$proxy10.v;
      var idx$19 = (Bindable_this$46.z.t.model | 0);
      if (((idx$19 < (Bindable_this$46.c.length | 0)) && (Bindable_this$46.c[idx$19] !== null))) {
        var BufferBinding_this$73 = Bindable_this$46.c[idx$19];
        BufferBinding_this$73.h.i(BufferBinding_this$73.d, \u03b4scrutinee304);
        var $x_88 = BufferBinding_this$73.g.queue;
        var $x_87 = BufferBinding_this$73.e;
        var s$proxy38 = BufferBinding_this$73.d;
        $x_88.writeBuffer($x_87, 0.0, s$proxy38.dv.buffer);
      } else {
        var uv$19 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy19 = Bindable_this$46.y.f;
        var buffer$19 = new ArrayBuffer(64);
        var arr$proxy24 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$19), 1);
        var b$19 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy24.dv, 0), device$proxy19, uv$19);
        b$19.h.i(b$19.d, \u03b4scrutinee304);
        var $x_90 = b$19.g.queue;
        var $x_89 = b$19.e;
        var s$proxy39 = b$19.d;
        $x_90.writeBuffer($x_89, 0.0, s$proxy39.dv.buffer);
        while (((Bindable_this$46.c.length | 0) <= idx$19)) {
          Bindable_this$46.c.push(null);
        }
        Bindable_this$46.c[idx$19] = b$19;
      }
      var \u03b4scrutinee315 = e2$proxy10.v;
      var idx$20 = (Bindable_this$46.z.t.normalMat | 0);
      if (((idx$20 < (Bindable_this$46.c.length | 0)) && (Bindable_this$46.c[idx$20] !== null))) {
        var BufferBinding_this$77 = Bindable_this$46.c[idx$20];
        BufferBinding_this$77.h.i(BufferBinding_this$77.d, \u03b4scrutinee315);
        var $x_92 = BufferBinding_this$77.g.queue;
        var $x_91 = BufferBinding_this$77.e;
        var s$proxy40 = BufferBinding_this$77.d;
        $x_92.writeBuffer($x_91, 0.0, s$proxy40.dv.buffer);
      } else {
        var uv$20 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy20 = Bindable_this$46.y.f;
        var buffer$20 = new ArrayBuffer(48);
        var arr$proxy25 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$20), 1);
        var b$20 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy25.dv, 0), device$proxy20, uv$20);
        b$20.h.i(b$20.d, \u03b4scrutinee315);
        var $x_94 = b$20.g.queue;
        var $x_93 = b$20.e;
        var s$proxy41 = b$20.d;
        $x_94.writeBuffer($x_93, 0.0, s$proxy41.dv.buffer);
        while (((Bindable_this$46.c.length | 0) <= idx$20)) {
          Bindable_this$46.c.push(null);
        }
        Bindable_this$46.c[idx$20] = b$20;
      }
      ix = ((1 + ix) | 0);
    }
    iz = ((-$m_Lsketches_rooms_columns_Columns$package$().X) | 0);
    while ((iz <= $m_Lsketches_rooms_columns_Columns$package$().X)) {
      var t$proxy2 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, balkY, (iz * $m_Lsketches_rooms_columns_Columns$package$().H)), $m_Ltrivalibs_graphics_math_cpu_Quat$().g2(1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, (2.0 * $m_Lsketches_rooms_columns_Columns$package$().W)));
      var m$10 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eC(t$proxy2.aP, t$proxy2.aN, t$proxy2.aO);
      var InstanceList_this$10 = balkShape.P;
      var e1$proxy11 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$10);
      var e2$proxy11 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$10));
      var i$13 = InstanceList_this$10.Y();
      var Bindable_this$51 = InstanceList_this$10.G[i$13];
      var \u03b4scrutinee326 = e1$proxy11.v;
      var idx$21 = (Bindable_this$51.z.t.model | 0);
      if (((idx$21 < (Bindable_this$51.c.length | 0)) && (Bindable_this$51.c[idx$21] !== null))) {
        var BufferBinding_this$81 = Bindable_this$51.c[idx$21];
        BufferBinding_this$81.h.i(BufferBinding_this$81.d, \u03b4scrutinee326);
        var $x_96 = BufferBinding_this$81.g.queue;
        var $x_95 = BufferBinding_this$81.e;
        var s$proxy42 = BufferBinding_this$81.d;
        $x_96.writeBuffer($x_95, 0.0, s$proxy42.dv.buffer);
      } else {
        var uv$21 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
        var device$proxy21 = Bindable_this$51.y.f;
        var buffer$21 = new ArrayBuffer(64);
        var arr$proxy26 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$21), 1);
        var b$21 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy26.dv, 0), device$proxy21, uv$21);
        b$21.h.i(b$21.d, \u03b4scrutinee326);
        var $x_98 = b$21.g.queue;
        var $x_97 = b$21.e;
        var s$proxy43 = b$21.d;
        $x_98.writeBuffer($x_97, 0.0, s$proxy43.dv.buffer);
        while (((Bindable_this$51.c.length | 0) <= idx$21)) {
          Bindable_this$51.c.push(null);
        }
        Bindable_this$51.c[idx$21] = b$21;
      }
      var \u03b4scrutinee337 = e2$proxy11.v;
      var idx$22 = (Bindable_this$51.z.t.normalMat | 0);
      if (((idx$22 < (Bindable_this$51.c.length | 0)) && (Bindable_this$51.c[idx$22] !== null))) {
        var BufferBinding_this$85 = Bindable_this$51.c[idx$22];
        BufferBinding_this$85.h.i(BufferBinding_this$85.d, \u03b4scrutinee337);
        var $x_100 = BufferBinding_this$85.g.queue;
        var $x_99 = BufferBinding_this$85.e;
        var s$proxy44 = BufferBinding_this$85.d;
        $x_100.writeBuffer($x_99, 0.0, s$proxy44.dv.buffer);
      } else {
        var uv$22 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
        var device$proxy22 = Bindable_this$51.y.f;
        var buffer$22 = new ArrayBuffer(48);
        var arr$proxy27 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$22), 1);
        var b$22 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy27.dv, 0), device$proxy22, uv$22);
        b$22.h.i(b$22.d, \u03b4scrutinee337);
        var $x_102 = b$22.g.queue;
        var $x_101 = b$22.e;
        var s$proxy45 = b$22.d;
        $x_102.writeBuffer($x_101, 0.0, s$proxy45.dv.buffer);
        while (((Bindable_this$51.c.length | 0) <= idx$22)) {
          Bindable_this$51.c.push(null);
        }
        Bindable_this$51.c[idx$22] = b$22;
      }
      iz = ((1 + iz) | 0);
    }
    var t$proxy3 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, (((-$m_Lsketches_rooms_columns_Columns$package$().X) | 0) * $m_Lsketches_rooms_columns_Columns$package$().H)), new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, 0.0, 0.0, 1.0), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().W) + 2.0), 1.0, 1.0));
    var m$11 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eC(t$proxy3.aP, t$proxy3.aN, t$proxy3.aO);
    var InstanceList_this$11 = wallShape.P;
    var e1$proxy12 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$11);
    var e2$proxy12 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$11));
    var i$14 = InstanceList_this$11.Y();
    var Bindable_this$56 = InstanceList_this$11.G[i$14];
    var \u03b4scrutinee348 = e1$proxy12.v;
    var idx$23 = (Bindable_this$56.z.t.model | 0);
    if (((idx$23 < (Bindable_this$56.c.length | 0)) && (Bindable_this$56.c[idx$23] !== null))) {
      var BufferBinding_this$89 = Bindable_this$56.c[idx$23];
      BufferBinding_this$89.h.i(BufferBinding_this$89.d, \u03b4scrutinee348);
      var $x_104 = BufferBinding_this$89.g.queue;
      var $x_103 = BufferBinding_this$89.e;
      var s$proxy46 = BufferBinding_this$89.d;
      $x_104.writeBuffer($x_103, 0.0, s$proxy46.dv.buffer);
    } else {
      var uv$23 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var device$proxy23 = Bindable_this$56.y.f;
      var buffer$23 = new ArrayBuffer(64);
      var arr$proxy28 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$23), 1);
      var b$23 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy28.dv, 0), device$proxy23, uv$23);
      b$23.h.i(b$23.d, \u03b4scrutinee348);
      var $x_106 = b$23.g.queue;
      var $x_105 = b$23.e;
      var s$proxy47 = b$23.d;
      $x_106.writeBuffer($x_105, 0.0, s$proxy47.dv.buffer);
      while (((Bindable_this$56.c.length | 0) <= idx$23)) {
        Bindable_this$56.c.push(null);
      }
      Bindable_this$56.c[idx$23] = b$23;
    }
    var \u03b4scrutinee359 = e2$proxy12.v;
    var idx$24 = (Bindable_this$56.z.t.normalMat | 0);
    if (((idx$24 < (Bindable_this$56.c.length | 0)) && (Bindable_this$56.c[idx$24] !== null))) {
      var BufferBinding_this$93 = Bindable_this$56.c[idx$24];
      BufferBinding_this$93.h.i(BufferBinding_this$93.d, \u03b4scrutinee359);
      var $x_108 = BufferBinding_this$93.g.queue;
      var $x_107 = BufferBinding_this$93.e;
      var s$proxy48 = BufferBinding_this$93.d;
      $x_108.writeBuffer($x_107, 0.0, s$proxy48.dv.buffer);
    } else {
      var uv$24 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var device$proxy24 = Bindable_this$56.y.f;
      var buffer$24 = new ArrayBuffer(48);
      var arr$proxy29 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$24), 1);
      var b$24 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy29.dv, 0), device$proxy24, uv$24);
      b$24.h.i(b$24.d, \u03b4scrutinee359);
      var $x_110 = b$24.g.queue;
      var $x_109 = b$24.e;
      var s$proxy49 = b$24.d;
      $x_110.writeBuffer($x_109, 0.0, s$proxy49.dv.buffer);
      while (((Bindable_this$56.c.length | 0) <= idx$24)) {
        Bindable_this$56.c.push(null);
      }
      Bindable_this$56.c[idx$24] = b$24;
    }
    var t$proxy4 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3((((-$m_Lsketches_rooms_columns_Columns$package$().W) | 0) * $m_Lsketches_rooms_columns_Columns$package$().H), 0.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Quat$().g2(1.5707963267948966), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().X) + 2.0), 1.0, 1.0));
    var m$12 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eC(t$proxy4.aP, t$proxy4.aN, t$proxy4.aO);
    var InstanceList_this$12 = wallShape.P;
    var e1$proxy13 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$12);
    var e2$proxy13 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$12));
    var i$15 = InstanceList_this$12.Y();
    var Bindable_this$61 = InstanceList_this$12.G[i$15];
    var \u03b4scrutinee370 = e1$proxy13.v;
    var idx$25 = (Bindable_this$61.z.t.model | 0);
    if (((idx$25 < (Bindable_this$61.c.length | 0)) && (Bindable_this$61.c[idx$25] !== null))) {
      var BufferBinding_this$97 = Bindable_this$61.c[idx$25];
      BufferBinding_this$97.h.i(BufferBinding_this$97.d, \u03b4scrutinee370);
      var $x_112 = BufferBinding_this$97.g.queue;
      var $x_111 = BufferBinding_this$97.e;
      var s$proxy50 = BufferBinding_this$97.d;
      $x_112.writeBuffer($x_111, 0.0, s$proxy50.dv.buffer);
    } else {
      var uv$25 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var device$proxy25 = Bindable_this$61.y.f;
      var buffer$25 = new ArrayBuffer(64);
      var arr$proxy30 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$25), 1);
      var b$25 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy30.dv, 0), device$proxy25, uv$25);
      b$25.h.i(b$25.d, \u03b4scrutinee370);
      var $x_114 = b$25.g.queue;
      var $x_113 = b$25.e;
      var s$proxy51 = b$25.d;
      $x_114.writeBuffer($x_113, 0.0, s$proxy51.dv.buffer);
      while (((Bindable_this$61.c.length | 0) <= idx$25)) {
        Bindable_this$61.c.push(null);
      }
      Bindable_this$61.c[idx$25] = b$25;
    }
    var \u03b4scrutinee381 = e2$proxy13.v;
    var idx$26 = (Bindable_this$61.z.t.normalMat | 0);
    if (((idx$26 < (Bindable_this$61.c.length | 0)) && (Bindable_this$61.c[idx$26] !== null))) {
      var BufferBinding_this$101 = Bindable_this$61.c[idx$26];
      BufferBinding_this$101.h.i(BufferBinding_this$101.d, \u03b4scrutinee381);
      var $x_116 = BufferBinding_this$101.g.queue;
      var $x_115 = BufferBinding_this$101.e;
      var s$proxy52 = BufferBinding_this$101.d;
      $x_116.writeBuffer($x_115, 0.0, s$proxy52.dv.buffer);
    } else {
      var uv$26 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var device$proxy26 = Bindable_this$61.y.f;
      var buffer$26 = new ArrayBuffer(48);
      var arr$proxy31 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$26), 1);
      var b$26 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy31.dv, 0), device$proxy26, uv$26);
      b$26.h.i(b$26.d, \u03b4scrutinee381);
      var $x_118 = b$26.g.queue;
      var $x_117 = b$26.e;
      var s$proxy53 = b$26.d;
      $x_118.writeBuffer($x_117, 0.0, s$proxy53.dv.buffer);
      while (((Bindable_this$61.c.length | 0) <= idx$26)) {
        Bindable_this$61.c.push(null);
      }
      Bindable_this$61.c[idx$26] = b$26;
    }
    var t$proxy5 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, ($m_Lsketches_rooms_columns_Columns$package$().X * $m_Lsketches_rooms_columns_Columns$package$().H)), $m_Ltrivalibs_graphics_math_cpu_Quat$().g2(3.141592653589793), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().W) + 2.0), 1.0, 1.0));
    var m$13 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eC(t$proxy5.aP, t$proxy5.aN, t$proxy5.aO);
    var InstanceList_this$13 = wallShape.P;
    var e1$proxy14 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$13);
    var e2$proxy14 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$13));
    var i$16 = InstanceList_this$13.Y();
    var Bindable_this$66 = InstanceList_this$13.G[i$16];
    var \u03b4scrutinee392 = e1$proxy14.v;
    var idx$27 = (Bindable_this$66.z.t.model | 0);
    if (((idx$27 < (Bindable_this$66.c.length | 0)) && (Bindable_this$66.c[idx$27] !== null))) {
      var BufferBinding_this$105 = Bindable_this$66.c[idx$27];
      BufferBinding_this$105.h.i(BufferBinding_this$105.d, \u03b4scrutinee392);
      var $x_120 = BufferBinding_this$105.g.queue;
      var $x_119 = BufferBinding_this$105.e;
      var s$proxy54 = BufferBinding_this$105.d;
      $x_120.writeBuffer($x_119, 0.0, s$proxy54.dv.buffer);
    } else {
      var uv$27 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var device$proxy27 = Bindable_this$66.y.f;
      var buffer$27 = new ArrayBuffer(64);
      var arr$proxy32 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$27), 1);
      var b$27 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy32.dv, 0), device$proxy27, uv$27);
      b$27.h.i(b$27.d, \u03b4scrutinee392);
      var $x_122 = b$27.g.queue;
      var $x_121 = b$27.e;
      var s$proxy55 = b$27.d;
      $x_122.writeBuffer($x_121, 0.0, s$proxy55.dv.buffer);
      while (((Bindable_this$66.c.length | 0) <= idx$27)) {
        Bindable_this$66.c.push(null);
      }
      Bindable_this$66.c[idx$27] = b$27;
    }
    var \u03b4scrutinee403 = e2$proxy14.v;
    var idx$28 = (Bindable_this$66.z.t.normalMat | 0);
    if (((idx$28 < (Bindable_this$66.c.length | 0)) && (Bindable_this$66.c[idx$28] !== null))) {
      var BufferBinding_this$109 = Bindable_this$66.c[idx$28];
      BufferBinding_this$109.h.i(BufferBinding_this$109.d, \u03b4scrutinee403);
      var $x_124 = BufferBinding_this$109.g.queue;
      var $x_123 = BufferBinding_this$109.e;
      var s$proxy56 = BufferBinding_this$109.d;
      $x_124.writeBuffer($x_123, 0.0, s$proxy56.dv.buffer);
    } else {
      var uv$28 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var device$proxy28 = Bindable_this$66.y.f;
      var buffer$28 = new ArrayBuffer(48);
      var arr$proxy33 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$28), 1);
      var b$28 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy33.dv, 0), device$proxy28, uv$28);
      b$28.h.i(b$28.d, \u03b4scrutinee403);
      var $x_126 = b$28.g.queue;
      var $x_125 = b$28.e;
      var s$proxy57 = b$28.d;
      $x_126.writeBuffer($x_125, 0.0, s$proxy57.dv.buffer);
      while (((Bindable_this$66.c.length | 0) <= idx$28)) {
        Bindable_this$66.c.push(null);
      }
      Bindable_this$66.c[idx$28] = b$28;
    }
    var t$proxy6 = new $c_Ltrivalibs_graphics_scene_Transform(new $c_Ltrivalibs_graphics_math_cpu_Vec3(($m_Lsketches_rooms_columns_Columns$package$().W * $m_Lsketches_rooms_columns_Columns$package$().H), 0.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Quat$().g2(4.71238898038469), new $c_Ltrivalibs_graphics_math_cpu_Vec3(((2.0 * $m_Lsketches_rooms_columns_Columns$package$().X) + 2.0), 1.0, 1.0));
    var m$14 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().eC(t$proxy6.aP, t$proxy6.aN, t$proxy6.aO);
    var InstanceList_this$14 = wallShape.P;
    var e1$proxy15 = new $c_Ltrivalibs_graphics_painter_BindPair("model", m$14);
    var e2$proxy15 = new $c_Ltrivalibs_graphics_painter_BindPair("normalMat", $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$().U(m$14));
    var i$17 = InstanceList_this$14.Y();
    var Bindable_this$71 = InstanceList_this$14.G[i$17];
    var \u03b4scrutinee414 = e1$proxy15.v;
    var idx$29 = (Bindable_this$71.z.t.model | 0);
    if (((idx$29 < (Bindable_this$71.c.length | 0)) && (Bindable_this$71.c[idx$29] !== null))) {
      var BufferBinding_this$113 = Bindable_this$71.c[idx$29];
      BufferBinding_this$113.h.i(BufferBinding_this$113.d, \u03b4scrutinee414);
      var $x_128 = BufferBinding_this$113.g.queue;
      var $x_127 = BufferBinding_this$113.e;
      var s$proxy58 = BufferBinding_this$113.d;
      $x_128.writeBuffer($x_127, 0.0, s$proxy58.dv.buffer);
    } else {
      var uv$29 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
      var device$proxy29 = Bindable_this$71.y.f;
      var buffer$29 = new ArrayBuffer(64);
      var arr$proxy34 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$29), 1);
      var b$29 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy34.dv, 0), device$proxy29, uv$29);
      b$29.h.i(b$29.d, \u03b4scrutinee414);
      var $x_130 = b$29.g.queue;
      var $x_129 = b$29.e;
      var s$proxy59 = b$29.d;
      $x_130.writeBuffer($x_129, 0.0, s$proxy59.dv.buffer);
      while (((Bindable_this$71.c.length | 0) <= idx$29)) {
        Bindable_this$71.c.push(null);
      }
      Bindable_this$71.c[idx$29] = b$29;
    }
    var \u03b4scrutinee425 = e2$proxy15.v;
    var idx$30 = (Bindable_this$71.z.t.normalMat | 0);
    if (((idx$30 < (Bindable_this$71.c.length | 0)) && (Bindable_this$71.c[idx$30] !== null))) {
      var BufferBinding_this$117 = Bindable_this$71.c[idx$30];
      BufferBinding_this$117.h.i(BufferBinding_this$117.d, \u03b4scrutinee425);
      var $x_132 = BufferBinding_this$117.g.queue;
      var $x_131 = BufferBinding_this$117.e;
      var s$proxy60 = BufferBinding_this$117.d;
      $x_132.writeBuffer($x_131, 0.0, s$proxy60.dv.buffer);
    } else {
      var uv$30 = $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
      var device$proxy30 = Bindable_this$71.y.f;
      var buffer$30 = new ArrayBuffer(48);
      var arr$proxy35 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$30), 1);
      var b$30 = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy35.dv, 0), device$proxy30, uv$30);
      b$30.h.i(b$30.d, \u03b4scrutinee425);
      var $x_134 = b$30.g.queue;
      var $x_133 = b$30.e;
      var s$proxy61 = b$30.d;
      $x_134.writeBuffer($x_133, 0.0, s$proxy61.dv.buffer);
      while (((Bindable_this$71.c.length | 0) <= idx$30)) {
        Bindable_this$71.c.push(null);
      }
      Bindable_this$71.c[idx$30] = b$30;
    }
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy1 = ul$proxy1.iZ;
    var buffer$31 = new ArrayBuffer(64);
    var arr$proxy36 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer$31), 1);
    var viewProj = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy36.dv, 0), p$3.f, uv$proxy1);
    var clearColor$1 = new $c_T4(0.9, 0.95, 0.99, 1.0);
    var shapes$1 = [Bindable_this, columnShape, balkShape, wallShape];
    var Panel_this = p$3.m9((void 0), (void 0), clearColor$1, true, true, (void 0), (void 0), (void 0), (void 0), (void 0), shapes$1, (void 0), (void 0));
    var e1$proxy16 = new $c_Ltrivalibs_graphics_painter_BindPair("viewProj", viewProj);
    var \u03b4scrutinee433 = e1$proxy16.v;
    var dict$proxy1 = Panel_this.gS;
    dict$proxy1.viewProj = \u03b4scrutinee433;
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kE(0.6, ((canvas.width | 0) / (canvas.height | 0)), 0.1, 200.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 3.0, 15.0));
    $m_Ltrivalibs_dev_devPreserve$().kI(cam, "camera");
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().lA(p$3.f8, true, 400.0, 5.0, true, (void 0));
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(3.0, 4.0);
    p$3.m5(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var cw = (+v1$2);
      var ch = (+v2$2);
      var aspect$2 = (cw / ch);
      var fov$1 = cam.ff;
      var near$1 = cam.fg;
      var far$1 = cam.fe;
      var rotH$2 = cam.a3;
      var rotV$2 = cam.aB;
      var pos$2$2 = cam.S;
      cam.i3(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2$2);
    })));
    $m_Ltrivalibs_utils_animation_animate$package$().kD(((p$3$1) => ((arg1$2) => {
      controller.mF(cam, input, (+arg1$2));
      var value$proxy19 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().k4(), cam.hQ, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.mJ());
      viewProj.h.i(viewProj.d, value$proxy19);
      var $x_136 = viewProj.g.queue;
      var $x_135 = viewProj.e;
      var s$proxy62 = viewProj.d;
      $x_136.writeBuffer($x_135, 0.0, s$proxy62.dv.buffer);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$3$1, Panel_this);
      p$3$1.ms(Panel_this);
    }))(p$3));
  })));
});
var $d_Lsketches_rooms_columns_Columns$package$ = new $TypeData().i($c_Lsketches_rooms_columns_Columns$package$, "sketches.rooms.columns.Columns$package$", ({
  dj: 1
}));
var $n_Lsketches_rooms_columns_Columns$package$;
function $m_Lsketches_rooms_columns_Columns$package$() {
  if ((!$n_Lsketches_rooms_columns_Columns$package$)) {
    $n_Lsketches_rooms_columns_Columns$package$ = new $c_Lsketches_rooms_columns_Columns$package$();
  }
  return $n_Lsketches_rooms_columns_Columns$package$;
}
function $s_Lsketches_rooms_columns_roomsColumns__main__AT__V(args) {
  try {
    $m_Lsketches_rooms_columns_Columns$package$().mm();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().mt(e);
    } else {
      throw e;
    }
  }
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
  dk: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.f3 = null;
  this.ho = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.f3 = [];
  this.ho = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.kZ = (function() {
  return (import.meta.hot !== (void 0));
});
$p.lZ = (function() {
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
$p.mv = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().lZ()) + ":") + label);
});
$p.iv = (function() {
  return window.sessionStorage;
});
$p.mh = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().iv().getItem(key);
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
$p.mM = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().iv().setItem(key, JSON.stringify(json));
});
$p.ml = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().iv().removeItem(key);
});
$p.l7 = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().ho)) {
    $m_Ltrivalibs_dev_dev$package$().ho = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().f3.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().f3[i].fh();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.mi = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().l7();
  $m_Ltrivalibs_dev_dev$package$().f3.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().lv($m_Ltrivalibs_dev_dev$package$().f3, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().f3.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  dl: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.S.q, cam.S.l, cam.S.n, cam.a3, cam.aB];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.ff;
      var aspect$1 = cam.fL;
      var near$1 = cam.fg;
      var far$1 = cam.fe;
      cam.i3(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.kI = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().kZ())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().mv(label);
    var initPos = cam.S;
    var initRotH = cam.a3;
    var initRotV = cam.aB;
    var stored = $m_Ltrivalibs_dev_dev$package$().mh(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.fh();
      $m_Ltrivalibs_dev_dev$package$().ml(sk);
      cam.i3(cam.ff, cam.fL, cam.fg, cam.fe, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().mi(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().mM(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dm: 1
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
  this.d = null;
  this.g = null;
  this.h = null;
  this.e = null;
  this.d = buffer;
  this.g = device;
  this.h = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.e = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aH)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aH: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.gt = null;
  this.gu = null;
  this.fw = null;
  this.fx = null;
  this.gr = null;
  this.gs = null;
  this.fu = null;
  this.fv = null;
  this.gt = frontTopLeft;
  this.gu = frontTopRight;
  this.fw = frontBottomLeft;
  this.fx = frontBottomRight;
  this.gr = backTopLeft;
  this.gs = backTopRight;
  this.fu = backBottomLeft;
  this.fv = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  ds: 1
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
$p.jQ = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.q;
  var cy = center.l;
  var cz = center.n;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  dt: 1
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
  this.j0 = null;
  this.hp = null;
  this.j0 = vertices;
  this.hp = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  du: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_FaceData(normal, section) {
  this.fy = null;
  this.ku = 0;
  this.fy = normal;
  this.ku = section;
}
$p = $c_Ltrivalibs_graphics_geometry_FaceData.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_FaceData;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_FaceData() {
}
$h_Ltrivalibs_graphics_geometry_FaceData.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_FaceData = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FaceData, "trivalibs.graphics.geometry.FaceData", ({
  dv: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.fz = null;
  this.a1 = null;
  this.f4 = null;
  this.gw = null;
  this.gv = null;
  this.fz = evidence$1;
  this.a1 = [];
  this.f4 = [];
  this.gw = [];
  this.gv = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.kB = (function(face, normal, section) {
  var faceIdx = (this.a1.length | 0);
  this.a1.push(face);
  this.f4.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().md(this.fz.aD(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().lr(Object, this.gv, key)) {
      var $x_2 = this.gw;
      var dict = this.gv;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().iX.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.j4.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.gw.length | 0);
      var dict$1 = this.gv;
      dict$1[key] = idx;
      this.gw.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.fz.aD(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
$p.l6 = (function() {
  var hasQuads = false;
  var i = 0;
  while ((i < (this.a1.length | 0))) {
    var arr = this.a1[i];
    if ((this.f4[i].fy === null)) {
      var $x_2 = this.f4[i];
      if (((arr.length | 0) === 3)) {
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$().iu(this.a1[i], this.fz);
      } else {
        hasQuads = true;
        var $x_1 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$().iu(this.a1[i], this.fz);
      }
      $x_2.fy = $x_1;
    }
    i = ((1 + i) | 0);
  }
  return hasQuads;
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dy: 1
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
$p.kG = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().kC(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dz: 1
}));
var $n_Ltrivalibs_graphics_geometry_Mesh$;
function $m_Ltrivalibs_graphics_geometry_Mesh$() {
  if ((!$n_Ltrivalibs_graphics_geometry_Mesh$)) {
    $n_Ltrivalibs_graphics_geometry_Mesh$ = new $c_Ltrivalibs_graphics_geometry_Mesh$();
  }
  return $n_Ltrivalibs_graphics_geometry_Mesh$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIndex, vertexSlot) {
  this.kv = 0;
  this.kw = 0;
  this.kv = faceIndex;
  this.kw = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  dB: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.kx = null;
  this.j4 = null;
  this.kx = position;
  this.j4 = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  dG: 1
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
$p.lW = (function(idxBuf, vertexCount) {
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
  dH: 1
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
$p.kC = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.kB(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  dI: 1
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
$p.md = (function(v) {
  return (((($doubleToInt((10000.0 * v.q)) + ",") + $doubleToInt((10000.0 * v.l))) + ",") + $doubleToInt((10000.0 * v.n)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  dJ: 1
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
$p.aC = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
$p.mz = (function(q, evidence$1) {
  return q[0];
});
$p.kN = (function(q, evidence$1) {
  return q[1];
});
$p.kP = (function(q, evidence$1) {
  return q[2];
});
$p.mB = (function(q, evidence$1) {
  return q[3];
});
$p.iu = (function(q, evidence$1) {
  var a = evidence$1.aD(this.mz(q, evidence$1));
  var b = evidence$1.aD(this.kN(q, evidence$1));
  var c = evidence$1.aD(this.kP(q, evidence$1));
  var d = evidence$1.aD(this.mB(q, evidence$1));
  var d1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((c.q - a.q), (c.l - a.l), (c.n - a.n));
  var d2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((d.q - b.q), (d.l - b.l), (d.n - b.n));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), d1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), d2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  dL: 1
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
$p.kA = (function(tri, evidence$1) {
  return tri[0];
});
$p.kL = (function(tri, evidence$1) {
  return tri[1];
});
$p.kQ = (function(tri, evidence$1) {
  return tri[2];
});
$p.iu = (function(tri, evidence$1) {
  var pa = evidence$1.aD(this.kA(tri, evidence$1));
  var pb = evidence$1.aD(this.kL(tri, evidence$1));
  var pc = evidence$1.aD(this.kQ(tri, evidence$1));
  var e1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pb.q - pa.q), (pb.l - pa.l), (pb.n - pa.n));
  var e2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((pc.q - pa.q), (pc.l - pa.l), (pc.n - pa.n));
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().o(), e1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), e2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$, "trivalibs.graphics.geometry.polygon$package$Triangle$", ({
  dM: 1
}));
var $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
function $m_Ltrivalibs_graphics_geometry_polygon$package$Triangle$() {
  if ((!$n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$)) {
    $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$ = new $c_Ltrivalibs_graphics_geometry_polygon$package$Triangle$();
  }
  return $n_Ltrivalibs_graphics_geometry_polygon$package$Triangle$;
}
function $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__transpose__O__Ltrivalibs_graphics_math_Mat3Base__O($thiz, m, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Mat3((+x$2.am(m)), (+x$2.ap(m)), (+x$2.as(m)), (+x$2.an(m)), (+x$2.aq(m)), (+x$2.at(m)), (+x$2.ao(m)), (+x$2.ar(m)), (+x$2.au(m)));
}
function $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat3Base__O($thiz, m, x$2) {
  var a00 = (+x$2.am(m));
  var a01 = (+x$2.an(m));
  var a02 = (+x$2.ao(m));
  var a10 = (+x$2.ap(m));
  var a11 = (+x$2.aq(m));
  var a12 = (+x$2.ar(m));
  var a20 = (+x$2.as(m));
  var a21 = (+x$2.at(m));
  var a22 = (+x$2.au(m));
  var c00 = ((a11 * a22) - (a12 * a21));
  var c01 = (-((a10 * a22) - (a12 * a20)));
  var c02 = ((a10 * a21) - (a11 * a20));
  var c10 = (-((a01 * a22) - (a02 * a21)));
  var c11 = ((a00 * a22) - (a02 * a20));
  var c12 = (-((a00 * a21) - (a01 * a20)));
  var c20 = ((a01 * a12) - (a02 * a11));
  var c21 = (-((a00 * a12) - (a02 * a10)));
  var c22 = ((a00 * a11) - (a01 * a10));
  var det = (((a00 * c00) + (a10 * c10)) + (a20 * c20));
  var invDet = (1.0 / det);
  return new $c_Ltrivalibs_graphics_math_cpu_Mat3((c00 * invDet), (c10 * invDet), (c20 * invDet), (c01 * invDet), (c11 * invDet), (c21 * invDet), (c02 * invDet), (c12 * invDet), (c22 * invDet));
}
function $f_Ltrivalibs_graphics_math_Mat3MutableOps__set__O__Ltrivalibs_graphics_math_Mat3Mutable__O__Ltrivalibs_graphics_math_Mat3Base__V($thiz, m, mb, other, x$4) {
  mb.g4(m, (+x$4.am(other)));
  mb.g5(m, (+x$4.an(other)));
  mb.g6(m, (+x$4.ao(other)));
  mb.g8(m, (+x$4.ap(other)));
  mb.g9(m, (+x$4.aq(other)));
  mb.ga(m, (+x$4.ar(other)));
  mb.gc(m, (+x$4.as(other)));
  mb.gd(m, (+x$4.at(other)));
  mb.ge(m, (+x$4.au(other)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($thiz, fovY, aspect, near, far) {
  var x = (0.5 * fovY);
  var f = (1.0 / (+Math.tan(x)));
  var rInv = (1.0 / (near - far));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4((f / aspect), 0.0, 0.0, 0.0, 0.0, f, 0.0, 0.0, 0.0, 0.0, (far * rInv), (-1.0), 0.0, 0.0, ((near * far) * rInv), 0.0);
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($thiz, m, x$2, other) {
  var a00 = (+x$2.am(m));
  var a01 = (+x$2.an(m));
  var a02 = (+x$2.ao(m));
  var a03 = (+x$2.g7(m));
  var a10 = (+x$2.ap(m));
  var a11 = (+x$2.aq(m));
  var a12 = (+x$2.ar(m));
  var a13 = (+x$2.gb(m));
  var a20 = (+x$2.as(m));
  var a21 = (+x$2.at(m));
  var a22 = (+x$2.au(m));
  var a23 = (+x$2.gf(m));
  var a30 = (+x$2.gg(m));
  var a31 = (+x$2.gh(m));
  var a32 = (+x$2.gi(m));
  var a33 = (+x$2.gj(m));
  var b00 = (+x$2.am(other));
  var b01 = (+x$2.an(other));
  var b02 = (+x$2.ao(other));
  var b03 = (+x$2.g7(other));
  var b10 = (+x$2.ap(other));
  var b11 = (+x$2.aq(other));
  var b12 = (+x$2.ar(other));
  var b13 = (+x$2.gb(other));
  var b20 = (+x$2.as(other));
  var b21 = (+x$2.at(other));
  var b22 = (+x$2.au(other));
  var b23 = (+x$2.gf(other));
  var b30 = (+x$2.gg(other));
  var b31 = (+x$2.gh(other));
  var b32 = (+x$2.gi(other));
  var b33 = (+x$2.gj(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.am(m));
  var a01 = (+x$2.an(m));
  var a02 = (+x$2.ao(m));
  var a03 = (+x$2.g7(m));
  var a10 = (+x$2.ap(m));
  var a11 = (+x$2.aq(m));
  var a12 = (+x$2.ar(m));
  var a13 = (+x$2.gb(m));
  var a20 = (+x$2.as(m));
  var a21 = (+x$2.at(m));
  var a22 = (+x$2.au(m));
  var a23 = (+x$2.gf(m));
  var a30 = (+x$2.gg(m));
  var a31 = (+x$2.gh(m));
  var a32 = (+x$2.gi(m));
  var a33 = (+x$2.gj(m));
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
  mb.g4(m, (+x$4.am(other)));
  mb.g5(m, (+x$4.an(other)));
  mb.g6(m, (+x$4.ao(other)));
  mb.k6(m, (+x$4.g7(other)));
  mb.g8(m, (+x$4.ap(other)));
  mb.g9(m, (+x$4.aq(other)));
  mb.ga(m, (+x$4.ar(other)));
  mb.k7(m, (+x$4.gb(other)));
  mb.gc(m, (+x$4.as(other)));
  mb.gd(m, (+x$4.at(other)));
  mb.ge(m, (+x$4.au(other)));
  mb.k8(m, (+x$4.gf(other)));
  mb.k9(m, (+x$4.gg(other)));
  mb.ka(m, (+x$4.gh(other)));
  mb.kb(m, (+x$4.gi(other)));
  mb.kc(m, (+x$4.gj(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.q + other.q), (v.l + other.l), (v.n + other.n));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((-v.q), (-v.l), (-v.n));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.q - other.q), (v.l - other.l), (v.n - other.n));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.q * scalar), (v.l * scalar), (v.n * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.q / scalar), (v.l / scalar), (v.n / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.l * other.n) - (v.n * other.l)), ((v.n * other.q) - (v.q * other.n)), ((v.q * other.l) - (v.l * other.q)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat3(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
  this.hq = 0.0;
  this.hr = 0.0;
  this.hs = 0.0;
  this.ht = 0.0;
  this.hu = 0.0;
  this.hv = 0.0;
  this.hw = 0.0;
  this.hx = 0.0;
  this.hy = 0.0;
  this.hq = m00;
  this.hr = m01;
  this.hs = m02;
  this.ht = m10;
  this.hu = m11;
  this.hv = m12;
  this.hw = m20;
  this.hx = m21;
  this.hy = m22;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat3() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3, "trivalibs.graphics.math.cpu.Mat3", ({
  e2: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.gx = 0.0;
  this.gy = 0.0;
  this.gz = 0.0;
  this.hz = 0.0;
  this.gA = 0.0;
  this.gB = 0.0;
  this.gC = 0.0;
  this.hA = 0.0;
  this.gD = 0.0;
  this.gE = 0.0;
  this.gF = 0.0;
  this.hB = 0.0;
  this.hC = 0.0;
  this.hD = 0.0;
  this.hE = 0.0;
  this.hF = 0.0;
  this.gx = m00;
  this.gy = m01;
  this.gz = m02;
  this.hz = m03;
  this.gA = m10;
  this.gB = m11;
  this.gC = m12;
  this.hA = m13;
  this.gD = m20;
  this.gE = m21;
  this.gF = m22;
  this.hB = m23;
  this.hC = m30;
  this.hD = m31;
  this.hE = m32;
  this.hF = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  e5: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.aj = 0.0;
  this.ak = 0.0;
  this.al = 0.0;
  this.ai = 0.0;
  this.aj = x;
  this.ak = y;
  this.al = z;
  this.ai = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  e8: 1
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
$p.lk = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.g2 = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  e9: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(((((q.ai * p.aj) + (q.aj * p.ai)) + (q.ak * p.al)) - (q.al * p.ak)), ((((q.ai * p.ak) - (q.aj * p.al)) + (q.ak * p.ai)) + (q.al * p.aj)), ((((q.ai * p.al) + (q.aj * p.ak)) - (q.ak * p.aj)) + (q.al * p.ai)), ((((q.ai * p.ai) - (q.aj * p.aj)) - (q.ak * p.ak)) - (q.al * p.al)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.f5 = 0.0;
  this.f6 = 0.0;
  this.f5 = x;
  this.f6 = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  ed: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.q = 0.0;
  this.l = 0.0;
  this.n = 0.0;
  this.q = x;
  this.l = y;
  this.n = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  ee: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$() {
  this.jc = null;
  this.jd = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$.prototype = $p;
$p.lX = (function() {
  if ((!this.jd)) {
    this.jc = new $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21();
    this.jd = true;
  }
  return this.jc;
});
var $d_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$, "trivalibs.graphics.math.cpu.mat3$package$Mat3PaddedBuffer$", ({
  eh: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.je = null;
  this.jf = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.lp = (function() {
  if ((!this.jf)) {
    this.je = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.jf = true;
  }
  return this.je;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  ek: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.r = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.r = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.j = (function() {
  return this.r;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  aR: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_expr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_expr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_expr$package$.prototype = $p;
$p.mn = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.r) + ", ") + onTrue.r) + ", ") + cond.r) + ")"));
});
$p.kO = (function(cond, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + cond.r) + " || ") + other.r) + ")"));
});
$p.jZ = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.r) + " < ") + b.r) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  eo: 1
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
  this.jh = null;
  this.ji = false;
  this.jn = null;
  this.jo = false;
  this.jp = null;
  this.jq = false;
  this.jr = null;
  this.js = false;
  this.jj = null;
  this.jk = false;
  this.jl = null;
  this.jm = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.lf = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.eD = (function() {
  if ((!this.ji)) {
    this.jh = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.ji = true;
  }
  return this.jh;
});
$p.fk = (function() {
  if ((!this.jo)) {
    this.jn = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4();
    this.jo = true;
  }
  return this.jn;
});
$p.i7 = (function() {
  if ((!this.jq)) {
    this.jp = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.jq = true;
  }
  return this.jp;
});
$p.lq = (function() {
  if ((!this.js)) {
    this.jr = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.js = true;
  }
  return this.jr;
});
$p.lo = (function() {
  if ((!this.jk)) {
    this.jj = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8();
    this.jk = true;
  }
  return this.jj;
});
$p.k3 = (function() {
  if ((!this.jm)) {
    this.jl = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9();
    this.jm = true;
  }
  return this.jl;
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  ep: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
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
$p.kH = (function(x, y, z) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.r) + ", ") + y.r) + ", ") + z.r) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  eB: 1
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
$p.jR = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.r) + ", ") + w.r) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  eC: 1
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
  this.v = null;
  this.v = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  eD: 1
}));
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
  var $x_1 = $thiz.fA.f;
  var value = (ab.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 24
  }));
  $thiz.fA.ac.writeBuffer(buf, 0.0, ab);
  if (($thiz.f7 !== null)) {
    var opt$proxy2 = $thiz.f7;
    opt$proxy2.destroy();
  }
  $thiz.f7 = buf;
  $thiz.gG = count;
  $thiz.hH = fmt;
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V($thiz, verts) {
  var $x_1 = $thiz.fA.f;
  var value = (verts.dv.buffer.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 40
  }));
  $thiz.fA.ac.writeBuffer(buf, 0.0, verts.dv.buffer);
  if (($thiz.fB !== null)) {
    var opt$proxy4 = $thiz.fB;
    opt$proxy4.destroy();
  }
  $thiz.fB = buf;
  $thiz.gH = (verts.off | 0);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.fA = null;
  this.fB = null;
  this.gH = 0;
  this.f7 = null;
  this.gG = 0;
  this.hH = null;
  this.hI = null;
  this.hG = null;
  this.fA = painter;
  this.fB = null;
  this.gH = 0;
  this.f7 = null;
  this.gG = 0;
  this.hH = "uint16";
  this.hI = "triangle-list";
  this.hG = "ccw";
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.mp = (function(geometry, vertices, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.hI = topology;
  }
  if ((frontFace !== (void 0))) {
    this.hG = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, geometry.j0);
    if ((geometry.hp !== null)) {
      $p_Ltrivalibs_graphics_painter_Form__uploadIndices__sjs_js_typedarray_TypedArray__V(this, geometry.hp);
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
  this.ju = null;
  this.jt = null;
  this.G = null;
  this.ju = shade;
  this.jt = painter;
  this.G = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.D = (function() {
  return (this.G.length | 0);
});
$p.Y = (function() {
  var inst = new $c_Ltrivalibs_graphics_painter_Instance(this.ju, this.jt);
  this.G.push(inst);
  return (((this.G.length | 0) - 1) | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  eG: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.mK();
  var h = $thiz.lt();
  panel.l8(w, h);
  var msaa = panel.fd;
  var encoder = $thiz.f.createCommandEncoder();
  var panelFormats = panel.i6();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.mx())) {
    if ((panel.gR !== null)) {
      matchResult6: {
        var \u03b412$;
        var x18 = panel.gR;
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
      var r$2 = (+\u03b412$.e1);
      var g$2 = (+\u03b412$.aG);
      var b$2 = (+\u03b412$.aH);
      var a$2 = (+\u03b412$.aI);
      if (msaa) {
        var _2 = panel.kf(t);
        var _2$1 = panel.hd(t);
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
        var _2$3 = panel.hd(t);
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
      var _2$5 = panel.kf(t);
      var _2$6 = panel.hd(t);
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var _2$7 = panel.hd(t);
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
  if (panel.fI) {
    var _2$8 = panel.kY();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.gT.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.gT[i], panel.fI, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.ac.submit([encoder.finish()]);
  var srcView = panel.my();
  var dstView = panel.mc();
  var hasPongLayers = false;
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.aM.length | 0))) {
    var layer = panel.aM[j];
    var hasPanelLayout = (layer.aw().fK !== null);
    var slot0Manual = ((hasPanelLayout && ((layer.hc().length | 0) > 0)) && (layer.hc()[0] !== null));
    var needsPingPong = (hasPanelLayout && (!slot0Manual));
    if ((layer.kd() >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.ac.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.gn(0, layer.kd());
      var mipSrcView = ((layer.m0() >= 0) ? panel.gn(0, layer.m0()) : srcView);
      var enc = $thiz.f.createCommandEncoder();
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
      $thiz.ac.submit([enc.finish()]);
    } else if (needsPingPong) {
      hasPongLayers = true;
      if ((curPass !== null)) {
        curPass.end();
        $thiz.ac.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.f.createCommandEncoder();
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
      $thiz.ac.submit([enc$2.finish()]);
      var tmp = srcView;
      srcView = dstView;
      dstView = tmp;
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.f.createCommandEncoder();
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
    $thiz.ac.submit([curEncoder.finish()]);
  }
  if (hasPongLayers) {
    panel.fF = srcView;
  } else {
    panel.fF = null;
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.aM.length | 0))) {
    if ((panel.aM[mi].kd() >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.it() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.jA)) {
    $thiz.jz = $thiz.f.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.jA = true;
  }
  return $thiz.jz;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.jw)) {
    var $x_2 = $thiz.f;
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
    $thiz.jv = $x_1;
    $thiz.jw = true;
  }
  return $thiz.jv;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.jy)) {
    var module = $thiz.f.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.f;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pipelineLayout = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.f;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var f$proxy4 = $thiz.f9;
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
    $thiz.jx = $x_2;
    $thiz.jy = true;
  }
  return $thiz.jx;
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.jD)) {
    $thiz.jC = $thiz.f.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.jD = true;
  }
  return $thiz.jC;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.gJ.hasOwnProperty(format)))))) {
    return $thiz.gJ[format];
  } else {
    var module = $thiz.f.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.f;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_2 = $thiz.f;
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
    $thiz.gJ[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.it();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.fc.length | 0) > 0) ? panel.fc[0] : $thiz.f9);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.gn(0, ((i - 1) | 0));
    var dstView = panel.gn(0, i);
    var encoder = $thiz.f.createCommandEncoder();
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
    var $x_1 = $thiz.f;
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
    $thiz.ac.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.a2.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.a2[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.O.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.O[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.gS;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.t.hasOwnProperty(name)))))) {
      var idx = (shade.t[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.hJ.hasOwnProperty(name)))))) {
      var idx$2 = (shade.hJ[name] | 0);
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
  while ((i < (inst.c.length | 0))) {
    if ((inst.c[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.c[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.gI.length | 0))) {
    if ((inst.gI[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.gI[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.gS).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.hK !== null))) {
    var entries = [];
    var i = 0;
    while ((i < (bindings.length | 0))) {
      var b = bindings[i];
      if ((b !== null)) {
        entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.f;
    var _2 = shade.hK;
    var bg = $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
    pass.setBindGroup(0, bg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shade, panelBindings, srcView) {
  if ((shade.fK !== null)) {
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
        var view = ((!(!pb.depth)) ? pb.panel.kX() : pb.panel.gn((pb.index | 0), (pb.mipLevel | 0)));
        var value = k;
        entries.push(({
          "binding": value,
          "resource": view
        }));
      }
      k = ((1 + k) | 0);
    }
    if (((entries.length | 0) > 0)) {
      var $x_1 = $thiz.f;
      var _2 = shade.fK;
      var pg = $x_1.createBindGroup(({
        "layout": _2,
        "entries": entries
      }));
      pass.setBindGroup(1, pg);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.f9]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.a9, shape.hM, fmts, depthTest, multisample, shape.ad.hI, shape.hN, shape.ad.hG);
  pass.setPipeline(pipeline);
  pass.setVertexBuffer(0, shape.ad.fB);
  var opt$proxy9 = shape.ad.f7;
  var hasIndex = (opt$proxy9 !== null);
  if (hasIndex) {
    pass.setIndexBuffer(shape.ad.f7, shape.ad.hH);
  }
  var instanceCount = shape.P.D();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.R, shape.gX);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.a9, $thiz.a2, $thiz.O);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.a9, $thiz.a2);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.a9, $thiz.O, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.a9, shape.R);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.a9, shape.gX, null);
    }
    if (hasIndex) {
      pass.drawIndexed(shape.ad.gG);
    } else {
      pass.draw(shape.ad.gH);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.P.G[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.R, shape.gX);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.a9, $thiz.a2, $thiz.O);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.a2, $thiz.O);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.a9, $thiz.a2);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.a9, $thiz.O, null);
      if (hasIndex) {
        pass.drawIndexed(shape.ad.gG);
      } else {
        pass.draw(shape.ad.gH);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.f9]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.aw(), layer.mN(), fmts, depthTest, multisample, "triangle-list", "none", "ccw");
  pass.setPipeline(pipeline);
  var instanceCount = layer.lz().D();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.jT(), layer.hc());
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.aw(), $thiz.a2, $thiz.O);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.aw(), $thiz.a2);
      var effectiveSrcView = (((($thiz.O.length | 0) > 0) && ($thiz.O[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.aw(), $thiz.O, effectiveSrcView);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.aw(), layer.jT());
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.aw(), layer.hc(), srcView);
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.lz().G[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.jT(), layer.hc());
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.aw(), $thiz.a2, $thiz.O);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.a2, $thiz.O);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.aw(), $thiz.a2);
      var effectiveSrcView$2 = (((($thiz.O.length | 0) > 0) && ($thiz.O[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.aw(), $thiz.O, effectiveSrcView$2);
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
  var key = ((((((((((((((shade.jE + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace);
  if ((!(!(!(!$thiz.gL.hasOwnProperty(key)))))) {
    return $thiz.gL[key];
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
    if ((shade.hL !== null)) {
      var _2 = shade.gW;
      var _2$1 = [shade.hL];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.gW;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.jF;
    var _2$4 = shade.gW;
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
    var p = $thiz.f.createRenderPipeline(desc);
    $thiz.gL[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.e;
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
  this.f = null;
  this.ac = null;
  this.f8 = null;
  this.jB = null;
  this.f9 = null;
  this.gL = null;
  this.gK = 0;
  this.gM = null;
  this.jz = null;
  this.jA = false;
  this.jv = null;
  this.jw = false;
  this.jx = null;
  this.jy = false;
  this.jC = null;
  this.jD = false;
  this.gJ = null;
  this.a2 = null;
  this.O = null;
  this.f = device;
  this.ac = queue;
  this.f8 = canvas;
  this.jB = context;
  this.f9 = preferredFormat;
  this.gL = ({});
  this.gK = 0;
  this.gM = [];
  this.gJ = ({});
  this.a2 = [];
  this.O = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.m5 = (function(cb) {
  this.gM.push(cb);
  cb.h5((this.f8.width | 0), (this.f8.height | 0));
});
$p.ld = (function(w, h) {
  var k = 0;
  while ((k < (this.gM.length | 0))) {
    this.gM[k].h5(w, h);
    k = ((1 + k) | 0);
  }
});
$p.mK = (function() {
  return (this.f8.width | 0);
});
$p.lt = (function() {
  return (this.f8.height | 0);
});
$p.lg = (function(geometry, vertices, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).mp(geometry, vertices, topology, frontFace);
});
$p.hg = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).mq(cullMode, blendState);
});
$p.m9 = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).mo(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.ms = (function(panel) {
  var encoder = this.f.createCommandEncoder();
  var swapChainView = this.jB.getCurrentTexture().createView();
  var _2 = [({
    "view": swapChainView,
    "loadOp": "load",
    "storeOp": "store"
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2
  }));
  var $x_1 = this.f;
  var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
  var _2$2 = panel.m8();
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
  this.ac.submit([encoder.finish()]);
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
$p.ly = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().ln();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).ex;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().lm(canvas);
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
            painter.ld(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().g1(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().g1(f$proxy11));
  }
});
$p.lx = (function(canvas, setup) {
  var promise$proxy4 = this.ly(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().g1(setup));
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
function $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z($thiz) {
  var i = 0;
  while ((i < ($thiz.aM.length | 0))) {
    if (($thiz.aM[i].aw().fK !== null)) {
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
  this.eA = null;
  this.gV = 0;
  this.gU = 0;
  this.gR = null;
  this.fI = false;
  this.fd = false;
  this.fJ = 0;
  this.fc = null;
  this.gT = null;
  this.aM = null;
  this.gS = null;
  this.fb = null;
  this.ez = null;
  this.gQ = null;
  this.fG = null;
  this.gP = null;
  this.ey = null;
  this.fC = null;
  this.gN = false;
  this.fE = null;
  this.gO = null;
  this.fF = null;
  this.fH = 0;
  this.fD = 0;
  this.fa = null;
  this.eA = painter;
  this.gV = 0;
  this.gU = 0;
  this.gR = null;
  this.fI = false;
  this.fd = false;
  this.fJ = 1;
  this.fc = [];
  this.gT = [];
  this.aM = [];
  this.gS = ({});
  this.fb = [];
  this.ez = [];
  this.gQ = [];
  this.fG = [];
  this.gP = [];
  this.ey = null;
  this.fC = null;
  this.gN = false;
  this.fE = [];
  this.gO = [];
  this.fF = null;
  this.fH = 0;
  this.fD = 0;
  this.fa = ({});
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.it = (function() {
  if ((this.fJ === 0)) {
    var a = this.fH;
    var b = this.fD;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.fJ;
  }
});
$p.i6 = (function() {
  return (((this.fc.length | 0) === 0) ? [this.eA.f9] : this.fc);
});
$p.mx = (function() {
  return (this.i6().length | 0);
});
$p.my = (function() {
  return this.ez[0];
});
$p.mc = (function() {
  return this.gP[0];
});
$p.kY = (function() {
  return this.fC;
});
$p.m8 = (function() {
  return ((this.fF !== null) ? this.fF : this.ez[0]);
});
$p.gn = (function(index, mipLevel) {
  if ((mipLevel < 0)) {
    var sv = this.gQ[index];
    return ((sv !== null) ? sv : this.ez[index]);
  } else {
    var key = ((index + "|") + mipLevel);
    if ((!(!(!(!this.fa.hasOwnProperty(key)))))) {
      return this.fa[key];
    } else {
      var view = this.fb[index].createView(({
        "baseMipLevel": mipLevel,
        "mipLevelCount": 1
      }));
      this.fa[key] = view;
      return view;
    }
  }
});
$p.hd = (function(index) {
  return this.ez[index];
});
$p.kf = (function(index) {
  return this.gO[index];
});
$p.kX = (function() {
  if (((!this.gN) && (this.ey !== null))) {
    var opt$proxy5 = this.ey;
    opt$proxy5.destroy();
    var $x_1 = this.eA.f;
    var value = this.fH;
    var value$1 = this.fD;
    var _2 = ({
      "width": value,
      "height": value$1
    });
    var _2$1 = (this.fd ? 4 : 1);
    var depthTex = $x_1.createTexture(({
      "size": _2,
      "format": "depth24plus",
      "usage": 20,
      "sampleCount": _2$1
    }));
    this.ey = depthTex;
    this.fC = depthTex.createView();
    this.gN = true;
  }
  return this.fC;
});
$p.mo = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.gV = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.gU = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.gR = clearColor;
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.fI = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.fd = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.fJ = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.fJ = v$5;
    }
  }
  var x = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x !== (void 0))) {
    this.fc = x;
  }
  var x$1 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$1 !== (void 0))) {
    this.gT = x$1;
  }
  var x$2 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$2 !== (void 0))) {
    this.aM = x$2;
  }
  return this;
});
$p.l8 = (function(canvasW, canvasH) {
  var targetW = ((this.gV === 0) ? canvasW : this.gV);
  var targetH = ((this.gU === 0) ? canvasH : this.gU);
  if (((targetW !== this.fH) || (targetH !== this.fD))) {
    var d = 0;
    while ((d < (this.fb.length | 0))) {
      this.fb[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.fG.length | 0))) {
      this.fG[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.fE.length | 0))) {
      this.fE[d].destroy();
      d = ((1 + d) | 0);
    }
    if ((this.ey !== null)) {
      var opt$proxy7 = this.ey;
      opt$proxy7.destroy();
    }
    this.fH = targetW;
    this.fD = targetH;
    var mipKeys = Object.keys(this.fa);
    var mk = 0;
    while ((mk < (mipKeys.length | 0))) {
      delete this.fa[mipKeys[mk]];
      mk = ((1 + mk) | 0);
    }
    var mipCount = this.it();
    var fmts = this.i6();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.fb = [];
    this.ez = [];
    this.gQ = [];
    this.fG = [];
    this.gP = [];
    this.fE = [];
    this.gO = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.eA.f;
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
      this.fb.push(tex);
      this.ez.push(tex.createView(({
        "baseMipLevel": 0,
        "mipLevelCount": 1
      })));
      this.gQ.push(((mipCount > 1) ? tex.createView() : null));
      if (hasPong) {
        var $x_2 = this.eA.f;
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
        this.fG.push(pongTex);
        this.gP.push(pongTex.createView(({
          "baseMipLevel": 0,
          "mipLevelCount": 1
        })));
      }
      if (this.fd) {
        var $x_3 = this.eA.f;
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
        this.fE.push(msaaTex);
        this.gO.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (this.fI) {
      var depthUsage = (this.gN ? 20 : 16);
      var $x_4 = this.eA.f;
      var _2$3 = ({
        "width": targetW,
        "height": targetH
      });
      var _2$4 = (this.fd ? 4 : 1);
      var depthTex = $x_4.createTexture(({
        "size": _2$3,
        "format": "depth24plus",
        "usage": depthUsage,
        "sampleCount": _2$4
      }));
      this.ey = depthTex;
      this.fC = depthTex.createView();
    }
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  eJ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.jE = 0;
  this.gW = null;
  this.hL = null;
  this.hK = null;
  this.fK = null;
  this.jF = null;
  this.t = null;
  this.hJ = null;
  this.jE = id;
  this.gW = shaderModule;
  this.hL = vertexBufferLayout;
  this.hK = valueBindGroupLayout;
  this.fK = panelBindGroupLayout;
  this.jF = pipelineLayout;
  this.t = uniformIndices;
  this.hJ = panelIndices;
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
$p.ln = (function() {
  return window.navigator.gpu;
});
$p.lm = (function(canvas) {
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
function $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(sensitivity, speed) {
  this.hP = 0.0;
  this.jG = 0.0;
  this.hP = sensitivity;
  this.jG = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.mF = (function(cam, input, tpf) {
  var dist = ((this.jG * tpf) / 1000.0);
  var forward = 0.0;
  if (((input.af("KeyW") || input.af("ArrowUp")) || input.h3)) {
    forward = (forward + dist);
  }
  if (((input.af("KeyS") || input.af("ArrowDown")) || input.lC(2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((input.af("KeyA") || input.af("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((input.af("KeyD") || input.af("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (input.af("Space")) {
    up = (up + dist);
  }
  if ((input.af("ShiftLeft") || input.af("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = input.kW();
  var deltaH = (((-(+drag.a6)) * this.hP) / 1000.0);
  var deltaV = (((-(+drag.Z)) * this.hP) / 1000.0);
  cam.m1(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  eN: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.ff = 0.0;
  this.fL = 0.0;
  this.fg = 0.0;
  this.fe = 0.0;
  this.a3 = 0.0;
  this.aB = 0.0;
  this.S = null;
  this.hQ = null;
  this.ff = fov;
  this.fL = aspect;
  this.fg = near;
  this.fe = far;
  this.a3 = rotH;
  this.aB = rotV;
  this.S = pos;
  this.hQ = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.i3 = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.ff) || (aspect !== this.fL)) || (near !== this.fg)) || (far !== this.fe));
  this.ff = fov;
  this.fL = aspect;
  this.fg = near;
  this.fe = far;
  if ((rotH !== this.a3)) {
    this.a3 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iy(rotH);
  }
  if ((rotV !== this.aB)) {
    this.aB = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().ix(rotV);
  }
  this.S = pos;
  if (needsProj) {
    this.hQ = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  }
});
$p.m1 = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.a3 = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().iy((this.a3 + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.aB = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().ix((this.aB + deltaV));
  }
  if ((up !== 0.0)) {
    this.S = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.S.q, (this.S.l + up), this.S.n);
  }
  if ((forward !== 0.0)) {
    var $x_4 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().o();
    var $x_3 = this.S;
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().o();
    var p$proxy1 = this.a3;
    var x$1 = (-(+Math.sin(p$proxy1)));
    var p$proxy2 = this.a3;
    this.S = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_4, $x_3, $x_2, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_1, new $c_Ltrivalibs_graphics_math_cpu_Vec3(x$1, 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_9 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().o();
    var $x_8 = this.S;
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_6 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().o();
    var p$proxy3 = this.a3;
    var $x_5 = Math.cos(p$proxy3);
    var p$proxy4 = this.a3;
    this.S = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_9, $x_8, $x_7, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_5)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.mC = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.S, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().g2(this.a3), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().lk(this.aB)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.mJ = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().k4();
  var t = this.mC();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().eC(t.aP, t.aN, t.aO), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
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
$p.iy = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.ix = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.kE = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.iy(rotH), this.ix(rotV), pos, proj);
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
  this.aP = null;
  this.aN = null;
  this.aO = null;
  this.aP = translation;
  this.aN = rotation;
  this.aO = scale;
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
/** @constructor */
function $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$() {
}
$p = $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_scene\uff3fobject$package$() {
}
$h_Ltrivalibs_graphics_scene_scene\uff3fobject$package$.prototype = $p;
$p.U = (function(m) {
  return $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__transpose__O__Ltrivalibs_graphics_math_Mat3Base__O($m_Ltrivalibs_graphics_math_cpu_Mat3$().k2(), $f_Ltrivalibs_graphics_math_Mat3ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat3Base__O($m_Ltrivalibs_graphics_math_cpu_Mat3$().k2(), $m_Ltrivalibs_graphics_math_cpu_Mat3$().ll(m), $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$()), $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$());
});
var $d_Ltrivalibs_graphics_scene_scene\uff3fobject$package$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$, "trivalibs.graphics.scene.scene_object$package$", ({
  eR: 1
}));
var $n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$;
function $m_Ltrivalibs_graphics_scene_scene\uff3fobject$package$() {
  if ((!$n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$)) {
    $n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$ = new $c_Ltrivalibs_graphics_scene_scene\uff3fobject$package$();
  }
  return $n_Ltrivalibs_graphics_scene_scene\uff3fobject$package$;
}
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().kr($m_sjs_js_ArrayOps$().kq(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.a6;
        if ((x11 !== null)) {
          var name = x11.a6;
          var typ = x11.Z;
          var $x_1 = (((((("  @location(" + (x0.Z | 0)) + ") ") + name) + ": ") + typ) + ",");
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
        var name$1 = x0$1.e0;
        var builtin = x0$1.aE;
        var typ$1 = x0$1.aF;
        var $x_3 = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
        break matchResult4;
      }
      throw new $c_s_MatchError(x0$1);
    }
    res$1[$x_4] = $x_3;
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().u(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().kr($m_sjs_js_ArrayOps$().kq(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.a6;
        if ((x20 !== null)) {
          var name = x20.a6;
          var typ = x20.Z;
          var bindingIdx = (x0.Z | 0);
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
  this.fQ = null;
  this.fQ = target;
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
  this.hR = null;
  this.hR = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  eV: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.eB = null;
  this.eB = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
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
  this.fR = null;
  this.jH = null;
  this.fR = in$1;
  this.jH = out;
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
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.hS.hasOwnProperty(data.name))))))) {
    var dict = $thiz.hS;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.hT.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.hV = null;
  this.hU = null;
  this.hT = null;
  this.hS = null;
  this.hV = "";
  this.hU = "";
  this.hT = [];
  this.hS = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.lu = (function() {
  return this.hT.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  eY: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.gZ = null;
  this.h0 = null;
  this.gY = null;
  this.gZ = in$1;
  this.h0 = out;
  this.gY = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  f3: 1
}));
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
$p.jX = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  f5: 1
}));
var $n_Ltrivalibs_graphics_shader_layouts$;
function $m_Ltrivalibs_graphics_shader_layouts$() {
  if ((!$n_Ltrivalibs_graphics_shader_layouts$)) {
    $n_Ltrivalibs_graphics_shader_layouts$ = new $c_Ltrivalibs_graphics_shader_layouts$();
  }
  return $n_Ltrivalibs_graphics_shader_layouts$;
}
/** @constructor */
function $c_Ltrivalibs_utils_animation_Animator(frame, onFpsCallback) {
  this.jK = null;
  this.hY = null;
  this.fS = 0;
  this.fT = 0.0;
  this.h1 = 0.0;
  this.h2 = 0.0;
  this.hZ = false;
  this.jK = frame;
  this.hY = onFpsCallback;
  this.fS = 0;
  this.fT = 0.0;
  this.h1 = 0.0;
  this.h2 = (-1.0);
  this.hZ = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.ki = (function(time) {
  this.fS = ((1 + this.fS) | 0);
  if ((this.fT === 0.0)) {
    this.fT = time;
    this.h1 = time;
  }
  var fpsElapsed = (time - this.fT);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.fS) / fpsElapsed);
    if (((time - this.h1) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().kn(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().kl(args$proxy1));
      this.h1 = time;
      if ((this.hY !== null)) {
        (0, this.hY)(fps);
      }
    }
    this.fS = 0;
    this.fT = time;
  }
  var delta = ((this.h2 < 0.0) ? 0.0 : (time - this.h2));
  this.h2 = time;
  (0, this.jK)(delta);
  if (this.hZ) {
    requestAnimationFrame($m_sjs_js_Any$().g1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.ki((+v1$2));
    }))));
  }
});
$p.mu = (function() {
  this.hZ = true;
  return requestAnimationFrame($m_sjs_js_Any$().g1(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.ki((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  f8: 1
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
$p.kD = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.mu();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  f9: 1
}));
var $n_Ltrivalibs_utils_animation_animate$package$;
function $m_Ltrivalibs_utils_animation_animate$package$() {
  if ((!$n_Ltrivalibs_utils_animation_animate$package$)) {
    $n_Ltrivalibs_utils_animation_animate$package$ = new $c_Ltrivalibs_utils_animation_animate$package$();
  }
  return $n_Ltrivalibs_utils_animation_animate$package$;
}
/** @constructor */
function $c_Ltrivalibs_utils_events_InputState(el, keyTarget, holdDelay, holdRadius, suppressContextMenu, onActivity, focusOnPointerDown) {
  this.F = null;
  this.fW = null;
  this.h4 = null;
  this.fU = 0.0;
  this.fV = 0.0;
  this.h3 = false;
  this.jM = null;
  this.jL = null;
  this.F = onActivity;
  this.fW = $m_sjs_js_special_package$().kg(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().kh(new ($d_T2.r().C)([]))));
  this.h4 = $m_sjs_js_special_package$().kg(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().kh(new ($d_T2.r().C)([]))));
  this.fU = 0.0;
  this.fV = 0.0;
  this.h3 = false;
  $m_Ltrivalibs_utils_events_keyboard$package$().lF(keyTarget, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!this.fW.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      this.fW[k$3] = value$proxy1;
      if ((!(this.F === (void 0)))) {
        var m$proxy1 = this.F;
        m$proxy1();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete this.fW[k$3$1];
    if ((!(this.F === (void 0)))) {
      var m$proxy2 = this.F;
      m$proxy2();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().ma(el, $m_Ltrivalibs_utils_events_pointer$package$().mb(), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2, v2$2, v3$2) => {
    var b = (v1$2 | 0);
    if (focusOnPointerDown) {
      keyTarget.focus();
    }
    var key$proxy3 = ("" + b);
    this.h4[key$proxy3] = true;
    if ((!(this.F === (void 0)))) {
      var m$proxy3 = this.F;
      m$proxy3();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var b$1 = (v1$2$1 | 0);
    delete this.h4[("" + b$1)];
    if ((!(this.F === (void 0)))) {
      var m$proxy4 = this.F;
      m$proxy4();
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2) => (void 0))), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    if ((!(this.F === (void 0)))) {
      var m$proxy5 = this.F;
      m$proxy5();
    }
  })), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$3, v2$2$3) => {
    var dx = (+v1$2$3);
    var dy = (+v2$2$3);
    this.fU = (this.fU + dx);
    this.fV = (this.fV + dy);
    if ((!(this.F === (void 0)))) {
      var m$proxy6 = this.F;
      m$proxy6();
    }
  })), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    this.h3 = false;
    if ((!(this.F === (void 0)))) {
      var m$proxy7 = this.F;
      m$proxy7();
    }
  })), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$4, v2$2$4) => {
    this.h3 = true;
    if ((!(this.F === (void 0)))) {
      var m$proxy8 = this.F;
      m$proxy8();
    }
  })), holdDelay, holdRadius, suppressContextMenu);
  if ($m_sr_BoxesRunTime$().b(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().b(keyTarget, document.activeElement);
  }
  this.jM = ((_$5$3) => {
    if ((!(this.F === (void 0)))) {
      var m$proxy9 = this.F;
      m$proxy9();
    }
  });
  this.jL = ((_$6$3) => {
    if ((!(this.F === (void 0)))) {
      var m$proxy10 = this.F;
      m$proxy10();
    }
  });
  keyTarget.addEventListener("focus", this.jM);
  keyTarget.addEventListener("blur", this.jL);
}
$p = $c_Ltrivalibs_utils_events_InputState.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_InputState;
/** @constructor */
function $h_Ltrivalibs_utils_events_InputState() {
}
$h_Ltrivalibs_utils_events_InputState.prototype = $p;
$p.af = (function(key) {
  return (!(!(!(!this.fW.hasOwnProperty(key)))));
});
$p.lC = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.h4.hasOwnProperty(key$proxy7)))));
});
$p.kW = (function() {
  var x$proxy1 = new $c_T2(this.fU, this.fV);
  this.fU = 0.0;
  this.fV = 0.0;
  return x$proxy1;
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  fa: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_PointerTracker(holdRadius) {
  this.jN = 0.0;
  this.fY = false;
  this.fZ = false;
  this.g0 = false;
  this.i0 = 0.0;
  this.i1 = 0.0;
  this.fX = 0.0;
  this.jN = holdRadius;
  this.fY = false;
  this.fZ = false;
  this.g0 = false;
  this.i0 = 0.0;
  this.i1 = 0.0;
  this.fX = 0.0;
}
$p = $c_Ltrivalibs_utils_events_PointerTracker.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_PointerTracker;
/** @constructor */
function $h_Ltrivalibs_utils_events_PointerTracker() {
}
$h_Ltrivalibs_utils_events_PointerTracker.prototype = $p;
$p.l4 = (function(x, y) {
  this.g0 = true;
  this.fY = true;
  this.fZ = false;
  this.i0 = x;
  this.i1 = y;
  this.fX = 0.0;
});
$p.m2 = (function(x, y) {
  if (this.g0) {
    var ddx = (x - this.i0);
    var ddy = (y - this.i1);
    var p$proxy1 = ((ddx * ddx) + (ddy * ddy));
    var d = (+Math.sqrt(p$proxy1));
    if ((d > this.fX)) {
      this.fX = d;
    }
  }
});
$p.mE = (function() {
  this.g0 = false;
  this.fY = false;
  this.fZ = false;
});
$p.kS = (function() {
  if (((this.g0 && (!this.fZ)) && (this.fX <= this.jN))) {
    this.fZ = true;
    return true;
  } else {
    return false;
  }
});
var $d_Ltrivalibs_utils_events_PointerTracker = new $TypeData().i($c_Ltrivalibs_utils_events_PointerTracker, "trivalibs.utils.events.PointerTracker", ({
  fb: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$p = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$;
/** @constructor */
function $h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$() {
}
$h_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$.prototype = $p;
$p.lA = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity) {
  canvas.setAttribute("tabindex", "0");
  var \u03b41$ = canvas.style;
  \u03b41$.setProperty("outline", "none");
  var input = new $c_Ltrivalibs_utils_events_InputState(canvas, canvas, holdDelay, holdRadius, suppressContextMenu, onActivity, true);
  if (initialFocus) {
    canvas.focus();
  }
  return input;
});
var $d_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$, "trivalibs.utils.events.interactive_canvas$package$", ({
  fc: 1
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
$p.lF = (function(el, onDown, onUp, keepDefault) {
  var down = ((e$3) => {
    var isTab = (e$3.code === "Tab");
    if (((!keepDefault) && (!isTab))) {
      e$3.preventDefault();
    }
    if ((!(!(!e$3.repeat)))) {
      onDown.I(e$3.code);
    }
  });
  var up = ((e$3$1) => {
    onUp.I(e$3$1.code);
  });
  el.addEventListener("keydown", down);
  el.addEventListener("keyup", up);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("keydown", down);
    el.removeEventListener("keyup", up);
  }));
});
var $d_Ltrivalibs_utils_events_keyboard$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_keyboard$package$, "trivalibs.utils.events.keyboard$package$", ({
  fd: 1
}));
var $n_Ltrivalibs_utils_events_keyboard$package$;
function $m_Ltrivalibs_utils_events_keyboard$package$() {
  if ((!$n_Ltrivalibs_utils_events_keyboard$package$)) {
    $n_Ltrivalibs_utils_events_keyboard$package$ = new $c_Ltrivalibs_utils_events_keyboard$package$();
  }
  return $n_Ltrivalibs_utils_events_keyboard$package$;
}
function $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V($thiz, holdTimer$1) {
  if ((holdTimer$1.eZ !== null)) {
    $m_sjs_js_timers_package$().kT(holdTimer$1.eZ);
    holdTimer$1.eZ = null;
  }
}
function $p_Ltrivalibs_utils_events_pointer$package$__endPrimary$1__Ltrivalibs_utils_events_PointerTracker__sr_BooleanRef__F0__sr_ObjectRef__V($thiz, tracker$1, primaryActive$1, onDragEnd$1, holdTimer$2) {
  var wasDragging = tracker$1.fY;
  tracker$1.mE();
  $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V($thiz, holdTimer$2);
  primaryActive$1.ew = false;
  if (wasDragging) {
    onDragEnd$1.fh();
  }
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
$p.ma = (function(el, moveTarget, onDown, onUp, onMove, onDragStart, onDrag, onDragEnd, onHold, holdDelay, holdRadius, suppressContextMenu) {
  var tracker = new $c_Ltrivalibs_utils_events_PointerTracker(holdRadius);
  var holdTimer = new $c_sr_ObjectRef(null);
  var lastX = new $c_sr_DoubleRef(0.0);
  var lastY = new $c_sr_DoubleRef(0.0);
  var primaryActive = new $c_sr_BooleanRef(false);
  var downFn = ((e$3) => {
    var btn = (e$3.button | 0);
    onDown.jP(btn, (+e$3.clientX), (+e$3.clientY));
    if (((!(!e$3.isPrimary)) && (btn === 0))) {
      lastX.ah = (+e$3.clientX);
      lastY.ah = (+e$3.clientY);
      primaryActive.ew = true;
      tracker.l4((+e$3.clientX), (+e$3.clientY));
      onDragStart.fh();
      $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V(this, holdTimer);
      holdTimer.eZ = $m_sjs_js_timers_package$().mr(holdDelay, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
        if (tracker.kS()) {
          onHold.h5(lastX.ah, lastY.ah);
        }
      })));
    }
  });
  var moveFn = ((e$3$1) => {
    var dx = ((+e$3$1.clientX) - lastX.ah);
    var dy = ((+e$3$1.clientY) - lastY.ah);
    lastX.ah = (+e$3$1.clientX);
    lastY.ah = (+e$3$1.clientY);
    onMove.kF((+e$3$1.clientX), (+e$3$1.clientY), dx, dy);
    if (primaryActive.ew) {
      tracker.m2((+e$3$1.clientX), (+e$3$1.clientY));
      if (tracker.fY) {
        onDrag.h5(dx, dy);
      }
    }
  });
  var upFn = ((e$3$2) => {
    var btn$1 = (e$3$2.button | 0);
    onUp.jP(btn$1, (+e$3$2.clientX), (+e$3$2.clientY));
    if ((primaryActive.ew && (btn$1 === 0))) {
      $p_Ltrivalibs_utils_events_pointer$package$__endPrimary$1__Ltrivalibs_utils_events_PointerTracker__sr_BooleanRef__F0__sr_ObjectRef__V(this, tracker, primaryActive, onDragEnd, holdTimer);
    }
  });
  var cancelFn = ((e$3$3) => {
    if (primaryActive.ew) {
      $p_Ltrivalibs_utils_events_pointer$package$__endPrimary$1__Ltrivalibs_utils_events_PointerTracker__sr_BooleanRef__F0__sr_ObjectRef__V(this, tracker, primaryActive, onDragEnd, holdTimer);
    }
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
    $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V(this, holdTimer);
    el.removeEventListener("pointerdown", downFn);
    moveTarget.removeEventListener("pointermove", moveFn);
    moveTarget.removeEventListener("pointerup", upFn);
    moveTarget.removeEventListener("pointercancel", cancelFn);
    if (suppressContextMenu) {
      el.removeEventListener("contextmenu", ctxFn);
    }
  }));
});
$p.mb = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  fe: 1
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
  this.hj = null;
  $n_jl_Character$ = this;
  this.hj = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.mA = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.l0 = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().kM(this.hj, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.hj.a[zeroCodePointIndex]) | 0);
      var value = ((v > 9) ? (-1) : v);
    }
  }
  return ((value < radix) ? value : (-1));
});
var $d_jl_Character$ = new $TypeData().i($c_jl_Character$, "java.lang.Character$", ({
  b0: 1,
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
$p.gk = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.lD = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().gk(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().gk(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().gk(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.l0(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().gk(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().gk(s);
  }
  return (((java$lang$IntFloatBits$Int32Box$$value ^ sign) - sign) | 0);
});
var $d_jl_Integer$ = new $TypeData().i($c_jl_Integer$, "java.lang.Integer$", ({
  b6: 1,
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
  $thiz.iC = s;
  if (writableStackTrace) {
    $thiz.lc();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.iC = null;
  }
  h8() {
    return this.iC;
  }
  lc() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.ex : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  j() {
    var className = $objectClassName(this);
    var message = this.h8();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  p() {
    return $c_O.prototype.p.call(this);
  }
  m(that) {
    return $c_O.prototype.m.call(this, that);
  }
  get "message"() {
    var m = this.h8();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.j();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_s_Console$() {
  this.iE = null;
  $n_s_Console$ = this;
  this.iE = new $c_s_util_DynamicVariable($m_jl_System$Streams$().iA);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.m7 = (function() {
  return this.iE.hm;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  bp: 1,
  cy: 1
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
$p.j = (function() {
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
$p.mL = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.a.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.iP;
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
$p.j = (function() {
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
$p.j = (function() {
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
$p.j = (function() {
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
$p.j = (function() {
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
$p.j = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.ew = false;
  this.ew = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.j = (function() {
  return ("" + this.ew);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  cR: 1,
  a: 1
}));
/** @constructor */
function $c_sr_DoubleRef(elem) {
  this.ah = 0.0;
  this.ah = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.j = (function() {
  return ("" + this.ah);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  cT: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.eZ = null;
  this.eZ = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.j = (function() {
  return ("" + this.eZ);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  cV: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.f1 = 0;
  this.iY = 0;
  this.kt = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.f1 = $f_T__hashCode__I("Seq");
  this.iY = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.kt = this.mD($m_sci_Nil$(), this.iY);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.kj = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.lw(xs, this.f1) : ((xs instanceof $c_sci_List) ? this.lG(xs, this.f1) : this.m6(xs, this.f1)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  di: 1,
  dh: 1
}));
var $n_s_util_hashing_MurmurHash3$;
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$();
  }
  return $n_s_util_hashing_MurmurHash3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT(uv) {
  this.iZ = null;
  this.iZ = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dp: 1,
  dn: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$.prototype = $p;
$p.i = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat3MutableOps__set__O__Ltrivalibs_graphics_math_Mat3Mutable__O__Ltrivalibs_graphics_math_Mat3Base__V($m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$().lX(), ref, $m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat3_Mat3PaddedBuffer$", ({
  dq: 1,
  aI: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat3\uff3fMat3PaddedBuffer$;
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
$p.i = (function(ref, value) {
  $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().lp(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dr: 1,
  aI: 1
}));
var $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
function $m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$)) {
    $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
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
$p.fl = (function(t) {
  return new $c_T2(t.f5, t.f6);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dw: 1,
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
$p.fl = (function(t) {
  return new $c_T3(t.q, t.l, t.n);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  dx: 1,
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
  this.j1 = null;
  this.j1 = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  dD: 1,
  dC: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.j2 = null;
  this.j3 = null;
  this.j2 = x$1;
  this.j3 = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.mG = (function(t) {
  return $m_sr_Tuples$().jV(this.j2.fl(t.k(0)), this.j3.fl($m_sr_Tuples$().mw(t)));
});
$p.fl = (function(t) {
  return this.mG(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  dE: 1,
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
$p.fl = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  dF: 1,
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
  this.j5 = 0;
  this.j5 = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.aD = (function(t) {
  return t.k(this.j5);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  dK: 1,
  dA: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.q * other.q) + (v.l * other.l)) + (v.n * other.n));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat3$() {
  this.j6 = null;
  this.j7 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat3$.prototype = $p;
$p.k2 = (function() {
  if ((!this.j7)) {
    this.j6 = $m_Ltrivalibs_graphics_math_cpu_Mat3$();
    this.j7 = true;
  }
  return this.j6;
});
$p.ll = (function(m) {
  return new $c_Ltrivalibs_graphics_math_cpu_Mat3(m.gx, m.gy, m.gz, m.gA, m.gB, m.gC, m.gD, m.gE, m.gF);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3$, "trivalibs.graphics.math.cpu.Mat3$", ({
  e3: 1,
  dN: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat3$;
function $m_Ltrivalibs_graphics_math_cpu_Mat3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat3$ = new $c_Ltrivalibs_graphics_math_cpu_Mat3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat3$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.j8 = null;
  this.j9 = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.k4 = (function() {
  if ((!this.j9)) {
    this.j8 = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.j9 = true;
  }
  return this.j8;
});
$p.eC = (function(t, r, s) {
  var x = r.aj;
  var y = r.ak;
  var z = r.al;
  var w = r.ai;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.q), ((xy + wz) * s.q), ((xz - wy) * s.q), 0.0, ((xy - wz) * s.l), ((1.0 - (xx + zz)) * s.l), ((yz + wx) * s.l), 0.0, ((xz + wy) * s.n), ((yz - wx) * s.n), ((1.0 - (xx + yy)) * s.n), 0.0, t.q, t.l, t.n, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  e6: 1,
  dQ: 1
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
  ea: 1,
  ec: 1
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
  this.ja = null;
  this.jb = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.o = (function() {
  if ((!this.jb)) {
    this.ja = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.jb = true;
  }
  return this.ja;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  ef: 1,
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
function $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21() {
}
$h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$$anon$21, "trivalibs.graphics.math.cpu.mat3$package$Mat3PaddedBuffer$$anon$21", ({
  ei: 1,
  dP: 1
}));
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
  el: 1,
  dS: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.r = null;
  this.jg = null;
  this.jg = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.jO = (function(value) {
  return (((("  let " + this.jg) + " = ") + value.r) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  en: 1,
  aR: 1
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
$p.ko = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.r + ".x"));
});
$p.kp = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.r + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4, "trivalibs.graphics.math.gpu.float_expr$package$$anon$4", ({
  er: 1,
  dT: 1
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
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5, "trivalibs.graphics.math.gpu.float_expr$package$$anon$5", ({
  es: 1,
  aP: 1
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
  et: 1,
  aQ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8.prototype = $p;
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$8, "trivalibs.graphics.math.gpu.float_expr$package$$anon$8", ({
  eu: 1,
  R: 1
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
  ev: 1,
  S: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$.prototype = $p;
$p.mH = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.r) + " * ") + v.r) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat3ImmutableOpsG_FloatExpr_Mat3Expr$", ({
  ew: 1,
  dO: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat3ImmutableOpsG\uff3fFloatExpr\uff3fMat3Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$.prototype = $p;
$p.lY = (function(m, x$2, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.r) + " * ") + other.r) + ")"));
});
$p.mI = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.r) + " * ") + v.r) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  ex: 1,
  dR: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$;
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
$p.m3 = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.r) + " * ") + scalar.r) + ")"));
});
$p.ky = (function(v, x$2, scalar) {
  return this.m3(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().eD().I(scalar));
});
$p.lh = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + v.r) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  ey: 1,
  dU: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$;
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
$p.mf = (function(v, x$2, e) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("pow(" + v.r) + ", vec3<f32>(") + e.r) + "))"));
});
$p.me = (function(v, x$2, scalar) {
  return this.mf(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().eD().I(scalar));
});
$p.le = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.r) + " * 0.5 + 0.5)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  ez: 1,
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
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec4ImmutableOpsG_FloatExpr_Vec4Expr$", ({
  eA: 1,
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
function $c_Ltrivalibs_graphics_painter_Instance(shade, painter) {
  this.z = null;
  this.y = null;
  this.c = null;
  this.gI = null;
  this.z = shade;
  this.y = painter;
  this.c = [];
  this.gI = [];
}
$p = $c_Ltrivalibs_graphics_painter_Instance.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Instance;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Instance() {
}
$h_Ltrivalibs_graphics_painter_Instance.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Instance = new $TypeData().i($c_Ltrivalibs_graphics_painter_Instance, "trivalibs.graphics.painter.Instance", ({
  eF: 1,
  aS: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.hO = null;
  this.ad = null;
  this.a9 = null;
  this.hN = null;
  this.hM = null;
  this.R = null;
  this.gX = null;
  this.P = null;
  this.hO = painter;
  this.ad = form;
  this.a9 = shade;
  this.hN = "none";
  this.hM = null;
  this.R = [];
  this.gX = [];
  this.P = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.mq = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.hN = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.hM = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  eL: 1,
  aS: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.fP = null;
  this.fP = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.fm = (function() {
  return this.fP.fm();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  eS: 1,
  T: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.hW = null;
  this.hW = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.hf = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.hW === "") ? name : ((this.hW + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  eZ: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.hX = null;
  this.hX = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.av = (function(name) {
  return ((this.hX === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.hX + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  f0: 1,
  z: 1
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
  f1: 1,
  z: 1
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
  f2: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.jJ = null;
  this.jI = null;
  this.jJ = prefix;
  this.jI = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.hf = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.jJ + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  f4: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$.prototype = $p;
$p.fm = (function() {
  return "mat3x3<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat3$", ({
  f6: 1,
  T: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat3$;
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
$p.fm = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  f7: 1,
  T: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.hi = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.j = (function() {
  return ((this.hi.Y ? "interface " : (this.hi.X ? "" : "class ")) + this.hi.N);
});
var $d_jl_Class = new $TypeData().i($c_jl_Class, "java.lang.Class", ({
  b1: 1,
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
  by: 1,
  bv: 1,
  bw: 1
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
    return $thiz.eG;
  } else {
    throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.eH;
      break;
    }
    case 1: {
      return $thiz.aR;
      break;
    }
    case 2: {
      return $thiz.aS;
      break;
    }
    case 3: {
      return $thiz.aT;
      break;
    }
    case 4: {
      return $thiz.aU;
      break;
    }
    case 5: {
      return $thiz.aV;
      break;
    }
    case 6: {
      return $thiz.aW;
      break;
    }
    case 7: {
      return $thiz.aX;
      break;
    }
    case 8: {
      return $thiz.aY;
      break;
    }
    case 9: {
      return $thiz.aQ;
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
      return $thiz.eI;
      break;
    }
    case 1: {
      return $thiz.b1;
      break;
    }
    case 2: {
      return $thiz.b2;
      break;
    }
    case 3: {
      return $thiz.b3;
      break;
    }
    case 4: {
      return $thiz.b4;
      break;
    }
    case 5: {
      return $thiz.b5;
      break;
    }
    case 6: {
      return $thiz.b6;
      break;
    }
    case 7: {
      return $thiz.b7;
      break;
    }
    case 8: {
      return $thiz.b8;
      break;
    }
    case 9: {
      return $thiz.aZ;
      break;
    }
    case 10: {
      return $thiz.b0;
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
      return $thiz.eJ;
      break;
    }
    case 1: {
      return $thiz.bc;
      break;
    }
    case 2: {
      return $thiz.bd;
      break;
    }
    case 3: {
      return $thiz.be;
      break;
    }
    case 4: {
      return $thiz.bf;
      break;
    }
    case 5: {
      return $thiz.bg;
      break;
    }
    case 6: {
      return $thiz.bh;
      break;
    }
    case 7: {
      return $thiz.bi;
      break;
    }
    case 8: {
      return $thiz.bj;
      break;
    }
    case 9: {
      return $thiz.b9;
      break;
    }
    case 10: {
      return $thiz.ba;
      break;
    }
    case 11: {
      return $thiz.bb;
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
      return $thiz.eK;
      break;
    }
    case 1: {
      return $thiz.bo;
      break;
    }
    case 2: {
      return $thiz.bp;
      break;
    }
    case 3: {
      return $thiz.bq;
      break;
    }
    case 4: {
      return $thiz.br;
      break;
    }
    case 5: {
      return $thiz.bs;
      break;
    }
    case 6: {
      return $thiz.bt;
      break;
    }
    case 7: {
      return $thiz.bu;
      break;
    }
    case 8: {
      return $thiz.bv;
      break;
    }
    case 9: {
      return $thiz.bk;
      break;
    }
    case 10: {
      return $thiz.bl;
      break;
    }
    case 11: {
      return $thiz.bm;
      break;
    }
    case 12: {
      return $thiz.bn;
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
      return $thiz.eL;
      break;
    }
    case 1: {
      return $thiz.bB;
      break;
    }
    case 2: {
      return $thiz.bC;
      break;
    }
    case 3: {
      return $thiz.bD;
      break;
    }
    case 4: {
      return $thiz.bE;
      break;
    }
    case 5: {
      return $thiz.bF;
      break;
    }
    case 6: {
      return $thiz.bG;
      break;
    }
    case 7: {
      return $thiz.bH;
      break;
    }
    case 8: {
      return $thiz.bI;
      break;
    }
    case 9: {
      return $thiz.bw;
      break;
    }
    case 10: {
      return $thiz.bx;
      break;
    }
    case 11: {
      return $thiz.by;
      break;
    }
    case 12: {
      return $thiz.bz;
      break;
    }
    case 13: {
      return $thiz.bA;
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
      return $thiz.eM;
      break;
    }
    case 1: {
      return $thiz.bP;
      break;
    }
    case 2: {
      return $thiz.bQ;
      break;
    }
    case 3: {
      return $thiz.bR;
      break;
    }
    case 4: {
      return $thiz.bS;
      break;
    }
    case 5: {
      return $thiz.bT;
      break;
    }
    case 6: {
      return $thiz.bU;
      break;
    }
    case 7: {
      return $thiz.bV;
      break;
    }
    case 8: {
      return $thiz.bW;
      break;
    }
    case 9: {
      return $thiz.bJ;
      break;
    }
    case 10: {
      return $thiz.bK;
      break;
    }
    case 11: {
      return $thiz.bL;
      break;
    }
    case 12: {
      return $thiz.bM;
      break;
    }
    case 13: {
      return $thiz.bN;
      break;
    }
    case 14: {
      return $thiz.bO;
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
      return $thiz.eN;
      break;
    }
    case 1: {
      return $thiz.c4;
      break;
    }
    case 2: {
      return $thiz.c5;
      break;
    }
    case 3: {
      return $thiz.c6;
      break;
    }
    case 4: {
      return $thiz.c7;
      break;
    }
    case 5: {
      return $thiz.c8;
      break;
    }
    case 6: {
      return $thiz.c9;
      break;
    }
    case 7: {
      return $thiz.ca;
      break;
    }
    case 8: {
      return $thiz.cb;
      break;
    }
    case 9: {
      return $thiz.bX;
      break;
    }
    case 10: {
      return $thiz.bY;
      break;
    }
    case 11: {
      return $thiz.bZ;
      break;
    }
    case 12: {
      return $thiz.c0;
      break;
    }
    case 13: {
      return $thiz.c1;
      break;
    }
    case 14: {
      return $thiz.c2;
      break;
    }
    case 15: {
      return $thiz.c3;
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
      return $thiz.eO;
      break;
    }
    case 1: {
      return $thiz.ck;
      break;
    }
    case 2: {
      return $thiz.cl;
      break;
    }
    case 3: {
      return $thiz.cm;
      break;
    }
    case 4: {
      return $thiz.cn;
      break;
    }
    case 5: {
      return $thiz.co;
      break;
    }
    case 6: {
      return $thiz.cp;
      break;
    }
    case 7: {
      return $thiz.cq;
      break;
    }
    case 8: {
      return $thiz.cr;
      break;
    }
    case 9: {
      return $thiz.cc;
      break;
    }
    case 10: {
      return $thiz.cd;
      break;
    }
    case 11: {
      return $thiz.ce;
      break;
    }
    case 12: {
      return $thiz.cf;
      break;
    }
    case 13: {
      return $thiz.cg;
      break;
    }
    case 14: {
      return $thiz.ch;
      break;
    }
    case 15: {
      return $thiz.ci;
      break;
    }
    case 16: {
      return $thiz.cj;
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
      return $thiz.eP;
      break;
    }
    case 1: {
      return $thiz.cB;
      break;
    }
    case 2: {
      return $thiz.cC;
      break;
    }
    case 3: {
      return $thiz.cD;
      break;
    }
    case 4: {
      return $thiz.cE;
      break;
    }
    case 5: {
      return $thiz.cF;
      break;
    }
    case 6: {
      return $thiz.cG;
      break;
    }
    case 7: {
      return $thiz.cH;
      break;
    }
    case 8: {
      return $thiz.cI;
      break;
    }
    case 9: {
      return $thiz.cs;
      break;
    }
    case 10: {
      return $thiz.ct;
      break;
    }
    case 11: {
      return $thiz.cu;
      break;
    }
    case 12: {
      return $thiz.cv;
      break;
    }
    case 13: {
      return $thiz.cw;
      break;
    }
    case 14: {
      return $thiz.cx;
      break;
    }
    case 15: {
      return $thiz.cy;
      break;
    }
    case 16: {
      return $thiz.cz;
      break;
    }
    case 17: {
      return $thiz.cA;
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
      return $thiz.eQ;
      break;
    }
    case 1: {
      return $thiz.cT;
      break;
    }
    case 2: {
      return $thiz.cU;
      break;
    }
    case 3: {
      return $thiz.cV;
      break;
    }
    case 4: {
      return $thiz.cW;
      break;
    }
    case 5: {
      return $thiz.cX;
      break;
    }
    case 6: {
      return $thiz.cY;
      break;
    }
    case 7: {
      return $thiz.cZ;
      break;
    }
    case 8: {
      return $thiz.d0;
      break;
    }
    case 9: {
      return $thiz.cJ;
      break;
    }
    case 10: {
      return $thiz.cK;
      break;
    }
    case 11: {
      return $thiz.cL;
      break;
    }
    case 12: {
      return $thiz.cM;
      break;
    }
    case 13: {
      return $thiz.cN;
      break;
    }
    case 14: {
      return $thiz.cO;
      break;
    }
    case 15: {
      return $thiz.cP;
      break;
    }
    case 16: {
      return $thiz.cQ;
      break;
    }
    case 17: {
      return $thiz.cR;
      break;
    }
    case 18: {
      return $thiz.cS;
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
      return $thiz.a6;
      break;
    }
    case 1: {
      return $thiz.Z;
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
      return $thiz.eR;
      break;
    }
    case 1: {
      return $thiz.db;
      break;
    }
    case 2: {
      return $thiz.dd;
      break;
    }
    case 3: {
      return $thiz.de;
      break;
    }
    case 4: {
      return $thiz.df;
      break;
    }
    case 5: {
      return $thiz.dg;
      break;
    }
    case 6: {
      return $thiz.dh;
      break;
    }
    case 7: {
      return $thiz.di;
      break;
    }
    case 8: {
      return $thiz.dj;
      break;
    }
    case 9: {
      return $thiz.d1;
      break;
    }
    case 10: {
      return $thiz.d2;
      break;
    }
    case 11: {
      return $thiz.d3;
      break;
    }
    case 12: {
      return $thiz.d4;
      break;
    }
    case 13: {
      return $thiz.d5;
      break;
    }
    case 14: {
      return $thiz.d6;
      break;
    }
    case 15: {
      return $thiz.d7;
      break;
    }
    case 16: {
      return $thiz.d8;
      break;
    }
    case 17: {
      return $thiz.d9;
      break;
    }
    case 18: {
      return $thiz.da;
      break;
    }
    case 19: {
      return $thiz.dc;
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
      return $thiz.eS;
      break;
    }
    case 1: {
      return $thiz.dv;
      break;
    }
    case 2: {
      return $thiz.dy;
      break;
    }
    case 3: {
      return $thiz.dz;
      break;
    }
    case 4: {
      return $thiz.dA;
      break;
    }
    case 5: {
      return $thiz.dB;
      break;
    }
    case 6: {
      return $thiz.dC;
      break;
    }
    case 7: {
      return $thiz.dD;
      break;
    }
    case 8: {
      return $thiz.dE;
      break;
    }
    case 9: {
      return $thiz.dk;
      break;
    }
    case 10: {
      return $thiz.dl;
      break;
    }
    case 11: {
      return $thiz.dm;
      break;
    }
    case 12: {
      return $thiz.dn;
      break;
    }
    case 13: {
      return $thiz.dp;
      break;
    }
    case 14: {
      return $thiz.dq;
      break;
    }
    case 15: {
      return $thiz.dr;
      break;
    }
    case 16: {
      return $thiz.ds;
      break;
    }
    case 17: {
      return $thiz.dt;
      break;
    }
    case 18: {
      return $thiz.du;
      break;
    }
    case 19: {
      return $thiz.dw;
      break;
    }
    case 20: {
      return $thiz.dx;
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
      return $thiz.eT;
      break;
    }
    case 1: {
      return $thiz.dP;
      break;
    }
    case 2: {
      return $thiz.dT;
      break;
    }
    case 3: {
      return $thiz.dU;
      break;
    }
    case 4: {
      return $thiz.dV;
      break;
    }
    case 5: {
      return $thiz.dW;
      break;
    }
    case 6: {
      return $thiz.dX;
      break;
    }
    case 7: {
      return $thiz.dY;
      break;
    }
    case 8: {
      return $thiz.dZ;
      break;
    }
    case 9: {
      return $thiz.dF;
      break;
    }
    case 10: {
      return $thiz.dG;
      break;
    }
    case 11: {
      return $thiz.dH;
      break;
    }
    case 12: {
      return $thiz.dI;
      break;
    }
    case 13: {
      return $thiz.dJ;
      break;
    }
    case 14: {
      return $thiz.dK;
      break;
    }
    case 15: {
      return $thiz.dL;
      break;
    }
    case 16: {
      return $thiz.dM;
      break;
    }
    case 17: {
      return $thiz.dN;
      break;
    }
    case 18: {
      return $thiz.dO;
      break;
    }
    case 19: {
      return $thiz.dQ;
      break;
    }
    case 20: {
      return $thiz.dR;
      break;
    }
    case 21: {
      return $thiz.dS;
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
      return $thiz.e0;
      break;
    }
    case 1: {
      return $thiz.aE;
      break;
    }
    case 2: {
      return $thiz.aF;
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
      return $thiz.e1;
      break;
    }
    case 1: {
      return $thiz.aG;
      break;
    }
    case 2: {
      return $thiz.aH;
      break;
    }
    case 3: {
      return $thiz.aI;
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
      return $thiz.eU;
      break;
    }
    case 1: {
      return $thiz.e2;
      break;
    }
    case 2: {
      return $thiz.e3;
      break;
    }
    case 3: {
      return $thiz.e4;
      break;
    }
    case 4: {
      return $thiz.e5;
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
      return $thiz.eV;
      break;
    }
    case 1: {
      return $thiz.e6;
      break;
    }
    case 2: {
      return $thiz.e7;
      break;
    }
    case 3: {
      return $thiz.e8;
      break;
    }
    case 4: {
      return $thiz.e9;
      break;
    }
    case 5: {
      return $thiz.ea;
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
      return $thiz.eW;
      break;
    }
    case 1: {
      return $thiz.eb;
      break;
    }
    case 2: {
      return $thiz.ec;
      break;
    }
    case 3: {
      return $thiz.ed;
      break;
    }
    case 4: {
      return $thiz.ee;
      break;
    }
    case 5: {
      return $thiz.ef;
      break;
    }
    case 6: {
      return $thiz.eg;
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
      return $thiz.eX;
      break;
    }
    case 1: {
      return $thiz.eh;
      break;
    }
    case 2: {
      return $thiz.ei;
      break;
    }
    case 3: {
      return $thiz.ej;
      break;
    }
    case 4: {
      return $thiz.ek;
      break;
    }
    case 5: {
      return $thiz.el;
      break;
    }
    case 6: {
      return $thiz.em;
      break;
    }
    case 7: {
      return $thiz.en;
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
      return $thiz.eY;
      break;
    }
    case 1: {
      return $thiz.eo;
      break;
    }
    case 2: {
      return $thiz.ep;
      break;
    }
    case 3: {
      return $thiz.eq;
      break;
    }
    case 4: {
      return $thiz.er;
      break;
    }
    case 5: {
      return $thiz.es;
      break;
    }
    case 6: {
      return $thiz.et;
      break;
    }
    case 7: {
      return $thiz.eu;
      break;
    }
    case 8: {
      return $thiz.ev;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).kU(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().ay : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.N();
  while ($thiz.C()) {
    if ((!those.C())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().b($thiz.B(), those.B()))) {
      return false;
    }
  }
  return (!those.C());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.ay = null;
  $n_sc_Iterator$ = this;
  this.ay = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  c4: 1,
  a: 1,
  as: 1
}));
var $n_sc_Iterator$;
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$();
  }
  return $n_sc_Iterator$;
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cz)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.iQ = null;
  this.iQ = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.fh = (function() {
  return (0, this.iQ)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cI: 1,
  cH: 1,
  br: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.iR = null;
  this.iR = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.I = (function(x0) {
  return (0, this.iR)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cK: 1,
  cJ: 1,
  k: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.iS = null;
  this.iS = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.h5 = (function(x0, x1) {
  return (0, this.iS)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cM: 1,
  cL: 1,
  bs: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.iT = null;
  this.iT = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.jP = (function(x0, x1, x2) {
  return (0, this.iT)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cO: 1,
  cN: 1,
  bt: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.iU = null;
  this.iU = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.kF = (function(x0, x1, x2, x3) {
  return (0, this.iU)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cQ: 1,
  cP: 1,
  bu: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  cU: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.J = null;
  this.J = es;
  if ((es.a.length <= 22)) {
    $m_sr_Scala3RunTime$().kK();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.k = (function(n) {
  return this.J.a[n];
});
$p.s = (function() {
  return this.J.a.length;
});
$p.x = (function() {
  return "Tuple";
});
$p.j = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().mL(this.J), "(", ",", ")");
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().kR(this, (-889275714), null);
});
$p.m = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.J === that.J)) {
      return true;
    } else {
      if ((this.J.a.length !== that.J.a.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.J.a.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.J;
        var n = i;
        var $x_1 = arr$3.a[n];
        var arr$4 = that.J;
        var n$1 = i;
        if ((!$x_2.b($x_1, arr$4.a[n$1]))) {
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aE)));
}
var $d_sr_TupleXXL = new $TypeData().i($c_sr_TupleXXL, "scala.runtime.TupleXXL", ({
  aE: 1,
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
$p.g1 = (function(f) {
  return ((arg1$2) => f.I(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  d2: 1,
  d6: 1,
  d7: 1
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
function $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = new $h_s_Conversion();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1.prototype = $p;
$p.I = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().lf((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  eq: 1,
  bq: 1,
  k: 1
}));
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
  aX: 1,
  b2: 1,
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
  aY: 1,
  a: 1,
  h: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.Z)));
}
var $d_jl_Character = new $TypeData().i(0, "java.lang.Character", ({
  Z: 1,
  a: 1,
  h: 1,
  g: 1
}), ((x) => (x instanceof $Char)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
/** @constructor */
function $c_jl_StringBuilder() {
  this.Q = null;
  this.Q = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.j = (function() {
  return this.Q;
});
$p.D = (function() {
  return this.Q.length;
});
$p.jU = (function(index) {
  return this.Q.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  be: 1,
  E: 1,
  X: 1,
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
$p.T = (function() {
  return (-1);
});
$p.jW = (function(dest, start, n) {
  return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, dest, start, n);
});
$p.i2 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.N = (function() {
  return this;
});
$p.h6 = (function(n) {
  return this.hh(n, (-1));
});
$p.hh = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.j = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.eE(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.T();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.T();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.N(), that);
}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.df)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$.prototype = $p;
$p.am = (function(m) {
  return m.hq;
});
$p.an = (function(m) {
  return m.hr;
});
$p.ao = (function(m) {
  return m.hs;
});
$p.ap = (function(m) {
  return m.ht;
});
$p.aq = (function(m) {
  return m.hu;
});
$p.ar = (function(m) {
  return m.hv;
});
$p.as = (function(m) {
  return m.hw;
});
$p.at = (function(m) {
  return m.hx;
});
$p.au = (function(m) {
  return m.hy;
});
$p.g4 = (function(m, v) {
  m.hq = v;
});
$p.g5 = (function(m, v) {
  m.hr = v;
});
$p.g6 = (function(m, v) {
  m.hs = v;
});
$p.g8 = (function(m, v) {
  m.ht = v;
});
$p.g9 = (function(m, v) {
  m.hu = v;
});
$p.ga = (function(m, v) {
  m.hv = v;
});
$p.gc = (function(m, v) {
  m.hw = v;
});
$p.gd = (function(m, v) {
  m.hx = v;
});
$p.ge = (function(m, v) {
  m.hy = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$, "trivalibs.graphics.math.cpu.Mat3$given_Mat3Mutable_Mat3$", ({
  e4: 1,
  R: 1,
  aL: 1,
  aM: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$;
function $m_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$)) {
    $n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$ = new $c_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Mat3$given\uff3fMat3Mutable\uff3fMat3$;
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
$p.am = (function(m) {
  return m.gx;
});
$p.an = (function(m) {
  return m.gy;
});
$p.ao = (function(m) {
  return m.gz;
});
$p.g7 = (function(m) {
  return m.hz;
});
$p.ap = (function(m) {
  return m.gA;
});
$p.aq = (function(m) {
  return m.gB;
});
$p.ar = (function(m) {
  return m.gC;
});
$p.gb = (function(m) {
  return m.hA;
});
$p.as = (function(m) {
  return m.gD;
});
$p.at = (function(m) {
  return m.gE;
});
$p.au = (function(m) {
  return m.gF;
});
$p.gf = (function(m) {
  return m.hB;
});
$p.gg = (function(m) {
  return m.hC;
});
$p.gh = (function(m) {
  return m.hD;
});
$p.gi = (function(m) {
  return m.hE;
});
$p.gj = (function(m) {
  return m.hF;
});
$p.g4 = (function(m, v) {
  m.gx = v;
});
$p.g5 = (function(m, v) {
  m.gy = v;
});
$p.g6 = (function(m, v) {
  m.gz = v;
});
$p.k6 = (function(m, v) {
  m.hz = v;
});
$p.g8 = (function(m, v) {
  m.gA = v;
});
$p.g9 = (function(m, v) {
  m.gB = v;
});
$p.ga = (function(m, v) {
  m.gC = v;
});
$p.k7 = (function(m, v) {
  m.hA = v;
});
$p.gc = (function(m, v) {
  m.gD = v;
});
$p.gd = (function(m, v) {
  m.gE = v;
});
$p.ge = (function(m, v) {
  m.gF = v;
});
$p.k8 = (function(m, v) {
  m.hB = v;
});
$p.k9 = (function(m, v) {
  m.hC = v;
});
$p.ka = (function(m, v) {
  m.hD = v;
});
$p.kb = (function(m, v) {
  m.hE = v;
});
$p.kc = (function(m, v) {
  m.hF = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  e7: 1,
  S: 1,
  aN: 1,
  aO: 1
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
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  eb: 1,
  aQ: 1,
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
var $d_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$, "trivalibs.graphics.math.cpu.Vec3$given_Vec3Mutable_Vec3$", ({
  eg: 1,
  aP: 1,
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
function $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$() {
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$.prototype = $p;
$p.i9 = (function(m) {
  var offset$proxy19 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy19, true));
});
$p.ib = (function(m) {
  var offset$proxy20 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy20, true));
});
$p.id = (function(m) {
  var offset$proxy21 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy21, true));
});
$p.ig = (function(m) {
  var offset$proxy22 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy22, true));
});
$p.ii = (function(m) {
  var offset$proxy23 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy23, true));
});
$p.ik = (function(m) {
  var offset$proxy24 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy24, true));
});
$p.im = (function(m) {
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy25, true));
});
$p.ip = (function(m) {
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy26, true));
});
$p.ir = (function(m) {
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy27, true));
});
$p.ia = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy28 = (m.off | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy10, true);
});
$p.ic = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy29 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy11, true);
});
$p.ie = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy30 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy12, true);
});
$p.ih = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy31 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy13, true);
});
$p.ij = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy32 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy14, true);
});
$p.il = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy33 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy33, value$proxy15, true);
});
$p.io = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy34 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy34, value$proxy16, true);
});
$p.iq = (function(m, v) {
  var value$proxy17 = Math.fround(v);
  var offset$proxy35 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy35, value$proxy17, true);
});
$p.is = (function(m, v) {
  var value$proxy18 = Math.fround(v);
  var offset$proxy36 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy36, value$proxy18, true);
});
$p.am = (function(m) {
  return this.i9(m);
});
$p.an = (function(m) {
  return this.ib(m);
});
$p.ao = (function(m) {
  return this.id(m);
});
$p.ap = (function(m) {
  return this.ig(m);
});
$p.aq = (function(m) {
  return this.ii(m);
});
$p.ar = (function(m) {
  return this.ik(m);
});
$p.as = (function(m) {
  return this.im(m);
});
$p.at = (function(m) {
  return this.ip(m);
});
$p.au = (function(m) {
  return this.ir(m);
});
$p.g4 = (function(m, v) {
  this.ia(m, v);
});
$p.g5 = (function(m, v) {
  this.ic(m, v);
});
$p.g6 = (function(m, v) {
  this.ie(m, v);
});
$p.g8 = (function(m, v) {
  this.ih(m, v);
});
$p.g9 = (function(m, v) {
  this.ij(m, v);
});
$p.ga = (function(m, v) {
  this.il(m, v);
});
$p.gc = (function(m, v) {
  this.io(m, v);
});
$p.gd = (function(m, v) {
  this.iq(m, v);
});
$p.ge = (function(m, v) {
  this.is(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$, "trivalibs.graphics.math.cpu.mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$", ({
  ej: 1,
  R: 1,
  aL: 1,
  aM: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat3$package$Mat3PaddedBuffer$mat3MutablePaddedBuffer$;
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
$p.i9 = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.ib = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.id = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.lI = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.ig = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.ii = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.ik = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.lK = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.im = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.ip = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.ir = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.lM = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.lO = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.lQ = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.lS = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.lU = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.ia = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.ic = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.ie = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.lJ = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.ih = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.ij = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.il = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.lL = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.io = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.iq = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.is = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.lN = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.lP = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.lR = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.lT = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.lV = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.am = (function(m) {
  return this.i9(m);
});
$p.an = (function(m) {
  return this.ib(m);
});
$p.ao = (function(m) {
  return this.id(m);
});
$p.g7 = (function(m) {
  return this.lI(m);
});
$p.ap = (function(m) {
  return this.ig(m);
});
$p.aq = (function(m) {
  return this.ii(m);
});
$p.ar = (function(m) {
  return this.ik(m);
});
$p.gb = (function(m) {
  return this.lK(m);
});
$p.as = (function(m) {
  return this.im(m);
});
$p.at = (function(m) {
  return this.ip(m);
});
$p.au = (function(m) {
  return this.ir(m);
});
$p.gf = (function(m) {
  return this.lM(m);
});
$p.gg = (function(m) {
  return this.lO(m);
});
$p.gh = (function(m) {
  return this.lQ(m);
});
$p.gi = (function(m) {
  return this.lS(m);
});
$p.gj = (function(m) {
  return this.lU(m);
});
$p.g4 = (function(m, v) {
  this.ia(m, v);
});
$p.g5 = (function(m, v) {
  this.ic(m, v);
});
$p.g6 = (function(m, v) {
  this.ie(m, v);
});
$p.k6 = (function(m, v) {
  this.lJ(m, v);
});
$p.g8 = (function(m, v) {
  this.ih(m, v);
});
$p.g9 = (function(m, v) {
  this.ij(m, v);
});
$p.ga = (function(m, v) {
  this.il(m, v);
});
$p.k7 = (function(m, v) {
  this.lL(m, v);
});
$p.gc = (function(m, v) {
  this.io(m, v);
});
$p.gd = (function(m, v) {
  this.iq(m, v);
});
$p.ge = (function(m, v) {
  this.is(m, v);
});
$p.k8 = (function(m, v) {
  this.lN(m, v);
});
$p.k9 = (function(m, v) {
  this.lP(m, v);
});
$p.ka = (function(m, v) {
  this.lR(m, v);
});
$p.kb = (function(m, v) {
  this.lT(m, v);
});
$p.kc = (function(m, v) {
  this.lV(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  em: 1,
  S: 1,
  aN: 1,
  aO: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$;
}
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T($thiz, vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, vertexBody, fragmentBody) {
  var f$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildVertexMain__T__T($thiz, vertexBody);
  var g$proxy1 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T($thiz, fragmentBody);
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.fN, f$proxy1, g$proxy1];
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
function $p_Ltrivalibs_graphics_shader_ShaderDef__buildFragmentMain__T__T($thiz, body) {
  return (("@fragment\nfn fs_main(in: VertexOutput) -> FragmentOutput {\n  var out: FragmentOutput;\n" + body) + "\n  return out;\n}");
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_ShaderDef(vertexBody, fragmentBody, helperFns) {
  this.fO = null;
  this.fM = null;
  this.fN = null;
  this.fO = vertexBody;
  this.fM = fragmentBody;
  this.fN = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1488826029), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.fO === x$0.fO) && (this.fM === x$0.fM)) && (this.fN === x$0.fN))));
});
$p.j = (function() {
  return $m_sr_ScalaRunTime$().kz(this);
});
$p.s = (function() {
  return 3;
});
$p.x = (function() {
  return "ShaderDef";
});
$p.k = (function(n) {
  switch (n) {
    case 0: {
      return this.fO;
      break;
    }
    case 1: {
      return this.fM;
      break;
    }
    case 2: {
      return this.fN;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Ltrivalibs_graphics_shader_ShaderDef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aT)));
}
var $d_Ltrivalibs_graphics_shader_ShaderDef = new $TypeData().i($c_Ltrivalibs_graphics_shader_ShaderDef, "trivalibs.graphics.shader.ShaderDef", ({
  aT: 1,
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
  aW: 1,
  j: 1,
  i: 1,
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
  aZ: 1,
  m: 1,
  a: 1,
  h: 1,
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
  a1: 1,
  j: 1,
  i: 1,
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
  b4: 1,
  j: 1,
  i: 1,
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
  b8: 1,
  W: 1,
  U: 1,
  Y: 1,
  V: 1
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
  b9: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.bb)));
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
  bc: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1
}), ((x) => $isShort(x)));
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_UnsupportedOperationException = new $TypeData().i($c_jl_UnsupportedOperationException, "java.lang.UnsupportedOperationException", ({
  bh: 1,
  j: 1,
  i: 1,
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
  bm: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.iG)) {
    if (($thiz.go === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.go;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.hi.N));
      try {
        var $x_1 = ((($thiz.go + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.iF = $x_1;
    $thiz.iG = true;
  }
  return $thiz.iF;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.go = null;
    this.iF = null;
    this.iG = false;
    this.go = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  h8() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bx: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fo = 0;
  this.iI = 0;
  this.iH = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.iH = outer;
  this.fo = 0;
  this.iI = outer.s();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.C = (function() {
  return (this.fo < this.iI);
});
$p.B = (function() {
  var result = this.iH.k(this.fo);
  this.fo = ((1 + this.fo) | 0);
  return result;
});
var $d_s_Product$$anon$1 = new $TypeData().i($c_s_Product$$anon$1, "scala.Product$$anon$1", ({
  bz: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
/** @constructor */
function $c_T1(_1) {
  this.eG = null;
  this.eG = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.s = (function() {
  return 1;
});
$p.k = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.j = (function() {
  return (("(" + this.eG) + ")");
});
$p.x = (function() {
  return "Tuple1";
});
$p.A = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 1228477340, true);
});
$p.m = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().b(this.eG, x$1.eG)));
});
function $isArrayOf_T1(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a3)));
}
var $d_T1 = new $TypeData().i($c_T1, "scala.Tuple1", ({
  a3: 1,
  bA: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T10(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10) {
  this.eH = null;
  this.aR = null;
  this.aS = null;
  this.aT = null;
  this.aU = null;
  this.aV = null;
  this.aW = null;
  this.aX = null;
  this.aY = null;
  this.aQ = null;
  this.eH = _1;
  this.aR = _2;
  this.aS = _3;
  this.aT = _4;
  this.aU = _5;
  this.aV = _6;
  this.aW = _7;
  this.aX = _8;
  this.aY = _9;
  this.aQ = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 10;
});
$p.k = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 2104595240, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().b(this.eH, x$0.eH) && $m_sr_BoxesRunTime$().b(this.aR, x$0.aR)) && $m_sr_BoxesRunTime$().b(this.aS, x$0.aS)) && $m_sr_BoxesRunTime$().b(this.aT, x$0.aT)) && $m_sr_BoxesRunTime$().b(this.aU, x$0.aU)) && $m_sr_BoxesRunTime$().b(this.aV, x$0.aV)) && $m_sr_BoxesRunTime$().b(this.aW, x$0.aW)) && $m_sr_BoxesRunTime$().b(this.aX, x$0.aX)) && $m_sr_BoxesRunTime$().b(this.aY, x$0.aY)) && $m_sr_BoxesRunTime$().b(this.aQ, x$0.aQ))));
});
$p.x = (function() {
  return "Tuple10";
});
$p.j = (function() {
  return (((((((((((((((((((("(" + this.eH) + ",") + this.aR) + ",") + this.aS) + ",") + this.aT) + ",") + this.aU) + ",") + this.aV) + ",") + this.aW) + ",") + this.aX) + ",") + this.aY) + ",") + this.aQ) + ")");
});
function $isArrayOf_T10(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a4)));
}
var $d_T10 = new $TypeData().i($c_T10, "scala.Tuple10", ({
  a4: 1,
  b: 1,
  c: 1,
  bB: 1,
  a: 1
}));
/** @constructor */
function $c_T11(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11) {
  this.eI = null;
  this.b1 = null;
  this.b2 = null;
  this.b3 = null;
  this.b4 = null;
  this.b5 = null;
  this.b6 = null;
  this.b7 = null;
  this.b8 = null;
  this.aZ = null;
  this.b0 = null;
  this.eI = _1;
  this.b1 = _2;
  this.b2 = _3;
  this.b3 = _4;
  this.b4 = _5;
  this.b5 = _6;
  this.b6 = _7;
  this.b7 = _8;
  this.b8 = _9;
  this.aZ = _10;
  this.b0 = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 11;
});
$p.k = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 838406606, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().b(this.eI, x$0.eI) && $m_sr_BoxesRunTime$().b(this.b1, x$0.b1)) && $m_sr_BoxesRunTime$().b(this.b2, x$0.b2)) && $m_sr_BoxesRunTime$().b(this.b3, x$0.b3)) && $m_sr_BoxesRunTime$().b(this.b4, x$0.b4)) && $m_sr_BoxesRunTime$().b(this.b5, x$0.b5)) && $m_sr_BoxesRunTime$().b(this.b6, x$0.b6)) && $m_sr_BoxesRunTime$().b(this.b7, x$0.b7)) && $m_sr_BoxesRunTime$().b(this.b8, x$0.b8)) && $m_sr_BoxesRunTime$().b(this.aZ, x$0.aZ)) && $m_sr_BoxesRunTime$().b(this.b0, x$0.b0))));
});
$p.x = (function() {
  return "Tuple11";
});
$p.j = (function() {
  return (((((((((((((((((((((("(" + this.eI) + ",") + this.b1) + ",") + this.b2) + ",") + this.b3) + ",") + this.b4) + ",") + this.b5) + ",") + this.b6) + ",") + this.b7) + ",") + this.b8) + ",") + this.aZ) + ",") + this.b0) + ")");
});
function $isArrayOf_T11(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a5)));
}
var $d_T11 = new $TypeData().i($c_T11, "scala.Tuple11", ({
  a5: 1,
  b: 1,
  c: 1,
  bC: 1,
  a: 1
}));
/** @constructor */
function $c_T12(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12) {
  this.eJ = null;
  this.bc = null;
  this.bd = null;
  this.be = null;
  this.bf = null;
  this.bg = null;
  this.bh = null;
  this.bi = null;
  this.bj = null;
  this.b9 = null;
  this.ba = null;
  this.bb = null;
  this.eJ = _1;
  this.bc = _2;
  this.bd = _3;
  this.be = _4;
  this.bf = _5;
  this.bg = _6;
  this.bh = _7;
  this.bi = _8;
  this.bj = _9;
  this.b9 = _10;
  this.ba = _11;
  this.bb = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 12;
});
$p.k = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1964145863), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().b(this.eJ, x$0.eJ) && $m_sr_BoxesRunTime$().b(this.bc, x$0.bc)) && $m_sr_BoxesRunTime$().b(this.bd, x$0.bd)) && $m_sr_BoxesRunTime$().b(this.be, x$0.be)) && $m_sr_BoxesRunTime$().b(this.bf, x$0.bf)) && $m_sr_BoxesRunTime$().b(this.bg, x$0.bg)) && $m_sr_BoxesRunTime$().b(this.bh, x$0.bh)) && $m_sr_BoxesRunTime$().b(this.bi, x$0.bi)) && $m_sr_BoxesRunTime$().b(this.bj, x$0.bj)) && $m_sr_BoxesRunTime$().b(this.b9, x$0.b9)) && $m_sr_BoxesRunTime$().b(this.ba, x$0.ba)) && $m_sr_BoxesRunTime$().b(this.bb, x$0.bb))));
});
$p.x = (function() {
  return "Tuple12";
});
$p.j = (function() {
  return (((((((((((((((((((((((("(" + this.eJ) + ",") + this.bc) + ",") + this.bd) + ",") + this.be) + ",") + this.bf) + ",") + this.bg) + ",") + this.bh) + ",") + this.bi) + ",") + this.bj) + ",") + this.b9) + ",") + this.ba) + ",") + this.bb) + ")");
});
function $isArrayOf_T12(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a6)));
}
var $d_T12 = new $TypeData().i($c_T12, "scala.Tuple12", ({
  a6: 1,
  b: 1,
  c: 1,
  bD: 1,
  a: 1
}));
/** @constructor */
function $c_T13(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13) {
  this.eK = null;
  this.bo = null;
  this.bp = null;
  this.bq = null;
  this.br = null;
  this.bs = null;
  this.bt = null;
  this.bu = null;
  this.bv = null;
  this.bk = null;
  this.bl = null;
  this.bm = null;
  this.bn = null;
  this.eK = _1;
  this.bo = _2;
  this.bp = _3;
  this.bq = _4;
  this.br = _5;
  this.bs = _6;
  this.bt = _7;
  this.bu = _8;
  this.bv = _9;
  this.bk = _10;
  this.bl = _11;
  this.bm = _12;
  this.bn = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 13;
});
$p.k = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 1224168367, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().b(this.eK, x$0.eK) && $m_sr_BoxesRunTime$().b(this.bo, x$0.bo)) && $m_sr_BoxesRunTime$().b(this.bp, x$0.bp)) && $m_sr_BoxesRunTime$().b(this.bq, x$0.bq)) && $m_sr_BoxesRunTime$().b(this.br, x$0.br)) && $m_sr_BoxesRunTime$().b(this.bs, x$0.bs)) && $m_sr_BoxesRunTime$().b(this.bt, x$0.bt)) && $m_sr_BoxesRunTime$().b(this.bu, x$0.bu)) && $m_sr_BoxesRunTime$().b(this.bv, x$0.bv)) && $m_sr_BoxesRunTime$().b(this.bk, x$0.bk)) && $m_sr_BoxesRunTime$().b(this.bl, x$0.bl)) && $m_sr_BoxesRunTime$().b(this.bm, x$0.bm)) && $m_sr_BoxesRunTime$().b(this.bn, x$0.bn))));
});
$p.x = (function() {
  return "Tuple13";
});
$p.j = (function() {
  return (((((((((((((((((((((((((("(" + this.eK) + ",") + this.bo) + ",") + this.bp) + ",") + this.bq) + ",") + this.br) + ",") + this.bs) + ",") + this.bt) + ",") + this.bu) + ",") + this.bv) + ",") + this.bk) + ",") + this.bl) + ",") + this.bm) + ",") + this.bn) + ")");
});
function $isArrayOf_T13(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a7)));
}
var $d_T13 = new $TypeData().i($c_T13, "scala.Tuple13", ({
  a7: 1,
  b: 1,
  c: 1,
  bE: 1,
  a: 1
}));
/** @constructor */
function $c_T14(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14) {
  this.eL = null;
  this.bB = null;
  this.bC = null;
  this.bD = null;
  this.bE = null;
  this.bF = null;
  this.bG = null;
  this.bH = null;
  this.bI = null;
  this.bw = null;
  this.bx = null;
  this.by = null;
  this.bz = null;
  this.bA = null;
  this.eL = _1;
  this.bB = _2;
  this.bC = _3;
  this.bD = _4;
  this.bE = _5;
  this.bF = _6;
  this.bG = _7;
  this.bH = _8;
  this.bI = _9;
  this.bw = _10;
  this.bx = _11;
  this.by = _12;
  this.bz = _13;
  this.bA = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 14;
});
$p.k = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 147759069, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().b(this.eL, x$0.eL) && $m_sr_BoxesRunTime$().b(this.bB, x$0.bB)) && $m_sr_BoxesRunTime$().b(this.bC, x$0.bC)) && $m_sr_BoxesRunTime$().b(this.bD, x$0.bD)) && $m_sr_BoxesRunTime$().b(this.bE, x$0.bE)) && $m_sr_BoxesRunTime$().b(this.bF, x$0.bF)) && $m_sr_BoxesRunTime$().b(this.bG, x$0.bG)) && $m_sr_BoxesRunTime$().b(this.bH, x$0.bH)) && $m_sr_BoxesRunTime$().b(this.bI, x$0.bI)) && $m_sr_BoxesRunTime$().b(this.bw, x$0.bw)) && $m_sr_BoxesRunTime$().b(this.bx, x$0.bx)) && $m_sr_BoxesRunTime$().b(this.by, x$0.by)) && $m_sr_BoxesRunTime$().b(this.bz, x$0.bz)) && $m_sr_BoxesRunTime$().b(this.bA, x$0.bA))));
});
$p.x = (function() {
  return "Tuple14";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((("(" + this.eL) + ",") + this.bB) + ",") + this.bC) + ",") + this.bD) + ",") + this.bE) + ",") + this.bF) + ",") + this.bG) + ",") + this.bH) + ",") + this.bI) + ",") + this.bw) + ",") + this.bx) + ",") + this.by) + ",") + this.bz) + ",") + this.bA) + ")");
});
function $isArrayOf_T14(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a8)));
}
var $d_T14 = new $TypeData().i($c_T14, "scala.Tuple14", ({
  a8: 1,
  b: 1,
  c: 1,
  bF: 1,
  a: 1
}));
/** @constructor */
function $c_T15(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15) {
  this.eM = null;
  this.bP = null;
  this.bQ = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.bU = null;
  this.bV = null;
  this.bW = null;
  this.bJ = null;
  this.bK = null;
  this.bL = null;
  this.bM = null;
  this.bN = null;
  this.bO = null;
  this.eM = _1;
  this.bP = _2;
  this.bQ = _3;
  this.bR = _4;
  this.bS = _5;
  this.bT = _6;
  this.bU = _7;
  this.bV = _8;
  this.bW = _9;
  this.bJ = _10;
  this.bK = _11;
  this.bL = _12;
  this.bM = _13;
  this.bN = _14;
  this.bO = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 15;
});
$p.k = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 1834180931, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().b(this.eM, x$0.eM) && $m_sr_BoxesRunTime$().b(this.bP, x$0.bP)) && $m_sr_BoxesRunTime$().b(this.bQ, x$0.bQ)) && $m_sr_BoxesRunTime$().b(this.bR, x$0.bR)) && $m_sr_BoxesRunTime$().b(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().b(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().b(this.bU, x$0.bU)) && $m_sr_BoxesRunTime$().b(this.bV, x$0.bV)) && $m_sr_BoxesRunTime$().b(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().b(this.bJ, x$0.bJ)) && $m_sr_BoxesRunTime$().b(this.bK, x$0.bK)) && $m_sr_BoxesRunTime$().b(this.bL, x$0.bL)) && $m_sr_BoxesRunTime$().b(this.bM, x$0.bM)) && $m_sr_BoxesRunTime$().b(this.bN, x$0.bN)) && $m_sr_BoxesRunTime$().b(this.bO, x$0.bO))));
});
$p.x = (function() {
  return "Tuple15";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((("(" + this.eM) + ",") + this.bP) + ",") + this.bQ) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ",") + this.bU) + ",") + this.bV) + ",") + this.bW) + ",") + this.bJ) + ",") + this.bK) + ",") + this.bL) + ",") + this.bM) + ",") + this.bN) + ",") + this.bO) + ")");
});
function $isArrayOf_T15(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a9)));
}
var $d_T15 = new $TypeData().i($c_T15, "scala.Tuple15", ({
  a9: 1,
  b: 1,
  c: 1,
  bG: 1,
  a: 1
}));
/** @constructor */
function $c_T16(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16) {
  this.eN = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.c7 = null;
  this.c8 = null;
  this.c9 = null;
  this.ca = null;
  this.cb = null;
  this.bX = null;
  this.bY = null;
  this.bZ = null;
  this.c0 = null;
  this.c1 = null;
  this.c2 = null;
  this.c3 = null;
  this.eN = _1;
  this.c4 = _2;
  this.c5 = _3;
  this.c6 = _4;
  this.c7 = _5;
  this.c8 = _6;
  this.c9 = _7;
  this.ca = _8;
  this.cb = _9;
  this.bX = _10;
  this.bY = _11;
  this.bZ = _12;
  this.c0 = _13;
  this.c1 = _14;
  this.c2 = _15;
  this.c3 = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 16;
});
$p.k = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 499793902, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().b(this.eN, x$0.eN) && $m_sr_BoxesRunTime$().b(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().b(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().b(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().b(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().b(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().b(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().b(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().b(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().b(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().b(this.bY, x$0.bY)) && $m_sr_BoxesRunTime$().b(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().b(this.c0, x$0.c0)) && $m_sr_BoxesRunTime$().b(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().b(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().b(this.c3, x$0.c3))));
});
$p.x = (function() {
  return "Tuple16";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.eN) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.c7) + ",") + this.c8) + ",") + this.c9) + ",") + this.ca) + ",") + this.cb) + ",") + this.bX) + ",") + this.bY) + ",") + this.bZ) + ",") + this.c0) + ",") + this.c1) + ",") + this.c2) + ",") + this.c3) + ")");
});
function $isArrayOf_T16(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aa)));
}
var $d_T16 = new $TypeData().i($c_T16, "scala.Tuple16", ({
  aa: 1,
  b: 1,
  c: 1,
  bH: 1,
  a: 1
}));
/** @constructor */
function $c_T17(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17) {
  this.eO = null;
  this.ck = null;
  this.cl = null;
  this.cm = null;
  this.cn = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.cf = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.eO = _1;
  this.ck = _2;
  this.cl = _3;
  this.cm = _4;
  this.cn = _5;
  this.co = _6;
  this.cp = _7;
  this.cq = _8;
  this.cr = _9;
  this.cc = _10;
  this.cd = _11;
  this.ce = _12;
  this.cf = _13;
  this.cg = _14;
  this.ch = _15;
  this.ci = _16;
  this.cj = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 17;
});
$p.k = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-934366247), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().b(this.eO, x$0.eO) && $m_sr_BoxesRunTime$().b(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().b(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().b(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().b(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().b(this.co, x$0.co)) && $m_sr_BoxesRunTime$().b(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().b(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().b(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().b(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().b(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().b(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().b(this.cf, x$0.cf)) && $m_sr_BoxesRunTime$().b(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().b(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().b(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().b(this.cj, x$0.cj))));
});
$p.x = (function() {
  return "Tuple17";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.eO) + ",") + this.ck) + ",") + this.cl) + ",") + this.cm) + ",") + this.cn) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ",") + this.cf) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ")");
});
function $isArrayOf_T17(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ab)));
}
var $d_T17 = new $TypeData().i($c_T17, "scala.Tuple17", ({
  ab: 1,
  b: 1,
  c: 1,
  bI: 1,
  a: 1
}));
/** @constructor */
function $c_T18(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18) {
  this.eP = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.eP = _1;
  this.cB = _2;
  this.cC = _3;
  this.cD = _4;
  this.cE = _5;
  this.cF = _6;
  this.cG = _7;
  this.cH = _8;
  this.cI = _9;
  this.cs = _10;
  this.ct = _11;
  this.cu = _12;
  this.cv = _13;
  this.cw = _14;
  this.cx = _15;
  this.cy = _16;
  this.cz = _17;
  this.cA = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 18;
});
$p.k = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-937041276), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().b(this.eP, x$0.eP) && $m_sr_BoxesRunTime$().b(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().b(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().b(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().b(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().b(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().b(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().b(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().b(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().b(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().b(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().b(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().b(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().b(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().b(this.cx, x$0.cx)) && $m_sr_BoxesRunTime$().b(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().b(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().b(this.cA, x$0.cA))));
});
$p.x = (function() {
  return "Tuple18";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.eP) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ")");
});
function $isArrayOf_T18(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ac)));
}
var $d_T18 = new $TypeData().i($c_T18, "scala.Tuple18", ({
  ac: 1,
  b: 1,
  c: 1,
  bJ: 1,
  a: 1
}));
/** @constructor */
function $c_T19(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19) {
  this.eQ = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cZ = null;
  this.d0 = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cQ = null;
  this.cR = null;
  this.cS = null;
  this.eQ = _1;
  this.cT = _2;
  this.cU = _3;
  this.cV = _4;
  this.cW = _5;
  this.cX = _6;
  this.cY = _7;
  this.cZ = _8;
  this.d0 = _9;
  this.cJ = _10;
  this.cK = _11;
  this.cL = _12;
  this.cM = _13;
  this.cN = _14;
  this.cO = _15;
  this.cP = _16;
  this.cQ = _17;
  this.cR = _18;
  this.cS = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 19;
});
$p.k = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1955940499), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().b(this.eQ, x$0.eQ) && $m_sr_BoxesRunTime$().b(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().b(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().b(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().b(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().b(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().b(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().b(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().b(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().b(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().b(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().b(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().b(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().b(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().b(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().b(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().b(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().b(this.cR, x$0.cR)) && $m_sr_BoxesRunTime$().b(this.cS, x$0.cS))));
});
$p.x = (function() {
  return "Tuple19";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.eQ) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cZ) + ",") + this.d0) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cQ) + ",") + this.cR) + ",") + this.cS) + ")");
});
function $isArrayOf_T19(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ad)));
}
var $d_T19 = new $TypeData().i($c_T19, "scala.Tuple19", ({
  ad: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T2(_1, _2) {
  this.a6 = null;
  this.Z = null;
  this.a6 = _1;
  this.Z = _2;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.s = (function() {
  return 2;
});
$p.k = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.j = (function() {
  return (((("(" + this.a6) + ",") + this.Z) + ")");
});
$p.x = (function() {
  return "Tuple2";
});
$p.A = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-116390334), true);
});
$p.m = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().b(this.a6, x$1.a6) && $m_sr_BoxesRunTime$().b(this.Z, x$1.Z))));
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ae)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  ae: 1,
  bL: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.eR = null;
  this.db = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.dj = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.d9 = null;
  this.da = null;
  this.dc = null;
  this.eR = _1;
  this.db = _2;
  this.dd = _3;
  this.de = _4;
  this.df = _5;
  this.dg = _6;
  this.dh = _7;
  this.di = _8;
  this.dj = _9;
  this.d1 = _10;
  this.d2 = _11;
  this.d3 = _12;
  this.d4 = _13;
  this.d5 = _14;
  this.d6 = _15;
  this.d7 = _16;
  this.d8 = _17;
  this.d9 = _18;
  this.da = _19;
  this.dc = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 20;
});
$p.k = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 1328807075, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().b(this.eR, x$0.eR) && $m_sr_BoxesRunTime$().b(this.db, x$0.db)) && $m_sr_BoxesRunTime$().b(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().b(this.de, x$0.de)) && $m_sr_BoxesRunTime$().b(this.df, x$0.df)) && $m_sr_BoxesRunTime$().b(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().b(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().b(this.di, x$0.di)) && $m_sr_BoxesRunTime$().b(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().b(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().b(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().b(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().b(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().b(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().b(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().b(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().b(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().b(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().b(this.da, x$0.da)) && $m_sr_BoxesRunTime$().b(this.dc, x$0.dc))));
});
$p.x = (function() {
  return "Tuple20";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.eR) + ",") + this.db) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.dj) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.d9) + ",") + this.da) + ",") + this.dc) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  af: 1,
  b: 1,
  c: 1,
  bM: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.eS = null;
  this.dv = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.du = null;
  this.dw = null;
  this.dx = null;
  this.eS = _1;
  this.dv = _2;
  this.dy = _3;
  this.dz = _4;
  this.dA = _5;
  this.dB = _6;
  this.dC = _7;
  this.dD = _8;
  this.dE = _9;
  this.dk = _10;
  this.dl = _11;
  this.dm = _12;
  this.dn = _13;
  this.dp = _14;
  this.dq = _15;
  this.dr = _16;
  this.ds = _17;
  this.dt = _18;
  this.du = _19;
  this.dw = _20;
  this.dx = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 21;
});
$p.k = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-21288119), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().b(this.eS, x$0.eS) && $m_sr_BoxesRunTime$().b(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().b(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().b(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().b(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().b(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().b(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().b(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().b(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().b(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().b(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().b(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().b(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().b(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().b(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().b(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().b(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().b(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().b(this.du, x$0.du)) && $m_sr_BoxesRunTime$().b(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().b(this.dx, x$0.dx))));
});
$p.x = (function() {
  return "Tuple21";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.eS) + ",") + this.dv) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.du) + ",") + this.dw) + ",") + this.dx) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  ag: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.eT = null;
  this.dP = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.dW = null;
  this.dX = null;
  this.dY = null;
  this.dZ = null;
  this.dF = null;
  this.dG = null;
  this.dH = null;
  this.dI = null;
  this.dJ = null;
  this.dK = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dQ = null;
  this.dR = null;
  this.dS = null;
  this.eT = _1;
  this.dP = _2;
  this.dT = _3;
  this.dU = _4;
  this.dV = _5;
  this.dW = _6;
  this.dX = _7;
  this.dY = _8;
  this.dZ = _9;
  this.dF = _10;
  this.dG = _11;
  this.dH = _12;
  this.dI = _13;
  this.dJ = _14;
  this.dK = _15;
  this.dL = _16;
  this.dM = _17;
  this.dN = _18;
  this.dO = _19;
  this.dQ = _20;
  this.dR = _21;
  this.dS = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 22;
});
$p.k = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-139445068), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().b(this.eT, x$0.eT) && $m_sr_BoxesRunTime$().b(this.dP, x$0.dP)) && $m_sr_BoxesRunTime$().b(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().b(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().b(this.dV, x$0.dV)) && $m_sr_BoxesRunTime$().b(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().b(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().b(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().b(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().b(this.dF, x$0.dF)) && $m_sr_BoxesRunTime$().b(this.dG, x$0.dG)) && $m_sr_BoxesRunTime$().b(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().b(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().b(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().b(this.dK, x$0.dK)) && $m_sr_BoxesRunTime$().b(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().b(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().b(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().b(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().b(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().b(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().b(this.dS, x$0.dS))));
});
$p.x = (function() {
  return "Tuple22";
});
$p.j = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.eT) + ",") + this.dP) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ",") + this.dF) + ",") + this.dG) + ",") + this.dH) + ",") + this.dI) + ",") + this.dJ) + ",") + this.dK) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dS) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  ah: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.e0 = null;
  this.aE = null;
  this.aF = null;
  this.e0 = _1;
  this.aE = _2;
  this.aF = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 3;
});
$p.k = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-192629203), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().b(this.e0, x$0.e0) && $m_sr_BoxesRunTime$().b(this.aE, x$0.aE)) && $m_sr_BoxesRunTime$().b(this.aF, x$0.aF))));
});
$p.x = (function() {
  return "Tuple3";
});
$p.j = (function() {
  return (((((("(" + this.e0) + ",") + this.aE) + ",") + this.aF) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  ai: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.e1 = null;
  this.aG = null;
  this.aH = null;
  this.aI = null;
  this.e1 = _1;
  this.aG = _2;
  this.aH = _3;
  this.aI = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 4;
});
$p.k = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1542739752), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().b(this.e1, x$0.e1) && $m_sr_BoxesRunTime$().b(this.aG, x$0.aG)) && $m_sr_BoxesRunTime$().b(this.aH, x$0.aH)) && $m_sr_BoxesRunTime$().b(this.aI, x$0.aI))));
});
$p.x = (function() {
  return "Tuple4";
});
$p.j = (function() {
  return (((((((("(" + this.e1) + ",") + this.aG) + ",") + this.aH) + ",") + this.aI) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  aj: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.eU = null;
  this.e2 = null;
  this.e3 = null;
  this.e4 = null;
  this.e5 = null;
  this.eU = _1;
  this.e2 = _2;
  this.e3 = _3;
  this.e4 = _4;
  this.e5 = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 5;
});
$p.k = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 417360321, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().b(this.eU, x$0.eU) && $m_sr_BoxesRunTime$().b(this.e2, x$0.e2)) && $m_sr_BoxesRunTime$().b(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().b(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().b(this.e5, x$0.e5))));
});
$p.x = (function() {
  return "Tuple5";
});
$p.j = (function() {
  return (((((((((("(" + this.eU) + ",") + this.e2) + ",") + this.e3) + ",") + this.e4) + ",") + this.e5) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  ak: 1,
  b: 1,
  c: 1,
  bR: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.eV = null;
  this.e6 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.eV = _1;
  this.e6 = _2;
  this.e7 = _3;
  this.e8 = _4;
  this.e9 = _5;
  this.ea = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 6;
});
$p.k = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1037607828), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().b(this.eV, x$0.eV) && $m_sr_BoxesRunTime$().b(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().b(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().b(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().b(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().b(this.ea, x$0.ea))));
});
$p.x = (function() {
  return "Tuple6";
});
$p.j = (function() {
  return (((((((((((("(" + this.eV) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  al: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.eW = null;
  this.eb = null;
  this.ec = null;
  this.ed = null;
  this.ee = null;
  this.ef = null;
  this.eg = null;
  this.eW = _1;
  this.eb = _2;
  this.ec = _3;
  this.ed = _4;
  this.ee = _5;
  this.ef = _6;
  this.eg = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 7;
});
$p.k = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1050932777), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().b(this.eW, x$0.eW) && $m_sr_BoxesRunTime$().b(this.eb, x$0.eb)) && $m_sr_BoxesRunTime$().b(this.ec, x$0.ec)) && $m_sr_BoxesRunTime$().b(this.ed, x$0.ed)) && $m_sr_BoxesRunTime$().b(this.ee, x$0.ee)) && $m_sr_BoxesRunTime$().b(this.ef, x$0.ef)) && $m_sr_BoxesRunTime$().b(this.eg, x$0.eg))));
});
$p.x = (function() {
  return "Tuple7";
});
$p.j = (function() {
  return (((((((((((((("(" + this.eW) + ",") + this.eb) + ",") + this.ec) + ",") + this.ed) + ",") + this.ee) + ",") + this.ef) + ",") + this.eg) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  am: 1,
  b: 1,
  c: 1,
  bT: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.eX = null;
  this.eh = null;
  this.ei = null;
  this.ej = null;
  this.ek = null;
  this.el = null;
  this.em = null;
  this.en = null;
  this.eX = _1;
  this.eh = _2;
  this.ei = _3;
  this.ej = _4;
  this.ek = _5;
  this.el = _6;
  this.em = _7;
  this.en = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 8;
});
$p.k = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, 1998822530, true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().b(this.eX, x$0.eX) && $m_sr_BoxesRunTime$().b(this.eh, x$0.eh)) && $m_sr_BoxesRunTime$().b(this.ei, x$0.ei)) && $m_sr_BoxesRunTime$().b(this.ej, x$0.ej)) && $m_sr_BoxesRunTime$().b(this.ek, x$0.ek)) && $m_sr_BoxesRunTime$().b(this.el, x$0.el)) && $m_sr_BoxesRunTime$().b(this.em, x$0.em)) && $m_sr_BoxesRunTime$().b(this.en, x$0.en))));
});
$p.x = (function() {
  return "Tuple8";
});
$p.j = (function() {
  return (((((((((((((((("(" + this.eX) + ",") + this.eh) + ",") + this.ei) + ",") + this.ej) + ",") + this.ek) + ",") + this.el) + ",") + this.em) + ",") + this.en) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  an: 1,
  b: 1,
  c: 1,
  bU: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.eY = null;
  this.eo = null;
  this.ep = null;
  this.eq = null;
  this.er = null;
  this.es = null;
  this.et = null;
  this.eu = null;
  this.ev = null;
  this.eY = _1;
  this.eo = _2;
  this.ep = _3;
  this.eq = _4;
  this.er = _5;
  this.es = _6;
  this.et = _7;
  this.eu = _8;
  this.ev = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 9;
});
$p.k = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().E(this, (-1807911176), true);
});
$p.m = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().b(this.eY, x$0.eY) && $m_sr_BoxesRunTime$().b(this.eo, x$0.eo)) && $m_sr_BoxesRunTime$().b(this.ep, x$0.ep)) && $m_sr_BoxesRunTime$().b(this.eq, x$0.eq)) && $m_sr_BoxesRunTime$().b(this.er, x$0.er)) && $m_sr_BoxesRunTime$().b(this.es, x$0.es)) && $m_sr_BoxesRunTime$().b(this.et, x$0.et)) && $m_sr_BoxesRunTime$().b(this.eu, x$0.eu)) && $m_sr_BoxesRunTime$().b(this.ev, x$0.ev))));
});
$p.x = (function() {
  return "Tuple9";
});
$p.j = (function() {
  return (((((((((((((((((("(" + this.eY) + ",") + this.eo) + ",") + this.ep) + ",") + this.eq) + ",") + this.er) + ",") + this.es) + ",") + this.et) + ",") + this.eu) + ",") + this.ev) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  ao: 1,
  b: 1,
  c: 1,
  bV: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.fj() + "("), ", ", ")");
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
$p.C = (function() {
  return false;
});
$p.m4 = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.T = (function() {
  return 0;
});
$p.B = (function() {
  this.m4();
});
$p.hh = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  c5: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.V instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.V;
      $thiz.V = c.V;
      $thiz.aK = c.aK;
      if ((c.a8 !== null)) {
        if (($thiz.a7 === null)) {
          $thiz.a7 = c.a7;
        }
        var x$proxy10 = c.a7;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().ha();
        }
        x$proxy10.fq = $thiz.a8;
        $thiz.a8 = c.a8;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.a8 === null)) {
      $thiz.V = null;
      $thiz.a7 = null;
      return false;
    } else {
      $thiz.V = $thiz.a8.ls();
      if (($thiz.a7 === $thiz.a8)) {
        var x$proxy12 = $thiz.a7;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().ha();
        }
        $thiz.a7 = x$proxy12.fq;
      }
      $thiz.a8 = $thiz.a8.fq;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.aK) {
        return true;
      } else {
        if ((!(($thiz.V !== null) && $thiz.V.C()))) {
          continue;
        }
        $thiz.aK = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.V = null;
  this.a8 = null;
  this.a7 = null;
  this.aK = false;
  this.V = from;
  this.a8 = null;
  this.a7 = null;
  this.aK = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.C = (function() {
  if (this.aK) {
    return true;
  } else if ((this.V !== null)) {
    if (this.V.C()) {
      this.aK = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.B = (function() {
  if (this.C()) {
    this.aK = false;
    var x$proxy13 = this.V;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().ha();
    }
    return x$proxy13.B();
  } else {
    return $m_sc_Iterator$().ay.B();
  }
});
$p.kU = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.a8 === null)) {
    this.a8 = c;
    this.a7 = c;
  } else {
    var x$proxy14 = this.a7;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().ha();
    }
    x$proxy14.fq = c;
    this.a7 = c;
  }
  if ((this.V === null)) {
    this.V = $m_sc_Iterator$().ay;
  }
  return this;
});
function $isArrayOf_sc_Iterator$ConcatIterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.at)));
}
var $d_sc_Iterator$ConcatIterator = new $TypeData().i($c_sc_Iterator$ConcatIterator, "scala.collection.Iterator$ConcatIterator", ({
  at: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$SliceIterator__skip__V($thiz) {
  while (($thiz.az > 0)) {
    if ($thiz.aL.C()) {
      $thiz.aL.B();
      $thiz.az = (($thiz.az - 1) | 0);
    } else {
      $thiz.az = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.a0 < 0)) {
    return (-1);
  } else {
    var that = (($thiz.a0 - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.aL = null;
  this.a0 = 0;
  this.az = 0;
  this.aL = underlying;
  this.a0 = limit;
  this.az = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.T = (function() {
  var size = this.aL.T();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.az) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.a0 < 0)) {
      return dropSize;
    } else {
      var x = this.a0;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.C = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.a0 !== 0) && this.aL.C());
});
$p.B = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.a0 > 0)) {
    this.a0 = ((this.a0 - 1) | 0);
    return this.aL.B();
  } else {
    return ((this.a0 < 0) ? this.aL.B() : $m_sc_Iterator$().ay.B());
  }
});
$p.hh = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.a0 < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.az + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().ay;
  } else if ((sum < 0)) {
    this.az = 2147483647;
    this.a0 = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.aL, ((sum - 2147483647) | 0), rest))));
  } else {
    this.az = sum;
    this.a0 = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  c7: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.l5(n);
  if (skipped.M()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.i8();
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
      if ((((!a$tailLocal1.M()) && (!b$tailLocal1.M())) && $m_sr_BoxesRunTime$().b(a$tailLocal1.i8(), b$tailLocal1.i8()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.iw();
        var b$tailLocal1$tmp1 = b$tailLocal1.iw();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.M() && b$tailLocal1.M());
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
  cm: 1,
  a: 1,
  as: 1,
  c9: 1,
  cd: 1
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
  this.iW = null;
  this.fs = 0;
  this.iV = 0;
  this.iW = x$1;
  this.fs = 0;
  this.iV = x$1.s();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.C = (function() {
  return (this.fs < this.iV);
});
$p.B = (function() {
  var result = this.iW.k(this.fs);
  this.fs = ((1 + this.fs) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  cY: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a0)));
}
var $d_jl_Double = new $TypeData().i(0, "java.lang.Double", ({
  a0: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  y: 1
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
  b3: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  y: 1
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
  b5: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  y: 1
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
  return $m_RTLong$().km($thiz, $thizhi);
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.a2)));
}
var $d_jl_Long = new $TypeData().i(0, "java.lang.Long", ({
  a2: 1,
  m: 1,
  a: 1,
  h: 1,
  g: 1,
  y: 1
}), ((x) => (x instanceof $Long)));
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true);
  }
}
var $d_jl_NumberFormatException = new $TypeData().i($c_jl_NumberFormatException, "java.lang.NumberFormatException", ({
  ba: 1,
  a1: 1,
  j: 1,
  i: 1,
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
  var str = $m_jl_Character$().mA(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bd: 1,
  a: 1,
  h: 1,
  E: 1,
  g: 1,
  y: 1
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
$p.h7 = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.i2 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.fj = (function() {
  return this.eF();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.gp = null;
  this.ax = 0;
  this.fp = 0;
  this.gp = xs;
  this.ax = 0;
  this.fp = $m_jl_reflect_Array$().g3(this.gp);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.T = (function() {
  return ((this.fp - this.ax) | 0);
});
$p.C = (function() {
  return (this.ax < this.fp);
});
$p.B = (function() {
  if ((this.ax >= $m_jl_reflect_Array$().g3(this.gp))) {
    $m_sc_Iterator$().ay.B();
  }
  var r = $m_sr_ScalaRunTime$().fi(this.gp, this.ax);
  this.ax = ((1 + this.ax) | 0);
  return r;
});
$p.h6 = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.ax + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.fp;
    } else {
      var a = this.fp;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.ax = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  bZ: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.aa) ? $thiz.aa : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.iJ = null;
  this.aJ = 0;
  this.aa = 0;
  this.iJ = self;
  this.aJ = 0;
  this.aa = self.D();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.T = (function() {
  return this.aa;
});
$p.C = (function() {
  return (this.aa > 0);
});
$p.B = (function() {
  if ((this.aa > 0)) {
    var r = this.iJ.L(this.aJ);
    this.aJ = ((1 + this.aJ) | 0);
    this.aa = ((this.aa - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().ay.B();
  }
});
$p.h6 = (function(n) {
  if ((n > 0)) {
    this.aJ = ((this.aJ + n) | 0);
    var b = ((this.aa - n) | 0);
    this.aa = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.hh = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.aa = ((b < 0) ? 0 : b);
  this.aJ = ((this.aJ + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c3: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.iN)) {
    $thiz.iM = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.iN = true;
  }
  return $thiz.iM;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.iM = null;
  this.iN = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  ci: 1,
  a: 1,
  ar: 1,
  ap: 1,
  aq: 1,
  au: 1
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
  this.iP = null;
  $n_scm_ArraySeq$ = this;
  this.iP = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  cp: 1,
  a: 1,
  ar: 1,
  ap: 1,
  aq: 1,
  au: 1
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
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.p = (function() {
  return 924202651;
});
$p.s = (function() {
  return 0;
});
$p.x = (function() {
  return "EmptyTuple";
});
$p.k = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.j = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bW: 1,
  b: 1,
  c: 1,
  a: 1,
  cv: 1,
  cw: 1,
  cx: 1
}));
var $n_T$package$EmptyTuple$;
function $m_T$package$EmptyTuple$() {
  if ((!$n_T$package$EmptyTuple$)) {
    $n_T$package$EmptyTuple$ = new $c_T$package$EmptyTuple$();
  }
  return $n_T$package$EmptyTuple$;
}
function $f_sc_View__toString__T($thiz) {
  return ($thiz.eF() + "(<not computed>)");
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
    this.ex = null;
    this.ex = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  h8() {
    return $dp_toString__T(this.ex);
  }
  x() {
    return "JavaScriptException";
  }
  s() {
    return 1;
  }
  k(x$1) {
    return ((x$1 === 0) ? this.ex : $m_sr_Statics$().lB(x$1));
  }
  A() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  p() {
    return $m_s_util_hashing_MurmurHash3$().E(this, 1744042595, true);
  }
  m(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().b(this.ex, x$1.ex)));
  }
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aF)));
}
var $d_sjs_js_JavaScriptException = new $TypeData().i($c_sjs_js_JavaScriptException, "scala.scalajs.js.JavaScriptException", ({
  aF: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1,
  c: 1,
  b: 1
}));
function $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V($thiz, line) {
  if (((typeof console) !== "undefined")) {
    if (($thiz.iz && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.iz = false;
  this.fn = null;
  this.iz = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.fn = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.lE = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.fn = (("" + this.fn) + rest);
      rest = "";
    } else {
      var $x_1 = this.fn;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.fn = "";
      var this$3 = rest;
      var beginIndex = ((1 + nlPos) | 0);
      rest = this$3.substring(beginIndex);
    }
  }
});
var $d_jl_JSConsoleBasedPrintStream = new $TypeData().i($c_jl_JSConsoleBasedPrintStream, "java.lang.JSConsoleBasedPrintStream", ({
  b7: 1,
  aV: 1,
  aU: 1,
  W: 1,
  U: 1,
  Y: 1,
  V: 1,
  X: 1
}));
function $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq($thiz, n, s) {
  var s$tailLocal1 = s;
  var n$tailLocal1 = n;
  while (true) {
    if (((n$tailLocal1 <= 0) || s$tailLocal1.M())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.iw();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.hl = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.j = (function() {
  return this.hl;
});
$p.m = (function(that) {
  return (this === that);
});
$p.p = (function() {
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
$p.j = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.hl = null;
  this.hl = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cE: 1,
  cF: 1,
  cD: 1,
  a: 1,
  cG: 1,
  cA: 1,
  b: 1,
  cB: 1,
  cC: 1
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
      if (o.i5($thiz)) {
        return $thiz.he(o);
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
$p.M = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.he = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.i5 = (function(that) {
  return true;
});
$p.m = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().kj(this);
});
$p.j = (function() {
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.F)));
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.F)));
}
function $ct_sc_SeqView$Id__sc_SeqOps__($thiz, underlying) {
  $thiz.fr = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.fr = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.L = (function(idx) {
  return this.fr.L(idx);
});
$p.D = (function() {
  return this.fr.D();
});
$p.M = (function() {
  return this.fr.M();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.fr = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.eE = (function(len) {
  var x = this.D();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.T = (function() {
  return this.D();
});
$p.N = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.eF = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  c2: 1,
  cb: 1,
  bX: 1,
  bY: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  a: 1,
  cf: 1,
  t: 1,
  ca: 1,
  w: 1,
  c1: 1
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
  return ($is_sci_IndexedSeq(that) ? ($thiz.D() === that.D()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.D();
      var equal = (length === o.D());
      if (equal) {
        var index = 0;
        var a = $thiz.i4();
        var b = o.i4();
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
          equal = $m_sr_BoxesRunTime$().b($thiz.L(index), o.L(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.N().h6(index);
          var thatIt = o.N().h6(index);
          while ((equal && thisIt.C())) {
            equal = $m_sr_BoxesRunTime$().b(thisIt.B(), thatIt.B());
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
  return (!(!((obj && obj.$classData) && obj.$classData.n.D)));
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.D)));
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
  this.gq = null;
  this.gq = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.i5 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.he = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.i4 = (function() {
  return $m_sci_IndexedSeqDefaults$().iO;
});
$p.N = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.eE = (function(len) {
  var x = this.D();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.T = (function() {
  return this.D();
});
$p.m = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.p = (function() {
  return $m_s_util_hashing_MurmurHash3$().kj(this);
});
$p.j = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.M = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.h7 = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.i2 = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.D = (function() {
  return (this.gq.length | 0);
});
$p.L = (function(idx) {
  return this.gq[idx];
});
$p.fj = (function() {
  return "WrappedVarArgs";
});
$p.I = (function(v1) {
  return this.L((v1 | 0));
});
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aG)));
}
var $d_sjsr_WrappedVarArgs = new $TypeData().i($c_sjsr_WrappedVarArgs, "scala.scalajs.runtime.WrappedVarArgs", ({
  aG: 1,
  D: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  G: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  I: 1,
  H: 1,
  w: 1,
  o: 1,
  ax: 1,
  J: 1,
  B: 1,
  C: 1,
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
$p.eE = (function(len) {
  var x = this.aA.a.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.T = (function() {
  return this.aA.a.length;
});
$p.eF = (function() {
  return "IndexedSeq";
});
$p.i5 = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.he = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.fj = (function() {
  return "ArraySeq";
});
$p.i4 = (function() {
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
$p.eE = (function(len) {
  var x = this.ab.a.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.T = (function() {
  return this.ab.a.length;
});
$p.eF = (function() {
  return "IndexedSeq";
});
$p.fj = (function() {
  return "ArraySeq";
});
$p.m = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.ab.a.length !== other.ab.a.length)) {
      return false;
    }
  }
  return $f_sc_Seq__equals__O__Z(this, other);
});
function $isArrayOf_scm_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.az)));
}
/** @constructor */
function $c_sci_ArraySeq$ofRef(unsafeArray) {
  this.aA = null;
  this.aA = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.D = (function() {
  return this.aA.a.length;
});
$p.L = (function(i) {
  return this.aA.a[i];
});
$p.p = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.jS(this.aA, this$1.f1);
});
$p.m = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().jY(this.aA, that.aA) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.N = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.aA);
});
$p.I = (function(v1) {
  return this.L((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aw)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  aw: 1,
  ch: 1,
  av: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  w: 1,
  o: 1,
  ax: 1,
  D: 1,
  B: 1,
  C: 1,
  J: 1,
  c0: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    return ((i$tailLocal1 === len$1) ? (xs$tailLocal1.M() ? 0 : 1) : (xs$tailLocal1.M() ? (-1) : xs$tailLocal1.gm()));
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.M();
      var bEmpty = b$tailLocal1.M();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.h9();
      }
      if (false) {
        a$tailLocal1.gm();
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
$p.L = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.he = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.eF = (function() {
  return "LinearSeq";
});
$p.M = (function() {
  return (this === $m_sci_Nil$());
});
$p.h7 = (function(f) {
  var these = this;
  while ((!these.M())) {
    f.I(these.h9());
    these.gm();
  }
});
$p.D = (function() {
  var these = this;
  var len = 0;
  while ((!these.M())) {
    len = ((1 + len) | 0);
    these.gm();
  }
  return len;
});
$p.eE = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.fj = (function() {
  return "List";
});
$p.m = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.l5 = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.I = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ay)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.ab = null;
  this.ab = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.D = (function() {
  return this.ab.a.length;
});
$p.L = (function(index) {
  return this.ab.a[index];
});
$p.p = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.jS(this.ab, this$1.f1);
});
$p.m = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().jY(this.ab, that.ab) : $c_scm_ArraySeq.prototype.m.call(this, that));
});
$p.N = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ab);
});
$p.I = (function(v1) {
  return this.L((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aA: 1,
  az: 1,
  K: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  O: 1,
  x: 1,
  L: 1,
  Q: 1,
  P: 1,
  w: 1,
  o: 1,
  N: 1,
  M: 1,
  B: 1,
  C: 1,
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
$p.A = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.s = (function() {
  return 0;
});
$p.x = (function() {
  return "Nil";
});
$p.k = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.h9 = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.gm = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.T = (function() {
  return 0;
});
$p.N = (function() {
  return $m_sc_Iterator$().ay;
});
$p.i8 = (function() {
  this.h9();
});
$p.iw = (function() {
  this.gm();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  cn: 1,
  ay: 1,
  av: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  G: 1,
  I: 1,
  H: 1,
  c8: 1,
  F: 1,
  cl: 1,
  ck: 1,
  B: 1,
  C: 1,
  cc: 1,
  J: 1,
  a: 1,
  cg: 1,
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
  $thiz.ag = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.ag = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.N = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.eE = (function(len) {
  var x = this.ag.D();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.eF = (function() {
  return "IndexedSeq";
});
$p.D = (function() {
  return this.ag.D();
});
$p.T = (function() {
  return this.ag.D();
});
$p.j = (function() {
  return this.ag.Q;
});
$p.M = (function() {
  return (this.ag.D() === 0);
});
$p.L = (function(i) {
  return $bC(this.ag.jU(i));
});
$p.I = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.ag.jU(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  cu: 1,
  K: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  O: 1,
  x: 1,
  L: 1,
  Q: 1,
  P: 1,
  aC: 1,
  aD: 1,
  aB: 1,
  cs: 1,
  w: 1,
  o: 1,
  N: 1,
  M: 1,
  E: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.f0 = null;
  this.f0 = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.eF = (function() {
  return "IndexedSeq";
});
$p.N = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.eE = (function(len) {
  var x = (this.f0.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.L = (function(index) {
  return this.f0[index];
});
$p.D = (function() {
  return (this.f0.length | 0);
});
$p.T = (function() {
  return (this.f0.length | 0);
});
$p.fj = (function() {
  return "WrappedArray";
});
$p.I = (function(v1) {
  var index = (v1 | 0);
  return this.f0[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  d8: 1,
  co: 1,
  K: 1,
  A: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  O: 1,
  x: 1,
  L: 1,
  Q: 1,
  P: 1,
  aC: 1,
  aD: 1,
  ct: 1,
  cq: 1,
  C: 1,
  B: 1,
  M: 1,
  w: 1,
  o: 1,
  N: 1,
  cr: 1,
  aB: 1,
  a: 1
}));
$s_Lsketches_rooms_columns_roomsColumns__main__AT__V(new ($d_T.r().C)([]));
