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
  return (arg0.$classData.Z ? arg0.a7() : $objectClone(arg0));
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
        return null.mz();
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
        return instance.g(x0);
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__equals__O__Z(instance.l, instance.h, x0);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__equals__O__Z(instance.c, x0);
      } else {
        return $c_O.prototype.g.call(instance, x0);
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
        return instance.i();
      } else if ((instance instanceof $Long)) {
        return $f_jl_Long__hashCode__I(instance.l, instance.h);
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance.c);
      } else {
        return $c_O.prototype.i.call(instance);
      }
    }
  }
}
function $dp_indexOf__I__I(instance, x0) {
  if (((typeof instance) === "string")) {
    return $f_T__indexOf__I__I(instance, x0);
  } else {
    return instance.mA(x0);
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
$p.i = (function() {
  return $systemIdentityHashCode(this);
});
$p.g = (function(that) {
  return (this === that);
});
$p.e = (function() {
  var i = this.i();
  return (($objectClassName(this) + "@") + (i >>> 0.0).toString(16));
});
$p.toString = (function() {
  return this.e();
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray((srcPos << 1), (((srcPos + length) | 0) << 1)), (destPos << 1));
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
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
$p.a1 = (function(srcPos, dest, destPos, length) {
  dest.b.set(this.b.subarray(srcPos, ((srcPos + length) | 0)), destPos);
});
$p.a7 = (function() {
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
  $p.a1 = (function(srcPos, dest, destPos, length) {
    $arraycopyGeneric(this.b, srcPos, dest.b, destPos, length);
  });
  $p.a7 = (function() {
    return new ArrayClass(this.b.slice());
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
  this.i3 = null;
  this.k1 = null;
  $n_jl_System$Streams$ = this;
  this.i3 = new $c_jl_JSConsoleBasedPrintStream(false);
  this.k1 = new $c_jl_JSConsoleBasedPrintStream(true);
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
  this.gN = null;
  this.i4 = null;
  $n_jl_System$SystemProperties$ = this;
  this.gN = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
  this.i4 = null;
}
$p = $c_jl_System$SystemProperties$.prototype = new $h_O();
$p.constructor = $c_jl_System$SystemProperties$;
/** @constructor */
function $h_jl_System$SystemProperties$() {
}
$h_jl_System$SystemProperties$.prototype = $p;
$p.jt = (function(key, default$1) {
  if ((this.gN !== null)) {
    var dict = this.gN;
    return ((!(!$m_jl_Utils$Cache$().i6.call(dict, key))) ? dict[key] : default$1);
  } else {
    return this.i4.jt(key, default$1);
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
  this.i6 = null;
  $n_jl_Utils$Cache$ = this;
  this.i6 = Object.prototype.hasOwnProperty;
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
$p.hS = (function(array) {
  return ((array instanceof $ac_O) ? array.b.length : ((array instanceof $ac_Z) ? array.b.length : ((array instanceof $ac_C) ? array.b.length : ((array instanceof $ac_B) ? array.b.length : ((array instanceof $ac_S) ? array.b.length : ((array instanceof $ac_I) ? array.b.length : ((array instanceof $ac_J) ? ((array.b.length >>> 1) | 0) : ((array instanceof $ac_F) ? array.b.length : ((array instanceof $ac_D) ? array.b.length : $p_jl_reflect_Array$__mismatch__O__E(this, array))))))))));
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
$p.kk = (function(a, key) {
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
  return $m_RTLong$().m5(alo, ahi, blo, bhi);
}
function $s_RTLong__remainder__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().m4(alo, ahi, blo, bhi);
}
function $s_RTLong__divideUnsigned__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().kx(alo, ahi, blo, bhi);
}
function $s_RTLong__divide__I__I__I__I__J(alo, ahi, blo, bhi) {
  return $m_RTLong$().kw(alo, ahi, blo, bhi);
}
function $s_RTLong__fromDoubleBits__D__O__J(value, fpBitsDataView) {
  fpBitsDataView.setFloat64(0, value, true);
  var lo = (fpBitsDataView.getInt32(0, true) | 0);
  var hi = (fpBitsDataView.getInt32(4, true) | 0);
  return $bL(lo, hi);
}
function $s_RTLong__fromDouble__D__J(value) {
  return $m_RTLong$().js(value);
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
  return $m_RTLong$().jV(lo, hi);
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
$p.jV = (function(lo, hi) {
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
$p.js = (function(value) {
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
$p.kw = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.gG(rlo, rhi, rlo$1, rhi$1, true);
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
$p.kx = (function(alo, ahi, blo, bhi) {
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
    return this.gG(alo, ahi, blo, bhi, true);
  }
});
$p.m4 = (function(alo, ahi, blo, bhi) {
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
    var $x_1 = this.gG(rlo, rhi, rlo$1, rhi$1, false);
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
$p.m5 = (function(alo, ahi, blo, bhi) {
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
    return this.gG(alo, ahi, blo, bhi, false);
  }
});
$p.gG = (function(alo, ahi, blo, bhi, askQuotient) {
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
$p.jq = (function(xs, ys) {
  if ((xs === ys)) {
    return true;
  }
  if ((xs.b.length !== ys.b.length)) {
    return false;
  }
  var len = xs.b.length;
  var i = 0;
  while ((i < len)) {
    if ((!$m_sr_BoxesRunTime$().a(xs.b[i], ys.b[i]))) {
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
  var it = $thiz.B();
  while (it.v()) {
    f.s(it.r());
  }
}
function $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, sep, end) {
  return (($thiz.I() === 0) ? (("" + start) + end) : $thiz.hL($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end).a2.C);
}
function $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder($thiz, b, start, sep, end) {
  var jsb = b.a2;
  if ((start.length !== 0)) {
    jsb.C = (("" + jsb.C) + start);
  }
  var it = $thiz.B();
  if (it.v()) {
    var obj = it.r();
    jsb.C = (("" + jsb.C) + obj);
    while (it.v()) {
      if ((sep.length !== 0)) {
        jsb.C = (("" + jsb.C) + sep);
      }
      var obj$1 = it.r();
      jsb.C = (("" + jsb.C) + obj$1);
    }
  }
  if ((end.length !== 0)) {
    jsb.C = (("" + jsb.C) + end);
  }
  return b;
}
/** @constructor */
function $c_sc_Iterator$ConcatIteratorCell(head, tail) {
  this.id = null;
  this.fc = null;
  this.id = head;
  this.fc = tail;
}
$p = $c_sc_Iterator$ConcatIteratorCell.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$ConcatIteratorCell;
/** @constructor */
function $h_sc_Iterator$ConcatIteratorCell() {
}
$h_sc_Iterator$ConcatIteratorCell.prototype = $p;
$p.kX = (function() {
  return this.id.f5().B();
});
var $d_sc_Iterator$ConcatIteratorCell = new $TypeData().i($c_sc_Iterator$ConcatIteratorCell, "scala.collection.Iterator$ConcatIteratorCell", ({
  c5: 1
}));
/** @constructor */
function $c_sc_StringOps$() {
  this.ie = null;
  $n_sc_StringOps$ = this;
  this.ie = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((_$1$2) => this.ie));
}
$p = $c_sc_StringOps$.prototype = new $h_O();
$p.constructor = $c_sc_StringOps$;
/** @constructor */
function $h_sc_StringOps$() {
}
$h_sc_StringOps$.prototype = $p;
var $d_sc_StringOps$ = new $TypeData().i($c_sc_StringOps$, "scala.collection.StringOps$", ({
  cd: 1
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
  this.ii = 0;
  $n_sci_IndexedSeqDefaults$ = this;
  try {
    $m_sc_StringOps$();
    var $x_1 = $m_jl_Integer$().l7($m_jl_System$SystemProperties$().jt("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64"), 10, 214748364);
  } catch (e) {
    if (false) {
      var $x_1 = 64;
    } else {
      var $x_1;
      throw e;
    }
  }
  this.ii = $x_1;
}
$p = $c_sci_IndexedSeqDefaults$.prototype = new $h_O();
$p.constructor = $c_sci_IndexedSeqDefaults$;
/** @constructor */
function $h_sci_IndexedSeqDefaults$() {
}
$h_sci_IndexedSeqDefaults$.prototype = $p;
var $d_sci_IndexedSeqDefaults$ = new $TypeData().i($c_sci_IndexedSeqDefaults$, "scala.collection.immutable.IndexedSeqDefaults$", ({
  ci: 1
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
$p.a = (function(x, y) {
  return ((x === y) || ($is_jl_Number(x) ? this.kE(x, y) : ((x instanceof $Char) ? this.kC(x, y) : ((x === null) ? (y === null) : $dp_equals__O__Z(x, y)))));
});
$p.kE = (function(xn, y) {
  if ($is_jl_Number(y)) {
    return this.kD(xn, y);
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
$p.kD = (function(xn, yn) {
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
      return (false && yn.g(x2));
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
      return (false && yn.g($bL(x3$2_$_lo, x3$2_$_hi)));
    }
  } else {
    return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn));
  }
});
$p.kC = (function(xc, y) {
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
$p.ki = (function() {
  throw new $c_jl_AssertionError("assertion failed");
});
$p.gF = (function() {
  throw $ct_jl_NullPointerException__T__(new $c_jl_NullPointerException(), "tried to cast away nullability, but value is null");
});
var $d_sr_Scala3RunTime$ = new $TypeData().i($c_sr_Scala3RunTime$, "scala.runtime.Scala3RunTime$", ({
  cV: 1
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
$p.f6 = (function(xs, idx) {
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
$p.hK = (function(x) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T(x.o(), (x.m() + "("), ",", ")");
});
$p.i1 = (function(xs) {
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
  cW: 1
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
$p.j = (function(hash, data) {
  var h = this.gE(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.gE = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.H = (function(hash, length) {
  return this.kj((hash ^ length));
});
$p.kj = (function(h0) {
  var h = h0;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.lb = (function(lv_$_lo, lv_$_hi) {
  return ((lv_$_hi === (lv_$_lo >> 31)) ? lv_$_lo : (lv_$_lo ^ lv_$_hi));
});
$p.fM = (function(dv) {
  var iv = $doubleToInt(dv);
  if ((iv === dv)) {
    return iv;
  } else {
    var $x_1 = $m_RTLong$().js(dv);
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
$p.x = (function(x) {
  if ((x === null)) {
    return 0;
  } else if (((typeof x) === "number")) {
    return this.fM((+x));
  } else if ((x instanceof $Long)) {
    var $x_1 = $uJ(x);
    return this.lb($x_1.l, $x_1.h);
  } else {
    return $dp_hashCode__I(x);
  }
});
$p.l5 = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
var $d_sr_Statics$ = new $TypeData().i($c_sr_Statics$, "scala.runtime.Statics$", ({
  cY: 1
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
    return $ct_T2__O__O__(new $c_T2(), x, self.er);
  }
  if ((self instanceof $c_T2)) {
    return new $c_T3(x, self.G(), self.F());
  }
  if ((self instanceof $c_T3)) {
    return new $c_T4(x, self.dF, self.ak, self.al);
  }
  if ((self instanceof $c_T4)) {
    return new $c_T5(x, self.dG, self.am, self.an, self.ao);
  }
  if ((self instanceof $c_T5)) {
    return new $c_T6(x, self.eF, self.dH, self.dI, self.dJ, self.dK);
  }
  if ((self instanceof $c_T6)) {
    return new $c_T7(x, self.eG, self.dL, self.dM, self.dN, self.dO, self.dP);
  }
  if ((self instanceof $c_T7)) {
    return new $c_T8(x, self.eH, self.dQ, self.dR, self.dS, self.dT, self.dU, self.dV);
  }
  if ((self instanceof $c_T8)) {
    return new $c_T9(x, self.eI, self.dW, self.dX, self.dY, self.dZ, self.e0, self.e1, self.e2);
  }
  if ((self instanceof $c_T9)) {
    return new $c_T10(x, self.eJ, self.e3, self.e4, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea);
  }
  if ((self instanceof $c_T10)) {
    return new $c_T11(x, self.es, self.aw, self.ax, self.ay, self.az, self.aA, self.aB, self.aC, self.aD, self.av);
  }
  if ((self instanceof $c_T11)) {
    return new $c_T12(x, self.et, self.aG, self.aH, self.aI, self.aJ, self.aK, self.aL, self.aM, self.aN, self.aE, self.aF);
  }
  if ((self instanceof $c_T12)) {
    return new $c_T13(x, self.eu, self.aR, self.aS, self.aT, self.aU, self.aV, self.aW, self.aX, self.aY, self.aO, self.aP, self.aQ);
  }
  if ((self instanceof $c_T13)) {
    return new $c_T14(x, self.ev, self.b3, self.b4, self.b5, self.b6, self.b7, self.b8, self.b9, self.ba, self.aZ, self.b0, self.b1, self.b2);
  }
  if ((self instanceof $c_T14)) {
    return new $c_T15(x, self.ew, self.bg, self.bh, self.bi, self.bj, self.bk, self.bl, self.bm, self.bn, self.bb, self.bc, self.bd, self.be, self.bf);
  }
  if ((self instanceof $c_T15)) {
    return new $c_T16(x, self.ex, self.bu, self.bv, self.bw, self.bx, self.by, self.bz, self.bA, self.bB, self.bo, self.bp, self.bq, self.br, self.bs, self.bt);
  }
  if ((self instanceof $c_T16)) {
    return new $c_T17(x, self.ey, self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bP, self.bQ, self.bC, self.bD, self.bE, self.bF, self.bG, self.bH, self.bI);
  }
  if ((self instanceof $c_T17)) {
    return new $c_T18(x, self.ez, self.bZ, self.c0, self.c1, self.c2, self.c3, self.c4, self.c5, self.c6, self.bR, self.bS, self.bT, self.bU, self.bV, self.bW, self.bX, self.bY);
  }
  if ((self instanceof $c_T18)) {
    return new $c_T19(x, self.eA, self.cg, self.ch, self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.c7, self.c8, self.c9, self.ca, self.cb, self.cc, self.cd, self.ce, self.cf);
  }
  if ((self instanceof $c_T19)) {
    return new $c_T20(x, self.eB, self.cy, self.cz, self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx);
  }
  if ((self instanceof $c_T20)) {
    return new $c_T21(x, self.eC, self.cQ, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cG, self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cR);
  }
  if ((self instanceof $c_T21)) {
    return new $c_T22(x, self.eD, self.d9, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.da, self.db);
  }
  if ((self instanceof $c_T22)) {
    return new $c_sr_TupleXXL(new $ac_O([x, self.eE, self.du, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq, self.dr, self.ds, self.dt, self.dv, self.dw, self.dx]));
  }
  throw new $c_s_MatchError(self);
}
function $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL($thiz, x, xxl) {
  var arr = new $ac_O(((1 + xxl.l()) | 0));
  arr.b[0] = x;
  var src = xxl.D;
  var length = xxl.l();
  src.a1(0, arr, 1, length);
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
      var $x_1 = new $c_T1(self.F());
      break matchResult34$1;
    }
    if ((self instanceof $c_T3)) {
      var $x_1 = $ct_T2__O__O__(new $c_T2(), self.ak, self.al);
      break matchResult34$1;
    }
    if ((self instanceof $c_T4)) {
      var $x_1 = new $c_T3(self.am, self.an, self.ao);
      break matchResult34$1;
    }
    if ((self instanceof $c_T5)) {
      var $x_1 = new $c_T4(self.dH, self.dI, self.dJ, self.dK);
      break matchResult34$1;
    }
    if ((self instanceof $c_T6)) {
      var $x_1 = new $c_T5(self.dL, self.dM, self.dN, self.dO, self.dP);
      break matchResult34$1;
    }
    if ((self instanceof $c_T7)) {
      var $x_1 = new $c_T6(self.dQ, self.dR, self.dS, self.dT, self.dU, self.dV);
      break matchResult34$1;
    }
    if ((self instanceof $c_T8)) {
      var $x_1 = new $c_T7(self.dW, self.dX, self.dY, self.dZ, self.e0, self.e1, self.e2);
      break matchResult34$1;
    }
    if ((self instanceof $c_T9)) {
      var $x_1 = new $c_T8(self.e3, self.e4, self.e5, self.e6, self.e7, self.e8, self.e9, self.ea);
      break matchResult34$1;
    }
    if ((self instanceof $c_T10)) {
      var $x_1 = new $c_T9(self.aw, self.ax, self.ay, self.az, self.aA, self.aB, self.aC, self.aD, self.av);
      break matchResult34$1;
    }
    if ((self instanceof $c_T11)) {
      var $x_1 = new $c_T10(self.aG, self.aH, self.aI, self.aJ, self.aK, self.aL, self.aM, self.aN, self.aE, self.aF);
      break matchResult34$1;
    }
    if ((self instanceof $c_T12)) {
      var $x_1 = new $c_T11(self.aR, self.aS, self.aT, self.aU, self.aV, self.aW, self.aX, self.aY, self.aO, self.aP, self.aQ);
      break matchResult34$1;
    }
    if ((self instanceof $c_T13)) {
      var $x_1 = new $c_T12(self.b3, self.b4, self.b5, self.b6, self.b7, self.b8, self.b9, self.ba, self.aZ, self.b0, self.b1, self.b2);
      break matchResult34$1;
    }
    if ((self instanceof $c_T14)) {
      var $x_1 = new $c_T13(self.bg, self.bh, self.bi, self.bj, self.bk, self.bl, self.bm, self.bn, self.bb, self.bc, self.bd, self.be, self.bf);
      break matchResult34$1;
    }
    if ((self instanceof $c_T15)) {
      var $x_1 = new $c_T14(self.bu, self.bv, self.bw, self.bx, self.by, self.bz, self.bA, self.bB, self.bo, self.bp, self.bq, self.br, self.bs, self.bt);
      break matchResult34$1;
    }
    if ((self instanceof $c_T16)) {
      var $x_1 = new $c_T15(self.bJ, self.bK, self.bL, self.bM, self.bN, self.bO, self.bP, self.bQ, self.bC, self.bD, self.bE, self.bF, self.bG, self.bH, self.bI);
      break matchResult34$1;
    }
    if ((self instanceof $c_T17)) {
      var $x_1 = new $c_T16(self.bZ, self.c0, self.c1, self.c2, self.c3, self.c4, self.c5, self.c6, self.bR, self.bS, self.bT, self.bU, self.bV, self.bW, self.bX, self.bY);
      break matchResult34$1;
    }
    if ((self instanceof $c_T18)) {
      var $x_1 = new $c_T17(self.cg, self.ch, self.ci, self.cj, self.ck, self.cl, self.cm, self.cn, self.c7, self.c8, self.c9, self.ca, self.cb, self.cc, self.cd, self.ce, self.cf);
      break matchResult34$1;
    }
    if ((self instanceof $c_T19)) {
      var $x_1 = new $c_T18(self.cy, self.cz, self.cA, self.cB, self.cC, self.cD, self.cE, self.cF, self.co, self.cp, self.cq, self.cr, self.cs, self.ct, self.cu, self.cv, self.cw, self.cx);
      break matchResult34$1;
    }
    if ((self instanceof $c_T20)) {
      var $x_1 = new $c_T19(self.cQ, self.cS, self.cT, self.cU, self.cV, self.cW, self.cX, self.cY, self.cG, self.cH, self.cI, self.cJ, self.cK, self.cL, self.cM, self.cN, self.cO, self.cP, self.cR);
      break matchResult34$1;
    }
    if ((self instanceof $c_T21)) {
      var $x_1 = new $c_T20(self.d9, self.dc, self.dd, self.de, self.df, self.dg, self.dh, self.di, self.cZ, self.d0, self.d1, self.d2, self.d3, self.d4, self.d5, self.d6, self.d7, self.d8, self.da, self.db);
      break matchResult34$1;
    }
    if ((self instanceof $c_T22)) {
      var $x_1 = new $c_T21(self.du, self.dy, self.dz, self.dA, self.dB, self.dC, self.dD, self.dE, self.dj, self.dk, self.dl, self.dm, self.dn, self.dp, self.dq, self.dr, self.ds, self.dt, self.dv, self.dw, self.dx);
      break matchResult34$1;
    }
    throw new $c_s_MatchError(self);
  }
  return $x_1;
}
function $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product($thiz, xxl) {
  if ((xxl.l() === 23)) {
    var elems = xxl.D;
    return new $c_T22(elems.b[1], elems.b[2], elems.b[3], elems.b[4], elems.b[5], elems.b[6], elems.b[7], elems.b[8], elems.b[9], elems.b[10], elems.b[11], elems.b[12], elems.b[13], elems.b[14], elems.b[15], elems.b[16], elems.b[17], elems.b[18], elems.b[19], elems.b[20], elems.b[21], elems.b[22]);
  } else {
    var arr$1 = new $ac_O(((xxl.D.b.length - 1) | 0));
    var src = xxl.D;
    var length = ((xxl.D.b.length - 1) | 0);
    src.a1(1, arr$1, 0, length);
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
$p.kq = (function(x, self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlCons__O__sr_TupleXXL__sr_TupleXXL(this, x, self) : $p_sr_Tuples$__specialCaseCons__O__s_Product__s_Product(this, x, self));
});
$p.mi = (function(self) {
  return ((self instanceof $c_sr_TupleXXL) ? $p_sr_Tuples$__xxlTail__sr_TupleXXL__s_Product(this, self) : $p_sr_Tuples$__specialCaseTail__s_Product__s_Product(this, self));
});
var $d_sr_Tuples$ = new $TypeData().i($c_sr_Tuples$, "scala.runtime.Tuples$", ({
  cZ: 1
}));
var $n_sr_Tuples$;
function $m_sr_Tuples$() {
  if ((!$n_sr_Tuples$)) {
    $n_sr_Tuples$ = new $c_sr_Tuples$();
  }
  return $n_sr_Tuples$;
}
var $d_sjs_js_Any = new $TypeData().i(2, "scala.scalajs.js.Any", ({
  d0: 1
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
$p.kW = (function(this$, o, p) {
  return (!(!(p in o)));
});
var $d_sjs_js_Any$ObjectCompanionOps$ = new $TypeData().i($c_sjs_js_Any$ObjectCompanionOps$, "scala.scalajs.js.Any$ObjectCompanionOps$", ({
  d2: 1
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
$p.kZ = (function(this$, elem, from) {
  var len = (this$.length | 0);
  var i = from;
  while ((i < len)) {
    if ($m_sr_BoxesRunTime$().a(elem, this$[i])) {
      return i;
    }
    i = ((1 + i) | 0);
  }
  return (-1);
});
$p.jZ = (function(this$, that) {
  var b = [];
  var len = (this$.length | 0);
  var i = 0;
  var it = that.B();
  while (((i < len) && it.v())) {
    b.push($ct_T2__O__O__(new $c_T2(), this$[i], it.r()));
    i = ((1 + i) | 0);
  }
  return b;
});
$p.k0 = (function(this$) {
  var len = (this$.length | 0);
  var b = new Array(len);
  var i = 0;
  while ((i < len)) {
    b[i] = $ct_T2__O__O__(new $c_T2(), this$[i], i);
    i = ((1 + i) | 0);
  }
  return b;
});
var $d_sjs_js_ArrayOps$ = new $TypeData().i($c_sjs_js_ArrayOps$, "scala.scalajs.js.ArrayOps$", ({
  d3: 1
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
$p.c = (function(left, right) {
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
  d4: 1
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
  this.is = null;
  $n_sjs_js_WrappedDictionary$Cache$ = this;
  this.is = Object.prototype.hasOwnProperty;
}
$p = $c_sjs_js_WrappedDictionary$Cache$.prototype = new $h_O();
$p.constructor = $c_sjs_js_WrappedDictionary$Cache$;
/** @constructor */
function $h_sjs_js_WrappedDictionary$Cache$() {
}
$h_sjs_js_WrappedDictionary$Cache$.prototype = $p;
var $d_sjs_js_WrappedDictionary$Cache$ = new $TypeData().i($c_sjs_js_WrappedDictionary$Cache$, "scala.scalajs.js.WrappedDictionary$Cache$", ({
  d8: 1
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
$p.jQ = (function(properties) {
  var result = ({});
  properties.fN(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((pair$2$2) => {
    result[pair$2$2.G()] = pair$2$2.F();
  })));
  return result;
});
var $d_sjs_js_special_package$ = new $TypeData().i($c_sjs_js_special_package$, "scala.scalajs.js.special.package$", ({
  d9: 1
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
$p.md = (function(interval, body) {
  return setTimeout((() => {
    body.f5();
  }), interval);
});
$p.ko = (function(handle) {
  clearTimeout(handle);
});
var $d_sjs_js_timers_package$ = new $TypeData().i($c_sjs_js_timers_package$, "scala.scalajs.js.timers.package$", ({
  da: 1
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
$p.hY = (function(seq) {
  if ((seq instanceof $c_sjsr_WrappedVarArgs)) {
    return seq.gc;
  } else {
    var result = [];
    seq.fN(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((x$2$2) => (result.push(x$2$2) | 0))));
    return result;
  }
});
var $d_sjsr_Compat$ = new $TypeData().i($c_sjsr_Compat$, "scala.scalajs.runtime.Compat$", ({
  db: 1
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
$p.jS = (function(array) {
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
  dc: 1
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
$p.mf = (function(err) {
  var where = ((err.jx() === 0) ? "" : ((err.jx() === 1) ? " after first argument" : ((" after " + err.jx()) + " arguments")));
  var x = ((("Illegal command line" + where) + ": ") + err.mB());
  $m_s_Console$().lS().l8((x + "\n"));
});
var $d_s_util_CommandLineParser$ = new $TypeData().i($c_s_util_CommandLineParser$, "scala.util.CommandLineParser$", ({
  dd: 1
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
  this.gT = null;
  this.gT = init;
}
$p = $c_s_util_DynamicVariable.prototype = new $h_O();
$p.constructor = $c_s_util_DynamicVariable;
/** @constructor */
function $h_s_util_DynamicVariable() {
}
$h_s_util_DynamicVariable.prototype = $p;
$p.e = (function() {
  return (("DynamicVariable(" + this.gT) + ")");
});
var $d_s_util_DynamicVariable = new $TypeData().i($c_s_util_DynamicVariable, "scala.util.DynamicVariable", ({
  df: 1
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
$p.j = (function(hash, data) {
  var h = this.gE(hash, data);
  var i = h;
  h = ((i << 13) | ((i >>> 19) | 0));
  return ((Math.imul(5, h) - 430675100) | 0);
});
$p.gE = (function(hash, data) {
  var k = data;
  k = Math.imul((-862048943), k);
  var i = k;
  k = ((i << 15) | ((i >>> 17) | 0));
  k = Math.imul(461845907, k);
  return (hash ^ k);
});
$p.H = (function(hash, length) {
  return this.g6((hash ^ length));
});
$p.g6 = (function(hash) {
  var h = hash;
  h = (h ^ ((h >>> 16) | 0));
  h = Math.imul((-2048144789), h);
  h = (h ^ ((h >>> 13) | 0));
  h = Math.imul((-1028477387), h);
  h = (h ^ ((h >>> 16) | 0));
  return h;
});
$p.u = (function(x, seed, ignorePrefix) {
  var arr = x.l();
  if ((arr === 0)) {
    return ((!ignorePrefix) ? $f_T__hashCode__I(x.m()) : seed);
  } else {
    var h = seed;
    if ((!ignorePrefix)) {
      h = this.j(h, $f_T__hashCode__I(x.m()));
    }
    var i = 0;
    while ((i < arr)) {
      h = this.j(h, $m_sr_Statics$().x(x.h(i)));
      i = ((1 + i) | 0);
    }
    return this.H(h, arr);
  }
});
$p.km = (function(x, seed, caseClassName) {
  var arr = x.l();
  var aye = $f_T__hashCode__I(((caseClassName !== null) ? caseClassName : x.m()));
  if ((arr === 0)) {
    return aye;
  } else {
    var h = seed;
    h = this.j(h, aye);
    var i = 0;
    while ((i < arr)) {
      h = this.j(h, $m_sr_Statics$().x(x.h(i)));
      i = ((1 + i) | 0);
    }
    return this.H(h, arr);
  }
});
$p.mo = (function(xs, seed) {
  var a = 0;
  var b = 0;
  var n = 0;
  var c = 1;
  var iterator = xs.B();
  while (iterator.v()) {
    var x = iterator.r();
    var h = $m_sr_Statics$().x(x);
    a = ((a + h) | 0);
    b = (b ^ h);
    c = Math.imul(c, (1 | h));
    n = ((1 + n) | 0);
  }
  var h$2 = seed;
  h$2 = this.j(h$2, a);
  h$2 = this.j(h$2, b);
  h$2 = this.gE(h$2, c);
  return this.H(h$2, n);
});
$p.lR = (function(xs, seed) {
  var it = xs.B();
  var h = seed;
  if ((!it.v())) {
    return this.H(h, 0);
  }
  var x0 = it.r();
  if ((!it.v())) {
    return this.H(this.j(h, $m_sr_Statics$().x(x0)), 1);
  }
  var x1 = it.r();
  var initial = $m_sr_Statics$().x(x0);
  h = this.j(h, initial);
  var h0 = h;
  var prev = $m_sr_Statics$().x(x1);
  var rangeDiff = ((prev - initial) | 0);
  var i = 2;
  while (it.v()) {
    h = this.j(h, prev);
    var hash = $m_sr_Statics$().x(it.r());
    if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
      h = this.j(h, hash);
      i = ((1 + i) | 0);
      while (it.v()) {
        h = this.j(h, $m_sr_Statics$().x(it.r()));
        i = ((1 + i) | 0);
      }
      return this.H(h, i);
    }
    prev = hash;
    i = ((1 + i) | 0);
  }
  return this.g6(this.j(this.j(h0, rangeDiff), prev));
});
$p.jo = (function(a, seed) {
  var h = seed;
  var l = $m_jl_reflect_Array$().hS(a);
  switch (l) {
    case 0: {
      return this.H(h, 0);
      break;
    }
    case 1: {
      return this.H(this.j(h, $m_sr_Statics$().x($m_sr_ScalaRunTime$().f6(a, 0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().x($m_sr_ScalaRunTime$().f6(a, 0));
      h = this.j(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().x($m_sr_ScalaRunTime$().f6(a, 1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var hash = $m_sr_Statics$().x($m_sr_ScalaRunTime$().f6(a, i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.j(h, $m_sr_Statics$().x($m_sr_ScalaRunTime$().f6(a, i)));
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.g6(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
$p.m1 = (function(start, step, last, seed) {
  return this.g6(this.j(this.j(this.j(seed, start), step), last));
});
$p.l0 = (function(a, seed) {
  var h = seed;
  var l = a.t();
  switch (l) {
    case 0: {
      return this.H(h, 0);
      break;
    }
    case 1: {
      return this.H(this.j(h, $m_sr_Statics$().x(a.y(0))), 1);
      break;
    }
    default: {
      var initial = $m_sr_Statics$().x(a.y(0));
      h = this.j(h, initial);
      var h0 = h;
      var prev = $m_sr_Statics$().x(a.y(1));
      var rangeDiff = ((prev - initial) | 0);
      var i = 2;
      while ((i < l)) {
        h = this.j(h, prev);
        var hash = $m_sr_Statics$().x(a.y(i));
        if (((rangeDiff !== ((hash - prev) | 0)) || (rangeDiff === 0))) {
          h = this.j(h, hash);
          i = ((1 + i) | 0);
          while ((i < l)) {
            h = this.j(h, $m_sr_Statics$().x(a.y(i)));
            i = ((1 + i) | 0);
          }
          return this.H(h, l);
        }
        prev = hash;
        i = ((1 + i) | 0);
      }
      return this.g6(this.j(this.j(h0, rangeDiff), prev));
    }
  }
});
$p.la = (function(xs, seed) {
  var n = 0;
  var h = seed;
  var rangeState = 0;
  var rangeDiff = 0;
  var prev = 0;
  var initial = 0;
  var elems = xs;
  while ((!elems.z())) {
    elems.gD();
  }
  return ((rangeState === 2) ? this.m1(initial, rangeDiff, prev, seed) : this.H(h, n));
});
function $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form($thiz, p$1, faces) {
  var mesh$proxy1 = $m_Ltrivalibs_graphics_geometry_Mesh$().kf(faces, null, 0, new $c_Ltrivalibs_graphics_geometry_package$package$$anon$1(0));
  var vl = new $c_Ltrivalibs_graphics_geometry_VertexLayout$named(new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$(), new $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons($m_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$(), $m_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$())));
  var f = ((v$3, ref$3) => {
    var values$proxy1 = vl.iy.f8(v$3);
    var baseOffset$proxy1 = (ref$3.off | 0);
    var nestedValues = values$proxy1.h(0);
    var value = nestedValues.h(0);
    ref$3.dv.setFloat32(baseOffset$proxy1, Math.fround(value), true);
    var tailOffset = ((4 + baseOffset$proxy1) | 0);
    var value$2 = nestedValues.h(1);
    ref$3.dv.setFloat32(tailOffset, Math.fround(value$2), true);
    var tailOffset$2 = ((4 + tailOffset) | 0);
    var value$3 = nestedValues.h(2);
    ref$3.dv.setFloat32(tailOffset$2, Math.fround(value$3), true);
    var tailOffset$4 = ((12 + baseOffset$proxy1) | 0);
    var nestedValues$2 = values$proxy1.h(1);
    var value$4 = nestedValues$2.h(0);
    ref$3.dv.setFloat32(tailOffset$4, Math.fround(value$4), true);
    var tailOffset$5 = ((4 + tailOffset$4) | 0);
    var value$5 = nestedValues$2.h(1);
    ref$3.dv.setFloat32(tailOffset$5, Math.fround(value$5), true);
  });
  var \u03b4proxy2 = $m_Ltrivalibs_graphics_geometry_buffers$package$();
  var vertexCount = 0;
  var hasQuads = false;
  var fi = 0;
  while ((fi < (mesh$proxy1.ag.length | 0))) {
    var n = (mesh$proxy1.ag[fi].length | 0);
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
    while ((fi < (mesh$proxy1.ag.length | 0))) {
      var arr = mesh$proxy1.ag[fi];
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
    while ((fi < (mesh$proxy1.ag.length | 0))) {
      var arr$2 = mesh$proxy1.ag[fi];
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
    var $x_1 = new $c_Ltrivalibs_graphics_geometry_BufferedGeometry(verts, \u03b4proxy2.lI(idxBuf, vertexCount));
  }
  return p$1.kK($x_1, (void 0), (void 0), (void 0));
}
function $p_Lsketches_rooms_gridceiling_GridCeiling$package$__texSize$2__D__T2__T2($thiz, texPxPerUnit$1, d) {
  return $ct_T2__O__O__(new $c_T2(), $doubleToInt((d.jk() * texPxPerUnit$1)), $doubleToInt((d.jl() * texPxPerUnit$1)));
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
$p.aj = (function(c, u, v) {
  return $ct_T2__O__O__(new $c_T2(), c, new $c_Ltrivalibs_graphics_math_cpu_Vec2(u, v));
});
$p.kV = (function(props) {
  var step = (props.ae / props.ad);
  var hHalf = ((0.5 * props.ae) - step);
  var count = ((props.ad - 1) | 0);
  var vFull = (count * ((2.0 * props.T) + props.U));
  var vH = (props.T / vFull);
  var vB = (props.U / vFull);
  var startPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), props.ed, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, hHalf));
  var faces = [];
  var vStart = 0.0;
  var i = 0;
  while ((i < count)) {
    var box = $m_Ltrivalibs_graphics_geometry_Box$().jn($f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), startPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, (i * step))), props.af, props.T, props.U);
    var s1 = vStart;
    var f = ((vH, s1) => ((c$2, uvw$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().aj(c$2, uvw$2.p, ((uvw$2.n * vH) + s1))))(vH, s1);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0 = box.gZ;
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    var $x_3 = f(x0, x1);
    var x0$1 = box.fh;
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_2 = f(x0$1, x1$1);
    var x0$2 = box.fi;
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    var $x_1 = f(x0$2, x1$2);
    var x0$3 = box.h0;
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
    faces.push($x_4.ai($x_3, $x_2, $x_1, f(x0$3, x1$3)));
    vStart = (vStart + vH);
    var s2 = vStart;
    var f$1 = ((vH, s2) => ((c$2$1, uvw$2$1) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().aj(c$2$1, (1.0 - uvw$2$1.p), ((uvw$2$1.n * vH) + s2))))(vH, s2);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$4 = box.gY;
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
    var $x_7 = f$1(x0$4, x1$4);
    var x0$5 = box.fg;
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_6 = f$1(x0$5, x1$5);
    var x0$6 = box.ff;
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_5 = f$1(x0$6, x1$6);
    var x0$7 = box.gX;
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    faces.push($x_8.ai($x_7, $x_6, $x_5, f$1(x0$7, x1$7)));
    vStart = (vStart + vH);
    var s3 = vStart;
    var f$2 = ((vB, s3) => ((c$2$2, uvw$2$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().aj(c$2$2, uvw$2$2.p, ((uvw$2$2.q * vB) + s3))))(vB, s3);
    var $x_12 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$8 = box.fh;
    var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_11 = f$2(x0$8, x1$8);
    var x0$9 = box.ff;
    var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_10 = f$2(x0$9, x1$9);
    var x0$10 = box.fg;
    var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_9 = f$2(x0$10, x1$10);
    var x0$11 = box.fi;
    var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    faces.push($x_12.ai($x_11, $x_10, $x_9, f$2(x0$11, x1$11)));
    vStart = (vStart + vB);
    i = ((1 + i) | 0);
  }
  return new $c_Lsketches_rooms_gridceiling_GridData(faces, new $c_T2$mcDD$sp(props.af, vFull));
});
$p.kU = (function(props) {
  var step = (props.af / props.ad);
  var wHalf = ((0.5 * props.af) - step);
  var count = ((props.ad - 1) | 0);
  var vFull = (count * ((2.0 * props.T) + props.U));
  var vH = (props.T / vFull);
  var vB = (props.U / vFull);
  var startPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), props.ed, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(wHalf, 0.0, 0.0));
  var faces = [];
  var vStart = 0.0;
  var i = 0;
  while ((i < count)) {
    var box = $m_Ltrivalibs_graphics_geometry_Box$().jn($f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), startPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), new $c_Ltrivalibs_graphics_math_cpu_Vec3((i * step), 0.0, 0.0)), props.U, props.T, props.ae);
    var s1 = vStart;
    var f = ((vH, s1) => ((c$2, uvw$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().aj(c$2, (1.0 - uvw$2.q), ((uvw$2.n * vH) + s1))))(vH, s1);
    var $x_4 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0 = box.gX;
    var x1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    var $x_3 = f(x0, x1);
    var x0$1 = box.ff;
    var x1$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_2 = f(x0$1, x1$1);
    var x0$2 = box.fh;
    var x1$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_1 = f(x0$2, x1$2);
    var x0$3 = box.gZ;
    var x1$3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    faces.push($x_4.ai($x_3, $x_2, $x_1, f(x0$3, x1$3)));
    vStart = (vStart + vH);
    var s2 = vStart;
    var f$1 = ((vH, s2) => ((c$2$1, uvw$2$1) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().aj(c$2$1, uvw$2$1.q, ((uvw$2$1.n * vH) + s2))))(vH, s2);
    var $x_8 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$4 = box.h0;
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 0.0);
    var $x_7 = f$1(x0$4, x1$4);
    var x0$5 = box.fi;
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    var $x_6 = f$1(x0$5, x1$5);
    var x0$6 = box.fg;
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_5 = f$1(x0$6, x1$6);
    var x0$7 = box.gY;
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 0.0, 1.0);
    faces.push($x_8.ai($x_7, $x_6, $x_5, f$1(x0$7, x1$7)));
    vStart = (vStart + vH);
    var s3 = vStart;
    var f$2 = ((vB, s3) => ((c$2$2, uvw$2$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().aj(c$2$2, uvw$2$2.q, ((uvw$2$2.p * vB) + s3))))(vB, s3);
    var $x_12 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x0$8 = box.fh;
    var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var $x_11 = f$2(x0$8, x1$8);
    var x0$9 = box.ff;
    var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 1.0);
    var $x_10 = f$2(x0$9, x1$9);
    var x0$10 = box.fg;
    var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0);
    var $x_9 = f$2(x0$10, x1$10);
    var x0$11 = box.fi;
    var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 0.0);
    faces.push($x_12.ai($x_11, $x_10, $x_9, f$2(x0$11, x1$11)));
    vStart = (vStart + vB);
    i = ((1 + i) | 0);
  }
  return new $c_Lsketches_rooms_gridceiling_GridData(faces, new $c_T2$mcDD$sp(props.ae, vFull));
});
$p.m7 = (function() {
  var canvas = document.getElementById("canvas");
  $m_Ltrivalibs_graphics_painter_Painter$().l1(canvas, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((p$5) => {
    var gridCenter = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 15.0, 0.0);
    var rowData = $m_Lsketches_rooms_gridceiling_GridCeiling$package$().kV(new $c_Lsketches_rooms_gridceiling_GridProps(20.0, 30.0, $doubleToInt((+Math.floor(22.5))), 0.15, 0.8, gridCenter));
    var colData = $m_Lsketches_rooms_gridceiling_GridCeiling$package$().kU(new $c_Lsketches_rooms_gridceiling_GridProps(20.0, 30.0, 15, 0.15, 0.8, gridCenter));
    var rowForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, rowData.eN);
    var colForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, colData.eN);
    var program = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    var d = ({});
    var ctx = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().K;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().K = reg;
    try {
      var AssignTarget_this = ctx.fA.g7("worldPos");
      var value$proxy1 = ctx.fz.a0("position");
      var x0 = (((("  " + AssignTarget_this.ej) + " = ") + value$proxy1.f) + ";");
      var AssignTarget_this$2 = ctx.fA.hC;
      var value$proxy2 = $m_Ltrivalibs_graphics_math_gpu_vec4$().fK($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().kH(ctx.fz.a0("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ek()), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().s(0.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().s(1.0));
      var $x_1 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0, (((("  " + AssignTarget_this$2.ej) + " = ") + value$proxy2.f) + ";")]), "", "\n", "");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().K = prev;
    }
    program.fy = $x_1;
    var array$1 = reg.f3;
    var len = (array$1.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$1[i]);
      i = ((1 + i) | 0);
    }
    var d$2 = ({});
    var ctx$2 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().K;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().K = reg$2;
    try {
      var n = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("n");
      var $x_5 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
      var $x_4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$();
      var $x_3 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jv();
      var WgslFn$_this = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
      var fn$proxy1 = $m_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$().jf;
      var a1$proxy1 = ctx$2.f4.a0("worldPos");
      var a2$proxy1 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().s(0.0);
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().mm(fn$proxy1);
      var x0$2 = n.hJ($x_5.k7($x_4.kI($x_3.jX($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((WgslFn$_this.lO(fn$proxy1) + "(") + a1$proxy1) + ", ") + a2$proxy1) + ")")))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().s(2.0)));
      var AssignTarget_this$1 = ctx$2.hx.g7("color");
      var value$proxy3 = $m_Ltrivalibs_graphics_math_gpu_vec4$().hN($m_Ltrivalibs_graphics_math_gpu_vec3$().kg($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$().lZ(n, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().s(2.2))), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().s(1.0));
      var $x_2 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$2, (((("  " + AssignTarget_this$1.ej) + " = ") + value$proxy3.f) + ";")]), "", "\n", "");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().K = prev$2;
    }
    program.fx = $x_2;
    var array$3 = reg$2.f3;
    var len$1 = (array$3.length | 0);
    var i$1 = 0;
    while ((i$1 < len$1)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program, array$3[i$1]);
      i$1 = ((1 + i$1) | 0);
    }
    var b = program.fy;
    var b$1 = program.fx;
    var helperFns$proxy1 = program.jw();
    var id = p$5.ee;
    p$5.ee = ((1 + p$5.ee) | 0);
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
    var baseWgsl = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T(sd, $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().c(["position"], $m_sjs_js_ArrayOpsCommon$().c(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], [])), []), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().c(["worldPos"], []), $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], []), $m_sjs_js_ArrayOpsCommon$().c([new $c_T3("position", "position", "vec4<f32>")], [])), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().c(["color"], []), $m_sjs_js_ArrayOpsCommon$().c(["vec4<f32>"], []), []), "", sd.f2, sd.f1);
    var args$proxy1 = $m_sr_ScalaRunTime$().i1(new ($d_sjs_js_Any.r().C)([baseWgsl]));
    console.log(...$m_sjsr_Compat$().hY(args$proxy1));
    var module = p$5.k.createShaderModule(({
      "code": baseWgsl
    }));
    var formats = $m_sjs_js_ArrayOpsCommon$().c(["float32x3"], $m_sjs_js_ArrayOpsCommon$().c(["float32x2"], []));
    var sizes = $m_sjs_js_ArrayOpsCommon$().c([12], $m_sjs_js_ArrayOpsCommon$().c([8], []));
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
    var preRenderShade = new $c_Ltrivalibs_graphics_painter_Shade(id, module, vbl, null, null, $m_Ltrivalibs_graphics_shader_layouts$().hQ(p$5.k, bgls), false, dict, dict$2);
    var rowTexSize = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__texSize$2__D__T2__T2(this, 50.0, rowData.eO);
    var colTexSize = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__texSize$2__D__T2__T2(this, 50.0, colData.eO);
    var shape$1 = p$5.en(rowForm, preRenderShade, "none", (void 0));
    var rowTex = p$5.hV((rowTexSize.G() | 0), (rowTexSize.F() | 0), (void 0), (void 0), (void 0), (void 0), true, (void 0), (void 0), shape$1, (void 0), (void 0), (void 0));
    var shape$2 = p$5.en(colForm, preRenderShade, "none", (void 0));
    var colTex = p$5.hV((colTexSize.G() | 0), (colTexSize.F() | 0), (void 0), (void 0), (void 0), (void 0), true, (void 0), (void 0), shape$2, (void 0), (void 0), (void 0));
    var program$2 = new $c_Ltrivalibs_graphics_shader_dsl_Program();
    var d$1 = ({});
    var ctx$1 = new $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_VertexOut("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().K;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().K = reg$1;
    try {
      var AssignTarget_this$3 = ctx$1.fA.hC;
      var value$proxy4 = $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$().ms(ctx$1.ja.a0("mvp"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().kR(), $m_Ltrivalibs_graphics_math_gpu_vec4$().hN(ctx$1.fz.a0("position"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().s(1.0)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().jv(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$());
      var x0$4 = (((("  " + AssignTarget_this$3.ej) + " = ") + value$proxy4.f) + ";");
      var AssignTarget_this$2$1 = ctx$1.fA.g7("uv");
      var value$proxy5 = ctx$1.fz.a0("uv");
      var $x_6 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$4, (((("  " + AssignTarget_this$2$1.ej) + " = ") + value$proxy5.f) + ";")]), "", "\n", "");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().K = prev$1;
    }
    program$2.fy = $x_6;
    var array$18 = reg$1.f3;
    var len$2 = (array$18.length | 0);
    var i$4 = 0;
    while ((i$4 < len$2)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$18[i$4]);
      i$4 = ((1 + i$4) | 0);
    }
    var d$2$1 = ({});
    var ctx$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx(new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor("in"), new $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor("out"), new $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(""), new $c_Ltrivalibs_graphics_shader_dsl_TypedLocalAccessor(d$2$1), new $c_Ltrivalibs_graphics_shader_dsl_TypedPanelAccessor());
    var reg$2$1 = new $c_Ltrivalibs_graphics_shader_dsl_FnRegistry();
    var prev$2$1 = $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().K;
    $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().K = reg$2$1;
    try {
      var uv = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("uv");
      var col = new $c_Ltrivalibs_graphics_math_gpu_LetExpr("col");
      var x0$6 = uv.hJ($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().kL($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$().k9(ctx$2$1.f4.a0("uv"), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ek(), 40.0), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ek()));
      var x1$3 = col.hJ($m_Ltrivalibs_graphics_math_gpu_expr$package$().m9($m_Ltrivalibs_graphics_math_gpu_vec3$().fK($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ek().gK(ctx$2$1.f4.a0("uv")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ek().jY(ctx$2$1.f4.a0("uv")), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().s(0.5)), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().mx($m_Ltrivalibs_graphics_math_gpu_expr$package$().fK($ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), "tex"), ctx$2$1.f4.a0("uv"), ctx$2$1.j9.a0("samp"))), $m_Ltrivalibs_graphics_math_gpu_expr$package$().kl($m_Ltrivalibs_graphics_math_gpu_expr$package$().jr($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ek().gK(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().s(0.25)), $m_Ltrivalibs_graphics_math_gpu_expr$package$().jr($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().ek().jY(uv), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().s(0.25)))));
      var AssignTarget_this$4 = ctx$2$1.hx.g7("color");
      var value$proxy6 = $m_Ltrivalibs_graphics_math_gpu_vec4$().hN($m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$().lY(col, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().kT(), 2.2), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().s(1.0));
      var $x_7 = $f_sc_IterableOnceOps__mkString__T__T__T__T(new $c_sjsr_WrappedVarArgs([x0$6, x1$3, (((("  " + AssignTarget_this$4.ej) + " = ") + value$proxy6.f) + ";")]), "", "\n", "");
    } finally {
      $m_Ltrivalibs_graphics_shader_dsl_FnRegistry$().K = prev$2$1;
    }
    program$2.fx = $x_7;
    var array$20 = reg$2$1.f3;
    var len$3 = (array$20.length | 0);
    var i$5 = 0;
    while ((i$5 < len$3)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V(program$2, array$20[i$5]);
      i$5 = ((1 + i$5) | 0);
    }
    var b$2 = program$2.fy;
    var b$3 = program$2.fx;
    var helperFns$proxy2 = program$2.jw();
    var id$2 = p$5.ee;
    p$5.ee = ((1 + p$5.ee) | 0);
    var names$3 = $m_sjs_js_ArrayOpsCommon$().c(["mvp"], $m_sjs_js_ArrayOpsCommon$().c(["samp"], []));
    var dict$3 = ({});
    var i$4$1 = 0;
    while ((i$4$1 < (names$3.length | 0))) {
      dict$3[names$3[i$4$1]] = i$4$1;
      i$4$1 = ((1 + i$4$1) | 0);
    }
    var names$4 = $m_sjs_js_ArrayOpsCommon$().c(["tex"], []);
    var dict$4 = ({});
    var i$5$1 = 0;
    while ((i$5$1 < (names$4.length | 0))) {
      dict$4[names$4[i$5$1]] = i$5$1;
      i$5$1 = ((1 + i$5$1) | 0);
    }
    var sd$2 = new $c_Ltrivalibs_graphics_shader_ShaderDef(b$2, b$3, helperFns$proxy2);
    var baseWgsl$2 = $p_Ltrivalibs_graphics_shader_ShaderDef__buildWGSL__T__T__T__T__T__T__T(sd$2, $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexInput", $m_sjs_js_ArrayOpsCommon$().c(["position"], $m_sjs_js_ArrayOpsCommon$().c(["uv"], [])), $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], [])), []), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "VertexOutput", $m_sjs_js_ArrayOpsCommon$().c(["uv"], []), $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], []), $m_sjs_js_ArrayOpsCommon$().c([new $c_T3("position", "position", "vec4<f32>")], [])), $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), "FragmentOutput", $m_sjs_js_ArrayOpsCommon$().c(["color"], []), $m_sjs_js_ArrayOpsCommon$().c(["vec4<f32>"], []), []), $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($m_Ltrivalibs_graphics_shader_derive$(), 0, $m_sjs_js_ArrayOpsCommon$().c(["mvp"], $m_sjs_js_ArrayOpsCommon$().c(["samp"], [])), $m_sjs_js_ArrayOpsCommon$().c([new $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$()).hv.ep()], $m_sjs_js_ArrayOpsCommon$().c([new $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform($m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$()).hu.ep()], []))), sd$2.f2, sd$2.f1);
    var wgsl$2 = (baseWgsl$2 + "\n\n@group(1) @binding(0) var tex: texture_2d<f32>;");
    var args$proxy2 = $m_sr_ScalaRunTime$().i1(new ($d_sjs_js_Any.r().C)([wgsl$2]));
    console.log(...$m_sjsr_Compat$().hY(args$proxy2));
    var module$2 = p$5.k.createShaderModule(({
      "code": wgsl$2
    }));
    var formats$3 = $m_sjs_js_ArrayOpsCommon$().c(["float32x3"], $m_sjs_js_ArrayOpsCommon$().c(["float32x2"], []));
    var sizes$2 = $m_sjs_js_ArrayOpsCommon$().c([12], $m_sjs_js_ArrayOpsCommon$().c([8], []));
    var offsets$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateOffsets__sjs_js_Array__sjs_js_Array($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var stride$2 = $p_Ltrivalibs_graphics_shader_layouts$__calculateStride__sjs_js_Array__I($m_Ltrivalibs_graphics_shader_layouts$(), sizes$2);
    var attributes$2 = [];
    var i$6 = 0;
    while ((i$6 < (formats$3.length | 0))) {
      var value$6 = i$6;
      var value$7 = (offsets$2[i$6] | 0);
      var s$1 = formats$3[i$6];
      attributes$2.push(({
        "shaderLocation": value$6,
        "offset": value$7,
        "format": s$1
      }));
      i$6 = ((1 + i$6) | 0);
    }
    var vbl$2 = ({
      "arrayStride": stride$2,
      "attributes": attributes$2
    });
    var $x_10 = $m_sjs_js_ArrayOpsCommon$();
    var $x_9 = $m_sjs_js_ArrayOpsCommon$();
    var _2 = ({
      "type": "uniform"
    });
    var $x_8 = $m_sjs_js_ArrayOpsCommon$();
    var _2$1 = ({});
    var descriptors = $x_10.c([$x_9.c([({
      "binding": 0,
      "visibility": 1,
      "buffer": _2
    })], $x_8.c([({
      "binding": 1,
      "visibility": 2,
      "sampler": _2$1
    })], []))], []);
    var result = [];
    var len$4 = (descriptors.length | 0);
    var i$7 = 0;
    while ((i$7 < len$4)) {
      var x0$8 = descriptors[i$7];
      (result.push(p$5.k.createBindGroupLayout(({
        "entries": x0$8
      }))) | 0);
      i$7 = ((1 + i$7) | 0);
    }
    var \u03b42$___1 = result;
    var \u03b42$___2 = $m_Ltrivalibs_graphics_shader_layouts$().hQ(p$5.k, result);
    var bgls$3 = \u03b42$___1;
    var $x_11 = $m_sjs_js_ArrayOpsCommon$();
    var _2$2 = ({});
    var entries = $x_11.c([({
      "binding": 0,
      "visibility": 2,
      "texture": _2$2
    })], []);
    var panelBgl$2 = p$5.k.createBindGroupLayout(({
      "entries": entries
    }));
    var allBgls = ((panelBgl$2 !== null) ? $m_sjs_js_ArrayOpsCommon$().c(bgls$3, [panelBgl$2]) : bgls$3);
    var pl$2 = $m_Ltrivalibs_graphics_shader_layouts$().hQ(p$5.k, allBgls);
    var renderShade = new $c_Ltrivalibs_graphics_painter_Shade(id$2, module$2, vbl$2, bgls$3[0], panelBgl$2, pl$2, false, dict$3, dict$4);
    var ul$proxy1 = new $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT($m_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$());
    var uv$proxy1 = ul$proxy1.iv;
    var buffer = new ArrayBuffer(64);
    var arr$proxy4 = new ($a_Ltrivalibs_bufferdata_BufferView())(new DataView(buffer), 1);
    var mvp = new $c_Ltrivalibs_graphics_buffers_BufferBinding(new ($a_Ltrivalibs_bufferdata_BufferView())(arr$proxy4.dv, 0), p$5.k, uv$proxy1);
    var samp = p$5.m8("linear", "linear", "linear");
    var n$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    var center$proxy1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 0.0);
    var f = ((pos$2, uv$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().aj(pos$2, uv$2.as, uv$2.at));
    var uvAtPivot = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
    var n$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), n$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var x = n$1.n;
    if (((+Math.abs(x)) > 0.999)) {
      var up = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    } else {
      var up = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    }
    var uDir = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), up, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$1);
    var uVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), uDir, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 100.0);
    var vVec = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), n$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 100.0);
    var tlPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), center$proxy1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), uVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.as)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), vVec, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot.at));
    var trPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
    var blPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), tlPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec);
    var brPos = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), blPos, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec);
    var $x_15 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x1$4 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
    var $x_14 = f(tlPos, x1$4);
    var x1$5 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
    var $x_13 = f(blPos, x1$5);
    var x1$6 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
    var $x_12 = f(brPos, x1$6);
    var x1$7 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
    var groundFaces = [$x_15.ai($x_14, $x_13, $x_12, f(trPos, x1$7))];
    var n$proxy2 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var center$proxy2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 20.0, 0.0);
    var f$1 = ((pos$2$1, uv$2$1) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().aj(pos$2$1, uv$2$1.as, uv$2$1.at));
    var uvAtPivot$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
    var n$2 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), n$proxy2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var x$1 = n$2.n;
    if (((+Math.abs(x$1)) > 0.999)) {
      var up$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    } else {
      var up$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    }
    var uDir$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), up$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$2);
    var uVec$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), uDir$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 100.0);
    var vVec$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), n$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir$1), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 100.0);
    var tlPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), center$proxy2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), uVec$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot$1.as)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), vVec$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot$1.at));
    var trPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), tlPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec$1);
    var blPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), tlPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec$1);
    var brPos$1 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), blPos$1, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec$1);
    var $x_19 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x1$8 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
    var $x_18 = f$1(tlPos$1, x1$8);
    var x1$9 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
    var $x_17 = f$1(blPos$1, x1$9);
    var x1$10 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
    var $x_16 = f$1(brPos$1, x1$10);
    var x1$11 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
    var roofFaces = [$x_19.ai($x_18, $x_17, $x_16, f$1(trPos$1, x1$11))];
    var n$proxy3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0);
    var center$proxy3 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(15.0, 3.0, 0.0);
    var f$2 = ((pos$2$2, uv$2$2) => $m_Lsketches_rooms_gridceiling_GridCeiling$package$().aj(pos$2$2, uv$2$2.as, uv$2$2.at));
    var uvAtPivot$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.5, 0.5);
    var n$3 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), n$proxy3, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    var x$3 = n$3.n;
    if (((+Math.abs(x$3)) > 0.999)) {
      var up$2 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 0.0, 1.0), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$());
    } else {
      var up$2 = new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 1.0, 0.0);
    }
    var uDir$2 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), up$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), n$3);
    var uVec$2 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), uDir$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 20.5);
    var vVec$2 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), n$3, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uDir$2), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$()), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), 5.0);
    var tlPos$2 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), center$proxy3, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), uVec$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot$2.as)), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), vVec$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uvAtPivot$2.at));
    var trPos$2 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), tlPos$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec$2);
    var blPos$2 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), tlPos$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), vVec$2);
    var brPos$2 = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($m_Ltrivalibs_graphics_math_cpu_Vec3$().d(), blPos$2, $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), uVec$2);
    var $x_23 = $m_Ltrivalibs_graphics_geometry_polygon$package$Quad$();
    var x1$12 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 0.0);
    var $x_22 = f$2(tlPos$2, x1$12);
    var x1$13 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(0.0, 1.0);
    var $x_21 = f$2(blPos$2, x1$13);
    var x1$14 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 1.0);
    var $x_20 = f$2(brPos$2, x1$14);
    var x1$15 = new $c_Ltrivalibs_graphics_math_cpu_Vec2(1.0, 0.0);
    var wallFaces = [$x_23.ai($x_22, $x_21, $x_20, f$2(trPos$2, x1$15))];
    var groundForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, groundFaces);
    var roofForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, roofFaces);
    var wallForm = $p_Lsketches_rooms_gridceiling_GridCeiling$package$__meshForm$1__Ltrivalibs_graphics_painter_Painter__sjs_js_Array__Ltrivalibs_graphics_painter_Form(this, p$5, wallFaces);
    var groundShape = p$5.en(groundForm, renderShade, (void 0), (void 0));
    var roofShape = p$5.en(roofForm, renderShade, (void 0), (void 0));
    var wallShape = p$5.en(wallForm, renderShade, (void 0), (void 0));
    var rowShape = p$5.en(rowForm, renderShade, (void 0), (void 0));
    var Bindable_this = p$5.en(colForm, renderShade, (void 0), (void 0));
    var e1$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", colTex);
    var \u03b4scrutinee141 = e1$proxy1.fj;
    var idx = (Bindable_this.Y.gt.tex | 0);
    while (((Bindable_this.ei.length | 0) <= idx)) {
      Bindable_this.ei.push(null);
    }
    Bindable_this.ei[idx] = new ($a_Ltrivalibs_graphics_painter_PanelBinding())(\u03b4scrutinee141);
    var clearColor$3 = new $c_T4(0.5, 0.6, 0.7, 1.0);
    var shapes$3 = [groundShape, wallShape, roofShape, rowShape, Bindable_this];
    var Panel_this = p$5.hV((void 0), (void 0), clearColor$3, true, true, (void 0), (void 0), (void 0), (void 0), (void 0), shapes$3, (void 0), (void 0));
    var e1$proxy2 = new $c_Ltrivalibs_graphics_painter_BindPair("mvp", mvp);
    var e2$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("samp", samp);
    var e3$proxy1 = new $c_Ltrivalibs_graphics_painter_BindPair("tex", rowTex);
    var \u03b4scrutinee142 = e1$proxy2.fj;
    var dict$proxy1 = Panel_this.eX;
    dict$proxy1.mvp = \u03b4scrutinee142;
    var \u03b4scrutinee143 = e2$proxy1.fj;
    var dict$proxy2 = Panel_this.eX;
    dict$proxy2.samp = \u03b4scrutinee143;
    var \u03b4scrutinee144 = e3$proxy1.fj;
    var dict$proxy3 = Panel_this.eX;
    dict$proxy3.tex = \u03b4scrutinee144;
    var cam = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().kd(0.6, ((canvas.width | 0) / (canvas.height | 0)), 0.1, 100.0, 0.0, 0.0, new $c_Ltrivalibs_graphics_math_cpu_Vec3(0.0, 3.0, 15.0));
    $m_Ltrivalibs_dev_devPreserve$().kh(cam, "camera");
    var input = $m_Ltrivalibs_utils_events_interactive\uff3fcanvas$package$().l4(p$5.eR, true, 400.0, 5.0, true, (void 0));
    var controller = new $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController(1.0, 3.0);
    p$5.lQ(new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2, v2$2) => {
      var cw = (+v1$2);
      var ch = (+v2$2);
      var aspect$2 = (cw / ch);
      var fov$1 = cam.eZ;
      var near$1 = cam.f0;
      var far$1 = cam.eY;
      var rotH$2 = cam.N;
      var rotV$2 = cam.ah;
      var pos$2$3 = cam.E;
      cam.hM(fov$1, aspect$2, near$1, far$1, rotH$2, rotV$2, pos$2$3);
    })));
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, rowTex);
    $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$5, colTex);
    $m_Ltrivalibs_utils_animation_animate$package$().kc(((p$3) => ((arg1$2) => {
      controller.mq(cam, input, (+arg1$2));
      var value$proxy7 = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__matMul__O__Ltrivalibs_graphics_math_Mat4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Mat4$().ju(), cam.ht, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$(), cam.mt());
      var ref = mvp.gV;
      $f_Ltrivalibs_graphics_math_Mat4MutableOps__set__O__Ltrivalibs_graphics_math_Mat4Mutable__O__Ltrivalibs_graphics_math_Mat4Base__V($m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$().kS(), ref, $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$(), value$proxy7, $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
      var $x_25 = mvp.iu.queue;
      var $x_24 = mvp.gW;
      var s$proxy3 = mvp.gV;
      $x_25.writeBuffer($x_24, 0.0, s$proxy3.dv.buffer);
      $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V(p$3, Panel_this);
      p$3.me(Panel_this);
    }))(p$5));
  })));
});
var $d_Lsketches_rooms_gridceiling_GridCeiling$package$ = new $TypeData().i($c_Lsketches_rooms_gridceiling_GridCeiling$package$, "sketches.rooms.gridceiling.GridCeiling$package$", ({
  di: 1
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
    $m_Lsketches_rooms_gridceiling_GridCeiling$package$().m7();
  } catch (e) {
    if (false) {
      $m_s_util_CommandLineParser$().mf(e);
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
  dj: 1
}));
/** @constructor */
function $c_Ltrivalibs_dev_dev$package$() {
  this.eP = null;
  this.gU = false;
  $n_Ltrivalibs_dev_dev$package$ = this;
  this.eP = [];
  this.gU = false;
}
$p = $c_Ltrivalibs_dev_dev$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_dev_dev$package$;
/** @constructor */
function $h_Ltrivalibs_dev_dev$package$() {
}
$h_Ltrivalibs_dev_dev$package$.prototype = $p;
$p.ku = (function() {
  return (import.meta.hot !== (void 0));
});
$p.lJ = (function() {
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
$p.mh = (function(label) {
  return ((("trivalibs:dev:" + $m_Ltrivalibs_dev_dev$package$().lJ()) + ":") + label);
});
$p.hW = (function() {
  return window.sessionStorage;
});
$p.m2 = (function(key) {
  var raw = $m_Ltrivalibs_dev_dev$package$().hW().getItem(key);
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
$p.mw = (function(key, json) {
  $m_Ltrivalibs_dev_dev$package$().hW().setItem(key, JSON.stringify(json));
});
$p.m6 = (function(key) {
  $m_Ltrivalibs_dev_dev$package$().hW().removeItem(key);
});
$p.kA = (function() {
  if ((!$m_Ltrivalibs_dev_dev$package$().gU)) {
    $m_Ltrivalibs_dev_dev$package$().gU = true;
    window.addEventListener("pagehide", ((_$1$2) => {
      var i = 0;
      while ((i < ($m_Ltrivalibs_dev_dev$package$().eP.length | 0))) {
        $m_Ltrivalibs_dev_dev$package$().eP[i].f5();
        i = ((1 + i) | 0);
      }
    }));
  }
});
$p.m3 = (function(flush) {
  $m_Ltrivalibs_dev_dev$package$().kA();
  $m_Ltrivalibs_dev_dev$package$().eP.push(flush);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    var idx = $m_sjs_js_ArrayOps$().kZ($m_Ltrivalibs_dev_dev$package$().eP, flush, 0);
    if ((idx >= 0)) {
      $m_Ltrivalibs_dev_dev$package$().eP.splice(idx, 1);
    }
  }));
});
var $d_Ltrivalibs_dev_dev$package$ = new $TypeData().i($c_Ltrivalibs_dev_dev$package$, "trivalibs.dev.dev$package$", ({
  dk: 1
}));
var $n_Ltrivalibs_dev_dev$package$;
function $m_Ltrivalibs_dev_dev$package$() {
  if ((!$n_Ltrivalibs_dev_dev$package$)) {
    $n_Ltrivalibs_dev_dev$package$ = new $c_Ltrivalibs_dev_dev$package$();
  }
  return $n_Ltrivalibs_dev_dev$package$;
}
function $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any($thiz, cam) {
  return [cam.E.p, cam.E.n, cam.E.q, cam.N, cam.ah];
}
function $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V($thiz, cam, json) {
  if ((!(!Array.isArray(json)))) {
    if (((json.length | 0) >= 5)) {
      var pos$1 = new $c_Ltrivalibs_graphics_math_cpu_Vec3((+json[0]), (+json[1]), (+json[2]));
      var rotH$1 = (+json[3]);
      var rotV$1 = (+json[4]);
      var fov$1 = cam.eZ;
      var aspect$1 = cam.fv;
      var near$1 = cam.f0;
      var far$1 = cam.eY;
      cam.hM(fov$1, aspect$1, near$1, far$1, rotH$1, rotV$1, pos$1);
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
$p.kh = (function(cam, label) {
  if ((!$m_Ltrivalibs_dev_dev$package$().ku())) {
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => (void 0))));
  } else {
    var sk = $m_Ltrivalibs_dev_dev$package$().mh(label);
    var initPos = cam.E;
    var initRotH = cam.N;
    var initRotV = cam.ah;
    var stored = $m_Ltrivalibs_dev_dev$package$().m2(sk);
    if ((stored !== null)) {
      $p_Ltrivalibs_dev_devPreserve$__applyCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any__V(this, cam, stored);
    }
    return new $c_Ltrivalibs_dev_DevHandle(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(((unregister) => (() => {
      unregister.f5();
      $m_Ltrivalibs_dev_dev$package$().m6(sk);
      cam.hM(cam.eZ, cam.fv, cam.f0, cam.eY, initRotH, initRotV, initPos);
    }))($m_Ltrivalibs_dev_dev$package$().m3(new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
      $m_Ltrivalibs_dev_dev$package$().mw(sk, $p_Ltrivalibs_dev_devPreserve$__encodeCam__Ltrivalibs_graphics_scene_PerspectiveCamera__sjs_js_Any(this, cam));
    }))))));
  }
});
var $d_Ltrivalibs_dev_devPreserve$ = new $TypeData().i($c_Ltrivalibs_dev_devPreserve$, "trivalibs.dev.devPreserve$", ({
  dl: 1
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
  this.gV = null;
  this.iu = null;
  this.k3 = null;
  this.gW = null;
  this.gV = buffer;
  this.iu = device;
  this.k3 = uv;
  var b = (buffer.dv.byteLength | 0);
  var value = ((b < 16) ? 16 : b);
  var $x_1 = device.createBuffer(({
    "size": value,
    "usage": 72
  }));
  this.gW = $x_1;
}
$p = $c_Ltrivalibs_graphics_buffers_BufferBinding.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_BufferBinding;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_BufferBinding() {
}
$h_Ltrivalibs_graphics_buffers_BufferBinding.prototype = $p;
function $isArrayOf_Ltrivalibs_graphics_buffers_BufferBinding(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aJ)));
}
var $d_Ltrivalibs_graphics_buffers_BufferBinding = new $TypeData().i($c_Ltrivalibs_graphics_buffers_BufferBinding, "trivalibs.graphics.buffers.BufferBinding", ({
  aJ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Box(center, size, frontTopLeft, frontTopRight, frontBottomLeft, frontBottomRight, backTopLeft, backTopRight, backBottomLeft, backBottomRight) {
  this.gZ = null;
  this.h0 = null;
  this.fh = null;
  this.fi = null;
  this.gX = null;
  this.gY = null;
  this.ff = null;
  this.fg = null;
  this.gZ = frontTopLeft;
  this.h0 = frontTopRight;
  this.fh = frontBottomLeft;
  this.fi = frontBottomRight;
  this.gX = backTopLeft;
  this.gY = backTopRight;
  this.ff = backBottomLeft;
  this.fg = backBottomRight;
}
$p = $c_Ltrivalibs_graphics_geometry_Box.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Box;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Box() {
}
$h_Ltrivalibs_graphics_geometry_Box.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_Box = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box, "trivalibs.graphics.geometry.Box", ({
  dr: 1
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
$p.jn = (function(center, width, height, depth) {
  var hw = (0.5 * width);
  var hh = (0.5 * height);
  var hd = (0.5 * depth);
  var cx = center.p;
  var cy = center.n;
  var cz = center.q;
  return new $c_Ltrivalibs_graphics_geometry_Box(center, new $c_Ltrivalibs_graphics_math_cpu_Vec3(width, height, depth), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz + hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy + hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx - hw), (cy - hh), (cz - hd)), new $c_Ltrivalibs_graphics_math_cpu_Vec3((cx + hw), (cy - hh), (cz - hd)));
});
var $d_Ltrivalibs_graphics_geometry_Box$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Box$, "trivalibs.graphics.geometry.Box$", ({
  ds: 1
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
  this.iw = null;
  this.h1 = null;
  this.iw = vertices;
  this.h1 = indices;
}
$p = $c_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_BufferedGeometry;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_BufferedGeometry() {
}
$h_Ltrivalibs_graphics_geometry_BufferedGeometry.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_BufferedGeometry = new $TypeData().i($c_Ltrivalibs_graphics_geometry_BufferedGeometry, "trivalibs.graphics.geometry.BufferedGeometry", ({
  dt: 1
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
  du: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1) {
  this.h2 = null;
  this.ag = null;
  this.ix = null;
  this.ge = null;
  this.gd = null;
  this.h2 = evidence$1;
  this.ag = [];
  this.ix = [];
  this.ge = [];
  this.gd = ({});
}
$p = $c_Ltrivalibs_graphics_geometry_Mesh.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_Mesh;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_Mesh() {
}
$h_Ltrivalibs_graphics_geometry_Mesh.prototype = $p;
$p.ka = (function(face, normal, section) {
  var faceIdx = (this.ag.length | 0);
  this.ag.push(face);
  this.ix.push(new $c_Ltrivalibs_graphics_geometry_FaceData(normal, section));
  var n = (face.length | 0);
  var slot = 0;
  while ((slot < n)) {
    var v = face[slot];
    var key = $m_Ltrivalibs_graphics_geometry_package$package$().lX(this.h2.jR(v));
    if ($m_sjs_js_Any$ObjectCompanionOps$().kW(Object, this.gd, key)) {
      var $x_2 = this.ge;
      var dict = this.gd;
      if ((!(!(!$m_sjs_js_WrappedDictionary$Cache$().is.call(dict, key))))) {
        throw new $c_ju_NoSuchElementException(("key not found: " + key));
      }
      var $x_1 = $x_2[(dict[key] | 0)];
      $x_1.iB.push(new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot));
    } else {
      var idx = (this.ge.length | 0);
      var dict$1 = this.gd;
      dict$1[key] = idx;
      this.ge.push(new $c_Ltrivalibs_graphics_geometry_VertexPosition(this.h2.jR(v), [new $c_Ltrivalibs_graphics_geometry_PositionFaceRef(faceIdx, slot)]));
    }
    slot = ((1 + slot) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_Mesh = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh, "trivalibs.graphics.geometry.Mesh", ({
  dx: 1
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
$p.kf = (function(faces, normal, section, evidence$1) {
  var m = new $c_Ltrivalibs_graphics_geometry_Mesh(evidence$1);
  $m_Ltrivalibs_graphics_geometry_mesh$package$().kb(m, faces, normal, section, evidence$1);
  return m;
});
var $d_Ltrivalibs_graphics_geometry_Mesh$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_Mesh$, "trivalibs.graphics.geometry.Mesh$", ({
  dy: 1
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
  this.k4 = 0;
  this.k5 = 0;
  this.k4 = faceIndex;
  this.k5 = vertexSlot;
}
$p = $c_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_PositionFaceRef;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_PositionFaceRef() {
}
$h_Ltrivalibs_graphics_geometry_PositionFaceRef.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_PositionFaceRef = new $TypeData().i($c_Ltrivalibs_graphics_geometry_PositionFaceRef, "trivalibs.graphics.geometry.PositionFaceRef", ({
  dA: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexPosition(position, faces) {
  this.iB = null;
  this.iB = faces;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexPosition.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexPosition;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexPosition() {
}
$h_Ltrivalibs_graphics_geometry_VertexPosition.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexPosition = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexPosition, "trivalibs.graphics.geometry.VertexPosition", ({
  dF: 1
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
$p.lI = (function(idxBuf, vertexCount) {
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
  dG: 1
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
$p.kb = (function(m, faces, normal, section, evidence$1) {
  var i = 0;
  while ((i < (faces.length | 0))) {
    m.ka(faces[i], normal, section);
    i = ((1 + i) | 0);
  }
});
var $d_Ltrivalibs_graphics_geometry_mesh$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_mesh$package$, "trivalibs.graphics.geometry.mesh$package$", ({
  dH: 1
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
$p.lX = (function(v) {
  return (((($doubleToInt((10000.0 * v.p)) + ",") + $doubleToInt((10000.0 * v.n))) + ",") + $doubleToInt((10000.0 * v.q)));
});
var $d_Ltrivalibs_graphics_geometry_package$package$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$, "trivalibs.graphics.geometry.package$package$", ({
  dI: 1
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
$p.ai = (function(tl, bl, br, tr) {
  return [tl, bl, br, tr];
});
var $d_Ltrivalibs_graphics_geometry_polygon$package$Quad$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_polygon$package$Quad$, "trivalibs.graphics.geometry.polygon$package$Quad$", ({
  dK: 1
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
  var a00 = (+x$2.fP(m));
  var a01 = (+x$2.fQ(m));
  var a02 = (+x$2.fR(m));
  var a03 = (+x$2.fS(m));
  var a10 = (+x$2.fT(m));
  var a11 = (+x$2.fU(m));
  var a12 = (+x$2.fV(m));
  var a13 = (+x$2.fW(m));
  var a20 = (+x$2.fX(m));
  var a21 = (+x$2.fY(m));
  var a22 = (+x$2.fZ(m));
  var a23 = (+x$2.g0(m));
  var a30 = (+x$2.g1(m));
  var a31 = (+x$2.g2(m));
  var a32 = (+x$2.g3(m));
  var a33 = (+x$2.g4(m));
  var b00 = (+x$2.fP(other));
  var b01 = (+x$2.fQ(other));
  var b02 = (+x$2.fR(other));
  var b03 = (+x$2.fS(other));
  var b10 = (+x$2.fT(other));
  var b11 = (+x$2.fU(other));
  var b12 = (+x$2.fV(other));
  var b13 = (+x$2.fW(other));
  var b20 = (+x$2.fX(other));
  var b21 = (+x$2.fY(other));
  var b22 = (+x$2.fZ(other));
  var b23 = (+x$2.g0(other));
  var b30 = (+x$2.g1(other));
  var b31 = (+x$2.g2(other));
  var b32 = (+x$2.g3(other));
  var b33 = (+x$2.g4(other));
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((((a00 * b00) + (a10 * b01)) + (a20 * b02)) + (a30 * b03)), ((((a01 * b00) + (a11 * b01)) + (a21 * b02)) + (a31 * b03)), ((((a02 * b00) + (a12 * b01)) + (a22 * b02)) + (a32 * b03)), ((((a03 * b00) + (a13 * b01)) + (a23 * b02)) + (a33 * b03)), ((((a00 * b10) + (a10 * b11)) + (a20 * b12)) + (a30 * b13)), ((((a01 * b10) + (a11 * b11)) + (a21 * b12)) + (a31 * b13)), ((((a02 * b10) + (a12 * b11)) + (a22 * b12)) + (a32 * b13)), ((((a03 * b10) + (a13 * b11)) + (a23 * b12)) + (a33 * b13)), ((((a00 * b20) + (a10 * b21)) + (a20 * b22)) + (a30 * b23)), ((((a01 * b20) + (a11 * b21)) + (a21 * b22)) + (a31 * b23)), ((((a02 * b20) + (a12 * b21)) + (a22 * b22)) + (a32 * b23)), ((((a03 * b20) + (a13 * b21)) + (a23 * b22)) + (a33 * b23)), ((((a00 * b30) + (a10 * b31)) + (a20 * b32)) + (a30 * b33)), ((((a01 * b30) + (a11 * b31)) + (a21 * b32)) + (a31 * b33)), ((((a02 * b30) + (a12 * b31)) + (a22 * b32)) + (a32 * b33)), ((((a03 * b30) + (a13 * b31)) + (a23 * b32)) + (a33 * b33)));
}
function $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($thiz, m, x$2) {
  var a00 = (+x$2.fP(m));
  var a01 = (+x$2.fQ(m));
  var a02 = (+x$2.fR(m));
  var a03 = (+x$2.fS(m));
  var a10 = (+x$2.fT(m));
  var a11 = (+x$2.fU(m));
  var a12 = (+x$2.fV(m));
  var a13 = (+x$2.fW(m));
  var a20 = (+x$2.fX(m));
  var a21 = (+x$2.fY(m));
  var a22 = (+x$2.fZ(m));
  var a23 = (+x$2.g0(m));
  var a30 = (+x$2.g1(m));
  var a31 = (+x$2.g2(m));
  var a32 = (+x$2.g3(m));
  var a33 = (+x$2.g4(m));
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
  mb.jy(m, (+x$4.fP(other)));
  mb.jz(m, (+x$4.fQ(other)));
  mb.jA(m, (+x$4.fR(other)));
  mb.jB(m, (+x$4.fS(other)));
  mb.jC(m, (+x$4.fT(other)));
  mb.jD(m, (+x$4.fU(other)));
  mb.jE(m, (+x$4.fV(other)));
  mb.jF(m, (+x$4.fW(other)));
  mb.jG(m, (+x$4.fX(other)));
  mb.jH(m, (+x$4.fY(other)));
  mb.jI(m, (+x$4.fZ(other)));
  mb.jJ(m, (+x$4.g0(other)));
  mb.jK(m, (+x$4.g1(other)));
  mb.jL(m, (+x$4.g2(other)));
  mb.jM(m, (+x$4.g3(other)));
  mb.jN(m, (+x$4.g4(other)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.p + other.p), (v.n + other.n), (v.q + other.q));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__negateVec__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((-v.p), (-v.n), (-v.q));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__subVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.p - other.p), (v.n - other.n), (v.q - other.q));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.p * scalar), (v.n * scalar), (v.q * scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, scalar) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3((v.p / scalar), (v.n / scalar), (v.q / scalar));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__cross__O__Ltrivalibs_graphics_math_Vec3Base__O__O($thiz, v, x$2, other) {
  return new $c_Ltrivalibs_graphics_math_cpu_Vec3(((v.n * other.q) - (v.q * other.n)), ((v.q * other.p) - (v.p * other.q)), ((v.p * other.n) - (v.n * other.p)));
}
function $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__normalize__O__Ltrivalibs_graphics_math_Vec3Base__O($thiz, v, x$2) {
  return $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__divScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($thiz, v, x$2, $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D(x$2, v));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4(m00, m01, m02, m03, m10, m11, m12, m13, m20, m21, m22, m23, m30, m31, m32, m33) {
  this.h3 = 0.0;
  this.h4 = 0.0;
  this.h5 = 0.0;
  this.h6 = 0.0;
  this.h7 = 0.0;
  this.h8 = 0.0;
  this.h9 = 0.0;
  this.ha = 0.0;
  this.hb = 0.0;
  this.hc = 0.0;
  this.hd = 0.0;
  this.he = 0.0;
  this.hf = 0.0;
  this.hg = 0.0;
  this.hh = 0.0;
  this.hi = 0.0;
  this.h3 = m00;
  this.h4 = m01;
  this.h5 = m02;
  this.h6 = m03;
  this.h7 = m10;
  this.h8 = m11;
  this.h9 = m12;
  this.ha = m13;
  this.hb = m20;
  this.hc = m21;
  this.hd = m22;
  this.he = m23;
  this.hf = m30;
  this.hg = m31;
  this.hh = m32;
  this.hi = m33;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Mat4 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4, "trivalibs.graphics.math.cpu.Mat4", ({
  dX: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Quat(x, y, z, w) {
  this.V = 0.0;
  this.a5 = 0.0;
  this.a6 = 0.0;
  this.a4 = 0.0;
  this.V = x;
  this.a5 = y;
  this.a6 = z;
  this.a4 = w;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Quat.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Quat;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Quat() {
}
$h_Ltrivalibs_graphics_math_cpu_Quat.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Quat = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat, "trivalibs.graphics.math.cpu.Quat", ({
  e0: 1
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
$p.kM = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat((+Math.sin(h)), 0.0, 0.0, (+Math.cos(h)));
});
$p.kN = (function(angle) {
  var h = (0.5 * angle);
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(0.0, (+Math.sin(h)), 0.0, (+Math.cos(h)));
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$, "trivalibs.graphics.math.cpu.Quat$", ({
  e1: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_Quat$;
function $m_Ltrivalibs_graphics_math_cpu_Quat$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_Quat$)) {
    $n_Ltrivalibs_graphics_math_cpu_Quat$ = new $c_Ltrivalibs_graphics_math_cpu_Quat$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_Quat$;
}
function $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($thiz, q, x$2, p) {
  return new $c_Ltrivalibs_graphics_math_cpu_Quat(((((q.a4 * p.V) + (q.V * p.a4)) + (q.a5 * p.a6)) - (q.a6 * p.a5)), ((((q.a4 * p.a5) - (q.V * p.a6)) + (q.a5 * p.a4)) + (q.a6 * p.V)), ((((q.a4 * p.a6) + (q.V * p.a5)) - (q.a5 * p.V)) + (q.a6 * p.a4)), ((((q.a4 * p.a4) - (q.V * p.V)) - (q.a5 * p.a5)) - (q.a6 * p.a6)));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec2(x, y) {
  this.as = 0.0;
  this.at = 0.0;
  this.as = x;
  this.at = y;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec2.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec2;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec2() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec2.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec2 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec2, "trivalibs.graphics.math.cpu.Vec2", ({
  e5: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Vec3(x, y, z) {
  this.p = 0.0;
  this.n = 0.0;
  this.q = 0.0;
  this.p = x;
  this.n = y;
  this.q = z;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3.prototype = $p;
var $d_Ltrivalibs_graphics_math_cpu_Vec3 = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3, "trivalibs.graphics.math.cpu.Vec3", ({
  e6: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  this.iH = null;
  this.iI = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
}
$h_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$.prototype = $p;
$p.kS = (function() {
  if ((!this.iI)) {
    this.iH = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$$anon$18();
    this.iI = true;
  }
  return this.iH;
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$", ({
  e9: 1
}));
var $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
function $m_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$() {
  if ((!$n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$)) {
    $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$ = new $c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$();
  }
  return $n_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$;
}
function $ct_Ltrivalibs_graphics_math_gpu_Expr__T__($thiz, wgsl) {
  $thiz.f = wgsl;
  return $thiz;
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_Expr() {
  this.f = null;
}
$p = $c_Ltrivalibs_graphics_math_gpu_Expr.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_Expr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_Expr() {
}
$h_Ltrivalibs_graphics_math_gpu_Expr.prototype = $p;
$p.e = (function() {
  return this.f;
});
var $d_Ltrivalibs_graphics_math_gpu_Expr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_Expr, "trivalibs.graphics.math.gpu.Expr", ({
  aQ: 1
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
$p.fK = (function(tex, uv, sampler) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("textureSample(" + tex.f) + ", ") + sampler.f) + ", ") + uv.f) + ")"));
});
$p.m9 = (function(onFalse, onTrue, cond) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("select(" + onFalse.f) + ", ") + onTrue.f) + ", ") + cond.f) + ")"));
});
$p.kl = (function(cond, other) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + cond.f) + " || ") + other.f) + ")"));
});
$p.jr = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " < ") + b.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_expr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_expr$package$, "trivalibs.graphics.math.gpu.expr$package$", ({
  ed: 1
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
  this.iK = null;
  this.iL = false;
  this.iO = null;
  this.iP = false;
  this.iQ = null;
  this.iR = false;
  this.iS = null;
  this.iT = false;
  this.iM = null;
  this.iN = false;
}
$p = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$() {
}
$h_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$.prototype = $p;
$p.kJ = (function(v) {
  var s = ("" + v);
  return (((($f_T__indexOf__I__I(s, 46) >= 0) || ($f_T__indexOf__I__I(s, 69) >= 0)) || ($f_T__indexOf__I__I(s, 101) >= 0)) ? s : (s + ".0"));
});
$p.O = (function() {
  if ((!this.iL)) {
    this.iK = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1();
    this.iL = true;
  }
  return this.iK;
});
$p.ek = (function() {
  if ((!this.iP)) {
    this.iO = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4();
    this.iP = true;
  }
  return this.iO;
});
$p.kT = (function() {
  if ((!this.iR)) {
    this.iQ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$5();
    this.iR = true;
  }
  return this.iQ;
});
$p.jv = (function() {
  if ((!this.iT)) {
    this.iS = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6();
    this.iT = true;
  }
  return this.iS;
});
$p.kR = (function() {
  if ((!this.iN)) {
    this.iM = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$9();
    this.iN = true;
  }
  return this.iM;
});
$p.mx = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".xyz"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$, "trivalibs.graphics.math.gpu.float_expr$package$", ({
  ee: 1
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
$p.fK = (function(x, y, z) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec3<f32>(" + x.f) + ", ") + y.f) + ", ") + z.f) + ")"));
});
$p.kg = (function(scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("vec3<f32>(" + scalar.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec3$, "trivalibs.graphics.math.gpu.vec3$", ({
  eq: 1
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
$p.hN = (function(xyz, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("vec4<f32>(" + xyz.f) + ", ") + w.f) + ")"));
});
$p.fK = (function(xy, z, w) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((((("vec4<f32>(" + xy.f) + ", ") + z.f) + ", ") + w.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_vec4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_vec4$, "trivalibs.graphics.math.gpu.vec4$", ({
  er: 1
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
  this.fj = null;
  this.fj = value;
}
$p = $c_Ltrivalibs_graphics_painter_BindPair.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_BindPair;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_BindPair() {
}
$h_Ltrivalibs_graphics_painter_BindPair.prototype = $p;
var $d_Ltrivalibs_graphics_painter_BindPair = new $TypeData().i($c_Ltrivalibs_graphics_painter_BindPair, "trivalibs.graphics.painter.BindPair", ({
  es: 1
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
  var $x_1 = $thiz.fk.k;
  var value = (ab.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 24
  }));
  $thiz.fk.W.writeBuffer(buf, 0.0, ab);
  if (($thiz.eQ !== null)) {
    var opt$proxy2 = $thiz.eQ;
    opt$proxy2.destroy();
  }
  $thiz.eQ = buf;
  $thiz.gf = count;
  $thiz.hk = fmt;
}
function $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V($thiz, verts) {
  var $x_1 = $thiz.fk.k;
  var value = (verts.dv.buffer.byteLength | 0);
  var buf = $x_1.createBuffer(({
    "size": value,
    "usage": 40
  }));
  $thiz.fk.W.writeBuffer(buf, 0.0, verts.dv.buffer);
  if (($thiz.fl !== null)) {
    var opt$proxy4 = $thiz.fl;
    opt$proxy4.destroy();
  }
  $thiz.fl = buf;
  $thiz.gg = (verts.off | 0);
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Form(painter) {
  this.fk = null;
  this.fl = null;
  this.gg = 0;
  this.eQ = null;
  this.gf = 0;
  this.hk = null;
  this.hl = null;
  this.hj = null;
  this.fk = painter;
  this.fl = null;
  this.gg = 0;
  this.eQ = null;
  this.gf = 0;
  this.hk = "uint16";
  this.hl = "triangle-list";
  this.hj = "ccw";
}
$p = $c_Ltrivalibs_graphics_painter_Form.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Form;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Form() {
}
$h_Ltrivalibs_graphics_painter_Form.prototype = $p;
$p.mb = (function(geometry, vertices, topology, frontFace) {
  if ((topology !== (void 0))) {
    this.hl = topology;
  }
  if ((frontFace !== (void 0))) {
    this.hj = frontFace;
  }
  if ((geometry !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, geometry.iw);
    if ((geometry.h1 !== null)) {
      $p_Ltrivalibs_graphics_painter_Form__uploadIndices__sjs_js_typedarray_TypedArray__V(this, geometry.h1);
    }
  }
  if ((vertices !== (void 0))) {
    $p_Ltrivalibs_graphics_painter_Form__uploadVertices__Ltrivalibs_bufferdata_BufferView__V(this, vertices);
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Form = new $TypeData().i($c_Ltrivalibs_graphics_painter_Form, "trivalibs.graphics.painter.Form", ({
  eu: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter) {
  this.gh = null;
  this.gh = [];
}
$p = $c_Ltrivalibs_graphics_painter_InstanceList.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_InstanceList;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_InstanceList() {
}
$h_Ltrivalibs_graphics_painter_InstanceList.prototype = $p;
$p.t = (function() {
  return (this.gh.length | 0);
});
var $d_Ltrivalibs_graphics_painter_InstanceList = new $TypeData().i($c_Ltrivalibs_graphics_painter_InstanceList, "trivalibs.graphics.painter.InstanceList", ({
  ev: 1
}));
function $p_Ltrivalibs_graphics_painter_Painter__paintPanel__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var w = $thiz.mu();
  var h = $thiz.kY();
  panel.kB(w, h);
  var msaa = panel.eW;
  var encoder = $thiz.k.createCommandEncoder();
  var panelFormats = panel.hR();
  var colorAttachments = [];
  var t = 0;
  while ((t < panel.mj())) {
    if ((panel.gp !== null)) {
      matchResult6: {
        var \u03b412$;
        var x18 = panel.gp;
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
      var r$2 = (+\u03b412$.dG);
      var g$2 = (+\u03b412$.am);
      var b$2 = (+\u03b412$.an);
      var a$2 = (+\u03b412$.ao);
      if (msaa) {
        var _2 = panel.jP(t);
        var _2$1 = panel.gH(t);
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
        var _2$3 = panel.gH(t);
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
      var _2$5 = panel.jP(t);
      var _2$6 = panel.gH(t);
      var attachment = ({
        "view": _2$5,
        "resolveTarget": _2$6,
        "loadOp": "load",
        "storeOp": "store"
      });
    } else {
      var _2$7 = panel.gH(t);
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
  if (panel.fs) {
    var _2$8 = panel.kt();
    passDesc.depthStencilAttachment = ({
      "view": _2$8,
      "depthLoadOp": "clear",
      "depthStoreOp": "store",
      "depthClearValue": 1.0
    });
  }
  var shapePass = encoder.beginRenderPass(passDesc);
  var i = 0;
  while ((i < (panel.gq.length | 0))) {
    $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, shapePass, panel.gq[i], panel.fs, msaa, panelFormats, panel);
    i = ((1 + i) | 0);
  }
  shapePass.end();
  $thiz.W.submit([encoder.finish()]);
  var srcView = panel.mk();
  var dstView = panel.lW();
  var hasPongLayers = false;
  var curEncoder = null;
  var curPass = null;
  var j = 0;
  while ((j < (panel.au.length | 0))) {
    var layer = panel.au[j];
    var hasPanelLayout = (layer.a8().fu !== null);
    var slot0Manual = ((hasPanelLayout && ((layer.em().length | 0) > 0)) && (layer.em()[0] !== null));
    var needsPingPong = (hasPanelLayout && (!slot0Manual));
    if ((layer.jO() >= 0)) {
      if ((curPass !== null)) {
        curPass.end();
        $thiz.W.submit([curEncoder.finish()]);
        curPass = null;
      }
      var mipDstView = panel.g9(0, layer.jO());
      var mipSrcView = ((layer.lK() >= 0) ? panel.g9(0, layer.lK()) : srcView);
      var enc = $thiz.k.createCommandEncoder();
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
      $thiz.W.submit([enc.finish()]);
    } else if (needsPingPong) {
      hasPongLayers = true;
      if ((curPass !== null)) {
        curPass.end();
        $thiz.W.submit([curEncoder.finish()]);
        curPass = null;
      }
      var enc$2 = $thiz.k.createCommandEncoder();
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
      $thiz.W.submit([enc$2.finish()]);
      var tmp = srcView;
      srcView = dstView;
      dstView = tmp;
    } else {
      if ((curPass === null)) {
        curEncoder = $thiz.k.createCommandEncoder();
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
    $thiz.W.submit([curEncoder.finish()]);
  }
  if (hasPongLayers) {
    panel.fp = srcView;
  } else {
    panel.fp = null;
  }
  var hasMipTargetLayers = false;
  var mi = 0;
  while ((mi < (panel.au.length | 0))) {
    if ((panel.au[mi].jO() >= 0)) {
      hasMipTargetLayers = true;
    }
    mi = ((1 + mi) | 0);
  }
  if (((panel.hU() > 1) && (!hasMipTargetLayers))) {
    $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__blitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.iZ)) {
    $thiz.iY = $thiz.k.createSampler(({
      "magFilter": "nearest",
      "minFilter": "nearest"
    }));
    $thiz.iZ = true;
  }
  return $thiz.iY;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz) {
  if ((!$thiz.iV)) {
    var $x_2 = $thiz.k;
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
    $thiz.iU = $x_1;
    $thiz.iV = true;
  }
  return $thiz.iU;
}
function $p_Ltrivalibs_graphics_painter_Painter__blitPipeline__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz) {
  if ((!$thiz.iX)) {
    var module = $thiz.k.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.k;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pipelineLayout = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_3 = $thiz.k;
    var _2$1 = ({
      "module": module,
      "entryPoint": "vs_main"
    });
    var f$proxy4 = $thiz.eS;
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
    $thiz.iW = $x_2;
    $thiz.iX = true;
  }
  return $thiz.iW;
}
function $p_Ltrivalibs_graphics_painter_Painter__mipBlitSampler__Ltrivalibs_graphics_painter_GPUSampler($thiz) {
  if ((!$thiz.j2)) {
    $thiz.j1 = $thiz.k.createSampler(({
      "magFilter": "linear",
      "minFilter": "linear"
    }));
    $thiz.j2 = true;
  }
  return $thiz.j1;
}
function $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, format) {
  if ((!(!(!(!$thiz.gi.hasOwnProperty(format)))))) {
    return $thiz.gi[format];
  } else {
    var module = $thiz.k.createShaderModule(({
      "code": "\nstruct VsOut {\n  @builtin(position) pos: vec4f,\n  @location(0) uv: vec2f,\n}\n\n@vertex\nfn vs_main(@builtin(vertex_index) vi: u32) -> VsOut {\n  let x = f32((vi << 1u) & 2u) * 2.0 - 1.0;\n  let y = f32(vi & 2u) * 2.0 - 1.0;\n  var out: VsOut;\n  out.pos = vec4f(x, y, 0.0, 1.0);\n  out.uv = vec2f(x * 0.5 + 0.5, 0.5 - y * 0.5);\n  return out;\n}\n\n@group(0) @binding(0) var blit_texture: texture_2d<f32>;\n@group(0) @binding(1) var blit_sampler: sampler;\n\n@fragment\nfn fs_main(in: VsOut) -> @location(0) vec4f {\n  return textureSample(blit_texture, blit_sampler, in.uv);\n}\n"
    }));
    var $x_1 = $thiz.k;
    var _2 = [$p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout($thiz)];
    var pl = $x_1.createPipelineLayout(({
      "bindGroupLayouts": _2
    }));
    var $x_2 = $thiz.k;
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
    $thiz.gi[format] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__generateMipmaps__Ltrivalibs_graphics_painter_Panel__V($thiz, panel) {
  var mipCount = panel.hU();
  if ((mipCount <= 1)) {
    return (void 0);
  }
  var fmt = (((panel.eV.length | 0) > 0) ? panel.eV[0] : $thiz.eS);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getMipBlitPipeline__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, fmt);
  var i = 1;
  while ((i < mipCount)) {
    var srcView = panel.g9(0, ((i - 1) | 0));
    var dstView = panel.g9(0, i);
    var encoder = $thiz.k.createCommandEncoder();
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
    var $x_1 = $thiz.k;
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
    $thiz.W.submit([encoder.finish()]);
    i = ((1 + i) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, bindings, panelBindings) {
  $thiz.M.length = (bindings.length | 0);
  var i = 0;
  while ((i < (bindings.length | 0))) {
    $thiz.M[i] = bindings[i];
    i = ((1 + i) | 0);
  }
  $thiz.A.length = (panelBindings.length | 0);
  var j = 0;
  while ((j < (panelBindings.length | 0))) {
    $thiz.A[j] = panelBindings[j];
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shade, workBindings, workPanelBindings) {
  var dict = panel.eX;
  var keys = Object.keys(dict);
  var i = 0;
  while ((i < (keys.length | 0))) {
    var name = keys[i];
    var value = dict[name];
    if ((!(!(!(!shade.hm.hasOwnProperty(name)))))) {
      var idx = (shade.hm[name] | 0);
      if (((idx >= (workBindings.length | 0)) || (workBindings[idx] === null))) {
        while (((workBindings.length | 0) <= idx)) {
          workBindings.push(null);
        }
        workBindings[idx] = value;
      }
    } else if ((!(!(!(!shade.gt.hasOwnProperty(name)))))) {
      var idx$2 = (shade.gt[name] | 0);
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
  while ((i < (inst.fL().length | 0))) {
    if ((inst.fL()[i] !== null)) {
      while (((workBindings.length | 0) <= i)) {
        workBindings.push(null);
      }
      workBindings[i] = inst.fL()[i];
    }
    i = ((1 + i) | 0);
  }
  var j = 0;
  while ((j < (inst.em().length | 0))) {
    if ((inst.em()[j] !== null)) {
      while (((workPanelBindings.length | 0) <= j)) {
        workPanelBindings.push(null);
      }
      workPanelBindings[j] = inst.em()[j];
    }
    j = ((1 + j) | 0);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel) {
  return ((panel !== null) && ((Object.keys(panel.eX).length | 0) > 0));
}
function $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shade, bindings) {
  if ((((bindings.length | 0) > 0) && (shade.hn !== null))) {
    var entries = [];
    var i = 0;
    while ((i < (bindings.length | 0))) {
      var b = bindings[i];
      if ((b !== null)) {
        entries.push($p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b));
      }
      i = ((1 + i) | 0);
    }
    var $x_1 = $thiz.k;
    var _2 = shade.hn;
    var bg = $x_1.createBindGroup(({
      "layout": _2,
      "entries": entries
    }));
    pass.setBindGroup(0, bg);
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shade, panelBindings, srcView) {
  if ((shade.fu !== null)) {
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
        var view = ((!(!pb.depth)) ? pb.panel.ks() : pb.panel.g9((pb.index | 0), (pb.mipLevel | 0)));
        var value = k;
        entries.push(({
          "binding": value,
          "resource": view
        }));
      }
      k = ((1 + k) | 0);
    }
    if (((entries.length | 0) > 0)) {
      var $x_1 = $thiz.k;
      var _2 = shade.fu;
      var pg = $x_1.createBindGroup(({
        "layout": _2,
        "entries": entries
      }));
      pass.setBindGroup(1, pg);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderShapeOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shape__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, shape, depthTest, multisample, formats, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.eS]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, shape.Y, shape.hp, fmts, depthTest, multisample, shape.X.hl, shape.hq, shape.X.hj);
  pass.setPipeline(pipeline);
  pass.setVertexBuffer(0, shape.X.fl);
  var opt$proxy9 = shape.X.eQ;
  var hasIndex = (opt$proxy9 !== null);
  if (hasIndex) {
    pass.setIndexBuffer(shape.X.eQ, shape.X.hk);
  }
  var instanceCount = shape.hr.t();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.gv, shape.ei);
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.Y, $thiz.M, $thiz.A);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.Y, $thiz.M);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.Y, $thiz.A, null);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.Y, shape.gv);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.Y, shape.ei, null);
    }
    if (hasIndex) {
      pass.drawIndexed(shape.X.gf);
    } else {
      pass.draw(shape.X.gg);
    }
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = shape.hr.gh[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, shape.gv, shape.ei);
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, shape.Y, $thiz.M, $thiz.A);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.M, $thiz.A);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, shape.Y, $thiz.M);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, shape.Y, $thiz.A, null);
      if (hasIndex) {
        pass.drawIndexed(shape.X.gf);
      } else {
        pass.draw(shape.X.gg);
      }
      i = ((1 + i) | 0);
    }
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__renderLayerOnPass__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Layer__Z__Z__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__Ltrivalibs_graphics_painter_Panel__V($thiz, pass, layer, depthTest, multisample, formats, srcView, panel) {
  var fmts = ((formats !== null) ? formats : [$thiz.eS]);
  var pipeline = $p_Ltrivalibs_graphics_painter_Painter__getPipeline__Ltrivalibs_graphics_painter_Shade__Ltrivalibs_graphics_painter_BlendState__sjs_js_Array__Z__Z__T__T__T__Ltrivalibs_graphics_painter_GPURenderPipeline($thiz, layer.a8(), layer.my(), fmts, depthTest, multisample, "triangle-list", "none", "ccw");
  pass.setPipeline(pipeline);
  var instanceCount = layer.l3().t();
  var hasPanelBinds = $p_Ltrivalibs_graphics_painter_Painter__hasPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Z($thiz, panel);
  if ((instanceCount === 0)) {
    if (hasPanelBinds) {
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.fL(), layer.em());
      $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.a8(), $thiz.M, $thiz.A);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.a8(), $thiz.M);
      var effectiveSrcView = (((($thiz.A.length | 0) > 0) && ($thiz.A[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.a8(), $thiz.A, effectiveSrcView);
    } else {
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.a8(), layer.fL());
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.a8(), layer.em(), srcView);
    }
    pass.draw(3);
  } else {
    var i = 0;
    while ((i < instanceCount)) {
      var inst = layer.l3().gh[i];
      $p_Ltrivalibs_graphics_painter_Painter__copyToWork__sjs_js_Array__sjs_js_Array__V($thiz, layer.fL(), layer.em());
      if (hasPanelBinds) {
        $p_Ltrivalibs_graphics_painter_Painter__applyPanelRuntimeBindings__Ltrivalibs_graphics_painter_Panel__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__sjs_js_Array__V($thiz, panel, layer.a8(), $thiz.M, $thiz.A);
      }
      $p_Ltrivalibs_graphics_painter_Painter__applyInstanceBindings__Ltrivalibs_graphics_painter_Instance__sjs_js_Array__sjs_js_Array__V($thiz, inst, $thiz.M, $thiz.A);
      $p_Ltrivalibs_graphics_painter_Painter__setValueBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__V($thiz, pass, layer.a8(), $thiz.M);
      var effectiveSrcView$2 = (((($thiz.A.length | 0) > 0) && ($thiz.A[0] !== null)) ? null : srcView);
      $p_Ltrivalibs_graphics_painter_Painter__setPanelBindGroup__Ltrivalibs_graphics_painter_GPURenderPassEncoder__Ltrivalibs_graphics_painter_Shade__sjs_js_Array__Ltrivalibs_graphics_painter_GPUTextureView__V($thiz, pass, layer.a8(), $thiz.A, effectiveSrcView$2);
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
  var key = ((((((((((((((shade.j3 + "|") + $p_Ltrivalibs_graphics_painter_Painter__blendKeyStr__Ltrivalibs_graphics_painter_BlendState__T($thiz, blendState)) + "|") + formats.join(",")) + "|") + depthTest) + "|") + multisample) + "|") + topology) + "|") + cullMode) + "|") + frontFace);
  if ((!(!(!(!$thiz.gj.hasOwnProperty(key)))))) {
    return $thiz.gj[key];
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
    if ((shade.ho !== null)) {
      var _2 = shade.gu;
      var _2$1 = [shade.ho];
      var vertexDescriptor = ({
        "module": _2,
        "entryPoint": "vs_main",
        "buffers": _2$1
      });
    } else {
      var _2$2 = shade.gu;
      var vertexDescriptor = ({
        "module": _2$2,
        "entryPoint": "vs_main"
      });
    }
    var _2$3 = shade.j4;
    var _2$4 = shade.gu;
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
    var p = $thiz.k.createRenderPipeline(desc);
    $thiz.gj[key] = p;
    return p;
  }
}
function $p_Ltrivalibs_graphics_painter_Painter__bindingEntry__I__O__sjs_js_Dynamic($thiz, i, b) {
  if ((b instanceof $c_Ltrivalibs_graphics_buffers_BufferBinding)) {
    var _2 = b.gW;
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
  this.k = null;
  this.W = null;
  this.eR = null;
  this.j0 = null;
  this.eS = null;
  this.gj = null;
  this.ee = 0;
  this.gk = null;
  this.iY = null;
  this.iZ = false;
  this.iU = null;
  this.iV = false;
  this.iW = null;
  this.iX = false;
  this.j1 = null;
  this.j2 = false;
  this.gi = null;
  this.M = null;
  this.A = null;
  this.k = device;
  this.W = queue;
  this.eR = canvas;
  this.j0 = context;
  this.eS = preferredFormat;
  this.gj = ({});
  this.ee = 0;
  this.gk = [];
  this.gi = ({});
  this.M = [];
  this.A = [];
}
$p = $c_Ltrivalibs_graphics_painter_Painter.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Painter;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Painter() {
}
$h_Ltrivalibs_graphics_painter_Painter.prototype = $p;
$p.lQ = (function(cb) {
  this.gk.push(cb);
  cb.gA((this.eR.width | 0), (this.eR.height | 0));
});
$p.kG = (function(w, h) {
  var k = 0;
  while ((k < (this.gk.length | 0))) {
    this.gk[k].gA(w, h);
    k = ((1 + k) | 0);
  }
});
$p.mu = (function() {
  return (this.eR.width | 0);
});
$p.kY = (function() {
  return (this.eR.height | 0);
});
$p.m8 = (function(magFilter, minFilter, mipmapFilter) {
  return this.k.createSampler(({
    "magFilter": magFilter,
    "minFilter": minFilter,
    "mipmapFilter": mipmapFilter
  }));
});
$p.kK = (function(geometry, vertices, topology, frontFace) {
  return new $c_Ltrivalibs_graphics_painter_Form(this).mb(geometry, vertices, topology, frontFace);
});
$p.en = (function(form, shade, cullMode, blendState) {
  return new $c_Ltrivalibs_graphics_painter_Shape(this, form, shade).mc(cullMode, blendState);
});
$p.hV = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  return new $c_Ltrivalibs_graphics_painter_Panel(this).ma(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers);
});
$p.me = (function(panel) {
  var encoder = this.k.createCommandEncoder();
  var swapChainView = this.j0.getCurrentTexture().createView();
  var _2 = [({
    "view": swapChainView,
    "loadOp": "load",
    "storeOp": "store"
  })];
  var pass = encoder.beginRenderPass(({
    "colorAttachments": _2
  }));
  var $x_1 = this.k;
  var _2$1 = $p_Ltrivalibs_graphics_painter_Painter__blitBindGroupLayout__Ltrivalibs_graphics_painter_GPUBindGroupLayout(this);
  var _2$2 = panel.lT();
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
  this.W.submit([encoder.finish()]);
});
var $d_Ltrivalibs_graphics_painter_Painter = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter, "trivalibs.graphics.painter.Painter", ({
  ew: 1
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
$p.l2 = (function(canvas) {
  var maybeGpu = $m_Ltrivalibs_graphics_painter_WebGPU$().kQ();
  if ((maybeGpu === (void 0))) {
    return Promise.reject(Error("WebGPU is not supported"));
  } else {
    var promise$proxy1 = maybeGpu.requestAdapter();
    var promise$proxy3 = promise$proxy1.then(((value$2) => {
      if ((value$2 === null)) {
        throw new $c_sjs_js_JavaScriptException(Error("Failed to get WebGPU adapter")).ec;
      } else {
        return value$2;
      }
    }));
    var f$proxy11 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((adapter$2) => {
      var promise$proxy2 = adapter$2.requestDevice();
      var f$proxy10 = new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((device$2) => {
        var queue = device$2.queue;
        var context = $m_Ltrivalibs_graphics_painter_WebGPU$().kP(canvas);
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
            painter.kG(rw, rh);
          }
        }));
        observer.observe(canvas);
        return painter;
      }));
      return promise$proxy2.then($m_sjs_js_Any$().fO(f$proxy10));
    }));
    return promise$proxy3.then($m_sjs_js_Any$().fO(f$proxy11));
  }
});
$p.l1 = (function(canvas, setup) {
  var promise$proxy4 = this.l2(canvas);
  return promise$proxy4.then($m_sjs_js_Any$().fO(setup));
});
var $d_Ltrivalibs_graphics_painter_Painter$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_Painter$, "trivalibs.graphics.painter.Painter$", ({
  ex: 1
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
  while ((i < ($thiz.au.length | 0))) {
    if (($thiz.au[i].a8().fu !== null)) {
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
  this.eh = null;
  this.gs = 0;
  this.gr = 0;
  this.gp = null;
  this.fs = false;
  this.eW = false;
  this.ft = 0;
  this.eV = null;
  this.gq = null;
  this.au = null;
  this.eX = null;
  this.eU = null;
  this.eg = null;
  this.go = null;
  this.fq = null;
  this.gn = null;
  this.ef = null;
  this.fm = null;
  this.gl = false;
  this.fo = null;
  this.gm = null;
  this.fp = null;
  this.fr = 0;
  this.fn = 0;
  this.eT = null;
  this.eh = painter;
  this.gs = 0;
  this.gr = 0;
  this.gp = null;
  this.fs = false;
  this.eW = false;
  this.ft = 1;
  this.eV = [];
  this.gq = [];
  this.au = [];
  this.eX = ({});
  this.eU = [];
  this.eg = [];
  this.go = [];
  this.fq = [];
  this.gn = [];
  this.ef = null;
  this.fm = null;
  this.gl = false;
  this.fo = [];
  this.gm = [];
  this.fp = null;
  this.fr = 0;
  this.fn = 0;
  this.eT = ({});
}
$p = $c_Ltrivalibs_graphics_painter_Panel.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Panel;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Panel() {
}
$h_Ltrivalibs_graphics_painter_Panel.prototype = $p;
$p.hU = (function() {
  if ((this.ft === 0)) {
    var a = this.fr;
    var b = this.fn;
    var maxDim = ((a > b) ? a : b);
    if ((maxDim <= 0)) {
      return 1;
    } else {
      var a$1 = maxDim;
      return ((1 + $doubleToInt(((+Math.log(a$1)) / (+Math.log(2.0))))) | 0);
    }
  } else {
    return this.ft;
  }
});
$p.hR = (function() {
  return (((this.eV.length | 0) === 0) ? [this.eh.eS] : this.eV);
});
$p.mj = (function() {
  return (this.hR().length | 0);
});
$p.mk = (function() {
  return this.eg[0];
});
$p.lW = (function() {
  return this.gn[0];
});
$p.kt = (function() {
  return this.fm;
});
$p.lT = (function() {
  return ((this.fp !== null) ? this.fp : this.eg[0]);
});
$p.g9 = (function(index, mipLevel) {
  if ((mipLevel < 0)) {
    var sv = this.go[index];
    return ((sv !== null) ? sv : this.eg[index]);
  } else {
    var key = ((index + "|") + mipLevel);
    if ((!(!(!(!this.eT.hasOwnProperty(key)))))) {
      return this.eT[key];
    } else {
      var view = this.eU[index].createView(({
        "baseMipLevel": mipLevel,
        "mipLevelCount": 1
      }));
      this.eT[key] = view;
      return view;
    }
  }
});
$p.gH = (function(index) {
  return this.eg[index];
});
$p.jP = (function(index) {
  return this.gm[index];
});
$p.ks = (function() {
  if (((!this.gl) && (this.ef !== null))) {
    var opt$proxy5 = this.ef;
    opt$proxy5.destroy();
    var $x_1 = this.eh.k;
    var value = this.fr;
    var value$1 = this.fn;
    var _2 = ({
      "width": value,
      "height": value$1
    });
    var _2$1 = (this.eW ? 4 : 1);
    var depthTex = $x_1.createTexture(({
      "size": _2,
      "format": "depth24plus",
      "usage": 20,
      "sampleCount": _2$1
    }));
    this.ef = depthTex;
    this.fm = depthTex.createView();
    this.gl = true;
  }
  return this.fm;
});
$p.ma = (function(width, height, clearColor, depthTest, multisample, mipLevels, mips, format, formats, shape, shapes, layer, layers) {
  if ((width !== (void 0))) {
    var v = (width | 0);
    this.gs = v;
  }
  if ((height !== (void 0))) {
    var v$1 = (height | 0);
    this.gr = v$1;
  }
  if ((clearColor !== (void 0))) {
    this.gp = clearColor;
  }
  if ((depthTest !== (void 0))) {
    var v$2 = (!(!depthTest));
    this.fs = v$2;
  }
  if ((multisample !== (void 0))) {
    var v$3 = (!(!multisample));
    this.eW = v$3;
  }
  if ((mips !== (void 0))) {
    if ((!(!mips))) {
      this.ft = 0;
    }
  }
  if ((mipLevels !== (void 0))) {
    var v$5 = (mipLevels | 0);
    if ((v$5 > 0)) {
      this.ft = v$5;
    }
  }
  var x = ((formats === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy1$1__O__O(this, format) : formats);
  if ((x !== (void 0))) {
    this.eV = x;
  }
  var x$1 = ((shapes === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy2$1__O__O(this, shape) : shapes);
  if ((x$1 !== (void 0))) {
    this.gq = x$1;
  }
  var x$2 = ((layers === (void 0)) ? $p_Ltrivalibs_graphics_painter_Panel__default$proxy3$1__O__O(this, layer) : layers);
  if ((x$2 !== (void 0))) {
    this.au = x$2;
  }
  return this;
});
$p.kB = (function(canvasW, canvasH) {
  var targetW = ((this.gs === 0) ? canvasW : this.gs);
  var targetH = ((this.gr === 0) ? canvasH : this.gr);
  if (((targetW !== this.fr) || (targetH !== this.fn))) {
    var d = 0;
    while ((d < (this.eU.length | 0))) {
      this.eU[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.fq.length | 0))) {
      this.fq[d].destroy();
      d = ((1 + d) | 0);
    }
    d = 0;
    while ((d < (this.fo.length | 0))) {
      this.fo[d].destroy();
      d = ((1 + d) | 0);
    }
    if ((this.ef !== null)) {
      var opt$proxy7 = this.ef;
      opt$proxy7.destroy();
    }
    this.fr = targetW;
    this.fn = targetH;
    var mipKeys = Object.keys(this.eT);
    var mk = 0;
    while ((mk < (mipKeys.length | 0))) {
      delete this.eT[mipKeys[mk]];
      mk = ((1 + mk) | 0);
    }
    var mipCount = this.hU();
    var fmts = this.hR();
    var hasPong = $p_Ltrivalibs_graphics_painter_Panel__needsPong__Z(this);
    this.eU = [];
    this.eg = [];
    this.go = [];
    this.fq = [];
    this.gn = [];
    this.fo = [];
    this.gm = [];
    var i = 0;
    while ((i < (fmts.length | 0))) {
      var fmt = fmts[i];
      var $x_1 = this.eh.k;
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
      this.eU.push(tex);
      this.eg.push(tex.createView(({
        "baseMipLevel": 0,
        "mipLevelCount": 1
      })));
      this.go.push(((mipCount > 1) ? tex.createView() : null));
      if (hasPong) {
        var $x_2 = this.eh.k;
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
        this.fq.push(pongTex);
        this.gn.push(pongTex.createView(({
          "baseMipLevel": 0,
          "mipLevelCount": 1
        })));
      }
      if (this.eW) {
        var $x_3 = this.eh.k;
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
        this.fo.push(msaaTex);
        this.gm.push(msaaTex.createView());
      }
      i = ((1 + i) | 0);
    }
    if (this.fs) {
      var depthUsage = (this.gl ? 20 : 16);
      var $x_4 = this.eh.k;
      var _2$3 = ({
        "width": targetW,
        "height": targetH
      });
      var _2$4 = (this.eW ? 4 : 1);
      var depthTex = $x_4.createTexture(({
        "size": _2$3,
        "format": "depth24plus",
        "usage": depthUsage,
        "sampleCount": _2$4
      }));
      this.ef = depthTex;
      this.fm = depthTex.createView();
    }
  }
});
var $d_Ltrivalibs_graphics_painter_Panel = new $TypeData().i($c_Ltrivalibs_graphics_painter_Panel, "trivalibs.graphics.painter.Panel", ({
  ey: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shade(id, shaderModule, vertexBufferLayout, valueBindGroupLayout, panelBindGroupLayout, pipelineLayout, isLayer, uniformIndices, panelIndices) {
  this.j3 = 0;
  this.gu = null;
  this.ho = null;
  this.hn = null;
  this.fu = null;
  this.j4 = null;
  this.hm = null;
  this.gt = null;
  this.j3 = id;
  this.gu = shaderModule;
  this.ho = vertexBufferLayout;
  this.hn = valueBindGroupLayout;
  this.fu = panelBindGroupLayout;
  this.j4 = pipelineLayout;
  this.hm = uniformIndices;
  this.gt = panelIndices;
}
$p = $c_Ltrivalibs_graphics_painter_Shade.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shade;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shade() {
}
$h_Ltrivalibs_graphics_painter_Shade.prototype = $p;
var $d_Ltrivalibs_graphics_painter_Shade = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shade, "trivalibs.graphics.painter.Shade", ({
  ez: 1
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
$p.kQ = (function() {
  return window.navigator.gpu;
});
$p.kP = (function(canvas) {
  return canvas.getContext("webgpu");
});
var $d_Ltrivalibs_graphics_painter_WebGPU$ = new $TypeData().i($c_Ltrivalibs_graphics_painter_WebGPU$, "trivalibs.graphics.painter.WebGPU$", ({
  eB: 1
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
  this.hs = 0.0;
  this.j5 = 0.0;
  this.hs = sensitivity;
  this.j5 = speed;
}
$p = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController() {
}
$h_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController.prototype = $p;
$p.mq = (function(cam, input, tpf) {
  var dist = ((this.j5 * tpf) / 1000.0);
  var forward = 0.0;
  if (((input.Z("KeyW") || input.Z("ArrowUp")) || input.gy)) {
    forward = (forward + dist);
  }
  if (((input.Z("KeyS") || input.Z("ArrowDown")) || input.l6(2))) {
    forward = (forward - dist);
  }
  var left = 0.0;
  if ((input.Z("KeyA") || input.Z("ArrowLeft"))) {
    left = (left + dist);
  }
  if ((input.Z("KeyD") || input.Z("ArrowRight"))) {
    left = (left - dist);
  }
  var up = 0.0;
  if (input.Z("Space")) {
    up = (up + dist);
  }
  if ((input.Z("ShiftLeft") || input.Z("ShiftRight"))) {
    up = (up - dist);
  }
  var drag = input.kr();
  var deltaH = (((-(+drag.G())) * this.hs) / 1000.0);
  var deltaV = (((-(+drag.F())) * this.hs) / 1000.0);
  cam.lL(forward, left, up, deltaH, deltaV);
});
var $d_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController = new $TypeData().i($c_Ltrivalibs_graphics_scene_BasicFirstPersonCameraController, "trivalibs.graphics.scene.BasicFirstPersonCameraController", ({
  eC: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, rotH, rotV, pos, proj) {
  this.eZ = 0.0;
  this.fv = 0.0;
  this.f0 = 0.0;
  this.eY = 0.0;
  this.N = 0.0;
  this.ah = 0.0;
  this.E = null;
  this.ht = null;
  this.eZ = fov;
  this.fv = aspect;
  this.f0 = near;
  this.eY = far;
  this.N = rotH;
  this.ah = rotV;
  this.E = pos;
  this.ht = proj;
}
$p = $c_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_PerspectiveCamera;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_PerspectiveCamera() {
}
$h_Ltrivalibs_graphics_scene_PerspectiveCamera.prototype = $p;
$p.hM = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var needsProj = ((((fov !== this.eZ) || (aspect !== this.fv)) || (near !== this.f0)) || (far !== this.eY));
  this.eZ = fov;
  this.fv = aspect;
  this.f0 = near;
  this.eY = far;
  if ((rotH !== this.N)) {
    this.N = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().i0(rotH);
  }
  if ((rotV !== this.ah)) {
    this.ah = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().hZ(rotV);
  }
  this.E = pos;
  if (needsProj) {
    this.ht = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  }
});
$p.lL = (function(forward, left, up, deltaH, deltaV) {
  if ((deltaH !== 0.0)) {
    this.N = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().i0((this.N + deltaH));
  }
  if ((deltaV !== 0.0)) {
    this.ah = $m_Ltrivalibs_graphics_scene_PerspectiveCamera$().hZ((this.ah + deltaV));
  }
  if ((up !== 0.0)) {
    this.E = new $c_Ltrivalibs_graphics_math_cpu_Vec3(this.E.p, (this.E.n + up), this.E.q);
  }
  if ((forward !== 0.0)) {
    var $x_4 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().d();
    var $x_3 = this.E;
    var $x_2 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().d();
    var p$proxy1 = this.N;
    var x$1 = (-(+Math.sin(p$proxy1)));
    var p$proxy2 = this.N;
    this.E = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_4, $x_3, $x_2, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_1, new $c_Ltrivalibs_graphics_math_cpu_Vec3(x$1, 0.0, (-(+Math.cos(p$proxy2)))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), forward));
  }
  if ((left !== 0.0)) {
    var $x_9 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().d();
    var $x_8 = this.E;
    var $x_7 = $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$();
    var $x_6 = $m_Ltrivalibs_graphics_math_cpu_Vec3$().d();
    var p$proxy3 = this.N;
    var $x_5 = Math.cos(p$proxy3);
    var p$proxy4 = this.N;
    this.E = $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__addVec__O__Ltrivalibs_graphics_math_Vec3Base__O__O($x_9, $x_8, $x_7, $f_Ltrivalibs_graphics_math_Vec3ImmutableOps__mulScalar__O__Ltrivalibs_graphics_math_Vec3Base__D__O($x_6, new $c_Ltrivalibs_graphics_math_cpu_Vec3((-(+$x_5)), 0.0, (+Math.sin(p$proxy4))), $m_Ltrivalibs_graphics_math_cpu_Vec3$given\uff3fVec3Mutable\uff3fVec3$(), left));
  }
});
$p.mn = (function() {
  return new $c_Ltrivalibs_graphics_scene_Transform(this.E, $f_Ltrivalibs_graphics_math_cpu_QuatImmutableOps__quatMul__O__Ltrivalibs_graphics_math_Vec4Base__O__O($m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fQuatImmutableOps\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().kN(this.N), $m_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$(), $m_Ltrivalibs_graphics_math_cpu_Quat$().kM(this.ah)), new $c_Ltrivalibs_graphics_math_cpu_Vec3(1.0, 1.0, 1.0));
});
$p.mt = (function() {
  var $x_1 = $m_Ltrivalibs_graphics_math_cpu_Mat4$().ju();
  var t = this.mn();
  return $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__inverse__O__Ltrivalibs_graphics_math_Mat4Base__O($x_1, $m_Ltrivalibs_graphics_math_cpu_Mat4$().kO(t.j8, t.j6, t.j7), $m_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$());
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera, "trivalibs.graphics.scene.PerspectiveCamera", ({
  eD: 1
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
$p.i0 = (function(a) {
  var r = (a % 6.283185307179586);
  return ((r < 0.0) ? (r + 6.283185307179586) : r);
});
$p.hZ = (function(a) {
  return ((a < (-1.5707963267948966)) ? (-1.5707963267948966) : ((a > 1.5707963267948966) ? 1.5707963267948966 : a));
});
$p.kd = (function(fov, aspect, near, far, rotH, rotV, pos) {
  var proj = $f_Ltrivalibs_graphics_math_Mat4ImmutableOps__perspective__D__D__D__D__O($m_Ltrivalibs_graphics_math_cpu_Mat4$(), fov, aspect, near, far);
  return new $c_Ltrivalibs_graphics_scene_PerspectiveCamera(fov, aspect, near, far, this.i0(rotH), this.hZ(rotV), pos, proj);
});
var $d_Ltrivalibs_graphics_scene_PerspectiveCamera$ = new $TypeData().i($c_Ltrivalibs_graphics_scene_PerspectiveCamera$, "trivalibs.graphics.scene.PerspectiveCamera$", ({
  eE: 1
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
  this.j8 = null;
  this.j6 = null;
  this.j7 = null;
  this.j8 = translation;
  this.j6 = rotation;
  this.j7 = scale;
}
$p = $c_Ltrivalibs_graphics_scene_Transform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_scene_Transform;
/** @constructor */
function $h_Ltrivalibs_graphics_scene_Transform() {
}
$h_Ltrivalibs_graphics_scene_Transform.prototype = $p;
var $d_Ltrivalibs_graphics_scene_Transform = new $TypeData().i($c_Ltrivalibs_graphics_scene_Transform, "trivalibs.graphics.scene.Transform", ({
  eF: 1
}));
function $p_Ltrivalibs_graphics_shader_derive$__generateCombinedStructFromLists__T__sjs_js_Array__sjs_js_Array__sjs_js_Array__T($thiz, structName, locNames, locTypes, builtins) {
  var array$1 = $m_sjs_js_ArrayOps$().k0($m_sjs_js_ArrayOps$().jZ(locNames, new $c_sjs_js_WrappedArray(locTypes)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_2 = i;
    var x0 = array$1[i];
    matchResult3: {
      var $x_1;
      if ((x0 !== null)) {
        var x11 = x0.G();
        if ((x11 !== null)) {
          var name = x11.G();
          var typ = x11.F();
          var $x_1 = (((((("  @location(" + (x0.F() | 0)) + ") ") + name) + ": ") + typ) + ",");
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
        var name$1 = x0$1.dF;
        var builtin = x0$1.ak;
        var typ$1 = x0$1.al;
        var $x_3 = (((((("  @builtin(" + builtin) + ") ") + name$1) + ": ") + typ$1) + ",");
        break matchResult4;
      }
      throw new $c_s_MatchError(x0$1);
    }
    res$1[$x_4] = $x_3;
    i$1 = ((1 + i$1) | 0);
  }
  var allFields = $m_sjs_js_ArrayOpsCommon$().c(res, res$1);
  return (((allFields.length | 0) === 0) ? "" : (((("struct " + structName) + " {\n") + allFields.join("\n")) + "\n}"));
}
function $p_Ltrivalibs_graphics_shader_derive$__generateUniformGroupFromLists__I__sjs_js_Array__sjs_js_Array__T($thiz, groupIdx, names, types) {
  var array$1 = $m_sjs_js_ArrayOps$().k0($m_sjs_js_ArrayOps$().jZ(names, new $c_sjs_js_WrappedArray(types)));
  var len = (array$1.length | 0);
  var res = new Array(len);
  var i = 0;
  while ((i < len)) {
    var $x_3 = i;
    var x0 = array$1[i];
    matchResult5: {
      var $x_2;
      if ((x0 !== null)) {
        var x20 = x0.G();
        if ((x20 !== null)) {
          var name = x20.G();
          var typ = x20.F();
          var bindingIdx = (x0.F() | 0);
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
  eI: 1
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
  this.ej = null;
  this.ej = target;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_AssignTarget;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_AssignTarget() {
}
$h_Ltrivalibs_graphics_shader_dsl_AssignTarget.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_AssignTarget = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_AssignTarget, "trivalibs.graphics.shader.dsl.AssignTarget", ({
  eJ: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
  this.hw = null;
  this.f3 = null;
  this.hw = ({});
  this.f3 = [];
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry.prototype = $p;
$p.jW = (function(d) {
  if ((!(!(!(!(!this.hw.hasOwnProperty(d.name))))))) {
    this.hw[d.name] = true;
    var array = d.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      this.jW(array[i]);
      i = ((1 + i) | 0);
    }
    this.f3.push(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry, "trivalibs.graphics.shader.dsl.FnRegistry", ({
  eK: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
  this.K = null;
  this.K = null;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FnRegistry$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FnRegistry$() {
}
$h_Ltrivalibs_graphics_shader_dsl_FnRegistry$.prototype = $p;
$p.mm = (function(d) {
  var r = this.K;
  if ((r !== null)) {
    r.jW(d);
  }
});
var $d_Ltrivalibs_graphics_shader_dsl_FnRegistry$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FnRegistry$, "trivalibs.graphics.shader.dsl.FnRegistry$", ({
  eL: 1
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
  this.f4 = null;
  this.hx = null;
  this.j9 = null;
  this.k6 = null;
  this.f4 = in$1;
  this.hx = out;
  this.j9 = bindings;
  this.k6 = textures;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_FragmentCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_FragmentCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_FragmentCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_FragmentCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_FragmentCtx, "trivalibs.graphics.shader.dsl.FragmentCtx", ({
  eM: 1
}));
function $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, data) {
  if ((!(!(!(!(!$thiz.hy.hasOwnProperty(data.name))))))) {
    var dict = $thiz.hy;
    var key = data.name;
    dict[key] = true;
    var array = data.deps;
    var len = (array.length | 0);
    var i = 0;
    while ((i < len)) {
      $p_Ltrivalibs_graphics_shader_dsl_Program__fnRec__Ltrivalibs_graphics_shader_dsl_WgslFnData__V($thiz, array[i]);
      i = ((1 + i) | 0);
    }
    $thiz.hz.push(data.src);
  }
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_Program() {
  this.fy = null;
  this.fx = null;
  this.hz = null;
  this.hy = null;
  this.fy = "";
  this.fx = "";
  this.hz = [];
  this.hy = ({});
}
$p = $c_Ltrivalibs_graphics_shader_dsl_Program.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_Program;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_Program() {
}
$h_Ltrivalibs_graphics_shader_dsl_Program.prototype = $p;
$p.jw = (function() {
  return this.hz.join("\n\n");
});
var $d_Ltrivalibs_graphics_shader_dsl_Program = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_Program, "trivalibs.graphics.shader.dsl.Program", ({
  eN: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexCtx(in$1, out, bindings, locals, textures) {
  this.fz = null;
  this.fA = null;
  this.ja = null;
  this.fz = in$1;
  this.fA = out;
  this.ja = bindings;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexCtx;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexCtx() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexCtx.prototype = $p;
var $d_Ltrivalibs_graphics_shader_dsl_VertexCtx = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexCtx, "trivalibs.graphics.shader.dsl.VertexCtx", ({
  eS: 1
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
$p.k8 = (function() {
  return [];
});
var $d_Ltrivalibs_graphics_shader_dsl_WgslFnData$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_WgslFnData$, "trivalibs.graphics.shader.dsl.WgslFnData$", ({
  eU: 1
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
$p.lO = (function(fn) {
  return fn.name;
});
$p.eq = (function(fn, ds) {
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
  ds.fN(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((d$3) => {
    if ((!(!(!(!(!seen.hasOwnProperty(d$3.name))))))) {
      seen[d$3.name] = true;
      merged.push(d$3);
    }
  })));
  return new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())(fn.name, fn.src, merged);
});
var $d_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$, "trivalibs.graphics.shader.dsl.fn$package$WgslFn$", ({
  eV: 1
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
$p.hQ = (function(device, bindGroupLayouts) {
  return device.createPipelineLayout(({
    "bindGroupLayouts": bindGroupLayouts
  }));
});
var $d_Ltrivalibs_graphics_shader_layouts$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_layouts$, "trivalibs.graphics.shader.layouts$", ({
  eW: 1
}));
var $n_Ltrivalibs_graphics_shader_layouts$;
function $m_Ltrivalibs_graphics_shader_layouts$() {
  if ((!$n_Ltrivalibs_graphics_shader_layouts$)) {
    $n_Ltrivalibs_graphics_shader_layouts$ = new $c_Ltrivalibs_graphics_shader_layouts$();
  }
  return $n_Ltrivalibs_graphics_shader_layouts$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$() {
  this.jc = null;
  this.jd = null;
  this.je = null;
  this.hD = null;
  this.hE = null;
  this.jf = null;
  $n_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$ = this;
  var names = $m_sjs_js_ArrayOpsCommon$().c(["x"], []);
  var types = $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], []);
  var parts = [];
  var i = 0;
  while ((i < (names.length | 0))) {
    parts.push(((names[i] + ": ") + types[i]));
    i = ((1 + i) | 0);
  }
  var paramList = parts.join(", ");
  var src = (("fn mod289v3f(" + paramList) + ") -> vec3<f32> {\n  return x - floor(x / 289.0) * 289.0;\n}");
  this.jc = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("mod289v3f", src);
  var names$2 = $m_sjs_js_ArrayOpsCommon$().c(["x"], []);
  var types$2 = $m_sjs_js_ArrayOpsCommon$().c(["vec4<f32>"], []);
  var parts$2 = [];
  var i$2 = 0;
  while ((i$2 < (names$2.length | 0))) {
    parts$2.push(((names$2[i$2] + ": ") + types$2[i$2]));
    i$2 = ((1 + i$2) | 0);
  }
  var paramList$2 = parts$2.join(", ");
  var src$2 = (("fn mod289v4f(" + paramList$2) + ") -> vec4<f32> {\n  return x - floor(x / 289.0) * 289.0;\n}");
  this.jd = new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("mod289v4f", src$2);
  var $x_1 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$3 = $m_sjs_js_ArrayOpsCommon$().c(["i"], []);
  var types$3 = $m_sjs_js_ArrayOpsCommon$().c(["vec4<f32>"], []);
  var parts$3 = [];
  var i$3 = 0;
  while ((i$3 < (names$3.length | 0))) {
    parts$3.push(((names$3[i$3] + ": ") + types$3[i$3]));
    i$3 = ((1 + i$3) | 0);
  }
  var paramList$3 = parts$3.join(", ");
  var src$3 = (("fn permute289v4f(" + paramList$3) + ") -> vec4<f32> {\n\n  var im: vec4<f32> = mod289v4f(i);\n  return mod289v4f((im*34.0 + 10.0)*im);\n}");
  this.je = $x_1.eq(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("permute289v4f", src$3), new $c_sjsr_WrappedVarArgs([this.jd]));
  var $x_2 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$4 = $m_sjs_js_ArrayOpsCommon$().c(["pos"], $m_sjs_js_ArrayOpsCommon$().c(["period"], $m_sjs_js_ArrayOpsCommon$().c(["normRot"], [])));
  var types$4 = $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["f32"], [])));
  var parts$4 = [];
  var i$4 = 0;
  while ((i$4 < (names$4.length | 0))) {
    parts$4.push(((names$4[i$4] + ": ") + types$4[i$4]));
    i$4 = ((1 + i$4) | 0);
  }
  var paramList$4 = parts$4.join(", ");
  var src$4 = (("fn tiling_rot_noise_2d(" + paramList$4) + ") -> vec3<f32> {\n\n  let alpha = normRot * 6.28318530718;\n  var uv: vec2<f32>;\n  var f0: vec2<f32>;\n  var i0: vec2<f32>;\n  var i1: vec2<f32>;\n  var i2: vec2<f32>;\n  var o1: vec2<f32>;\n  var v0: vec2<f32>;\n  var v1: vec2<f32>;\n  var v2: vec2<f32>;\n  var x0: vec2<f32>;\n  var x1: vec2<f32>;\n  var x2: vec2<f32>;\n  uv = vec2<f32>(pos.x+pos.y*0.5, pos.y);\n  i0 = floor(uv);\n  f0 = uv - i0;\n  o1 = select(vec2<f32>(0.0,1.0), vec2<f32>(1.0, 0.0), f0.x > f0.y);\n  i1 = i0 + o1;\n  i2 = i0 + vec2<f32>(1.0, 1.0);\n  v0 = vec2<f32>(i0.x - i0.y*0.5, i0.y);\n  v1 = vec2<f32>(v0.x + o1.x - o1.y*0.5, v0.y + o1.y);\n  v2 = vec2<f32>(v0.x + 0.5, v0.y + 1.0);\n  x0 = pos - v0;\n  x1 = pos - v1;\n  x2 = pos - v2;\n  var iu: vec3<f32>;\n  var iv: vec3<f32>;\n  var xw: vec3<f32>;\n  var yw: vec3<f32>;\n  if(any(period > vec2<f32>(0.0, 0.0))) {\n    xw = vec3<f32>(v0.x, v1.x, v2.x);\n    yw = vec3<f32>(v0.y, v1.y, v2.y);\n    if(period.x > 0.0) {\n      xw = xw - floor(vec3<f32>(v0.x, v1.x, v2.x) / period.x) * period.x;\n    }\n    if(period.y > 0.0) {\n      yw = yw - floor(vec3<f32>(v0.y, v1.y, v2.y) / period.y) * period.y;\n    }\n    iu = floor(xw + 0.5*yw + 0.5);\n    iv = floor(yw + 0.5);\n  } else {\n    iu = vec3<f32>(i0.x, i1.x, i2.x);\n    iv = vec3<f32>(i0.y, i1.y, i2.y);\n  }\n  var hash: vec3<f32>;\n  var psi: vec3<f32>;\n  var gx: vec3<f32>;\n  var gy: vec3<f32>;\n  var g0: vec2<f32>;\n  var g1: vec2<f32>;\n  var g2: vec2<f32>;\n  hash = mod289v3f(iu);\n  hash = mod289v3f((hash*51.0 + 2.0)*hash + iv);\n  hash = mod289v3f((hash*34.0 + 10.0)*hash);\n  psi = hash*0.07482 + alpha;\n  gx = cos(psi);\n  gy = sin(psi);\n  g0 = vec2<f32>(gx.x, gy.x);\n  g1 = vec2<f32>(gx.y, gy.y);\n  g2 = vec2<f32>(gx.z, gy.z);\n  var w: vec3<f32>;\n  var w2: vec3<f32>;\n  var w4: vec3<f32>;\n  var gdotx: vec3<f32>;\n  var n: f32;\n  w = 0.8 - vec3<f32>(dot(x0, x0), dot(x1, x1), dot(x2, x2));\n  w = max(w, vec3<f32>(0.0, 0.0, 0.0));\n  w2 = w*w;\n  w4 = w2*w2;\n  gdotx = vec3<f32>(dot(g0, x0), dot(g1, x1), dot(g2, x2));\n  n = 10.9*dot(w4, gdotx);\n  var w3: vec3<f32>;\n  var dw: vec3<f32>;\n  var dn0: vec2<f32>;\n  var dn1: vec2<f32>;\n  var dn2: vec2<f32>;\n  var grad: vec2<f32>;\n  w3 = w2*w;\n  dw = -8.0*w3*gdotx;\n  dn0 = w4.x*g0 + dw.x*x0;\n  dn1 = w4.y*g1 + dw.y*x1;\n  dn2 = w4.z*g2 + dw.z*x2;\n  grad = 10.9*(dn0 + dn1 + dn2);\n  return vec3<f32>(n, grad.x, grad.y);\n}");
  this.hD = $x_2.eq(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_rot_noise_2d", src$4), new $c_sjsr_WrappedVarArgs([this.jc]));
  var $x_3 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$5 = $m_sjs_js_ArrayOpsCommon$().c(["pos"], $m_sjs_js_ArrayOpsCommon$().c(["period"], []));
  var types$5 = $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], []));
  var parts$5 = [];
  var i$5 = 0;
  while ((i$5 < (names$5.length | 0))) {
    parts$5.push(((names$5[i$5] + ": ") + types$5[i$5]));
    i$5 = ((1 + i$5) | 0);
  }
  var paramList$5 = parts$5.join(", ");
  var src$5 = (("fn tiling_noise_2d(" + paramList$5) + ") -> vec3<f32> {\n  return tiling_rot_noise_2d(pos, period, 0.0);\n}");
  $x_3.eq(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_noise_2d", src$5), new $c_sjsr_WrappedVarArgs([this.hD]));
  var $x_4 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$6 = $m_sjs_js_ArrayOpsCommon$().c(["pos"], $m_sjs_js_ArrayOpsCommon$().c(["normRot"], []));
  var types$6 = $m_sjs_js_ArrayOpsCommon$().c(["vec2<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["f32"], []));
  var parts$6 = [];
  var i$6 = 0;
  while ((i$6 < (names$6.length | 0))) {
    parts$6.push(((names$6[i$6] + ": ") + types$6[i$6]));
    i$6 = ((1 + i$6) | 0);
  }
  var paramList$6 = parts$6.join(", ");
  var src$6 = (("fn rot_noise_2d(" + paramList$6) + ") -> vec3<f32> {\n  return tiling_rot_noise_2d(pos, vec2<f32>(0.0, 0.0), normRot);\n}");
  $x_4.eq(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("rot_noise_2d", src$6), new $c_sjsr_WrappedVarArgs([this.hD]));
  var $x_5 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$7 = $m_sjs_js_ArrayOpsCommon$().c(["pos"], $m_sjs_js_ArrayOpsCommon$().c(["period"], $m_sjs_js_ArrayOpsCommon$().c(["normRot"], [])));
  var types$7 = $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["f32"], [])));
  var parts$7 = [];
  var i$7 = 0;
  while ((i$7 < (names$7.length | 0))) {
    parts$7.push(((names$7[i$7] + ": ") + types$7[i$7]));
    i$7 = ((1 + i$7) | 0);
  }
  var paramList$7 = parts$7.join(", ");
  var src$7 = (("fn tiling_rot_noise_3d(" + paramList$7) + ") -> vec4<f32> {\n\n  let alpha = normRot * 6.28318530718;\n  let M = mat3x3<f32>(0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0, 0.0);\n  let Mi = mat3x3<f32>(-0.5, 0.5, 0.5, 0.5,-0.5, 0.5, 0.5, 0.5,-0.5);\n  var uvw: vec3<f32>;\n  var i0: vec3<f32>;\n  var i1: vec3<f32>;\n  var i2: vec3<f32>;\n  var i3: vec3<f32>;\n  var f0: vec3<f32>;\n  var gt_: vec3<f32>;\n  var lt_: vec3<f32>;\n  var gt: vec3<f32>;\n  var lt: vec3<f32>;\n  var o1: vec3<f32>;\n  var o2: vec3<f32>;\n  var v0: vec3<f32>;\n  var v1: vec3<f32>;\n  var v2: vec3<f32>;\n  var v3: vec3<f32>;\n  var x0: vec3<f32>;\n  var x1: vec3<f32>;\n  var x2: vec3<f32>;\n  var x3: vec3<f32>;\n  uvw = M * pos;\n  i0 = floor(uvw);\n  f0 = uvw - i0;\n  gt_ = step(f0.xyx, f0.yzz);\n  lt_ = 1.0 - gt_;\n  gt = vec3<f32>(lt_.z, gt_.xy);\n  lt = vec3<f32>(lt_.xy, gt_.z);\n  o1 = min(gt, lt);\n  o2 = max(gt, lt);\n  i1 = i0 + o1;\n  i2 = i0 + o2;\n  i3 = i0 + vec3<f32>(1.0, 1.0, 1.0);\n  v0 = Mi * i0;\n  v1 = Mi * i1;\n  v2 = Mi * i2;\n  v3 = Mi * i3;\n  x0 = pos - v0;\n  x1 = pos - v1;\n  x2 = pos - v2;\n  x3 = pos - v3;\n  var vx: vec4<f32>;\n  var vy: vec4<f32>;\n  var vz: vec4<f32>;\n  if(any(period > vec3<f32>(0.0))) {\n    vx = vec4<f32>(v0.x, v1.x, v2.x, v3.x);\n    vy = vec4<f32>(v0.y, v1.y, v2.y, v3.y);\n    vz = vec4<f32>(v0.z, v1.z, v2.z, v3.z);\n    if(period.x > 0.0) {\n      vx = vx - floor(vx / period.x) * period.x;\n    }\n    if(period.y > 0.0) {\n      vy = vy - floor(vy / period.y) * period.y;\n    }\n    if(period.z > 0.0) {\n      vz = vz - floor(vz / period.z) * period.z;\n    }\n    i0 = floor(M * vec3<f32>(vx.x, vy.x, vz.x) + 0.5);\n    i1 = floor(M * vec3<f32>(vx.y, vy.y, vz.y) + 0.5);\n    i2 = floor(M * vec3<f32>(vx.z, vy.z, vz.z) + 0.5);\n    i3 = floor(M * vec3<f32>(vx.w, vy.w, vz.w) + 0.5);\n  }\n  var hash: vec4<f32>;\n  var theta: vec4<f32>;\n  var sz: vec4<f32>;\n  var psi: vec4<f32>;\n  var St: vec4<f32>;\n  var Ct: vec4<f32>;\n  var sz_: vec4<f32>;\n  hash = permute289v4f(permute289v4f(permute289v4f(\n    vec4<f32>(i0.z, i1.z, i2.z, i3.z))\n    + vec4<f32>(i0.y, i1.y, i2.y, i3.y))\n    + vec4<f32>(i0.x, i1.x, i2.x, i3.x));\n  theta = hash * 3.883222077;\n  sz = hash * -0.006920415 + 0.996539792;\n  psi = hash * 0.108705628;\n  Ct = cos(theta);\n  St = sin(theta);\n  sz_ = sqrt(1.0 - sz*sz);\n  var gx: vec4<f32>;\n  var gy: vec4<f32>;\n  var gz: vec4<f32>;\n  var px: vec4<f32>;\n  var py: vec4<f32>;\n  var pz: vec4<f32>;\n  var Sp: vec4<f32>;\n  var Cp: vec4<f32>;\n  var Ctp: vec4<f32>;\n  var qx: vec4<f32>;\n  var qy: vec4<f32>;\n  var qz: vec4<f32>;\n  var Sa: vec4<f32>;\n  var Ca: vec4<f32>;\n  if(alpha != 0.0) {\n    px = Ct * sz_;\n    py = St * sz_;\n    pz = sz;\n    Sp = sin(psi);\n    Cp = cos(psi);\n    Ctp = St*Sp - Ct*Cp;\n    qx = mix(Ctp*St, Sp, sz);\n    qy = mix(-Ctp*Ct, Cp, sz);\n    qz = -(py*Cp + px*Sp);\n    Sa = vec4<f32>(sin(alpha));\n    Ca = vec4<f32>(cos(alpha));\n    gx = Ca*px + Sa*qx;\n    gy = Ca*py + Sa*qy;\n    gz = Ca*pz + Sa*qz;\n  } else {\n    gx = Ct * sz_;\n    gy = St * sz_;\n    gz = sz;\n  }\n  var g0: vec3<f32>;\n  var g1: vec3<f32>;\n  var g2: vec3<f32>;\n  var g3: vec3<f32>;\n  var w: vec4<f32>;\n  var w2: vec4<f32>;\n  var w3: vec4<f32>;\n  var gdotx: vec4<f32>;\n  var n: f32;\n  g0 = vec3<f32>(gx.x, gy.x, gz.x);\n  g1 = vec3<f32>(gx.y, gy.y, gz.y);\n  g2 = vec3<f32>(gx.z, gy.z, gz.z);\n  g3 = vec3<f32>(gx.w, gy.w, gz.w);\n  w = 0.5 - vec4<f32>(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3));\n  w = max(w, vec4<f32>(0.0, 0.0, 0.0, 0.0));\n  w2 = w * w;\n  w3 = w2 * w;\n  gdotx = vec4<f32>(dot(g0,x0), dot(g1,x1), dot(g2,x2), dot(g3,x3));\n  n = 39.5 * dot(w3, gdotx);\n  var dw: vec4<f32> = -6.0 * w2 * gdotx;\n  var dn0: vec3<f32> = w3.x * g0 + dw.x * x0;\n  var dn1: vec3<f32> = w3.y * g1 + dw.y * x1;\n  var dn2: vec3<f32> = w3.z * g2 + dw.z * x2;\n  var dn3: vec3<f32> = w3.w * g3 + dw.w * x3;\n  var grad: vec3<f32> = 39.5 * (dn0 + dn1 + dn2 + dn3);\n  return vec4<f32>(n, grad.x, grad.y, grad.z);\n}");
  this.hE = $x_5.eq(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_rot_noise_3d", src$7), new $c_sjsr_WrappedVarArgs([this.je]));
  var $x_6 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$8 = $m_sjs_js_ArrayOpsCommon$().c(["pos"], $m_sjs_js_ArrayOpsCommon$().c(["period"], []));
  var types$8 = $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], []));
  var parts$8 = [];
  var i$8 = 0;
  while ((i$8 < (names$8.length | 0))) {
    parts$8.push(((names$8[i$8] + ": ") + types$8[i$8]));
    i$8 = ((1 + i$8) | 0);
  }
  var paramList$8 = parts$8.join(", ");
  var src$8 = (("fn tiling_noise_3d(" + paramList$8) + ") -> vec4<f32> {\n  return tiling_rot_noise_3d(pos, period, 0.0);\n}");
  $x_6.eq(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("tiling_noise_3d", src$8), new $c_sjsr_WrappedVarArgs([this.hE]));
  var $x_7 = $m_Ltrivalibs_graphics_shader_dsl_fn$package$WgslFn$();
  var names$9 = $m_sjs_js_ArrayOpsCommon$().c(["pos"], $m_sjs_js_ArrayOpsCommon$().c(["normRot"], []));
  var types$9 = $m_sjs_js_ArrayOpsCommon$().c(["vec3<f32>"], $m_sjs_js_ArrayOpsCommon$().c(["f32"], []));
  var parts$9 = [];
  var i$9 = 0;
  while ((i$9 < (names$9.length | 0))) {
    parts$9.push(((names$9[i$9] + ": ") + types$9[i$9]));
    i$9 = ((1 + i$9) | 0);
  }
  var paramList$9 = parts$9.join(", ");
  var src$9 = (("fn rot_noise_3d(" + paramList$9) + ") -> vec4<f32> {\n  return tiling_rot_noise_3d(pos, vec3<f32>(0.0, 0.0, 0.0), normRot);\n}");
  this.jf = $x_7.eq(new ($a_Ltrivalibs_graphics_shader_dsl_WgslFnData())("rot_noise_3d", src$9), new $c_sjsr_WrappedVarArgs([this.hE]));
}
$p = $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$() {
}
$h_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$.prototype = $p;
var $d_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_lib_random_Psrdnoise$, "trivalibs.graphics.shader.lib.random.Psrdnoise$", ({
  eX: 1
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
  this.jg = null;
  this.hF = null;
  this.fB = 0;
  this.fC = 0.0;
  this.gw = 0.0;
  this.gx = 0.0;
  this.hG = false;
  this.jg = frame;
  this.hF = onFpsCallback;
  this.fB = 0;
  this.fC = 0.0;
  this.gw = 0.0;
  this.gx = (-1.0);
  this.hG = false;
}
$p = $c_Ltrivalibs_utils_animation_Animator.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_animation_Animator;
/** @constructor */
function $h_Ltrivalibs_utils_animation_Animator() {
}
$h_Ltrivalibs_utils_animation_Animator.prototype = $p;
$p.jT = (function(time) {
  this.fB = ((1 + this.fB) | 0);
  if ((this.fC === 0.0)) {
    this.fC = time;
    this.gw = time;
  }
  var fpsElapsed = (time - this.fC);
  if ((fpsElapsed >= 1000.0)) {
    var fps = ((1000.0 * this.fB) / fpsElapsed);
    if (((time - this.gw) >= 1000.0)) {
      var args$proxy1 = $m_sr_ScalaRunTime$().i1(new ($d_sjs_js_Any.r().C)([(fps.toFixed(1) + " FPS")]));
      console.log(...$m_sjsr_Compat$().hY(args$proxy1));
      this.gw = time;
      if ((this.hF !== null)) {
        (0, this.hF)(fps);
      }
    }
    this.fB = 0;
    this.fC = time;
  }
  var delta = ((this.gx < 0.0) ? 0.0 : (time - this.gx));
  this.gx = time;
  (0, this.jg)(delta);
  if (this.hG) {
    requestAnimationFrame($m_sjs_js_Any$().fO(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
      this.jT((+v1$2));
    }))));
  }
});
$p.mg = (function() {
  this.hG = true;
  return requestAnimationFrame($m_sjs_js_Any$().fO(new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((v1$2) => {
    this.jT((+v1$2));
  }))));
});
var $d_Ltrivalibs_utils_animation_Animator = new $TypeData().i($c_Ltrivalibs_utils_animation_Animator, "trivalibs.utils.animation.Animator", ({
  f0: 1
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
$p.kc = (function(frame) {
  var animator = new $c_Ltrivalibs_utils_animation_Animator(frame, null);
  animator.mg();
  return animator;
});
var $d_Ltrivalibs_utils_animation_animate$package$ = new $TypeData().i($c_Ltrivalibs_utils_animation_animate$package$, "trivalibs.utils.animation.animate$package$", ({
  f1: 1
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
  this.w = null;
  this.fF = null;
  this.gz = null;
  this.fD = 0.0;
  this.fE = 0.0;
  this.gy = false;
  this.ji = null;
  this.jh = null;
  this.w = onActivity;
  this.fF = $m_sjs_js_special_package$().jQ(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().jS(new ($d_T2.r().C)([]))));
  this.gz = $m_sjs_js_special_package$().jQ(new $c_sjsr_WrappedVarArgs($m_sjsr_package$().jS(new ($d_T2.r().C)([]))));
  this.fD = 0.0;
  this.fE = 0.0;
  this.gy = false;
  $m_Ltrivalibs_utils_events_keyboard$package$().l9(keyTarget, new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3) => {
    if ((!(!(!(!(!this.fF.hasOwnProperty(k$3))))))) {
      var value$proxy1 = (+Date.now());
      this.fF[k$3] = value$proxy1;
      if ((!(this.w === (void 0)))) {
        var m$proxy1 = this.w;
        m$proxy1();
      }
    }
  })), new $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(((k$3$1) => {
    delete this.fF[k$3$1];
    if ((!(this.w === (void 0)))) {
      var m$proxy2 = this.w;
      m$proxy2();
    }
  })), false);
  $m_Ltrivalibs_utils_events_pointer$package$().lU(el, $m_Ltrivalibs_utils_events_pointer$package$().lV(), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2, v2$2, v3$2) => {
    var b = (v1$2 | 0);
    if (focusOnPointerDown) {
      keyTarget.focus();
    }
    var key$proxy3 = ("" + b);
    this.gz[key$proxy3] = true;
    if ((!(this.w === (void 0)))) {
      var m$proxy3 = this.w;
      m$proxy3();
    }
  })), new $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(((v1$2$1, v2$2$1, v3$2$1) => {
    var b$1 = (v1$2$1 | 0);
    delete this.gz[("" + b$1)];
    if ((!(this.w === (void 0)))) {
      var m$proxy4 = this.w;
      m$proxy4();
    }
  })), new $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(((v1$2$2, v2$2$2, v3$2$2, v4$2) => (void 0))), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    if ((!(this.w === (void 0)))) {
      var m$proxy5 = this.w;
      m$proxy5();
    }
  })), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$3, v2$2$3) => {
    var dx = (+v1$2$3);
    var dy = (+v2$2$3);
    this.fD = (this.fD + dx);
    this.fE = (this.fE + dy);
    if ((!(this.w === (void 0)))) {
      var m$proxy6 = this.w;
      m$proxy6();
    }
  })), new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    this.gy = false;
    if ((!(this.w === (void 0)))) {
      var m$proxy7 = this.w;
      m$proxy7();
    }
  })), new $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(((v1$2$4, v2$2$4) => {
    this.gy = true;
    if ((!(this.w === (void 0)))) {
      var m$proxy8 = this.w;
      m$proxy8();
    }
  })), holdDelay, holdRadius, suppressContextMenu);
  if ($m_sr_BoxesRunTime$().a(keyTarget, window)) {
    (!(!document.hasFocus()));
  } else {
    $m_sr_BoxesRunTime$().a(keyTarget, document.activeElement);
  }
  this.ji = ((_$5$3) => {
    if ((!(this.w === (void 0)))) {
      var m$proxy9 = this.w;
      m$proxy9();
    }
  });
  this.jh = ((_$6$3) => {
    if ((!(this.w === (void 0)))) {
      var m$proxy10 = this.w;
      m$proxy10();
    }
  });
  keyTarget.addEventListener("focus", this.ji);
  keyTarget.addEventListener("blur", this.jh);
}
$p = $c_Ltrivalibs_utils_events_InputState.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_InputState;
/** @constructor */
function $h_Ltrivalibs_utils_events_InputState() {
}
$h_Ltrivalibs_utils_events_InputState.prototype = $p;
$p.Z = (function(key) {
  return (!(!(!(!this.fF.hasOwnProperty(key)))));
});
$p.l6 = (function(button) {
  var key$proxy7 = ("" + button);
  return (!(!(!(!this.gz.hasOwnProperty(key$proxy7)))));
});
$p.kr = (function() {
  var x$proxy1 = $ct_T2__O__O__(new $c_T2(), this.fD, this.fE);
  this.fD = 0.0;
  this.fE = 0.0;
  return x$proxy1;
});
var $d_Ltrivalibs_utils_events_InputState = new $TypeData().i($c_Ltrivalibs_utils_events_InputState, "trivalibs.utils.events.InputState", ({
  f2: 1
}));
/** @constructor */
function $c_Ltrivalibs_utils_events_PointerTracker(holdRadius) {
  this.jj = 0.0;
  this.fH = false;
  this.fI = false;
  this.fJ = false;
  this.hH = 0.0;
  this.hI = 0.0;
  this.fG = 0.0;
  this.jj = holdRadius;
  this.fH = false;
  this.fI = false;
  this.fJ = false;
  this.hH = 0.0;
  this.hI = 0.0;
  this.fG = 0.0;
}
$p = $c_Ltrivalibs_utils_events_PointerTracker.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_utils_events_PointerTracker;
/** @constructor */
function $h_Ltrivalibs_utils_events_PointerTracker() {
}
$h_Ltrivalibs_utils_events_PointerTracker.prototype = $p;
$p.ky = (function(x, y) {
  this.fJ = true;
  this.fH = true;
  this.fI = false;
  this.hH = x;
  this.hI = y;
  this.fG = 0.0;
});
$p.lM = (function(x, y) {
  if (this.fJ) {
    var ddx = (x - this.hH);
    var ddy = (y - this.hI);
    var p$proxy1 = ((ddx * ddx) + (ddy * ddy));
    var d = (+Math.sqrt(p$proxy1));
    if ((d > this.fG)) {
      this.fG = d;
    }
  }
});
$p.mp = (function() {
  this.fJ = false;
  this.fH = false;
  this.fI = false;
});
$p.kn = (function() {
  if (((this.fJ && (!this.fI)) && (this.fG <= this.jj))) {
    this.fI = true;
    return true;
  } else {
    return false;
  }
});
var $d_Ltrivalibs_utils_events_PointerTracker = new $TypeData().i($c_Ltrivalibs_utils_events_PointerTracker, "trivalibs.utils.events.PointerTracker", ({
  f3: 1
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
$p.l4 = (function(canvas, initialFocus, holdDelay, holdRadius, suppressContextMenu, onActivity) {
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
  f4: 1
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
$p.l9 = (function(el, onDown, onUp, keepDefault) {
  var down = ((e$3) => {
    var isTab = (e$3.code === "Tab");
    if (((!keepDefault) && (!isTab))) {
      e$3.preventDefault();
    }
    if ((!(!(!e$3.repeat)))) {
      onDown.s(e$3.code);
    }
  });
  var up = ((e$3$1) => {
    onUp.s(e$3$1.code);
  });
  el.addEventListener("keydown", down);
  el.addEventListener("keyup", up);
  return new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
    el.removeEventListener("keydown", down);
    el.removeEventListener("keyup", up);
  }));
});
var $d_Ltrivalibs_utils_events_keyboard$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_keyboard$package$, "trivalibs.utils.events.keyboard$package$", ({
  f5: 1
}));
var $n_Ltrivalibs_utils_events_keyboard$package$;
function $m_Ltrivalibs_utils_events_keyboard$package$() {
  if ((!$n_Ltrivalibs_utils_events_keyboard$package$)) {
    $n_Ltrivalibs_utils_events_keyboard$package$ = new $c_Ltrivalibs_utils_events_keyboard$package$();
  }
  return $n_Ltrivalibs_utils_events_keyboard$package$;
}
function $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V($thiz, holdTimer$1) {
  if ((holdTimer$1.eK !== null)) {
    $m_sjs_js_timers_package$().ko(holdTimer$1.eK);
    holdTimer$1.eK = null;
  }
}
function $p_Ltrivalibs_utils_events_pointer$package$__endPrimary$1__Ltrivalibs_utils_events_PointerTracker__sr_BooleanRef__F0__sr_ObjectRef__V($thiz, tracker$1, primaryActive$1, onDragEnd$1, holdTimer$2) {
  var wasDragging = tracker$1.fH;
  tracker$1.mp();
  $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V($thiz, holdTimer$2);
  primaryActive$1.eb = false;
  if (wasDragging) {
    onDragEnd$1.f5();
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
$p.lU = (function(el, moveTarget, onDown, onUp, onMove, onDragStart, onDrag, onDragEnd, onHold, holdDelay, holdRadius, suppressContextMenu) {
  var tracker = new $c_Ltrivalibs_utils_events_PointerTracker(holdRadius);
  var holdTimer = new $c_sr_ObjectRef(null);
  var lastX = new $c_sr_DoubleRef(0.0);
  var lastY = new $c_sr_DoubleRef(0.0);
  var primaryActive = new $c_sr_BooleanRef(false);
  var downFn = ((e$3) => {
    var btn = (e$3.button | 0);
    onDown.jm(btn, (+e$3.clientX), (+e$3.clientY));
    if (((!(!e$3.isPrimary)) && (btn === 0))) {
      lastX.a3 = (+e$3.clientX);
      lastY.a3 = (+e$3.clientY);
      primaryActive.eb = true;
      tracker.ky((+e$3.clientX), (+e$3.clientY));
      onDragStart.f5();
      $p_Ltrivalibs_utils_events_pointer$package$__clearHold$1__sr_ObjectRef__V(this, holdTimer);
      holdTimer.eK = $m_sjs_js_timers_package$().md(holdDelay, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => {
        if (tracker.kn()) {
          onHold.gA(lastX.a3, lastY.a3);
        }
      })));
    }
  });
  var moveFn = ((e$3$1) => {
    var dx = ((+e$3$1.clientX) - lastX.a3);
    var dy = ((+e$3$1.clientY) - lastY.a3);
    lastX.a3 = (+e$3$1.clientX);
    lastY.a3 = (+e$3$1.clientY);
    onMove.ke((+e$3$1.clientX), (+e$3$1.clientY), dx, dy);
    if (primaryActive.eb) {
      tracker.lM((+e$3$1.clientX), (+e$3$1.clientY));
      if (tracker.fH) {
        onDrag.gA(dx, dy);
      }
    }
  });
  var upFn = ((e$3$2) => {
    var btn$1 = (e$3$2.button | 0);
    onUp.jm(btn$1, (+e$3$2.clientX), (+e$3$2.clientY));
    if ((primaryActive.eb && (btn$1 === 0))) {
      $p_Ltrivalibs_utils_events_pointer$package$__endPrimary$1__Ltrivalibs_utils_events_PointerTracker__sr_BooleanRef__F0__sr_ObjectRef__V(this, tracker, primaryActive, onDragEnd, holdTimer);
    }
  });
  var cancelFn = ((e$3$3) => {
    if (primaryActive.eb) {
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
$p.lV = (function() {
  return window;
});
var $d_Ltrivalibs_utils_events_pointer$package$ = new $TypeData().i($c_Ltrivalibs_utils_events_pointer$package$, "trivalibs.utils.events.pointer$package$", ({
  f6: 1
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
  this.gM = null;
  $n_jl_Character$ = this;
  this.gM = new $ac_I(new Int32Array([1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3558, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43504, 43600, 44016, 65296, 66720, 68912, 69734, 69872, 69942, 70096, 70384, 70736, 70864, 71248, 71360, 71472, 71904, 72016, 72784, 73040, 73120, 73552, 92768, 92864, 93008, 120782, 120792, 120802, 120812, 120822, 123200, 123632, 124144, 125264, 130032]));
}
$p = $c_jl_Character$.prototype = new $h_O();
$p.constructor = $c_jl_Character$;
/** @constructor */
function $h_jl_Character$() {
}
$h_jl_Character$.prototype = $p;
$p.ml = (function(codePoint) {
  if (((codePoint >>> 0) > 1114111)) {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException());
  }
  return String.fromCodePoint(codePoint);
});
$p.kv = (function(codePoint, radix) {
  if ((codePoint < 256)) {
    var value = (((((codePoint - 48) | 0) >>> 0) <= 9) ? ((codePoint - 48) | 0) : (((((codePoint - 65) | 0) >>> 0) <= 25) ? ((codePoint - 55) | 0) : (((((codePoint - 97) | 0) >>> 0) <= 25) ? ((codePoint - 87) | 0) : (-1))));
  } else if (((((codePoint - 65313) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65303) | 0);
  } else if (((((codePoint - 65345) | 0) >>> 0) <= 25)) {
    var value = ((codePoint - 65335) | 0);
  } else {
    var p = $m_ju_Arrays$().kk(this.gM, codePoint);
    var zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
    if ((zeroCodePointIndex < 0)) {
      var value = (-1);
    } else {
      var v = ((codePoint - this.gM.b[zeroCodePointIndex]) | 0);
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
$p.g5 = (function(s) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s) + "\""));
});
$p.l7 = (function(s, radix, overflowBarrier) {
  if ((s === null)) {
    $m_jl_Integer$().g5(s);
  }
  var len = s.length;
  if ((len === 0)) {
    $m_jl_Integer$().g5(s);
  }
  var character = $m_jl_Character$();
  var firstChar = s.charCodeAt(0);
  var negative = (firstChar === 45);
  var sign = (negative ? (-1) : 0);
  var i = ((negative || (firstChar === 43)) ? 1 : 0);
  if ((i >= len)) {
    $m_jl_Integer$().g5(s);
  }
  var java$lang$IntFloatBits$Int32Box$$value = 0;
  java$lang$IntFloatBits$Int32Box$$value = 0;
  while ((i !== len)) {
    var x = character.kv(s.charCodeAt(i), radix);
    if (((x < 0) || ((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (overflowBarrier >>> 0)))) {
      $m_jl_Integer$().g5(s);
    }
    var x$2 = java$lang$IntFloatBits$Int32Box$$value;
    var x$3 = Math.imul(x$2, radix);
    var v = ((x$3 + x) | 0);
    java$lang$IntFloatBits$Int32Box$$value = v;
    i = ((1 + i) | 0);
  }
  if (((java$lang$IntFloatBits$Int32Box$$value >>> 0) > (((2147483647 - sign) | 0) >>> 0))) {
    $m_jl_Integer$().g5(s);
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
  $thiz.i5 = s;
  if (writableStackTrace) {
    $thiz.kF();
  }
  return $thiz;
}
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.i5 = null;
  }
  gC() {
    return this.i5;
  }
  kF() {
    var reference = ((this instanceof $c_sjs_js_JavaScriptException) ? this.ec : this);
    if ((Object.prototype.toString.call(reference) !== "[object Error]")) {
      if (((Error.captureStackTrace === (void 0)) || (!(!Object.isSealed(this))))) {
        new Error();
      } else {
        Error.captureStackTrace(this);
      }
    }
    return this;
  }
  e() {
    var className = $objectClassName(this);
    var message = this.gC();
    return ((message === null) ? className : ((className + ": ") + message));
  }
  i() {
    return $c_O.prototype.i.call(this);
  }
  g(that) {
    return $c_O.prototype.g.call(this, that);
  }
  get "message"() {
    var m = this.gC();
    return ((m === null) ? "" : m);
  }
  get "name"() {
    return $objectClassName(this);
  }
  "toString"() {
    return this.e();
  }
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.f)));
}
/** @constructor */
function $c_s_Console$() {
  this.i7 = null;
  $n_s_Console$ = this;
  this.i7 = new $c_s_util_DynamicVariable($m_jl_System$Streams$().i3);
}
$p = $c_s_Console$.prototype = new $h_O();
$p.constructor = $c_s_Console$;
/** @constructor */
function $h_s_Console$() {
}
$h_s_Console$.prototype = $p;
$p.lS = (function() {
  return this.i7.gT;
});
var $d_s_Console$ = new $TypeData().i($c_s_Console$, "scala.Console$", ({
  bn: 1,
  cx: 1
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
$p.e = (function() {
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
$p.mv = (function(xs) {
  if ((xs === null)) {
    return null;
  } else if ((xs.b.length === 0)) {
    var this$2 = $m_scm_ArraySeq$();
    $m_s_reflect_ManifestFactory$ObjectManifest$();
    return this$2.ij;
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
$p.e = (function() {
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
$p.e = (function() {
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
$p.e = (function() {
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
$p.e = (function() {
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
$p.e = (function() {
  return "<function4>";
});
/** @constructor */
function $c_sr_BooleanRef(elem) {
  this.eb = false;
  this.eb = elem;
}
$p = $c_sr_BooleanRef.prototype = new $h_O();
$p.constructor = $c_sr_BooleanRef;
/** @constructor */
function $h_sr_BooleanRef() {
}
$h_sr_BooleanRef.prototype = $p;
$p.e = (function() {
  return ("" + this.eb);
});
var $d_sr_BooleanRef = new $TypeData().i($c_sr_BooleanRef, "scala.runtime.BooleanRef", ({
  cQ: 1,
  a: 1
}));
/** @constructor */
function $c_sr_DoubleRef(elem) {
  this.a3 = 0.0;
  this.a3 = elem;
}
$p = $c_sr_DoubleRef.prototype = new $h_O();
$p.constructor = $c_sr_DoubleRef;
/** @constructor */
function $h_sr_DoubleRef() {
}
$h_sr_DoubleRef.prototype = $p;
$p.e = (function() {
  return ("" + this.a3);
});
var $d_sr_DoubleRef = new $TypeData().i($c_sr_DoubleRef, "scala.runtime.DoubleRef", ({
  cS: 1,
  a: 1
}));
/** @constructor */
function $c_sr_ObjectRef(elem) {
  this.eK = null;
  this.eK = elem;
}
$p = $c_sr_ObjectRef.prototype = new $h_O();
$p.constructor = $c_sr_ObjectRef;
/** @constructor */
function $h_sr_ObjectRef() {
}
$h_sr_ObjectRef.prototype = $p;
$p.e = (function() {
  return ("" + this.eK);
});
var $d_sr_ObjectRef = new $TypeData().i($c_sr_ObjectRef, "scala.runtime.ObjectRef", ({
  cU: 1,
  a: 1
}));
/** @constructor */
function $c_s_util_hashing_MurmurHash3$() {
  this.eM = 0;
  this.it = 0;
  this.k2 = 0;
  $n_s_util_hashing_MurmurHash3$ = this;
  this.eM = $f_T__hashCode__I("Seq");
  this.it = $f_T__hashCode__I("Map");
  $f_T__hashCode__I("Set");
  this.k2 = this.mo($m_sci_Nil$(), this.it);
}
$p = $c_s_util_hashing_MurmurHash3$.prototype = new $h_s_util_hashing_MurmurHash3();
$p.constructor = $c_s_util_hashing_MurmurHash3$;
/** @constructor */
function $h_s_util_hashing_MurmurHash3$() {
}
$h_s_util_hashing_MurmurHash3$.prototype = $p;
$p.jU = (function(xs) {
  return ($is_sc_IndexedSeq(xs) ? this.l0(xs, this.eM) : ((xs instanceof $c_sci_List) ? this.la(xs, this.eM) : this.lR(xs, this.eM)));
});
var $d_s_util_hashing_MurmurHash3$ = new $TypeData().i($c_s_util_hashing_MurmurHash3$, "scala.util.hashing.MurmurHash3$", ({
  dh: 1,
  dg: 1
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
  this.iv = null;
  this.iv = uv;
}
$p = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT() {
}
$h_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformLayout$given\uff3fUniformLayout\uff3fT, "trivalibs.graphics.buffers.UniformLayout$given_UniformLayout_T", ({
  dn: 1,
  dm: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$p = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$;
/** @constructor */
function $h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$() {
}
$h_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$.prototype = $p;
var $d_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$ = new $TypeData().i($c_Ltrivalibs_graphics_buffers_UniformValue$given\uff3fUniformValue\uff3fMat4\uff3fMat4Buffer$, "trivalibs.graphics.buffers.UniformValue$given_UniformValue_Mat4_Mat4Buffer$", ({
  dq: 1,
  dp: 1
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
$p.f8 = (function(t) {
  return $ct_T2__O__O__(new $c_T2(), t.as, t.at);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec2Writer$, "trivalibs.graphics.geometry.FieldWriter$vec2Writer$", ({
  dv: 1,
  aK: 1
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
$p.f8 = (function(t) {
  return new $c_T3(t.p, t.n, t.q);
});
var $d_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_FieldWriter$vec3Writer$, "trivalibs.graphics.geometry.FieldWriter$vec3Writer$", ({
  dw: 1,
  aK: 1
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
  this.iy = null;
  this.iy = x$1;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayout$named;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayout$named() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayout$named.prototype = $p;
var $d_Ltrivalibs_graphics_geometry_VertexLayout$named = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayout$named, "trivalibs.graphics.geometry.VertexLayout$named", ({
  dC: 1,
  dB: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons(x$1, x$2) {
  this.iz = null;
  this.iA = null;
  this.iz = x$1;
  this.iA = x$2;
}
$p = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons() {
}
$h_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons.prototype = $p;
$p.mr = (function(t) {
  return $m_sr_Tuples$().kq(this.iz.f8(t.h(0)), this.iA.f8($m_sr_Tuples$().mi(t)));
});
$p.f8 = (function(t) {
  return this.mr(t);
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$cons, "trivalibs.graphics.geometry.VertexLayoutHelper$cons", ({
  dD: 1,
  aL: 1
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
$p.f8 = (function(t) {
  return $m_T$package$EmptyTuple$();
});
var $d_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$ = new $TypeData().i($c_Ltrivalibs_graphics_geometry_VertexLayoutHelper$nil$, "trivalibs.graphics.geometry.VertexLayoutHelper$nil$", ({
  dE: 1,
  aL: 1
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
  this.iC = 0;
  this.iC = idx$2;
}
$p = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_geometry_package$package$$anon$1;
/** @constructor */
function $h_Ltrivalibs_graphics_geometry_package$package$$anon$1() {
}
$h_Ltrivalibs_graphics_geometry_package$package$$anon$1.prototype = $p;
$p.jR = (function(t) {
  return t.h(this.iC);
});
var $d_Ltrivalibs_graphics_geometry_package$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_geometry_package$package$$anon$1, "trivalibs.graphics.geometry.package$package$$anon$1", ({
  dJ: 1,
  dz: 1
}));
function $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, other) {
  return (((v.p * other.p) + (v.n * other.n)) + (v.q * other.q));
}
function $f_Ltrivalibs_graphics_math_Vec3Base__length__O__D($thiz, v) {
  var p$proxy1 = $f_Ltrivalibs_graphics_math_Vec3Base__dot__O__O__D($thiz, v, v);
  return (+Math.sqrt(p$proxy1));
}
/** @constructor */
function $c_Ltrivalibs_graphics_math_cpu_Mat4$() {
  this.iD = null;
  this.iE = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Mat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Mat4$() {
}
$h_Ltrivalibs_graphics_math_cpu_Mat4$.prototype = $p;
$p.ju = (function() {
  if ((!this.iE)) {
    this.iD = $m_Ltrivalibs_graphics_math_cpu_Mat4$();
    this.iE = true;
  }
  return this.iD;
});
$p.kO = (function(t, r, s) {
  var x = r.V;
  var y = r.a5;
  var z = r.a6;
  var w = r.a4;
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
  return new $c_Ltrivalibs_graphics_math_cpu_Mat4(((1.0 - (yy + zz)) * s.p), ((xy + wz) * s.p), ((xz - wy) * s.p), 0.0, ((xy - wz) * s.n), ((1.0 - (xx + zz)) * s.n), ((yz + wx) * s.n), 0.0, ((xz + wy) * s.q), ((yz - wx) * s.q), ((1.0 - (xx + yy)) * s.q), 0.0, t.p, t.n, t.q, 1.0);
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$, "trivalibs.graphics.math.cpu.Mat4$", ({
  dY: 1,
  dL: 1
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
  e2: 1,
  e4: 1
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
  this.iF = null;
  this.iG = false;
}
$p = $c_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_math_cpu_Vec3$;
/** @constructor */
function $h_Ltrivalibs_graphics_math_cpu_Vec3$() {
}
$h_Ltrivalibs_graphics_math_cpu_Vec3$.prototype = $p;
$p.d = (function() {
  if ((!this.iG)) {
    this.iF = $m_Ltrivalibs_graphics_math_cpu_Vec3$();
    this.iG = true;
  }
  return this.iF;
});
var $d_Ltrivalibs_graphics_math_cpu_Vec3$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Vec3$, "trivalibs.graphics.math.cpu.Vec3$", ({
  e7: 1,
  dR: 1
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
  ea: 1,
  dN: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_math_gpu_LetExpr(name) {
  this.f = null;
  this.iJ = null;
  this.iJ = name;
  $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(this, name);
}
$p = $c_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = new $h_Ltrivalibs_graphics_math_gpu_Expr();
$p.constructor = $c_Ltrivalibs_graphics_math_gpu_LetExpr;
/** @constructor */
function $h_Ltrivalibs_graphics_math_gpu_LetExpr() {
}
$h_Ltrivalibs_graphics_math_gpu_LetExpr.prototype = $p;
$p.hJ = (function(value) {
  return (((("  let " + this.iJ) + " = ") + value.f) + ";");
});
var $d_Ltrivalibs_graphics_math_gpu_LetExpr = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_LetExpr, "trivalibs.graphics.math.gpu.LetExpr", ({
  ec: 1,
  aQ: 1
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
$p.gK = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".x"));
});
$p.jY = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".y"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$4, "trivalibs.graphics.math.gpu.float_expr$package$$anon$4", ({
  eg: 1,
  dO: 1
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
  eh: 1,
  aO: 1
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
$p.gK = (function(v) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (v.f + ".x"));
});
$p.jX = (function(v) {
  return this.gK(v);
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$6, "trivalibs.graphics.math.gpu.float_expr$package$$anon$6", ({
  ei: 1,
  aP: 1
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
  ej: 1,
  T: 1
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
$p.ms = (function(m, x$2, v, x$4, x$5) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + m.f) + " * ") + v.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fMat4ImmutableOpsG\uff3fFloatExpr\uff3fMat4Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Mat4ImmutableOpsG_FloatExpr_Mat4Expr$", ({
  ek: 1,
  dM: 1
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
$p.lZ = (function(a, exp) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("pow(" + a.f) + ", ") + exp.f) + ")"));
});
$p.kI = (function(a) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + a.f) + " * 0.5 + 0.5)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumExt\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumExt_FloatExpr$", ({
  el: 1,
  f7: 1
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
$p.k7 = (function(a, b) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + a.f) + " / ") + b.f) + ")"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$, "trivalibs.graphics.math.gpu.float_expr$package$given_NumOps_FloatExpr$", ({
  em: 1,
  f8: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fNumOps\uff3fFloatExpr$;
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
$p.lN = (function(v, x$2, scalar) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("(" + v.f) + " * ") + scalar.f) + ")"));
});
$p.k9 = (function(v, x$2, scalar) {
  return this.lN(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().s(scalar));
});
$p.kL = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("fract(" + v.f) + ")"));
});
$p.kH = (function(v, x$2) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (("(" + v.f) + " * 2.0 - 1.0)"));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec2ImmutableOpsG\uff3fFloatExpr\uff3fVec2Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec2ImmutableOpsG_FloatExpr_Vec2Expr$", ({
  en: 1,
  dP: 1
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
$p.m0 = (function(v, x$2, e) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), (((("pow(" + v.f) + ", vec3<f32>(") + e.f) + "))"));
});
$p.lY = (function(v, x$2, scalar) {
  return this.m0(v, x$2, $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().O().s(scalar));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$ = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec3ImmutableOpsG\uff3fFloatExpr\uff3fVec3Expr$, "trivalibs.graphics.math.gpu.float_expr$package$given_Vec3ImmutableOpsG_FloatExpr_Vec3Expr$", ({
  eo: 1,
  dS: 1
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
  ep: 1,
  dV: 1
}));
var $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
function $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$() {
  if ((!$n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$)) {
    $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$ = new $c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$();
  }
  return $n_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$given\uff3fVec4ImmutableOpsG\uff3fFloatExpr\uff3fVec4Expr$;
}
/** @constructor */
function $c_Ltrivalibs_graphics_painter_Shape(painter, form, shade) {
  this.X = null;
  this.Y = null;
  this.hq = null;
  this.hp = null;
  this.gv = null;
  this.ei = null;
  this.hr = null;
  this.X = form;
  this.Y = shade;
  this.hq = "none";
  this.hp = null;
  this.gv = [];
  this.ei = [];
  this.hr = new $c_Ltrivalibs_graphics_painter_InstanceList(shade, painter);
}
$p = $c_Ltrivalibs_graphics_painter_Shape.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_painter_Shape;
/** @constructor */
function $h_Ltrivalibs_graphics_painter_Shape() {
}
$h_Ltrivalibs_graphics_painter_Shape.prototype = $p;
$p.mc = (function(cullMode, blendState) {
  if ((cullMode !== (void 0))) {
    this.hq = cullMode;
  }
  if ((blendState !== (void 0))) {
    this.hp = blendState;
  }
  return this;
});
var $d_Ltrivalibs_graphics_painter_Shape = new $TypeData().i($c_Ltrivalibs_graphics_painter_Shape, "trivalibs.graphics.painter.Shape", ({
  eA: 1,
  et: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform(inner) {
  this.hu = null;
  this.hu = inner;
}
$p = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform() {
}
$h_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform.prototype = $p;
$p.ep = (function() {
  return this.hu.ep();
});
var $d_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_FragmentUniform$given\uff3fWGSLType\uff3fFragmentUniform, "trivalibs.graphics.shader.FragmentUniform$given_WGSLType_FragmentUniform", ({
  eG: 1,
  E: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform(inner) {
  this.hv = null;
  this.hv = inner;
}
$p = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform() {
}
$h_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform.prototype = $p;
$p.ep = (function() {
  return this.hv.ep();
});
var $d_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform = new $TypeData().i($c_Ltrivalibs_graphics_shader_VertexUniform$given\uff3fWGSLType\uff3fVertexUniform, "trivalibs.graphics.shader.VertexUniform$given_WGSLType_VertexUniform", ({
  eH: 1,
  E: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor(prefix) {
  this.hA = null;
  this.hA = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor.prototype = $p;
$p.g7 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.hA === "") ? name : ((this.hA + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedAssignAccessor, "trivalibs.graphics.shader.dsl.TypedAssignAccessor", ({
  eO: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor(prefix) {
  this.hB = null;
  this.hB = prefix;
}
$p = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor() {
}
$h_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor.prototype = $p;
$p.a0 = (function(name) {
  return ((this.hB === "") ? $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), name) : $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), ((this.hB + ".") + name)));
});
var $d_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_TypedExprAccessor, "trivalibs.graphics.shader.dsl.TypedExprAccessor", ({
  eP: 1,
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
  eQ: 1,
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
  eR: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_dsl_VertexOut(prefix) {
  this.jb = null;
  this.hC = null;
  this.jb = prefix;
  this.hC = new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget((prefix + ".position"));
}
$p = $c_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_dsl_VertexOut;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_dsl_VertexOut() {
}
$h_Ltrivalibs_graphics_shader_dsl_VertexOut.prototype = $p;
$p.g7 = (function(name) {
  return new $c_Ltrivalibs_graphics_shader_dsl_AssignTarget(((this.jb + ".") + name));
});
var $d_Ltrivalibs_graphics_shader_dsl_VertexOut = new $TypeData().i($c_Ltrivalibs_graphics_shader_dsl_VertexOut, "trivalibs.graphics.shader.dsl.VertexOut", ({
  eT: 1,
  z: 1
}));
/** @constructor */
function $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$p = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$() {
}
$h_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$.prototype = $p;
$p.ep = (function() {
  return "mat4x4<f32>";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fMat4$, "trivalibs.graphics.shader.types$package$given_WGSLType_Mat4$", ({
  eY: 1,
  E: 1
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
$p.ep = (function() {
  return "sampler";
});
var $d_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $TypeData().i($c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$, "trivalibs.graphics.shader.types$package$given_WGSLType_Sampler$", ({
  eZ: 1,
  E: 1
}));
var $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
function $m_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$() {
  if ((!$n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$)) {
    $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$ = new $c_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$();
  }
  return $n_Ltrivalibs_graphics_shader_types$package$given\uff3fWGSLType\uff3fSampler$;
}
/** @constructor */
function $c_jl_Class($data) {
  this.gL = $data;
}
$p = $c_jl_Class.prototype = new $h_O();
$p.constructor = $c_jl_Class;
/** @constructor */
function $h_jl_Class() {
}
$h_jl_Class.prototype = $p;
$p.e = (function() {
  return ((this.gL.Y ? "interface " : (this.gL.X ? "" : "class ")) + this.gL.N);
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
    return $thiz.er;
  } else {
    throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 0)"));
  }
}
function $f_s_Product10__productElement__I__O($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.es;
      break;
    }
    case 1: {
      return $thiz.aw;
      break;
    }
    case 2: {
      return $thiz.ax;
      break;
    }
    case 3: {
      return $thiz.ay;
      break;
    }
    case 4: {
      return $thiz.az;
      break;
    }
    case 5: {
      return $thiz.aA;
      break;
    }
    case 6: {
      return $thiz.aB;
      break;
    }
    case 7: {
      return $thiz.aC;
      break;
    }
    case 8: {
      return $thiz.aD;
      break;
    }
    case 9: {
      return $thiz.av;
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
      return $thiz.et;
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
    case 4: {
      return $thiz.aJ;
      break;
    }
    case 5: {
      return $thiz.aK;
      break;
    }
    case 6: {
      return $thiz.aL;
      break;
    }
    case 7: {
      return $thiz.aM;
      break;
    }
    case 8: {
      return $thiz.aN;
      break;
    }
    case 9: {
      return $thiz.aE;
      break;
    }
    case 10: {
      return $thiz.aF;
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
      return $thiz.eu;
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
      return $thiz.aO;
      break;
    }
    case 10: {
      return $thiz.aP;
      break;
    }
    case 11: {
      return $thiz.aQ;
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
      return $thiz.ev;
      break;
    }
    case 1: {
      return $thiz.b3;
      break;
    }
    case 2: {
      return $thiz.b4;
      break;
    }
    case 3: {
      return $thiz.b5;
      break;
    }
    case 4: {
      return $thiz.b6;
      break;
    }
    case 5: {
      return $thiz.b7;
      break;
    }
    case 6: {
      return $thiz.b8;
      break;
    }
    case 7: {
      return $thiz.b9;
      break;
    }
    case 8: {
      return $thiz.ba;
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
    case 11: {
      return $thiz.b1;
      break;
    }
    case 12: {
      return $thiz.b2;
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
      return $thiz.ew;
      break;
    }
    case 1: {
      return $thiz.bg;
      break;
    }
    case 2: {
      return $thiz.bh;
      break;
    }
    case 3: {
      return $thiz.bi;
      break;
    }
    case 4: {
      return $thiz.bj;
      break;
    }
    case 5: {
      return $thiz.bk;
      break;
    }
    case 6: {
      return $thiz.bl;
      break;
    }
    case 7: {
      return $thiz.bm;
      break;
    }
    case 8: {
      return $thiz.bn;
      break;
    }
    case 9: {
      return $thiz.bb;
      break;
    }
    case 10: {
      return $thiz.bc;
      break;
    }
    case 11: {
      return $thiz.bd;
      break;
    }
    case 12: {
      return $thiz.be;
      break;
    }
    case 13: {
      return $thiz.bf;
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
      return $thiz.ex;
      break;
    }
    case 1: {
      return $thiz.bu;
      break;
    }
    case 2: {
      return $thiz.bv;
      break;
    }
    case 3: {
      return $thiz.bw;
      break;
    }
    case 4: {
      return $thiz.bx;
      break;
    }
    case 5: {
      return $thiz.by;
      break;
    }
    case 6: {
      return $thiz.bz;
      break;
    }
    case 7: {
      return $thiz.bA;
      break;
    }
    case 8: {
      return $thiz.bB;
      break;
    }
    case 9: {
      return $thiz.bo;
      break;
    }
    case 10: {
      return $thiz.bp;
      break;
    }
    case 11: {
      return $thiz.bq;
      break;
    }
    case 12: {
      return $thiz.br;
      break;
    }
    case 13: {
      return $thiz.bs;
      break;
    }
    case 14: {
      return $thiz.bt;
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
      return $thiz.ey;
      break;
    }
    case 1: {
      return $thiz.bJ;
      break;
    }
    case 2: {
      return $thiz.bK;
      break;
    }
    case 3: {
      return $thiz.bL;
      break;
    }
    case 4: {
      return $thiz.bM;
      break;
    }
    case 5: {
      return $thiz.bN;
      break;
    }
    case 6: {
      return $thiz.bO;
      break;
    }
    case 7: {
      return $thiz.bP;
      break;
    }
    case 8: {
      return $thiz.bQ;
      break;
    }
    case 9: {
      return $thiz.bC;
      break;
    }
    case 10: {
      return $thiz.bD;
      break;
    }
    case 11: {
      return $thiz.bE;
      break;
    }
    case 12: {
      return $thiz.bF;
      break;
    }
    case 13: {
      return $thiz.bG;
      break;
    }
    case 14: {
      return $thiz.bH;
      break;
    }
    case 15: {
      return $thiz.bI;
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
      return $thiz.ez;
      break;
    }
    case 1: {
      return $thiz.bZ;
      break;
    }
    case 2: {
      return $thiz.c0;
      break;
    }
    case 3: {
      return $thiz.c1;
      break;
    }
    case 4: {
      return $thiz.c2;
      break;
    }
    case 5: {
      return $thiz.c3;
      break;
    }
    case 6: {
      return $thiz.c4;
      break;
    }
    case 7: {
      return $thiz.c5;
      break;
    }
    case 8: {
      return $thiz.c6;
      break;
    }
    case 9: {
      return $thiz.bR;
      break;
    }
    case 10: {
      return $thiz.bS;
      break;
    }
    case 11: {
      return $thiz.bT;
      break;
    }
    case 12: {
      return $thiz.bU;
      break;
    }
    case 13: {
      return $thiz.bV;
      break;
    }
    case 14: {
      return $thiz.bW;
      break;
    }
    case 15: {
      return $thiz.bX;
      break;
    }
    case 16: {
      return $thiz.bY;
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
      return $thiz.eA;
      break;
    }
    case 1: {
      return $thiz.cg;
      break;
    }
    case 2: {
      return $thiz.ch;
      break;
    }
    case 3: {
      return $thiz.ci;
      break;
    }
    case 4: {
      return $thiz.cj;
      break;
    }
    case 5: {
      return $thiz.ck;
      break;
    }
    case 6: {
      return $thiz.cl;
      break;
    }
    case 7: {
      return $thiz.cm;
      break;
    }
    case 8: {
      return $thiz.cn;
      break;
    }
    case 9: {
      return $thiz.c7;
      break;
    }
    case 10: {
      return $thiz.c8;
      break;
    }
    case 11: {
      return $thiz.c9;
      break;
    }
    case 12: {
      return $thiz.ca;
      break;
    }
    case 13: {
      return $thiz.cb;
      break;
    }
    case 14: {
      return $thiz.cc;
      break;
    }
    case 15: {
      return $thiz.cd;
      break;
    }
    case 16: {
      return $thiz.ce;
      break;
    }
    case 17: {
      return $thiz.cf;
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
      return $thiz.eB;
      break;
    }
    case 1: {
      return $thiz.cy;
      break;
    }
    case 2: {
      return $thiz.cz;
      break;
    }
    case 3: {
      return $thiz.cA;
      break;
    }
    case 4: {
      return $thiz.cB;
      break;
    }
    case 5: {
      return $thiz.cC;
      break;
    }
    case 6: {
      return $thiz.cD;
      break;
    }
    case 7: {
      return $thiz.cE;
      break;
    }
    case 8: {
      return $thiz.cF;
      break;
    }
    case 9: {
      return $thiz.co;
      break;
    }
    case 10: {
      return $thiz.cp;
      break;
    }
    case 11: {
      return $thiz.cq;
      break;
    }
    case 12: {
      return $thiz.cr;
      break;
    }
    case 13: {
      return $thiz.cs;
      break;
    }
    case 14: {
      return $thiz.ct;
      break;
    }
    case 15: {
      return $thiz.cu;
      break;
    }
    case 16: {
      return $thiz.cv;
      break;
    }
    case 17: {
      return $thiz.cw;
      break;
    }
    case 18: {
      return $thiz.cx;
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
      return $thiz.G();
      break;
    }
    case 1: {
      return $thiz.F();
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
      return $thiz.eC;
      break;
    }
    case 1: {
      return $thiz.cQ;
      break;
    }
    case 2: {
      return $thiz.cS;
      break;
    }
    case 3: {
      return $thiz.cT;
      break;
    }
    case 4: {
      return $thiz.cU;
      break;
    }
    case 5: {
      return $thiz.cV;
      break;
    }
    case 6: {
      return $thiz.cW;
      break;
    }
    case 7: {
      return $thiz.cX;
      break;
    }
    case 8: {
      return $thiz.cY;
      break;
    }
    case 9: {
      return $thiz.cG;
      break;
    }
    case 10: {
      return $thiz.cH;
      break;
    }
    case 11: {
      return $thiz.cI;
      break;
    }
    case 12: {
      return $thiz.cJ;
      break;
    }
    case 13: {
      return $thiz.cK;
      break;
    }
    case 14: {
      return $thiz.cL;
      break;
    }
    case 15: {
      return $thiz.cM;
      break;
    }
    case 16: {
      return $thiz.cN;
      break;
    }
    case 17: {
      return $thiz.cO;
      break;
    }
    case 18: {
      return $thiz.cP;
      break;
    }
    case 19: {
      return $thiz.cR;
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
      return $thiz.eD;
      break;
    }
    case 1: {
      return $thiz.d9;
      break;
    }
    case 2: {
      return $thiz.dc;
      break;
    }
    case 3: {
      return $thiz.dd;
      break;
    }
    case 4: {
      return $thiz.de;
      break;
    }
    case 5: {
      return $thiz.df;
      break;
    }
    case 6: {
      return $thiz.dg;
      break;
    }
    case 7: {
      return $thiz.dh;
      break;
    }
    case 8: {
      return $thiz.di;
      break;
    }
    case 9: {
      return $thiz.cZ;
      break;
    }
    case 10: {
      return $thiz.d0;
      break;
    }
    case 11: {
      return $thiz.d1;
      break;
    }
    case 12: {
      return $thiz.d2;
      break;
    }
    case 13: {
      return $thiz.d3;
      break;
    }
    case 14: {
      return $thiz.d4;
      break;
    }
    case 15: {
      return $thiz.d5;
      break;
    }
    case 16: {
      return $thiz.d6;
      break;
    }
    case 17: {
      return $thiz.d7;
      break;
    }
    case 18: {
      return $thiz.d8;
      break;
    }
    case 19: {
      return $thiz.da;
      break;
    }
    case 20: {
      return $thiz.db;
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
      return $thiz.eE;
      break;
    }
    case 1: {
      return $thiz.du;
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
      return $thiz.dj;
      break;
    }
    case 10: {
      return $thiz.dk;
      break;
    }
    case 11: {
      return $thiz.dl;
      break;
    }
    case 12: {
      return $thiz.dm;
      break;
    }
    case 13: {
      return $thiz.dn;
      break;
    }
    case 14: {
      return $thiz.dp;
      break;
    }
    case 15: {
      return $thiz.dq;
      break;
    }
    case 16: {
      return $thiz.dr;
      break;
    }
    case 17: {
      return $thiz.ds;
      break;
    }
    case 18: {
      return $thiz.dt;
      break;
    }
    case 19: {
      return $thiz.dv;
      break;
    }
    case 20: {
      return $thiz.dw;
      break;
    }
    case 21: {
      return $thiz.dx;
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
      return $thiz.dF;
      break;
    }
    case 1: {
      return $thiz.ak;
      break;
    }
    case 2: {
      return $thiz.al;
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
      return $thiz.dG;
      break;
    }
    case 1: {
      return $thiz.am;
      break;
    }
    case 2: {
      return $thiz.an;
      break;
    }
    case 3: {
      return $thiz.ao;
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
      return $thiz.eF;
      break;
    }
    case 1: {
      return $thiz.dH;
      break;
    }
    case 2: {
      return $thiz.dI;
      break;
    }
    case 3: {
      return $thiz.dJ;
      break;
    }
    case 4: {
      return $thiz.dK;
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
      return $thiz.eG;
      break;
    }
    case 1: {
      return $thiz.dL;
      break;
    }
    case 2: {
      return $thiz.dM;
      break;
    }
    case 3: {
      return $thiz.dN;
      break;
    }
    case 4: {
      return $thiz.dO;
      break;
    }
    case 5: {
      return $thiz.dP;
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
      return $thiz.eH;
      break;
    }
    case 1: {
      return $thiz.dQ;
      break;
    }
    case 2: {
      return $thiz.dR;
      break;
    }
    case 3: {
      return $thiz.dS;
      break;
    }
    case 4: {
      return $thiz.dT;
      break;
    }
    case 5: {
      return $thiz.dU;
      break;
    }
    case 6: {
      return $thiz.dV;
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
      return $thiz.eI;
      break;
    }
    case 1: {
      return $thiz.dW;
      break;
    }
    case 2: {
      return $thiz.dX;
      break;
    }
    case 3: {
      return $thiz.dY;
      break;
    }
    case 4: {
      return $thiz.dZ;
      break;
    }
    case 5: {
      return $thiz.e0;
      break;
    }
    case 6: {
      return $thiz.e1;
      break;
    }
    case 7: {
      return $thiz.e2;
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
      return $thiz.eJ;
      break;
    }
    case 1: {
      return $thiz.e3;
      break;
    }
    case 2: {
      return $thiz.e4;
      break;
    }
    case 3: {
      return $thiz.e5;
      break;
    }
    case 4: {
      return $thiz.e6;
      break;
    }
    case 5: {
      return $thiz.e7;
      break;
    }
    case 6: {
      return $thiz.e8;
      break;
    }
    case 7: {
      return $thiz.e9;
      break;
    }
    case 8: {
      return $thiz.ea;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException((n + " is out of bounds (min 0, max 8)"));
    }
  }
}
function $f_sc_Iterator__concat__F0__sc_Iterator($thiz, xs) {
  return new $c_sc_Iterator$ConcatIterator($thiz).kp(xs);
}
function $f_sc_Iterator__sliceIterator__I__I__sc_Iterator($thiz, from, until) {
  var lo = ((from > 0) ? from : 0);
  var rest = ((until < 0) ? (-1) : ((until <= lo) ? 0 : ((until - lo) | 0)));
  return ((rest === 0) ? $m_sc_Iterator$().aa : new $c_sc_Iterator$SliceIterator($thiz, lo, rest));
}
function $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz, that) {
  var those = that.B();
  while ($thiz.v()) {
    if ((!those.v())) {
      return false;
    }
    if ((!$m_sr_BoxesRunTime$().a($thiz.r(), those.r()))) {
      return false;
    }
  }
  return (!those.v());
}
/** @constructor */
function $c_sc_Iterator$() {
  this.aa = null;
  $n_sc_Iterator$ = this;
  this.aa = new $c_sc_Iterator$$anon$19();
}
$p = $c_sc_Iterator$.prototype = new $h_O();
$p.constructor = $c_sc_Iterator$;
/** @constructor */
function $h_sc_Iterator$() {
}
$h_sc_Iterator$.prototype = $p;
var $d_sc_Iterator$ = new $TypeData().i($c_sc_Iterator$, "scala.collection.Iterator$", ({
  c3: 1,
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
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.cy)));
}
/** @constructor */
function $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c(f) {
  this.ik = null;
  this.ik = f;
}
$p = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = new $h_sr_AbstractFunction0();
$p.constructor = $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c;
/** @constructor */
function $h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c() {
}
$h_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c.prototype = $p;
$p.f5 = (function() {
  return (0, this.ik)();
});
var $d_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c = new $TypeData().i($c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c, "scala.runtime.AbstractFunction0.$$Lambda$07eded5776954a9c145e92c329afd52873ad179c", ({
  cH: 1,
  cG: 1,
  bp: 1
}));
/** @constructor */
function $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919(f) {
  this.il = null;
  this.il = f;
}
$p = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = new $h_sr_AbstractFunction1();
$p.constructor = $c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919;
/** @constructor */
function $h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919() {
}
$h_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919.prototype = $p;
$p.s = (function(x0) {
  return (0, this.il)(x0);
});
var $d_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919 = new $TypeData().i($c_sr_AbstractFunction1_$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919, "scala.runtime.AbstractFunction1.$$Lambda$7afc3dd0acc1681fb022ef921c83979087aaa919", ({
  cJ: 1,
  cI: 1,
  k: 1
}));
/** @constructor */
function $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8(f) {
  this.im = null;
  this.im = f;
}
$p = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = new $h_sr_AbstractFunction2();
$p.constructor = $c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8;
/** @constructor */
function $h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8() {
}
$h_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8.prototype = $p;
$p.gA = (function(x0, x1) {
  return (0, this.im)(x0, x1);
});
var $d_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8 = new $TypeData().i($c_sr_AbstractFunction2_$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8, "scala.runtime.AbstractFunction2.$$Lambda$b4228bd32034ae3b2f0c5fc896319aa4b79b55f8", ({
  cL: 1,
  cK: 1,
  bq: 1
}));
/** @constructor */
function $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825(f) {
  this.io = null;
  this.io = f;
}
$p = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = new $h_sr_AbstractFunction3();
$p.constructor = $c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825;
/** @constructor */
function $h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825() {
}
$h_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825.prototype = $p;
$p.jm = (function(x0, x1, x2) {
  return (0, this.io)(x0, x1, x2);
});
var $d_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825 = new $TypeData().i($c_sr_AbstractFunction3_$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825, "scala.runtime.AbstractFunction3.$$Lambda$d1e06cbab540de4f9f09e7182f18ea80659b9825", ({
  cN: 1,
  cM: 1,
  br: 1
}));
/** @constructor */
function $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a(f) {
  this.ip = null;
  this.ip = f;
}
$p = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = new $h_sr_AbstractFunction4();
$p.constructor = $c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a;
/** @constructor */
function $h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a() {
}
$h_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a.prototype = $p;
$p.ke = (function(x0, x1, x2, x3) {
  return (0, this.ip)(x0, x1, x2, x3);
});
var $d_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a = new $TypeData().i($c_sr_AbstractFunction4_$$Lambda$451042f443265710aa66de6985cba67480d9b00a, "scala.runtime.AbstractFunction4.$$Lambda$451042f443265710aa66de6985cba67480d9b00a", ({
  cP: 1,
  cO: 1,
  bs: 1
}));
var $d_sr_Nothing$ = new $TypeData().i(0, "scala.runtime.Nothing$", ({
  cT: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_sr_TupleXXL(es) {
  this.D = null;
  this.D = es;
  if ((es.b.length <= 22)) {
    $m_sr_Scala3RunTime$().ki();
  }
}
$p = $c_sr_TupleXXL.prototype = new $h_O();
$p.constructor = $c_sr_TupleXXL;
/** @constructor */
function $h_sr_TupleXXL() {
}
$h_sr_TupleXXL.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.h = (function(n) {
  return this.D.b[n];
});
$p.l = (function() {
  return this.D.b.length;
});
$p.m = (function() {
  return "Tuple";
});
$p.e = (function() {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($m_s_Predef$().mv(this.D), "(", ",", ")");
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().km(this, (-889275714), null);
});
$p.g = (function(that) {
  if ((that instanceof $c_sr_TupleXXL)) {
    if ((this.D === that.D)) {
      return true;
    } else {
      if ((this.D.b.length !== that.D.b.length)) {
        return false;
      }
      var i = 0;
      while ((i < this.D.b.length)) {
        var $x_2 = $m_sr_BoxesRunTime$();
        var arr$3 = this.D;
        var n = i;
        var $x_1 = arr$3.b[n];
        var arr$4 = that.D;
        var n$1 = i;
        if ((!$x_2.a($x_1, arr$4.b[n$1]))) {
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
$p.fO = (function(f) {
  return ((arg1$2) => f.s(arg1$2));
});
var $d_sjs_js_Any$ = new $TypeData().i($c_sjs_js_Any$, "scala.scalajs.js.Any$", ({
  d1: 1,
  d5: 1,
  d6: 1
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
$p.s = (function(x) {
  return $ct_Ltrivalibs_graphics_math_gpu_Expr__T__(new $c_Ltrivalibs_graphics_math_gpu_Expr(), $m_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$().kJ((+x)));
});
var $d_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1 = new $TypeData().i($c_Ltrivalibs_graphics_math_gpu_float\uff3fexpr$package$$anon$1, "trivalibs.graphics.math.gpu.float_expr$package$$anon$1", ({
  ef: 1,
  bo: 1,
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
        deps = ((rest[0] === (void 0)) ? $m_Ltrivalibs_graphics_shader_dsl_WgslFnData$().k8() : rest[0]);
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
  this.C = null;
  this.C = "";
}
$p = $c_jl_StringBuilder.prototype = new $h_O();
$p.constructor = $c_jl_StringBuilder;
/** @constructor */
function $h_jl_StringBuilder() {
}
$h_jl_StringBuilder.prototype = $p;
$p.e = (function() {
  return this.C;
});
$p.t = (function() {
  return this.C.length;
});
$p.jp = (function(index) {
  return this.C.charCodeAt(index);
});
var $d_jl_StringBuilder = new $TypeData().i($c_jl_StringBuilder, "java.lang.StringBuilder", ({
  bc: 1,
  F: 1,
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
$p.I = (function() {
  return (-1);
});
$p.hL = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.B = (function() {
  return this;
});
$p.gB = (function(n) {
  return this.gJ(n, (-1));
});
$p.gJ = (function(from, until) {
  return $f_sc_Iterator__sliceIterator__I__I__sc_Iterator(this, from, until);
});
$p.e = (function() {
  return "<iterator>";
});
function $f_sc_SeqOps__isEmpty__Z($thiz) {
  return ($thiz.el(0) === 0);
}
function $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that) {
  var thisKnownSize = $thiz.I();
  if ((thisKnownSize !== (-1))) {
    var thatKnownSize = that.I();
    if ((thatKnownSize !== (-1))) {
      if ((thisKnownSize !== thatKnownSize)) {
        return false;
      }
      if ((thisKnownSize === 0)) {
        return true;
      }
    }
  }
  return $f_sc_Iterator__sameElements__sc_IterableOnce__Z($thiz.B(), that);
}
function $isArrayOf_s_util_CommandLineParser$ParseError(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.de)));
}
/** @constructor */
function $c_Lsketches_rooms_gridceiling_GridData(faces, texSize) {
  this.eN = null;
  this.eO = null;
  this.eN = faces;
  this.eO = texSize;
}
$p = $c_Lsketches_rooms_gridceiling_GridData.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_gridceiling_GridData;
/** @constructor */
function $h_Lsketches_rooms_gridceiling_GridData() {
}
$h_Lsketches_rooms_gridceiling_GridData.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-34104859), true);
});
$p.g = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_rooms_gridceiling_GridData)) {
    if ($m_sr_BoxesRunTime$().a(this.eN, x$0.eN)) {
      var x$1 = this.eO;
      var x$2 = x$0.eO;
      return ((x$1 === null) ? (x$2 === null) : x$1.g(x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.e = (function() {
  return $m_sr_ScalaRunTime$().hK(this);
});
$p.l = (function() {
  return 2;
});
$p.m = (function() {
  return "GridData";
});
$p.h = (function(n) {
  if ((n === 0)) {
    return this.eN;
  }
  if ((n === 1)) {
    return this.eO;
  }
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
function $isArrayOf_Lsketches_rooms_gridceiling_GridData(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aH)));
}
var $d_Lsketches_rooms_gridceiling_GridData = new $TypeData().i($c_Lsketches_rooms_gridceiling_GridData, "sketches.rooms.gridceiling.GridData", ({
  aH: 1,
  b: 1,
  c: 1,
  a: 1
}));
/** @constructor */
function $c_Lsketches_rooms_gridceiling_GridProps(gridWidth, gridHeight, count, stripWidth, stripHeight, center) {
  this.af = 0.0;
  this.ae = 0.0;
  this.ad = 0;
  this.U = 0.0;
  this.T = 0.0;
  this.ed = null;
  this.af = gridWidth;
  this.ae = gridHeight;
  this.ad = count;
  this.U = stripWidth;
  this.T = stripHeight;
  this.ed = center;
}
$p = $c_Lsketches_rooms_gridceiling_GridProps.prototype = new $h_O();
$p.constructor = $c_Lsketches_rooms_gridceiling_GridProps;
/** @constructor */
function $h_Lsketches_rooms_gridceiling_GridProps() {
}
$h_Lsketches_rooms_gridceiling_GridProps.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  var acc = (-889275714);
  acc = $m_sr_Statics$().j(acc, (-1024423510));
  acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().fM(this.af));
  acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().fM(this.ae));
  acc = $m_sr_Statics$().j(acc, this.ad);
  acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().fM(this.U));
  acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().fM(this.T));
  acc = $m_sr_Statics$().j(acc, $m_sr_Statics$().x(this.ed));
  return $m_sr_Statics$().H(acc, 6);
});
$p.g = (function(x$0) {
  if ((this === x$0)) {
    return true;
  } else if ((x$0 instanceof $c_Lsketches_rooms_gridceiling_GridProps)) {
    if ((((((this.af === x$0.af) && (this.ae === x$0.ae)) && (this.ad === x$0.ad)) && (this.U === x$0.U)) && (this.T === x$0.T))) {
      var x = this.ed;
      var x$2 = x$0.ed;
      return ((x === null) ? (x$2 === null) : (x === x$2));
    } else {
      return false;
    }
  } else {
    return false;
  }
});
$p.e = (function() {
  return $m_sr_ScalaRunTime$().hK(this);
});
$p.l = (function() {
  return 6;
});
$p.m = (function() {
  return "GridProps";
});
$p.h = (function(n) {
  switch (n) {
    case 0: {
      return this.af;
      break;
    }
    case 1: {
      return this.ae;
      break;
    }
    case 2: {
      return this.ad;
      break;
    }
    case 3: {
      return this.U;
      break;
    }
    case 4: {
      return this.T;
      break;
    }
    case 5: {
      return this.ed;
      break;
    }
    default: {
      throw new $c_jl_IndexOutOfBoundsException(("" + n));
    }
  }
});
function $isArrayOf_Lsketches_rooms_gridceiling_GridProps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aI)));
}
var $d_Lsketches_rooms_gridceiling_GridProps = new $TypeData().i($c_Lsketches_rooms_gridceiling_GridProps, "sketches.rooms.gridceiling.GridProps", ({
  aI: 1,
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
$p.fP = (function(m) {
  return m.h3;
});
$p.fQ = (function(m) {
  return m.h4;
});
$p.fR = (function(m) {
  return m.h5;
});
$p.fS = (function(m) {
  return m.h6;
});
$p.fT = (function(m) {
  return m.h7;
});
$p.fU = (function(m) {
  return m.h8;
});
$p.fV = (function(m) {
  return m.h9;
});
$p.fW = (function(m) {
  return m.ha;
});
$p.fX = (function(m) {
  return m.hb;
});
$p.fY = (function(m) {
  return m.hc;
});
$p.fZ = (function(m) {
  return m.hd;
});
$p.g0 = (function(m) {
  return m.he;
});
$p.g1 = (function(m) {
  return m.hf;
});
$p.g2 = (function(m) {
  return m.hg;
});
$p.g3 = (function(m) {
  return m.hh;
});
$p.g4 = (function(m) {
  return m.hi;
});
$p.jy = (function(m, v) {
  m.h3 = v;
});
$p.jz = (function(m, v) {
  m.h4 = v;
});
$p.jA = (function(m, v) {
  m.h5 = v;
});
$p.jB = (function(m, v) {
  m.h6 = v;
});
$p.jC = (function(m, v) {
  m.h7 = v;
});
$p.jD = (function(m, v) {
  m.h8 = v;
});
$p.jE = (function(m, v) {
  m.h9 = v;
});
$p.jF = (function(m, v) {
  m.ha = v;
});
$p.jG = (function(m, v) {
  m.hb = v;
});
$p.jH = (function(m, v) {
  m.hc = v;
});
$p.jI = (function(m, v) {
  m.hd = v;
});
$p.jJ = (function(m, v) {
  m.he = v;
});
$p.jK = (function(m, v) {
  m.hf = v;
});
$p.jL = (function(m, v) {
  m.hg = v;
});
$p.jM = (function(m, v) {
  m.hh = v;
});
$p.jN = (function(m, v) {
  m.hi = v;
});
var $d_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Mat4$given\uff3fMat4Mutable\uff3fMat4$, "trivalibs.graphics.math.cpu.Mat4$given_Mat4Mutable_Mat4$", ({
  dZ: 1,
  T: 1,
  aM: 1,
  aN: 1
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
$p.jX = (function(v) {
  return v.V;
});
var $d_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_Quat$given\uff3fVec4Mutable\uff3fQuat$, "trivalibs.graphics.math.cpu.Quat$given_Vec4Mutable_Quat$", ({
  e3: 1,
  aP: 1,
  dU: 1,
  dW: 1
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
  e8: 1,
  aO: 1,
  dQ: 1,
  dT: 1
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
$p.lc = (function(m) {
  var offset$proxy1 = (m.off | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy1, true));
});
$p.le = (function(m) {
  var offset$proxy2 = ((4 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy2, true));
});
$p.lg = (function(m) {
  var offset$proxy3 = ((8 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy3, true));
});
$p.li = (function(m) {
  var offset$proxy4 = ((12 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy4, true));
});
$p.lk = (function(m) {
  var offset$proxy5 = ((16 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy5, true));
});
$p.lm = (function(m) {
  var offset$proxy6 = ((20 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy6, true));
});
$p.lo = (function(m) {
  var offset$proxy7 = ((24 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy7, true));
});
$p.lq = (function(m) {
  var offset$proxy8 = ((28 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy8, true));
});
$p.ls = (function(m) {
  var offset$proxy9 = ((32 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy9, true));
});
$p.lu = (function(m) {
  var offset$proxy10 = ((36 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy10, true));
});
$p.lw = (function(m) {
  var offset$proxy11 = ((40 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy11, true));
});
$p.ly = (function(m) {
  var offset$proxy12 = ((44 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy12, true));
});
$p.lA = (function(m) {
  var offset$proxy13 = ((48 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy13, true));
});
$p.lC = (function(m) {
  var offset$proxy14 = ((52 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy14, true));
});
$p.lE = (function(m) {
  var offset$proxy15 = ((56 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy15, true));
});
$p.lG = (function(m) {
  var offset$proxy16 = ((60 + (m.off | 0)) | 0);
  return Math.fround(m.dv.getFloat32(offset$proxy16, true));
});
$p.ld = (function(m, v) {
  var value$proxy1 = Math.fround(v);
  var offset$proxy17 = (m.off | 0);
  m.dv.setFloat32(offset$proxy17, value$proxy1, true);
});
$p.lf = (function(m, v) {
  var value$proxy2 = Math.fround(v);
  var offset$proxy18 = ((4 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy18, value$proxy2, true);
});
$p.lh = (function(m, v) {
  var value$proxy3 = Math.fround(v);
  var offset$proxy19 = ((8 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy19, value$proxy3, true);
});
$p.lj = (function(m, v) {
  var value$proxy4 = Math.fround(v);
  var offset$proxy20 = ((12 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy20, value$proxy4, true);
});
$p.ll = (function(m, v) {
  var value$proxy5 = Math.fround(v);
  var offset$proxy21 = ((16 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy21, value$proxy5, true);
});
$p.ln = (function(m, v) {
  var value$proxy6 = Math.fround(v);
  var offset$proxy22 = ((20 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy22, value$proxy6, true);
});
$p.lp = (function(m, v) {
  var value$proxy7 = Math.fround(v);
  var offset$proxy23 = ((24 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy23, value$proxy7, true);
});
$p.lr = (function(m, v) {
  var value$proxy8 = Math.fround(v);
  var offset$proxy24 = ((28 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy24, value$proxy8, true);
});
$p.lt = (function(m, v) {
  var value$proxy9 = Math.fround(v);
  var offset$proxy25 = ((32 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy25, value$proxy9, true);
});
$p.lv = (function(m, v) {
  var value$proxy10 = Math.fround(v);
  var offset$proxy26 = ((36 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy26, value$proxy10, true);
});
$p.lx = (function(m, v) {
  var value$proxy11 = Math.fround(v);
  var offset$proxy27 = ((40 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy27, value$proxy11, true);
});
$p.lz = (function(m, v) {
  var value$proxy12 = Math.fround(v);
  var offset$proxy28 = ((44 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy28, value$proxy12, true);
});
$p.lB = (function(m, v) {
  var value$proxy13 = Math.fround(v);
  var offset$proxy29 = ((48 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy29, value$proxy13, true);
});
$p.lD = (function(m, v) {
  var value$proxy14 = Math.fround(v);
  var offset$proxy30 = ((52 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy30, value$proxy14, true);
});
$p.lF = (function(m, v) {
  var value$proxy15 = Math.fround(v);
  var offset$proxy31 = ((56 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy31, value$proxy15, true);
});
$p.lH = (function(m, v) {
  var value$proxy16 = Math.fround(v);
  var offset$proxy32 = ((60 + (m.off | 0)) | 0);
  m.dv.setFloat32(offset$proxy32, value$proxy16, true);
});
$p.fP = (function(m) {
  return this.lc(m);
});
$p.fQ = (function(m) {
  return this.le(m);
});
$p.fR = (function(m) {
  return this.lg(m);
});
$p.fS = (function(m) {
  return this.li(m);
});
$p.fT = (function(m) {
  return this.lk(m);
});
$p.fU = (function(m) {
  return this.lm(m);
});
$p.fV = (function(m) {
  return this.lo(m);
});
$p.fW = (function(m) {
  return this.lq(m);
});
$p.fX = (function(m) {
  return this.ls(m);
});
$p.fY = (function(m) {
  return this.lu(m);
});
$p.fZ = (function(m) {
  return this.lw(m);
});
$p.g0 = (function(m) {
  return this.ly(m);
});
$p.g1 = (function(m) {
  return this.lA(m);
});
$p.g2 = (function(m) {
  return this.lC(m);
});
$p.g3 = (function(m) {
  return this.lE(m);
});
$p.g4 = (function(m) {
  return this.lG(m);
});
$p.jy = (function(m, v) {
  this.ld(m, v);
});
$p.jz = (function(m, v) {
  this.lf(m, v);
});
$p.jA = (function(m, v) {
  this.lh(m, v);
});
$p.jB = (function(m, v) {
  this.lj(m, v);
});
$p.jC = (function(m, v) {
  this.ll(m, v);
});
$p.jD = (function(m, v) {
  this.ln(m, v);
});
$p.jE = (function(m, v) {
  this.lp(m, v);
});
$p.jF = (function(m, v) {
  this.lr(m, v);
});
$p.jG = (function(m, v) {
  this.lt(m, v);
});
$p.jH = (function(m, v) {
  this.lv(m, v);
});
$p.jI = (function(m, v) {
  this.lx(m, v);
});
$p.jJ = (function(m, v) {
  this.lz(m, v);
});
$p.jK = (function(m, v) {
  this.lB(m, v);
});
$p.jL = (function(m, v) {
  this.lD(m, v);
});
$p.jM = (function(m, v) {
  this.lF(m, v);
});
$p.jN = (function(m, v) {
  this.lH(m, v);
});
var $d_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$ = new $TypeData().i($c_Ltrivalibs_graphics_math_cpu_mat4$package$Mat4Buffer$given\uff3fMat4Mutable\uff3fStructRef$, "trivalibs.graphics.math.cpu.mat4$package$Mat4Buffer$given_Mat4Mutable_StructRef$", ({
  eb: 1,
  T: 1,
  aM: 1,
  aN: 1
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
  var all = [vertexInputStruct, vertexOutputStruct, fragmentOutputStruct, uniformDecls, $thiz.fw, f$proxy1, g$proxy1];
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
  this.f2 = null;
  this.f1 = null;
  this.fw = null;
  this.f2 = vertexBody;
  this.f1 = fragmentBody;
  this.fw = helperFns;
}
$p = $c_Ltrivalibs_graphics_shader_ShaderDef.prototype = new $h_O();
$p.constructor = $c_Ltrivalibs_graphics_shader_ShaderDef;
/** @constructor */
function $h_Ltrivalibs_graphics_shader_ShaderDef() {
}
$h_Ltrivalibs_graphics_shader_ShaderDef.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-1488826029), true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_Ltrivalibs_graphics_shader_ShaderDef) && (((this.f2 === x$0.f2) && (this.f1 === x$0.f1)) && (this.fw === x$0.fw))));
});
$p.e = (function() {
  return $m_sr_ScalaRunTime$().hK(this);
});
$p.l = (function() {
  return 3;
});
$p.m = (function() {
  return "ShaderDef";
});
$p.h = (function(n) {
  switch (n) {
    case 0: {
      return this.f2;
      break;
    }
    case 1: {
      return this.f1;
      break;
    }
    case 2: {
      return this.fw;
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
  aX: 1,
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
  b2: 1,
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
  b6: 1,
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
  b7: 1,
  j: 1,
  i: 1,
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
  bf: 1,
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
  bk: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
function $p_s_MatchError__objString__T($thiz) {
  if ((!$thiz.i9)) {
    if (($thiz.ga === null)) {
      var $x_1 = "null";
    } else {
      var this$1 = $thiz.ga;
      var cls = $objectGetClass(this$1);
      var ofClass = ((cls === null) ? "of a JS class" : ("of class " + cls.gL.N));
      try {
        var $x_1 = ((($thiz.ga + " (") + ofClass) + ")");
      } catch (e) {
        var $x_1 = ("an instance " + ofClass);
      }
    }
    $thiz.i8 = $x_1;
    $thiz.i9 = true;
  }
  return $thiz.i8;
}
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.ga = null;
    this.i8 = null;
    this.i9 = false;
    this.ga = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gC() {
    return $p_s_MatchError__objString__T(this);
  }
}
var $d_s_MatchError = new $TypeData().i($c_s_MatchError, "scala.MatchError", ({
  bv: 1,
  j: 1,
  i: 1,
  f: 1,
  a: 1
}));
/** @constructor */
function $c_s_Product$$anon$1(outer) {
  this.fa = 0;
  this.ib = 0;
  this.ia = null;
  if ((outer === null)) {
    throw $ct_jl_NullPointerException__(new $c_jl_NullPointerException());
  }
  this.ia = outer;
  this.fa = 0;
  this.ib = outer.l();
}
$p = $c_s_Product$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_s_Product$$anon$1;
/** @constructor */
function $h_s_Product$$anon$1() {
}
$h_s_Product$$anon$1.prototype = $p;
$p.v = (function() {
  return (this.fa < this.ib);
});
$p.r = (function() {
  var result = this.ia.h(this.fa);
  this.fa = ((1 + this.fa) | 0);
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
  this.er = null;
  this.er = _1;
}
$p = $c_T1.prototype = new $h_O();
$p.constructor = $c_T1;
/** @constructor */
function $h_T1() {
}
$h_T1.prototype = $p;
$p.l = (function() {
  return 1;
});
$p.h = (function(n) {
  return $f_s_Product1__productElement__I__O(this, n);
});
$p.e = (function() {
  return (("(" + this.er) + ")");
});
$p.m = (function() {
  return "Tuple1";
});
$p.o = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 1228477340, true);
});
$p.g = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T1) && $m_sr_BoxesRunTime$().a(this.er, x$1.er)));
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
  this.es = null;
  this.aw = null;
  this.ax = null;
  this.ay = null;
  this.az = null;
  this.aA = null;
  this.aB = null;
  this.aC = null;
  this.aD = null;
  this.av = null;
  this.es = _1;
  this.aw = _2;
  this.ax = _3;
  this.ay = _4;
  this.az = _5;
  this.aA = _6;
  this.aB = _7;
  this.aC = _8;
  this.aD = _9;
  this.av = _10;
}
$p = $c_T10.prototype = new $h_O();
$p.constructor = $c_T10;
/** @constructor */
function $h_T10() {
}
$h_T10.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 10;
});
$p.h = (function(n) {
  return $f_s_Product10__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 2104595240, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T10) && ((((((((($m_sr_BoxesRunTime$().a(this.es, x$0.es) && $m_sr_BoxesRunTime$().a(this.aw, x$0.aw)) && $m_sr_BoxesRunTime$().a(this.ax, x$0.ax)) && $m_sr_BoxesRunTime$().a(this.ay, x$0.ay)) && $m_sr_BoxesRunTime$().a(this.az, x$0.az)) && $m_sr_BoxesRunTime$().a(this.aA, x$0.aA)) && $m_sr_BoxesRunTime$().a(this.aB, x$0.aB)) && $m_sr_BoxesRunTime$().a(this.aC, x$0.aC)) && $m_sr_BoxesRunTime$().a(this.aD, x$0.aD)) && $m_sr_BoxesRunTime$().a(this.av, x$0.av))));
});
$p.m = (function() {
  return "Tuple10";
});
$p.e = (function() {
  return (((((((((((((((((((("(" + this.es) + ",") + this.aw) + ",") + this.ax) + ",") + this.ay) + ",") + this.az) + ",") + this.aA) + ",") + this.aB) + ",") + this.aC) + ",") + this.aD) + ",") + this.av) + ")");
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
  this.et = null;
  this.aG = null;
  this.aH = null;
  this.aI = null;
  this.aJ = null;
  this.aK = null;
  this.aL = null;
  this.aM = null;
  this.aN = null;
  this.aE = null;
  this.aF = null;
  this.et = _1;
  this.aG = _2;
  this.aH = _3;
  this.aI = _4;
  this.aJ = _5;
  this.aK = _6;
  this.aL = _7;
  this.aM = _8;
  this.aN = _9;
  this.aE = _10;
  this.aF = _11;
}
$p = $c_T11.prototype = new $h_O();
$p.constructor = $c_T11;
/** @constructor */
function $h_T11() {
}
$h_T11.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 11;
});
$p.h = (function(n) {
  return $f_s_Product11__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 838406606, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T11) && (((((((((($m_sr_BoxesRunTime$().a(this.et, x$0.et) && $m_sr_BoxesRunTime$().a(this.aG, x$0.aG)) && $m_sr_BoxesRunTime$().a(this.aH, x$0.aH)) && $m_sr_BoxesRunTime$().a(this.aI, x$0.aI)) && $m_sr_BoxesRunTime$().a(this.aJ, x$0.aJ)) && $m_sr_BoxesRunTime$().a(this.aK, x$0.aK)) && $m_sr_BoxesRunTime$().a(this.aL, x$0.aL)) && $m_sr_BoxesRunTime$().a(this.aM, x$0.aM)) && $m_sr_BoxesRunTime$().a(this.aN, x$0.aN)) && $m_sr_BoxesRunTime$().a(this.aE, x$0.aE)) && $m_sr_BoxesRunTime$().a(this.aF, x$0.aF))));
});
$p.m = (function() {
  return "Tuple11";
});
$p.e = (function() {
  return (((((((((((((((((((((("(" + this.et) + ",") + this.aG) + ",") + this.aH) + ",") + this.aI) + ",") + this.aJ) + ",") + this.aK) + ",") + this.aL) + ",") + this.aM) + ",") + this.aN) + ",") + this.aE) + ",") + this.aF) + ")");
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
  this.eu = null;
  this.aR = null;
  this.aS = null;
  this.aT = null;
  this.aU = null;
  this.aV = null;
  this.aW = null;
  this.aX = null;
  this.aY = null;
  this.aO = null;
  this.aP = null;
  this.aQ = null;
  this.eu = _1;
  this.aR = _2;
  this.aS = _3;
  this.aT = _4;
  this.aU = _5;
  this.aV = _6;
  this.aW = _7;
  this.aX = _8;
  this.aY = _9;
  this.aO = _10;
  this.aP = _11;
  this.aQ = _12;
}
$p = $c_T12.prototype = new $h_O();
$p.constructor = $c_T12;
/** @constructor */
function $h_T12() {
}
$h_T12.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 12;
});
$p.h = (function(n) {
  return $f_s_Product12__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-1964145863), true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T12) && ((((((((((($m_sr_BoxesRunTime$().a(this.eu, x$0.eu) && $m_sr_BoxesRunTime$().a(this.aR, x$0.aR)) && $m_sr_BoxesRunTime$().a(this.aS, x$0.aS)) && $m_sr_BoxesRunTime$().a(this.aT, x$0.aT)) && $m_sr_BoxesRunTime$().a(this.aU, x$0.aU)) && $m_sr_BoxesRunTime$().a(this.aV, x$0.aV)) && $m_sr_BoxesRunTime$().a(this.aW, x$0.aW)) && $m_sr_BoxesRunTime$().a(this.aX, x$0.aX)) && $m_sr_BoxesRunTime$().a(this.aY, x$0.aY)) && $m_sr_BoxesRunTime$().a(this.aO, x$0.aO)) && $m_sr_BoxesRunTime$().a(this.aP, x$0.aP)) && $m_sr_BoxesRunTime$().a(this.aQ, x$0.aQ))));
});
$p.m = (function() {
  return "Tuple12";
});
$p.e = (function() {
  return (((((((((((((((((((((((("(" + this.eu) + ",") + this.aR) + ",") + this.aS) + ",") + this.aT) + ",") + this.aU) + ",") + this.aV) + ",") + this.aW) + ",") + this.aX) + ",") + this.aY) + ",") + this.aO) + ",") + this.aP) + ",") + this.aQ) + ")");
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
  this.ev = null;
  this.b3 = null;
  this.b4 = null;
  this.b5 = null;
  this.b6 = null;
  this.b7 = null;
  this.b8 = null;
  this.b9 = null;
  this.ba = null;
  this.aZ = null;
  this.b0 = null;
  this.b1 = null;
  this.b2 = null;
  this.ev = _1;
  this.b3 = _2;
  this.b4 = _3;
  this.b5 = _4;
  this.b6 = _5;
  this.b7 = _6;
  this.b8 = _7;
  this.b9 = _8;
  this.ba = _9;
  this.aZ = _10;
  this.b0 = _11;
  this.b1 = _12;
  this.b2 = _13;
}
$p = $c_T13.prototype = new $h_O();
$p.constructor = $c_T13;
/** @constructor */
function $h_T13() {
}
$h_T13.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 13;
});
$p.h = (function(n) {
  return $f_s_Product13__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 1224168367, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T13) && (((((((((((($m_sr_BoxesRunTime$().a(this.ev, x$0.ev) && $m_sr_BoxesRunTime$().a(this.b3, x$0.b3)) && $m_sr_BoxesRunTime$().a(this.b4, x$0.b4)) && $m_sr_BoxesRunTime$().a(this.b5, x$0.b5)) && $m_sr_BoxesRunTime$().a(this.b6, x$0.b6)) && $m_sr_BoxesRunTime$().a(this.b7, x$0.b7)) && $m_sr_BoxesRunTime$().a(this.b8, x$0.b8)) && $m_sr_BoxesRunTime$().a(this.b9, x$0.b9)) && $m_sr_BoxesRunTime$().a(this.ba, x$0.ba)) && $m_sr_BoxesRunTime$().a(this.aZ, x$0.aZ)) && $m_sr_BoxesRunTime$().a(this.b0, x$0.b0)) && $m_sr_BoxesRunTime$().a(this.b1, x$0.b1)) && $m_sr_BoxesRunTime$().a(this.b2, x$0.b2))));
});
$p.m = (function() {
  return "Tuple13";
});
$p.e = (function() {
  return (((((((((((((((((((((((((("(" + this.ev) + ",") + this.b3) + ",") + this.b4) + ",") + this.b5) + ",") + this.b6) + ",") + this.b7) + ",") + this.b8) + ",") + this.b9) + ",") + this.ba) + ",") + this.aZ) + ",") + this.b0) + ",") + this.b1) + ",") + this.b2) + ")");
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
  this.ew = null;
  this.bg = null;
  this.bh = null;
  this.bi = null;
  this.bj = null;
  this.bk = null;
  this.bl = null;
  this.bm = null;
  this.bn = null;
  this.bb = null;
  this.bc = null;
  this.bd = null;
  this.be = null;
  this.bf = null;
  this.ew = _1;
  this.bg = _2;
  this.bh = _3;
  this.bi = _4;
  this.bj = _5;
  this.bk = _6;
  this.bl = _7;
  this.bm = _8;
  this.bn = _9;
  this.bb = _10;
  this.bc = _11;
  this.bd = _12;
  this.be = _13;
  this.bf = _14;
}
$p = $c_T14.prototype = new $h_O();
$p.constructor = $c_T14;
/** @constructor */
function $h_T14() {
}
$h_T14.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 14;
});
$p.h = (function(n) {
  return $f_s_Product14__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 147759069, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T14) && ((((((((((((($m_sr_BoxesRunTime$().a(this.ew, x$0.ew) && $m_sr_BoxesRunTime$().a(this.bg, x$0.bg)) && $m_sr_BoxesRunTime$().a(this.bh, x$0.bh)) && $m_sr_BoxesRunTime$().a(this.bi, x$0.bi)) && $m_sr_BoxesRunTime$().a(this.bj, x$0.bj)) && $m_sr_BoxesRunTime$().a(this.bk, x$0.bk)) && $m_sr_BoxesRunTime$().a(this.bl, x$0.bl)) && $m_sr_BoxesRunTime$().a(this.bm, x$0.bm)) && $m_sr_BoxesRunTime$().a(this.bn, x$0.bn)) && $m_sr_BoxesRunTime$().a(this.bb, x$0.bb)) && $m_sr_BoxesRunTime$().a(this.bc, x$0.bc)) && $m_sr_BoxesRunTime$().a(this.bd, x$0.bd)) && $m_sr_BoxesRunTime$().a(this.be, x$0.be)) && $m_sr_BoxesRunTime$().a(this.bf, x$0.bf))));
});
$p.m = (function() {
  return "Tuple14";
});
$p.e = (function() {
  return (((((((((((((((((((((((((((("(" + this.ew) + ",") + this.bg) + ",") + this.bh) + ",") + this.bi) + ",") + this.bj) + ",") + this.bk) + ",") + this.bl) + ",") + this.bm) + ",") + this.bn) + ",") + this.bb) + ",") + this.bc) + ",") + this.bd) + ",") + this.be) + ",") + this.bf) + ")");
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
  this.ex = null;
  this.bu = null;
  this.bv = null;
  this.bw = null;
  this.bx = null;
  this.by = null;
  this.bz = null;
  this.bA = null;
  this.bB = null;
  this.bo = null;
  this.bp = null;
  this.bq = null;
  this.br = null;
  this.bs = null;
  this.bt = null;
  this.ex = _1;
  this.bu = _2;
  this.bv = _3;
  this.bw = _4;
  this.bx = _5;
  this.by = _6;
  this.bz = _7;
  this.bA = _8;
  this.bB = _9;
  this.bo = _10;
  this.bp = _11;
  this.bq = _12;
  this.br = _13;
  this.bs = _14;
  this.bt = _15;
}
$p = $c_T15.prototype = new $h_O();
$p.constructor = $c_T15;
/** @constructor */
function $h_T15() {
}
$h_T15.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 15;
});
$p.h = (function(n) {
  return $f_s_Product15__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 1834180931, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T15) && (((((((((((((($m_sr_BoxesRunTime$().a(this.ex, x$0.ex) && $m_sr_BoxesRunTime$().a(this.bu, x$0.bu)) && $m_sr_BoxesRunTime$().a(this.bv, x$0.bv)) && $m_sr_BoxesRunTime$().a(this.bw, x$0.bw)) && $m_sr_BoxesRunTime$().a(this.bx, x$0.bx)) && $m_sr_BoxesRunTime$().a(this.by, x$0.by)) && $m_sr_BoxesRunTime$().a(this.bz, x$0.bz)) && $m_sr_BoxesRunTime$().a(this.bA, x$0.bA)) && $m_sr_BoxesRunTime$().a(this.bB, x$0.bB)) && $m_sr_BoxesRunTime$().a(this.bo, x$0.bo)) && $m_sr_BoxesRunTime$().a(this.bp, x$0.bp)) && $m_sr_BoxesRunTime$().a(this.bq, x$0.bq)) && $m_sr_BoxesRunTime$().a(this.br, x$0.br)) && $m_sr_BoxesRunTime$().a(this.bs, x$0.bs)) && $m_sr_BoxesRunTime$().a(this.bt, x$0.bt))));
});
$p.m = (function() {
  return "Tuple15";
});
$p.e = (function() {
  return (((((((((((((((((((((((((((((("(" + this.ex) + ",") + this.bu) + ",") + this.bv) + ",") + this.bw) + ",") + this.bx) + ",") + this.by) + ",") + this.bz) + ",") + this.bA) + ",") + this.bB) + ",") + this.bo) + ",") + this.bp) + ",") + this.bq) + ",") + this.br) + ",") + this.bs) + ",") + this.bt) + ")");
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
  this.ey = null;
  this.bJ = null;
  this.bK = null;
  this.bL = null;
  this.bM = null;
  this.bN = null;
  this.bO = null;
  this.bP = null;
  this.bQ = null;
  this.bC = null;
  this.bD = null;
  this.bE = null;
  this.bF = null;
  this.bG = null;
  this.bH = null;
  this.bI = null;
  this.ey = _1;
  this.bJ = _2;
  this.bK = _3;
  this.bL = _4;
  this.bM = _5;
  this.bN = _6;
  this.bO = _7;
  this.bP = _8;
  this.bQ = _9;
  this.bC = _10;
  this.bD = _11;
  this.bE = _12;
  this.bF = _13;
  this.bG = _14;
  this.bH = _15;
  this.bI = _16;
}
$p = $c_T16.prototype = new $h_O();
$p.constructor = $c_T16;
/** @constructor */
function $h_T16() {
}
$h_T16.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 16;
});
$p.h = (function(n) {
  return $f_s_Product16__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 499793902, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T16) && ((((((((((((((($m_sr_BoxesRunTime$().a(this.ey, x$0.ey) && $m_sr_BoxesRunTime$().a(this.bJ, x$0.bJ)) && $m_sr_BoxesRunTime$().a(this.bK, x$0.bK)) && $m_sr_BoxesRunTime$().a(this.bL, x$0.bL)) && $m_sr_BoxesRunTime$().a(this.bM, x$0.bM)) && $m_sr_BoxesRunTime$().a(this.bN, x$0.bN)) && $m_sr_BoxesRunTime$().a(this.bO, x$0.bO)) && $m_sr_BoxesRunTime$().a(this.bP, x$0.bP)) && $m_sr_BoxesRunTime$().a(this.bQ, x$0.bQ)) && $m_sr_BoxesRunTime$().a(this.bC, x$0.bC)) && $m_sr_BoxesRunTime$().a(this.bD, x$0.bD)) && $m_sr_BoxesRunTime$().a(this.bE, x$0.bE)) && $m_sr_BoxesRunTime$().a(this.bF, x$0.bF)) && $m_sr_BoxesRunTime$().a(this.bG, x$0.bG)) && $m_sr_BoxesRunTime$().a(this.bH, x$0.bH)) && $m_sr_BoxesRunTime$().a(this.bI, x$0.bI))));
});
$p.m = (function() {
  return "Tuple16";
});
$p.e = (function() {
  return (((((((((((((((((((((((((((((((("(" + this.ey) + ",") + this.bJ) + ",") + this.bK) + ",") + this.bL) + ",") + this.bM) + ",") + this.bN) + ",") + this.bO) + ",") + this.bP) + ",") + this.bQ) + ",") + this.bC) + ",") + this.bD) + ",") + this.bE) + ",") + this.bF) + ",") + this.bG) + ",") + this.bH) + ",") + this.bI) + ")");
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
  this.ez = null;
  this.bZ = null;
  this.c0 = null;
  this.c1 = null;
  this.c2 = null;
  this.c3 = null;
  this.c4 = null;
  this.c5 = null;
  this.c6 = null;
  this.bR = null;
  this.bS = null;
  this.bT = null;
  this.bU = null;
  this.bV = null;
  this.bW = null;
  this.bX = null;
  this.bY = null;
  this.ez = _1;
  this.bZ = _2;
  this.c0 = _3;
  this.c1 = _4;
  this.c2 = _5;
  this.c3 = _6;
  this.c4 = _7;
  this.c5 = _8;
  this.c6 = _9;
  this.bR = _10;
  this.bS = _11;
  this.bT = _12;
  this.bU = _13;
  this.bV = _14;
  this.bW = _15;
  this.bX = _16;
  this.bY = _17;
}
$p = $c_T17.prototype = new $h_O();
$p.constructor = $c_T17;
/** @constructor */
function $h_T17() {
}
$h_T17.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 17;
});
$p.h = (function(n) {
  return $f_s_Product17__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-934366247), true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T17) && (((((((((((((((($m_sr_BoxesRunTime$().a(this.ez, x$0.ez) && $m_sr_BoxesRunTime$().a(this.bZ, x$0.bZ)) && $m_sr_BoxesRunTime$().a(this.c0, x$0.c0)) && $m_sr_BoxesRunTime$().a(this.c1, x$0.c1)) && $m_sr_BoxesRunTime$().a(this.c2, x$0.c2)) && $m_sr_BoxesRunTime$().a(this.c3, x$0.c3)) && $m_sr_BoxesRunTime$().a(this.c4, x$0.c4)) && $m_sr_BoxesRunTime$().a(this.c5, x$0.c5)) && $m_sr_BoxesRunTime$().a(this.c6, x$0.c6)) && $m_sr_BoxesRunTime$().a(this.bR, x$0.bR)) && $m_sr_BoxesRunTime$().a(this.bS, x$0.bS)) && $m_sr_BoxesRunTime$().a(this.bT, x$0.bT)) && $m_sr_BoxesRunTime$().a(this.bU, x$0.bU)) && $m_sr_BoxesRunTime$().a(this.bV, x$0.bV)) && $m_sr_BoxesRunTime$().a(this.bW, x$0.bW)) && $m_sr_BoxesRunTime$().a(this.bX, x$0.bX)) && $m_sr_BoxesRunTime$().a(this.bY, x$0.bY))));
});
$p.m = (function() {
  return "Tuple17";
});
$p.e = (function() {
  return (((((((((((((((((((((((((((((((((("(" + this.ez) + ",") + this.bZ) + ",") + this.c0) + ",") + this.c1) + ",") + this.c2) + ",") + this.c3) + ",") + this.c4) + ",") + this.c5) + ",") + this.c6) + ",") + this.bR) + ",") + this.bS) + ",") + this.bT) + ",") + this.bU) + ",") + this.bV) + ",") + this.bW) + ",") + this.bX) + ",") + this.bY) + ")");
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
  this.eA = null;
  this.cg = null;
  this.ch = null;
  this.ci = null;
  this.cj = null;
  this.ck = null;
  this.cl = null;
  this.cm = null;
  this.cn = null;
  this.c7 = null;
  this.c8 = null;
  this.c9 = null;
  this.ca = null;
  this.cb = null;
  this.cc = null;
  this.cd = null;
  this.ce = null;
  this.cf = null;
  this.eA = _1;
  this.cg = _2;
  this.ch = _3;
  this.ci = _4;
  this.cj = _5;
  this.ck = _6;
  this.cl = _7;
  this.cm = _8;
  this.cn = _9;
  this.c7 = _10;
  this.c8 = _11;
  this.c9 = _12;
  this.ca = _13;
  this.cb = _14;
  this.cc = _15;
  this.cd = _16;
  this.ce = _17;
  this.cf = _18;
}
$p = $c_T18.prototype = new $h_O();
$p.constructor = $c_T18;
/** @constructor */
function $h_T18() {
}
$h_T18.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 18;
});
$p.h = (function(n) {
  return $f_s_Product18__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-937041276), true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T18) && ((((((((((((((((($m_sr_BoxesRunTime$().a(this.eA, x$0.eA) && $m_sr_BoxesRunTime$().a(this.cg, x$0.cg)) && $m_sr_BoxesRunTime$().a(this.ch, x$0.ch)) && $m_sr_BoxesRunTime$().a(this.ci, x$0.ci)) && $m_sr_BoxesRunTime$().a(this.cj, x$0.cj)) && $m_sr_BoxesRunTime$().a(this.ck, x$0.ck)) && $m_sr_BoxesRunTime$().a(this.cl, x$0.cl)) && $m_sr_BoxesRunTime$().a(this.cm, x$0.cm)) && $m_sr_BoxesRunTime$().a(this.cn, x$0.cn)) && $m_sr_BoxesRunTime$().a(this.c7, x$0.c7)) && $m_sr_BoxesRunTime$().a(this.c8, x$0.c8)) && $m_sr_BoxesRunTime$().a(this.c9, x$0.c9)) && $m_sr_BoxesRunTime$().a(this.ca, x$0.ca)) && $m_sr_BoxesRunTime$().a(this.cb, x$0.cb)) && $m_sr_BoxesRunTime$().a(this.cc, x$0.cc)) && $m_sr_BoxesRunTime$().a(this.cd, x$0.cd)) && $m_sr_BoxesRunTime$().a(this.ce, x$0.ce)) && $m_sr_BoxesRunTime$().a(this.cf, x$0.cf))));
});
$p.m = (function() {
  return "Tuple18";
});
$p.e = (function() {
  return (((((((((((((((((((((((((((((((((((("(" + this.eA) + ",") + this.cg) + ",") + this.ch) + ",") + this.ci) + ",") + this.cj) + ",") + this.ck) + ",") + this.cl) + ",") + this.cm) + ",") + this.cn) + ",") + this.c7) + ",") + this.c8) + ",") + this.c9) + ",") + this.ca) + ",") + this.cb) + ",") + this.cc) + ",") + this.cd) + ",") + this.ce) + ",") + this.cf) + ")");
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
  this.eB = null;
  this.cy = null;
  this.cz = null;
  this.cA = null;
  this.cB = null;
  this.cC = null;
  this.cD = null;
  this.cE = null;
  this.cF = null;
  this.co = null;
  this.cp = null;
  this.cq = null;
  this.cr = null;
  this.cs = null;
  this.ct = null;
  this.cu = null;
  this.cv = null;
  this.cw = null;
  this.cx = null;
  this.eB = _1;
  this.cy = _2;
  this.cz = _3;
  this.cA = _4;
  this.cB = _5;
  this.cC = _6;
  this.cD = _7;
  this.cE = _8;
  this.cF = _9;
  this.co = _10;
  this.cp = _11;
  this.cq = _12;
  this.cr = _13;
  this.cs = _14;
  this.ct = _15;
  this.cu = _16;
  this.cv = _17;
  this.cw = _18;
  this.cx = _19;
}
$p = $c_T19.prototype = new $h_O();
$p.constructor = $c_T19;
/** @constructor */
function $h_T19() {
}
$h_T19.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 19;
});
$p.h = (function(n) {
  return $f_s_Product19__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-1955940499), true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T19) && (((((((((((((((((($m_sr_BoxesRunTime$().a(this.eB, x$0.eB) && $m_sr_BoxesRunTime$().a(this.cy, x$0.cy)) && $m_sr_BoxesRunTime$().a(this.cz, x$0.cz)) && $m_sr_BoxesRunTime$().a(this.cA, x$0.cA)) && $m_sr_BoxesRunTime$().a(this.cB, x$0.cB)) && $m_sr_BoxesRunTime$().a(this.cC, x$0.cC)) && $m_sr_BoxesRunTime$().a(this.cD, x$0.cD)) && $m_sr_BoxesRunTime$().a(this.cE, x$0.cE)) && $m_sr_BoxesRunTime$().a(this.cF, x$0.cF)) && $m_sr_BoxesRunTime$().a(this.co, x$0.co)) && $m_sr_BoxesRunTime$().a(this.cp, x$0.cp)) && $m_sr_BoxesRunTime$().a(this.cq, x$0.cq)) && $m_sr_BoxesRunTime$().a(this.cr, x$0.cr)) && $m_sr_BoxesRunTime$().a(this.cs, x$0.cs)) && $m_sr_BoxesRunTime$().a(this.ct, x$0.ct)) && $m_sr_BoxesRunTime$().a(this.cu, x$0.cu)) && $m_sr_BoxesRunTime$().a(this.cv, x$0.cv)) && $m_sr_BoxesRunTime$().a(this.cw, x$0.cw)) && $m_sr_BoxesRunTime$().a(this.cx, x$0.cx))));
});
$p.m = (function() {
  return "Tuple19";
});
$p.e = (function() {
  return (((((((((((((((((((((((((((((((((((((("(" + this.eB) + ",") + this.cy) + ",") + this.cz) + ",") + this.cA) + ",") + this.cB) + ",") + this.cC) + ",") + this.cD) + ",") + this.cE) + ",") + this.cF) + ",") + this.co) + ",") + this.cp) + ",") + this.cq) + ",") + this.cr) + ",") + this.cs) + ",") + this.ct) + ",") + this.cu) + ",") + this.cv) + ",") + this.cw) + ",") + this.cx) + ")");
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
function $ct_T2__O__O__($thiz, _1, _2) {
  $thiz.gO = _1;
  $thiz.gP = _2;
  return $thiz;
}
/** @constructor */
function $c_T2() {
  this.gO = null;
  this.gP = null;
}
$p = $c_T2.prototype = new $h_O();
$p.constructor = $c_T2;
/** @constructor */
function $h_T2() {
}
$h_T2.prototype = $p;
$p.l = (function() {
  return 2;
});
$p.h = (function(n) {
  return $f_s_Product2__productElement__I__O(this, n);
});
$p.G = (function() {
  return this.gO;
});
$p.F = (function() {
  return this.gP;
});
$p.e = (function() {
  return (((("(" + this.G()) + ",") + this.F()) + ")");
});
$p.m = (function() {
  return "Tuple2";
});
$p.o = (function() {
  return new $c_sr_ScalaRunTime$$anon$1(this);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-116390334), true);
});
$p.g = (function(x$1) {
  return ((this === x$1) || ((x$1 instanceof $c_T2) && ($m_sr_BoxesRunTime$().a(this.G(), x$1.G()) && $m_sr_BoxesRunTime$().a(this.F(), x$1.F()))));
});
$p.jk = (function() {
  return (+this.G());
});
$p.jl = (function() {
  return (+this.F());
});
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.G)));
}
var $d_T2 = new $TypeData().i($c_T2, "scala.Tuple2", ({
  G: 1,
  a3: 1,
  c: 1,
  b: 1,
  a: 1
}));
/** @constructor */
function $c_T20(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20) {
  this.eC = null;
  this.cQ = null;
  this.cS = null;
  this.cT = null;
  this.cU = null;
  this.cV = null;
  this.cW = null;
  this.cX = null;
  this.cY = null;
  this.cG = null;
  this.cH = null;
  this.cI = null;
  this.cJ = null;
  this.cK = null;
  this.cL = null;
  this.cM = null;
  this.cN = null;
  this.cO = null;
  this.cP = null;
  this.cR = null;
  this.eC = _1;
  this.cQ = _2;
  this.cS = _3;
  this.cT = _4;
  this.cU = _5;
  this.cV = _6;
  this.cW = _7;
  this.cX = _8;
  this.cY = _9;
  this.cG = _10;
  this.cH = _11;
  this.cI = _12;
  this.cJ = _13;
  this.cK = _14;
  this.cL = _15;
  this.cM = _16;
  this.cN = _17;
  this.cO = _18;
  this.cP = _19;
  this.cR = _20;
}
$p = $c_T20.prototype = new $h_O();
$p.constructor = $c_T20;
/** @constructor */
function $h_T20() {
}
$h_T20.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 20;
});
$p.h = (function(n) {
  return $f_s_Product20__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 1328807075, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T20) && ((((((((((((((((((($m_sr_BoxesRunTime$().a(this.eC, x$0.eC) && $m_sr_BoxesRunTime$().a(this.cQ, x$0.cQ)) && $m_sr_BoxesRunTime$().a(this.cS, x$0.cS)) && $m_sr_BoxesRunTime$().a(this.cT, x$0.cT)) && $m_sr_BoxesRunTime$().a(this.cU, x$0.cU)) && $m_sr_BoxesRunTime$().a(this.cV, x$0.cV)) && $m_sr_BoxesRunTime$().a(this.cW, x$0.cW)) && $m_sr_BoxesRunTime$().a(this.cX, x$0.cX)) && $m_sr_BoxesRunTime$().a(this.cY, x$0.cY)) && $m_sr_BoxesRunTime$().a(this.cG, x$0.cG)) && $m_sr_BoxesRunTime$().a(this.cH, x$0.cH)) && $m_sr_BoxesRunTime$().a(this.cI, x$0.cI)) && $m_sr_BoxesRunTime$().a(this.cJ, x$0.cJ)) && $m_sr_BoxesRunTime$().a(this.cK, x$0.cK)) && $m_sr_BoxesRunTime$().a(this.cL, x$0.cL)) && $m_sr_BoxesRunTime$().a(this.cM, x$0.cM)) && $m_sr_BoxesRunTime$().a(this.cN, x$0.cN)) && $m_sr_BoxesRunTime$().a(this.cO, x$0.cO)) && $m_sr_BoxesRunTime$().a(this.cP, x$0.cP)) && $m_sr_BoxesRunTime$().a(this.cR, x$0.cR))));
});
$p.m = (function() {
  return "Tuple20";
});
$p.e = (function() {
  return (((((((((((((((((((((((((((((((((((((((("(" + this.eC) + ",") + this.cQ) + ",") + this.cS) + ",") + this.cT) + ",") + this.cU) + ",") + this.cV) + ",") + this.cW) + ",") + this.cX) + ",") + this.cY) + ",") + this.cG) + ",") + this.cH) + ",") + this.cI) + ",") + this.cJ) + ",") + this.cK) + ",") + this.cL) + ",") + this.cM) + ",") + this.cN) + ",") + this.cO) + ",") + this.cP) + ",") + this.cR) + ")");
});
function $isArrayOf_T20(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.af)));
}
var $d_T20 = new $TypeData().i($c_T20, "scala.Tuple20", ({
  af: 1,
  b: 1,
  c: 1,
  bK: 1,
  a: 1
}));
/** @constructor */
function $c_T21(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21) {
  this.eD = null;
  this.d9 = null;
  this.dc = null;
  this.dd = null;
  this.de = null;
  this.df = null;
  this.dg = null;
  this.dh = null;
  this.di = null;
  this.cZ = null;
  this.d0 = null;
  this.d1 = null;
  this.d2 = null;
  this.d3 = null;
  this.d4 = null;
  this.d5 = null;
  this.d6 = null;
  this.d7 = null;
  this.d8 = null;
  this.da = null;
  this.db = null;
  this.eD = _1;
  this.d9 = _2;
  this.dc = _3;
  this.dd = _4;
  this.de = _5;
  this.df = _6;
  this.dg = _7;
  this.dh = _8;
  this.di = _9;
  this.cZ = _10;
  this.d0 = _11;
  this.d1 = _12;
  this.d2 = _13;
  this.d3 = _14;
  this.d4 = _15;
  this.d5 = _16;
  this.d6 = _17;
  this.d7 = _18;
  this.d8 = _19;
  this.da = _20;
  this.db = _21;
}
$p = $c_T21.prototype = new $h_O();
$p.constructor = $c_T21;
/** @constructor */
function $h_T21() {
}
$h_T21.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 21;
});
$p.h = (function(n) {
  return $f_s_Product21__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-21288119), true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T21) && (((((((((((((((((((($m_sr_BoxesRunTime$().a(this.eD, x$0.eD) && $m_sr_BoxesRunTime$().a(this.d9, x$0.d9)) && $m_sr_BoxesRunTime$().a(this.dc, x$0.dc)) && $m_sr_BoxesRunTime$().a(this.dd, x$0.dd)) && $m_sr_BoxesRunTime$().a(this.de, x$0.de)) && $m_sr_BoxesRunTime$().a(this.df, x$0.df)) && $m_sr_BoxesRunTime$().a(this.dg, x$0.dg)) && $m_sr_BoxesRunTime$().a(this.dh, x$0.dh)) && $m_sr_BoxesRunTime$().a(this.di, x$0.di)) && $m_sr_BoxesRunTime$().a(this.cZ, x$0.cZ)) && $m_sr_BoxesRunTime$().a(this.d0, x$0.d0)) && $m_sr_BoxesRunTime$().a(this.d1, x$0.d1)) && $m_sr_BoxesRunTime$().a(this.d2, x$0.d2)) && $m_sr_BoxesRunTime$().a(this.d3, x$0.d3)) && $m_sr_BoxesRunTime$().a(this.d4, x$0.d4)) && $m_sr_BoxesRunTime$().a(this.d5, x$0.d5)) && $m_sr_BoxesRunTime$().a(this.d6, x$0.d6)) && $m_sr_BoxesRunTime$().a(this.d7, x$0.d7)) && $m_sr_BoxesRunTime$().a(this.d8, x$0.d8)) && $m_sr_BoxesRunTime$().a(this.da, x$0.da)) && $m_sr_BoxesRunTime$().a(this.db, x$0.db))));
});
$p.m = (function() {
  return "Tuple21";
});
$p.e = (function() {
  return (((((((((((((((((((((((((((((((((((((((((("(" + this.eD) + ",") + this.d9) + ",") + this.dc) + ",") + this.dd) + ",") + this.de) + ",") + this.df) + ",") + this.dg) + ",") + this.dh) + ",") + this.di) + ",") + this.cZ) + ",") + this.d0) + ",") + this.d1) + ",") + this.d2) + ",") + this.d3) + ",") + this.d4) + ",") + this.d5) + ",") + this.d6) + ",") + this.d7) + ",") + this.d8) + ",") + this.da) + ",") + this.db) + ")");
});
function $isArrayOf_T21(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ag)));
}
var $d_T21 = new $TypeData().i($c_T21, "scala.Tuple21", ({
  ag: 1,
  b: 1,
  c: 1,
  bL: 1,
  a: 1
}));
/** @constructor */
function $c_T22(_1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22) {
  this.eE = null;
  this.du = null;
  this.dy = null;
  this.dz = null;
  this.dA = null;
  this.dB = null;
  this.dC = null;
  this.dD = null;
  this.dE = null;
  this.dj = null;
  this.dk = null;
  this.dl = null;
  this.dm = null;
  this.dn = null;
  this.dp = null;
  this.dq = null;
  this.dr = null;
  this.ds = null;
  this.dt = null;
  this.dv = null;
  this.dw = null;
  this.dx = null;
  this.eE = _1;
  this.du = _2;
  this.dy = _3;
  this.dz = _4;
  this.dA = _5;
  this.dB = _6;
  this.dC = _7;
  this.dD = _8;
  this.dE = _9;
  this.dj = _10;
  this.dk = _11;
  this.dl = _12;
  this.dm = _13;
  this.dn = _14;
  this.dp = _15;
  this.dq = _16;
  this.dr = _17;
  this.ds = _18;
  this.dt = _19;
  this.dv = _20;
  this.dw = _21;
  this.dx = _22;
}
$p = $c_T22.prototype = new $h_O();
$p.constructor = $c_T22;
/** @constructor */
function $h_T22() {
}
$h_T22.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 22;
});
$p.h = (function(n) {
  return $f_s_Product22__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-139445068), true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T22) && ((((((((((((((((((((($m_sr_BoxesRunTime$().a(this.eE, x$0.eE) && $m_sr_BoxesRunTime$().a(this.du, x$0.du)) && $m_sr_BoxesRunTime$().a(this.dy, x$0.dy)) && $m_sr_BoxesRunTime$().a(this.dz, x$0.dz)) && $m_sr_BoxesRunTime$().a(this.dA, x$0.dA)) && $m_sr_BoxesRunTime$().a(this.dB, x$0.dB)) && $m_sr_BoxesRunTime$().a(this.dC, x$0.dC)) && $m_sr_BoxesRunTime$().a(this.dD, x$0.dD)) && $m_sr_BoxesRunTime$().a(this.dE, x$0.dE)) && $m_sr_BoxesRunTime$().a(this.dj, x$0.dj)) && $m_sr_BoxesRunTime$().a(this.dk, x$0.dk)) && $m_sr_BoxesRunTime$().a(this.dl, x$0.dl)) && $m_sr_BoxesRunTime$().a(this.dm, x$0.dm)) && $m_sr_BoxesRunTime$().a(this.dn, x$0.dn)) && $m_sr_BoxesRunTime$().a(this.dp, x$0.dp)) && $m_sr_BoxesRunTime$().a(this.dq, x$0.dq)) && $m_sr_BoxesRunTime$().a(this.dr, x$0.dr)) && $m_sr_BoxesRunTime$().a(this.ds, x$0.ds)) && $m_sr_BoxesRunTime$().a(this.dt, x$0.dt)) && $m_sr_BoxesRunTime$().a(this.dv, x$0.dv)) && $m_sr_BoxesRunTime$().a(this.dw, x$0.dw)) && $m_sr_BoxesRunTime$().a(this.dx, x$0.dx))));
});
$p.m = (function() {
  return "Tuple22";
});
$p.e = (function() {
  return (((((((((((((((((((((((((((((((((((((((((((("(" + this.eE) + ",") + this.du) + ",") + this.dy) + ",") + this.dz) + ",") + this.dA) + ",") + this.dB) + ",") + this.dC) + ",") + this.dD) + ",") + this.dE) + ",") + this.dj) + ",") + this.dk) + ",") + this.dl) + ",") + this.dm) + ",") + this.dn) + ",") + this.dp) + ",") + this.dq) + ",") + this.dr) + ",") + this.ds) + ",") + this.dt) + ",") + this.dv) + ",") + this.dw) + ",") + this.dx) + ")");
});
function $isArrayOf_T22(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ah)));
}
var $d_T22 = new $TypeData().i($c_T22, "scala.Tuple22", ({
  ah: 1,
  b: 1,
  c: 1,
  bM: 1,
  a: 1
}));
/** @constructor */
function $c_T3(_1, _2, _3) {
  this.dF = null;
  this.ak = null;
  this.al = null;
  this.dF = _1;
  this.ak = _2;
  this.al = _3;
}
$p = $c_T3.prototype = new $h_O();
$p.constructor = $c_T3;
/** @constructor */
function $h_T3() {
}
$h_T3.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 3;
});
$p.h = (function(n) {
  return $f_s_Product3__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-192629203), true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T3) && (($m_sr_BoxesRunTime$().a(this.dF, x$0.dF) && $m_sr_BoxesRunTime$().a(this.ak, x$0.ak)) && $m_sr_BoxesRunTime$().a(this.al, x$0.al))));
});
$p.m = (function() {
  return "Tuple3";
});
$p.e = (function() {
  return (((((("(" + this.dF) + ",") + this.ak) + ",") + this.al) + ")");
});
function $isArrayOf_T3(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ai)));
}
var $d_T3 = new $TypeData().i($c_T3, "scala.Tuple3", ({
  ai: 1,
  b: 1,
  c: 1,
  bN: 1,
  a: 1
}));
/** @constructor */
function $c_T4(_1, _2, _3, _4) {
  this.dG = null;
  this.am = null;
  this.an = null;
  this.ao = null;
  this.dG = _1;
  this.am = _2;
  this.an = _3;
  this.ao = _4;
}
$p = $c_T4.prototype = new $h_O();
$p.constructor = $c_T4;
/** @constructor */
function $h_T4() {
}
$h_T4.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 4;
});
$p.h = (function(n) {
  return $f_s_Product4__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-1542739752), true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T4) && ((($m_sr_BoxesRunTime$().a(this.dG, x$0.dG) && $m_sr_BoxesRunTime$().a(this.am, x$0.am)) && $m_sr_BoxesRunTime$().a(this.an, x$0.an)) && $m_sr_BoxesRunTime$().a(this.ao, x$0.ao))));
});
$p.m = (function() {
  return "Tuple4";
});
$p.e = (function() {
  return (((((((("(" + this.dG) + ",") + this.am) + ",") + this.an) + ",") + this.ao) + ")");
});
function $isArrayOf_T4(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aj)));
}
var $d_T4 = new $TypeData().i($c_T4, "scala.Tuple4", ({
  aj: 1,
  b: 1,
  c: 1,
  bO: 1,
  a: 1
}));
/** @constructor */
function $c_T5(_1, _2, _3, _4, _5) {
  this.eF = null;
  this.dH = null;
  this.dI = null;
  this.dJ = null;
  this.dK = null;
  this.eF = _1;
  this.dH = _2;
  this.dI = _3;
  this.dJ = _4;
  this.dK = _5;
}
$p = $c_T5.prototype = new $h_O();
$p.constructor = $c_T5;
/** @constructor */
function $h_T5() {
}
$h_T5.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 5;
});
$p.h = (function(n) {
  return $f_s_Product5__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 417360321, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T5) && (((($m_sr_BoxesRunTime$().a(this.eF, x$0.eF) && $m_sr_BoxesRunTime$().a(this.dH, x$0.dH)) && $m_sr_BoxesRunTime$().a(this.dI, x$0.dI)) && $m_sr_BoxesRunTime$().a(this.dJ, x$0.dJ)) && $m_sr_BoxesRunTime$().a(this.dK, x$0.dK))));
});
$p.m = (function() {
  return "Tuple5";
});
$p.e = (function() {
  return (((((((((("(" + this.eF) + ",") + this.dH) + ",") + this.dI) + ",") + this.dJ) + ",") + this.dK) + ")");
});
function $isArrayOf_T5(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ak)));
}
var $d_T5 = new $TypeData().i($c_T5, "scala.Tuple5", ({
  ak: 1,
  b: 1,
  c: 1,
  bP: 1,
  a: 1
}));
/** @constructor */
function $c_T6(_1, _2, _3, _4, _5, _6) {
  this.eG = null;
  this.dL = null;
  this.dM = null;
  this.dN = null;
  this.dO = null;
  this.dP = null;
  this.eG = _1;
  this.dL = _2;
  this.dM = _3;
  this.dN = _4;
  this.dO = _5;
  this.dP = _6;
}
$p = $c_T6.prototype = new $h_O();
$p.constructor = $c_T6;
/** @constructor */
function $h_T6() {
}
$h_T6.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 6;
});
$p.h = (function(n) {
  return $f_s_Product6__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-1037607828), true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T6) && ((((($m_sr_BoxesRunTime$().a(this.eG, x$0.eG) && $m_sr_BoxesRunTime$().a(this.dL, x$0.dL)) && $m_sr_BoxesRunTime$().a(this.dM, x$0.dM)) && $m_sr_BoxesRunTime$().a(this.dN, x$0.dN)) && $m_sr_BoxesRunTime$().a(this.dO, x$0.dO)) && $m_sr_BoxesRunTime$().a(this.dP, x$0.dP))));
});
$p.m = (function() {
  return "Tuple6";
});
$p.e = (function() {
  return (((((((((((("(" + this.eG) + ",") + this.dL) + ",") + this.dM) + ",") + this.dN) + ",") + this.dO) + ",") + this.dP) + ")");
});
function $isArrayOf_T6(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.al)));
}
var $d_T6 = new $TypeData().i($c_T6, "scala.Tuple6", ({
  al: 1,
  b: 1,
  c: 1,
  bQ: 1,
  a: 1
}));
/** @constructor */
function $c_T7(_1, _2, _3, _4, _5, _6, _7) {
  this.eH = null;
  this.dQ = null;
  this.dR = null;
  this.dS = null;
  this.dT = null;
  this.dU = null;
  this.dV = null;
  this.eH = _1;
  this.dQ = _2;
  this.dR = _3;
  this.dS = _4;
  this.dT = _5;
  this.dU = _6;
  this.dV = _7;
}
$p = $c_T7.prototype = new $h_O();
$p.constructor = $c_T7;
/** @constructor */
function $h_T7() {
}
$h_T7.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 7;
});
$p.h = (function(n) {
  return $f_s_Product7__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-1050932777), true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T7) && (((((($m_sr_BoxesRunTime$().a(this.eH, x$0.eH) && $m_sr_BoxesRunTime$().a(this.dQ, x$0.dQ)) && $m_sr_BoxesRunTime$().a(this.dR, x$0.dR)) && $m_sr_BoxesRunTime$().a(this.dS, x$0.dS)) && $m_sr_BoxesRunTime$().a(this.dT, x$0.dT)) && $m_sr_BoxesRunTime$().a(this.dU, x$0.dU)) && $m_sr_BoxesRunTime$().a(this.dV, x$0.dV))));
});
$p.m = (function() {
  return "Tuple7";
});
$p.e = (function() {
  return (((((((((((((("(" + this.eH) + ",") + this.dQ) + ",") + this.dR) + ",") + this.dS) + ",") + this.dT) + ",") + this.dU) + ",") + this.dV) + ")");
});
function $isArrayOf_T7(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.am)));
}
var $d_T7 = new $TypeData().i($c_T7, "scala.Tuple7", ({
  am: 1,
  b: 1,
  c: 1,
  bR: 1,
  a: 1
}));
/** @constructor */
function $c_T8(_1, _2, _3, _4, _5, _6, _7, _8) {
  this.eI = null;
  this.dW = null;
  this.dX = null;
  this.dY = null;
  this.dZ = null;
  this.e0 = null;
  this.e1 = null;
  this.e2 = null;
  this.eI = _1;
  this.dW = _2;
  this.dX = _3;
  this.dY = _4;
  this.dZ = _5;
  this.e0 = _6;
  this.e1 = _7;
  this.e2 = _8;
}
$p = $c_T8.prototype = new $h_O();
$p.constructor = $c_T8;
/** @constructor */
function $h_T8() {
}
$h_T8.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 8;
});
$p.h = (function(n) {
  return $f_s_Product8__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, 1998822530, true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T8) && ((((((($m_sr_BoxesRunTime$().a(this.eI, x$0.eI) && $m_sr_BoxesRunTime$().a(this.dW, x$0.dW)) && $m_sr_BoxesRunTime$().a(this.dX, x$0.dX)) && $m_sr_BoxesRunTime$().a(this.dY, x$0.dY)) && $m_sr_BoxesRunTime$().a(this.dZ, x$0.dZ)) && $m_sr_BoxesRunTime$().a(this.e0, x$0.e0)) && $m_sr_BoxesRunTime$().a(this.e1, x$0.e1)) && $m_sr_BoxesRunTime$().a(this.e2, x$0.e2))));
});
$p.m = (function() {
  return "Tuple8";
});
$p.e = (function() {
  return (((((((((((((((("(" + this.eI) + ",") + this.dW) + ",") + this.dX) + ",") + this.dY) + ",") + this.dZ) + ",") + this.e0) + ",") + this.e1) + ",") + this.e2) + ")");
});
function $isArrayOf_T8(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.an)));
}
var $d_T8 = new $TypeData().i($c_T8, "scala.Tuple8", ({
  an: 1,
  b: 1,
  c: 1,
  bS: 1,
  a: 1
}));
/** @constructor */
function $c_T9(_1, _2, _3, _4, _5, _6, _7, _8, _9) {
  this.eJ = null;
  this.e3 = null;
  this.e4 = null;
  this.e5 = null;
  this.e6 = null;
  this.e7 = null;
  this.e8 = null;
  this.e9 = null;
  this.ea = null;
  this.eJ = _1;
  this.e3 = _2;
  this.e4 = _3;
  this.e5 = _4;
  this.e6 = _5;
  this.e7 = _6;
  this.e8 = _7;
  this.e9 = _8;
  this.ea = _9;
}
$p = $c_T9.prototype = new $h_O();
$p.constructor = $c_T9;
/** @constructor */
function $h_T9() {
}
$h_T9.prototype = $p;
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 9;
});
$p.h = (function(n) {
  return $f_s_Product9__productElement__I__O(this, n);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().u(this, (-1807911176), true);
});
$p.g = (function(x$0) {
  return ((this === x$0) || ((x$0 instanceof $c_T9) && (((((((($m_sr_BoxesRunTime$().a(this.eJ, x$0.eJ) && $m_sr_BoxesRunTime$().a(this.e3, x$0.e3)) && $m_sr_BoxesRunTime$().a(this.e4, x$0.e4)) && $m_sr_BoxesRunTime$().a(this.e5, x$0.e5)) && $m_sr_BoxesRunTime$().a(this.e6, x$0.e6)) && $m_sr_BoxesRunTime$().a(this.e7, x$0.e7)) && $m_sr_BoxesRunTime$().a(this.e8, x$0.e8)) && $m_sr_BoxesRunTime$().a(this.e9, x$0.e9)) && $m_sr_BoxesRunTime$().a(this.ea, x$0.ea))));
});
$p.m = (function() {
  return "Tuple9";
});
$p.e = (function() {
  return (((((((((((((((((("(" + this.eJ) + ",") + this.e3) + ",") + this.e4) + ",") + this.e5) + ",") + this.e6) + ",") + this.e7) + ",") + this.e8) + ",") + this.e9) + ",") + this.ea) + ")");
});
function $isArrayOf_T9(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ao)));
}
var $d_T9 = new $TypeData().i($c_T9, "scala.Tuple9", ({
  ao: 1,
  b: 1,
  c: 1,
  bT: 1,
  a: 1
}));
function $f_sc_Iterable__toString__T($thiz) {
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, ($thiz.f7() + "("), ", ", ")");
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
$p.v = (function() {
  return false;
});
$p.lP = (function() {
  throw new $c_ju_NoSuchElementException("next on empty iterator");
});
$p.I = (function() {
  return 0;
});
$p.r = (function() {
  this.lP();
});
$p.gJ = (function(from, until) {
  return this;
});
var $d_sc_Iterator$$anon$19 = new $TypeData().i($c_sc_Iterator$$anon$19, "scala.collection.Iterator$$anon$19", ({
  c4: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $p_sc_Iterator$ConcatIterator__merge$1__V($thiz) {
  while (true) {
    if (($thiz.J instanceof $c_sc_Iterator$ConcatIterator)) {
      var c = $thiz.J;
      $thiz.J = c.J;
      $thiz.aq = c.aq;
      if ((c.Q !== null)) {
        if (($thiz.P === null)) {
          $thiz.P = c.P;
        }
        var x$proxy10 = c.P;
        if ((x$proxy10 === null)) {
          $m_sr_Scala3RunTime$().gF();
        }
        x$proxy10.fc = $thiz.Q;
        $thiz.Q = c.Q;
      }
    } else {
      return (void 0);
    }
  }
}
function $p_sc_Iterator$ConcatIterator__advance$1__Z($thiz) {
  while (true) {
    if (($thiz.Q === null)) {
      $thiz.J = null;
      $thiz.P = null;
      return false;
    } else {
      $thiz.J = $thiz.Q.kX();
      if (($thiz.P === $thiz.Q)) {
        var x$proxy12 = $thiz.P;
        if ((x$proxy12 === null)) {
          $m_sr_Scala3RunTime$().gF();
        }
        $thiz.P = x$proxy12.fc;
      }
      $thiz.Q = $thiz.Q.fc;
      $p_sc_Iterator$ConcatIterator__merge$1__V($thiz);
      if ($thiz.aq) {
        return true;
      } else {
        if ((!(($thiz.J !== null) && $thiz.J.v()))) {
          continue;
        }
        $thiz.aq = true;
        return true;
      }
    }
  }
}
/** @constructor */
function $c_sc_Iterator$ConcatIterator(from) {
  this.J = null;
  this.Q = null;
  this.P = null;
  this.aq = false;
  this.J = from;
  this.Q = null;
  this.P = null;
  this.aq = false;
}
$p = $c_sc_Iterator$ConcatIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$ConcatIterator;
/** @constructor */
function $h_sc_Iterator$ConcatIterator() {
}
$h_sc_Iterator$ConcatIterator.prototype = $p;
$p.v = (function() {
  if (this.aq) {
    return true;
  } else if ((this.J !== null)) {
    if (this.J.v()) {
      this.aq = true;
      return true;
    } else {
      return $p_sc_Iterator$ConcatIterator__advance$1__Z(this);
    }
  } else {
    return false;
  }
});
$p.r = (function() {
  if (this.v()) {
    this.aq = false;
    var x$proxy13 = this.J;
    if ((x$proxy13 === null)) {
      $m_sr_Scala3RunTime$().gF();
    }
    return x$proxy13.r();
  } else {
    return $m_sc_Iterator$().aa.r();
  }
});
$p.kp = (function(that) {
  var c = new $c_sc_Iterator$ConcatIteratorCell(that, null);
  if ((this.Q === null)) {
    this.Q = c;
    this.P = c;
  } else {
    var x$proxy14 = this.P;
    if ((x$proxy14 === null)) {
      $m_sr_Scala3RunTime$().gF();
    }
    x$proxy14.fc = c;
    this.P = c;
  }
  if ((this.J === null)) {
    this.J = $m_sc_Iterator$().aa;
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
  while (($thiz.ab > 0)) {
    if ($thiz.ar.v()) {
      $thiz.ar.r();
      $thiz.ab = (($thiz.ab - 1) | 0);
    } else {
      $thiz.ab = 0;
    }
  }
}
function $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I($thiz, lo$1) {
  if (($thiz.L < 0)) {
    return (-1);
  } else {
    var that = (($thiz.L - lo$1) | 0);
    return ((that < 0) ? 0 : that);
  }
}
/** @constructor */
function $c_sc_Iterator$SliceIterator(underlying, start, limit) {
  this.ar = null;
  this.L = 0;
  this.ab = 0;
  this.ar = underlying;
  this.L = limit;
  this.ab = start;
}
$p = $c_sc_Iterator$SliceIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_Iterator$SliceIterator;
/** @constructor */
function $h_sc_Iterator$SliceIterator() {
}
$h_sc_Iterator$SliceIterator.prototype = $p;
$p.I = (function() {
  var size = this.ar.I();
  if ((size < 0)) {
    return (-1);
  } else {
    var that = ((size - this.ab) | 0);
    var dropSize = ((that < 0) ? 0 : that);
    if ((this.L < 0)) {
      return dropSize;
    } else {
      var x = this.L;
      return ((x < dropSize) ? x : dropSize);
    }
  }
});
$p.v = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  return ((this.L !== 0) && this.ar.v());
});
$p.r = (function() {
  $p_sc_Iterator$SliceIterator__skip__V(this);
  if ((this.L > 0)) {
    this.L = ((this.L - 1) | 0);
    return this.ar.r();
  } else {
    return ((this.L < 0) ? this.ar.r() : $m_sc_Iterator$().aa.r());
  }
});
$p.gJ = (function(from, until) {
  var lo = ((from > 0) ? from : 0);
  if ((until < 0)) {
    var rest = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
  } else if ((until <= lo)) {
    var rest = 0;
  } else if ((this.L < 0)) {
    var rest = ((until - lo) | 0);
  } else {
    var x = $p_sc_Iterator$SliceIterator__adjustedBound$1__I__I(this, lo);
    var that = ((until - lo) | 0);
    var rest = ((x < that) ? x : that);
  }
  var sum = ((this.ab + lo) | 0);
  if ((rest === 0)) {
    return $m_sc_Iterator$().aa;
  } else if ((sum < 0)) {
    this.ab = 2147483647;
    this.L = 0;
    return $f_sc_Iterator__concat__F0__sc_Iterator(this, new $c_sr_AbstractFunction0_$$Lambda$07eded5776954a9c145e92c329afd52873ad179c((() => new $c_sc_Iterator$SliceIterator(this.ar, ((sum - 2147483647) | 0), rest))));
  } else {
    this.ab = sum;
    this.L = rest;
    return this;
  }
});
var $d_sc_Iterator$SliceIterator = new $TypeData().i($c_sc_Iterator$SliceIterator, "scala.collection.Iterator$SliceIterator", ({
  c6: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1
}));
function $f_sc_LinearSeqOps__apply__I__O($thiz, n) {
  if ((n < 0)) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  var skipped = $thiz.kz(n);
  if (skipped.z()) {
    throw new $c_jl_IndexOutOfBoundsException(("" + n));
  }
  return skipped.hT();
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
      if ((((!a$tailLocal1.z()) && (!b$tailLocal1.z())) && $m_sr_BoxesRunTime$().a(a$tailLocal1.hT(), b$tailLocal1.hT()))) {
        var a$tailLocal1$tmp1 = a$tailLocal1.hX();
        var b$tailLocal1$tmp1 = b$tailLocal1.hX();
        a$tailLocal1 = a$tailLocal1$tmp1;
        b$tailLocal1 = b$tailLocal1$tmp1;
        continue;
      }
      return (a$tailLocal1.z() && b$tailLocal1.z());
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
  cl: 1,
  a: 1,
  as: 1,
  c8: 1,
  cc: 1
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
  this.ir = null;
  this.fe = 0;
  this.iq = 0;
  this.ir = x$1;
  this.fe = 0;
  this.iq = x$1.l();
}
$p = $c_sr_ScalaRunTime$$anon$1.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sr_ScalaRunTime$$anon$1;
/** @constructor */
function $h_sr_ScalaRunTime$$anon$1() {
}
$h_sr_ScalaRunTime$$anon$1.prototype = $p;
$p.v = (function() {
  return (this.fe < this.iq);
});
$p.r = (function() {
  var result = this.ir.h(this.fe);
  this.fe = ((1 + this.fe) | 0);
  return result;
});
var $d_sr_ScalaRunTime$$anon$1 = new $TypeData().i($c_sr_ScalaRunTime$$anon$1, "scala.runtime.ScalaRunTime$$anon$1", ({
  cX: 1,
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
  b1: 1,
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
  b3: 1,
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
  return $m_RTLong$().jV($thiz, $thizhi);
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
  b8: 1,
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
  var str = $m_jl_Character$().ml(ch);
  return ($thiz.indexOf(str) | 0);
}
function $f_T__toString__T($thiz) {
  return $thiz;
}
var $d_T = new $TypeData().i(0, "java.lang.String", ({
  bb: 1,
  a: 1,
  h: 1,
  F: 1,
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
$p.fN = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.hL = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.f7 = (function() {
  return this.eo();
});
/** @constructor */
function $c_sc_ArrayOps$ArrayIterator(xs) {
  this.gb = null;
  this.a9 = 0;
  this.fb = 0;
  this.gb = xs;
  this.a9 = 0;
  this.fb = $m_jl_reflect_Array$().hS(this.gb);
}
$p = $c_sc_ArrayOps$ArrayIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_ArrayOps$ArrayIterator;
/** @constructor */
function $h_sc_ArrayOps$ArrayIterator() {
}
$h_sc_ArrayOps$ArrayIterator.prototype = $p;
$p.I = (function() {
  return ((this.fb - this.a9) | 0);
});
$p.v = (function() {
  return (this.a9 < this.fb);
});
$p.r = (function() {
  if ((this.a9 >= $m_jl_reflect_Array$().hS(this.gb))) {
    $m_sc_Iterator$().aa.r();
  }
  var r = $m_sr_ScalaRunTime$().f6(this.gb, this.a9);
  this.a9 = ((1 + this.a9) | 0);
  return r;
});
$p.gB = (function(n) {
  if ((n > 0)) {
    var newPos = ((this.a9 + n) | 0);
    if ((newPos < 0)) {
      var $x_1 = this.fb;
    } else {
      var a = this.fb;
      var $x_1 = ((a < newPos) ? a : newPos);
    }
    this.a9 = $x_1;
  }
  return this;
});
var $d_sc_ArrayOps$ArrayIterator = new $TypeData().i($c_sc_ArrayOps$ArrayIterator, "scala.collection.ArrayOps$ArrayIterator", ({
  bY: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I($thiz, value) {
  return ((value < 0) ? 0 : ((value > $thiz.R) ? $thiz.R : value));
}
/** @constructor */
function $c_sc_IndexedSeqView$IndexedSeqViewIterator(self) {
  this.ic = null;
  this.ap = 0;
  this.R = 0;
  this.ic = self;
  this.ap = 0;
  this.R = self.t();
}
$p = $c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = new $h_sc_AbstractIterator();
$p.constructor = $c_sc_IndexedSeqView$IndexedSeqViewIterator;
/** @constructor */
function $h_sc_IndexedSeqView$IndexedSeqViewIterator() {
}
$h_sc_IndexedSeqView$IndexedSeqViewIterator.prototype = $p;
$p.I = (function() {
  return this.R;
});
$p.v = (function() {
  return (this.R > 0);
});
$p.r = (function() {
  if ((this.R > 0)) {
    var r = this.ic.y(this.ap);
    this.ap = ((1 + this.ap) | 0);
    this.R = ((this.R - 1) | 0);
    return r;
  } else {
    return $m_sc_Iterator$().aa.r();
  }
});
$p.gB = (function(n) {
  if ((n > 0)) {
    this.ap = ((this.ap + n) | 0);
    var b = ((this.R - n) | 0);
    this.R = ((b < 0) ? 0 : b);
  }
  return this;
});
$p.gJ = (function(from, until) {
  var formatFrom = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, from);
  var formatUntil = $p_sc_IndexedSeqView$IndexedSeqViewIterator__formatRange$1__I__I(this, until);
  var b = ((formatUntil - formatFrom) | 0);
  this.R = ((b < 0) ? 0 : b);
  this.ap = ((this.ap + formatFrom) | 0);
  return this;
});
var $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().i($c_sc_IndexedSeqView$IndexedSeqViewIterator, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", ({
  c2: 1,
  n: 1,
  d: 1,
  e: 1,
  s: 1,
  a: 1
}));
function $p_sci_ArraySeq$__emptyImpl__sci_ArraySeq$ofRef($thiz) {
  if ((!$thiz.ih)) {
    $thiz.ig = new $c_sci_ArraySeq$ofRef(new ($d_sr_Nothing$.r().C)(0));
    $thiz.ih = true;
  }
  return $thiz.ig;
}
/** @constructor */
function $c_sci_ArraySeq$() {
  this.ig = null;
  this.ih = false;
}
$p = $c_sci_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_sci_ArraySeq$;
/** @constructor */
function $h_sci_ArraySeq$() {
}
$h_sci_ArraySeq$.prototype = $p;
var $d_sci_ArraySeq$ = new $TypeData().i($c_sci_ArraySeq$, "scala.collection.immutable.ArraySeq$", ({
  ch: 1,
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
  this.ij = null;
  $n_scm_ArraySeq$ = this;
  this.ij = new $c_scm_ArraySeq$ofRef(new $ac_O(0));
}
$p = $c_scm_ArraySeq$.prototype = new $h_O();
$p.constructor = $c_scm_ArraySeq$;
/** @constructor */
function $h_scm_ArraySeq$() {
}
$h_scm_ArraySeq$.prototype = $p;
var $d_scm_ArraySeq$ = new $TypeData().i($c_scm_ArraySeq$, "scala.collection.mutable.ArraySeq$", ({
  co: 1,
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
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.i = (function() {
  return 924202651;
});
$p.l = (function() {
  return 0;
});
$p.m = (function() {
  return "EmptyTuple";
});
$p.h = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.e = (function() {
  return "()";
});
var $d_T$package$EmptyTuple$ = new $TypeData().i($c_T$package$EmptyTuple$, "scala.Tuple$package$EmptyTuple$", ({
  bU: 1,
  b: 1,
  c: 1,
  a: 1,
  cu: 1,
  cv: 1,
  cw: 1
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
  this.gO = null;
  this.gP = null;
  this.gQ = 0.0;
  this.gR = 0.0;
  this.gQ = _1$mcD$sp;
  this.gR = _2$mcD$sp;
  $ct_T2__O__O__(this, null, null);
}
$p = $c_T2$mcDD$sp.prototype = new $h_T2();
$p.constructor = $c_T2$mcDD$sp;
/** @constructor */
function $h_T2$mcDD$sp() {
}
$h_T2$mcDD$sp.prototype = $p;
$p.jk = (function() {
  return this.gQ;
});
$p.jl = (function() {
  return this.gR;
});
$p.F = (function() {
  return this.gR;
});
$p.G = (function() {
  return this.gQ;
});
var $d_T2$mcDD$sp = new $TypeData().i($c_T2$mcDD$sp, "scala.Tuple2$mcDD$sp", ({
  bV: 1,
  G: 1,
  a3: 1,
  c: 1,
  b: 1,
  a: 1,
  bJ: 1
}));
function $f_sc_View__toString__T($thiz) {
  return ($thiz.eo() + "(<not computed>)");
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
    this.ec = null;
    this.ec = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true);
  }
  gC() {
    return $dp_toString__T(this.ec);
  }
  m() {
    return "JavaScriptException";
  }
  l() {
    return 1;
  }
  h(x$1) {
    return ((x$1 === 0) ? this.ec : $m_sr_Statics$().l5(x$1));
  }
  o() {
    return new $c_sr_ScalaRunTime$$anon$1(this);
  }
  i() {
    return $m_s_util_hashing_MurmurHash3$().u(this, 1744042595, true);
  }
  g(x$1) {
    return ((this === x$1) || ((x$1 instanceof $c_sjs_js_JavaScriptException) && $m_sr_BoxesRunTime$().a(this.ec, x$1.ec)));
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
    if (($thiz.i2 && (!(!(!(!console.error)))))) {
      console.error(line);
    } else {
      console.log(line);
    }
  }
}
/** @constructor */
function $c_jl_JSConsoleBasedPrintStream(isErr) {
  this.i2 = false;
  this.f9 = null;
  this.i2 = isErr;
  $ct_Ljava_io_PrintStream__Ljava_io_OutputStream__Z__Ljava_nio_charset_Charset__(this, new $c_jl_JSConsoleBasedPrintStream$DummyOutputStream(), false, null);
  this.f9 = "";
}
$p = $c_jl_JSConsoleBasedPrintStream.prototype = new $h_Ljava_io_PrintStream();
$p.constructor = $c_jl_JSConsoleBasedPrintStream;
/** @constructor */
function $h_jl_JSConsoleBasedPrintStream() {
}
$h_jl_JSConsoleBasedPrintStream.prototype = $p;
$p.l8 = (function(s) {
  var rest = s;
  while ((rest !== "")) {
    var this$1 = rest;
    var nlPos = (this$1.indexOf("\n") | 0);
    if ((nlPos < 0)) {
      this.f9 = (("" + this.f9) + rest);
      rest = "";
    } else {
      var $x_1 = this.f9;
      var this$2 = rest;
      $p_jl_JSConsoleBasedPrintStream__doWriteLine__T__V(this, (("" + $x_1) + this$2.substring(0, nlPos)));
      this.f9 = "";
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
    if (((n$tailLocal1 <= 0) || s$tailLocal1.z())) {
      return s$tailLocal1;
    } else {
      var n$tailLocal1$tmp1 = ((n$tailLocal1 - 1) | 0);
      var s$tailLocal1$tmp1 = s$tailLocal1.hX();
      n$tailLocal1 = n$tailLocal1$tmp1;
      s$tailLocal1 = s$tailLocal1$tmp1;
    }
  }
}
/** @constructor */
function $c_s_reflect_ManifestFactory$PhantomManifest() {
  this.gS = null;
}
$p = $c_s_reflect_ManifestFactory$PhantomManifest.prototype = new $h_s_reflect_ManifestFactory$ClassTypeManifest();
$p.constructor = $c_s_reflect_ManifestFactory$PhantomManifest;
/** @constructor */
function $h_s_reflect_ManifestFactory$PhantomManifest() {
}
$h_s_reflect_ManifestFactory$PhantomManifest.prototype = $p;
$p.e = (function() {
  return this.gS;
});
$p.g = (function(that) {
  return (this === that);
});
$p.i = (function() {
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
$p.e = (function() {
  return $f_sc_View__toString__T(this);
});
/** @constructor */
function $c_s_reflect_ManifestFactory$ObjectManifest$() {
  this.gS = null;
  this.gS = "Object";
  $m_sci_Nil$();
}
$p = $c_s_reflect_ManifestFactory$ObjectManifest$.prototype = new $h_s_reflect_ManifestFactory$PhantomManifest();
$p.constructor = $c_s_reflect_ManifestFactory$ObjectManifest$;
/** @constructor */
function $h_s_reflect_ManifestFactory$ObjectManifest$() {
}
$h_s_reflect_ManifestFactory$ObjectManifest$.prototype = $p;
var $d_s_reflect_ManifestFactory$ObjectManifest$ = new $TypeData().i($c_s_reflect_ManifestFactory$ObjectManifest$, "scala.reflect.ManifestFactory$ObjectManifest$", ({
  cD: 1,
  cE: 1,
  cC: 1,
  a: 1,
  cF: 1,
  cz: 1,
  b: 1,
  cA: 1,
  cB: 1
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
      if (o.hP($thiz)) {
        return $thiz.gI(o);
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
$p.z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.gI = (function(that) {
  return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.hP = (function(that) {
  return true;
});
$p.g = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().jU(this);
});
$p.e = (function() {
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
  $thiz.fd = underlying;
  return $thiz;
}
/** @constructor */
function $c_sc_SeqView$Id() {
  this.fd = null;
}
$p = $c_sc_SeqView$Id.prototype = new $h_sc_AbstractSeqView();
$p.constructor = $c_sc_SeqView$Id;
/** @constructor */
function $h_sc_SeqView$Id() {
}
$h_sc_SeqView$Id.prototype = $p;
$p.y = (function(idx) {
  return this.fd.y(idx);
});
$p.t = (function() {
  return this.fd.t();
});
$p.z = (function() {
  return this.fd.z();
});
/** @constructor */
function $c_sc_IndexedSeqView$Id(underlying) {
  this.fd = null;
  $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying);
}
$p = $c_sc_IndexedSeqView$Id.prototype = new $h_sc_SeqView$Id();
$p.constructor = $c_sc_IndexedSeqView$Id;
/** @constructor */
function $h_sc_IndexedSeqView$Id() {
}
$h_sc_IndexedSeqView$Id.prototype = $p;
$p.el = (function(len) {
  var x = this.t();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.I = (function() {
  return this.t();
});
$p.B = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this);
});
$p.eo = (function() {
  return "IndexedSeqView";
});
var $d_sc_IndexedSeqView$Id = new $TypeData().i($c_sc_IndexedSeqView$Id, "scala.collection.IndexedSeqView$Id", ({
  c1: 1,
  ca: 1,
  bW: 1,
  bX: 1,
  v: 1,
  d: 1,
  e: 1,
  r: 1,
  q: 1,
  p: 1,
  a: 1,
  ce: 1,
  t: 1,
  c9: 1,
  w: 1,
  c0: 1
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
  return ($is_sci_IndexedSeq(that) ? ($thiz.t() === that.t()) : true);
}
function $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    if (($thiz === o)) {
      return true;
    } else {
      var length = $thiz.t();
      var equal = (length === o.t());
      if (equal) {
        var index = 0;
        var a = $thiz.hO();
        var b = o.hO();
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
          equal = $m_sr_BoxesRunTime$().a($thiz.y(index), o.y(index));
          index = ((1 + index) | 0);
        }
        if (((index < length) && equal)) {
          var thisIt = $thiz.B().gB(index);
          var thatIt = o.B().gB(index);
          while ((equal && thisIt.v())) {
            equal = $m_sr_BoxesRunTime$().a(thisIt.r(), thatIt.r());
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
  this.gc = null;
  this.gc = array;
}
$p = $c_sjsr_WrappedVarArgs.prototype = new $h_O();
$p.constructor = $c_sjsr_WrappedVarArgs;
/** @constructor */
function $h_sjsr_WrappedVarArgs() {
}
$h_sjsr_WrappedVarArgs.prototype = $p;
$p.hP = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.gI = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.hO = (function() {
  return $m_sci_IndexedSeqDefaults$().ii;
});
$p.B = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.el = (function(len) {
  var x = this.t();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.I = (function() {
  return this.t();
});
$p.g = (function(o) {
  return $f_sc_Seq__equals__O__Z(this, o);
});
$p.i = (function() {
  return $m_s_util_hashing_MurmurHash3$().jU(this);
});
$p.e = (function() {
  return $f_sc_Iterable__toString__T(this);
});
$p.z = (function() {
  return $f_sc_SeqOps__isEmpty__Z(this);
});
$p.fN = (function(f) {
  $f_sc_IterableOnceOps__foreach__F1__V(this, f);
});
$p.hL = (function(b, start, sep, end) {
  return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end);
});
$p.t = (function() {
  return (this.gc.length | 0);
});
$p.y = (function(idx) {
  return this.gc[idx];
});
$p.f7 = (function() {
  return "WrappedVarArgs";
});
$p.s = (function(v1) {
  return this.y((v1 | 0));
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
  I: 1,
  k: 1,
  u: 1,
  t: 1,
  b: 1,
  l: 1,
  K: 1,
  J: 1,
  w: 1,
  o: 1,
  ax: 1,
  L: 1,
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
$p.el = (function(len) {
  var x = this.ac.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.I = (function() {
  return this.ac.b.length;
});
$p.eo = (function() {
  return "IndexedSeq";
});
$p.hP = (function(that) {
  return $f_sci_IndexedSeq__canEqual__O__Z(this, that);
});
$p.gI = (function(o) {
  return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o);
});
$p.f7 = (function() {
  return "ArraySeq";
});
$p.hO = (function() {
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
$p.el = (function(len) {
  var x = this.S.b.length;
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.I = (function() {
  return this.S.b.length;
});
$p.eo = (function() {
  return "IndexedSeq";
});
$p.f7 = (function() {
  return "ArraySeq";
});
$p.g = (function(other) {
  if ((other instanceof $c_scm_ArraySeq)) {
    if ((this.S.b.length !== other.S.b.length)) {
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
  this.ac = null;
  this.ac = unsafeArray;
}
$p = $c_sci_ArraySeq$ofRef.prototype = new $h_sci_ArraySeq();
$p.constructor = $c_sci_ArraySeq$ofRef;
/** @constructor */
function $h_sci_ArraySeq$ofRef() {
}
$h_sci_ArraySeq$ofRef.prototype = $p;
$p.t = (function() {
  return this.ac.b.length;
});
$p.y = (function(i) {
  return this.ac.b[i];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.jo(this.ac, this$1.eM);
});
$p.g = (function(that) {
  return ((that instanceof $c_sci_ArraySeq$ofRef) ? $m_s_Array$().jq(this.ac, that.ac) : $f_sc_Seq__equals__O__Z(this, that));
});
$p.B = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.ac);
});
$p.s = (function(v1) {
  return this.y((v1 | 0));
});
function $isArrayOf_sci_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aw)));
}
var $d_sci_ArraySeq$ofRef = new $TypeData().i($c_sci_ArraySeq$ofRef, "scala.collection.immutable.ArraySeq$ofRef", ({
  aw: 1,
  cg: 1,
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
  I: 1,
  K: 1,
  J: 1,
  w: 1,
  o: 1,
  ax: 1,
  D: 1,
  B: 1,
  C: 1,
  L: 1,
  bZ: 1,
  a: 1
}));
function $p_sci_List__loop$2__I__I__sci_List__I($thiz, len$1, i, xs) {
  var xs$tailLocal1 = xs;
  var i$tailLocal1 = i;
  while (true) {
    return ((i$tailLocal1 === len$1) ? (xs$tailLocal1.z() ? 0 : 1) : (xs$tailLocal1.z() ? (-1) : xs$tailLocal1.g8()));
  }
}
function $p_sci_List__listEq$1__sci_List__sci_List__Z($thiz, a, b) {
  var b$tailLocal1 = b;
  var a$tailLocal1 = a;
  while (true) {
    if ((a$tailLocal1 === b$tailLocal1)) {
      return true;
    } else {
      var aEmpty = a$tailLocal1.z();
      var bEmpty = b$tailLocal1.z();
      if ((!(aEmpty || bEmpty))) {
        a$tailLocal1.gD();
      }
      if (false) {
        a$tailLocal1.g8();
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
$p.y = (function(n) {
  return $f_sc_LinearSeqOps__apply__I__O(this, n);
});
$p.gI = (function(that) {
  return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that);
});
$p.eo = (function() {
  return "LinearSeq";
});
$p.z = (function() {
  return (this === $m_sci_Nil$());
});
$p.fN = (function(f) {
  var these = this;
  while ((!these.z())) {
    f.s(these.gD());
    these.g8();
  }
});
$p.t = (function() {
  var these = this;
  var len = 0;
  while ((!these.z())) {
    len = ((1 + len) | 0);
    these.g8();
  }
  return len;
});
$p.el = (function(len) {
  return ((len < 0) ? 1 : $p_sci_List__loop$2__I__I__sci_List__I(this, len, 0, this));
});
$p.f7 = (function() {
  return "List";
});
$p.g = (function(o) {
  return ((o instanceof $c_sci_List) ? $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, o) : $f_sc_Seq__equals__O__Z(this, o));
});
$p.kz = (function(n) {
  return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this);
});
$p.s = (function(v1) {
  return $f_sc_LinearSeqOps__apply__I__O(this, (v1 | 0));
});
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.ay)));
}
/** @constructor */
function $c_scm_ArraySeq$ofRef(array) {
  this.S = null;
  this.S = array;
}
$p = $c_scm_ArraySeq$ofRef.prototype = new $h_scm_ArraySeq();
$p.constructor = $c_scm_ArraySeq$ofRef;
/** @constructor */
function $h_scm_ArraySeq$ofRef() {
}
$h_scm_ArraySeq$ofRef.prototype = $p;
$p.t = (function() {
  return this.S.b.length;
});
$p.y = (function(index) {
  return this.S.b[index];
});
$p.i = (function() {
  var this$1 = $m_s_util_hashing_MurmurHash3$();
  return this$1.jo(this.S, this$1.eM);
});
$p.g = (function(that) {
  return ((that instanceof $c_scm_ArraySeq$ofRef) ? $m_s_Array$().jq(this.S, that.S) : $c_scm_ArraySeq.prototype.g.call(this, that));
});
$p.B = (function() {
  return new $c_sc_ArrayOps$ArrayIterator(this.S);
});
$p.s = (function(v1) {
  return this.y((v1 | 0));
});
function $isArrayOf_scm_ArraySeq$ofRef(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.D === depth)) && obj.$classData.B.n.aA)));
}
var $d_scm_ArraySeq$ofRef = new $TypeData().i($c_scm_ArraySeq$ofRef, "scala.collection.mutable.ArraySeq$ofRef", ({
  aA: 1,
  az: 1,
  M: 1,
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
  Q: 1,
  x: 1,
  N: 1,
  S: 1,
  R: 1,
  w: 1,
  o: 1,
  P: 1,
  O: 1,
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
$p.o = (function() {
  return new $c_s_Product$$anon$1(this);
});
$p.l = (function() {
  return 0;
});
$p.m = (function() {
  return "Nil";
});
$p.h = (function(n) {
  throw new $c_jl_IndexOutOfBoundsException(("" + n));
});
$p.gD = (function() {
  throw new $c_ju_NoSuchElementException("head of empty list");
});
$p.g8 = (function() {
  throw new $c_jl_UnsupportedOperationException("tail of empty list");
});
$p.I = (function() {
  return 0;
});
$p.B = (function() {
  return $m_sc_Iterator$().aa;
});
$p.hT = (function() {
  this.gD();
});
$p.hX = (function() {
  this.g8();
});
var $d_sci_Nil$ = new $TypeData().i($c_sci_Nil$, "scala.collection.immutable.Nil$", ({
  cm: 1,
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
  I: 1,
  K: 1,
  J: 1,
  c7: 1,
  H: 1,
  ck: 1,
  cj: 1,
  B: 1,
  C: 1,
  cb: 1,
  L: 1,
  a: 1,
  cf: 1,
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
  $thiz.a2 = underlying;
  return $thiz;
}
function $ct_scm_StringBuilder__($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, new $c_jl_StringBuilder());
  return $thiz;
}
/** @constructor */
function $c_scm_StringBuilder() {
  this.a2 = null;
}
$p = $c_scm_StringBuilder.prototype = new $h_scm_AbstractSeq();
$p.constructor = $c_scm_StringBuilder;
/** @constructor */
function $h_scm_StringBuilder() {
}
$h_scm_StringBuilder.prototype = $p;
$p.B = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.el = (function(len) {
  var x = this.a2.t();
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.eo = (function() {
  return "IndexedSeq";
});
$p.t = (function() {
  return this.a2.t();
});
$p.I = (function() {
  return this.a2.t();
});
$p.e = (function() {
  return this.a2.C;
});
$p.z = (function() {
  return (this.a2.t() === 0);
});
$p.y = (function(i) {
  return $bC(this.a2.jp(i));
});
$p.s = (function(v1) {
  var i = (v1 | 0);
  return $bC(this.a2.jp(i));
});
var $d_scm_StringBuilder = new $TypeData().i($c_scm_StringBuilder, "scala.collection.mutable.StringBuilder", ({
  ct: 1,
  M: 1,
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
  Q: 1,
  x: 1,
  N: 1,
  S: 1,
  R: 1,
  aC: 1,
  aD: 1,
  aB: 1,
  cr: 1,
  w: 1,
  o: 1,
  P: 1,
  O: 1,
  F: 1,
  a: 1
}));
/** @constructor */
function $c_sjs_js_WrappedArray(array) {
  this.eL = null;
  this.eL = array;
}
$p = $c_sjs_js_WrappedArray.prototype = new $h_scm_AbstractBuffer();
$p.constructor = $c_sjs_js_WrappedArray;
/** @constructor */
function $h_sjs_js_WrappedArray() {
}
$h_sjs_js_WrappedArray.prototype = $p;
$p.eo = (function() {
  return "IndexedSeq";
});
$p.B = (function() {
  return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(new $c_sc_IndexedSeqView$Id(this));
});
$p.el = (function(len) {
  var x = (this.eL.length | 0);
  return ((x === len) ? 0 : ((x < len) ? (-1) : 1));
});
$p.y = (function(index) {
  return this.eL[index];
});
$p.t = (function() {
  return (this.eL.length | 0);
});
$p.I = (function() {
  return (this.eL.length | 0);
});
$p.f7 = (function() {
  return "WrappedArray";
});
$p.s = (function(v1) {
  var index = (v1 | 0);
  return this.eL[index];
});
var $d_sjs_js_WrappedArray = new $TypeData().i($c_sjs_js_WrappedArray, "scala.scalajs.js.WrappedArray", ({
  d7: 1,
  cn: 1,
  M: 1,
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
  Q: 1,
  x: 1,
  N: 1,
  S: 1,
  R: 1,
  aC: 1,
  aD: 1,
  cs: 1,
  cp: 1,
  C: 1,
  B: 1,
  O: 1,
  w: 1,
  o: 1,
  P: 1,
  cq: 1,
  aB: 1,
  a: 1
}));
$s_Lsketches_rooms_gridceiling_roomsGridCeiling__main__AT__V(new ($d_T.r().C)([]));
